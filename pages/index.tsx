import { GetContentDocument, GetContentQuery } from "generated";
import type { InferGetStaticPropsType } from "next";
import ReactPlayer from "react-player";
import { GraphQLClient } from "graphql-request";
import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

const client = new GraphQLClient(
  "https://api-ap-southeast-2.graphcms.com/v2/ckwwvc5mz82wk01z1bsq3f9ko/master"
);

export const getStaticProps = async () => {
  const data: GetContentQuery = await client.request(GetContentDocument);
  return {
    props: {
      data,
    },
  };
};

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sections = ["small", "medium", "large"];
  const [selectedProject, setSelectedProject] = useState(null as any);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(-1 as number);
  const [selectedSection, setSelectedSection] = useState("");

  const setProject = (project: any, index: number, section: string) => {
    setSelectedProject(project);
    setSelectedProjectIdx(index);
    setSelectedSection(section);
  };

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.playerWrapper}>
          <ReactPlayer
            className={styles.reactPlayer}
            url={data.home?.heroVideo?.url}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div
          className={styles.heroContent}
          dangerouslySetInnerHTML={{ __html: data?.home?.heroText?.html }}
        />

        {sections.map((section) => {
          const projects = data?.home?.projects.filter(
            (project) => project.projectType === section
          );

          return (
            <div className={styles.section} key={section}>
              <h3>
                <span>{section.charAt(0)}</span>
                <label>{section}</label>
              </h3>
              <div
                className={styles.sectionContent}
                dangerouslySetInnerHTML={{
                  __html: data?.home[`${section}Text`].html,
                }}
              />

              <div className={styles.mobileFullView}>
                {selectedProjectIdx > -1 && selectedSection === section ? (
                  <FullView
                    selectedProject={selectedProject}
                    setProject={setProject}
                    isMobile={true}
                  />
                ) : null}
              </div>
              <div className={styles.projects}>
                {projects?.map((project, index) => {
                  let showFullView = false;
                  if (selectedProjectIdx > -1) {
                    const min = index - (index % 3);
                    const max = min + 3;
                    showFullView =
                      selectedProjectIdx >= min && selectedProjectIdx < max;
                  }
                  return (
                    <React.Fragment key={project.id}>
                      {showFullView && index % 3 === 0 ? (
                        <FullView
                          selectedProject={selectedProject}
                          setProject={setProject}
                          isMobile={false}
                        />
                      ) : null}
                      <Project
                        project={project}
                        index={index}
                        section={section}
                        setProject={setProject}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Project = ({ project, setProject, section, index }: any) => {
  return (
    <div
      className={styles.project}
      key={project.id}
      style={{
        backgroundImage: `url(${project.tileImage?.url})`,
      }}
    >
      <div className={styles.projectTitle}>{project.title}</div>

      <div className={styles.projectDescription}>
        {project.description?.split(" ").slice(0, 10).join(" ")}
        ... Read more
      </div>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setProject(project, index, section);
          setTimeout(() => {
            const selector = `#fullView${
              window.innerWidth < 768 ? "Mobile" : ""
            }`;
            document.querySelector(selector).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          }, 0);
        }}
      />
    </div>
  );
};

const FullView = ({ selectedProject, setProject, isMobile }: any) => {
  return (
    <div id={`fullView${isMobile ? "Mobile" : ""}`} className={styles.fullView}>
      <Carousel
        initialSlideHeight={766}
        heightMode="max"
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        wrapAround={true}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "white",
          },
        }}
      >
        {selectedProject.assets.map((asset: any) => {
          const isVideo = asset.fileName.indexOf("mp4") > -1;
          return isVideo ? (
            <div className={styles.projectReactPlayer} key={asset.id}>
              <ReactPlayer
                className={styles.reactPlayer}
                url={asset.url}
                controls={true}
                width="100%"
                height="100%"
              />
              <button
                className={styles.closeButton}
                onClick={(e) => {
                  e.preventDefault();
                  setProject(null, -1, "");
                }}
              >
                <Image src="/close.svg" alt="Close" layout={"fill"} />
              </button>
            </div>
          ) : (
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${asset.url})` }}
              key={asset.id}
            />
          );
        })}
      </Carousel>
      <div className={styles.fullViewContent}>
        <div className={styles.projectTitle}>
          <label>{selectedProject.title}</label>

          <Link href="/contact" passHref={true}>
            <button>Tell us about your project</button>
          </Link>
        </div>
        <div className={styles.projectHeadline}>{selectedProject.headline}</div>
        <div className={styles.projectDescription}>
          {selectedProject.description}
        </div>
      </div>
    </div>
  );
};
export default Home;
