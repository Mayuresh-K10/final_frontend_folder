import React from 'react';
import Notification from './Components/Notification';
import { Container } from '@mui/material';
import NirfRanking from './Components/NirfRanking';
import ParameterWiseScore from './Components/ParameterWiseScore';
import TopTenIIM from './Components/TopTenIIM';
import FtGlobalRanking from './Components/FtGlobalRanking';
import Iirf from './Components/Iirf';
import QsGlobalRank from './Components/QsGlobalRank';
import QsRankParameter from './Components/QsRankParameter';
import OutlookIim from './Components/OutlookIim';
import OutlookIimParameter from './Components/OutlookIimParameter';
import Faqs from './Components/Faqs';
import StreamsTag from './Components/StreamsTag';
import IndiaToday from './Components/IndiaToday';
import NumRating from './Components/NumRating';
import AllQuesAns from './Components/AllQueAns';
import FinanceTime from './Components/FinanceTime';
import FinanceExpress from './Components/FinanceExpress';
import MbaBox from './Components/MbaBox';
import Outlook from './Components/Outlook';
import TheTimes from './Components/TheTimes';
import MbaIirf from './Components/MbaIirf';
import TheWeek from './Components/TheWeek';

function Ranking() {
  return (
    <>
      <Container maxWidth='lg' >
        <Notification />
        <NirfRanking />
        <ParameterWiseScore />
        <TopTenIIM />
        <FtGlobalRanking />
        <Iirf />
        <QsGlobalRank />
        <QsRankParameter />
        <OutlookIim />
        <OutlookIimParameter />
        <Faqs />
        <StreamsTag />
        <IndiaToday />
        <FinanceTime />
        <FinanceExpress />
        <TheWeek />
        <MbaBox />
        <Outlook />
        <MbaIirf />
        <TheTimes />
        <NumRating />
        <AllQuesAns />
      </Container>

    </>
  );
}

export default Ranking;


