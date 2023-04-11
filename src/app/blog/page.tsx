import fs from "fs";

function getPostMetaData() {
  const folder = "./src/content/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
}

export default function BlogPage() {
  const postMetaData = getPostMetaData();
  const postPreViews: any = postMetaData.map((slug) => (
    <div key={slug} className=" text-2xl font-bold ">
      {slug}
    </div>
  ));
  return <div>{postPreViews}</div>;
}
