import NotesClient from '@/app/notes/filter/[...slug]/Notes.client';
// import { fetchNotes } from '@/lib/api';

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
