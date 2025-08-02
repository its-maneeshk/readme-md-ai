import { askOpenAI } from '../../services/openaiService.js';
import chalk from 'chalk';

/**
 * Generates a complete AI-powered README using smart fallback and rich prompting.
 * Automatically includes sections like Features, Usage, Installation, etc.
 * Falls back to gpt-3.5-turbo if the preferred model fails.
 */
export async function generateAIReadme(metadata, apiKey, model = 'gpt-4') {
  const {
    name = 'My Project',
    description = 'A cool open-source project.',
    version = '1.0.0',
    author = 'Anonymous',
    license = 'MIT',
    dependencies = {},
  } = metadata;

  const smartReadmePrompt = `
You are a senior open-source developer assistant.
Generate a complete, professional, markdown-ready README.md file for the following project.

Use the provided metadata. If some information is missing, use smart assumptions or defaults.

# Project Metadata
- Name: ${name}
- Description: ${description}
- Version: ${version}
- Author: ${author}
- License: ${license}
- Dependencies: ${Object.keys(dependencies).join(', ') || 'None'}

# Guidelines
- Start with a catchy title and emoji.
- Write an enthusiastic intro paragraph explaining what the project does and why it's useful.
- Add shields.io badges (version, license).
- Add a **Features** section based on description or stack.
- Add **Installation** and **Usage** sections.
- If it may have a visual or CLI interface, add a **Screenshots** or **Demo** section.
- Add **API Reference** only if it seems relevant.
- Add **Contributing**, **License**, and **Acknowledgements** sections.
- Ensure markdown is clean and well-formatted.
`;

  let fullReadme;

  try {
    fullReadme = await askOpenAI(smartReadmePrompt, apiKey, model);
  } catch (error) {
    console.error(chalk.red(`⚠️ ${model} failed:`), error.message);

    const fallbackModel = 'gpt-3.5-turbo';
    if (model !== fallbackModel) {
      console.log(chalk.yellow(`👉 Falling back to "${fallbackModel}"...`));
      try {
        fullReadme = await askOpenAI(smartReadmePrompt, apiKey, fallbackModel);
      } catch (fallbackError) {
        console.error(chalk.red(`❌ Fallback model (${fallbackModel}) also failed:`), fallbackError.message);
        throw fallbackError;
      }
    } else {
      throw error;
    }
  }

  return fullReadme;
}
