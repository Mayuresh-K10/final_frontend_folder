import React, { useState } from "react";
import { Box, Typography, IconButton, Button, TextField } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../appStore/regSlice";

const StepFour = () => {
  const dispatch = useDispatch();
  
  const reduxStep5 = useSelector((state) => state.register.step5);
  // console.log(reduxStep5);
  const [likedFields, setLikedFields] = useState(
    reduxStep5.likedFields || [""]
  );
  const [dislikedFields, setDislikedFields] = useState(
    reduxStep5.dislikedFields || [""]
  );

  const updateStep5 = (updatedFields, isLiked) => {
    dispatch(
      actions.updateStep5({
        ...reduxStep5,
        [isLiked ? "likedFields" : "dislikedFields"]: updatedFields,
      })
    );
  };

  const addField = (isLiked) => {
    const fields = isLiked ? likedFields : dislikedFields;
    updateStep5([...fields, ""], isLiked);
    isLiked
      ? setLikedFields([...fields, ""])
      : setDislikedFields([...fields, ""]);
  };

  const deleteField = (index, isLiked) => {
    const fields = isLiked ? likedFields : dislikedFields;
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    updateStep5(updatedFields, isLiked);
    isLiked ? setLikedFields(updatedFields) : setDislikedFields(updatedFields);
  };

  const handleChange = (index, value, isLiked) => {
    const fields = isLiked ? likedFields : dislikedFields;
    const updatedFields = [...fields];
    updatedFields[index] = value;
    updateStep5(updatedFields, isLiked);
    isLiked ? setLikedFields(updatedFields) : setDislikedFields(updatedFields);
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography
        variant="h5"
        sx={{
          color: "#7B90FF",
          marginTop: "1rem",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        How Was Your Overall Experience at Collegecue?
      </Typography>

      <Typography
        sx={{ marginY: "2rem", textAlign: "center", fontWeight: 400 }}
      >
        What to include: Things You Liked & Disliked About Your College, Campus
        Life, Faculty, Placement, Infrastructure & Course?
      </Typography>

      {/* Liked & Disliked Fields */}
      {[
        { fields: likedFields, title: "Things You Liked" },
        { fields: dislikedFields, title: "Things You Disliked" },
      ].map((item, index) => (
        <Box
          key={index}
          sx={{
            marginX: "20%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "2rem",
          }}
        >
          <Typography sx={{ marginY: "1rem" }}>{item.title}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "flex-start",
            }}
          >
            {item.fields.map((value, idx) => (
              <Box key={idx} sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  type="text"
                  value={value}
                  onChange={(e) =>
                    handleChange(idx, e.target.value, index === 0)
                  }
                  placeholder={`Things You ${
                    index === 0 ? "Like" : "Dislike"
                  } ${idx + 1}`}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    minWidth: "150px",
                    borderRadius: "12px",
                  }}
                />
                <IconButton
                  onClick={() => deleteField(idx, index === 0)}
                  sx={{ marginLeft: "10px" }}
                >
                  <MdDelete size={24} style={{ color: "#E4441A" }} />
                </IconButton>
              </Box>
            ))}
          </Box>
          <Button
            onClick={() => addField(index === 0)}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              width: "fit-content",
              color: "#313893",
            }}
          >
            Add More <IoMdAddCircle size={24} />
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default StepFour;
