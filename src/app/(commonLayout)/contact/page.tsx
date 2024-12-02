"use client";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaHeadphones,
  FaCheckCircle,
  FaShoppingCart,
  FaThumbsUp,
} from "react-icons/fa"; // Import React Icons
import { useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xbjvlqkk");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for messaging");
    }
  }, [state.succeeded]);

  return (
    <div className="container my-12 mx-auto px-2 md:px-4">
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
          </div>
        </div>
        <div className="flex flex-wrap">
          <form
            onSubmit={handleSubmit}
            className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
          >
            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-gray-600"
                htmlFor="exampleInput90"
              >
                Name
              </label>
              <input
                type="text"
                className="px-2 py-2 border w-full outline-none rounded-md focus:border-default-600 focus:ring-1 focus:ring-default-600"
                id="exampleInput90"
                placeholder="Name"
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-gray-600"
                htmlFor="exampleInput90"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="px-2 py-2 border w-full outline-none rounded-md focus:border-default-600 focus:ring-1 focus:ring-default-600"
                placeholder="Enter your email address"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-gray-600"
                htmlFor="exampleInput90"
              >
                Message
              </label>
              <textarea
                className="px-2 py-2 border w-full outline-none rounded-md focus:border-default-600 focus:ring-1 focus:ring-default-600"
                id="message"
                name="message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="form-control">
              <Button
                type="submit"
                className="w-full rounded-md text-default-50 bg-default-700"
              >
                Send
              </Button>
            </div>
          </form>

          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap">
              {/* Customer Support */}
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-default-400-100 p-4 text-gray-600">
                      {/* Icon for Customer Support */}
                      <FaHeadphones className="h-10 w-10" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold">Customer Support</p>
                    <p className="text-neutral-500">support@ecommerce.com</p>
                    <p className="text-neutral-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>

              {/* Order Status */}
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-default-400-100 p-4 text-gray-600">
                      {/* Icon for Order Status */}
                      <FaCheckCircle className="h-10 w-10" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold">Order Status</p>
                    <p className="text-neutral-500">orders@ecommerce.com</p>
                    <p className="text-neutral-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>

              {/* Shopping Cart Inquiries */}
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-default-400-100 p-4 text-gray-600">
                      {/* Icon for Shopping Cart Inquiries */}
                      <FaShoppingCart className="h-10 w-10" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold">Shopping Cart Inquiries</p>
                    <p className="text-neutral-500">cart@ecommerce.com</p>
                    <p className="text-neutral-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>

              {/* Feedback & Suggestions */}
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-default-400-100 p-4 text-gray-600">
                      {/* Icon for Feedback */}
                      <FaThumbsUp className="h-10 w-10" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold">Feedback & Suggestions</p>
                    <p className="text-neutral-500">feedback@ecommerce.com</p>
                    <p className="text-neutral-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
