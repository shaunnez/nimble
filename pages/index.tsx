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

// export const getStaticProps = async () => {
//   const data: GetContentQuery = await client.request(GetContentDocument);
//   return {
//     props: {
//       data,
//     },
//     revalidate: 60,
//   };
// };

function Home() {
  const sections = ["small", "medium", "large", "xLarge"];
  const [selectedProject, setSelectedProject] = useState(null as any);
  const [selectedSection, setSelectedSection] = useState("");
  const [data, setData] = React.useState(null as GetContentQuery);
  const [loading, setLoading] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const setProject = (project: any, section: string) => {
    setSelectedProject(project);
    setSelectedSection(section);
  };

  let screenWidth = 1920;
  // @ts-ignore
  if (typeof window !== "undefined") {
    screenWidth = window?.innerWidth;
  }

  React.useEffect(() => {
    const loadData = async () => {
      const data: GetContentQuery = await client.request(GetContentDocument);
      setData(data);
      setLoading(false);
    };
    if (loading === null) {
      setLoading(true);
      loadData();
    }
  });

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 66) {
        document.querySelector("header").classList.add("change");
      } else {
        document.querySelector("header").classList.remove("change");
      }
    });
  });
  if (loading !== false) {
    return null;
  }

  return (
    <>
      <div className={styles.home}>
        <div className={styles.hero}>
          <div className={styles.playerWrapper}>
            <ReactPlayer
              className={styles.reactPlayer}
              url={data.home?.heroVideoUrl}
              controls={true}
              width="100%"
              height="100%"
              playing={isPlaying}
              onPlay={() => {
                setIsPlaying(true);
              }}
              onPause={() => {
                setIsPlaying(false);
              }}
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
                              setIsPlaying(false);
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

                {selectedProject && selectedSection === section && (
                  <div className={styles.selectedProject}>
                    <FullView
                      selectedProject={selectedProject}
                      setProject={setSelectedProject}
                      isMobile={false}
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
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

const FullView = ({
  selectedProject,
  setProject,
  isMobile,
  setIsPlaying,
  isPlaying,
}: any) => {
  const [activeIdx, setActiveIdx] = React.useState(0);

  return (
    <div id={`fullView${isMobile ? "Mobile" : ""}`} className={styles.fullView}>
      <Carousel
        initialSlideHeight={766}
        heightMode="max"
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        wrapAround={true}
        afterSlide={(index: number) => {
          setTimeout(() => {
            setActiveIdx(index);
            setIsPlaying(false);
          }, 0);
        }}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "white",
          },
        }}
      >
        {selectedProject?.videos?.map((asset: any, i: number) => {
          return (
            <div className={styles.projectReactPlayer} key={i}>
              <ReactPlayer
                className={styles.reactPlayer}
                url={asset}
                width="100%"
                playing={!isPlaying && activeIdx === i}
                controls={true}
                height="100%"
                onPlay={() => {
                  setIsPlaying(false);
                  setActiveIdx(i);
                }}
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
          );
        })}
      </Carousel>
    </div>
  );
};
export default Home;
