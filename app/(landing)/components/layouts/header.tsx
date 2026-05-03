import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="flex justify-between gap-10 container mx-auto py-2 px-5 ">
          <a href="#hero">       
            <Image src="/images/logo1.png" alt="takanesia logo" width={100} height={30}/>
          </a>
             <nav className="flex gap-24 text-lg py-5">
          <Link href="#hero">Home</Link>
          <Link href="#filosofi">Filosofi</Link>
          <Link href="#members">Member</Link>
        </nav>
            <div className="flex gap-10 py-5">
                <FiSearch size={24}/>
            </div>
        </div>
    </header>
  );
};

export default Header;