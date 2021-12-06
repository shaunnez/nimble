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
        <Link href="/contact" passHref={true}>
          <a>
            <Image src="/arrow.svg" alt="Back arrow" width={57} height={24} />{" "}
            <span>Back</span>
          </a>
        </Link>
      ) : (
        <Link href="/contact" passHref={true}>
          <button>Tell us about your project</button>
        </Link>
      )}
    </header>
  );
}
