"use clinet";

import { useState } from "react";
import { add, format, isBefore, startOfDay } from "date-fns";
import {
  INTERVAL,
  RESTAURANT_END_TIME,
  RESTAURANT_OPENING_TIME,
} from "../constants/config";
import { Calendar } from "@/components/ui/calendar";

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}
export const CalenderIndex = () => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });
  const today = startOfDay(new Date());

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const beginning = add(justDate, { hours: RESTAURANT_OPENING_TIME });
    const end = add(justDate, { hours: RESTAURANT_END_TIME });
    const interval = INTERVAL;

    const times = [];
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  console.log(date);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {date.justDate ? (
        <div className="flex flex-wrap gap-4">
          {times?.map((time, i) => (
            <div key={`time-${i}`} className="rounded-sm bg-gray-100 p-2">
              <button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, "kk:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Calendar
          mode="single"
          className="p-4"
          onSelect={(selectedDate) =>
            setDate((prev) => ({ ...prev, justDate: selectedDate || null }))
          }
          disabled={(date) => isBefore(date, today)}
        />
      )}
    </div>
  );
};
