import { GetContentDocument, GetContentQuery } from "generated";
import type { InferGetStaticPropsType } from "next";
import ReactPlayer from "react-player";
import { GraphQLClient } from "graphql-request";
import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel";
import Link from "next/link";
import Image from "next/image";
import Footer from "components/footer";
import styles from "./index.module.css";

const client = new GraphQLClient(
  "https://api-ap-southeast-2.graphcms.com/v2/ckwwvc5mz82wk01z1bsq3f9ko/master",
  {
    cache: "no-cache",
  }
);

export const getStaticProps = async () => {
  const data: GetContentQuery = await client.request(GetContentDocument);
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sections = ["small", "medium", "large", "xLarge"];
  const [selectedProject, setSelectedProject] = useState(null as any);
  const [selectedSection, setSelectedSection] = useState("");

  const setProject = (project: any, section: string) => {
    setSelectedProject(project);
    setSelectedSection(section);
  };

  let screenWidth = 1920;
  // @ts-ignore
  if (typeof window !== "undefined") {
    screenWidth = window?.innerWidth;
  }

  return (
    <>
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
              (project) => project.projectType === section.toLowerCase()
            );

            return (
              <div id={section} className={styles.section} key={section}>
                <div
                  className={styles.sectionSummary}
                  onClick={(e) => {
                    setSelectedProject("");
                    if (section === selectedSection) {
                      setSelectedSection("");
                    } else {
                      setSelectedSection(section);
                    }
                  }}
                >
                  <h3>
                    <span>
                      {section === "xLarge" ? "XL" : section.charAt(0)}
                    </span>
                  </h3>

                  <div className={styles.sectionContent}>
                    <label>{section === "xLarge" ? "X-Large" : section}</label>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.home[`${section}Text`]?.html,
                      }}
                    />
                  </div>
                  <a
                    href="#"
                    className={`sectionArrow ${styles.sectionArrow} ${
                      selectedSection === section ? styles.open : styles.closed
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>

                <div
                  className={styles.projectCarousel}
                  style={{
                    opacity: selectedSection === section ? 1 : 0,
                    maxHeight:
                      selectedSection === section
                        ? screenWidth < 1024
                          ? 180
                          : 200
                        : 0,
                  }}
                >
                  <Carousel
                    initialSlideHeight={screenWidth < 1024 ? 180 : 200}
                    heightMode="max"
                    cellSpacing={16}
                    slidesToScroll={1}
                    slidesToShow={screenWidth < 1024 ? 1 : 3}
                    wrapAround={true}
                    renderBottomCenterControls={null}
                    renderCenterLeftControls={({ previousSlide }) => (
                      <button
                        onClick={previousSlide}
                        className={styles.leftButton}
                      >
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                      <button
                        onClick={nextSlide}
                        className={styles.rightButton}
                      >
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    )}
                    defaultControlsConfig={{
                      pagingDotsStyle: {
                        fill: "white",
                      },
                    }}
                  >
                    {projects?.map((project, index) => {
                      return (
                        <div
                          className={styles.project}
                          key={project.id}
                          style={{
                            marginRight:
                              index === projects.length - 1 ? "0px" : null,
                          }}
                        >
                          <div className={styles.projectHeader}>
                            <div className={styles.projectTitle}>
                              {project.headline}
                            </div>
                          </div>
                          <div className={styles.projectDescription}>
                            {project.description}
                          </div>
                          <a
                            href="#"
                            className={styles.projectImage}
                            style={{
                              backgroundImage: `url(${project.tileImage?.url})`,
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              if (selectedProject === project) {
                                setSelectedProject("");
                              } else {
                                setSelectedProject(project);
                              }
                            }}
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>

                <div
                  style={{
                    opacity: selectedSection === section ? 1 : 0,
                    maxHeight: selectedSection === section ? 200 : 0,
                    overflow: "hidden",
                    marginTop: selectedSection === section ? 24 : 0,
                  }}
                  className={styles.mobileContent}
                  dangerouslySetInnerHTML={{
                    __html: data?.home[`${section}Text`]?.html,
                  }}
                />
                {/* <div>
                    {selectedSection === section && (
                      <div className={styles.projects}>
                        {projects?.map((project, index) => {
                          return (
                            <div
                              className={styles.project}
                              key={project.id}
                              style={{
                                marginRight:
                                  index === projects.length - 1 ? "0px" : null,
                              }}
                            >
                              <div className={styles.projectHeader}>
                                <div className={styles.projectTitle}>
                                  {project.headline}
                                </div>
                                <div className={styles.projectSubTitle}>
                                  {project.headline}
                                </div>
                              </div>
                              <div className={styles.projectDescription}>
                                {project.description}
                              </div>
                              <a
                                href="#"
                                className={styles.projectImage}
                                style={{
                                  backgroundImage: `url(${project.tileImage?.url})`,
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (selectedProject === project) {
                                    setSelectedProject("");
                                  } else {
                                    setSelectedProject(project);
                                  }
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                    
                  </div> */}
                {selectedProject && selectedSection === section && (
                  <div className={styles.selectedProject}>
                    <FullView
                      selectedProject={selectedProject}
                      setProject={setProject}
                      isMobile={false}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Footer footerData={data?.contact?.getInTouch?.html} />
    </>
  );
}

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
                  setProject("");
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
    </div>
  );
};
export default Home;
