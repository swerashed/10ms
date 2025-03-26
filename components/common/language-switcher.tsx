"use client";

import { manageCookie } from "@/utils/manage-cookie";
import { useState, useEffect, useRef } from "react";
import LanguageIcon from "../icons/language-icon";
import { useRouter } from "next/navigation";
import { languageOptions } from "@/constants/global";

const LanguageSwitcher = () => {
    // 1. State hooks
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("system");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter()


    // 2. Functions/handlers
    const handleLanguageChange = (lang: "en" | "bn" | "system") => {
        manageCookie(lang);
        setCurrentLang(lang);
        setIsOpen(false);
        // Optional: router.refresh() can be used for SPA behavior
        router.push(window.location.pathname); // Soft navigate to same route
        router.refresh();
    };

    // 3. useEffect or other hooks
    useEffect(() => {
        const getLangFromCookie = () => {
            const match = document.cookie.match(new RegExp('(^| )manualLang=([^;]+)'));
            if (match) {
                setCurrentLang(match[2]);
            } else {
                setCurrentLang("system");
            }
        };

        getLangFromCookie();
    }, []);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // 4. scope component or mini component



    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-md border h-full border-border bg-white px-3 py-1 text-sm text-gray-700  hover:bg-gray-50"
            >
                <LanguageIcon />
                <span>{languageOptions[currentLang as keyof typeof languageOptions]}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-md border border-border bg-white shadow-lg">
                    <div>
                        {Object.entries(languageOptions).map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => handleLanguageChange(key as "en" | "bn" | "system")}
                                className={`cursor-pointer block w-full px-4 py-2 text-left  text-sm transition ${currentLang === key
                                    ? "bg-gray-200 font-semibold text-dark"
                                    : "text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:text-dark"
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
