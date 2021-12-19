import Image from "next/image";
import { SearchIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/outline'
// import { useSession } from "next-auth/react";
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const {data:session} = useSession();
  const router = useRouter()

const items = useSelector(selectItems)

  
  return (
    <header>
      {/* top_nav*/}
      <div className="flex items-center bg-amazon_blue flex-grow p-1 py-2">

          {/* Image_tag */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
          onClick={()=>router.push('/')}
            src="https://links.papareact.com/f90"
            width={150}
            alt=""
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search_bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer">
            <input type="text" className="p-2 h-full w-6 flex-grow focus:outline-none flex-shrink px-4 rounded-l-md"/>
            <SearchIcon className="h-12 p-4"/>
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">

            {/* div_1 */}
            <div onClick={!session ? signIn : signOut} className=" link">
                <p>{session ? `Hello, ${session.user.name}`: "Sign In"}</p>
                <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>
            {/* div_2*/}
            <div className=" link">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">& Orders</p>
            </div>
            {/* div_3 */}
            <div onClick={()=>router.push('/checkout')} className="relative link flex items-center">
                <span className="absolute right-0 top-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length }</span>
                <ShoppingCartIcon className="h-10"/>
                <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>
            </div>

        </div>
      </div>



      {/* bottom_nav */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm p-2 pl-6 space-x-3">
          <p className="link flex items-center"><MenuIcon className="h-6 mr-1"/>All</p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Todays Deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Again</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
