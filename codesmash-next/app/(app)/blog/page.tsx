import { fetchPosts } from '@/lib/payload-api';
import { Highlights } from '@/components/blog/Highlights';

export const metadata = {
  title: 'Blog | CODESMASH',
  description: 'Read our latest articles and updates.',
};

export default function Home() {
  return (
    <div>
      <Highlights />
      
    </div>
  );
}