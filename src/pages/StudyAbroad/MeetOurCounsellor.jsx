import { Box,  Grid } from "@mui/material";
import React  from "react";
import HeadText from "../../components/Headings/HeadText";
import { CounsellorsCardData } from "./Data";
import CounsellorsCard from "../../components/Cards/CounsellorsCard";

const MeetOurCounsellor = () => {
  return (
    <Box
    sx={{paddingY:"3.5rem"}}
    >
      <HeadText headText={"Meet Our Counsellors"} />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        style={{ marginTop: "2rem" }}
      >
        {CounsellorsCardData.map((val, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CounsellorsCard
              image={val.image}
              name={val.name}
              designation={val.designation}
              exp={val.exp}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MeetOurCounsellor;
