import { getPostBySlug } from "app/api/blog/slug";
import markdownToHtml from "app/api/blog/markdownToHtml";

type Props = { params: { contents: string } };

export default async function Contents ({ params: { contents } }: Props) {
  const post = getPostBySlug(contents, [ "title", "date", "content" ]);
  const mth = await markdownToHtml(post.content);
  console.log(post);
  console.log(mth);
  return (
    <div>
      <p className=" block ">{post.date}</p>
      <div className=" m-32 h-auto w-auto items-center justify-center flex ">
        <div dangerouslySetInnerHTML={{__html: mth}}></div>
      </div>
    </div>
  );
};
