import useMediaQuery from "../shared/hooks/useMediaHook";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
    return (
        <AnimatePresence>
            <motion.div
                // className={isMobile ? "flex-column-reverse-center" : "flex-wrapper-center"}
                style={{}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 4 }}
                exit={{ opacity: 2 }}
            >
                <div style={{ height: 100, padding: "0px 500px" }}>
                    <h1 style={{ fontSize: "42px" }}>Projects</h1>
                    <div>
                        <Project
                            name="Project Name 01"
                            content={
                                <>
                                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                                    double click me to add your own content and make changes to the font.
                                </>
                            }
                            img={"/ds.jpg"}
                        />
                        <Project
                            name="Project Name 01"
                            content={
                                <>
                                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
                                    double click me to add your own content and make changes to the font.
                                </>
                            }
                            img={"/wd.jpg"}
                        />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

const Skills = () => (
    <div>
        <li style={{ fontSize: 16, marginBottom: 10 }}>I'm a paragraph. Click here to add your own text and edit me.</li>
        <li style={{ fontSize: 16, marginBottom: 10 }}>I'm a paragraph. Click here to add your own text and edit me.</li>
        <li style={{ fontSize: 16, marginBottom: 10 }}>I'm a paragraph. Click here to add your own text and edit me.</li>
        <li style={{ fontSize: 16, marginBottom: 10 }}>I'm a paragraph. Click here to add your own text and edit me.</li>
    </div>
);

const projectImage = {
    width: 491,
    height: 280,
    objectFit: "cover",
};

const Project = ({ name, content, img }) => (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 80 }}>
        <div style={{ width: 300 }}>
            <h3 style={{ fontSize: "18px", margin: 0 }}>{name}</h3>
            <span style={{ fontSize: "16px", color: "grey", fontFamily: "sans-serif" }}>{content}</span>
        </div>
        <img style={projectImage} src={img} />
    </div>
);
export default Projects;
