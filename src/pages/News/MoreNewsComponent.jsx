import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

const MoreNewsComponent = (props) => {
    //console.log("imgae",props.img)
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "350px",
                height: "400px",
                backgroundColor: "white",
                margin: "1rem",
                borderRadius: "28px",
                boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.1)",
                transition:
                    "transform 0.3s, background-color 0.3s, box-shadow 0.3s",
                "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.15)",
                },
                "@media(max-width:450px)": {
                    width: "100%",
                    height: "auto",
                },
            }}
        >
            <Box
                sx={{
                    borderRadius: "28px 28px 0 0",
                    width: "100%",
                    height: "180px !important",
                    objectFit: "cover",
                }}
            >
                {props.img ? (
                    <img
                        style={{
                            borderRadius: "28px 28px 0 0",
                            width: "100%",
                            height: "180px",
                            objectFit: "cover",
                        }}
                        alt="News"
                        src={props.img}
                    />
                ) : (
                    <img
                        style={{
                            borderRadius: "28px 28px 0 0",
                            width: "100%",
                            height: "180px",
                            objectFit: "cover",
                        }}
                        alt="News"
                        src="https://via.placeholder.com/350x180.png?text=Image+Not+Available"
                    />
                )}
            </Box>
            <Box sx={{ padding: "1rem", flexGrow: 1 }}>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: "0.8rem",
                        fontWeight: "500",
                        color: "#555",
                        marginBottom: "0.5rem",
                    }}
                >
                    {new Date(props.date).toGMTString()}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#333",
                        marginBottom: "0.5rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {props.heading}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        color: "#666",
                        marginBottom: "1rem",
                        lineHeight: "1.4",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {props.content}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Link
                        href={props.read_link}
                        target="_blank"
                        underline="none"
                        sx={{ color: "#FF7900", fontWeight: 600 }}
                    >
                        Read More
                    </Link>
                </Box>
            </Box>
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "0.5rem",
                }}
            >
                <span
                    className="slick-dots"
                    style={{ display: "inline-block" }}
                />
            </div>
        </Box>
    );
};

export default MoreNewsComponent;
