import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../common/language-switcher";
import { TranslatedData } from "@/types/global";

const Navbar = async ({ translation }: { translation: TranslatedData }) => {
    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            {/* Logo */}
            <Link href="/" className="h-[27px] w-[100px]">
                <Image
                    src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                    alt="10 Minute School"
                    width={100}
                    height={27}
                    priority
                />
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-4 md:gap-6">
                <LanguageSwitcher />

                <button className="flex items-center rounded-md bg-[#1cab55] px-3 py-1 md:px-6">
                    <span className="whitespace-nowrap text-[12px] font-semibold leading-[18px] text-white md:text-[16px] md:font-medium md:leading-[24px]">
                        {translation.cta_label}
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
