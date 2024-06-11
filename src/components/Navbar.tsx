import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { url } from "inspector";

const Navbar = () => {
    return ( 
        <div className=" bg-white sticky z-50 top-0 inset-x-0 h-28" >
            <header className=" relative bg-white" >
                
                    <div className=" border-b border-gray-200" >
                        <div className=" flex h-28 items-center pl-10 pr-10" >
                            {/* TODO: Mobile nav */}

                            <div className=" ml-4 flex lg:ml-0" >
                                <Link href='/' >
                                    <Image src={'/assets/logoForHeader.png'} alt="HeaderLogo" width={150} height={120}/>
                                </Link>
                            </div>

                            {/* NavItems */}
                        </div>
                    </div>
                
            </header>
        </div>
     );
}
 
export default Navbar;