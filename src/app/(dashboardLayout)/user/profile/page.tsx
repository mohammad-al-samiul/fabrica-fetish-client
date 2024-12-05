"use client";
import Loading from "@/components/ui/Loading";
import { useGetUserProfile } from "@/hooks/auth.hook";

import React from "react";
import UpdateProfileModal from "../../UpdateProfileModal";
import { Button, Divider, useDisclosure } from "@nextui-org/react";
import { Avatar } from "antd";

export default function Profile() {
  const { data, isPending, isLoading } = useGetUserProfile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState<"md" | "lg" | "sm" | undefined>("lg");

  const handleOpen = (size: any) => {
    setSize(size);
    onOpen();
  };

  const user = data?.data;

  return (
    <>
      {isLoading && isPending && <Loading />}
      <div className="md:pt-10 pt-5">
        <h4 className="md:text-4xl text-2xl font-semibold text-center mt-6">
          Hey, <span className="text-accent font-bold">{user?.name}!</span> It's
          great to see you again!
        </h4>
        <div className="xl:w-[1000px] mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            {/* Profile Picture and Info */}
            <div className="col-span-1 text-center text-default-800 bg-cover bg-center">
              <div className="bg-[url('/bg_hero.svg')] bg-cover bg-no-repeat lg:h-[500px] py-8 px-4 flex flex-col justify-center items-center">
                <Avatar
                  size={200}
                  src={user?.profileImg || "https://shorturl.at/t76lD"}
                  alt="Profile Picture"
                />
                <div className="mt-6 space-y-3">
                  <h5 className="md:text-lg text-[18px] uppercase font-semibold">
                    {user?.name}
                  </h5>
                  <p className="uppercase font-medium text-gray-700">
                    {user?.role}
                  </p>
                  <div>
                    <div>
                      <Button
                        className="pb-1 bg-default-800 text-default-50 rounded-md"
                        onPress={() => handleOpen(size)}
                      >
                        Update
                      </Button>
                    </div>
                    <div>
                      <UpdateProfileModal
                        size={size}
                        user={user}
                        isOpen={isOpen}
                        onClose={onClose}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="col-span-2 lg:h-[500px] py-8 px-10 relative">
              <div>
                <h4 className="font-semibold text-2xl mb-4 text-gray-700">
                  Personal Information
                </h4>
                <Divider className="my-4" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-lg text-gray-600">
                      Email
                    </h5>
                    <p className="text-gray-800">{user?.email}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg text-gray-600">
                      Phone
                    </h5>
                    <p className="text-gray-800">{user?.phone || "N/A"}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg text-gray-600">
                      Address
                    </h5>
                    <p className="text-gray-800">{user?.address || "N/A"}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg text-gray-600">
                      Member Since
                    </h5>
                    <p className="text-gray-800">
                      {user?.createdAt?.slice(0, 10) || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
