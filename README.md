# Password Generator


This is a simple command-line password generator built with Node.js. It allows users to generate random passwords with customizable lengths and the option to exclude specific characters.


## Features


- Generate multiple passwords at once.

- Specify the length of each password.

- Exclude specific characters from the generated passwords.

- Display the available characters for password generation.

- Help command to view usage instructions.


## Requirements


- Node.js (v12 or higher)


## Usage


To run the password generator, use the following command:


```bash
node index.js [options]
```

## Options
- `-n, --number <number>`: Specify the number of passwords to generate (default: 5).
- `-l, --length <number>`: Specify the length of each password (default: 30).
- `-ec, --excludeChars <chars>`: Specify characters to exclude from the generated passwords (enclose in quotes).
- `-s, --showChars`: Display the available characters for password generation.
- `-h, --help`: Display this help message.

## Examples

- Generate 10 passwords of default length (30):
   ```bash
   node index.js -n 10
   ```

- Generate 5 passwords of length 12:
   ```bash
   node index.js --number 5 -l 12
   ```

- Exclude specific characters (e.g., "abc"):
   ```bash
   node index.js --excludeChars "abc"
   ```

- Show available characters:
   ```bash
   node index.js --showChars
   ```

- Display help information:
   ```bash
   node index.js --help
   ```

## Code Explanation


- **Dependencies**: The script uses the built-in `crypto` module for generating random values.

- **Character Set**: The default character set includes uppercase letters, lowercase letters, digits, and special characters.

- **Password Generation**: The script generates passwords based on the specified length and number, ensuring that excluded characters are not included.

- **Help Functionality**: The script provides a help function that displays usage information and available options.

