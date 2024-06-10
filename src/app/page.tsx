import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 px-10 mx-auto text-center flex flex-col items-center max-w-3xl " >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" >
          The <span style={{color:"brown"}}>elixr </span>of modern times.
        </h1>

        <p className="mt-6 text-lg max-w-prose text-muted-foreground" >
          Feel more alive with every sip of our coffee. We specialize in providing single-origin , native and specialty coffee to our customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6" >
          <Link href="/products" className={buttonVariants()}>Most purchased</Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
