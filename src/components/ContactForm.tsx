"use client";

import axios from "axios";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TFormValidator, formValidator } from "../../libs/formValidator";
import { useState } from "react";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TFormValidator>({
    resolver: zodResolver(formValidator),
  });

  const onSubmit = async ({ emailSender, message }: TFormValidator) => {
    try {
      setIsLoading(true);
      await axios.post("/api/send", {
        emailSender,
        message,
      });
    } catch (error) {
      console.log("Something went wrong");
    } finally {
      setValue("emailSender", "");
      setValue("message", "");
      setIsLoading(false);
    }
  };

  return (
    <form
      className="w-full max-w-2xl flex flex-col gap-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="h-14 px-4 rounded-lg bg-neutral-100 font-normal border border-neutral-800 focus-visible:outline-none"
        placeholder="Your email"
        {...register("emailSender", { required: true })}
        name="emailSender"
        type="email"
        maxLength={500}
        required
        disabled={isLoading}
      />
      {errors.emailSender && (
        <p className="text-sm text-red-500">{errors.emailSender.message}</p>
      )}
      <textarea
        className="h-52 p-4 rounded-lg bg-neutral-100 border border-neutral-800 focus-visible:outline-none"
        placeholder="Your message"
        {...register("message", { required: true })}
        required
        maxLength={5000}
        name="message"
        disabled={isLoading}
      />
      {errors.message && (
        <p className="text-sm text-red-500">{errors.message.message}</p>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="disabled:opacity-60 w-full sm:w-fit bg-neutral-800 text-neutral-200 rounded-2xl px-8 py-3 flex items-center justify-center font-semibold hover:bg-neutral-600 transition"
      >
        Send
        <Send className="h-5 w-5 ml-2" />
      </button>
    </form>
  );
};
