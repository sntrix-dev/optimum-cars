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
                <CarsSourcer>
                    <Product />
                </CarsSourcer>
            </StoreWrapper>
        </section>
    )
} 