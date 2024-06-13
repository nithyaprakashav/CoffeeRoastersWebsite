import Image from "next/image";

const Page = () => {
    return ( 
        <>
            <div className=" container relative flex flex-col pt-20 items-center justify-center lg:px-0" >
                <div className=" mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]" >
                    <div className=" flex flex-col items-center space-y-2 text-center" >
                        <Image src='/assets/logoForHeader.png' alt="logo" width={180} height={180} />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Page;