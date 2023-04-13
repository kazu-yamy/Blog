import { getAllPosts, getPostBySlug } from "app/api/blog/slug";
import markdownToHtml from "app/api/blog/markdownToHtml";

type Props = { params: { contents: string } };

const Contents = ({ params: { contents } }: Props) => {
  const post = getPostBySlug(contents, ["slug", "title", "date", "content"]);
  console.log(contents);
  return (
    <div>hello</div>
  );
};


export default Contents;