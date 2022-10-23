import { createElement, FC, HTMLAttributes } from "react";

interface StoreWrapperProps extends HTMLAttributes<HTMLDivElement> {
    children: JSX.Element[]
}

export const StoreWrapper: FC<StoreWrapperProps> = ({
    children,
    ...props
}) => createElement(
    "div",
    {
        ...props,
        className: "w-full max-w-[1500px] mx-auto px-4 py-10 grid grid-cols-[20rem_calc(100%-20rem-3rem)] gap-12"
    },
    children
)