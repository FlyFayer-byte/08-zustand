import css from './CreateNote.module.css';
import NoteForm  from '@/components/NoteForm/NoteForm';
import { Metadata } from 'next';

const title = 'Create new note';
const description = 'Create new note';
const url = 'https://08-zustand-iwncafkdx-flyfayers-projects.vercel.app/notes/action/create';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    images: [
      {
        url: 'https:/',
        width: 1200,
        height: 630,
        alt: 'Create new note',
      },
    ],
  },
};


export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
        
      </div>
    </main>
  );
}