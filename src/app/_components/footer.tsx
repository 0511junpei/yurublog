import Container from "@/app/_components/container";
import { EXAMPLE_PATH, GITHUB_ID, X_ID } from "@/lib/constants";
import Link from "next/link";
import XIcon from "./Icon/XIcon";
import GitHubIcon from "./Icon/GitHubIcon";

export function Footer() {
  return (
    <footer className="text-white body-font">
      <div className="bg-green-500">
        {/* <div className="container px-5 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                Legal
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/privacy-policy" className=" hover:text-gray-800">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className=" hover:text-gray-800">
                    免責事項
                  </Link>
                </li>
                <li>
                  <a className=" hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div> */}
        <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col">
          <div className="m-auto">
            <Link href="/privacy-policy" className="hover:underline px-3">
              プライバシーポリシー
            </Link>
            <Link href="/disclaimer" className="hover:underline px-3">
              免責事項
            </Link>
            <Link
              href="https://forms.gle/LMuzKYkUB1CvhehV9"
              className=" hover:underline px-3"
            >
              お問い合わせ
            </Link>
          </div>
          <div className="">
            <p className="text-sm text-center ">
              © 2025 yurublog All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
