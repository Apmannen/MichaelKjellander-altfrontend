import { Model, Post } from "@/models/functions";

const BASE_URL = "https://new.michaelkjellander.se/api/blog";

type ApiResponse<T extends Model> = {
  items: T[];
};

export async function getPosts() : Promise<ApiResponse<Post>> {
	const response = await fetch("https://new.michaelkjellander.se/api/blog/posts");
  const postsResponse = await response.json() as ApiResponse<Post>;
  return postsResponse;
}