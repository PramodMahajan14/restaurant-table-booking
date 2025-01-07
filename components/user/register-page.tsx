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

import axios from "axios";
import useAuth from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const phoneValidation = new RegExp(
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
);
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);
const registerSchema = z.object({
  name: z.string().min(1, { message: "Must have at least 1 character" }),
  email: z
    .string()
    .min(1, { message: "Must have at least 1 character" })
    .email({
      message: "Must be a valid email",
    }),
  password: z
    .string()
    .min(1, { message: "Must have at least 1 character" })
    .regex(passwordValidation, {
      message: "Your password is not valid",
    }),

  contact: z
    .string()
    .min(1, { message: "Must have at least 1 character" })
    .regex(phoneValidation, { message: "invalid phone" }),
});

interface registerInput {
  name: string;
  email: string;
  password: string;
  contact: string;
}

interface RegisterResponse {
  data: {
    statuscode: number;
    msg: string;
  };
}

function RegisterPage() {
  const { userSignUp } = useAuth();
  const { toast } = useToast();

  const form = useForm<registerInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",

      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      const response: RegisterResponse = await axios.post(
        "http://localhost:8080/v1/api/register",
        values
      );

      if (response.data.statuscode === 200) {
        userSignUp();
      } else {
        console.log(response.data.msg);
        toast({
          variant: "destructive",
          title: "Uh oh! Registration Fail!",
          description: response.data.msg,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Something Wrong!",

        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.log("[USER_SIGNUP]", err);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center text-xl">Registration</CardTitle>
        <CardDescription>Enter your contat Details</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="text"
                        id="name"
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
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="number"
                        id="contact"
                        placeholder="786-344-3465"
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
              className=" w-full mx-2 my-3 bg-violet-400 hover:bg-violet-500"
              type="submit"
              disabled={isLoading}
            >
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default RegisterPage;
