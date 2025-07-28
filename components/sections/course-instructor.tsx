import { InstructorsProps } from "@/types/page-component-props";
import Image from "next/image";
import RichTextRenderer from "../common/rich-text-renderer";


const CourseInstructor = ({ instructors }: InstructorsProps) => {
    // 1. State hooks
    // 2. Functions/handlers
    // 3. useEffect or other hooks
    // 4. scope component or mini component
    return (
        <div className="flex flex-col gap-4">
            <p className="section-title text-xl font-semibold md:text-2xl">{instructors.name}</p>
            {
                instructors.values.map((instructor) => (
                    <div key={instructor.slug} className="flex items-center md:rounded-md md:border md:border-border overflow-hidden">
                        <div className="h-full w-full max-w-[150px] flex">
                            <Image
                                alt={instructor.name}
                                priority
                                width={73}
                                height={100}
                                quality={100}
                                src={instructor.image}
                                className="h-full w-full max-w-[150px] object-cover"
                            />
                        </div>
                        <div className="flex-1 ml-4  md:p-5">
                            <h3 className="text-lg">
                                {instructor.name}
                            </h3>
                            <div className="text-sm">
                               <RichTextRenderer html={instructor.description}/>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default CourseInstructor;