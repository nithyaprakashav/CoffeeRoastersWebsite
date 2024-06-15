'use client'

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { AuthCredentialValidator, TAuthCredentialValidator } from "@/lib/validators/account-credentials-validator";
import { trpc } from "@/trpc/client";
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from 'react-hook-form';

const Page = () => {

  //from zod
  

  // From react-hook-form
    const {register , handleSubmit , formState:{errors}} = useForm<TAuthCredentialValidator>({
      resolver: zodResolver(AuthCredentialValidator)
    })

    const{mutate , isLoading} = trpc.auth.createPayloadUser.useMutation({

    })

    

    const onSubmit = ({email , password}: TAuthCredentialValidator) => {
      // send data to the server
      mutate({email, password})
    }

    return ( 
        <>
            <div className=" container relative flex flex-col pt-20 items-center justify-center lg:px-0" >
                <div className=" mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]" >
                    <div className=" flex flex-col items-center space-y-2 text-center" >
                        <Image src='/assets/logoForHeader.png' alt="logo" width={180} height={180} />
                        <h1 className=" text-2xl font-bold pt-2">
                          Create account
                        </h1>

                        <Link href='/sign-in' className={   buttonVariants({
                          variant: "link",
                          className: " text-muted-foreground gap-1.5"
                          })} >
                            Already have an account? Sign-in
                            <ArrowRight className=" h-4 w-4" />
                        </Link>
                    </div>

                    <div className=" grid gap-6" >
                      <form onSubmit={handleSubmit(onSubmit)} >
                        <div className=" grid gap-2" >
                          <div className=" grid gap-2 py-2" > 
                            <Label htmlFor="email" >Email</Label>
                            <Input 
                            {...register("email")}
                            className={cn({
                              "focus-visible:ring-red-500": errors.email
                            })} placeholder="you@example.com" />
                          </div>
                          <div className=" grid gap-2 py-2" > 
                            <Label htmlFor="password" >Password</Label>
                            <Input 
                            {...register("password")}
                            type="password"
                            className={cn({
                              "focus-visible:ring-red-500": errors.password
                            })} placeholder="h2d3seijf" />
                          </div>

                          <Button className=" bg-gradient-to-br from-black to-neutral-600">Sign up</Button>

                        </div>
                      </form>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default Page;