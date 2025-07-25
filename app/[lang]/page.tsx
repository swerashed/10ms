
export default async function MainPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    return <div>
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            {/* Header Section */}
            <div className="w-full bg-blue-100 border border-gray-400 p-6 text-center">
                <h1 className="text-lg font-medium text-gray-700">Header (Not Mandatory)</h1>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Title */}
                    <div className="bg-gray-100 border border-gray-400 p-4 text-center">
                        <h2 className="text-base font-medium text-gray-700">Title (will be the product title)</h2>
                    </div>

                    {/* Description */}
                    <div className="bg-blue-100 border border-gray-400 p-8 text-center">
                        <h3 className="text-base font-medium text-gray-700">Description (HTML)</h3>
                    </div>

                    {/* Instructors */}
                    <div className="bg-blue-100 border border-gray-400 p-6 text-center">
                        <h3 className="text-base font-medium text-gray-700">Course instructors (will be in sections array type=instructor)</h3>
                    </div>

                    {/* How the course is laid out */}
                    <div className="bg-blue-100 border border-gray-400 p-6 text-center">
                        <h3 className="text-sm font-medium text-gray-700">How the course is laid out (will be in sections, array type=features)</h3>
                    </div>

                    {/* What you will learn */}
                    <div className="bg-blue-100 border border-gray-400 p-6 text-center">
                        <h3 className="text-sm font-medium text-gray-700">What you will learn by doing the course (will be in sections array type=pointers)</h3>
                    </div>

                    {/* Course Exclusive Feature */}
                    <div className="bg-blue-100 border border-gray-400 p-6 text-center">
                        <h3 className="text-base font-medium text-gray-700">Course Exclusive Feature (will be in sections array type=instructor)</h3>
                    </div>

                    {/* Course details */}
                    <div className="bg-blue-100 border border-gray-400 p-6 text-center">
                        <h3 className="text-base font-medium text-gray-700">Course details (will be in sections array type=about)</h3>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">
                    {/* Trailer */}
                    <div className="bg-blue-100 border border-gray-400 p-12 text-center">
                        <h3 className="text-base font-medium text-gray-700">Product trailer (YouTube player) - (data found in media)</h3>
                    </div>

                    {/* CTA */}
                    <div className="bg-blue-100 border border-gray-400 p-4 text-center">
                        <h3 className="text-base font-medium text-gray-700">
                          CTA text - (data found in cta_text)

                            </h3>
                    </div>

                    {/* Check Lists */}
                    <div className="bg-blue-100 border border-gray-400 p-12 text-center">
                        <h3 className="text-base font-medium text-gray-700">Check List- (data found in checklist)</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
}