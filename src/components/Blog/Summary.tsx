import { getAllPosts } from "app/api/blog/slug";
import Link from "next/link";

export function Summary() {
  const allPosts = getAllPosts(["slug", "title", "description", "date", "tags"]);
  return (
    <div className=" m-5 flex justify-center ">
      {allPosts.map((post) => (
        <Link href={"/blog/" + post.slug} key={post.slug} className=" m-3 justify-items-center ">
          <h1 className=" flex-1 p-5 font-bold text-center  ">{post.title}</h1>
          <p>{post.description}</p>
          <p className=" mb-3 opacity-60 text-right ">{post.date}</p>
        </Link>
      ))}
    </div>
  );
}
