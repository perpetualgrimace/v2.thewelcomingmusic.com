import loadIcon from "/helpers/loadIcon";

import SocialLink from "/components/common/SocialLink";

export default function SocialLinkList(props) {
  const { links, theme, wrapperClass, hideText } = props;
  return (
    <ul
      className={`social-link-list${
        wrapperClass ? ` ${wrapperClass}` : ""
      }`}
    >
      {links.map((link) => (
        <SocialLink
          href={link.href}
          Icon={loadIcon(link.icon)}
          theme={theme}
          hideText={hideText}
        >
          {link.label}
          {link?.smallText && (
            <span className="u-font-xs"> {link.smallText}</span>
          )}
        </SocialLink>
      ))}
    </ul>
  );
}
