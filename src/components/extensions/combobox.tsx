"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ComboboxProps<T> {
  options: T[];
  selectedValues: T[];
  onSelect: (selected: T[] | string[]) => void;
  onCreate?: (label: string) => void;
  multiSelect?: boolean;
  allowCreate?: boolean;
  placeholder?: string;
  renderOption?: (option: T) => React.ReactNode;
  optionLabel?: keyof T; // Define qual chave será usada como label
  optionValue?: keyof T; // Define qual chave será usada como value
  returnOnlyValue?: boolean; // Retorna apenas os valores como strings
  mostTags?: boolean; // Exibe os itens selecionados acima do input
}

export function ComboboxFrancy<T>({
  options,
  selectedValues,
  onSelect,
  onCreate,
  multiSelect = true,
  allowCreate = false,
  placeholder = "Select options",
  renderOption,
  optionLabel = "label" as keyof T,
  optionValue = "value" as keyof T,
  returnOnlyValue = false,
  mostTags = true,
}: ComboboxProps<T>) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>("");

  const getLabel = (option: T) => option[optionLabel] as unknown as string;
  const getValue = (option: T) => option[optionValue] as unknown as string;

  const toggleSelection = (option: T) => {
    const isSelected = selectedValues.some(
      (item) => getValue(item) === getValue(option)
    );
    const updatedSelection = isSelected
      ? selectedValues.filter((item) => getValue(item) !== getValue(option))
      : multiSelect
      ? [...selectedValues, option]
      : [option];

    onSelect(
      returnOnlyValue
        ? updatedSelection.map((item) => getValue(item))
        : updatedSelection
    );

    if (!multiSelect) {
      setOpen(false); // Fecha o popover se não for multiselect
    } else {
      inputRef.current?.focus();
    }
  };

  const handleCreate = () => {
    if (onCreate && inputValue) {
      onCreate(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="max-w-[300px]">
      <Popover
        open={open}
        onOpenChange={setOpen}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between"
          >
            <span className="truncate">
              {selectedValues.length === 0 && placeholder}
              {selectedValues.length === 1 && getLabel(selectedValues[0] as T)}
              {selectedValues.length > 1 &&
                `${selectedValues.length} selecionados`}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput
              ref={inputRef}
              placeholder="Buscar..."
              value={inputValue}
              onValueChange={setInputValue}
            />
            <CommandList>
              <CommandGroup>
                {options
                  .filter((option) =>
                    getLabel(option)
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  )
                  .map((option) => {
                    const isSelected = selectedValues.some(
                      (item) => getValue(item) === getValue(option)
                    );
                    return (
                      <CommandItem
                        key={getValue(option)}
                        onSelect={() => toggleSelection(option)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            isSelected ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {renderOption ? renderOption(option) : getLabel(option)}
                      </CommandItem>
                    );
                  })}
              </CommandGroup>
              {allowCreate &&
                inputValue &&
                !options.some(
                  (option) =>
                    getLabel(option).trim().toLowerCase() ===
                    inputValue.trim().toLowerCase()
                ) && (
                  <CommandGroup className="border-t text-blue-500">
                    <CommandItem
                      onSelect={handleCreate}
                      className="bg-blue-50 hover:bg-blue-100/30"
                    >
                      <Plus className="h-4 w-4" />
                      Criar &quot;{inputValue}&quot;
                    </CommandItem>
                  </CommandGroup>
                )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {mostTags && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedValues.map((option) => (
            <Badge
              key={getValue(option)}
              className="flex items-center gap-2"
            >
              {getLabel(option)}
              <button
                onClick={() => toggleSelection(option)}
                className="ml-2 text-sm text-red-600"
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
