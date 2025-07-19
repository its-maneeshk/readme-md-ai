import { askOpenAI } from '../../services/openaiService.js';
import chalk from 'chalk';

/**
 * Generates an AI-powered README intro and combines with structured sections.
 * Falls back to gpt-3.5-turbo if the preferred model fails.
 */
export async function generateAIReadme(metadata, apiKey, model = 'gpt-4') {
  const {
    name,
    description,
    version,
    author,
    license,
    dependencies = {},
  } = metadata;

  const aiIntroPrompt = `
You are a helpful AI developer assistant.
Generate a professional, enthusiastic project introduction paragraph for the following project:
- Name: ${name}
- Description: ${description}
- Version: ${version}
- Author: ${author}
- Tech stack: ${Object.keys(dependencies).join(', ')}

Keep it concise, friendly, and markdown-ready.
`;

  let aiIntro;
  try {
    aiIntro = await askOpenAI(aiIntroPrompt, apiKey, model);
  } catch (error) {
    console.error(chalk.red(`⚠️ ${model} failed:`), error.message);

    const fallbackModel = 'gpt-3.5-turbo';
    if (model !== fallbackModel) {
      console.log(chalk.yellow(`👉 Falling back to "${fallbackModel}"...`));
      try {
        aiIntro = await askOpenAI(aiIntroPrompt, apiKey, fallbackModel);
      } catch (fallbackError) {
        console.error(chalk.red(`❌ Fallback model (${fallbackModel}) also failed:`), fallbackError.message);
        throw fallbackError;
      }
    } else {
      throw error;
    }
  }

  return `# ${name || 'Project Title'}

${aiIntro}

## 📦 Version

\`${version || '1.0.0'}\`

## 👤 Author

${author || 'Anonymous'}

## 🧾 License

Licensed under the ${license || 'MIT'} License.
`;
}
