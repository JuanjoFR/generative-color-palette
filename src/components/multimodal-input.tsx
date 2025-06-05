'use client';

import { ChatRequestOptions, CreateMessage, Message } from 'ai';
import { useCallback, useEffect, useRef } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { ArrowUpIcon, CircleStopIcon } from 'lucide-react';
import useWindowSize from './use-window-size';

const suggestedActions = [
  {
    title: 'Help me book a flight',
    label: 'from San Francisco to London',
    action: 'Help me book a flight from San Francisco to London',
  },
  {
    title: 'What is the status',
    label: 'of flight BA142 flying tmrw?',
    action: 'What is the status of flight BA142 flying tmrw?',
  },
];

export default function MultimodalInput({
  input,
  setInput,
  isLoading,
  stop,
  messages,
  append,
  handleSubmit,
}: {
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  stop: () => void;
  messages: Array<Message>;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 0}px`;
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    adjustHeight();
  };

  const submitForm = useCallback(() => {
    handleSubmit();

    if (width && width > 768) {
      textareaRef.current?.focus();
    }
  }, [handleSubmit, width]);

  return (
    <div className="relative flex w-full flex-col gap-4">
      {messages.length === 0 && (
        <div className="mx-auto grid w-full gap-4 sm:grid-cols-2 md:max-w-[500px] md:px-0">
          {suggestedActions.map((suggestedAction, index) => (
            <div
              key={index}
              className={`${index > 1 ? 'hidden sm:block' : 'block'} animate-fade-in-up`}
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <button
                onClick={async () => {
                  append({
                    role: 'user',
                    content: suggestedAction.action,
                  });
                }}
                className="bg-muted/50 flex w-full flex-col rounded-lg border border-none border-zinc-200 p-3 text-left text-sm text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <span className="font-medium">{suggestedAction.title}</span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  {suggestedAction.label}
                </span>
              </button>
            </div>
          ))}
        </div>
      )}

      <Textarea
        ref={textareaRef}
        placeholder="Send a message..."
        value={input}
        onChange={handleInput}
        className="bg-muted resize-none overflow-hidden rounded-lg border-none text-base"
        // rows={3}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();

            if (isLoading) {
              // toast.error('Please wait for the model to finish its response!');
              console.log('TODO show toast error');
            } else {
              submitForm();
            }
          }
        }}
      />

      {isLoading ? (
        <Button
          className="absolute right-2 bottom-2 size-6 rounded-full"
          onClick={(event) => {
            event.preventDefault();
            stop();
          }}
        >
          <CircleStopIcon />
        </Button>
      ) : (
        <Button
          size="icon"
          className="absolute right-2 bottom-2 size-6 rounded-full"
          onClick={(event) => {
            event.preventDefault();
            submitForm();
          }}
          disabled={input.length === 0}
        >
          <ArrowUpIcon />
        </Button>
      )}
    </div>
  );
}
