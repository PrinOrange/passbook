import { Toaster } from "@/components/ui/toaster";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const PageContainer = (props: { className?: string; children?: ReactNode }) => {
  return (
    <div
      className={twMerge(
        "h-screen w-screen overflow-y-auto overflow-x-hidden select-none bg-gray-50",
        props.className,
      )}
    >
      {props.children}
      <Toaster />
    </div>
  );
};
