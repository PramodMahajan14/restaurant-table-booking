import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Loader2, Send } from "lucide-react";

import { useModal } from "@/hooks/use-modal";
import { DialogTitle } from "@radix-ui/react-dialog";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const UnverifiedUserModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const isModalOpen = isOpen && type === "snedVerificationLink";
  const handleClose = () => {
    onClose();
  };

  const sendLink = async () => {
    try {
      setIsLoading(true);
      console.log(data);
      const res = await axios.get<{ msg: string; statuscode: number }>(
        `http://localhost:8080/v1/api/resent/${data}`
      );
      setIsLoading(false);
      if (res.data.statuscode === 200) {
        toast({
          description: res.data.msg,
        });
        onClose();
      } else {
        toast({
          variant: "destructive",
          title: "Link send Fail!",
          description: res.data.msg,
        });
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast({
        variant: "destructive",
        title: "Link send Fail!",
        description: "Something wrong!",
      });
    }
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="items-center justify-center ">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Unauthorized Account
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-center font-semibold">
          Your account not yet Verified
        </DialogDescription>
        <DialogDescription className="text-center ">
          Click below to send a verification link to your registered email
        </DialogDescription>
        <Button
          disabled={isLoading}
          variant="ghost"
          className="w-full dark:text-white"
          onClick={sendLink}
        >
          {isLoading ? (
            <Loader2 className="h-3 w-3 animate-spin" />
          ) : (
            <>
              Send <Send className="w-5 h-5" />
            </>
          )}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
