'use client'


import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemsProps{
    category: Category,
    handleOpen: () => void,
    isOpen: boolean,
    isAnyOpen: boolean,
    setActiveIndex: Function
}

const NavItem = ({category,handleOpen,isAnyOpen,isOpen,setActiveIndex}: NavItemsProps) => {

    const transition = {
        type: "spring",
        mass: 0.5,
        damping: 11.5,
        stiffness: 100,
        restDelta: 0.001,
        restSpeed: 0.001,
      };

    return ( 
        <div className="flex" >
            <div className="flex relative items-center" onMouseEnter={handleOpen}>
                <Button className=" gap-1.5" variant={isOpen ? 'secondary' : 'ghost'} >
                    {category.label}
                    <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground",{
                        '-rotate-180': isOpen
                    })} />
                </Button>
            </div>

            {isOpen ? (
                <div className={cn('absolute inset-x-0 top-[calc(100%_+_0.5rem)] text-sm text-muted-foreground',{
                    ' animate-in  duration-700 slide-in-from-top-5 z-0':isAnyOpen
                })} onMouseLeave={()=> setActiveIndex(null)} >
                    <div className=" absolute inset-0 top-1/2 bg-white shadow " aria-hidden='true' />

                    <motion.div className="relative rounded-3xl" initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }} transition={transition} layout style={{
                        backgroundColor: '#d0b49f'
                    }} >
                        <div className=" mx-auto max-w-7xl px-0 " >
                            <div className=" grid grid-cols-4 gap-x-8 gap-y-10 py-16" >
                                <div className=" col-span-4 col-start-1 grid grid-cols-3 gap-x-8" >
                                    {category.featured.map((item)=>(
                                        <motion.div key={item.name} className=" group relative text-base sm:text-sm" 
                                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} layout >
                                            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75" >
                                                <Image src={item.imageSrc} alt={item.name} fill className=" object-cover object-center" />
                                            </div>

                                            <Link href={item.href} className=" mt-6 block font-medium text-gray-900">
                                            {item.name}
                                            </Link>
                                            <p className=" mt-1" aria-hidden='true'>Shop now</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            ) : null}

        </div>
     );
}
 
export default NavItem;