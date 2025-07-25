import CourseInstructor from "@/components/course-instructor"
import ExclusiveFeatures from "@/components/exclusive-features"
import LaidOut from "@/components/laid-out"
import TitleAndDescription from "@/components/title-and-description"
import WillLearn from "@/components/will-learn"

export default async function MainPage({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    return <div>
        <div className="">
            {/* Header Section */}
            <div className="w-full bg-blue-100 border border-gray-400 p-6 text-center">
                <h1 className="text-lg font-medium text-gray-700">Header (Not Mandatory)</h1>
            </div>


            {/* Title & Description*/}
            <TitleAndDescription />
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl px-5 mx-auto mt-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6 lg:space-y-10">


                    {/* Instructors */}
                    <CourseInstructor />

                    {/* How the course is laid out */}
                    <LaidOut />

                    {/* What you will learn */}
                    <WillLearn />

                    {/* Course Exclusive Feature */}
                    <ExclusiveFeatures />

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