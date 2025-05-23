import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { looseQuoteFormSchema } from "./looseQuoteFormSchema";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, X, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import classCodes from "@/static/gl_code";

export default function QuoteForm({ onSubmit, isLoading }) {
  const [showClassCodeDropdown, setShowClassCodeDropdown] = useState(false);
  const [classCodeSuggestions, setClassCodeSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(looseQuoteFormSchema),
    defaultValues: {
      nameInsured: "",
      companyAddress: "",
      classCode: "",
      exposureAmount: "",
    },
  });

  const handleClassCodeChange = (value) => {
    // Filter class codes based on input
    if (!value) {
      setClassCodeSuggestions([]);
      setShowClassCodeDropdown(false);
      return;
    }

    // Search by code or description
    const filtered = classCodes.filter(
      (item) =>
        item.code.toString().startsWith(value) ||
        item.description.toLowerCase().includes(value.toLowerCase()),
    );

    setClassCodeSuggestions(filtered.slice(0, 10));
    setShowClassCodeDropdown(filtered.length > 0);
    setSelectedSuggestionIndex(-1);
  };

  const selectClassCode = (code) => {
    form.setValue("classCode", code.toString(), { shouldValidate: true });
    setShowClassCodeDropdown(false);
    setSelectedSuggestionIndex(-1);
  };

  // Handle keyboard navigation in dropdown
  const handleKeyDown = (e) => {
    if (!showClassCodeDropdown || classCodeSuggestions.length === 0) return;

    // Arrow down
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestionIndex((prev) =>
        prev < classCodeSuggestions.length - 1 ? prev + 1 : prev,
      );
    }
    // Arrow up
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestionIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
    // Enter
    else if (e.key === "Enter" && selectedSuggestionIndex >= 0) {
      e.preventDefault();
      selectClassCode(classCodeSuggestions[selectedSuggestionIndex].code);
    }
    // Escape
    else if (e.key === "Escape") {
      setShowClassCodeDropdown(false);
    }
  };

  // Scroll selected item into view
  useEffect(() => {
    if (selectedSuggestionIndex >= 0 && dropdownRef.current) {
      const selectedElement =
        dropdownRef.current.children[selectedSuggestionIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedSuggestionIndex]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowClassCodeDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6 py-[20px]">
        <div className="space-y-[40px]">
          <FormField
            control={form.control}
            name="nameInsured"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Insured Name</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Address</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="classCode"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Class Code</FormLabel>
                <div className="relative" ref={inputRef}>
                  <FormControl>
                    <div className="flex items-center relative">
                      <Input
                        placeholder="Search by code or description (e.g. 8810)"
                        disabled={isLoading}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleClassCodeChange(e.target.value);
                        }}
                        onFocus={() => {
                          if (field.value) {
                            handleClassCodeChange(field.value);
                          }
                        }}
                        onKeyDown={handleKeyDown}
                        className="pr-16"
                      />
                      <div className="absolute right-0 flex">
                        {field.value && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => {
                              form.setValue("classCode", "");
                              setClassCodeSuggestions([]);
                              setShowClassCodeDropdown(false);
                            }}
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Clear</span>
                          </Button>
                        )}
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => {
                            if (
                              field.value &&
                              !showClassCodeDropdown &&
                              classCodeSuggestions.length > 0
                            ) {
                              setShowClassCodeDropdown(true);
                            } else if (showClassCodeDropdown) {
                              setShowClassCodeDropdown(false);
                            } else if (field.value) {
                              handleClassCodeChange(field.value);
                            }
                          }}
                        >
                          {showClassCodeDropdown ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                          <span className="sr-only">Toggle dropdown</span>
                        </Button>
                      </div>
                    </div>
                  </FormControl>
                  {showClassCodeDropdown && classCodeSuggestions.length > 0 && (
                    <div
                      ref={dropdownRef}
                      className="absolute z-50 w-full mt-1 bg-white rounded-md border shadow-lg max-h-60 overflow-auto"
                    >
                      <div className="p-1">
                        {classCodeSuggestions.map((item, index) => (
                          <div
                            key={item.code}
                            className={cn(
                              "flex flex-col px-3 py-2 text-sm rounded-md cursor-pointer",
                              selectedSuggestionIndex === index
                                ? "bg-primary/10"
                                : "hover:bg-muted",
                            )}
                            onClick={() => selectClassCode(item.code)}
                          >
                            <div className="font-medium">{item.code}</div>
                            <div className="text-muted-foreground">
                              {item.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="exposureAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Exposure Amount</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    {...field}
                    className="w-full"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isLoading} className="w-full" type="submit">
          {isLoading ? (
            <>
              Submitting...
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </>
          ) : (
            "Get a quote"
          )}
        </Button>
      </form>
    </Form>
  );
}
