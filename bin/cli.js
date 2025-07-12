#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const generateReadme = require('../src/index');

program
  .name('readme-md-ai')
  .description('Generate a professional README.md file from project metadata')
  .version('1.0.0')
  .option('-d, --dir <path>', 'Target project directory', '.');

program.parse();
const options = program.opts();

const targetDir = path.resolve(process.cwd(), options.dir);
generateReadme(targetDir);
