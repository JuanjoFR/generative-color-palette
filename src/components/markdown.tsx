import Link from 'next/link';
import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { ReactNode } from 'react';
import type { Components } from 'react-markdown';

type CodeProps = {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

type ListProps = {
  children?: ReactNode;
} & React.OlHTMLAttributes<HTMLOListElement> &
  React.HTMLAttributes<HTMLUListElement>;

type ListItemProps = {
  children?: ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;

type StrongProps = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

type AnchorProps = {
  children?: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
  const components: Partial<Components> = {
    code: ({ inline, className, children, ...props }: CodeProps) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <pre
          {...props}
          className={`${className} mt-2 w-[80dvw] overflow-x-scroll rounded-lg bg-zinc-100 p-3 text-sm md:max-w-[500px] dark:bg-zinc-800`}
        >
          <code className={match[1]}>{children}</code>
        </pre>
      ) : (
        <code
          className={`${className} rounded-md bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800`}
          {...props}
        >
          {children}
        </code>
      );
    },
    ol: ({ children, ...props }: ListProps) => {
      return (
        <ol className="ml-4 list-outside list-decimal" {...props}>
          {children}
        </ol>
      );
    },
    li: ({ children, ...props }: ListItemProps) => {
      return (
        <li className="py-1" {...props}>
          {children}
        </li>
      );
    },
    ul: ({ children, ...props }: ListProps) => {
      return (
        <ul className="ml-4 list-outside list-decimal" {...props}>
          {children}
        </ul>
      );
    },
    strong: ({ children, ...props }: StrongProps) => {
      return (
        <span className="font-semibold" {...props}>
          {children}
        </span>
      );
    },
    a: ({ children, href, ...props }: AnchorProps) => {
      // Use <a> for external links, <Link> for internal (href starts with '/')
      if (href && href.startsWith('/')) {
        return (
          <Link
            href={href}
            className="text-blue-500 hover:underline"
            {...props}
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    },
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
};

export const Markdown = memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children
);
