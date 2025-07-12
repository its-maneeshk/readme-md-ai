const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { analyzeProject } = require('./analyzer/projectAnalyzer');
const { generateReadmeContent } = require('./generator/readmeGenerator');

function generateReadme(dir) {
  try {
    console.log(chalk.blue(`📁 Analyzing: ${dir}`));

    const metadata = analyzeProject(dir);
    const content = generateReadmeContent(metadata);

    const outputPath = path.join(dir, 'README.md');
    fs.writeFileSync(outputPath, content);

    console.log(chalk.green(`✅ README.md generated at ${outputPath}`));
  } catch (error) {
    console.error(chalk.red('❌ Error:'), error.message);
  }
}

module.exports = generateReadme;
