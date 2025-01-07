import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users } from "lucide-react";

export const GuestSelector = () => {
  return (
    <>
      <Select>
        <SelectTrigger className="w-fit min-w-5 px-4 ">
          <SelectValue
            placeholder={
              <div className="flex items-center space-x-2 text-stone-500">
                <Users className="w-5 h-5 " /> <p>People</p>
              </div>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2">2 Chair</SelectItem>
          <SelectItem value="3">3 Chair</SelectItem>
          <SelectItem value="6">6 Chair</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};
