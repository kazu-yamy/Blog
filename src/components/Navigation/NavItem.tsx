import Link from "next/link";

export function NavItem({ text, href }: any) {
  return (
    <Link href={href}>
      <div className=" inline-block mt-0 text-teal-200 hover:text-white mr-4">
        {text}
      </div>
    </Link>
  );
}
