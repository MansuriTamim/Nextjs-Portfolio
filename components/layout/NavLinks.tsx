import Link from 'next/link';
import Image from 'next/image';

const NavLinks = () => {
  return (
    <nav className="mt-16 flex flex-col gap-8 font-Silkscreen text-3xl md:mt-0 md:flex-row md:text-sm">
      {/* <Link className="py-4 md:py-0 md:hover:opacity-70" href="/">
        Projects
      </Link> */}

         <Link
        href="https://github.com/MansuriTamim"
        className="group flex items-center justify-center gap-x-1.5"
        target="_blank"
      >
        <Image
          src="/github.svg"
          alt="Link to Tamim's gitHub profile"
          width={25}
          height={25}
        />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          Github
        </span>
      </Link>
    </nav>
  );
};
export default NavLinks;
