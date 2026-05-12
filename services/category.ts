import { Cattegory } from "@/types/category";

export const getCategoriesService = async (): Promise<Cattegory[]> => {
    const response = await fetch("http://localhost:4004/api/categories", {
        cache: 'force-cache',
        next: { revalidate: 300 }
    });
    const data = await response.json();
    return data as Cattegory[];
}

export const getCategoryByIdService = async (id: string): Promise<Cattegory> => {
    const response = await fetch(`http://localhost:4004/api/categories/${id}`, {
        cache: 'force-cache',
        next: { revalidate: 300 }
    });
    const data = await response.json();
    return data as Cattegory;
}