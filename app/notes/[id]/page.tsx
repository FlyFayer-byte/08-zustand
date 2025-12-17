import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
// import NoteDetailsClient from './NoteDetails.client';
import type { MetadataProps } from '@/types/note';

export async function generateMetadata({ params }: MetadataProps) {
  const note = await fetchNoteById(params.id);

  return {
    title: `${note.title} | NoteHub`,
    description: note.content.length > 120 ? note.content.slice(0, 120) + '...' : note.content,
    openGraph: {
      title: `${note.title} | NoteHub`,
      description: note.content.length > 120 ? note.content.slice(0, 120) + '...' : note.content,
      url: `https://08-zustand-beta-brown.vercel.app/notes/${params.id}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: note.title,
        },
      ],
    },
  };
}


type PageProps = { params: Promise<{ id: string }> };
export default async function NoteDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['note', id], queryFn: () => fetchNoteById(id) });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
    </HydrationBoundary>
  );
}
