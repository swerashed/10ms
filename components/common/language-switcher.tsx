"use client";

import { usePathname, useRouter } from "next/navigation";
import LanguageIcon from "../icons/language-icon";

const LanguageSwitcher = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isBangla = pathname === "/bn";
    const targetLang = isBangla ? "en" : "bn";

    const handleLanguageSwitch = () => {
        const newPath = isBangla ? "/" : "/bn";
        router.push(newPath);
    };

    return (
        <div className="relative z-50">
            <button
                onClick={handleLanguageSwitch}
                className="flex cursor-pointer items-center gap-2 rounded-md border h-full border-border bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50"
            >
                <LanguageIcon />
                <span>{targetLang.toUpperCase()}</span>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
