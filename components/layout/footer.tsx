import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component
    const socials = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/10minuteschool",
            image: "https://cdn.10minuteschool.com/images/facebook_1695730910971.png"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/10ms_insta/",
            image: "https://cdn.10minuteschool.com/images/instagram_1695731442397.png"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/company/10ms/",
            image: "https://cdn.10minuteschool.com/images/linkedin_1695731507042.png"
        },
        {
            name: "YouTube",
            link: "https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw",
            image: "https://cdn.10minuteschool.com/images/youtube_1695731538726.png"
        },
        {
            name: "TikTok",
            link: "https://www.tiktok.com/@10minuteschool?lang=en",
            image: "https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png"
        }
    ];
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
                    socials.map(item => (
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
            <p className="text-xs font-normal text-gray-600 md:text-sm"> স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত </p>
        </footer>
    );
};

export default Footer;