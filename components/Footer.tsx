import { footerData } from "@/lib/siteData";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="section-spacing bg-charcoal p-4 p-md-5 box-shadow border-radius-top">
          <div className="row g-2 align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
              {footerData.copyright}
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <Link href="/" className="link-hover-line">
                {footerData.scrollToTopText}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-gradient"></div>
    </footer>
  );
}
