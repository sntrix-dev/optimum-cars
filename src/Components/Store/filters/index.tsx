import { FC } from "react";
import { FilterSourcer } from "../../../packages/utils/DataSources";
import { FilterItem } from "./item";

export const Filters: FC = () => {
    return (
        <section className="bg-white rounded-3xl shadow-md p-4 space-y-4 h-max">
            <h3 className="text-lg font-medium tracking-wide">Filter By</h3>
            <div className="h-0.5 w-full rounded-full bg-[#F6F7F9]" />
            <div className="space-y-4">
                <h2 className="text-[#4C5C6B]">Car Type</h2>
                <FilterSourcer className="space-y-3 max-h-[25rem] overflow-y-auto" filterBy="car_type">
                    <FilterItem />
                </FilterSourcer>
            </div>
            <div className="h-0.5 w-full rounded-full bg-[#F6F7F9]" />
            <div className="space-y-4">
                <h2 className="text-[#4C5C6B]">Production Year</h2>
                <FilterSourcer className="space-y-3 max-h-[25rem] overflow-y-auto" filterBy="start_production">
                    <FilterItem />
                </FilterSourcer>
            </div>
        </section>
    )
}