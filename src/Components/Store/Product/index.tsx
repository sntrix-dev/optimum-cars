import { FC } from "react";
import { Cars } from "../../../packages/data";

export const Product: FC<Cars> = ({
    image,
    title,
    car_type,
    start_production
}) => {
    return (
        <div className="bg-white rounded-3xl p-6 space-y-3 h-full flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-medium max-text-line-1 my-0 py-0">{title}</h3>
                <p className="text-sm text-[#A6AFBA]">{car_type ?? ''}</p>
            </div>
            <div className="w-full">
                <img src={image} alt={title} width="100%" height="100%" />
            </div>
            <h3>{start_production ?? ''}</h3>
        </div>
    )
}