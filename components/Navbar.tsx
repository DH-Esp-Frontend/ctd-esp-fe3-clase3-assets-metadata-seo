import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/logo.png"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div  className={styles.logo}>
            <Image src={logo} alt="logo" />
        </div>
        <div className={styles.links}>
            <Link href="/">Home</Link>        
            <Link href="/about">About</Link>        
            <Link href="/contact">Contact</Link>        
        </div>
        
    </nav>
  )
}

export default Navbar