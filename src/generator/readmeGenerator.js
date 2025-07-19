import { generateMinimalReadme } from './templates/minimal.js';
import { generateProfessionalReadme } from './templates/professional.js';
import { generateAIReadme } from './templates/aiTemplate.js';

/**
 * Generates README content based on metadata and chosen template.
 */
export async function generateReadmeContent(metadata, template, dir, model, apiKey) {
  if (typeof template !== 'string') {
    throw new Error(`Template must be a string. Received: ${typeof template}`);
  }

  switch (template.trim()) {
    case 'Minimal':
      return Promise.resolve(generateMinimalReadme(metadata));

    case 'Professional':
      return Promise.resolve(generateProfessionalReadme(metadata, dir));

    case 'Modern AI-Style':
      return await generateAIReadme(metadata, apiKey, model);

    default:
      throw new Error(`❌ Unknown template type: "${template}"`);
  }
}
