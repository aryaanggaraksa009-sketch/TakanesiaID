import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="#hero">
          <Image 
            src="/images/logo1.png" 
            alt="takanesia logo" 
            width={100} 
            height={30} 
            className="cursor-pointer"
          />
        </Link>
        <nav className="hidden md:flex gap-35 text-lg">
          <Link href="#hero">Home</Link>
          <Link href="#filosofi">Filosofi</Link>
          <Link href="#members">Member</Link>
        </nav>
        <div className="flex items-center gap-4 cursor-pointer">
          <FiSearch size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
