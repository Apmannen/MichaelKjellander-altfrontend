import { Category, CategoryType, Model, Post } from '@/modules/models/functions';
import { category } from '@/modules/paths/pages';

const BASE_URL = 'https://new.michaelkjellander.se/api/blog';

type ApiResponse<T extends Model> = {
  items: T[];
};

export async function getCategoriesMap(): Promise<Map<CategoryType, Category>> {
  const response = await fetch(BASE_URL + '/categories');
  const apiResponse = (await response.json()) as ApiResponse<Category>;

  const map = new Map<CategoryType, Category>();
  for (let category of apiResponse.items) {
    map.set(category.typeString, category);
  }
  return map;
}

export async function getPosts(): Promise<ApiResponse<Post>> {
  const response = await fetch(BASE_URL + '/posts');
  const apiResponse = (await response.json()) as ApiResponse<Post>;
  return apiResponse;
}
