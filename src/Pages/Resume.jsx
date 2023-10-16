import { Divider } from "../shared/components/Common";
import { motion, AnimatePresence } from "framer-motion";

const workExperience = [
    {
        year: "2020-2022",
        title: "Front End Developer",
        description: "I worked as a Front end developer to create cross platform web application at a startup based on Noida, Delhi, India",
    },
];

const education = [
    {
        year: "2022-2024",
        title: "GVSU | Master’s Degree",
        description:
            "I am a full time masters student in Applied Computer Science Masters Degree at Grand Valley State GVSU completed the badge courses and web and mobile applications and information technologies",
    },
    {
        year: "2017-2021",
        title: "JNTUK  | Bachelor's Degree",
        description: "I have done my bachelors in computer science and engineering",
    },
];

const Resume = () => {
    return (
        <AnimatePresence>
            <motion.div style={{}} initial={{ opacity: 0 }} animate={{ opacity: 4 }} exit={{ opacity: 2 }}>
                <div style={{ height: 100, width: "40vw" }}>
                    <h1 style={{ fontSize: "42px" }}>Resume</h1>
                </div>
                <Section
                    subHeading={
                        <>
                            Work <br /> Experience
                        </>
                    }
                    projectDetails={workExperience}
                />
                <Divider />
                <Section subHeading="Education" projectDetails={education} />
                <Divider />
                <Section
                    subHeading={
                        <>
                            Skills <br /> & Expertise
                        </>
                    }
                    custom={<Skills />}
                />
            </motion.div>
        </AnimatePresence>
    );
};

const Skills = () => (
    <div>
        <li>React js, Java, Python, C++, C, R, JavaScript, Node js. </li>
        <li>Microsoft Office, Android studio, React, Gatsbyjs, HTML and CSS.</li>
        <li>UNIX, LINUX, Windows</li>
        <li>MY SQL, MongoDB.</li>
    </div>
);

const Section = ({ subHeading, custom, projectDetails }) => {
    return (
        <div style={{ padding: "0px", width: "40vw", paddingBottom: 50 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 style={{ fontSize: "26px", margin: 0 }}>{subHeading}</h4>
                {custom || (
                    <div style={{ fontFamily: "sans-serif" }}>
                        {projectDetails?.map((p) => (
                            <Project key={p.title} year={p.year} projectName={p.title} projectDescription={p.description} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Project = ({ year, projectName, projectDescription }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 50 }}>
            <span style={{ fontSize: "16px" }}>{year}</span>
            <div style={{ width: 300, marginLeft: 30 }}>
                <h3 style={{ fontSize: "18px", margin: 0, marginBottom: 10 }}>{projectName}</h3>
                <span style={{ fontSize: "16px", color: "grey", fontFamily: "sans-serif", letterSpacing: 1.5 }}>{projectDescription}</span>
            </div>
        </div>
    );
};

export default Resume;
