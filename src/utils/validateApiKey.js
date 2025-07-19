/**
 * Validates a basic format of the OpenAI API key.
 * Example: starts with "sk-" and has expected length.
 */
export function validateApiKey(apiKey) {
  return typeof apiKey === 'string' && apiKey.startsWith('sk-') && apiKey.length > 20;
}
