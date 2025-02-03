import { Box, Container, Grid, Typography } from "@mui/material";
import PortraitTwoToneIcon from "@mui/icons-material/PortraitTwoTone";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import BusinessSharpIcon from "@mui/icons-material/BusinessSharp";
import HomeRepairServiceTwoToneIcon from "@mui/icons-material/HomeRepairServiceTwoTone";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
function ratings() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0px ",
        paddingTop: "2rem !important",
      }}
    >
      <Box
        sx={{
          fontStyle: "normal",
          background: "#ffffff",
          boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "0.9rem",

          color: "#2f1370",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Grid
          item
          xs={6}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Poppins, sans-serif",
            fontStyle: "normal",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "##210366",
              fontWeight: "bold",
              fontSize: "1.2rem",
              paddingTop: "1rem",
              fontFamily: "Poppins, sans-serif",
              textTransform: "capitalize",
            }}
          >
            {" "}
            IIM Bangalore ratings
          </Typography>

          <Typography
            sx={{
              color: "#210366",
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.875rem",
              fontStyle: "normal",
              fontWeight: 600,
              paddingTop: "1rem",
              textTransform: "capitalize",
            }}
          >
            {" "}
            Based on 73 Students
            <Typography
              sx={{
                color: "#7B90FF",
                fontFamily: "Poppins, sans-serif",
                fontSize: "0.875rem",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "0.89375rem",
                textTransform: "uppercase",
              }}
            >
              claim this college
            </Typography>
          </Typography>
        </Grid>
        <Box>
          <Typography
            sx={{
              color: "#210366",
              fontFamily: "Poppins",
              fontSize: "1.5rem",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "2.4375rem",
            }}
          >
            9.1 out of 10
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                <PortraitTwoToneIcon
                  sx={{
                    color: "#7B90FF",
                    fontSize: "1.3rem",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                />
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                9.2/10
                <Typography sx={{ fontWeight: "bold" }}>Academic</Typography>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                <HomeOutlinedIcon
                  sx={{
                    color: "#7B90FF",
                    fontSize: "1.3rem",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                />
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>9.2/10</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Academic</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                <PeopleAltTwoToneIcon
                  sx={{
                    color: "#7B90FF",
                    fontSize: "1.3rem",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                />
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>9.2/10</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Academic</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                <BusinessSharpIcon
                  sx={{
                    color: "#7B90FF",
                    fontSize: "1.3rem",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                />
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>9.3/10</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Infrastructure
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                <HomeRepairServiceTwoToneIcon
                  sx={{
                    color: "#7B90FF",
                    fontSize: "1.3rem",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                />
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>9.2/10</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Placement</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                <ShareTwoToneIcon
                  sx={{
                    color: "#7B90FF",
                    fontSize: "1.3rem",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                />
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>8.8/10</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Social Life</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default ratings;
