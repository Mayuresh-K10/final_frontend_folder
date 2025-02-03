import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import WallpaperOutlinedIcon from "@mui/icons-material/WallpaperOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ApprovalOutlinedIcon from "@mui/icons-material/ApprovalOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Documents = () => {
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", textAlign: "center", marginTop: "2rem" }}>
          <Typography
            sx={{
              color: "#210366",
              fontSize: 32,
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Education Loan{" "}
          </Typography>
          <Typography
            sx={{
              color: "#FF7900",
              fontSize: 32,
              fontWeight: "500",
              wordWrap: "break-word",
              marginLeft: 2,
            }}
          >
            {" "}
            Documents Required{" "}
          </Typography>
          <Typography
            sx={{
              color: "#210366",
              fontSize: 32,
              fontWeight: "500",
              wordWrap: "break-word",
              marginLeft: 1,
            }}
          >
            ?
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            gap={"2rem"}
            sx={{
              marginY: "1rem",
            }}
          >
            <Box sx={{}}>
              <DraftsOutlinedIcon
                sx={{ width: 64, height: 60, color: "#FF7900", marginLeft: 12 }}
              />
              <Typography sx={{ width: 250, textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#FF7900",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Admission letter
                </Typography>
                <Typography
                  sx={{
                    color: "#210366",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  with all essential details
                </Typography>
              </Typography>
            </Box>

            <Box>
              <ContentPasteOutlinedIcon
                sx={{ width: 64, height: 60, color: "#FF7900", marginLeft: 12 }}
              />
              <Typography sx={{ width: 250, textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#FF7900",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Attested copies of
                </Typography>
                <Typography
                  sx={{
                    color: "#210366",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  age proof, residence proof and birth date
                </Typography>
              </Typography>
            </Box>

            <Box>
              <WallpaperOutlinedIcon
                sx={{ width: 64, height: 60, color: "#FF7900", marginLeft: 12 }}
              />
              <Typography sx={{ width: 250, textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#FF7900",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Self-attested
                </Typography>
                <Typography
                  sx={{
                    color: "#210366",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  passport size photograph
                </Typography>
              </Typography>
            </Box>

            <Box>
              <MenuBookOutlinedIcon
                sx={{ width: 64, height: 60, color: "#FF7900", marginLeft: 12 }}
              />
              <Typography sx={{ width: 250, textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#FF7900",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Copies of
                  <Typography
                    sx={{
                      color: "#210366",
                      fontSize: 18,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    qualifying courses
                  </Typography>
                </Typography>
              </Typography>
            </Box>

            <Box>
              <AttachMoneyIcon
                sx={{ width: 64, height: 60, color: "#FF7900", marginLeft: 12 }}
              />
              <Typography sx={{ width: 250, textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#FF7900",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Income proof and/or copy of
                </Typography>
                <Typography
                  sx={{
                    color: "#210366",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  income tax return file
                </Typography>
              </Typography>
            </Box>

            <Box>
              <ApprovalOutlinedIcon
                sx={{ width: 64, height: 60, color: "#FF7900", marginLeft: 12 }}
              />
              <Typography sx={{ width: 250, textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#210366",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  Details of collateral security along with government approved
                  valuation certificate (if any)
                </Typography>
              </Typography>
            </Box>

            <Box>
              <ArticleOutlinedIcon
                sx={{ width: 64, height: 60, color: "#FF7900", marginLeft: 12 }}
              />
              <Typography sx={{ width: 250, textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#FF7900",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Self-attested
                </Typography>
                <Typography
                  sx={{
                    color: "#210366",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  passport size photograph
                </Typography>
              </Typography>
            </Box>

            <Box>
              <AccountBalanceWalletOutlinedIcon
                sx={{ width: 64, height: 60, color: "#FF7900", marginLeft: 12 }}
              />
              <Typography sx={{ width: 250, textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#FF7900",
                    fontSize: 18,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  Copies of
                  <Typography
                    sx={{
                      color: "#210366",
                      fontSize: 18,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    qualifying courses
                  </Typography>
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Documents;
