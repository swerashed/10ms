'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="max-w-7xl px-4 min-h-[calc(100vh-300px)] flex justify-center items-center mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold text-red-600">Something went wrong!</h2>
        <p className="text-gray-600">{error.message}</p>
        <button
          onClick={reset}
          className="mt-4 cursor-pointer inline-flex items-center px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
