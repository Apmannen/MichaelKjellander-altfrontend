import { apiService } from "@/services/apiService";

export default async function Home() {
	const postsResponse = await apiService.getPosts();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			Välkommen!
			{postsResponse.items.map((post, index) => (
				<div>Post: {post.title}</div>
			))}
		</main>
	);
}
