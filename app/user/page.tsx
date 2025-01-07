"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginPage from "@/components/user/login-page";
import RegisterPage from "@/components/user/register-page";
import useAuth from "@/hooks/use-auth";

export default function UserPage() {
  const { isUserSignUp } = useAuth();
  return isUserSignUp ? (
    <div className="h-screen w-full  flex flex-col items-center justify-center">
      <h1 className="text-zinc-700 dark:text-zinc-400 md:text-3xl text-xl">
        Your Registration is Successfully
      </h1>
      <p className="text-zinc-700 md:text-xl dark:text-zinc-400">
        Please check your email and verify
      </p>
    </div>
  ) : (
    <Tabs
      defaultValue="signin"
      className="h-screen w-full flex flex-col items-center justify-center"
    >
      <TabsList>
        <TabsTrigger value="signin">Sign-IN</TabsTrigger>
        <TabsTrigger value="signup">Sign-UP</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <LoginPage />
      </TabsContent>
      <TabsContent value="signup">
        <RegisterPage />
      </TabsContent>
    </Tabs>
  );
}
