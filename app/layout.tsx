import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AndyAI News',
  description: 'Slide-first AI news web app starter',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
