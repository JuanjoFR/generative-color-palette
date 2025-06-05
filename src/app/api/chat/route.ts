// import { tools } from '@/ai/tools';
// import { openai } from '@ai-sdk/openai';
// import { streamText } from 'ai';

// export async function POST(request: Request) {
//   const { messages } = await request.json();

//   const result = streamText({
//     model: openai('gpt-4.1-nano'),
//     // system: `
//     //   You are a color palette assistant for a design app. You can use the \`generate-color-palette\` tool with these parameters:
//     //   - \`count\`: Number of colors (2-8, default: 5)
//     //   - \`minDistance\`: Minimum contrast between colors (0-100, default: 30)

//     //   STRICT RULES:
//     //   1. Always ask the user: "How many colors do you need (2-8) and how distinct should they be (0=similar, 100=very contrasting)?"
//     //     - If unspecified, use defaults (count=5, minDistance=30)

//     //   2. Output format:
//     //     - Show EXACT tool output (e.g., "#FF5733, #8A2BE2")
//     //     - Add one descriptive phrase (e.g., "High-contrast vibrant palette")

//     //   3. On error:
//     //     - Say: "Error generating colors. Want to adjust values and try again?"

//     //   4. NEVER:
//     //     - Suggest manual colors
//     //     - Discuss color theory (complementary/analogous schemes)
//     //     - Falsify color data

//     //   Example interaction:
//     //   User: "I need colors for a website header"
//     //   You: "Should I generate 3 contrasting colors (high minDistance) or 5 harmonious ones (low minDistance)?"
//     //   `,
//     system: 'You are a friendly assistant!',
//     messages,
//     maxSteps: 5,
//     tools,
//   });

//   console.log('Generated color palette:', result);
//   // ...existing code...
//   // To debug the actual output, you can do:
//   const text = await result.text;
//   console.log('Generated text:', text);
//   // ...existing code...

//   return result.toDataStreamResponse();
// }

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { tools } from '@/ai/tools';

export async function POST(request: Request) {
  const { messages } = await request.json();

  const result = streamText({
    model: openai('gpt-4.1-nano'),
    // system: 'You are a friendly assistant!',
    // system: `
    //   You are a friendly assistant who responds using tools.
    //   If you use a tool, do not repeat the data it returns.
    //   You may briefly explain before or after, but do not duplicate information.
    //   `,
    // system: `
    //   You are a color palette assistant for a design app. You can use the \`generate-color-palette\` tool with these parameters:
    //   - \`count\`: Number of colors (2-8, default: 5)
    //   - \`minDistance\`: Minimum contrast between colors (0-100, default: 30)

    //   STRICT RULES:
    //   1. Always ask the user: "How many colors do you need (2-8) and how distinct should they be (0=similar, 100=very contrasting)?"
    //     - If unspecified, use defaults (count=5, minDistance=30)

    //   2. Output format:
    //     - Show EXACT tool output (e.g., "#FF5733, #8A2BE2")
    //     - Add one descriptive phrase (e.g., "High-contrast vibrant palette")

    //   3. On error:
    //     - Say: "Error generating colors. Want to adjust values and try again?"

    //   4. NEVER:
    //     - Suggest manual colors
    //     - Discuss color theory (complementary/analogous schemes)
    //     - Falsify color data

    //   Example interaction:
    //   User: "I need colors for a website header"
    //   You: "Should I generate 3 contrasting colors (high minDistance) or 5 harmonious ones (low minDistance)?"
    //   `,
    system: `
      You are a friendly assistant who helps users create color palettes.

      When the color palette tool generates a structured array of colors, do NOT repeat or list the colors in your reply—the frontend will display them. Instead, provide a brief summary or description of the palette (e.g., "A vibrant, high-contrast selection") and let the user know you are available to help further.

      On error, say: "Error generating colors. Want to adjust values and try again?"

      NEVER suggest manual colors, discuss color theory, or falsify color data.
    `,
    messages,
    maxSteps: 5,
    tools,
  });

  return result.toDataStreamResponse();
}
