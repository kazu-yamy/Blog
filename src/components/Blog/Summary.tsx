import { getAllPosts } from "app/api/blog/slug";
import Link from "next/link";

export function Summary() {
  const allPosts = getAllPosts(["slug", "title", "description", "date", "tags"]);
  return (
    <div className=" m-5 ">
      {allPosts.map((post) => (
        <Link href={"/blog/" + post.slug} key={post.slug} className=" no-underline text-gray-900 ">
          <h1 className=" flex-1 p-5 font-bold  ">{post.title}</h1>
          <p>{post.description}</p>
          <p className=" mb-3 opacity-60 ">{post.date}</p>
        </Link>
      ))}
    </div>
  );
}
