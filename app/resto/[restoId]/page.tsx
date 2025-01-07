import { RestaurantPage } from "@/components/restaurants/restaurant-page";
import { OfferCards } from "@/components/lrigthSideCards/offer-card";
import { OfficialWebSites } from "@/components/lrigthSideCards/website-list";
import { LocationListcard } from "@/components/lrigthSideCards/location-list-card";

const RestaurantDeatilPage = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col sm:grid sm:grid-cols-12 gap-1 md:gap-2  my-3 space-y-2 sm:space-y-0 px-2">
        <div className=" md:col-start-2  sm:col-span-8 md:col-span-7 shadow-md h-fit rounded-sm">
          <RestaurantPage />
        </div>
        <div className=" sm:col-span-4 md:col-span-3  h-fit ">
          <div className="w-full h-fit flex-flex-col space-y-4 px-3 ">
            <OfferCards />
            <LocationListcard />
            <OfficialWebSites />
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDeatilPage;
