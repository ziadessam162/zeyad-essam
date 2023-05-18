"use client";

import React from "react";

import Section from "@/components/UI/Section";
import SectionHeader from "@/components/UI/Section/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyles.css";

import { ProjectData, FileData } from "@/lib/markdown";
import ProjectCard from "./ProjectCard";

import styles from "./Projects.module.css";

const Projects = ({
  projectsData,
}: {
  projectsData: FileData<ProjectData>[];
}) => {
  const swiperOptions: any = {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    modules: [FreeMode, Pagination],
    pagination: {
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
      },
    },
  };

  return (
    <Section>
      <SectionHeader tag="Portfolio" title="My Complete Projects" />
      <div className={styles.swiper_wrapper}>
        <Swiper className="projects_swiper" {...swiperOptions}>
          {projectsData.map((project) => (
            <SwiperSlide key={project.data.title}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Projects;
