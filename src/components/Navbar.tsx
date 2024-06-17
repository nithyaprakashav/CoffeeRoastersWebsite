// from aceternity

import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import NavItems from "./NavItems";
import UserAccountNav from "./UserAccountNav";
import { buttonVariants } from "./ui/button";

const Navbar = async () => {

    const nextCookies = cookies()
    const {user} = await getServerSideUser(nextCookies)
    

    // console.log(user)
    
   



    return ( 
        <div className="  sticky z-50 top-0 inset-x-0 h-28"  >
            <header className=" relative bg-white" style={{
            backgroundColor:"#EFE4D4"
        }} >
                
                    <div className=" border-b border-gray-200" >
                        <div className=" flex h-28 items-center pl-10 pr-10" >
                            {/* TODO: Mobile nav */}

                            <div className=" ml-4 flex lg:ml-0" >
                                <Link href='/' >
                                    <Image src={'/assets/logoForHeader.png'} alt="HeaderLogo" width={150} height={120}/>
                                </Link>
                            </div>

                            {/* NavItems */}
                            <div className=" hidden z-50 lg:ml-8 lg:block lg:self-stretch" >
                                <NavItems/>
                                {/* <NavItem/> */}
                            </div>


                            


                            <div className=" ml-auto flex items-center" >
                                <div className=" hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6" >
                                    {user ? null : (
                                        <Link href='/sign-in' className={buttonVariants({variant: 'ghost'})} >
                                            Sign in
                                        </Link>
                                    )}

                                    {user ? null : (
                                        <span className=" h-6 w-px bg-gray-500" aria-hidden= 'true'  />
                                    )}

                                    {user ? 
                                    (<UserAccountNav user={user}/>) : (<Link href='/sign-up' className={buttonVariants({variant: 'ghost'})} >
                                        Create account
                                    </Link> )}

                                    {user ? <span className=" h-6 w-px bg-gray-500" aria-hidden= 'true'  /> : null}

                                    {user ? null : <div className=" flex lg:ml-6" >
                                        <span className=" h-6 w-px bg-gray-500" aria-hidden= 'true'  />
                                    </div> }

                                    <div className=" ml-4 flow-root lg:ml-6" >
                                        <Cart/>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                
            </header>
        </div>
     );
}
 
export default Navbar;