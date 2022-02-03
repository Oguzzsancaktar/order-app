import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image
              src="/img/telephone.png"
              alt="telephone image"
              width="32"
              height="32"
            />
          </div>
          <div className={styles.texts}>
            <div className={styles.texts}>Order Now</div>
            <div className={styles.texts}>012 345 566 66</div>
          </div>
        </div>
      </Link>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>

          <li className={styles.listItem}>Products</li>

          <li className={styles.listItem}>Menu</li>

          <Image src="/img/logo.png" alt="Logo" width="160px" height="69px" />
          <li className={styles.listItem}>Events</li>

          <li className={styles.listItem}>Blog</li>

          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="Logo" width="30" height="30" />
            <div
              className={styles.counter}
              style={{ display: quantity === 0 ? "none" : "" }}
            >
              {quantity}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
