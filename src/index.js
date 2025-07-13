import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import chalk from 'chalk';
import { analyzeProject } from './analyzer/projectAnalyzer.js';
import { generateReadmeContent } from './generator/readmeGenerator.js';

/**
 * Generate README.md based on project metadata and selected template
 */
export default async function generateReadme(dir) {
  try {
    console.log(chalk.blue(`📁 Analyzing: ${dir}`));

    const metadata = analyzeProject(dir);

    // Ask user for README style
    const { template } = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Choose a README template:',
        choices: ['Minimal', 'Professional', 'Modern AI-Style'],
      },
    ]);

    if (template === 'Modern AI-Style') {
      console.log(chalk.yellow('⚠️ Note: The "Modern AI-Style" template is under active development and may change in future versions.'));
    }
    
    const content = generateReadmeContent(metadata, template);
    const outputPath = path.join(dir, 'README.md');
    fs.writeFileSync(outputPath, content, 'utf8');

    console.log(chalk.green(`✅ README.md generated at ${outputPath}`));
  } catch (error) {
    console.error(chalk.red('❌ Error:'), error.message);
  }
}
