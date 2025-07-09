import Image from "next/image";
import Link from "next/link";
import "./globals.css";
export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-5 bg-white w-full">
            <div className="text-center">
                <div className="inline-flex rounded-full bg-yellow-100 p-4">
                    <Image
                        src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                        alt="10 Minute School Logo"
                        width={150}
                        height={40}
                        className="w-28 sm:w-36 h-auto"
                    />
                </div>
                <h1 className="mt-6 text-4xl font-bold text-slate-800 lg:text-5xl">404 - Page not found</h1>
                <p className="mt-4 text-slate-600 text-base lg:text-lg">
                    The page you are looking for doesn&apos;t exist or <br className="hidden sm:block" /> has been removed.
                </p>
                <Link href="/">
                    <span className="mt-6 inline-block px-6 py-3 bg-red-600 text-white text-sm font-medium rounded-lg shadow hover:bg-red-700 transition duration-300">
                        Go Back Home
                    </span>
                </Link>
            </div>
        </div>
    );
}
