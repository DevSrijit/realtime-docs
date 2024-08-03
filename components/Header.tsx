import { Link } from "lucide-react";
import React from "react";
import Image from "next/image";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header">
      <Link href="/" className="md:flex-1">
        <Image
          src="/assests/icons/logo.svg"
          alt="LiveDocs Logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assests/icons/logo-icon.svg"
          alt="LiveDocs Logo"
          width={32}
          height={32}
          className="mr-2 md:hiddenk"
        />
      </Link>
    </div>
  );
};

export default Header;
