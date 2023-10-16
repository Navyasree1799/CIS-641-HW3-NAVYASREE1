import useMediaQuery from "../shared/hooks/useMediaHook";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import "../shared/styles.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const isMobile = useMediaQuery("(max-width: 960px)");
    const navigate = useNavigate();
    return (
        <AnimatePresence>
            <motion.div
                className={isMobile ? "flex-column-reverse-center " : "flex-wrapper-center"}
                style={{ height: "80vh" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 4 }}
                exit={{ opacity: 2 }}
            >
                <img src="dp.jpeg" alt="Avatar" className="avatar" />
                <div className="flex-column-center" style={{ width: "500px", marginLeft: 15 }}>
                    <span style={{ fontWeight: "bold", fontSize: "100px" }}>Hello</span>
                    <div style={{ marginLeft: "12px" }}>
                        <span className="name">A Bit About Me</span>
                        <p>
                            This is Navyasree Putluri. I am am web developer I have a prior knowledge working as a frontend developer in a
                            startup for over a year. Currently I am pursuing my masters degree in applied computers at Grand valley state
                            university
                        </p>
                    </div>
                    <div className="flex-wrapper" style={{ marginLeft: "7px" }}>
                        <div className="tab-link yellow" onClick={() => navigate("/resume")}>
                            Resume
                        </div>
                        <div className="tab-link red" onClick={() => navigate("/projects")}>
                            Projects
                        </div>
                        <div className="tab-link green" onClick={() => navigate("/contact")}>
                            Contact
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Home;
