"use client";
import Container from "@/components/ui/Container";
import { Card, Skeleton } from "@nextui-org/react";

export default function Loading() {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 justify-center items-center mt-8 p-5">
        {[...Array(8)].map((_, i) => (
          <>
            <Card
              key={i}
              className="relative w-full h-[390px] flex flex-col justify-between rounded-lg"
            >
              {/* Rating Section */}
              <Skeleton className="absolute top-2 left-2 z-10 bg-default-50  px-2 py-1 rounded">
                <div className="w-24 h-4"></div>
              </Skeleton>
              <Skeleton className="absolute top-10 left-2 z-10 bg-default-50 text-default-900 text-xs font-semibold px-2 py-1 rounded dark:bg-default-200 dark:text-default-800">
                <div className="w-14 h-4"></div>
              </Skeleton>

              {/* Image Section */}
              <Skeleton className="bg-default-100 rounded-lg h-[500px] m-2">
                <div className="flex justify-center items-center relative "></div>
              </Skeleton>

              {/* Content Section */}
              <div className="flex flex-col h-full justify-between px-5">
                <div>
                  <Skeleton className="bg-default-50 rounded-lg">
                    <div className="h-5 rounded"></div>
                  </Skeleton>
                  <Skeleton className="bg-default-50 rounded-lg mt-2">
                    <div className="h-5 rounded"></div>
                  </Skeleton>
                </div>
                <div className="flex items-center justify-between pb-5">
                  <Skeleton className="bg-default-100 rounded-lg">
                    <div className="w-10 h-8 "></div>
                  </Skeleton>
                  <Skeleton className="bg-default-100 rounded-lg">
                    <div className="w-20 h-10 "></div>
                  </Skeleton>
                </div>
              </div>
            </Card>
          </>
        ))}
      </div>
    </Container>
  );
}
