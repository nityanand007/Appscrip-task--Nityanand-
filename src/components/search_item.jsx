import React, { useState } from "react";
import styles from "../styles/filter.module.css";
import Image from "next/image";
function Search_item() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className={styles.show_filter}>
      <Image
        src="/assets/images/arrow-left.svg"
        width={16}
        height={16}
        onClick={toggleFilterVisibility}
        alt="Drop Arrow"
        className={isFilterVisible ? styles.rotate : ""}
      />
      {isFilterVisible ? "Hide Filter" : "Show Filter"}
      {isFilterVisible && (
        <div className={styles.filter_options}>
          <label>
            <input type="checkbox" /> Customizble
          </label>
          <div className={styles.bottom_line}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              IDEAL FOR
            </label>
            <Image src="/assets/images/arrow-left.svg" width={16} height={16}  alt="Drop Arrow"/>
          </div>
          <ul>
            ALL
          </ul>
          <p>
            unselect all
          </p>
          <label>
            <input type="checkbox" /> Men
          </label>
          <label>
            <input type="checkbox" /> Women
          </label>
          <label>
            <input type="checkbox" /> Baby & Kids
          </label>
          <div className={styles.bottom_line}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              ocassion
            </label>
            <Image src="/assets/images/arrow-left.svg" width={16} height={16}  alt="Drop Arrow" />
          </div>
          <ul>
            ALL
          </ul>
          <div className={styles.bottom_line}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              work
            </label>
            <Image src="/assets/images/arrow-left.svg" width={16} height={16} alt="Drop Arrow" />
          </div>
          <ul>
            ALL
          </ul>
          <div className={styles.bottom_line}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              Fabric
            </label>
            <Image src="/assets/images/arrow-left.svg" width={16} height={16} alt="Drop Arrow"/>
          </div>
          <ul>
            ALL
          </ul>
          <div className={styles.bottom_line}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              Segment
            </label>
            <Image src="/assets/images/arrow-left.svg" width={16} height={16} alt="Drop Arrow"/>
          </div>
          <ul>
            ALL
          </ul>
          <div className={styles.bottom_line}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
             suitable for
            </label>
            <Image src="/assets/images/arrow-left.svg" width={16} height={16}alt="Drop Arrow"/>
          </div>
          <ul>
            ALL
          </ul>
          <div className={styles.bottom_line}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              raw materials
            </label>
            <Image src="/assets/images/arrow-left.svg" width={16} height={16} alt="Drop Arrow"/>
          </div>
          <ul>
            ALL
          </ul>
          <div className={styles.bottom_line}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              pATTERN
            </label>
            <Image src="/assets/images/arrow-left.svg" width={16} height={16} alt="Drop Arrow"/>
          </div>
          <ul>
            ALL
          </ul>
          <div className={styles.bottom_line}></div>
        </div>
      )}
    </div>
  );
}
export default Search_item;
