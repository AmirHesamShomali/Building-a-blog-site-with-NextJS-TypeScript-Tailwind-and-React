import { Blog } from "@/types/blog";

export const getBlogsService = async () => {
    const res = await fetch("http://localhost:4004/api/articles", {
        cache: 'no-store'
    });
    const data = await res.json();
    return data as Blog[];
};

export const getBlogByIdService = async (id: string) => {
    const res = await fetch(`http://localhost:4004/api/articles/${id}`, {
        cache: 'no-store'
    });
    const data = await res.json();
    return data as Blog;
};

export const getBlogsByCategoryService = async (categoryId: string) => {
    const res = await fetch(`http://localhost:4004/api/articles?categoryId=${categoryId}`, {
        cache: 'no-store'
    });
    const data = await res.json();
    return data as Blog[];
};


