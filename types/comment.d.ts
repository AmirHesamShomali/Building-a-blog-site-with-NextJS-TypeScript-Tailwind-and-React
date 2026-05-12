export type BlogComment = {
  id: string;
  content: string;
  articleId: string;
  author: string;
  createdAt: string;
};

export type BlogCommentuser=
{
  content:string;
  articleId:string
}
export type BlogCommentuserresponse = {
  id: string;
  content: string;
  articleId: string;
  author: string;
  userid:string;
  createdAt: string;
};
