'use client';

import { useChat } from '@ai-sdk/react';
import { useScrollToBottom } from './use-scroll-to-bottom';
import Overview from './overview';
import MultimodalInput from './multimodal-input';
import PreviewMessage from './preview-message';

export default function Chat() {
  const { messages, handleSubmit, input, setInput, append, stop, isLoading } =
    useChat({
      maxSteps: 5,
    });

  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  return (
    <div className="flex h-dvh flex-row justify-center bg-gradient-to-r from-blue-100/25 via-pink-100/25 to-yellow-100/25 pb-4 md:pb-8">
      <div className="flex flex-col items-center justify-between gap-4">
        <div
          ref={messagesContainerRef}
          className="flex h-full w-dvw flex-col items-center gap-4 overflow-y-scroll"
        >
          {messages.length === 0 && <Overview />}

          {messages.map((message) => (
            <PreviewMessage key={message.id} {...message} />
          ))}

          <div
            ref={messagesEndRef}
            className="min-h-[24px] min-w-[24px] shrink-0"
          />
        </div>

        <form className="max-w-[calc(100dvw-32px) relative flex w-full flex-row items-end gap-2 px-4 md:max-w-[500px] md:px-0">
          <MultimodalInput
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            stop={stop}
            messages={messages}
            append={append}
          />
        </form>
      </div>
    </div>
  );
}
