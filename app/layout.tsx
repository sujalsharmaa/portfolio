import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sujal Sharma - Cloud & DevOps Engineer',
  description: 'Portfolio of Sujal Sharma - Cloud & DevOps Engineer with expertise in Kubernetes, AWS, and Distributed Systems',
  keywords: 'Cloud Engineer, DevOps, Kubernetes, AWS, Distributed Systems',
  openGraph: {
    title: 'Sujal Sharma - Cloud & DevOps Engineer',
    description: 'Portfolio showcasing skills, projects, and experience',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
