import React from "react";
import Image from "next/image";
import styles from "./../styles/Footer.module.css";
function Card_accept() {
  return (
    <h3>
      mettā muse Accepts
      <div className={styles.footer_card_details}>
        <Image src="/assets/images/Group_136188.svg" width={56} height={35} alt="Gpay"/>
        <Image src="/assets/images/Group_136190.svg" width={56} height={35} alt="Mastro"/>
        <Image src="/assets/images/Group_136192.svg" width={56} height={35} alt="p-pay"/>
        <Image src="/assets/images/Group_136193.svg" width={56} height={35} alt="Amex"/>
        <Image src="/assets/images/Group_136194.svg" width={56} height={35} alt="Apple pay"/>
        <Image src="/assets/images/Group_136195.svg" width={56} height={35} alt="pay"/>
      </div>
    </h3>
  );
}

export default Card_accept;
