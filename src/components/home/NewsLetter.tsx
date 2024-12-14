"use client";

import { useSubscribeMutation } from "@/hooks/subscribe.hook";
import { Button, Spinner } from "@nextui-org/react"; // Import Spinner from NextUI

import { useState } from "react";
import { toast } from "sonner";

export default function NewsLetter() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // Track loading state
  const { mutate: subscribe } = useSubscribeMutation();

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }

    setIsLoading(true); // Start loading when the request is initiated
    subscribe(email, {
      onSuccess: () => {
        setIsLoading(false); // Stop loading on success
        toast.success("Subscription successful! Please check your inbox.");
      },
      onError: (error: any) => {
        setIsLoading(false); // Stop loading on error
        toast.error(
          error ? error?.message : "Failed to subscribe. Please try again."
        );
      },
    });
  };

  return (
    <section className="bg-default-50 text-default-700 py-12 px-6">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">
          Subscribe to our newsletter to get the latest deals, new product
          arrivals, exclusive offers, and insider tips directly to your inbox.
        </p>

        {/* Subscription Form */}
        <div className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-80 rounded-lg border border-gray-300"
          />
          <Button
            onClick={handleSubscribe}
            className="px-6 py-2 bg-default-800 text-white rounded-lg hover:bg-default-900"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? (
              <Spinner size="sm" color="white" /> // Show spinner when loading
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>

        {/* Extra Information */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            By subscribing, you agree to receive marketing emails and offers.
            You can unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
