"use client";

import { Card } from "@/components/ui/card";
//import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

import {
ArrowRight,
Code,
ImageIcon,
MessageSquare,
Music,
Settings,
Inbox,
Folder,
Ticket,
Lock,
Target

} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
{
label: "Your Notifications",
icon: Inbox,
color: "text-violet-500",
bgColor: "bg-violet-500/10",
href: "/notifications"
},
 
{
  label: "Overview",
  icon: Target,
  color: "text-violet-500",
  bgColor: "bg-violet-500/10",
  href: "/notifications"
  },
   

  {
     label: "Projects",
     icon: Folder,
     href: "/projects",
     color: "text-emerald-500",
     bgColor: "bg-emerald-500/10"

  },

  {
    label: "Tickets",
    icon: Ticket,
    href: "/tickets",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10"
 },

 {
  label: "Admin",
  icon: Lock,
  href: "/admin",
  color: "text-orange-700",
  bgColor: "bg-orange-700/10"
},


  
 
  {
     label: "Settings",
     icon: Settings,
     href: "/settings",
     color: "text-white-700",
     bgColor: "bg-white-700/10"  
  },
 
 
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4x1 font bold text-center">
          Company Developed Bugtracker
          </h2>
      </div>
      <p className="text-muted-foreground font-light text-sm md: text-lg text-center">
          An easy to use and top of the line bugtracker that anyone can use.zzz 
  
          </p>
          <div className="px-4 md:px-20 lg:px-32 space-y-4">
            {tools.map((tool) =>(
              <Card
              onClick={()=> router.push(tool.href)}
                key={tool.href}
                className="p-4 border-black/5 flex items-center
                justify-between hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)}/>
                </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  
    
  );
};

export default DashboardPage;

