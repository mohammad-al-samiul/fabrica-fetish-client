"use client";
import FFForm from "@/components/form/FFForm";
import FFInput from "@/components/form/FFInput";
import FFInputFile from "@/components/form/FFInputFile";
import Loading from "@/components/ui/Loading";
import { useUserRegistration } from "@/hooks/auth.hook";
import registerValidationSchema from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import NextLink from "next/link";
export default function Register() {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { phone } = data;

    const { photo, ...userData } = data;

    const formData = new FormData();

    const userInfo = {
      ...userData,
    };
    userInfo.phone = Number(phone);

    formData.append("data", JSON.stringify(userInfo));
    formData.append("image", photo);

    // console.log(formData.get("image"));
    // console.log(formData.get("data"));
    handleUserRegistration(formData);
  };

  return (
    <>
      {isPending && <Loading />}

      <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center mt-5">
        <h3 className="my-2 text-xl font-bold">Register with Fabrica Fetish</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[35%]">
          <FFForm
            defaultValues={{
              name: "Mir Hussain",
              email: "mir@gmail.com",
              phone: "01711223344",
              password: "123456",
            }}
            resolver={zodResolver(registerValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FFInput label="Name" name="name" size="sm" type="text" />
            </div>
            <div className="py-3">
              <FFInput label="Email" name="email" size="sm" type="email" />
            </div>
            <div className="py-3">
              <FFInput label="Phone" name="phone" size="sm" type="number" />
            </div>
            <div className="py-3">
              <FFInput
                label="Password"
                name="password"
                size="sm"
                type="password"
              />
            </div>
            <div className="py-3">
              <FFInputFile label="Profile Photo" name="photo" size="sm" />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 text-default"
              size="lg"
              type="submit"
            >
              Registration
            </Button>
          </FFForm>
          <div className="text-center">
            Already have an account ? <NextLink href={"/login"}>Login</NextLink>
          </div>
        </div>
      </div>
    </>
  );
}
