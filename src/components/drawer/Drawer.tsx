import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ArrowUpRight } from "lucide-react";

export default function DrawerComp() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <ArrowUpRight />
      </DrawerTrigger>
      <DrawerContent className="h-[90vh]">test</DrawerContent>
    </Drawer>
  );
}
