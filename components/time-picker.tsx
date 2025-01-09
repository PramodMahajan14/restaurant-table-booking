"use client";

import * as React from "react";

import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const DatePicker = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "max-w-[250px]  justify-start text-left font-normal text-xs md:text-sm"
          )}
        >
          <Clock />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        comming soon
      </PopoverContent>
    </Popover>
  );
};
