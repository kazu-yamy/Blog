import Link from "next/link";

export default function NavItem({ text, href }: any) {
  return (
    <Link href={href}>
      <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        {text}
      </div>
    </Link>
  );
}
