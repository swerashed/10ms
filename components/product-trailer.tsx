"use client"
import Image from "next/image";
import { useState, useMemo } from "react";
import ArrowIcon from "./icons/arrow-icon";
import PlayIcon from "./icons/play-icon";

const mediaData = [
  {
    name: "preview_gallery",
    resource_type: "video",
    resource_value: "zrlYnaZftEQ",
    thumbnail_url:
      "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
  },
  {
    name: "sqr_img",
    resource_type: "image",
    resource_value:
      "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_1_1.png",
  },
  {
    name: "thumbnail",
    resource_type: "image",
    resource_value:
      "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
  },
  {
    name: "preview_gallery",
    resource_type: "image",
    resource_value:
      "https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png",
    thumbnail_url: "",
  },
  {
    name: "preview_gallery",
    resource_type: "image",
    resource_value:
      "https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png",
    thumbnail_url: "",
  },
  {
    name: "preview_gallery",
    resource_type: "video",
    resource_value: "30y-wlDtIIQ",
    thumbnail_url:
      "https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg",
  },
  {
    name: "preview_gallery",
    resource_type: "video",
    resource_value: "QBz8FX4GE_w",
    thumbnail_url:
      "https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg",
  },
  {
    name: "book_preview",
    resource_type: "video",
    resource_value: "BbtkvRnraok",
    thumbnail_url:
      "https://cdn.10minuteschool.com/images/catalog/media/BbtkvRnraok-HD_1718880976960.jpg",
  },
  {
    name: "preview_gallery",
    resource_type: "video",
    resource_value: "AvB2ibYd1z4",
    thumbnail_url:
      "https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg",
  },
];

