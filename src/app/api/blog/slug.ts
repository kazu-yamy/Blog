import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Post = {
  slug: string;
  content: string;
  title: string;
  description: string;
  date: string;
};

const contentsdir: string = "./src/contents/";

export function getPostSlugs() {
  const dirs = fs.readdirSync(contentsdir, { withFileTypes: true });
  return dirs.filter((dir) => dir.isDirectory()).map(({ name }) => name);
}

export function getPostBySlug(slug: string, fields: string[]) {
  const fullPath = path.join(contentsdir, slug + "/", "index.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Post = {
    slug: "",
    content: "",
    title: "",
    description: "",
    date: "",
  };

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "title" || field === "date" || field === "description") {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slug = getPostSlugs();
  const posts = slug
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}
