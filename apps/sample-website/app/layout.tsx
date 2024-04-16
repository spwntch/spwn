import type { Metadata } from 'next';
import Shell from '../components/shell';
import ShellProvider from '../components/shell-provider';
import './global.css';

export const metadata: Metadata = {
  title: 'Spawntech Website Sample',
  description: 'Generated with pnpm dlx spawn-workpace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ShellProvider>
          <Shell>{children}</Shell>
        </ShellProvider>
      </body>
    </html>
  );
}
