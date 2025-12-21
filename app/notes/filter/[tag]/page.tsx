import NotesClient from '@/app/notes/filter/[...slug]/Notes.client';
// import { fetchNotes } from '@/lib/api';

import type { Metadata } from 'next';

interface PageProps {
  params: { tag: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  return {
    title: `Notes with tag "${params.tag}" | NoteHub`,
    description: `Filtered notes by tag: ${params.tag}`,
    openGraph: {
      title: `Notes with tag "${params.tag}" | NoteHub`,
      description: `Browse notes filtered by tag: ${params.tag}`,
    },
  };
}


interface Props {
  params: Promise<{ tag: string }>;
}

export default async function FilterPage({ params }: Props) {
  const { tag } = await params;

  // console.log('>>> Route tag =', tag); // DEBUG, має показати Work/Study/Ideas

  // const notesData =
  //   tag === 'all'
  //     ? await fetchNotes({ page: 1, perPage: 12 })
  //     : await fetchNotes({ page: 1, perPage: 12, tag });

  return <NotesClient tag={tag}  />;
}
