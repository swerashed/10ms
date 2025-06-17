import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
      <Image
        src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
        alt="10 Minute School Logo"
        className="w-24 h-14 mb-6 object-contain"
        width={200}
        height={50}
      />
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="mt-2 text-lg text-gray-600">Oops! The page you're looking for doesn’t exist.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center px-6 py-2 bg-red-600 text-white text-sm font-medium rounded-lg shadow hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
