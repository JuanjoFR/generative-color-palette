import { MessageCircle, SquareDashed } from 'lucide-react';
import Link from 'next/link';

export default function Overview() {
  return (
    <div
      className="animate-fade-in-up mx-4 mt-20 max-w-[500px] md:mx-0"
      style={{ animationDelay: '0.5s' }}
    >
      <div className="bg-muted/50 flex flex-col gap-4 rounded-2xl border-none p-6 text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        <p className="flex flex-row items-center justify-center gap-4 text-zinc-900 dark:text-zinc-50">
          <SquareDashed />
          <span>+</span>
          <MessageCircle />
        </p>
        <p>
          This is an open source Chatbot template powered by the Google Gemini
          model built with Next.js and the AI SDK by Vercel. It uses the{' '}
          <code className="bg-muted-foreground/15 rounded-sm px-1.5 py-0.5">
            streamText
          </code>{' '}
          function in the server and the{' '}
          <code className="bg-muted-foreground/15 rounded-sm px-1.5 py-0.5">
            useChat
          </code>{' '}
          hook on the client to create a seamless chat experience.
        </p>
        <p>
          {' '}
          You can learn more about the AI SDK by visiting the{' '}
          <Link
            className="text-blue-500 dark:text-blue-400"
            href="https://sdk.vercel.ai/docs"
            target="_blank"
          >
            Docs
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
