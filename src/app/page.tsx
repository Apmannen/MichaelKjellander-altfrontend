import { MainShell } from '@/components/shells/MainShell/MainShell';
import { apiService } from '@/modules/apiService';

export default async function Home() {
  const postsResponse = await apiService.getPosts();

  return (
    <MainShell>
      Välkommen!
      {postsResponse.items.map((post, index) => (
        <div>Post: {post.title}</div>
      ))}
    </MainShell>
  );
}
