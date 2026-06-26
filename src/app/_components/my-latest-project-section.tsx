"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import MotionWrapper from "@/components/motion-wrapper";
import SectionHeader from "@/components/section-header";
import { CONFIG } from "@/config";

const MyLatestProjectSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="dk-safe-x-padding dk-section-distance">
      <SectionHeader
        title="Our Latest Projects"
        description="Take a look at some of the work we've delivered — from web platforms and mobile apps to AI automation solutions."
        inViewport={inView}
        className="text-center"
        animate
      />

      <div className="mt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CONFIG.projects.map((item, index) => (
            <MotionWrapper
              key={index.toString()}
              className="relative overflow-hidden group rounded-2xl md:rounded-[25px] cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project image */}
              <div className="bg-[#1a1a1a] p-5 rounded-2xl md:rounded-[25px] h-[220px] overflow-hidden">
                <Image
                  className="object-cover w-full h-full rounded-xl"
                  src={item.image}
                  alt={`${item.title} project image`}
                  width={441}
                  height={220}
                  priority
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 bg-[#0d0d0d]/95 backdrop-blur-sm rounded-2xl md:rounded-[25px]">
                <div className="flex flex-col items-center justify-center w-full h-full px-6 gap-3">
                  {/* Category badge */}
                  <span className="text-xs font-bold uppercase tracking-widest dk-gradient-text">
                    {item.category}
                  </span>

                  {/* Title */}
                  <p className="text-xl font-bold text-center text-accent leading-tight">
                    {item.title}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-center text-accent2 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Links */}
                  <div className="flex flex-row gap-3 text-2xl mt-1">
                    {item?.urls?.demo && (
                      <Link
                        className="p-3 transition-all duration-200 bg-gray rounded-xl hover:text-white hover:bg-linear-to-r hover:from-primary hover:to-secondary"
                        href={item.urls.demo}
                        target="_blank"
                        title="View Live"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <IoMdOpen />
                      </Link>
                    )}
                    {item?.urls?.github && (
                      <Link
                        className="p-3 transition-all duration-200 bg-gray rounded-xl hover:text-white hover:bg-linear-to-r hover:from-primary hover:to-secondary"
                        href={item.urls.github}
                        target="_blank"
                        title="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BsGithub />
                      </Link>
                    )}
                    {item?.urls?.figma && (
                      <Link
                        className="p-3 transition-all duration-200 bg-gray rounded-xl hover:text-white hover:bg-linear-to-r hover:from-primary hover:to-secondary"
                        href={item.urls.figma}
                        target="_blank"
                        title="Figma Design"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiFigma />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyLatestProjectSection;
