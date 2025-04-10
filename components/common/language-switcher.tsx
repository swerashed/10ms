"use client";
import LanguageIcon from "../icons/language-icon";

const LanguageSwitcher = () => {

    return (
        <div className="relative z-50">
            <button className="flex items-center gap-2 rounded-md border h-full border-border bg-white px-3 py-1 text-sm text-gray-700  hover:bg-gray-50"
            >
                <LanguageIcon />
                <span>EN</span>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
