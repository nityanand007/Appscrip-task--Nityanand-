import React from "react";
import Image from "next/image";
import styles from "./../styles/Footer.module.css";
import Subscription from "./subscription";
import Card_accept from "./card_accept";
function Footer() {
  return (
    <>
      <div className={styles.footer_card}>
        <div className={styles.footer}>
          <Subscription />
          <div>
            <h3>
              CONTACT US
              <p>+44 221Subscribe 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </h3>
            <h3>
              CURRENCY
              <div className={styles.footer_card_details}>
                <Image
                  src="/assets/images/United_States_of_America.svg"
                  width={24}
                  height={24}
                  alt="Country logo"
                />
                <Image src="/assets/images/Star_1.svg" width={6} height={6} alt="dot logo"/>
                USD
              </div>
              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.bottom_line}></div>
        <div className={styles.footer}>
          <div>
            <h3>
              mettā muse
              <a href="">About Us</a>
              <a href="">Stories</a>
              <a href="">Artisans</a>
              <a href="">Boutiques</a>
              <a href="">Contact Us</a>
              <a href="">EU Compliances Docs</a>
            </h3>
          </div>
          <div>
            <h3>
              Quick Links
              <a href="">Orders & Shipping</a>
              <a href="">Join/Login as a Seller</a>
              <a href="">Payment & Pricing</a>
              <a href="">Return & Refunds</a>
              <a href="">FAQs</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
            </h3>
          </div>
          <div>
            <h3>
              Follow Us
              <div className={styles.footer_card_details}>
                <Image src="/assets/images/a.svg" width={32} height={32} alt="icon"/>
                <Image src="/assets/images/Insta.svg" width={32} height={32} alt="insta logo"/>
              </div>
            </h3>
            <Card_accept />
          </div>
        </div>
        <p
          style={{
            fontFamily: "Simplon Norm",
            fontWeight: 400,
            size: "14px",
            lineHeight: "16.8px",
            textAlign: "center",
            padding: "37px",
            color: "#fff",
          }}
        >
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
