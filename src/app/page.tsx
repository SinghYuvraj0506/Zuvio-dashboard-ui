"use client"
import { useAuth } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react'


const Page = () => {
    const location = usePathname();
    const router = useRouter();
    const { isSignedIn } = useAuth();

    useEffect(() => {
      if (location === "/") {
        router.replace("/landing");
      }
  
      else if(!isSignedIn){
        router.replace("/landing");
      }
  
    }, [isSignedIn, location, router]);

  return null;
}

export default Page;
