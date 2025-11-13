import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import UserDropdown from "./UserDropdown"
import { searchStocks } from "@/lib/actions/finnhub.actions"

const Header = async ({user}: {user:User}) => {
  const initialStocks = await searchStocks();
  return (
    <header className="sticky top-0 header">
        <div className="container header-wrapper">
            <Link href="/">
            <Image src="/assets/icons/logo2.png" alt="Moutaz Trade" width={130} height={22} className="-mt-5"/>
            </Link>
            <nav className="hidden sm:block">
                 <NavItems initialStocks={initialStocks}/>

            </nav>
            <UserDropdown user={user} initialStocks={initialStocks}/>

        </div>
    </header>
  )
}

export default Header