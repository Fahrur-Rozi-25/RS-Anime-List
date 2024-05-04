import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }: any) => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="text-xl font-extrabold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-base text-sm underline hover:text-indigo-500 transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
