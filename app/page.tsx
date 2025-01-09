"use client";

import { LocationListcard } from "@/components/lrigthSideCards/location-list-card";
import { OfferCards } from "@/components/lrigthSideCards/offer-card";
import { OfficialWebSites } from "@/components/lrigthSideCards/website-list";
import { RestaurantContainer } from "@/components/restaurants/restaurant-container";

import useAuth from "@/hooks/use-auth";
// import { useRouter } from "next/navigation";

export default function Home() {
  const { isAuthenticated, sessionExpired } = useAuth();
  // const router = useRouter();
  // if (isAuthenticated && !sessionExpired) {
  //   router.push("/");
  // }
  console.log(!isAuthenticated || (isAuthenticated && !sessionExpired));
  return (
    <div className="w-full  flex flex-col sm:grid sm:grid-cols-12 gap-1 md:gap-2  my-3 space-y-2 sm:space-y-0 px-2">
      <div className=" md:col-start-2  sm:col-span-8 md:col-span-7 shadow-md h-fit rounded-sm">
        <RestaurantContainer />
      </div>
      <div className=" sm:col-span-4 md:col-span-3  h-fit ">
        <div className="w-full h-fit flex-flex-col space-y-4 px-3 ">
          <OfferCards />
          <LocationListcard />
          <OfficialWebSites />
        </div>
      </div>
    </div>
  );
}
