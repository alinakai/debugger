"use client";

import { Menu } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

const MobileSidebar = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {

        setIsMounted(true) 
    }, []);

    if (!isMounted) {
        return null;
    }


return(
    <Sheet>
        <SheetTrigger>
<Button variant="ghost" size="icon"
        className="md:hidden">
         <Menu />done
        </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
            <Sidebar />


        </SheetContent>
    </Sheet>
    );

}

export default MobileSidebar;