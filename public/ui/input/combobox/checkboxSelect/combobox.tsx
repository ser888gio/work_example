import { Combobox as ComboboxPrimitive } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import * as React from "react";
import { forwardRef, useState, useEffect } from "react";
import { ClearButton } from "../../clearButton";
import { ChevronDownIcon } from "../../../../icons/chevronDown";
import { CheckboxOption } from "./checkboxOption";
import { Options } from "../components/options";
import { Button } from "../components/comboboxButton";
import { Input } from "../components/input";

interface ComboboxProps
  extends React.ComponentPropsWithoutRef<typeof ComboboxPrimitive> {
  showClearButton?: boolean;
  onClear?: () => void;
  defaultValue?: string[];
  onInputChange?: (value: string[]) => void;
  options: Array<{ id: string | number; value: string; label: string }>;
  showPlaceholder?: boolean;
  children?: React.ReactNode;
}

const Combobox = forwardRef<
  React.ElementRef<typeof ComboboxPrimitive>,
  ComboboxProps
>(
  (
    {
      className,
      children,
      showClearButton,
      onChange,
      defaultValue,
      onClear,
      onInputChange,
      options,
      ...props
    },
    ref
  ) => {
    //Use state for selecting values. If nothing is provided, defaultValue will become the selected value
    const [selectedValues, setSelectedValues] = useState<string[]>(
      defaultValue instanceof Array
        ? defaultValue
        : defaultValue
          ? [defaultValue]
          : []
    );

    const [query, setQuery] = useState<string>(
      defaultValue ? defaultValue.join(", ") : ""
    );
    const [filteredOptions, setFilteredOptions] = useState(options);

    useEffect(() => {
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredOptions(filtered);
    }, [query, options]);

    const handleClear = () => {
      setSelectedValues([]);
      setQuery("");
      if (onChange) {
        onChange([]);
      }
      if (onClear) {
        onClear();
      }
      if (onInputChange) {
        onInputChange([]);
      }
    };

    const handleChange = (value: string | null) => {
      setSelectedValues(value ? [value] : []);
      if (value) {
        const selectedOption = options.find((opt) => opt.value === value);
        if (selectedOption) {
          setQuery(selectedOption.label);
          if (onInputChange) {
            onInputChange([selectedOption.label]);
          }
        }
      }
      if (onChange) {
        onChange(value);
      }
    };

    //Takes an input change event as an argument. Extracts the new value from the input element. Updates the state with the new value. Optionally calls a provided callback function with the new value.
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setQuery(value);
      if (onInputChange) {
        onInputChange([value]);
      }
    };

    return (
      <ComboboxPrimitive
        multiple
        as="div"
        ref={ref}
        className={twMerge("absolute w-full", className)}
        onChange={handleChange}
        value={selectedValues}
        {...props}
      >
        <div className="flex items-center w-full">
          <Input
            onChange={handleInputChange}
            className="flex-grow peer"
            value={
              selectedValues.length > 0 ? selectedValues.join(", ") : query
            }
            data-focus={query ? "true" : undefined}
            displayValue={(value: string) => {
              const option = options.find((opt) => opt.value === value);
              return option ? option.label : query;
            }}
          />
          {children}
          <Button className="flex-shrink-0 h-full flex items-center">
            <ChevronDownIcon className="h-6 w-6" />
          </Button>
          {showClearButton && <ClearButton onClose={handleClear} />}
        </div>
        <Options anchor="bottom start" className="w-[var(--input-width)]">
          {filteredOptions.length === 0 ? (
            <div className="px-4 py-2">Žadné vysledky</div>
          ) : (
            filteredOptions.map((option) => (
              <CheckboxOption
                key={option.id}
                value={option.value}
                className={twMerge("", className)}
              >
                {option.label}
              </CheckboxOption>
            ))
          )}
        </Options>
      </ComboboxPrimitive>
    );
  }
);

export { Combobox, Input };