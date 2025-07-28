import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div
            style={{
                height: "90vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                backgroundColor: "#ffffff",
                width: "100%",
                textAlign: "center",
                flexDirection: "column",
                overflow: "hidden"
            }}
        >
            <div style={{ display: 'inline-flex', borderRadius: '9999px', backgroundColor: '#FEF3C7', padding: '16px' }}>
                <Link href="/" aria-label="Go to Homepage">
                    <Image
                        src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                        alt="10 Minute School Logo"
                        width={150}
                        height={40}
                        style={{ width: '7rem', height: 'auto' }}
                    />
                </Link>
            </div>
            <h1 className="mt-6 text-[36px] font-bold text-slate-800 lg:text-[50px]">404 - Page not found</h1>
            <p className="text-slate-600 mt-5 text-base lg:text-lg">
                The page you are looking for doesn&apos;t exist or <br style={{ display: 'none' }} className="sm:block" /> has been removed.
            </p>
            <Link href="/">
                <span className="mt-6 inline-block px-6 py-3 bg-red-600 text-white text-sm font-medium rounded-lg shadow hover:bg-red-700 transition duration-300">
                    Go Back Home
                </span>
            </Link>
        </div>
    );
}
