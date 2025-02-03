import React from 'react'
import styles from "./SGBtn.module.css";

const SGBtn = (props) => {
  return (
    <div className={styles.SGBtn}>
            <button link={props.link}>{props.label}</button>
    </div>

  )
}

export default SGBtn
