import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  List,
  ListItem,
  CardActions,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import React from "react";

export default function Boxes() {
  return (
    <Container>
      <Container>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "36px",
            fontWeight: "600",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
          }}
        >
          Similar Scholarships
        </Typography>
      </Container>

      <Stack
        sx={{
          width: "1486px",

          top: "3565px",
          left: "216px",
          "@media (max-width:600px)": {
            left: "0px",
          },
        }}
      >
        {/* ..........card 1.......... */}

        <Box
          sx={{
            width: "1486px",
            top: "3565px",
            left: "216px",
            paddingBottom: "50px",
          }}
        >
          <Box width="430px">
            <Card
              variant="outlined"
              sx={{
                boxShadow: "0px 0px 40px 0px #7B90FF26",
                width: "430px",
                top: "3565px",
                left: "216px",
                borderRadius: "28px",
                "@media (max-width:600px)": {
                  width: "fit-content",
                  height: "fit-content",
                  backgroundColor: "black",
                  left: "0px",
                },
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "600",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#41355D",
                    borderBottom: "1px solid #7B90FF33",
                    width: "430px",
                    height: "62px",
                    top: "3565px",
                    left: "216px",
                    borderRadius: "24px 24px 0px 0px",
                    border: "0px 0px 1px 0px",
                  }}
                >
                  Charles Wallace India Trust
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc",
                    listStylePosition: "inside",
                    color: "#41355D",
                  }}
                >
                  <ListItem
                    sx={{
                      display: "list-item",
                    }}
                  >
                    International Student Eligible:{" "}
                    <Typography variant="p" fontWeight="700">
                      {" "}
                      Yes
                    </Typography>
                  </ListItem>
                </List>

                <List
                  sx={{
                    listStyleType: "disc",
                    listStylePosition: "inside",
                    color: "#41355D",
                  }}
                >
                  <ListItem
                    sx={{
                      display: "list-item",
                    }}
                  >
                    Amount:{" "}
                    <Typography variant="p" fontWeight="700">
                      {" "}
                      Variable Amount
                    </Typography>
                  </ListItem>
                </List>

                <List
                  sx={{
                    listStyleType: "disc",
                    listStylePosition: "inside",
                    color: "#41355D",
                  }}
                >
                  <ListItem
                    sx={{
                      display: "list-item",
                    }}
                  >
                    Type:{" "}
                    <Typography variant="p" fontWeight="700">
                      {" "}
                      Awards{" "}
                    </Typography>
                  </ListItem>
                </List>

                <List
                  sx={{
                    listStyleType: "disc",
                    listStylePosition: "inside",
                    color: "#41355D",
                  }}
                >
                  <ListItem
                    sx={{
                      display: "list-item",
                    }}
                  >
                    Level Of Study:{" "}
                    <Typography variant="p" fontWeight="700">
                      {" "}
                      N/A{" "}
                    </Typography>
                  </ListItem>
                </List>

                <List
                  sx={{
                    listStyleType: "disc",
                    listStylePosition: "inside",
                    color: "#41355D",
                  }}
                >
                  <ListItem
                    sx={{
                      display: "list-item",
                    }}
                  >
                    Number Of Scholarships:
                    <Typography variant="p" fontWeight="700">
                      {" "}
                      N/A{" "}
                    </Typography>
                  </ListItem>
                </List>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  sx={{
                    color: "#FF7900",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginLeft: "10px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    lineHeight: "18px",
                    textTransform: "inherit",
                    textDecoration: "underline",
                  }}
                >
                  View more
                </Button>
              </CardActions>

              <CardActions>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF7900",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#FFFFFF",
                    textTransform: "inherit",
                    borderRadius: "10px",
                    width: "168px",
                    height: "40px",
                    marginRight: "40px",
                    marginLeft: "10px",
                  }}
                >
                  Apply Now
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#7B90FF",
                    textTransform: "inherit",
                    color: "#FFFFFF",
                    width: "168px",
                    height: "40px",
                    borderRadius: "10px",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Get alert
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
