'use client';

import css from './NoteDetails.module.css';
import type { Note } from '@/types/note';

export default function NoteDetailsClient({ note }: { note: Note }) {
  const formattedDate = new Date(note.createdAt).toLocaleString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{formattedDate}</p>
      </div>
    </div>
  );
}
