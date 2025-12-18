import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import type { Metadata } from 'next';

import type { MetadataProps } from '@/types/note';

export async function generateMetadata({ params }:MetadataProps): Promise<Metadata> {
  const filter = params.slug?.[0] ?? 'all';

  const formattedFilter = filter.charAt(0).toUpperCase() + filter.slice(1);

  return {
    title: `${formattedFilter} notes | NoteHub`,
    description: `Browse ${filter} notes in NoteHub. Filter and manage your notes by category.`,
    openGraph: {
      title: `${formattedFilter} notes | NoteHub`,
      description: `View and manage ${filter} notes in the NoteHub application.`,
      url: `https://08-zustand-beta-brown.vercel.app/notes/filter/${filter}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: `${formattedFilter} notes`,
        },
      ],
    },
  };
}


type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function Notes({ params }: Props) {
  const resolvedParams = await params;

  const slug = resolvedParams?.slug?.[0] ?? 'all';
  const tag = slug === 'all' ? undefined : slug;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: '',
        tag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag ?? 'all'} key={tag ?? 'all'} />
    </HydrationBoundary>
  );
}
