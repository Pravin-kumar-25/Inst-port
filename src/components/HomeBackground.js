import React from 'react'
import styles from '@/styles/Home.module.css'

const HomeBackground = ({ children }) => {
  return (
    <div className={styles.wholeBackground}>
      <div className={`${styles.cirleOne} ${styles.circle}`}></div>
      <div className={`${styles.circleTwo} ${styles.circle}`}></div>
      {children}
      <div className={`${styles.circleThree} ${styles.circle}`}></div>
      <div className={`${styles.circleFour} ${styles.circle}`}></div>
    </div>
  )
}

export default HomeBackground