"use client";
import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 justify-center items-center">
        {[...Array(6)].map((item, i) => (
          // <CardSkeleton key={i} />
          <p key={i}>loading...</p>
        ))}
      </div>
    </Container>
  );
}
