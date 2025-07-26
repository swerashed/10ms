import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../common/language-switcher";
import { cookies } from 'next/headers';
import { navbarData } from "@/constants/global";

const Navbar = async () => {
    // 1. State hooks
    // 2. Functions/handlers
      const cookieStore = cookies();
      const lang = (await cookieStore).get('lang')?.value as 'en' | 'bn' | undefined || "en"
    // 3. useEffect or other hooks
    // 4. scope component or mini component
    return (
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
            {/* LOGO */}
            <Link className="h-[27px] w-[100px]" href="/">
                <Image
                    alt="10ms"
                    priority
                    width={100}
                    height={27}
                    src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                />
            </Link>


            {/* Buttons  */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <LanguageSwitcher/>
                <button className="flex items-center px-3 py-1 text-white rounded-md bg-[#1cab55] md:px-6">
                    <span className="leading-[18 px] whitespace-nowrap text-[12px] font-semibold leading-[24px] md:text-[16px] md:font-medium">
                       {navbarData[lang].cta_label}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;