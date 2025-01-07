import { Separator } from "@radix-ui/react-separator";
import { RestaurantCard } from "./restaurant-card";

export const RestaurantContainer = () => {
  const restaurants = [
    {
      title: "Brahma Pure Veg",
      image:
        "https://b.zmtcdn.com/data/pictures/6/11626/68067c4ba8455e74fb520820557fb592_o2_featured_v2.jpg",
      address: "Beverages Sinhgad Road, Pune",
      opening: "11:00 AM",
      closing: "10:30 PM",
      availabilities: ["12:00", "12:45", "01:00"],
    },
    {
      title: "Brahma Pure Veg",
      image:
        "https://b.zmtcdn.com/data/pictures/6/11626/68067c4ba8455e74fb520820557fb592_o2_featured_v2.jpg",
      address: "Beverages Sinhgad Road, Pune",
      opening: "11:00 AM",
      closing: "10:30 PM",
      availabilities: ["12:00", "12:45", "01:00"],
    },
    {
      title: "Brahma Pure Veg",
      image:
        "https://b.zmtcdn.com/data/pictures/6/11626/68067c4ba8455e74fb520820557fb592_o2_featured_v2.jpg",
      address: "Beverages Sinhgad Road, Pune",
      opening: "11:00 AM",
      closing: "10:30 PM",
      availabilities: ["12:00", "12:45", "01:00"],
    },
    {
      title: "Brahma Pure Veg",
      image:
        "https://b.zmtcdn.com/data/pictures/6/11626/68067c4ba8455e74fb520820557fb592_o2_featured_v2.jpg",
      address: "Beverages Sinhgad Road, Pune",
      opening: "11:00 AM",
      closing: "10:30 PM",
      availabilities: ["12:00", "12:45", "01:00"],
    },
    {
      title: "Brahma Pure Veg",
      image:
        "https://b.zmtcdn.com/data/pictures/6/11626/68067c4ba8455e74fb520820557fb592_o2_featured_v2.jpg",
      address: "Beverages Sinhgad Road, Pune",
      opening: "11:00 AM",
      closing: "10:30 PM",
      availabilities: ["12:00", "12:45", "01:00"],
    },
    {
      title: "Brahma Pure Veg",
      image:
        "https://b.zmtcdn.com/data/pictures/6/11626/68067c4ba8455e74fb520820557fb592_o2_featured_v2.jpg",
      address: "Beverages Sinhgad Road, Pune",
      opening: "11:00 AM",
      closing: "10:30 PM",
      availabilities: ["12:00", "12:45", "01:00"],
    },
  ];
  return (
    <div className="w-full h-fit bg-white dark:bg-gray-400 p-1">
      <h1 className="text-xl font-bold dark:text-white">Our Restaurant</h1>
      <Separator className="h-[3px] bg-primary my-1" />
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3  md:p-2 sm:md-1  rounded-sm my-2 ">
        {restaurants.map((resto, i) => (
          <RestaurantCard key={i} {...resto} />
        ))}
      </div>
    </div>
  );
};
