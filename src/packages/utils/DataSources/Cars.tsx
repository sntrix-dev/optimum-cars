import { Children, cloneElement, FC, HTMLAttributes, isValidElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Cars, carsData } from "../../data";
import { Condition } from "../Components";

interface CarsSourcerProps extends HTMLAttributes<HTMLDivElement> {
    children: JSX.Element
}

export const CarsSourcer: FC<CarsSourcerProps> = ({
    children
}) => {

    const [cars, setCars] = useState<Cars[]>(carsData)

    const [searchParams, setSearchParams] = useSearchParams()

    const search = searchParams.get('search');
    const production_year = searchParams.get('production_year');
    const car_type = searchParams.get('car_type');

    useEffect(() => {
    }, [search, production_year, car_type])

    return (
        <>
            <Condition condition={cars.length > 0} >
                {cars.map((car, index) => {
                    return (
                        <div key={index}>
                            {Children.map(children, (child) => {
                                if (isValidElement(child)) {
                                    return cloneElement(child, {
                                        ...car
                                    })
                                } else {
                                    return <></>
                                }
                            })}
                        </div>
                    )
                })}
            </Condition>
        </>
    )
}