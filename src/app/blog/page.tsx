import { getAllPosts } from "app/api/slug";

export default async function BlogPage() {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);
  return (
    <div>
      {allPosts.map((post) => (
        <a href={post.slug} key={post.slug} className={" flex flex-col rounded-xl bg-clip-border "}>
          <h2 className=" text-2xl flex-1 p-5 font-bold ">{post.title}</h2>
          <p className=" mb-3 opacity-60 ">{post.date}</p>
        </a>
      ))}
    </div>
  );
}
