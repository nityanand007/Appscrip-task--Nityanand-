import React, { useState } from "react";
import Image from "next/image";
import styles from "./../styles/Footer.module.css";
import Subscription from "./subscription";
import Card_accept from "./card_accept";
function Footer_mob() {
  const [isDrop, setIsDrop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const toggleClose = () => {
    setIsClose(!isClose);
  };
  const toggleDrop = () => {
    setIsDrop(!isDrop);
  };
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={styles.footer_card}>
      <div className={styles.footer}>
        <Subscription />
      </div>
      <div className={styles.bottom_line}></div>

      <h3>
        CALL US
        <div className={styles.footer_contact_details}>
          <span>+44 221 133 5360</span>
          <Image
            src="/assets/images/Star_1.svg"
            width={6}
            height={6}
            alt="dot logo"
          />
          <span>customercare@mettamuse.com</span>
        </div>
      </h3>
      <div className={styles.bottom_line}></div>
      <h3>
        CURRENCY
        <div className={styles.footer_card_details}>
          <Image
            src="/assets/images/United_States_of_America.svg"
            width={24}
            height={24}
            alt="Country logo"
          />
          <Image
            src="/assets/images/Star_1.svg"
            width={6}
            height={6}
            alt="dot logo"
          />
          USD
        </div>
      </h3>
      <div className={styles.bottom_line}></div>
      <div className={styles.footer_drop_down}>
        <h3>mettā muse</h3>
        <Image
          src="/assets/images/down-arrow.svg"
          width={16}
          height={16}
          alt="Drop Arrow"
          style={{ background: "#fff" }}
          className={isDrop ? styles.rotate : ""}
          onClick={toggleDrop}
        />
        {isDrop && (
          <div className={styles.filter_options}>
            <a href="#">About Us</a>
            <a href="#">Stories</a>
            <a href="#">Artisans</a>
            <a href="#">Boutiques</a>
            <a href="#">Contact Us</a>
            <a href="#">EU Compliances Docs</a>
          </div>
        )}
      </div>
      <div className={styles.bottom_line}></div>
      <div className={styles.footer_drop_down}>
        <h3>Quick Links</h3>
        <Image
          src="/assets/images/down-arrow.svg"
          width={16}
          height={16}
          alt="Drop Arrow"
          style={{ background: "#fff" }}
          className={isClose ? styles.rotate : " "}
          onClick={toggleClose}
        />
        {isClose && (
          <div className={styles.filter_options}>
            <a href="#">Orders & Shipping</a>
            <a href="#">Join/Login as a Seller</a>
            <a href="#">Payment & Pricing</a>
            <a href="#">Return & Refunds</a>
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        )}
      </div>
      <div className={styles.bottom_line}></div>
      <div className={styles.footer_drop_down}>
      <h3>Follow Us</h3>
      <Image
        src="/assets/images/down-arrow.svg"
        width={16}
        height={16}
        alt="Drop Arrow"
        className={isOpen ? styles.rotate : ''}
        onClick={toggleOpen}
        style={{ background: '#fff', cursor: 'pointer' }}
      />
      {isOpen && (
        <div className={styles.footer_card_detail}>
          <Image src="/assets/images/a.svg" width={32} height={32} alt="icon" />
          <Image src="/assets/images/Insta.svg" width={32} height={32} alt="insta logo" />
        </div>
      )}
    </div>
      <div className={styles.bottom_line}></div>
      <Card_accept />
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
  );
}

export default Footer_mob;
