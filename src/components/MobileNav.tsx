import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {

  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    return(
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-600"/>
      </SheetTrigger>       
       <SheetContent className="pt-5 bg-white">
        <SheetTitle  className="text-green-600" >
        {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-green-600" />
              {user?.email}
            </span>
          ) : (
            <span> Welcome to FoodieEats.com!</span>
          )}
        </SheetTitle>
        <Separator/>
        <SheetDescription className="flex flex-col px-4 gap-5">

            {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 font-bold bg-green-600">Log In</Button>
          )}
        </SheetDescription>
       </SheetContent>
    </Sheet>    
    )
};

export default MobileNav;