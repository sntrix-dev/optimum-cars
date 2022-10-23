import { createElement, FC } from "react";

export const Avatar: FC = () => createElement(
    "div",
    {
        className: 'w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-xs bg-[#0008C1]'
    },
    <>OP</>
)