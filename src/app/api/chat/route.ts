import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { tools } from '@/ai/tools';
import { ZodError } from 'zod';

function findZodError(error: unknown): ZodError | undefined {
  let current: unknown = error;
  while (current) {
    if (current instanceof ZodError) return current;
    if (typeof current === 'object' && current !== null && 'cause' in current) {
      current = (current as { cause?: unknown }).cause;
    } else {
      break;
    }
  }
  return undefined;
}

export async function POST(request: Request) {
  const { messages } = await request.json();

  const result = streamText({
    model: openai('gpt-4.1-nano'),
    system: `
      You are a friendly assistant for generating color palettes.

      When the palette tool creates a color array, do not list the colors—just give a brief description and offer further help.

      If there's an error, say: "Error generating colors. Want to adjust values and try again?"

      Never suggest manual colors, discuss color theory, or make up color data.
    `,
    messages,
    maxSteps: 5,
    tools,
  });

  return result.toDataStreamResponse({
    getErrorMessage: (error) => {
      // Traverse the cause chain to find a ZodError
      const zodError = findZodError(error);
      if (zodError && zodError.issues.length > 0) {
        return zodError.issues[0].message;
      }

      // Fallback for other errors
      return 'An unknown error occurred.';
    },
  });
}
