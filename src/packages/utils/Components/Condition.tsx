import { createElement, FC, Fragment, HTMLAttributes } from "react";

interface ConditionProps extends HTMLAttributes<HTMLDivElement> {
    condition: boolean
    children: JSX.Element | JSX.Element[] | string
}

export const Condition: FC<ConditionProps> = ({
    children,
    condition,
    ...props
}) => {

    if (condition) {
        return createElement(
            "div",
            {
                ...props
            },
            children
        )
    }

    return <Fragment />
}