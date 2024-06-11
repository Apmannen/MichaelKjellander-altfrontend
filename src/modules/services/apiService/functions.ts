import { Category, Model, Post } from "@/modules/models/functions";

const BASE_URL = "https://new.michaelkjellander.se/api/blog";

type ApiResponse<T extends Model> = {
  items: T[];
};

export async function getCategories() : Promise<ApiResponse<Category>> {
	const response = await fetch(BASE_URL+"/categories");
  const postsResponse = await response.json() as ApiResponse<Category>;
  return postsResponse;
}

export async function getPosts() : Promise<ApiResponse<Post>> {
	const response = await fetch(BASE_URL+"/posts");
  const postsResponse = await response.json() as ApiResponse<Post>;
  return postsResponse;
}