"use client";

import { NavbarOptions } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OuterWrapper from "../hoc/OuterWrapper";
import clsx from "clsx";
import { buttons, typoGraphy } from "@/lib/cssConfig";
import { useRouter } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useAuth,
} from "@clerk/nextjs";

const Index = () => {
  const router = useRouter();

  const {} = useAuth();

  return (
    <nav className="flex w-full py-10 items-center justify-between">
      <div className="w-[106px] h-8 relative">
        <Image
          src={"/assets/svg/logo.svg"}
          alt="logo"
          fill
          className="object-cover"
        />
      </div>

      <div
        className={clsx(
          "flex items-center gap-x-16 absolute left-[50%] translate-x-[-50%]",
          typoGraphy.text20
        )}
      >
        {NavbarOptions?.map((e) => (
          <Link href={e?.link} key={`navbar${e?.text}`}>
            {e?.text}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <SignedIn>
          <button
            className={clsx(buttons.buttonGrey, typoGraphy.text20)}
            onClick={() => {
              router.push("/dashboard/analytics");
            }}
          >
            Dashboard
          </button>
        </SignedIn>

        <SignedOut>
          <button
            className={clsx(buttons.buttonTransparent, typoGraphy.text20)}
          >
            <SignInButton fallbackRedirectUrl={"/dashboard/analytics"} />
          </button>
          <button className={clsx(buttons.buttonGrey, typoGraphy.text20)}>
            <SignUpButton fallbackRedirectUrl={"/dashboard/analytics"} />
          </button>
        </SignedOut>
      </div>
    </nav>
  );
};

export default OuterWrapper(Index, "relative");
