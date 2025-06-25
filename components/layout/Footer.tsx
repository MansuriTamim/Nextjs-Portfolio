import Link from 'next/link';
import Logo from './Logo';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 px-6 py-24 xl:flex-row xl:justify-evenly">
      <Logo isLogoFooter />

     
    </footer>
  );
};
export default Footer;
