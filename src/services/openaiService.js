import fetch from 'node-fetch';

export async function askOpenAI(metadata, apiKey, model = 'gpt-4') {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that writes professional README.md files.',
        },
        {
          role: 'user',
          content: `Generate a professional README.md for this project:\n\n${JSON.stringify(metadata, null, 2)}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`OpenAI API Error: ${errorData.error?.message || response.statusText}`);
  }

  const json = await response.json();
  return json.choices?.[0]?.message?.content?.trim() || 'Failed to generate README.';
}
