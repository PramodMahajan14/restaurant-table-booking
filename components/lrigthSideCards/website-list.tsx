import { Separator } from "@radix-ui/react-separator";
import { SquareArrowOutUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const OfficialWebSites = () => {
  const webSites = [
    {
      img: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/logo/oberoi-hotels-logo/mumbai.svg?extension=webp",
      title: "The Oberoi",
      site: "https://www.oberoihotels.com/",
    },
    {
      img: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/logo/oberoi-hotels-logo/mumbai.svg?extension=webp",
      title: "The Royal Hotel",
      site: "https://www.oberoihotels.com/",
    },
    {
      img: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/logo/oberoi-hotels-logo/mumbai.svg?extension=webp",
      title: "The Oberoi",
      site: "https://www.oberoihotels.com/",
    },
  ];
  return (
    <div className="w-full h-fit text-center px-2 py-5 bg-white rounded-md shadow-md dark:bg-gray-400">
      <h1 className="font-bold text-zinc-600 dark:text-white">
        Official WebSites
      </h1>

      <Separator className="my-3 h-[1px] bg-violet-700" />
      <div className="text-start flex flex-col items-start px-2">
        {webSites.map((web) => (
          <>
            <div
              className="flex items-center justify-start space-x-3 my-2"
              key={web.title}
            >
              <Avatar>
                <AvatarImage src={web.img} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ">
                <p className="font-semibold text-sm dark:text-zinc-200">
                  {web.title}
                </p>
                <div className="flex items-center  space-x-1">
                  <SquareArrowOutUpRight className="w-3 h-3 " />
                  <a
                    href={web.site}
                    className=" text-violet-700 text-xs underline"
                  >
                    Go to Site
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
