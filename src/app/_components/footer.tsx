import Container from "@/app/_components/container";
import { EXAMPLE_PATH, GITHUB_ID, X_ID } from "@/lib/constants";
import Link from "next/link";
import XIcon from "./Icon/XIcon";
import GitHubIcon from "./Icon/GitHubIcon";

export function Footer() {
  return (
    <footer className="text-white body-font">
      <div className="bg-green-500">
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
