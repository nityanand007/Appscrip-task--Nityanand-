import React from "react";
import Image from "next/image";
import styles from "../styles/filter.module.css";
import Recommended from "./recommended";
import Search_item from "./search_item";
function Filter({data}) {
  const list=data?.data
  const totalCount = list.length;
  return (
    <div className={styles.filter}>
      <div className={styles.filter_section}>
        <p>{totalCount} ITEMS</p>
        <Search_item/>
      </div>
      <div className={styles.filter_mob}>Filter
      <div style={{border: "1px solid #e5e5e5", margin: "26px 0",height:"25px"}}></div>
      </div>
      <Recommended />
    </div>
  );
}

export default Filter;
