"use client";
import FFForm from "@/components/form/FFForm";
import FFInput from "@/components/form/FFInput";
import Loading from "@/components/ui/Loading";
import { useUser } from "@/context/user.provider";
import { useUserLogin } from "@/hooks/auth.hook";
import loginValidationSchema from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function Login() {
  const { setIsLoading: userLoading } = useUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  // console.log(redirect);

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
  }, [isSuccess, isPending]);
  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[35%]">
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
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FFForm>
          <div className="text-center">
            Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}
