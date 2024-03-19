import React from "react";
import styles from "./../styles/Header.module.css";
import Image from "next/image";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.isDesktop}>
        <div className={styles.header_top}>
          <div className={styles.header_top_strip}>
            <Image
              src="/assets/images/element-4.svg"
              width={16}
              height={16}
              alt="logo"
            />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className={styles.header_top_strip}>
            <Image
              src="/assets/images/element-4.svg"
              width={16}
              height={16}
              alt="logo"
            />
            <p>Lorem ipsum dolor</p>
          </div>
          <div className={styles.header_top_strip}>
            <Image
              src="/assets/images/element-4.svg"
              width={16}
              height={16}
              alt="logo"
            />
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      <div className={styles.isMobile}>
      <div className={styles.header_top}>
        <div className={styles.header_top_strip}>
          <Image
            src="/assets/images/element-4.svg"
            width={16}
            height={16}
            alt="logo"
          />
          <p>Lorem ipsum dolor</p>
        </div>
        </div>
      </div>
      <div className={styles.header_bottom}>
        <div className={styles.header_mob_view}>
          <div className={styles.isMobile}>
        <Image
            src="/assets/images/hamburger.svg"
            width={36}
            height={36}
            alt="logo"
          />
          </div>
          <Image
            src="/assets/images/Logo.svg"
            width={36}
            height={36}
            alt="logo"
          />
        </div>
        <h1>LOGO</h1>
        <div className={styles.icon_desktop}>
        <div className={styles.icon}>
          <Image
            src="/assets/images/search-normal.svg"
            width={24}
            height={24}
            alt="Search logo"
          />
          <Image
            src="/assets/images/heart.svg"
            width={24}
            height={24}
            alt="whishlist"
          />
          <Image
            src="/assets/images/shopping-bag.svg"
            width={24}
            height={24}
            alt="bag logo"
          />
          <Image
            src="/assets/images/profile.svg"
            width={24}
            height={24}
            alt="profile"
          />
          <h4>ENG</h4>
          <Image
            src="/assets/images/arrow-left.svg"
            width={16}
            height={16}
            alt="Drop Arrow"
          />
          </div>
        </div>
        <div className={styles.icon_Mob}>
        <div className={styles.icon}>
          <Image
            src="/assets/images/search-normal.svg"
            width={24}
            height={24}
            alt="Search logo"
          />
          <Image
            src="/assets/images/heart.svg"
            width={24}
            height={24}
            alt="whishlist"
          />
          <Image
            src="/assets/images/shopping-bag.svg"
            width={24}
            height={24}
            alt="bag logo"
          />
          </div>
          </div>
      </div>
      <div className={styles.isDesktop}>
      <div className={styles.header_tab}>
        <a href="/" style={{ textDecoration: "none", color: "#000000" }}>
          <div className={styles.header_tab_menu}>SHOP</div>
        </a>
        <a href="/" style={{ textDecoration: "none", color: "#000000" }}>
          <div className={styles.header_tab_menu}>SKILLS</div>
        </a>
        <a href="/" style={{ textDecoration: "none", color: "#000000" }}>
          <div className={styles.header_tab_menu}>STORIES</div>
        </a>
        <a href="/" style={{ textDecoration: "none", color: "#000000" }}>
          <div className={styles.header_tab_menu}>ABOUT</div>
        </a>
        <a href="/" style={{ textDecoration: "none", color: "#000000" }}>
          <div className={styles.header_tab_menu}>CONTACT US</div>
        </a>
      </div>
      </div>
      <div className={styles.isMobile}>
      <div className={styles.header_tab}>
        <a href="/" style={{ textDecoration: "none", color: "#BFC8CD" }}>
          <div className={styles.header_tab_menu}>HOME |</div>
        </a>
        <a href="/" style={{ textDecoration: "none", color: "#000000" }}>
          <div className={styles.header_tab_menu}>SHOP</div>
        </a>
      </div>
      </div>
    </div>
  );
}

export default Header;
