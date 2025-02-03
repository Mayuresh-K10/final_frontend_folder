import { Box } from '@mui/material';
import CardComponent from '../../components/Cards/CardComponent';

const ParentComponent = () => {
  const data = [
    {
      heading: 'NEET 2021 Chemistry Question Paper With',
      date: 'Mar 28,2023',
      description: 'NEET 2021 Chemistry Question Paper with Solutions PDF Code N2 is available for download. NEET 2021 N2 Chemistry Question Paper comprises 50 MCQs.',
    },
    {
      heading: 'CISCE Releases ICSE and ISC Board Exam',
      date: 'Apr 10,2023',
      description: 'The Council for the Indian School Certificate Examinations (CISCE) has released the timetables for the ICSE and ISC Board Exams 2024. The Class 10 and 12 exam dates are now available on the official CISCE website, cisce.org.  ',
    },
    {
      heading: 'AEEE 2024 Registration Open With',
      date: 'May 2,2023',
      description: 'AEEE 2024 Phase 1 is scheduled from January 19 to January 22, 2023. AEEE 2024 Application Form is released at amrita.edu. The last date to register is January 05, 2023.',
    },

  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'start', height: 'auto',paddingTop:"3rem",paddingBottom:"2rem", flexWrap:"wrap",rowGap:"2rem" }}>
      {data.map((item, index) => (
        <CardComponent key={index} {...item} />
      ))}
    </Box>
  );
}
export default ParentComponent;