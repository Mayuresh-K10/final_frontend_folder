import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress, Typography } from "@mui/material";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;
const CLIENT_ID = process.env.REACT_APP_PHONE_AUTH_CLIENT_ID;
const REDIRECT_URL = process.env.REACT_APP_PHONE_AUTH_REDIRECT_URL;
const AUTHENTICATION_URL = process.env.REACT_APP_PHONE_AUTHENTICATION_URL;
const AUTH_URL = `${AUTHENTICATION_URL}?client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URL}`;

const Next = () => {
    const [width, setWidth] = useState(window.innerWidth <= 800);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth <= 800;
            setWidth(isSmallScreen);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navigate = useNavigate();
    const [csrfToken, setCsrfToken] = useState(
        localStorage.getItem("csrfToken") || ""
    );
    const [accessToken, setAccessToken] = useState(null);
    const [entranceExam, setEntranceExam] = useState(
        localStorage.getItem("entranceExam") || null
    );
    const [hasPassport, setHasPassport] = useState(
        localStorage.getItem("hasPassport") || null
    );
    const [preferredMode, setPreferredMode] = useState(null);
    const [formInputs, setFormInputs] = useState({
        firstname: localStorage.getItem("firstName") || "",
        lastname: localStorage.getItem("lastName") || "",
        email: localStorage.getItem("email") || "",
        password: localStorage.getItem("password") || "",
        course: localStorage.getItem("course") || "",
        education: localStorage.getItem("education") || "",
        percentage: localStorage.getItem("percentage") || "",
        preferred_destination:
            localStorage.getItem("preferred_destination") || "",
        start_date: localStorage.getItem("start_date") || "",
    });
    const [userDetails, setUserDetails] = useState({
        countryCode: localStorage.getItem("countryCode") || "",
        phoneNo: localStorage.getItem("phoneNo") || "",
        phEmailJwt: localStorage.getItem("phEmailJwt") || "",
    });
    const [loading, setLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("");

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const token = searchParams.get("access_token");
        if (token) {
            setAccessToken(token);
            navigate("/next");
        }
    }, [navigate]);

    useEffect(() => {
        async function fetchCsrfToken() {
            try {
                setLoading(true);
                setLoadingMessage(
                    "Please wait, we are verifying your details..."
                );
                const response = await axios.get(
                    `${django_url}/get-csrf-token`
                );
                const csrfToken = response.data.csrf_token;
                setCsrfToken(csrfToken);
                localStorage.setItem("csrfToken", csrfToken);
            } catch (error) {
                console.error("Error fetching CSRF token:", error);
            } finally {
                setLoading(false);
            }
        }

        if (!csrfToken) {
            fetchCsrfToken();
        }
    }, [csrfToken, django_url]);

    useEffect(() => {
        if (accessToken && csrfToken) {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    setLoadingMessage("Please wait, Verifying User Details...");
                    const url = process.env.REACT_APP_PHONE_GET_USER_URL;
                    const data = new FormData();
                    data.append("access_token", accessToken);
                    data.append("client_id", CLIENT_ID);

                    const response = await fetch(url, {
                        method: "POST",
                        body: data,
                    });

                    if (response.status === 200) {
                        const responseData = await response.json();
                        const phEmailJwt = responseData.ph_email_jwt;
                        const countryCode = responseData.country_code;
                        const phoneNo = responseData.phone_no;

                        localStorage.setItem("phEmailJwt", phEmailJwt);
                        localStorage.setItem("countryCode", countryCode);
                        localStorage.setItem("phoneNo", phoneNo);

                        setUserDetails({
                            countryCode,
                            phoneNo,
                            phEmailJwt,
                        });

                        const cookieExpire = new Date(
                            Date.now() + 180 * 24 * 60 * 60 * 1000
                        ).toUTCString();
                        document.cookie = `ph_email_jwt=${phEmailJwt}; expires=${cookieExpire}; path=/`;

                        // Call handleSubmit after httpRequest completes
                        await handleSubmit();
                    } else {
                        throw new Error(
                            "Something went wrong with the request"
                        );
                    }
                } catch (error) {
                    console.error("Axios error:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [accessToken, csrfToken, navigate]);

    const handleSubmit = async () => {
        // Check if required fields are not empty
        if (
            !formInputs.firstname.trim() ||
            !formInputs.lastname.trim() ||
            !formInputs.email.trim() ||
            !formInputs.password.trim()
        ) {
            toast.error("Please complete registration step 1 first!!");
            navigate("/register");
            return;
        }

        try {
            setLoading(true);
            setLoadingMessage("Please wait, Registering New User...");
            const savedFormInputs = {
                firstname: localStorage.getItem("firstName"),
                lastname: localStorage.getItem("lastName"),
                email: localStorage.getItem("email"),
                password: localStorage.getItem("password"),
                course: localStorage.getItem("course"),
                education: localStorage.getItem("education"),
                percentage: localStorage.getItem("percentage"),
                preferred_destination: localStorage.getItem(
                    "preferred_destination"
                ),
                start_date: localStorage.getItem("start_date"),
                mode_study: localStorage.getItem("preferredMode"),
                entrance: localStorage.getItem("entranceExam"),
                passport: localStorage.getItem("hasPassport"),
                country_code: localStorage.getItem("countryCode"),
                phonenumber: localStorage.getItem("phoneNo"),
            };

            const response = await axios.post(
                `${django_url}/next`,
                savedFormInputs,
                {
                    headers: {
                        "X-CSRFToken": csrfToken,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            if (response.data.message === "Registration successful") {
                toast.success("Registration Successfull!!");
                clearFormInputs();
                navigate("/");
            } else {
                toast.error(
                    "Registration unsuccessful, Please try again in a moment!!"
                );
            }
        } catch (error) {
            toast.error(
                "Oops, something went wrong, Registration unsuccessful!!"
            );
        } finally {
            setLoading(false);
        }

        clearFormInputs();
    };

    const clearFormInputs = () => {
        // Clear form input fields
        setFormInputs({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            course: "",
            education: "",
            percentage: "",
            preferred_destination: "",
            start_date: "",
        });

        // Clear other states
        setEntranceExam(null);
        setHasPassport(null);
        setPreferredMode(null);

        // Clear user details and form-related localStorage data
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("course");
        localStorage.removeItem("education");
        localStorage.removeItem("percentage");
        localStorage.removeItem("preferred_destination");
        localStorage.removeItem("start_date");
        localStorage.removeItem("entranceExam");
        localStorage.removeItem("hasPassport");
        localStorage.removeItem("preferredMode");
        localStorage.removeItem("countryCode");
        localStorage.removeItem("phoneNo");
        localStorage.removeItem("phEmailJwt");

        setIsFormValid(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (
            name === "percentage" &&
            (value === "" || /^\d*\.?\d*$/.test(value))
        ) {
            setFormInputs((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
            localStorage.setItem(name, value);
        } else if (name !== "percentage") {
            setFormInputs((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
            localStorage.setItem(name, value);
        }
        validateForm();
    };

    const handleEntranceExamChange = (value) => {
        const updatedValue = value === entranceExam ? null : value;
        setEntranceExam(updatedValue);
        localStorage.setItem("entranceExam", updatedValue);
        validateForm();
    };

    const handlePassportChange = (value) => {
        const updatedValue = value === hasPassport ? null : value;
        setHasPassport(updatedValue);
        localStorage.setItem("hasPassport", updatedValue);
        validateForm();
    };

    const handlePreferredModeChange = (value) => {
        setPreferredMode(value || null);
        localStorage.setItem("preferredMode", value || "");
        validateForm();
    };

    const validateForm = () => {
        const isValid =
            formInputs.course &&
            formInputs.education &&
            formInputs.percentage &&
            formInputs.preferred_destination &&
            formInputs.start_date &&
            entranceExam &&
            hasPassport &&
            preferredMode;
        setIsFormValid(isValid);
    };

    useEffect(() => {
        validateForm();
    }, [formInputs, entranceExam, hasPassport, preferredMode]);

    return (
        <>
            <div style={{ ...styles.card, marginBottom: "30px" }}>
                <div style={styles.cardContent}>
                    <div style={styles.heading}>
                        <h4>Register Now To Apply</h4>
                        <p>Get details and latest updates</p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        style={{
                            ...styles.form,
                            gridTemplateColumns: width ? "1fr" : "1fr 1fr",
                        }}
                    >
                        <div style={styles.formGroup}>
                            <label htmlFor="course">Course interested in</label>
                            <select
                                id="course"
                                name="course"
                                value={formInputs.course}
                                onChange={handleInputChange}
                                required
                                style={styles.input}
                            >
                                <option value="None">Select Course</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech">M.Tech</option>
                                <option value="B.Arch">B.Arch</option>
                                <option value="BCA">BCA</option>
                                <option value="MCA">MCA</option>
                                <option value="MBBS">MBBS</option>
                                <option value="B.Sc">B.Sc</option>
                                <option value="M.Sc">M.Sc</option>
                                <option value="B.Pharma">B.Pharma</option>
                                <option value="M.Pharma">M.Pharma</option>
                                <option value="D.Pharma">D.Pharma</option>
                                <option value="B.Com">B.Com</option>
                                <option value="M.Com">M.Com</option>
                                <option value="MBA">MBA</option>
                                <option value="BBA">BBA</option>
                                <option value="BA">BA</option>
                            </select>
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="education">
                                Higher education details
                            </label>
                            <select
                                id="education"
                                type="text"
                                name="education"
                                value={formInputs.education}
                                onChange={handleInputChange}
                                required
                                style={styles.input}
                            >
                                <option value="" disabled>
                                    Select Education
                                </option>
                                <option value="Graduation">Graduation</option>
                                <option value="Post Graduation">
                                    Post Graduation
                                </option>
                                <option value="P.hd">P.hd</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Doctorate">Doctorate</option>
                                <option value="Certificatio">
                                    Certification
                                </option>
                            </select>
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="percentage">Percentage</label>
                            <input
                                id="percentage"
                                name="percentage"
                                value={formInputs.percentage}
                                onChange={handleInputChange}
                                type="text"
                                required
                                maxLength="5"
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="preferred_destination">
                                Preferred Destination
                            </label>
                            <select
                                id="preferred_destination"
                                name="preferred_destination"
                                value={formInputs.preferred_destination}
                                onChange={handleInputChange}
                                required
                                style={styles.input}
                            >
                                <option value="" disabled>
                                    Select Destination
                                </option>
                                <option value="India">India</option>
                                <option value="Australia">Australia</option>
                                <option value="Canada">Canada</option>
                                <option value="France">France</option>
                                <option value="UK">Germany</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Itly">Itly</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Sweden">Sweden</option>
                                <option value="UK">UK</option>
                                <option value="USA">USA</option>
                            </select>
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="start_date">
                                When do you plan to start your studies?
                            </label>
                            <select
                                id="start_date"
                                name="start_date"
                                value={formInputs.start_date}
                                onChange={handleInputChange}
                                required
                                style={styles.input}
                            >
                                <option value="" disabled>
                                    Select Year
                                </option>
                                <option value="2027">2027</option>
                                <option value="2026">2026</option>
                                <option value="2025">2025</option>
                                <option value="2024">2024</option>
                            </select>
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="preferredMode">
                                Preferred Mode of Study over the world
                            </label>
                            <select
                                id="preferredMode"
                                value={preferredMode || ""}
                                onChange={(e) =>
                                    handlePreferredModeChange(e.target.value)
                                }
                                required
                                style={styles.input}
                            >
                                <option value="" disabled>
                                    Select Mode
                                </option>
                                <option value="In-Person">In-Person</option>
                                <option value="Online">Online</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>

                        <div style={styles.formGroup}>
                            <label>
                                Have You Appeared or Scheduled For any Entrance
                                Exams?
                            </label>
                            <div style={styles.switchGroup}>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={entranceExam === "No"}
                                        onChange={() =>
                                            handleEntranceExamChange("No")
                                        }
                                    />
                                    <span className="slider round"></span>
                                </label>
                                <span>No</span>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={entranceExam === "Yes"}
                                        onChange={() =>
                                            handleEntranceExamChange("Yes")
                                        }
                                    />
                                    <span className="slider round"></span>
                                </label>
                                <span>Yes</span>
                            </div>
                        </div>

                        <div style={styles.formGroup}>
                            <label>Do you have a Passport?</label>
                            <div style={styles.switchGroup}>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={hasPassport === "No"}
                                        onChange={() =>
                                            handlePassportChange("No")
                                        }
                                    />
                                    <span className="slider round"></span>
                                </label>
                                <span>No</span>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={hasPassport === "Yes"}
                                        onChange={() =>
                                            handlePassportChange("Yes")
                                        }
                                    />
                                    <span className="slider round"></span>
                                </label>
                                <span>Yes</span>
                            </div>
                        </div>

                        {/* phone.email button start  */}
                        {!accessToken && (
                            <>
                                <button
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "10px",
                                        backgroundColor: "#FF7900",
                                        fontWeight: "bold",
                                        color: "#ffffff",
                                        border: "none",
                                        borderRadius: "20px",
                                        fontSize: "inherit",
                                        cursor: "pointer",
                                        maxWidth: "320px",
                                        width: "auto",
                                    }}
                                    id="btn_ph_login"
                                    name="btn_ph_login"
                                    disabled={!isFormValid}
                                    type="button"
                                    onClick={() =>
                                        window.open(
                                            AUTH_URL,
                                            "peLoginWindow",
                                            "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0, width=500, height=560, top=" +
                                                (window.screen.height - 600) /
                                                    2 +
                                                ", left=" +
                                                (window.screen.width - 500) / 2
                                        )
                                    }
                                    // onClick={() => { window.location.href = AUTH_URL; }}
                                >
                                    Next
                                </button>
                            </>
                        )}

                        {/* phone.button end */}
                    </form>
                </div>
            </div>
            <Backdrop open={loading} style={styles.backdrop}>
                <div style={styles.backdropContent}>
                    <CircularProgress color="inherit" />
                    <Typography style={styles.loadingMessage}>
                        {loadingMessage}
                    </Typography>
                </div>
            </Backdrop>
        </>
    );
};

const styles = {
    card: {
        width: "60%",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Poppins, sans-serif",
        background: "#F5F5F5",
        boxShadow: "0px 4px 20px rgba(33, 3, 102, 0.1)",
        border: "none",
        padding: "1rem",
        borderRadius: "12px",
        color: "#210366",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0px",
    },
    heading: {
        fontWeight: "bold",
        color: "#210366",
    },
    form: {
        width: "100%",
        color: "#210366",
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "1fr 1fr",
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    input: {
        height: "50px",
        width: "100%",
        border: "2px solid #EFEFEF",
        borderRadius: "12px",
        padding: "8px",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "16px",
        color: "#210366",
        outline: "none",
    },
    switchGroup: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    submitButton: {
        maxWidth: "9.375rem",
        backgroundColor: "#FF7900",
        borderRadius: "12px",
        padding: "0.75rem 1.5rem",
        color: "#fff",
        transition: "color 0.3s ease",
        cursor: "pointer",
        alignSelf: "flex-end",
    },
    backdrop: {
        zIndex: 9999,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    backdropContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    loadingMessage: {
        marginTop: "1rem", // This ensures the message appears below the spinner
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#ffffff",
    },
};

export default Next;
