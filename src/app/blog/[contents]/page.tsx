import { getAllPosts, getPostBySlug } from "app/api/blog/slug";
import markdownToHtml from "app/api/blog/markdownToHtml";

type Props = { params: { contents: string } };

export default async function Contents ({ params: { contents } }: Props) {
  const post = getPostBySlug(contents, [ "title", "date", "content" ]);
  const mth = await markdownToHtml(post.content);
  console.log(post);
  return (
    <div>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{__html: mth}}></div>
    </div>
  );
};
