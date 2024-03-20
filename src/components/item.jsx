import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/item.module.css";

function Item({ data }) {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(storedBookmarks);
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((item) => item !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  return (
    <div className={styles.product}>
      {data?.data?.map((item, index) => (
        <div className={styles.product_list} key={index}>
          <Image src={item?.image} width={300} height={399} alt={item?.category} loading="lazy" />
          <div className={styles.product_title}>
            <h3>{item?.title}</h3>
            <div className={styles.product_details}>
              <p>{item?.description}</p>
              {bookmarks.includes(item.id) ? (
                <Image
                  src="/assets/images/heart-1.svg"
                  width={24}
                  height={24}
                  alt="Bookmark"
                  onClick={() => toggleBookmark(item.id)}
                />
              ) : (
                <Image
                  src="/assets/images/heart.svg"
                  width={24}
                  height={24}
                  alt="Bookmark"
                  onClick={() => toggleBookmark(item.id)}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Item;
