import fs from "fs";

const getPostMetaData = () => {
  const folder = "./src/content/";
  const files = fs.readdirSync(folder);
  console.log(files);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

export default function BlogPage() {
  const postMetaData = getPostMetaData();
  const postPreViews: any = postMetaData.map((slug) => {
    <div className=" text-2xl font-bold ">{slug}</div>;
  });
  //console.log(postPreViews);
  return <div>{postPreViews}</div>;
}
