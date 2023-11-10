import { useCallback, useRef, useState } from "react";

import CrossIcon from "/components/icons/CrossIcon.svg";
import MoreIcon from "/components/icons/MoreIcon.svg";
import SocialLink from "/components/common/SocialLink";

export default function SocialPopup(props) {
  const { theme, children } = props;
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const popupOpenButtonRef = useRef(null);
  const popupCloseButtonRef = useRef(null);

  const openPopup = useCallback(() => {
    setIsPopupVisible(true);
    popupCloseButtonRef.current.focus();
  }, [isPopupVisible]);

  const closePopup = useCallback(() => {
    setIsPopupVisible(false);
    popupOpenButtonRef.current.focus();
  }, [isPopupVisible]);

  return (
    <div>
      <li className="social-item">
        <button
          className="social-link light-theme"
          onClick={openPopup}
          onFocus={closePopup}
          ref={popupOpenButtonRef}
          aria-pressed={isPopupVisible}
          aria-haspopup
        >
          <MoreIcon /> Listen on something else
        </button>
      </li>

      <div
        className={`social-popup is-${
          isPopupVisible ? "visible" : "hidden"
        }`}
      >
        <button
          className="social-popup-close-button"
          onClick={closePopup}
          ref={popupCloseButtonRef}
        >
          <CrossIcon />
          <span className="u-visually-hidden">close menu</span>
        </button>

        <ul className="social-popup-list u-mh-auto">{children}</ul>

        {isPopupVisible && (
          <button
            className="social-popup-bg"
            onClick={closePopup}
            onFocus={closePopup}
            tabIndex={0}
          >
            <span className="u-visually-hidden">Closing menu...</span>
          </button>
        )}
      </div>
    </div>
  );
}
