import logo from "@assets/logo.svg";
import { Button } from "@components/ui/button";
import { Menu, MessagesSquare } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex h-14 items-center">
      <div className="container flex w-full items-center">
        <Image
          src={logo}
          alt="Vutive logo"
          width={100}
          height={100}
          className="h-5 w-auto"
        />
        <nav className="ml-6 hidden md:block">
          <ul className="flex items-center gap-2">
            <li>
              <Button size="sm" variant="ghost">
                Home
              </Button>
            </li>
            <li>
              <Button size="sm" variant="ghost">
                About
              </Button>
            </li>
            <li>
              <Button size="sm" variant="ghost">
                Services
              </Button>
            </li>
            <li>
              <Button size="sm" variant="ghost">
                Portfolio
              </Button>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="">
            Book a meeting
            <MessagesSquare className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
