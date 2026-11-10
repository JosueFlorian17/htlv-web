import ForumPostClient from './ForumPostClient';

export async function generateStaticParams() {
  return [
    { id: '101' },
    { id: '102' },
    { id: '103' },
    { id: '104' },
  ];
}

export default async function ForumPostDetailPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return <ForumPostClient id={id} />;
}
