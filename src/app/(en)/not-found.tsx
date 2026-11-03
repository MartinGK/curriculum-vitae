import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 sm:px-6">
      <p className="font-mono text-sm text-ink-3">404</p>
      <h1 className="mt-2 text-5xl font-extrabold tracking-[-0.03em]">This page doesn&apos;t exist.</h1>
      <Link href="/" className="mt-6 text-accent-ink underline hover:text-accent">
        Back to Martin Gainza&apos;s CV
      </Link>
    </main>
  );
}
