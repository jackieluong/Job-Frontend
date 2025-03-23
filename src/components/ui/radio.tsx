"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("flex space-x-8", className)}
    {...props}
  />
))
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { children: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <label className="flex items-center space-x-2 cursor-pointer">
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "h-5 w-5 rounded-full border-2 border-gray-300 flex items-center justify-center ring-offset-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-950 focus-visible:ring-offset-2",
        "data-[state=checked]:border-green-200 data-[state=checked]:bg-green-500 dark:border-slate-700 dark:data-[state=checked]:bg-slate-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-4 w-4 text-white dark:text-slate-900" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
    <span className="text-sm text-gray-700 dark:text-gray-300">{children}</span>
  </label>
))

RadioItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioItem }
