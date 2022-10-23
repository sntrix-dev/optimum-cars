import { createElement, FC } from "react";

interface NavWrapperProps {
    children: JSX.Element[]
}

export const NavWrapper: FC<NavWrapperProps> = ({
    children
}) => createElement(
    "div",
    {
        className: `flex items-center space-x-8`
    },
    children
)