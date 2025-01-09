"use client";
import { Separator } from "@/components/ui/separator";

import { MobileToggle } from "./mobile-toggle";
import useAuth from "@/hooks/use-auth";
import Image from "next/image";
import logoImage from "../public/restaurant.svg";
import { UserMenu } from "./user-menu";
import { useRouter } from "next/navigation";

export const AppHeader = () => {
  const { logout } = useAuth();

  const route = useRouter();
  return (
    <>
      <div className="h-16 bg-whit flex  justify-between  sm:justify-around items-center space-x-2 text-zinc- bg-white shadow-md dark:bg-gray-400">
        <div className="flex items-center justify-center mx-3 sm:m-0">
          <Image
            src={logoImage}
            priority
            alt="logoImage"
            className="w-10 h-10 md:w-20 md:h-20"
          />
        </div>
        <div className="hidden items-center justify-around sm:flex gap-10 dark:text-white">
          <div className="flex items-center space-x-3 gap-3 font-semibold cursor-pointer">
            <li className="list-none mx-3" onClick={() => route.push("/")}>
              Home
            </li>
            <li className="list-none mx-3" onClick={logout}>
              Contact us
            </li>
          </div>
          <Separator orientation="vertical" className=" h-10 " />
          <UserMenu />
        </div>

        <MobileToggle />
      </div>
    </>
  );
};
