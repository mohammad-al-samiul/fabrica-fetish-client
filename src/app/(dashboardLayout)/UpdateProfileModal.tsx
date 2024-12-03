"use client";
import FFForm from "@/components/form/FFForm";
import FFInput from "@/components/form/FFInput";
import FFInputFile from "@/components/form/FFInputFile";
import FFTextarea from "@/components/form/FFTextArea";
import Loading from "@/components/ui/Loading";
import { useUserUpdateProfile } from "@/hooks/auth.hook";
import { IUser } from "@/types";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

type TModalProps = {
  size: "md" | "lg" | "sm" | undefined;
  user: IUser;
  isOpen: boolean;
  onClose: () => void;
};

export default function UpdateProfileModal({
  size,
  user,
  isOpen,
  onClose,
}: TModalProps) {
  const {
    mutate: handleUpdateProfile,
    isPending,
    isSuccess,
  } = useUserUpdateProfile();

  const defaultValues = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
  };

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

    handleUpdateProfile(formData);
  };

  return (
    <>
      {isPending && !isSuccess && <Loading />}
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Profile
              </ModalHeader>
              <ModalBody>
                <FFForm defaultValues={defaultValues} onSubmit={onSubmit}>
                  <div className="py-3">
                    <FFInput label="Name" name="name" size="sm" type="text" />
                  </div>
                  <div className="py-3">
                    <FFInput
                      label="Email"
                      name="email"
                      size="sm"
                      type="email"
                    />
                  </div>
                  <div className="py-3">
                    <FFInput
                      label="Phone"
                      name="phone"
                      size="sm"
                      type="number"
                    />
                  </div>
                  <div className="py-3">
                    <FFTextarea label="Address" name="address" size="sm" />
                  </div>

                  <div className="py-3">
                    <FFInputFile
                      required={false}
                      label="Profile Photo"
                      name="photo"
                      size="sm"
                    />
                  </div>

                  <Button
                    className="my-3 w-full rounded-md bg-default-900 text-default"
                    size="lg"
                    type="submit"
                  >
                    Update Profile
                  </Button>
                </FFForm>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
