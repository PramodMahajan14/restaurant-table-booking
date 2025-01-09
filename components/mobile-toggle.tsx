import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
export const MobileToggle = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center px-3 sm:m-0 sm:hidden">
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Wel Come</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
