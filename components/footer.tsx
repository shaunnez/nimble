import Image from "next/image";

interface FooterProps {
  footerContent: any;
}

export default function Footer({ footerContent }: any) {
  return (
    <footer>
      <div>{footerContent.copy}</div>
      {footerContent.links.map((link) => (
        <div dangerouslySetInnerHTML={{ __html: link.html }} />
      ))}
    </footer>
  );
}
