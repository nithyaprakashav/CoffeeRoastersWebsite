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
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from 'react-hook-form';
import {toast} from 'sonner'
import { ZodError } from "zod";

const Page = () => {

  const router = useRouter()
  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')

  //from zod
  

  // From react-hook-form
    const {register , handleSubmit , formState:{errors}} = useForm<TAuthCredentialValidator>({
      resolver: zodResolver(AuthCredentialValidator)
    })

    const{mutate:signIn , isLoading} = trpc.auth.signIn.useMutation({
      onSuccess: () => {
        toast.success("Signed in successfully")

        router.refresh()

        if(origin) {
          router.push(`/${origin}`)
        }

        router.push('/')
        router.refresh()
      },

      onError: (err) => {
        if(err.data?.code === 'UNAUTHORIZED'){
          toast.error("Invalid email or password")
        }
      }
    })

    

    const onSubmit = ({email , password}: TAuthCredentialValidator) => {
      // send data to the server
      signIn({email, password})
    }

    return ( 
        <>
            <div className=" container relative flex flex-col pt-20 items-center justify-center lg:px-0" >
                <div className=" mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]" >
                    <div className=" flex flex-col items-center space-y-2 text-center" >
                        <Image src='/assets/logoForHeader.png' alt="logo" width={180} height={180} />
                        <h1 className=" text-2xl font-bold pt-2">
                          Sign in to your account
                        </h1>

                        <Link href='/sign-up' className={   buttonVariants({
                          variant: "link",
                          className: " text-muted-foreground gap-1.5"
                          })} >
                            Don&apos;t have an account? Sign-up
                            <ArrowRight className=" h-4 w-4" />
                        </Link>
                    </div>

                    <div className=" grid gap-6" >
                      <form onSubmit={handleSubmit(onSubmit)} >
                        <div className=" grid gap-4" >
                          <div className=" grid gap-2 py-2" > 
                            <Label htmlFor="email" >Email</Label>
                            <Input 
                            {...register("email")}
                            className={cn({
                              "focus-visible:ring-red-500": errors.email
                            })} placeholder="you@example.com" />
                            {errors?.email && (
                              <p className=" text-sm text-red-500" >{errors.email.message}</p>
                            )}
                          </div>
                          <div className=" grid gap-2 py-2" > 
                            <Label htmlFor="password" >Password</Label>
                            <Input 
                            {...register("password")}
                            type="password"
                            className={cn({
                              "focus-visible:ring-red-500": errors.password
                            })} placeholder="h2d3seijf" />
                            {errors?.password && (
                              <p className=" text-sm text-red-500" >{errors.password.message}</p>
                            )}
                          </div>

                          <Button className=" bg-gradient-to-br from-black to-neutral-600 mt-4" disabled={isLoading}>Sign in</Button>

                        </div>
                      </form>

                        {/* <div className=" relative">
                            <div aria-hidden="true" className=" absolute inset-0 flex items-center">
                                <span className=" w-full border-t" />
                            </div>

                            <div className=" relative flex justify-center text-xs uppercase" >
                                <span className=" bg-background px-2 text-muted-foreground" >or</span>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </>
     );
}
 
export default Page;