import { getAllPosts } from "app/api/blog/slug";

export function Summary() {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);
  return (
    <div className=" m-5 ">
      {allPosts.map((post) => (
        <a href={"/blog/" + post.slug} key={post.slug}>
          <h2 className=" text-2xl flex-1 p-5 font-bold ">{post.title}</h2>
          <p className=" mb-3 opacity-60 ">{post.date}</p>
        </a>
      ))}
    </div>
  );
}
