import { UIMessage } from 'ai';
import { BotIcon, UserIcon } from 'lucide-react';
import { Markdown } from './markdown';
import { cx } from 'class-variance-authority';
import { ColorPalette } from './color-palette';

export default function PreviewMessage({ id, role, parts }: UIMessage) {
  return (
    <div
      className={`animate-fade-in-up flex w-full flex-row gap-4 px-4 first-of-type:pt-20 md:w-[500px] md:px-0`}
    >
      <div className="flex size-[24px] shrink-0 flex-col items-center justify-center rounded-sm border p-1 text-zinc-500">
        {role === 'assistant' ? <BotIcon /> : <UserIcon />}
      </div>

      <div className="flex w-full flex-col gap-2">
        {parts?.map((part, index) => {
          const { type } = part;
          const key = `message-${id}-part-${index}`;

          if (type === 'text') {
            return (
              <div
                key={key}
                className="flex flex-col gap-4 text-zinc-800 dark:text-zinc-300"
              >
                <Markdown>{part.text}</Markdown>
              </div>
            );
          }

          if (type === 'tool-invocation') {
            const { toolInvocation } = part;
            const { toolName, toolCallId, state } = toolInvocation;

            if (state === 'call') {
              return (
                <div
                  key={toolCallId}
                  className={cx({
                    skeleton: ['getWeather'].includes(toolName),
                  })}
                >
                  {toolName === 'getColorPalette' ? (
                    <div>Loading color palette...</div>
                  ) : null}
                </div>
              );
            }

            if (state === 'result') {
              const { result } = toolInvocation;

              return (
                <div key={toolCallId}>
                  {toolName === 'getColorPalette' ? (
                    <ColorPalette {...result} />
                  ) : null}
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
}
