import useMediaQuery from "../shared/hooks/useMediaHook";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit() {
        const { firstName, lastName, email, subject, message } = formData;
        if (!firstName || !lastName || !email || !subject || !message) {
            alert("Please fill in all the fields before submitting.");
            return; // Prevent form submission if any field is empty
        }

        emailjs.sendForm("service_d6ogj7j", "template_egcbxia", jsonToFormElement(formData), "Z2y8XyWWhBc19He3z").then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    }

    function jsonToFormElement(jsonObject) {
        const form = document.createElement("form");

        for (const key in jsonObject) {
            if (jsonObject.hasOwnProperty(key)) {
                const input = document.createElement("input");
                input.type = "text";
                input.name = key;
                input.value = jsonObject[key];
                form.appendChild(input);
            }
        }

        return form;
    }

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 4 }} exit={{ opacity: 2 }}>
                <div className="flex-wrapper-space-between" style={{ padding: "50px 500px", height: "60vh" }}>
                    <div className="flex-column-center" style={{ gap: 20 }}>
                        <div>
                            <div style={{ fontSize: "42px", fontWeight: "bold" }}>Contact</div>
                            <p style={{ margin: 0 }}>Looking forward to hearing from you</p>
                        </div>
                        <div>
                            <div style={{ fontSize: "16px", fontWeight: "bold" }}>Phone</div>
                            <p style={{ margin: 0 }}>(+1)6162369207</p>
                        </div>
                        <div>
                            <div style={{ fontSize: "16px", fontWeight: "bold" }}>Email</div>
                            <p style={{ margin: 0 }}>putlurin@mail.gvsu.edu</p>
                        </div>
                    </div>

                    <div className="inputs-container">
                        <div className="row">
                            <TextField
                                label="FirstName"
                                className="i1"
                                inputStyle={{ width: "100%" }}
                                name={"firstName"}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Last Name"
                                className="i2"
                                inputStyle={{ width: "100%" }}
                                name={"lastName"}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="row">
                            <TextField
                                label="Email"
                                className="i3"
                                inputStyle={{ width: "100%" }}
                                name={"email"}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Subject"
                                className="i4"
                                inputStyle={{ width: "100%" }}
                                name={"subject"}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="row">
                            <TextField
                                label="Message"
                                className="i5"
                                inputStyle={{ width: "80%" }}
                                multiLine
                                name={"message"}
                                onChange={handleInputChange}
                            />
                            <div className="tab-link yellow" onClick={() => handleSubmit()}>
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

const TextField = ({ label, className, inputStyle, multiLine, name, onChange }) => {
    return (
        <div id="first-name" className={className}>
            <label for={label?.split(" ").join("-")}>{label}</label>
            <div>
                {multiLine ? (
                    <textarea
                        style={{ padding: 10, borderRadius: 0, marginTop: 5, border: "1px solid black", ...inputStyle }}
                        name={name}
                        type="text"
                        placeholder=""
                        aria-required="false"
                        aria-invalid="false"
                        onChange={onChange}
                    />
                ) : (
                    <input
                        style={{ padding: 10, borderRadius: 0, marginTop: 5, border: "1px solid black", ...inputStyle }}
                        name={name}
                        type="text"
                        placeholder=""
                        aria-required="false"
                        aria-invalid="false"
                        onChange={onChange}
                    />
                )}
            </div>
        </div>
    );
};

export default Contact;
