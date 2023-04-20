import { Summary } from "components/Blog/Summary";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 id="home" className=" font-bold">home</h1>
      <div id="about">ABOUT</div>
      <h1 id="blog" className=" p-6 text-center font-bold ">記事一覧</h1>
      <Summary />
    </>
  );
}
