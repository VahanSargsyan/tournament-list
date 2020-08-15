import React, { useState, useEffect } from "react";

import styles from "./tournament-item.module.css";
import { IMAGE_API_ROOT } from "../../../constants/constants";


export default function Tournament({
  data: {
    images: { banner },
    title,
    description,
    id,
  },
  onClick,
}) {
  return (
    <div
      onClick={() => onClick({ images: { banner }, title, description, id })}
      className={styles.container}
    >
      <img
        className={styles.image}
        src={IMAGE_API_ROOT + banner.filePath}
        alt="banner"
      />
      <div className={styles.infoBlock}>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
}
