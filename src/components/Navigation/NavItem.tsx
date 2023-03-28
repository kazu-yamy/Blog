import Link from "next/link";

export const NavItem = ({ text, href, active }: any) => {
  return (
    <Link href={href}>
      <div className=" text-inherit ">{text}</div>
    </Link>
  );
};
