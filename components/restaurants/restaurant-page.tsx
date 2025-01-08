"use client";
import { ChevronLeft, Clock4, MapPin, Menu, NotebookTabs } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { DatePicker } from "@/components/date-picker";
import { GuestSelector } from "@/components/guest-select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";

export const RestaurantPage = () => {
  const router = useRouter();
  const rest = {
    title: "Brahma Pure Veg",
    image:
      "https://b.zmtcdn.com/data/pictures/6/11626/68067c4ba8455e74fb520820557fb592_o2_featured_v2.jpg",
    address: "Beverages Sinhgad Road, Pune",
    opening: "11:00 AM",
    closing: "10:30 PM",
    availabilities: ["12:00", "12:45", "01:00"],
  };
  return (
    <>
      <div className="w-full h-fit bg-white dark:bg-gray-400 p-2">
        <div
          className="flex items-center text-md font-semibold dark:text-white py-4 cursor-pointer"
          onClick={() => router.push("/auth")}
        >
          <ChevronLeft className="w-5 h5" />
          <h1>Go Back</h1>
        </div>
        <Separator className="h-[2px] w-full" />

        <div className="px-2 my-5">
          <div className="relative h-56 md:h-80 w-full ">
            <Image
              src={rest.image}
              alt="Picture of the restaurant"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          <h1 className="text-xl md:text-2xl my-3">{rest.title}</h1>
          <Separator className="h-[2px] w-full" />

          <div className="flex flex-col md:flex-row sm:justify-between ">
            <div className="md:w-[45%] w-full  ">
              <div className="flex justify-start items-start space-x-3 my-2">
                <MapPin className=" w-8 h-8 text-primary " />
                <div className="flex items-center  text-zinc-600 dark:text-white flex-wrap">
                  <p>
                    360 San Lorena Avenus, Suit 1430 Coral Gables, FL 3316-186{" "}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-start space-x-3 my-2">
                <Clock4 className="w-5 h-5 text-primary" />
                <p className="text-md font-semibold">
                  {rest.opening} - {rest.closing}
                </p>
              </div>

              <div className="flex items-center justify-start space-x-3 my-2">
                <NotebookTabs className="w-5 h-5 text-primary" />
                <p className="text-md font-medium underline">Show Menu</p>
              </div>
            </div>
            <div className="md:w-[55%] w-full flex items-start justify-start space-x-2 my-2">
              <p>
                <Menu className="w-5 h-5 text-primary" />
              </p>
              <p className="text-wrap text-zinc-600">
                Villagio restaurant and bar has one mission: to provide guests
                with a fine and fresh seafood experience. Featuring seasonal and
                sustainable seafood that is flown in fresh daily, our
                chef-driven menu proves that no matter when you’re dining,
                seafood can be truly exceptional. to provide guests with a fine
                and fresh seafood experience.
                <span className="text-primary">Read more...</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-start items-center md:space-2">
          <div className="flex justify-start items-center space-x-2">
            <DatePicker />
            <GuestSelector />
            <GuestSelector />
          </div>
          <div className="flex justify-start items-center space-x-4 mx-3">
            <RadioGroup
              defaultValue="option-one"
              className="flex items-center space-x-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in" id="in" />
                <Label htmlFor="in">In</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="out" id="out" />
                <Label htmlFor="out">Out</Label>
              </div>
            </RadioGroup>
            <button className="px-3 py-1 text-white bg-primary rounded-md ">
              Find Slot
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
