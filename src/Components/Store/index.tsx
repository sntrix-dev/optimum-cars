import { FC } from "react";
import { CarsSourcer } from "../../packages/utils/DataSources";
import { Filters } from "./filters";
import { Product } from "./Product";
import { StoreWrapper } from "./Wrapper";

export const Store: FC = () => {
    return (
        <section className="w-screen">
            <StoreWrapper>
                <Filters />
                <CarsSourcer className="w-full grid grid-cols-3 gap-12">
                    <Product />
                </CarsSourcer>
            </StoreWrapper>
        </section>
    )
} 