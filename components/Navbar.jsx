import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
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
         <div className={styles.item}>
           <ul className={styles.list}>
             <li className={styles.listItem}>
              Homepage   
             </li>

             <li className={styles.listItem}>
                Products
             </li>

             <li className={styles.listItem}>
                Menu
             </li>

             <Image
            src="/img/logo.png"
            alt="Logo"
            width="160px"
            height="69px"
          />
             <li className={styles.listItem}>
                Events
             </li>

             <li className={styles.listItem}>
                Blog
             </li>

             <li className={styles.listItem}>
                Contact
             </li>

           </ul>
         </div>
      <div className={styles.item}>Right</div>
    </div>
  );
}

export default Navbar;
