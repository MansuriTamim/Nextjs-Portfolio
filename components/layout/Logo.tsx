import Link from 'next/link';

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase ${
        isLogoFooter ? 'text-3xl' : 'text-2xl'
      }`}
    >
      <span className="text-valencia">T</span>
      <span className="text-oceangreen">a</span>
      <span className="text-cerise">m</span>
      <span className="text-roseofsharon">i</span>
        <span className="text-azureradiance">m</span>
      
    </Link>
  );
};
export default Logo;
