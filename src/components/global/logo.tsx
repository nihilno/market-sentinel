import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/icons/logo.svg"
        alt="Market Sentinel"
        width={140}
        height={32}
        className="h-8 w-auto cursor-pointer select-none"
      />
    </Link>
  );
}

export default Logo;
