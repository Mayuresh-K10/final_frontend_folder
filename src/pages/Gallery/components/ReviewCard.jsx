import { Avatar, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import TagsButton from "../Button/TagsButton";
import SquareIcon from "@mui/icons-material/Square";
import LikeDislikeButton from "../Button/LikeDislikeButton";
const ReviewCard = ({
  avatar,
  user,
  Enrolled,
  date,
  likes,
  dislikes,
  course,
  rating,
  ratingIn,
  reviews,
  heading,
  getbgColor,
  listBoxLast,
}) => {
  const [show, setShow] = useState(true);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const handleClick = () => {
    setShow(!show);
  };
  const myStyle = {
    fontSize: "16px",
    color: "#210366",
    fontWeight: "bold",
  };

  return (
    <Box
      sx={{
        fontStyle: "normal",
        fontSize: "0.9rem",
        marginTop: "0.8rem",
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          flexWrap: "wrap",
          fontSize: "0.8rem !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            fontSize: "0.8rem !important",
          }}
        >
          <Avatar
            src={avatar}
            name={user}
            sx={{
              bgcolor: getbgColor(user[0].toUpperCase()),
              textTransform: "uppercase",
            }}
          >
            {user[0]}
          </Avatar>
          <Box>
            <Typography
              id="name"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#7B90FF",
                fontSize: "22px",
                textTransform: "capitalize",
              }}
            >
              {user}
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Typography
                id="Enrolled"
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "#210366",
                }}
              >
                {Enrolled}
              </Typography>
              <Typography
                id="course"
                sx={{
                  fontSize: "0.8rem",
                  color: "#210366",
                  fontWeight: "bold",
                }}
              >
                {course}
              </Typography>
              <Typography
                id="date"
                sx={{
                  fontSize: "0.8rem",
                  color: "#210366",
                  fontWeight: "bold",
                }}
              >
                {date}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ color: "#FF7900", fontWeight: "bold" }}>
            <span style={{ color: "#000" }}>{rating}</span>/10
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "1rem",
        }}
      >
        <Typography
          id="review_haeding"
          sx={{
            color: "#7B90FF",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "700",
            letterSpacing: "0em",
          }}
        >
          {heading}
        </Typography>
        {likes === "" ? (
          ""
        ) : (
          <Typography
            id="likes"
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "500",
              color: "#210366",
              letterSpacing: "0em",
              marginTop: "0.5rem",
            }}
          >
            <span style={myStyle}>Likes : </span>
            {likes}
          </Typography>
        )}

        {dislikes === "" ? (
          ""
        ) : (
          <Typography
            id="dislikes"
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "500",
              color: "#210366",
              letterSpacing: "0em",
              marginTop: "0.5rem",
            }}
          >
            <span style={myStyle}>Dislikes : </span>
            {dislikes}
          </Typography>
        )}
        {reviews.map(({ heading, review }, index) => {
          return (
            <Box
              key={index}
              sx={{
                marginTop: "0.8rem",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "500",
                color: "#210366",
                letterSpacing: "0em",
              }}
            >
              {heading === undefined ? (
                ""
              ) : (
                <span style={{ color: "#7B90FF" }}>{heading} : </span>
              )}
              {review}
            </Box>
          );
        })}
        <Box
          sx={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          {listBoxLast.map(({ item }, index) => {
            return (
              <>
                <SquareIcon
                  sx={{
                    borderRadius: "22px",
                    color: "#7B90FF",
                    gap: "1rem",
                  }}
                />
                <Typography
                  key={index}
                  id="item"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    gap: "1rem",
                    marginTop: "0.2rem",
                    marginLeft: "0.2rem",
                    textTransform: "none",
                    color: "#210366",
                  }}
                >
                  &nbsp;{item} &nbsp;
                </Typography>
              </>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            marginTop: "20px",
            height: `${show ? "1.2rem" : "fit-content"}`,
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
          }}
        >
          {ratingIn.map(({ head }, index) => {
            return (
              <Typography
                key={index}
                id="head"
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  color: "#210366",
                }}
              >
                {head}
              </Typography>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "@media (max-width:600px)": {
            flexDirection: "column",
          },
        }}
      >
        <Button
          onClick={handleClick}
          sx={{
            display: `${show ? "none" : "block"}`,
            color: "#FF7900",
            padding: "0",
            background: "none",
            Border: "none",
            "&:hover": {
              background: "none",
              border: "none",
            },
          }}
        >
          Read less
        </Button>

        <Button
          onClick={handleClick}
          sx={{
            display: `${!show ? "none" : "block"}`,
            color: "#FF7900",
            padding: "0",
            background: "none",
            Border: "none",
            "&:hover": {
              background: "none",
              border: "none",
            },
          }}
        >
          Read more
        </Button>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {" "}
            <TagsButton title={"Report"} />
            <LikeDislikeButton
              check={true}
              onClick={() => setLike(like + 1)}
              num={like}
            />
            <LikeDislikeButton
              check={false}
              onClick={() => setDislike(dislike + 1)}
              num={dislike}
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewCard;
