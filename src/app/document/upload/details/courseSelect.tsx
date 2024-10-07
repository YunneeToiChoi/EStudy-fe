"use client";
 
import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/buttonSelect";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface Course {
  courseId: number;
  courseName: string;
  type: string;
}

interface ComboboxDemoProps {
  onCourseSelect: (value: string) => void;
  listCourse: {
    freeCourses: Course[];
    paidCourses: Course[];
  };
}

export function ComboboxDemo({ onCourseSelect, listCourse }: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
 
  // Combine free and paid courses
  const courses = [
    ...(listCourse?.freeCourses?.map((course) => ({ ...course, type: "Free" })) || []),
    ...(listCourse?.paidCourses?.map((course) => ({ ...course, type: "Paid" })) || []),
  ];
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between items-center border-[1px] border-slate-200 p-[10px] focus:ring-1 focus:ring-primary-upload-document"
        >
          <p className=" max-w-96 overflow-hidden text-ellipsis truncate">
               {value
            ? courses.find((course) => course.courseId === parseInt(value))?.courseName
            : "Choose your course..."}
          </p>
       
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <Command>
          <CommandInput placeholder="Search Course..." className="w-full h-9" />
          <CommandList>
            <CommandEmpty>No course found.</CommandEmpty>
            <CommandGroup>
              {courses?.map((course) => (
                <CommandItem
                  key={course.courseId}
                  value={course.courseId.toString()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onCourseSelect(currentValue === value ? "" : currentValue); // Pass the value to parent
                    setOpen(false);
                  }}
                >
                  {course.courseName}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === course.courseId.toString() ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
