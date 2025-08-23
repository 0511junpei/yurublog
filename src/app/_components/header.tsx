import Image from "next/image";
import Link from "next/link";

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
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                />
              </svg>
              Tech
            </div>
          </Link>
          <Link className="mr-10 hover:underline" href="/">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Money
            </div>
          </Link>
          <Link className="mr-10 hover:underline" href="/">
            <div className="flex flex-row">
              <svg
                className="size-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M6 12h4m-2 -2v4" />
                <line x1="15" y1="11" x2="15" y2="11.01" />
                <line x1="18" y1="13" x2="18" y2="13.01" />
              </svg>
              Game
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
