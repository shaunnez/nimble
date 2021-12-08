import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <div>
        <Link href="/" passHref={true}>
          <a>
            <Image src="/logo.svg" alt="Nimble Logo" layout={"fill"} />
          </a>
        </Link>
      </div>

      {router.route === "/contact" ? (
        <>
          <Link href="/" passHref={true}>
            <a className="desktopBackBtn">
              <Image src="/arrow.svg" alt="Back arrow" width={57} height={24} />{" "}
              <span>Back</span>
            </a>
          </Link>
          <Link href="/" passHref={true}>
            <a className="mobileBackBtn">
              <Image src="/close.svg" alt="Back arrow" width={17} height={17} />{" "}
            </a>
          </Link>
        </>
      ) : (
        <Link href="/contact" passHref={true}>
          <button>Tell us about your project</button>
        </Link>
      )}
    </header>
  );
}
