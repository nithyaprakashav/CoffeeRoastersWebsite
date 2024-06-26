'use client'

import { Button, buttonVariants } from "./ui/button";
import { User } from "@/payload-types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";


const UserAccountNav = ({user}: {user: User}) => {

    const {signOut} = useAuth()

    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild className=" overflow-visible">
                <Button size={"sm"} variant={"ghost"} className=" relative">My account</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className=" bg-white w-60 " align="end" >
                <div className=" flex items-center justify-start gap-2 p-2" >
                    <div className=" flex flex-col space-y-0.5 leading-none" >
                        <p className=" font-medium text-sm text-black" >{user.email}</p>
                    </div>
                </div>

                <DropdownMenuSeparator/>

                {user.role === 'admin' ? (
                    <>
                    
                    <DropdownMenuItem asChild className=" cursor-pointer" >
                        <Link href='/admin' >Admin dashboard</Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator/>
                    </>
                ) : null}
                

                <DropdownMenuItem className=" cursor-pointer" onClick={signOut} >
                <LogOut className="mr-2 h-4 w-4" />
                    Log out
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default UserAccountNav;