const ProductTrailer = () => {
  const previewGallery = useMemo(
    () => mediaData.filter((item) => item.name === "preview_gallery"),
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % previewGallery.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + previewGallery.length) % previewGallery.length
    );
  };

  const handleThumbnailClick = (index: number) => {
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  const handlePlay = () => {
    if (currentItem?.resource_type === "video") {
      setIsPlaying(true);
    }
  };

  if (previewGallery.length === 0) {
    return null;
  }
  const currentItem = previewGallery[currentIndex];

  // CHANGED: Use explicit logic to determine the source URL
  const mainDisplaySrc =
    currentItem.resource_type === "video"
      ? currentItem.thumbnail_url
      : currentItem.resource_value;

  // Render nothing if the determined src is not valid
  if (!mainDisplaySrc) return null;

  return (
    <div className="w-full border-border md:border md:max-w-[330px] lg:max-w-[400px] bg-white">
      <div className="hidden p-1 md:block">
        <div className="relative overflow-hidden bg-black youtube-video aspect-video select-none">
          {isPlaying && currentItem.resource_type === "video" ? (
            <iframe
              src={`https://www.youtube.com/embed/${currentItem.resource_value}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          ) : (
            <div className="relative">
              {currentItem.resource_type === "video" && (
                <span
                  onClick={handlePlay}
                  className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <PlayIcon />
                </span>
              )}
              <div className="thumb-wrap">
                <Image
                  key={currentIndex}
                  alt={currentItem.name}
                  priority
                  width={867}
                  height={480}
                  className="w-full transition-opacity duration-300 ease-in-out"
                  src={mainDisplaySrc}
                />
              </div>
            </div>
          )}

          {previewGallery.length > 1 && (
            <div className="navigation">
              <div
                onClick={handlePrev}
                className="absolute prev-btn left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer"
              >
                <ArrowIcon />
              </div>
              <div
                onClick={handleNext}
                className="absolute next-btn right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer"
              >
                <ArrowIcon variant="next" />
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4 p-4 overflow-x-auto no-scrollbar">
          {previewGallery.map((item, index) => {
            // CHANGED: Use explicit logic to determine the thumbnail source URL
            const thumbnailSrc =
              item.resource_type === "video"
                ? item.thumbnail_url
                : item.resource_value;

            // Don't render a thumbnail if it has no valid image source
            if (!thumbnailSrc) return null;

            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className="flex-shrink-0"
              >
                <div
                  className={`relative w-[55px] aspect-video rounded cursor-pointer overflow-hidden outline ${
                    isActive
                      ? "outline-[2px] outline-offset-2 outline-[#1CAB55]"
                      : "outline-none"
                  }`}
                >
                  <Image
                    alt={item.name}
                    loading="lazy"
                    width={86}
                    height={50}
                    className="object-cover w-full h-full"
                    src={thumbnailSrc}
                  />
                  {item.resource_type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-20">
                      <Image
                        alt="Play The Video"
                        width={20}
                        height={20}
                        src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductTrailer;


    //   <div className="hidden md:block">
    //         <div className="grid py-2 md:p-4">
    //           <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
    //           <div>
    //             <div className="flex items-center mb-3 leading-5">
    //               <div
    //                 className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
    //                 style={{ fontSize: 0, opacity: 1 }}
    //               >
    //                 <Image
                      
    //                   alt="icon"
    //                   data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
    //                   loading="lazy"
    //                   width={20}
    //                   height={20}
    //                   decoding="async"
    //                   data-nimg={1}
    //                   style={{ color: "transparent" }}
    //                   src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
    //                 />
    //               </div>
    //               <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
    //                 কোর্সটি করছেন ৩২৯৯৫ জন
    //               </h4>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="flex items-center mb-3 leading-5">
    //               <div
    //                 className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
    //                 style={{ fontSize: 0, opacity: 1 }}
    //               >
    //                 <Image
                      
    //                   alt="icon"
    //                   data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
    //                   loading="lazy"
    //                   width={20}
    //                   height={20}
    //                   decoding="async"
    //                   data-nimg={1}
    //                   style={{ color: "transparent" }}
    //                   src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
    //                 />
    //               </div>
    //               <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
    //                 সময় লাগবে ৫০ ঘন্টা
    //               </h4>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="flex items-center mb-3 leading-5">
    //               <div
    //                 className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
    //                 style={{ fontSize: 0, opacity: 1 }}
    //               >
    //                 <Image
                      
    //                   alt="icon"
    //                   data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
    //                   loading="lazy"
    //                   width={20}
    //                   height={20}
    //                   decoding="async"
    //                   data-nimg={1}
    //                   style={{ color: "transparent" }}
    //                   src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
    //                 />
    //               </div>
    //               <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
    //                 ৫৪টি ভিডিও
    //               </h4>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="flex items-center mb-3 leading-5">
    //               <div
    //                 className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
    //                 style={{ fontSize: 0, opacity: 1 }}
    //               >
    //                 <Image
                      
    //                   alt="icon"
    //                   data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
    //                   loading="lazy"
    //                   width={20}
    //                   height={20}
    //                   decoding="async"
    //                   data-nimg={1}
    //                   style={{ color: "transparent" }}
    //                   src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
    //                 />
    //               </div>
    //               <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
    //                 ১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট
    //               </h4>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="flex items-center mb-3 leading-5">
    //               <div
    //                 className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
    //                 style={{ fontSize: 0, opacity: 1 }}
    //               >
    //                 <Image
                      
    //                   alt="icon"
    //                   data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png"
    //                   loading="lazy"
    //                   width={20}
    //                   height={20}
    //                   decoding="async"
    //                   data-nimg={1}
    //                   style={{ color: "transparent" }}
    //                   src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png"
    //                 />
    //               </div>
    //               <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
    //                 ৩৮টি লেকচার শিট
    //               </h4>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="flex items-center mb-3 leading-5">
    //               <div
    //                 className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
    //                 style={{ fontSize: 0, opacity: 1 }}
    //               >
    //                 <Image
                      
    //                   alt="icon"
    //                   data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png"
    //                   loading="lazy"
    //                   width={20}
    //                   height={20}
    //                   decoding="async"
    //                   data-nimg={1}
    //                   style={{ color: "transparent" }}
    //                   src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png"
    //                 />
    //               </div>
    //               <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
    //                 ২৫টি ভিডিও লেকচার
    //               </h4>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="flex items-center mb-3 leading-5">
    //               <div
    //                 className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
    //                 style={{ fontSize: 0, opacity: 1 }}
    //               >
    //                 <Image
                      
    //                   alt="icon"
    //                   data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
    //                   loading="lazy"
    //                   width={20}
    //                   height={20}
    //                   decoding="async"
    //                   data-nimg={1}
    //                   style={{ color: "transparent" }}
    //                   src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
    //                 />
    //               </div>
    //               <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
    //                 ১টি ফ্রি হার্ডকপি বই
    //               </h4>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="flex items-center mb-3 leading-5">
    //               <div
    //                 className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
    //                 style={{ fontSize: 0, opacity: 1 }}
    //               >
    //                 <Image
                      
    //                   alt="icon"
    //                   data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
    //                   loading="lazy"
    //                   width={20}
    //                   height={20}
    //                   decoding="async"
    //                   data-nimg={1}
    //                   style={{ color: "transparent" }}
    //                   src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
    //                 />
    //               </div>
    //               <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
    //                 ফেসবুক সাপোর্ট গ্রুপ
    //               </h4>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="flex items-center mb-3 leading-5">
    //               <div
    //                 className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
    //                 style={{ fontSize: 0, opacity: 1 }}
    //               >
    //                 <Image
                      
    //                   alt="icon"
    //                   data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
    //                   loading="lazy"
    //                   width={20}
    //                   height={20}
    //                   decoding="async"
    //                   data-nimg={1}
    //                   style={{ color: "transparent" }}
    //                   src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
    //                 />
    //               </div>
    //               <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
    //                 কোর্সের মেয়াদ আজীবন
    //               </h4>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

//    <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2  bg-white absolute right-0 md:top-[50px]">
//       <div className="md:sticky md:top-[112px] ">
//         <div className=" md:border">
//           <div className="hidden p-1 md:block" id="">
//             <div className="relative overflow-hidden bg-black youtube-video aspect-video">
//               <div className="relative">
//                 <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={56}
//                     height={56}
//                     fill="none"
//                     viewBox="0 0 56 56"
//                   >
//                     <circle
//                       cx={28}
//                       cy={28}
//                       r={28}
//                       fill="#fff"
//                       fillOpacity="0.5"
//                     />
//                     <circle cx="27.999" cy={28} r="25.415" fill="#fff" />
//                     <path
//                       fill="#1CAB55"
//                       d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
//                     />
//                   </svg>
//                 </span>
//                 <div className="thumb-wrap">
//                   <div>
//                     <div
//                       className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
//                       style={{ fontSize: 0, objectFit: "cover", opacity: 1 }}
//                     >
//                       <Image
                       
//                         alt="IELTS Course by Munzereen Shahid"
//                         data-original-src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
//                         priority
//                         width={867}
//                         height={480}
//                         decoding="async"
//                         data-nimg={1}
//                         className="w-full"
//                         src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
//                         style={{ color: "transparent" }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="absolute  left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer">
//                   <svg
//                     stroke="currentColor"
//                     fill="currentColor"
//                     strokeWidth={0}
//                     viewBox="0 0 512 512"
//                     color="white"
//                     style={{ color: "white" }}
//                     height={25}
//                     width={25}
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
//                   </svg>
//                 </div>
//                 <div className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer">
//                   <svg
//                     stroke="currentColor"
//                     fill="currentColor"
//                     strokeWidth={0}
//                     viewBox="0 0 512 512"
//                     color="white"
//                     style={{ color: "white" }}
//                     height={25}
//                     width={25}
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
//               <div>
//                 <div>
//                   <div className="relative  w-[55px] rounded cursor-pointer overflow-hidden outline outline-[2px] outline-[#1CAB55]">
//                     <div
//                       className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                       style={{ fontSize: 0, opacity: 1 }}
//                     >
//                       <Image
                        
//                         alt="preview_gallery"
//                         data-original-src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
//                         loading="lazy"
//                         width={86}
//                         height={50}
//                         decoding="async"
//                         data-nimg={1}
//                         style={{ color: "transparent" }}
//                         src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
//                       />
//                     </div>
//                     <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                       <div
//                         className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
//                         style={{ fontSize: 0, opacity: 1 }}
//                       >
//                         <Image
                          
//                           alt="Play The Video"
//                           data-original-src="/images/annual_exam/play_icon_2.svg"
//                           priority
//                           width={20}
//                           height={20}
//                           decoding="async"
//                           data-nimg={1}
//                           style={{ color: "transparent" }}
//                           src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div>
//                   <div className="relative  w-[55px] rounded cursor-pointer border-0">
//                     <div
//                       className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                       style={{ fontSize: 0, opacity: 1 }}
//                     >
//                       <Image
                        
//                         alt="preview_gallery"
//                         data-original-src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png"
//                         loading="lazy"
//                         width={86}
//                         height={50}
//                         decoding="async"
//                         data-nimg={1}
//                         style={{ color: "transparent" }}
//                         src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div>
//                   <div className="relative  w-[55px] rounded cursor-pointer border-0">
//                     <div
//                       className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                       style={{ fontSize: 0, opacity: 1 }}
//                     >
//                       <Image
                        
//                         alt="preview_gallery"
//                         data-original-src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png"
//                         loading="lazy"
//                         width={86}
//                         height={50}
//                         decoding="async"
//                         data-nimg={1}
//                         style={{ color: "transparent" }}
//                         src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div>
//                   <div className="relative  w-[55px] rounded cursor-pointer border-0">
//                     <div
//                       className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                       style={{ fontSize: 0, opacity: 1 }}
//                     >
//                       <Image
                        
//                         alt="preview_gallery"
//                         data-original-src="https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg"
//                         loading="lazy"
//                         width={86}
//                         height={50}
//                         decoding="async"
//                         data-nimg={1}
//                         style={{ color: "transparent" }}
//                         src="https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg"
//                       />
//                     </div>
//                     <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                       <div
//                         className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
//                         style={{ fontSize: 0, opacity: 1 }}
//                       >
//                         <Image
                          
//                           alt="Play The Video"
//                           data-original-src="/images/annual_exam/play_icon_2.svg"
//                           priority
//                           width={20}
//                           height={20}
//                           decoding="async"
//                           data-nimg={1}
//                           style={{ color: "transparent" }}
//                           src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div>
//                   <div className="relative  w-[55px] rounded cursor-pointer border-0">
//                     <div
//                       className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                       style={{ fontSize: 0, opacity: 1 }}
//                     >
//                       <Image
                        
//                         alt="preview_gallery"
//                         data-original-src="https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg"
//                         loading="lazy"
//                         width={86}
//                         height={50}
//                         decoding="async"
//                         data-nimg={1}
//                         style={{ color: "transparent" }}
//                         src="https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg"
//                       />
//                     </div>
//                     <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                       <div
//                         className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
//                         style={{ fontSize: 0, opacity: 1 }}
//                       >
//                         <Image
                          
//                           alt="Play The Video"
//                           data-original-src="/images/annual_exam/play_icon_2.svg"
//                           priority
//                           width={20}
//                           height={20}
//                           decoding="async"
//                           data-nimg={1}
//                           style={{ color: "transparent" }}
//                           src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div>
//                   <div className="relative  w-[55px] rounded cursor-pointer border-0">
//                     <div
//                       className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                       style={{ fontSize: 0, opacity: 1 }}
//                     >
//                       <Image
                        
//                         alt="preview_gallery"
//                         data-original-src="https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg"
//                         loading="lazy"
//                         width={86}
//                         height={50}
//                         decoding="async"
//                         data-nimg={1}
//                         style={{ color: "transparent" }}
//                         src="https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg"
//                       />
//                     </div>
//                     <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                       <div
//                         className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
//                         style={{ fontSize: 0, opacity: 1 }}
//                       >
//                         <Image
                          
//                           alt="Play The Video"
//                           data-original-src="/images/annual_exam/play_icon_2.svg"
//                           priority
//                           width={20}
//                           height={20}
//                           decoding="async"
//                           data-nimg={1}
//                           style={{ color: "transparent" }}
//                           src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="block md:hidden">
//               <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl">
//                 IELTS Course by Munzereen Shahid
//               </h1>
//               <div className="mb-4 text-sm font-normal" />
//             </div>
//           </div>
//           <div className="hidden md:block" />
//           <div className="hidden md:block">
//             <div className="grid py-2 md:p-4">
//               <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
//               <div>
//                 <div className="flex items-center mb-3 leading-5">
//                   <div
//                     className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="icon"
//                       data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
//                       loading="lazy"
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
//                     />
//                   </div>
//                   <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
//                     কোর্সটি করছেন ৩২৯৯৫ জন
//                   </h4>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center mb-3 leading-5">
//                   <div
//                     className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="icon"
//                       data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
//                       loading="lazy"
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
//                     />
//                   </div>
//                   <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
//                     সময় লাগবে ৫০ ঘন্টা
//                   </h4>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center mb-3 leading-5">
//                   <div
//                     className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="icon"
//                       data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
//                       loading="lazy"
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
//                     />
//                   </div>
//                   <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
//                     ৫৪টি ভিডিও
//                   </h4>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center mb-3 leading-5">
//                   <div
//                     className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="icon"
//                       data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
//                       loading="lazy"
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
//                     />
//                   </div>
//                   <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
//                     ১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট
//                   </h4>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center mb-3 leading-5">
//                   <div
//                     className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="icon"
//                       data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png"
//                       loading="lazy"
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png"
//                     />
//                   </div>
//                   <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
//                     ৩৮টি লেকচার শিট
//                   </h4>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center mb-3 leading-5">
//                   <div
//                     className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="icon"
//                       data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png"
//                       loading="lazy"
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png"
//                     />
//                   </div>
//                   <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
//                     ২৫টি ভিডিও লেকচার
//                   </h4>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center mb-3 leading-5">
//                   <div
//                     className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="icon"
//                       data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
//                       loading="lazy"
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
//                     />
//                   </div>
//                   <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
//                     ১টি ফ্রি হার্ডকপি বই
//                   </h4>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center mb-3 leading-5">
//                   <div
//                     className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="icon"
//                       data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
//                       loading="lazy"
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
//                     />
//                   </div>
//                   <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
//                     ফেসবুক সাপোর্ট গ্রুপ
//                   </h4>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center mb-3 leading-5">
//                   <div
//                     className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="icon"
//                       data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
//                       loading="lazy"
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
//                     />
//                   </div>
//                   <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
//                     কোর্সের মেয়াদ আজীবন
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
//           <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
//           <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth={0}
//               viewBox="0 0 512 512"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
//             </svg>{" "}
//             <span className="ml-1">ফোন করুন (16910)</span>
//           </span>
//         </p>
//       </div>
//     </section>



//   <div className="block mt-4 md:mt-0 md:hidden">
//         <div className="relative overflow-hidden bg-black youtube-video aspect-video">
//           <div className="relative">
//             <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={56}
//                 height={56}
//                 fill="none"
//                 viewBox="0 0 56 56"
//               >
//                 <circle cx={28} cy={28} r={28} fill="#fff" fillOpacity="0.5" />
//                 <circle cx="27.999" cy={28} r="25.415" fill="#fff" />
//                 <path
//                   fill="#1CAB55"
//                   d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
//                 />
//               </svg>
//             </span>
//             <div className="thumb-wrap">
//               <div>
//                 <div
//                   className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
//                   style={{ fontSize: 0, objectFit: "cover", opacity: 1 }}
//                 >
//                   <Image
//                     alt="image"
//                     data-original-src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
//                     priority
//                     width={867}
//                     height={480}
//                     decoding="async"
//                     data-nimg={1}
//                     className="w-full"
//                     src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
//                     style={{ color: "transparent" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="absolute  left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer">
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth={0}
//                 viewBox="0 0 512 512"
//                 color="white"
//                 style={{ color: "white" }}
//                 height={25}
//                 width={25}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
//               </svg>
//             </div>
//             <div className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer">
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth={0}
//                 viewBox="0 0 512 512"
//                 color="white"
//                 style={{ color: "white" }}
//                 height={25}
//                 width={25}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
//           <div>
//             <div>
//               <div className="relative  w-[55px] rounded cursor-pointer overflow-hidden outline outline-[2px] outline-[#1CAB55]">
//                 <div
//                   className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                   style={{ fontSize: 0, opacity: 1 }}
//                 >
//                   <Image
                    
//                     alt="preview_gallery"
//                     data-original-src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
//                     loading="lazy"
//                     width={86}
//                     height={50}
//                     decoding="async"
//                     data-nimg={1}
//                     style={{ color: "transparent" }}
//                     src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
//                   />
//                 </div>
//                 <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                   <div
//                     className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="Play The Video"
//                       data-original-src="/images/annual_exam/play_icon_2.svg"
//                       priority
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div>
//               <div className="relative  w-[55px] rounded cursor-pointer border-0">
//                 <div
//                   className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                   style={{ fontSize: 0, opacity: 1 }}
//                 >
//                   <Image
                    
//                     alt="preview_gallery"
//                     data-original-src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png"
//                     loading="lazy"
//                     width={86}
//                     height={50}
//                     decoding="async"
//                     data-nimg={1}
//                     style={{ color: "transparent" }}
//                     src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div>
//               <div className="relative  w-[55px] rounded cursor-pointer border-0">
//                 <div
//                   className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                   style={{ fontSize: 0, opacity: 1 }}
//                 >
//                   <Image
                    
//                     alt="preview_gallery"
//                     data-original-src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png"
//                     loading="lazy"
//                     width={86}
//                     height={50}
//                     decoding="async"
//                     data-nimg={1}
//                     style={{ color: "transparent" }}
//                     src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div>
//               <div className="relative  w-[55px] rounded cursor-pointer border-0">
//                 <div
//                   className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                   style={{ fontSize: 0, opacity: 1 }}
//                 >
//                   <Image
                    
//                     alt="preview_gallery"
//                     data-original-src="https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg"
//                     loading="lazy"
//                     width={86}
//                     height={50}
//                     decoding="async"
//                     data-nimg={1}
//                     style={{ color: "transparent" }}
//                     src="https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg"
//                   />
//                 </div>
//                 <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                   <div
//                     className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="Play The Video"
//                       data-original-src="/images/annual_exam/play_icon_2.svg"
//                       priority
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div>
//               <div className="relative  w-[55px] rounded cursor-pointer border-0">
//                 <div
//                   className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                   style={{ fontSize: 0, opacity: 1 }}
//                 >
//                   <Image
                    
//                     alt="preview_gallery"
//                     data-original-src="https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg"
//                     loading="lazy"
//                     width={86}
//                     height={50}
//                     decoding="async"
//                     data-nimg={1}
//                     style={{ color: "transparent" }}
//                     src="https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg"
//                   />
//                 </div>
//                 <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                   <div
//                     className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="Play The Video"
//                       data-original-src="/images/annual_exam/play_icon_2.svg"
//                       priority
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div>
//               <div className="relative  w-[55px] rounded cursor-pointer border-0">
//                 <div
//                   className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
//                   style={{ fontSize: 0, opacity: 1 }}
//                 >
//                   <Image
                    
//                     alt="preview_gallery"
//                     data-original-src="https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg"
//                     loading="lazy"
//                     width={86}
//                     height={50}
//                     decoding="async"
//                     data-nimg={1}
//                     style={{ color: "transparent" }}
//                     src="https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg"
//                   />
//                 </div>
//                 <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                   <div
//                     className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
//                     style={{ fontSize: 0, opacity: 1 }}
//                   >
//                     <Image
                      
//                       alt="Play The Video"
//                       data-original-src="/images/annual_exam/play_icon_2.svg"
//                       priority
//                       width={20}
//                       height={20}
//                       decoding="async"
//                       data-nimg={1}
//                       style={{ color: "transparent" }}
//                       src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="block md:hidden">
//           <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl" />
//           <div className="mb-4 text-sm font-normal" />
//         </div>
//       </div>