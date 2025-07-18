import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { analyzeProject } from './analyzer/projectAnalyzer.js';
import { generateReadmeContent } from './generator/readmeGenerator.js';

/**
 * Generate README.md based on project metadata and selected template
 */
export default async function generateReadme(dir) {
  try {
    const absDir = path.resolve(dir);

    // Check if directory exists
    if (!fs.existsSync(absDir)) {
      console.error(chalk.red(`❌ Directory does not exist: ${absDir}`));
      return;
    }

    console.log(chalk.blue(`📁 Target Directory: ${absDir}`));

    const spinner = ora('🔍 Analyzing project metadata...').start();
    const metadata = analyzeProject(absDir);
    spinner.succeed('✅ Project analysis complete');

    // Prompt user for template choice
    const { template } = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Choose a README template:',
        choices: ['Minimal', 'Professional', 'Modern AI-Style'],
      },
    ]);

    if (template === 'Modern AI-Style') {
      console.log(
        chalk.yellow(
          '⚠️ Note: The "Modern AI-Style" template is under active development and may change in future versions.'
        )
      );
    }

    const outputPath = path.join(absDir, 'README.md');

    // Confirm overwrite if README.md exists
    if (fs.existsSync(outputPath)) {
      const { overwrite } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'overwrite',
          message: 'README.md already exists. Overwrite?',
          default: false,
        },
      ]);
      if (!overwrite) {
        console.log(chalk.yellow('🚫 Aborted. README.md was not modified.'));
        return;
      }
    }

    const content = generateReadmeContent(metadata, template);
    fs.writeFileSync(outputPath, content, 'utf8');

    console.log(chalk.green(`✅ README.md generated successfully at:`));
    console.log(chalk.cyan(`📄 ${outputPath}`));
    console.log(chalk.gray(`📚 Template used: ${template}`));
  } catch (error) {
    console.error(chalk.red('❌ Unexpected Error:'), error.stack || error.message);
  }
}
