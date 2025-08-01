import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/constants/global";
import { FooterProps } from "@/types/page-component-props";

const Footer = async ({ translation }: FooterProps) => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component

    return (
        <footer className="max-w-7xl px-4 mx-auto my-20 flex flex-col gap-5 justify-center items-center">
            <Link className="mb-4" href="/">
                <Image
                    alt="Instructor"
                    loading="lazy"
                    width={116}
                    height={32}
                    src="https://10minuteschool.com/images/logo.svg"
                />
            </Link>


            <div className="socials flex gap-2">
                {
                    footerData.socials.map(item => (
                        <Link key={item.link} href={item.link}
                            target="_blank"
                            rel="noreferrer">

                            <Image
                                alt={item.name}
                                width={32}
                                height={32}
                                src={item.image}
                            />
                        </Link>
                    ))
                }
            </div>
            <p className="text-xs font-normal text-gray-600 md:text-sm text-center">{translation?.copyright}</p>
        </footer>
    );
};

export default Footer;