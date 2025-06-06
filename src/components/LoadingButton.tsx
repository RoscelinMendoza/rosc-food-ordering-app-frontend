import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const LoadingButton = () => {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin bg-pink-50" />
      Loading
    </Button>
  );
};

export default LoadingButton;
