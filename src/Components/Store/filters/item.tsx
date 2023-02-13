import { FC, InputHTMLAttributes, useEffect, useId, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface FilterItemProps extends InputHTMLAttributes<HTMLInputElement> {
  filterValue?: string;
  query?: string;
}

export const FilterItem: FC<FilterItemProps> = ({ filterValue, query }) => {
  const [active, setActive] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const id = useId();

  const filter = searchParams.get(query ?? "he");

  useEffect(() => {
    if (filter) {
      const filters = filter.split(":");
      if (filters.includes(filterValue ?? "sntrix")) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  }, [filter, filterValue]);

  const updateQuery = () => {
    if (!!query && !!filterValue) {
      console.log("filterValue", filterValue);

      let queryValue: string = filterValue;
      const filters = filter?.split(":") ?? [];

      if (filters.length > 0) {
        if (filters.includes(queryValue)) {
          queryValue = filters.filter((f) => f !== filterValue).join(":");
        } else {
          queryValue = [...filters, filterValue].join(":");
        }
      }
      setSearchParams({
        [query]: queryValue,
      });
    }
  };

  return (
    <div onClick={updateQuery} className="flex items-center space-x-4 w-full">
      <input
        className="w-4 h-4 accent-[#0A20E6] peer-checked:rounded-3xl"
        id={id}
        type="checkbox"
        checked={active}
        onChange={updateQuery}
      />
      <label className="text-[#A6AFBA] max-text-line-1" htmlFor={id}>
        {filterValue}
      </label>
    </div>
  );
};
