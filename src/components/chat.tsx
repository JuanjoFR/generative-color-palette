'use client';

import { useChat } from '@ai-sdk/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Send } from 'lucide-react';
import { useScrollToBottom } from './use-scroll-to-bottom';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status } =
    useChat();
  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  return (
    <div className="bg-background flex h-dvh flex-row justify-center pb-4 md:pb-8">
      <div className="flex flex-col items-center justify-between gap-4">
        <div
          ref={messagesContainerRef}
          className="flex h-full w-dvw flex-col items-center gap-4 overflow-y-scroll"
        >
          <div className="mt-20 max-w-[500px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.content}
              </div>
            ))}
          </div>
          <div
            ref={messagesEndRef}
            className="min-h-[24px] min-w-[24px] shrink-0"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-[calc(100dvw-32px) relative flex w-full flex-row items-end gap-2 px-4 md:max-w-[500px] md:px-0"
        >
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1"
            disabled={status !== 'ready'}
          />
          <Button
            type="submit"
            size="icon"
            disabled={status !== 'ready' || !input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
