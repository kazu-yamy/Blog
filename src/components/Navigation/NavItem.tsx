import Link from "next/link";

export function NavItem({ text, id }: any) {
  return (
    <Link href={id}>
      <div className=" inline-block mt-0 text-teal-200 hover:text-white mr-4">
        {text}
      </div>
    </Link>
  );
}
