/* eslint-disable no-console */
const readline = require('readline');
const archiver = require('archiver');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const buildZip = (name) => {
  const fileName = `${name.replace(' ', '')}-assessment.zip`;
  const output = fs.createWriteStream(path.join(__dirname, `../${fileName}`));

  const archive = archiver('zip', {
    zlib: { level: 9 },
  });

  output.on('close', () => {
    console.log(chalk.green(`${fileName} created. Please upload this zip using the instructions in README.md`));
  });

  archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
      console.log(chalk.yellow(err.message));
    } else {
      // throw error
      throw err;
    }
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);
  archive.glob('*', { cwd: path.join(__dirname, '../'), ignore: ['node_modules/**', '**/*.zip'] });
  archive.finalize();
};

rl.question('Enter your first name: ', (firstName) => {
  rl.question('Enter your last name: ', (lastName) => {
    console.log(chalk.blue('Zipping assessment...'));

    buildZip(firstName + lastName);

    rl.close();
  });
});
