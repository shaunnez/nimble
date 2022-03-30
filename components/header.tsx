import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className={"headerContent"}>
        <div>
          <Link href="/" passHref={true}>
            <a>
              <Image src="/logo.svg" alt="Nimble Logo" layout={"fill"} />
            </a>
          </Link>
        </div>

        <div className={"mainLink"}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // @ts-ignore
              setTimeout(() => {
                window.scroll({
                  top: document.getElementById("footer").offsetTop,
                  behavior: "smooth", // 👈
                });
              }, 0);
              setTimeout(() => {
                // @ts-ignore
                document.querySelector('input[name="projectSize"]').focus();
              }, 1000);
            }}
          >
            Tell us about your project
          </a>
        </div>
      </div>
    </header>
  );
}
