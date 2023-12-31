import Link from "next/link";
import { useRouter } from "next/router";

import SocialLinks from "/data/socialLinks.json";
import MenuItems from "/data/siteNav.json";

import checkRoute from "/helpers/checkRoute";
import getCurrentYear from "/helpers/getCurrentYear";

import RetinaImg from "/components/common/RetinaImg";
import SocialLinkList from "/components/common/SocialLinkList";

export default function footerSection(props) {
  const currRoute = useRouter().pathname;

  return (
    <footer className="footer padded-section u-text-c">
      <p className="footer-title u-title u-mb-lg">
        Wow, this is really loud
      </p>

      <div className="footer-row">
        <div className="footer-email u-mb-xl">
          <h2 className="footer-heading">Booking, etc</h2>
          <p>
            <a
              className="footer-email-link u-font-lg"
              href="mailto:thewelcomingmusic@gmail.com"
            >
              thewelcomingmusic@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-socials u-mb-xl">
          <h2 className="footer-heading">All the links</h2>

          <SocialLinkList
            wrapperClass="footer-social-list"
            links={SocialLinks}
            theme="light"
            hideText={true}
          />
        </div>

        <RetinaImg
          className="footer-face u-mh-auto u-mb-md"
          file="vitor-loud"
        />
      </div>

      <nav className="footer-nav u-mb-lg">
        <ul className="footer-menu">
          {MenuItems.map((link) => (
            <li key={link?.label} className="footer-menu-item">
              <Link
                href={link?.route}
                className="footer-menu-link"
                aria-current={checkRoute(link?.route, currRoute)}
              >
                {link?.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="footer-colophon" role="contentinfo">
        © 2021-{getCurrentYear()} The Welcoming. Website designed & built
        by{" "}
        <a href="https://jamesferrell.me" target="_blank">
          James Ferrell
        </a>
      </p>

      <RetinaImg className="footer-bg" file="bg/footer" extension="jpg" />
    </footer>
  );
}
