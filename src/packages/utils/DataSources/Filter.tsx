import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  useEffect,
  useState,
} from "react";
import { Cars, carsData } from "../../data";
import { Condition } from "../Components";

interface FilterSourcerProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
  filterBy: "start_production" | "car_type";
}

export const FilterSourcer: FC<FilterSourcerProps> = ({
  children,
  filterBy,
  ...props
}) => {
  const [filter, setFilter] = useState<string[]>([]);

  useEffect(() => {
    carsData.map((car: Cars) => {
      const carFilter = car[filterBy]?.toString();
      if (!!carFilter) {
        setFilter((prevState: string[]) => {
          if (!prevState.includes(carFilter)) {
            return [...prevState, carFilter];
          } else {
            return prevState;
          }
        });
      }
      return car;
    });
  }, [filterBy]);

  return (
    <>
      <Condition {...props} condition={carsData.length > 0}>
        {filter.map((f, index) => {
          return (
            <div key={index}>
              {Children.map(children, (child) => {
                if (isValidElement(child)) {
                  return cloneElement<any>(child, {
                    filterValue: f,
                    query: filterBy,
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
