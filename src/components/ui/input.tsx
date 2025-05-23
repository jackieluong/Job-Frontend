

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm",
          "ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "file:text-slate-950 placeholder:text-slate-500",
          "focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950",
          "dark:file:text-slate-50 dark:placeholder:text-slate-400 dark:focus:ring-green-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
