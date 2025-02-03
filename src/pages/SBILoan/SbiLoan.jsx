import { Box, Container } from "@mui/material";
import HeroSection from "./components/HeroSection";
import EdulLoan from "./components/EdulLoan";
import EmiCalculator from "./components/EmiCalculator";
import LoanEligible from "./components/LoanEligible";
import LoanDetails from "./components/LoanDetails";
import ApplyLoam from "./components/ApplyLoam";
import Expens from "./components/Expens";
import Documents from "./components/Documents";
import Scheme from "./components/Scheme";
// import Faq from "./components/Faq";
import BoldHeading from "../../components/Headings/BoldHeading";
import DataTable from "./components/DataTable";
import { BankData } from "../../data/BankDetail";

import { useParams } from "react-router-dom";
import Faq from "../../components/Faq/Faq"
import { FaqData } from "./accordianData";
function SbiLoan() {

  const { bankName } = useParams();

  const { edulLoan, loanEligible, applyLoan, loanDetails,  scheme } = BankData; // Destructure BankData object

  

  return (
    <>
      <HeroSection />
      <Box sx={{ overflow: "hidden" }}>
        <Container maxWidth= "xl">
          <EdulLoan {...edulLoan} /> 
          <EmiCalculator />
          <LoanEligible {...loanEligible} />
          <DataTable />    
          <ApplyLoam {...applyLoan} />
          <LoanDetails {...loanDetails} /> 
          <Expens expenses={BankData.expenses} courses={BankData.courses} /> 
          <Documents />
          <Scheme {...scheme} /> 
          <BoldHeading textAlign="center" color="#1F305E">
          Frequently Asked Questions (FAQs)
        </BoldHeading>
        <Faq faqs={FaqData} />
        
        </Container>
      </Box>
    </>
  );
}

export default SbiLoan;
