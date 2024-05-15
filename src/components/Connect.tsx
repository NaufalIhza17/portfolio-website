import {
  DownloadIcon,
  GithubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedinIcon,
} from "~/icon";
import Link from "next/link";
import Image from "next/image";

export default function Connect() {
  return (
    <div className="border-t border-black/50 dark:border-white/50 flex items-center gap-16 py-5">
      <div className="relative">
        <p className="absolute top-1/2 left-1 transform -translate-y-1/2 text-lg text-black dark:text-white mix-blend-darken dark:mix-blend-normal font-light">
          CONNECT
        </p>
        <div className="bg-purple-main w-[64px] h-[30px]"></div>
      </div>
      <div className="flex gap-3 h-fit">
        <Link href={"https://github.com/NaufalIhza17"} passHref={true}>
          <Image src={GithubIcon} alt="" width={24} height={24} />
        </Link>
        <Link href={"mailto:nawfal17syahzada@gmail.com"} passHref={true}>
          <Image src={GmailIcon} alt="" width={24} height={24} />
        </Link>
        <Link href={"https://www.instagram.com/ihzasyahzada/"} passHref={true}>
          <Image src={InstagramIcon} alt="" width={24} height={24} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/ihzasyahzada/"}
          passHref={true}
        >
          <Image src={LinkedinIcon} alt="" width={24} height={24} />
        </Link>
        <Link
          href={"/download/CV_MochammadNaufalIhzaSyahzada.pdf"}
          passHref={true}
          download={true}
        >
          <Image src={DownloadIcon} alt="" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}
