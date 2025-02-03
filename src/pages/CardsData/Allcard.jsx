import { Box } from "@mui/material";
import React from "react";
import Carddesign from "./Carddesign";
import Img1 from "../Assets/IIT_Guwahati__1641446008448_1641446008765 1 (1).png";
import Img2 from "../Assets/IIT_Guwahati__1641446008448_1641446008765 1 (2).png";
import Img3 from "../Assets/IIT_Guwahati__1641446008448_1641446008765 1 (3).png";
import Imglogo1 from "../Assets/Rectangle 17904 (1).png";
import Imglogo2 from "../Assets/Rectangle 17904 (2).png";
import Imglogo3 from "../Assets/Rectangle 17904 (3).png";

const Allcard = () => {
  const data = [
    {
      CollegeParticiapting: "783",
      examdate: "07 May 2023",
      examlevel: "National",
      imgcontent: "NEET 2023 College Predictor",
      imglogo: Imglogo1,
      imgpath: Img1,
    },
    {
      CollegeParticiapting: "1362",
      examdate: "26 Nov 2023",
      examlevel: "National",
      imgcontent: "CAT 2023 College Predictor",
      imglogo: Imglogo2,
      imgpath: Img2,
    },

    {
      CollegeParticiapting: "41",
      examdate: "04 June 2023",
      examlevel: "National",
      imgcontent: "Jee Advanced 2023 College Predictor",
      imglogo: Imglogo3,
      imgpath: Img3,
    },
    {
      CollegeParticiapting: "1642",
      examdate: "08 April 2023",
      examlevel: "National",
      imgcontent: "JEE Main 2023 College Predictor",
    },
    {
      CollegeParticiapting: "107",
      examdate: "07 Dec 2023",
      examlevel: "National",
      imgcontent: "NMAT 2023 College Predictor",
    },
    {
      CollegeParticiapting: "1229",
      examdate: "13 May 2023",
      examlevel: "National",
      imgcontent: "MAT 2023 College Predictor",
    },
    {
      CollegeParticiapting: "1303",
      examdate: "11 Feb 2023",
      examlevel: "National",
      imgcontent: "GATE 2023 College Predictor",
    },
    {
      CollegeParticiapting: "791",
      examdate: "08 Jan 2023",
      examlevel: "National",
      imgcontent: " XAT 2023 College Predictor",
    },
    {
      CollegeParticiapting: "5",
      examdate: "21 May 2023",
      examlevel: "National",
      imgcontent: "BITSAT 2023 College Predictor",
    },
    {
      CollegeParticiapting: "49",
      examdate: "11 Feb 2023",
      examlevel: "National",
      imgcontent: "IIT JAM 2023 College Predictor",
    },
    {
      CollegeParticiapting: "257",
      examdate: "17 May 2023",
      examlevel: "National",
      imgcontent: "KEAM 2023 College Predictor",
    },
    {
      CollegeParticiapting: "1044",
      examdate: "04 May 2023",
      examlevel: "National",
      imgcontent: "CMAT 2023 College Predictor",
    },
    {
      CollegeParticiapting: "121",
      examdate: "30 April 2023",
      examlevel: "National",
      imgcontent: "WBJEE 2023 College Predictor",
    },
    {
      CollegeParticiapting: "173",
      examdate: "28 May 2023",
      examlevel: "National",
      imgcontent: "COMEDK UGET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "265",
      examdate: "10 May 2023",
      examlevel: "National",
      imgcontent: "TS EAMCET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "272",
      examdate: "15 May 2023",
      examlevel: "Andhra Pradesh",
      imgcontent: "AP EACET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "146",
      examdate: "12 May 2023",
      examlevel: "Orissa",
      imgcontent: "OJEE Advanced 2023 College Predictor",
    },
    {
      CollegeParticiapting: "313",
      examdate: "21 May 2023",
      examlevel: "Karnataka",
      imgcontent: "KCET Main 2023 College Predictor",
    },
    {
      CollegeParticiapting: "28",
      examdate: "18 Dec 2023",
      examlevel: "National",
      imgcontent: "SNAP 2023 College Predictor",
    },
    {
      CollegeParticiapting: "357",
      examdate: "25 March 2023",
      examlevel: "Tamil Nadu",
      imgcontent: "TNCET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "111",
      examdate: "11 May 2023",
      examlevel: "National",
      imgcontent: "IPU CET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "606",
      examdate: "15 May 2023",
      examlevel: "Maharastra",
      imgcontent: "MHT CET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "19",
      examdate: "18 Dec 2023",
      examlevel: "National",
      imgcontent: "CLAT 2023 College Predictor",
    },
    {
      CollegeParticiapting: "430",
      examdate: "28 May 2023",
      examlevel: "National",
      imgcontent: "ATMA 2023 College Predictor",
    },
    {
      CollegeParticiapting: "4",
      examdate: "28 Jan 2023",
      examlevel: "National",
      imgcontent: "TISSNET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "15",
      examdate: "22 Jan 2023",
      examlevel: "National",
      imgcontent: "CEED 2023 College Predictor",
    },
    {
      CollegeParticiapting: "75",
      examdate: "14 May 2023",
      examlevel: "National",
      imgcontent: "NCHMCT 2023 College Predictor",
    },
    {
      CollegeParticiapting: "23",
      examdate: "05 Feb 2023",
      examlevel: "National",
      imgcontent: "NIFT 2023 College Predictor",
    },
    {
      // CollegeParticiapting:"41",
      examdate: "18 Dec 2023",
      examlevel: "National",
      imgcontent: "IIFT 2023 College Predictor",
    },
    {
      CollegeParticiapting: "246",
      examdate: "26 May 2023",
      examlevel: "Andhra PradesH",
      imgcontent: "APICET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "06",
      examdate: "04 May 2023",
      examlevel: "Kerala",
      imgcontent: "CUSAT CAT 2023 College Predictor",
    },
    {
      CollegeParticiapting: "203",
      examdate: "27 May 2023",
      examlevel: "Telangana",
      imgcontent: "TSICET 2023 College Predictor",
    },
    {
      // CollegeParticiapting:"41",
      examdate: "11 Dec 2023",
      examlevel: "National",
      imgcontent: "AILET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "161",
      examdate: "10 Dec 2023",
      examlevel: "Karnataka",
      imgcontent: "KMAT 2023 College Predictor",
    },
    {
      CollegeParticiapting: "20",
      examdate: "17 Nov 2023",
      examlevel: "National",
      imgcontent: "CLAT PG 2023 College Predictor",
    },
    {
      CollegeParticiapting: "20",
      examdate: "25 Sep 2023",
      examlevel: "Kerala",
      imgcontent: "KLEE 2023 College Predictor",
    },
    {
      CollegeParticiapting: "303",
      examdate: "07 July 2023",
      examlevel: "Karnataka",
      imgcontent: "Karnataka PG CET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "520",
      examdate: "02 July 2023",
      examlevel: "Uttar-Pradesh",
      imgcontent: "UPCET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "9",
      examdate: "11 June 2023",
      examlevel: "National",
      imgcontent: "SRMJEE 2023 College Predictor",
    },
    {
      CollegeParticiapting: "24",
      examdate: "11 June 2023",
      examlevel: "National",
      imgcontent: "NIMCET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "104",
      examdate: "10 June 2023",
      examlevel: "West Bangal",
      imgcontent: "JELET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "57",
      examdate: "22 May 2023",
      examlevel: "Chattisgarh",
      imgcontent: "Chattisgarh Pre Engineering Test 2023 College Predictor",
    },
    {
      CollegeParticiapting: "1",
      examdate: "21 May 2023",
      examlevel: "National",
      imgcontent: "DAVV CET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "188",
      examdate: "21 May 2023",
      examlevel: "National",
      imgcontent: "CUET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "29",
      examdate: "17 May 2023",
      examlevel: "Telanagana",
      imgcontent: "TS POLYCET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "336",
      examdate: "06 May 2023",
      examlevel: "National",
      imgcontent: "MAHCET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "12",
      examdate: "30 APR 2023",
      examlevel: "National",
      imgcontent: "NIID 2023 College Predictor",
    },
    {
      CollegeParticiapting: "21",
      examdate: "30 Apr 2023",
      examlevel: "Maharastra",
      imgcontent: "MAH M Arch CET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "15",
      examdate: "29 Apr 2023",
      examlevel: "National",
      imgcontent: "INI CET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "07",
      examdate: "28 Apr 2023",
      examlevel: "National",
      imgcontent: "MET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "82",
      examdate: "20 Apr 2023",
      examlevel: "National",
      imgcontent: "MH CET LAW2023 College Predictor",
    },
    {
      // CollegeParticiapting:"41",
      examdate: "20 Apr 2023",
      examlevel: "National",
      imgcontent: "MAH BHMCET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "178",
      examdate: "03 ApR 2023",
      examlevel: "National",
      imgcontent: "GUJCET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "132",
      examdate: "27 March 2023",
      examlevel: "Maharastra",
      imgcontent: "MAH MCA CET 2023 College Predictor",
    },
    {
      CollegeParticiapting: "263",
      examdate: "05 Apr 2023",
      examlevel: "National",
      imgcontent: "NEET PG  2023 College Predictor",
    },
    {
      CollegeParticiapting: "161",
      examdate: "01 March 2023",
      examlevel: "National",
      imgcontent: "NEET MDS 2023 College Predictor",
    },
    {
      CollegeParticiapting: "34",
      examdate: "22 June 2023",
      examlevel: "National",
      imgcontent: "UCEED 2023 College Predictor",
    },
    {
      CollegeParticiapting: "522",
      // examdate:"04 June 2023",
      examlevel: "Tamilnadu",
      imgcontent: "TNEA 2023 College Predictor",
    },
    {
      CollegeParticiapting: "126",
      // examdate:"04 June 2023",
      examlevel: "National",
      imgcontent: "HSTES 2023 College Predictor",
    },
    {
      CollegeParticiapting: "8",
      // examdate:"04 June 2023",
      examlevel: "National",
      imgcontent: "JAC Delhi 2023 College Predictor",
    },
    {
      // CollegeParticiapting:"41",
      // examdate:"04 June 2023",
      examlevel: "National",
      imgcontent: "JAC CHANDIGRAH 2023 College Predictor",
    },
    {
      CollegeParticiapting: "209",
      // examdate:"04 June 2023",
      examlevel: "Gujarat",
      imgcontent: "Gujarat ACPC 2023 College Predictor",
    },
    {
      CollegeParticiapting: "",
      examdate: "04 June 2023",
      examlevel: "National",
      imgcontent: "Jee Advanced 2023 College Predictor",
    },
    {
      // CollegeParticiapting:"41",
      // examdate:"04 June 2023",
      examlevel: "Madhya Pradesh",
      imgcontent: "MP Counselling 2023 College Predictor",
    },
    {
      CollegeParticiapting: "44",
      // CollegeParticiapting:"225",
      // examdate:"04 June 2023",
      examlevel: "Karnataka",
      imgcontent: "DASA 2023 College Predictor",
    },
    {
      // CollegeParticiapting:"41",
      // examdate:"04 June 2023",
      examlevel: "National",
      imgcontent: "Maharastra JEE Main 2023 College Predictor",
    },
    {
      // CollegeParticiapting:"41",
      // examdate:"04 June 2023",
      examlevel: "Bihar",
      imgcontent: "UGMAC 2023 College Predictor",
    },
    {
      // CollegeParticiapting:"41",
      // examdate:"04 June 2023",
      examlevel: "National",
      imgcontent: "Punjab NEET Counselling College Predictor",
    },

    {
      CollegeParticiapting: "29",
      // examdate:"04 June 2023",
      examlevel: "National",
      imgcontent: "Rajashthan NEET Counselling 2023 College Predictor",
    },
    {
      // CollegeParticiapting:"41",
      // examdate:"04 June 2023",
      examlevel: "National",
      imgcontent: "Bihar UGMAC 2023 College Predictor",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        margin: "1rem 0",
      }}
    >
      {data.map((item, index) => (
        <Carddesign key={index} {...item} />
      ))}
    </Box>
  );
};

export default Allcard;
