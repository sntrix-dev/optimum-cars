import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { Cars, carsData } from "../../data";
import { Condition } from "../Components";

interface CarsSourcerProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}

export const CarsSourcer: FC<CarsSourcerProps> = ({ children, ...props }) => {
  const [cars, setCars] = useState<Cars[]>(carsData);

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  useEffect(() => {
    if ((search?.length ?? false) > 0) {
      const newCars = cars.filter((car) => {
        const title = car.title
          ?.toLowerCase()
          .replaceAll(" ", "")
          .slice(0, (search?.length ?? 1) - 1);
        console.log(title, search?.toLowerCase().replaceAll(" ", ""));
        return car;
      });

      setCars(newCars);
    }
  }, [search]);

  return (
    <>
      <Condition {...props} condition={cars.length > 0}>
        {cars.map((car, index) => {
          return (
            <div key={index}>
              {Children.map(children, (child) => {
                if (isValidElement(child)) {
                  return cloneElement(child, {
                    ...car,
                  });
                } else {
                  return <></>;
                }
              })}
            </div>
          );
        })}
      </Condition>
    </>
  );
};
