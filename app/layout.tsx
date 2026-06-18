import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Advance Finance | Fast Personal Loans $500 – $50,000',
  description:
    'Apply online in minutes. Get approved in 24 hours. Fast, transparent lending — personal loans, payday loans, home loans, and debt consolidation.',
  keywords: 'personal loans, payday loans, fast loans, online loans, advance finance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
