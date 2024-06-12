import { Category, CategoryType, Model, Post } from '@/modules/models/functions';
import { category } from '@/modules/paths/pages';

const BASE_URL = 'https://new.michaelkjellander.se/api/blog';

type ApiResponse<T extends Model> = {
  items: T[];
};

export async function getCategoriesMap(): Promise<Map<CategoryType, Category>> {
  const apiResponse = await fetchApiResponse<Category>(BASE_URL + '/categories');

  const map = new Map<CategoryType, Category>();
  for (let category of apiResponse.items) {
    map.set(category.typeString, category);
  }
  return map;
}

export async function getPosts(): Promise<ApiResponse<Post>> {
  return await fetchApiResponse<Post>(BASE_URL + '/posts');
}

async function fetchApiResponse<T extends Model>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  return (await response.json()) as ApiResponse<T>;
}
