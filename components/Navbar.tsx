'use client'

import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="max-w-3xl -ml-4 sm:-ml-0 sm:px-6 lg:px-8">
        {/* main div  */}
        <div className="flex justify-between h-16 my-4">
        {/* div for navbar  */}
            <div className="flex justify-start items-center w-full ">
                {/* div for image  */}
                <Link href={'/'}>
                    <Image src={'/logo.png'} height={150} width={150} alt="logo"/>
                </Link>
            </div>
            <div></div>
        </div>

    </div>
  )
}

export default Navbar