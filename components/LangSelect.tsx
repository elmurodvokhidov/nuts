"use client";

import React, { useState, useEffect } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
    CheckIcon,
    ChevronDownIcon,
    GlobeIcon
} from "lucide-react";

export default function LangSelect() {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("selectedLanguage");
        if (storedLanguage) {
            setSelectedLanguage(storedLanguage);
        }
    }, []);

    const onSelectLanguage = (language: string) => {
        setSelectedLanguage(language);
        localStorage.setItem("selectedLanguage", language);
        window.location.reload(); // Sahifani qayta yuklash
    };

    return (
        <div className="hidden sm:block text-black">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                        <GlobeIcon className="h-5 w-5" />
                        <span>{selectedLanguage}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                        className="flex items-center justify-between"
                        onClick={() => onSelectLanguage("en")}
                    >
                        <span>English</span>
                        {selectedLanguage === "en" && <CheckIcon className="h-5 w-5" />}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="flex items-center justify-between"
                        onClick={() => onSelectLanguage("uz")}
                    >
                        <span>Uzbek</span>
                        {selectedLanguage === "uz" && <CheckIcon className="h-5 w-5" />}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
