"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface RestaurantCardProps {
  title: string;
  image: string;
  opening: string;
  closing: string;
  availabilities: string[];
  address: string;
}

export const RestaurantCard = ({
  title,
  image,
  opening,
  closing,
  availabilities,
  address,
}: RestaurantCardProps) => {
  const route = useRouter();
  return (
    <Card
      className="rounded-sm h-fit p-2 shadow-none border-none hover:shadow-md hover:border-4 bg-white dark:bg-gray-500 "
      onClick={() => route.push("/resto/rest")}
    >
      <div className="relative h-24 md:h-44 w-full rounded-md">
        <Image
          src={image}
          alt="Picture of the restaurant"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded-md"
        />
      </div>
      <CardContent className=" px-1 text-neutral-800 dark:text-white pb-0">
        <CardTitle className="py-1 font-semibold ">{title}</CardTitle>
        <CardDescription className="text-sm dark:text-white">
          {address}
        </CardDescription>
        <div className="w-full py-1 flex space-x-2 font-semibold text-sm">
          <h1 className="text-neutral-700 dark:text-white">
            {opening} - {closing}
          </h1>
        </div>
      </CardContent>
      <div className="w-full  flex  space-x-1 md:gap-2 items-center px-0 md:justify-center ">
        {availabilities.map((slot, i) => (
          <button
            key={i}
            className="text-xs md:text-sm px-2 md:px-5 py-[5px]  rounded-sm bg-primary text-white font-semibold "
          >
            {slot}
          </button>
        ))}
      </div>
    </Card>
  );
};
