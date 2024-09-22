"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Category {
  categoryId: string;
  categoryName: string;
}

interface SelectDemoProps {
  onCategorySelect: (value: string) => void;
  listCate: Category[];
}

export function SelectDemo({ onCategorySelect, listCate }: SelectDemoProps) {
  return (
    <Select onValueChange={(value) => onCategorySelect(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Please select your category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {listCate?.map((category) => (
            <SelectItem key={category.categoryId} value={category.categoryId}>
              {category.categoryName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
