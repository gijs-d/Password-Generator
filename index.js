const crypto = require('crypto');
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|;:\'"<>?,./~ ';

const options = {
    length: 30,
    number: 5,
    excludedChars: '',
};

parseArgs(process.argv.slice(2));
if (options.excludedChars) {
    chars = chars.split().filter(char => !excludedChars.includes(char)).join('');
}
genPwds();

function printHelp() {
    console.log(`
Usage: node index.js [options]

Options:
  -n, --number <number>           Specify the number of passwords to generate (default: 5).
  -l, --length <number>           Specify the length of each password (default: 30).
  -ec, --excludeChars <chars>     Specify characters to exclude from the generated passwords.
  -s, --showChars                 Display the available characters for password generation.
  -h, --help                      Display this help message.

Examples:
  node index.js -n 10
  node index.js --number 5 -l 12
  node index.js --excludedChars "abc"
  node index.js --showChars
  node index.js --help
        `);
}

function parseArgs(args) {
    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '-l':
            case '--length':
                options.length = args[++i];
                break;
            case '-n':
            case '--number':
                options.number = args[++i];
                break;
            case '-ec':
            case '--excludeChars':
                options.excludedChars = args[++i];
                break;
            case '-s':
            case '--showChars':
                console.log(`Available characters: "${chars}"`);
                process.exit(0);
            case '-h':
            case '--help':
                printHelp();
                process.exit(0);
            default:
                console.log(`Error: Unsupported option "${args[i]}".`);
                printHelp();
                process.exit(1);
        }
    }
}

function genPwds() {
    const ids = [];
    while (options.number-- > 0) {
        ids.push(genPwd());
    }
    console.log(ids);
}

function genPwd() {
    let nr = '';
    while (nr.length < options.length) {
        let temp = crypto.getRandomValues(new Uint32Array(1))[0];
        while (temp > 0) {
            const char = temp % chars.length;
            temp = Math.floor(temp / chars.length);
            nr += chars[char];
        }
    }
    return nr.slice(0, options.length);
}

