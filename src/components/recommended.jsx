import React, { useState } from "react";
import styles from "../styles/filter.module.css";
import Image from "next/image";
function Recommended() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  
  return (
    <>
      <div className={styles.recommended} onClick={toggleDropdown}>
        <span>{selectedOption || "RECOMMENDED"}</span>
        <Image
          src="/assets/images/arrow-left.svg"
          width={16}
          height={16}
          className={isOpen ? styles.rotate : ""}
          alt="Drop Arrow"
        />
      </div>
      {isOpen && (
        <div className={styles.dropdown_menu}>
          <ul>
            <p onClick={() => handleOptionClick("RECOMMENDED")}>RECOMMENDED</p>
            <p onClick={() => handleOptionClick("Newest first")}>
              Newest first
            </p>
            <p onClick={() => handleOptionClick("popular")}>popular</p>
            <p onClick={() => handleOptionClick("Price : high to low")}>
              Price : high to low
            </p>
            <p onClick={() => handleOptionClick("Price : low to high")}>
              Price : low to high
            </p>
          </ul>
        </div>
      )}
    </>
  );
}

export default Recommended;
