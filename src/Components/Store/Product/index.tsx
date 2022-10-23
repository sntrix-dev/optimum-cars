import { FC } from "react";
import { Cars } from "../../../packages/data";

export const Product: FC<Cars> = ({
    image,
    title,
    car_type,
    start_production
}) => {
    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}