import { Category } from "@/modules/models/functions";
import { apiService } from "@/modules/services/apiService";

type InitPageData = {
    categories: Category[];
};
export function getInitPageData() {
    apiService.getCategories();
}