import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { MapPin } from "lucide-react";

export const LocationListcard = () => {
  const locationsdata = [
    {
      add1: "3913 163rd St",
      add2: "North Mami Beach, FL 33160",
    },
    {
      add1: "1 American Dreaw Way",
      add2: "#F225East Rutherford, NJ 07073",
    },
    {
      add1: "1760 Sawgrass Mills",
      add2: "CircleSunrise, FL 33323-3912",
    },
    {
      add1: "4150 Salzedo Street",
      add2: "Suite 143 Coral FL8744",
    },
    {
      add1: "East Thane -3493",
      add2: "Puen Raviwar Peth-2",
    },
  ];
  return (
    <div className="w-full h-fit text-center px-2 py-5 bg-white rounded-md shadow-md dark:bg-gray-400 dark:text-white">
      <h1 className="font-bold text-zinc-600 dark:text-white">All Locations</h1>

      <Separator className="my-3 h-[1px] bg-primary" />
      <div className="text-start flex flex-col items-start px-2">
        {locationsdata.map((loc, i) => (
          <>
            <div
              className="flex items-center justify-start space-x-2 my-2"
              key={loc.add1}
            >
              <MapPin className="w-5 h-5 text-primary" />
              <div className="flex flex-col text-zinc-600 dark:text-zinc-100">
                <p className=" text-sm ">{loc.add1}</p>
                <p className=" text-sm ">{loc.add2}</p>
              </div>
            </div>
            <div
              className={cn(
                locationsdata.length - 1 === i ? "hidden" : "w-full px-9"
              )}
            >
              <Separator className="w-full h-[1px]  bg-violet-500" />
            </div>
          </>
        ))}
      </div>

      <div className="w-full flex justify-center px-10">
        {" "}
        <Separator className="w-full h-[2px] px-3 bg-primary text-center" />
      </div>
    </div>
  );
};
