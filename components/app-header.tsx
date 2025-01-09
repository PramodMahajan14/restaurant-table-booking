import { Separator } from "@/components/ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";
import { MobileToggle } from "./mobile-toggle";

export const AppHeader = () => {
  return (
    <>
      <div className="h-16 bg-whit flex  justify-between  sm:justify-around items-center space-x-2 text-zinc- bg-white shadow-md dark:bg-gray-400">
        <div className="flex items-center justify-center mx-3 sm:m-0">
          <h1>Logo</h1>
        </div>
        <div className="hidden items-center justify-around sm:flex gap-10 dark:text-white">
          <div className="flex items-center space-x-3 gap-3 font-semibold cursor-pointer">
            <li className="list-none mx-3">Home</li>
            <li className="list-none mx-3">Contact us</li>
            <li className="list-none mx-3">Sign Out</li>
          </div>
          <Separator orientation="vertical" className=" h-10 " />

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <ModeToggle />
        <MobileToggle />
      </div>
    </>
  );
};
