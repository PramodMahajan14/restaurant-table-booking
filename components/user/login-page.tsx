"use client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import useAuth from "@/hooks/use-auth";
import { useModal } from "@/hooks/use-modal";
import { useState } from "react";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

interface loginInput {
  email: string;
  password: string;
}

interface loginResponse {
  data: {
    statuscode: number;
    msg: string;
    accesstoken?: string;
  };
}
function LoginPage() {
  const { onOpen } = useModal();
  const { setSessionExpired } = useAuth();
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<loginInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setUserEmail(values.email);
    try {
      const response: loginResponse = await axios.post(
        "http://localhost:8080/v1/api/login",

        values,
        { withCredentials: true }
      );

      if (response.data.statuscode === 200) {
        setSessionExpired(false);
        router.push("/");
      } else if (response.data.statuscode === 401) {
        console.log(userEmail);
        onOpen("snedVerificationLink", userEmail);
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Login Fail!",
          description: response.data.msg,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } catch (err) {
      console.log("[USER_SIGNUP]", err);
    }
  };
  const isLoading = form.formState.isSubmitting;
  return (
    // <div className="h-screen w-full flex items-center justify-center">
    <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle className="text-center text-xl">Login</CardTitle>
        <CardDescription>Enter your registered mail</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="email"
                        id="email"
                        placeholder="John@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        disabled={isLoading}
                        id="password"
                        placeholder="Jogn&ddyjf92"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className=" w-full mx-2 my-3 bg-violet-400 hover:bg-violet-500 dark:text-white"
              type="submit"
              disabled={isLoading}
            >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
    // </div>
  );
}

export default LoginPage;
