import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="h-screen bg-black/10 fixed inset-0 z-[100] backdrop-blur-md flex justify-center items-center">
      <Spinner color="default" />
    </div>
  );
}
