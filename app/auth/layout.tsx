"use client";

import useAuth from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface accessResponse {
  msg: string;
  statuscode: number;
  userdata?: {
    id: string;
    email: string;
    name: string;
  } | null;
}
export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, setSessionExpired, setUser } = useAuth();
  const { toast } = useToast();
  const [isLoading, seIsLoading] = useState(false);
  const router = useRouter();

  const getUserData = async () => {
    seIsLoading(true);
    try {
      const response = await axios.get<accessResponse>(
        "http://localhost:8080/v1/api/access",
        {
          withCredentials: true,
        }
      );
      console.log(response);
      seIsLoading(false);

      if (response.data.statuscode === 200) {
        const user = response.data?.userdata;
        if (user) {
          setUser(user);
        } else {
          toast({
            description: "No user data found.",
          });
        }
      } else {
        if (response.data.statuscode === 400 || 401) {
          toast({
            description: response.data.msg,
          });
        }
        setSessionExpired(true);
        router.push("/user");
      }
    } catch (error) {
      seIsLoading(false);
      console.log("[Access_User]", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  // useEffect(() => {
  //   getUserData();
  // }, [isAuthenticated]);

  return isLoading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader2 className="h-16 w-16 animate-spin" />
    </div>
  ) : (
    <div>{children}</div>
  );
}
