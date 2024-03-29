import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
// import education from "../../assets/Resume/education";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Softwares", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //STATIC RESUME DATA FOR SKILLS
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Ruby", ratingPercentage: 85 },
    { skill: "PostgreSql", ratingPercentage: 74 },
    { skill: "MySql", ratingPercentage: 82 },
    { skill: "Ruby On Rails", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 40 },
    { skill: "Node JS", ratingPercentage: 79 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Visual Basic", ratingPercentage: 50 },
    { skill: "C ++", ratingPercentage: 40 },
    { skill: "C ", ratingPercentage: 30 },
    { skill: "Pascal ", ratingPercentage: 30 },
  ];
  //STATIC RESUME DATA FOR SKILLS
  const Softwares = [
    { software: "Ms Word", ratingPercentage: 90 },
    { software: "Ms Excell", ratingPercentage: 95 },
    { software: "Ms Access", ratingPercentage: 85 },
    { software: "Git", ratingPercentage: 90 },
    { software: "GitHub", ratingPercentage: 90 },
    { software: "VS Code", ratingPercentage: 88 },
    { software: "Software & H/W Maintenance", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "5th September ", toDate: "15th September 2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
      liveLink: "https://nyumbani-lime.vercel.app/",
    },
    {
      title: "Nyumbani Move ",
      duration: { fromDate: "15th August ", toDate: "2nd September 2022" },
      description: "A moving logistics Company Application ",
      subHeading:
        "Technologies Used:  React , Ruby On Rails, Tailwind, CSS Google Maps Api, Places Api.",
      liveLink: "https://nyumbani-lime.vercel.app/",
    },
    // {
    //   title: "Ecommerce Website ",
    //   duration: { fromDate: "2020", toDate: "2021" },
    //   description:
    //     "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
    //   subHeading:
    //     "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    // },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"MORINGA SCHOOL "}
        subHeading={"SOFTWARE ENGINEERING"}
        fromDate={"March - 2022 "}
        toDate={" Sept - 2022"}
      />
      <ResumeHeading
        heading={"THE KABETE NATIONAL POLYTECHNIC"}
        subHeading={"DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY"}
        fromDate={"Sep 2017 "}
        toDate={" Dec 2021"}
      />

      <ResumeHeading
        heading={"NATIONAL YOUTH SERVICE. Ruaraka, Nairobi"}
        subHeading={" Ministry of Public Service, Youth and Gender Affairs"}
        fromDate={"June - 2016 "}
        toDate={" Dec - 2021"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"KIBAGARE ACADEMY"}
          subHeading={"INTERN"}
          fromDate={"September 2020"}
          toDate={"October 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            This was my last place I worked before joining Moringa School.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - I provided clerical support, addressing routine and special
            requirements. - Reported back to my instructor to receive day-to-day
            tasks and responsibilities.
          </span>
          <br />
          <span className="resume-description-text">
            - I communicated effectively with faculty and staff and accepted
            critiques and suggestions for areas of improvement..{" "}
          </span>
          <br />
          <span className="resume-description-text">
            {/* - I stretch my mental capacity to develop UI as per the given
            designs. */}
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="Softwares"
    >
      {Softwares.map((software, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{software.software}</span>
          <div className="skill-percentage">
            <div
              style={{ width: software.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          className="nyumbani-link"
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          liveLink={projectsDetails.liveLink}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Novels"
        description="Apart from being a tech enthusiast and a code writer, i also love to read novels and watching movies."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, music best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
