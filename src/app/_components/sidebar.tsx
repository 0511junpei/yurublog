import Link from "next/link";
import Caption from "./caption";
import XIcon from "./Icon/XIcon";
import { GITHUB_ID, X_ID } from "@/lib/constants";
import GitHubIcon from "./Icon/GitHubIcon";
import { differenceInYears } from "date-fns";
import Image from "next/image";

const Sidebar = () => {
  const currentYear = new Date();
  const workingStartYear = new Date(2016, 4, 1);
  const experienceYear = differenceInYears(currentYear, workingStartYear);

  return (
    <>
      <Caption caption="プロフィール"></Caption>
      <div className="p-4">
        <div className="mb-4 text-center opacity-90">
          <Image
            src="/assets/avater/avater.png"
            alt="サイトロゴ"
            className="mx-auto object-cover rounded-full h-40 w-40 "
            width={256}
            height={256}
          />
        </div>
        <div className="text-center">
          <p className="text-2xl text-gray-800">ぺいぺい@ゆるブログ管理人</p>
          <p className="text-xl font-light text-gray-800">Webエンジニア</p>
          <p className="py-4 font-light text-gray-800 text-md">
            受託開発と自社開発、両方の世界で経験を積んで{`${experienceYear}`}
            年目。コードだけでなく、多方面との調整にも向き合い、「生かされ、殺され」を繰り返してきました。
            貧弱な語彙力から卒業すべく、このブログでアウトプットをしてみる。住宅ローンを組んだことから、
            制度を活用した賢い資産形成について常に考えています。
            FIREは目指さず、人生をイージーモードで楽しみたい。当ブログはNext.jsの学習がてら構築しました。
          </p>
        </div>
        <div className="flex items-center justify-center pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
          <XIcon id={X_ID}></XIcon>
          <GitHubIcon id={GITHUB_ID}></GitHubIcon>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
