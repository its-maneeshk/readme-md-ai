import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';
import { analyzeProject } from './analyzer/projectAnalyzer.js';
import { generateReadmeContent } from './generator/readmeGenerator.js';
import { validateApiKey } from './utils/validateApiKey.js';

let apiKey = process.env.OPENAI_API_KEY;
if(!apiKey) {
    console.error(chalk.red("❌ Missing API key. Please set OPENAI_API_KEY in your environment."));
    process.exit(1);
}
console.log(chalk.green("✅ API key detected! Ready to make OpenAI requests."));

export default async function run({ dir, templateType, model }) {
    try {
        if (!fs.existsSync(dir)) {
            console.error(chalk.red(`❌ Directory does not exist: ${dir}`));
            return;
        }

        console.log(chalk.blue(`📁 Target Directory: ${dir}`));

        let metadata;
        try {
            const spinner = ora('Analyzing project...').start();
            metadata = analyzeProject(dir);
            spinner.succeed('✅ Project analysis complete');
        }
        catch (err) {
            console.error(chalk.red('❌ Failed to analyze project.'), err.message);
            return;
        }

        let template = templateType;
        try {
        if (!template) {
            const { selectedTemplate } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'selectedTemplate',
                    message: 'Choose a README template:',
                    choices: ['Minimal', 'Professional', 'Modern AI-Style'],
                },
            ]);
            template = selectedTemplate;
        }} 
        catch(err) {
            console.error(chalk.red('❌ Failed to get template input.'),err.message);
        }
        try{ 
          if (template === 'Modern AI-Style') {
            while (!validateApiKey(apiKey)) {
                const { inputKey } = await inquirer.prompt([
                    {
                        type: 'password',
                        name: 'inputKey',
                        message: 'Enter your OpenAI API key:',
                        mask: '*',
                    },
                ]);
                apiKey = inputKey;

                if (!validateApiKey(apiKey)) {
                    console.log(chalk.red('❌ Invalid OpenAI API Key. It must start with "sk-". Try again.'));
                }
            }
        }
    } 
    catch(err) {
        console.error(chalk.red('❌ Error while validating API key.'), err.message);
        return;
    }   

        const outputPath = path.join(dir, 'README.md');
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
        try{ 
            const content = await generateReadmeContent(metadata, template, dir, model, apiKey);
            fs.writeFileSync(outputPath, content, 'utf8');

            console.log(chalk.green('✅ README.md generated successfully!'));
            if (template === 'Modern AI-Style' && model === 'gpt-4') {
                console.log(chalk.gray('ℹ️ If GPT-4 was unavailable, GPT-3.5-Turbo was used as a fallback.'));
            }
            console.log(chalk.cyan(`📄 Location: ${outputPath}`));
            console.log(chalk.gray(`📚 Template: ${template}`));
        }
        catch(err){
            console.error(chalk.red('❌ Failed to generate or write README.md.'), err.message);
            return;
        }
    } catch (err) {
        console.error(chalk.red('❌ Error:'), err.stack || err.message);
        console.error(chalk.red(`❌ Both GPT-4 and GPT-3.5-Turbo failed.`));
        console.error(chalk.red(`💡 Please check your OpenAI billing or choose a different template (like Minimal or Professional).`));
    }
}
run({
  dir: process.cwd(),          // uses current folder
  templateType: null,          // lets it prompt you to select a template
  model: 'gpt-4'
});


