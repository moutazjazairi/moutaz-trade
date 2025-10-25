import Image from "next/image"
import Link from "next/link"
import React from 'react'
import NavItems from "./NavItems"
import UserDropdown from "./UserDropdown"

const Header = () => {
  return (
    <header className="sticky top-0 header">
        <div className="container header-wrapper">
            <Link href="/">
            <Image src="/assets/icons/logo2.png" alt="Moutaz Trade" width={130} height={22} className="-mt-5"/>
            </Link>
            <nav className="hidden sm:block">
                 <NavItems />

            </nav>
            <UserDropdown />

        </div>
    </header>
  )
}

export default Header