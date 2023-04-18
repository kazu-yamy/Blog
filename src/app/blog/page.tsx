import { Summary } from "components/Blog/Summary";

export default async function BlogPage() {
  return (
    <div>
      <h1 className={" p-6 text-center font-bold "}>記事一覧</h1>
      <Summary />
    </div>
  );
}
