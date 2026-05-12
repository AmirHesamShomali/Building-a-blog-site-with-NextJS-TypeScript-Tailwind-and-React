import { BlogComment, BlogCommentuser } from "@/types/comment";
export const getBlogCommentsService = async (blogId: string): Promise<BlogComment[]> => {
    const res = await fetch(`http://localhost:4004/api/articles/${blogId}/comments`, {
        cache: 'no-store'
    });
    const data = await res.json();
    return data as BlogComment[];
};
export const blogservice = async (comment: BlogCommentuser) => {
    const token = localStorage.getItem('token');
    const res = await fetch("http://localhost:4004/api/comments", {
        method: "POST",    headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        body: JSON.stringify(comment)
    })
    console.log(res.status);

    const data = await res.json();
    return data as BlogCommentuserresponse
}