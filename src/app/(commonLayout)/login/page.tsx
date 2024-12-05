"use client";

import FFForm from "@/components/form/FFForm";
import FFInput from "@/components/form/FFInput";
import Loading from "@/components/ui/Loading";
import { useUser } from "@/context/user.provider";
import { useUserLogin } from "@/hooks/auth.hook";
import loginValidationSchema from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import NextLink from "next/link";

export default function Login() {
  const { setIsLoading: userLoading } = useUser();
  const router = useRouter();

  // Safely retrieve search params for the redirect
  const redirect =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("redirect")
      : null;

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isSuccess, isPending, redirect, router, userLoading]);

  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with Fabrica Fetish</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[80%] px-3 lg:w-[35%]">
          <FFForm
            defaultValues={{
              email: "mir@gmail.com",
              password: "123456",
            }}
            resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FFInput label="Email" name="email" type="email" />
            </div>
            <div className="py-3">
              <FFInput label="Password" name="password" type="password" />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-800 font-semibold text-default-50"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FFForm>
          <div className="text-center">
            Don&lsquo;t have an account?{" "}
            <NextLink href="/register">Register</NextLink>
          </div>
        </div>
      </div>
    </>
  );
}
