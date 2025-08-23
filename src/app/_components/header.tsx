import Image from "next/image";
import Link from "next/link";
import { Container } from "postcss";

const Header = () => {
  return (
    <header className="body-font bg-green-500 sticky top-0 flex flex-row">
      <div>
        <Link href="/">
          <Image
            src="/assets/logos/site-logo.png"
            alt="サイトロゴ"
            width={125}
            height={68}
          />
        </Link>
      </div>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl font-bold justify-center">
          <Link className="mr-10 hover:underline" href="/">
            Tech
          </Link>
          <Link className="mr-10 hover:underline" href="/">
            Money
          </Link>
          <Link className="mr-10 hover:underline" href="/">
            Game
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
