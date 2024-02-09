// 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
import OpenAI from 'openai';

// Replace 'Your API Key' with your actual OpenAI API key
const apiKey = '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';

const openai = new OpenAI({ apiKey });

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "فسر سورة الكهف"},
          ],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
