import { Separator } from "@radix-ui/react-separator";
import { RestaurantCard } from "./restaurant-card";
import { LayoutDashboard, List } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
  const [listView, setListView] = useState(false);
  return (
    <div className="w-full h-fit bg-white dark:bg-gray-400 p-1">
      <div className="flex justify-between mx-1">
        <h1 className="text-xl font-bold dark:text-white">Our Restaurant</h1>
        <button onClick={() => setListView(!listView)}>
          {listView ? <LayoutDashboard /> : <List />}
        </button>
      </div>
      <Separator className="h-[3px] bg-primary my-1" />
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3  md:p-2 sm:md-1  rounded-sm my-2",
          listView ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-3"
        )}
      >
        {restaurants.map((resto, i) => (
          <RestaurantCard key={i} {...resto} listview={listView} />
        ))}
      </div>
    </div>
  );
};
