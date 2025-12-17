import Link from 'next/link';
import css from './not-found.module.css';

export const metadata = {
  title: 'NoteHub — Smart Notes Application',
  description:
    'NoteHub is a modern note-taking application built with Next.js. Create, organize, filter, and manage your notes efficiently.',
  openGraph: {
    title: 'NoteHub — Smart Notes Application',
    description:
      'Create, organize, and manage your notes easily with NoteHub — a modern note-taking app built with Next.js.',
    url: 'https://08-zustand-beta-brown.vercel.app',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub application preview',
      },
    ],
  },
};


function NotFound() {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
      <p>
        <Link className={css.btn_back_home} href="/app">Back home</Link>
      </p>
    </div>
  );
}

export default NotFound;
