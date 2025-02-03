import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { MainPageLayout } from "./layout/MainPageLayout";
import Coming from "./pages/ComingSoonPage/ComingSoonPage";
import { Admission2023 } from "./pages/Admission2023/Admission2023";
import { Canada } from "./pages/CanadaPage/Canada";
import { DifferentPlaces } from "./pages/DifferentPlaces/DifferentPlaces";
import { USA } from "./pages/USAPage/USA";
import UK from "./pages/UKPage/UKPage";
import UAE from "./pages/UAEPage/UAEPage.jsx";
import Australia from "./pages/AustraliaPage/AustraliaPage";
import Germany from "./pages/GermanyPage/GermanyPage";
import Ireland from "./pages/IrelandPage/IrelandPage";
import Hongkong from "./pages/HongkongPage/HongkongPage";
import Singapore from "./pages/SingaporePage/SingaporePage";
import NewZealand from "./pages/NewZealandPage/NewZealandPage";
import Malaysia from "./pages/MalaysiaPage/MalaysiaPage";
import Sweden from "./pages/SwedenPage/SwedenPage";
import Netherlands from "./pages/NetherlandsPage/NetherlandsPage";
import France from "./pages/FrancePage/FrancePage";
import Italy from "./pages/ItalyPage/ItalyPage";
import { ChooseCourses } from "./pages/ChooseCourses/ChooseCourses";
import { CollegeNews } from "./pages/News/CollegeNews";
import { Exam } from "./pages/Exam/Exam";
import { Institute } from "./pages/Institute/Institute";
import { Login } from "./pages/Auth/pages/Login";
import { Next } from "./pages/Auth/pages/Next";
import { Register } from "./pages/Auth/pages/Register";
import { CompanyRegistration } from "./pages/Auth/pages/Company.jsx";
import { CollegeRegistration } from "./pages/Auth/pages/College.jsx";
import { ConsultantRegistration } from "./pages/Auth/pages/Consultant.jsx";
import { ForgotPassword } from "./pages/Auth/pages/ForgotPassword.jsx";
import { ForgotRequest } from "./pages/Auth/pages/ForgotRequest.jsx";
import { RequestOtp } from "./pages/Auth/pages/RequestOtp";
import { Email } from "./pages/Auth/pages/Email";
import { Review } from "./pages/Review/Review";
import { Scholarship } from "./pages/Scholarship/Scholarship";
import { StudyAbroad } from "./pages/StudyAbroad/StudyAbroad";
import { TopUniversities } from "./pages/TopUniversities/TopUniversities";
import { WriteReview } from "./pages/Writereview/WriteReview";
import { CollegePredictor } from "./pages/CollegePredictor/CollegePredictor";
import { TestSeries } from "./pages/TestSeries/TestSeries";
import { Quiz } from "./pages/TestSeries/Quiz/Quiz.jsx";
import { PracticeAnswer } from "./pages/PracticeAnswer/PracticeAnswer";
import { PracticeQuestion } from "./pages/PracticeQuestion/PracticeQuestion";
import JeeMainRank from "./pages/JeeMainRank/JeeRank/JeeRank";
import TataScholarships from "./pages/TataScholarships/TataScholarships";
import QandA from "./pages/QandA/QandA";
import CourseFinder from "./pages/CourseFinder/CourseFinder";
import JobPortal from "./pages/JobPortal/JobPortal.jsx";
import Job from "./pages/JobPortal/Job.jsx";
import Steps from "./pages/writeReviewsSteps/Steps";
import LoanPage from "./pages/LoanPage/LoanPage.jsx";
import CollegePage from "./pages/CollegePage/CollagePage";
import InstitutePage from "./pages/instituteInfoPage/InstitutePage.jsx";
import CollegePridictorInfo from "./pages/CollegePridictorInfo/CollegePridictorInfo.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import StudyGoalComp from "./components/StudyGoalComponent/StudyGoalComp.jsx";
import CompanyPage from "./pages/JobPortal/companyPage.jsx";
import ContactUs from "./pages/contactUs.jsx";
import About from "./pages/About/About.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import Promotion from "./pages/Advertise/Promotion.jsx";
import InfoPage from "./pages/CollegePage/components/InfoPage.jsx";
import CutOff from "./pages/CutOff/CutOff.js";
import CourseFee from "./pages/CourseFee/CourseFee.jsx";
import Ranking from "./pages/Ranking/Ranking.jsx";
import Gallery from "./pages/Gallery/Gallery.js";
import Faculty from "./pages/Faculty/Faculty.js";
import JeeRank from "./pages/JeeMainRank/JeeRank/JeeRank";
import Hostel from "./pages/Hostel/Hostel.jsx";
import Reviews from "./pages/Reviews/Reviews.jsx";
import Placement from "./pages/Placement/Placement.jsx";
import TrendingNews from "./pages/TrendingNews/TrendingNews.jsx";
import { RegisterModal } from "./components/Modal/MultiModal.jsx";
import CpResult from "./pages/CP_result/CP_Result.jsx";
import IIMBangalore from "./pages/StudyAbroad/IIMBangalore/IIMBangalore.jsx";
import AbroadExam from "./pages/StudyAbroad/AbroadExam.jsx";
import CollegePageIn from "./pages/CollegePage/CollegePageIn.jsx";
import CollageInfoPage from "./pages/CollegePage/components/CollageInfoPage.jsx";
import CollegeFees from "./pages/CourseFee/CollegeFees.jsx";
import Company from "./pages/Company/CompanyDashboard/Company.jsx";
import Candidate from "./pages/Candidate/CandidateDashboard/Candidate.jsx";
import Admin from "./pages/Admin/AdminDashboard/Admin.jsx";
import { useLocation } from "react-router-dom";
import ArgentinaPage from "./pages/ArgentinaPage/ArgentinaPage.jsx";
import AustriaPage from "./pages/AustriaPage/AustriaPage.jsx";
import AzerbaijanPage from "./pages/AzerbaijanPage/AzerbaijanPage.jsx";
import BangladeshPage from "./pages/BangladeshPage/BangladeshPage.jsx";
import BelarusPage from "./pages/BelarusPage/BelarusPage.jsx";
import BelgiumPage from "./pages/BelgiumPage/BelgiumPage.jsx";
import BoliviaPage from "./pages/BoliviaPage/BoliviaPage.jsx";
import BrazilPage from "./pages/BrazilPage/BrazilPage.jsx";
import ChilePage from "./pages/ChilePage/ChilePage.jsx";
import ChinePage from "./pages/ChinaPage/ChinePage.jsx";
import ColombiaPage from "./pages/ColombiaPage/ColombiaPage.jsx";
import CostaRica from "./pages/CostaRicaPage/CostaRica.jsx";
import CroatiaPage from "./pages/CroatiaPage/CroatiaPage.jsx";
import CubaPage from "./pages/CubaPage/CubaPage.jsx";
import CyprusPage from "./pages/CyprusPage/CyprusPage.jsx";
import CzechiaPage from "./pages/CzechiaPage/CzechiaPage.jsx";
import DenmarkPage from "./pages/DenmarkPage/DenmarkPage.jsx";
import DominicanRepublicPage from "./pages/DominicanRepublicPage/DominicanRepublicPage.jsx";
import EcuadorPage from "./pages/EcuadorPage/EcuadorPage.jsx";
import EstoniaPage from "./pages/EstoniaPage/EstoniaPage.jsx";
import EgyptPage from "./pages/EgyptPage/EgyptPage.jsx";
import { FindInPage } from "@mui/icons-material";
import FinlandPage from "./pages/FinlandPage/FinlandPage.jsx";
import GeorgiaPage from "./pages/GeorgiaPage/GeorgiaPage.jsx";
import GhanaPage from "./pages/GhanaPage/GhanaPage.jsx";
import GreecePage from "./pages/GreecePage/GreecePage.jsx";
import GuatemalaPage from "./pages/GuatemalaPage/GuatemalaPage.jsx";
import HungaryPage from "./pages/HungaryPage/HungaryPage.jsx";
import IcelandPage from "./pages/IcelandPage/IcelandPage.jsx";
import IndiaPage from "./pages/IndiaPage/IndiaPage.jsx";
import IndonesiaPage from "./pages/IndonesiaPage/IndonesiaPage.jsx";
import IranPage from "./pages/IranPage/IranPage.jsx";
import IsraelPage from "./pages/IsraelPage/IsraelPage.jsx";
import JapanPage from "./pages/JapanPage/JapanPage.jsx";
import JordanPage from "./pages/JordanPage/JordanPage.jsx";
import KazakhstanPage from "./pages/KazakhstanPage/KazakhstanPage.jsx";
import KenyaPage from "./pages/KenyaPage/KenyaPage.jsx";
import KuwaitPage from "./pages/KuwaitPage/KuwaitPage.jsx";
import KyrgyzstanPage from "./pages/KyrgyzstanPage/KyrgyzstanPage.jsx";
import LatviaPage from "./pages/LatviaPage/LatviaPage.jsx";
import LebanonPage from "./pages/LebanonPage/LebanonPage.jsx";
import LithuaniaPage from "./pages/LithuaniaPage/LithuaniaPage.jsx";
import LuxembourgPage from "./pages/LuxembourgPage/LuxembourgPage.jsx";
import MaltaPage from "./pages/MaltaPage.jsx/MaltaPage.jsx";
import MacauPage from "./pages/MacauPage/MacauPage.jsx";
import MexicoPage from "./pages/MexicoPage/MexicoPage.jsx";
import MoroccoPage from "./pages/MoroccoPage/MoroccoPage.jsx";
import NigeriaPage from "./pages/NigeriaPage/NigeriaPage.jsx";
import NorthernCyprusPage from "./pages/NorthernCyprusPage/NorthernCyprusPage.jsx";
import NorwayPage from "./pages/NorwayPage/NorwayPage.jsx";
import OmanPage from "./pages/OmanPage/OmanPage.jsx";
import PakistanPage from "./pages/PakistanPage/PakistanPage.jsx";
import PalestinianTerritoriesPage from "./pages/PalestinianTerritories/PalestinianTerritoriesPage.jsx";
import PanamaPage from "./pages/PanamaPage/PanamaPage.jsx";
import ParaguayPage from "./pages/ParaguayPage/ParaguayPage.jsx";
import PeruPage from "./pages/PeruPage/PeruPage.jsx";
import PhilippinesPage from "./pages/PhilippinesPage/PhilippinesPage.jsx";
import PolandPage from "./pages/PolandPage/PolandPage.jsx";
import PortugalPage from "./pages/PortugalPage/PortugalPage.jsx";
import PuertoRicoPage from "./pages/PuertoRicoPage/PuertoRicoPage.jsx";
import QatarPage from "./pages/QatarPage/QatarPage.jsx";
import RomaniaPage from "./pages/RomaniaPage/RomaniaPage.jsx";
import RussiaPage from "./pages/RussiaPage/RussiaPage.jsx";
import SaudiArabiaPage from "./pages/SaudiArabiaPage/SaudiArabiaPage.jsx";
import SerbiaPage from "./pages/SerbiaPage/SerbiaPage.jsx";
import SlovakiaPage from "./pages/SlovakiaPage/SlovakiaPage.jsx";
import SloveniaPage from "./pages/SloveniaPage/SloveniaPage.jsx";
import SouthAfricaPage from "./pages/SouthAfricaPage/SouthAfricaPage.jsx";
import SouthKoreaPage from "./pages/SouthKoreaPage/SouthKoreaPage.jsx";
import SpainPage from "./pages/SpainPage/SpainPage.jsx";
import { JobSeekerPage } from "./pages/Auth/pages/JobSeeker.jsx";
import CollegeDashboardPage from "./pages/Company/Collegesuniversity/CollegeDashboard/CollegeDashboard.jsx";
import JobSeekerLoginCard from "./pages/Auth/components/JobSeekerLogin.jsx";
import { JobSeekerLogin } from "./pages/Auth/pages/JobSeekerLogin.jsx";
import { CollegeLogin } from "./pages/Auth/pages/CollegeLogin.jsx";
import { CompanyLogin } from "./pages/Auth/pages/Companylogin.jsx";
import StudentDashboardPage from "./pages/Candidate/Student/StudentDashboardPage.jsx";
import DegreeCollege from "./components/Country/DegreeCollege.jsx";
import CourseCollegeList from "./pages/StudyAbroad/CourseCollegeList.jsx";
import CoursesList from "./pages/ChooseCourses/CoursesList.jsx";
import { JobseekerEmail } from "./pages/Auth/pages/JobseekerEmail.jsx";
import { JobseekerForgotRequest } from "./pages/Auth/pages/JobseekerForgotRequest.jsx";
import { JobseekerForgotPassword } from "./pages/Auth/pages/JobseekerForgotPassword.jsx";
import { CompanyEmail } from "./pages/Auth/pages/CompanyEmail.jsx";
import { CompanyForgotRequest } from "./pages/Auth/pages/CompanyForgotRequest.jsx";
import { CompanyForgotPassword } from "./pages/Auth/pages/CompanyForgotPassword.jsx";
import { CollegeEmail } from "./pages/Auth/pages/CollegeEmail.jsx";
import { CollegeForgotRequest } from "./pages/Auth/pages/CollegeForgotRequest.jsx";
import { CollegeForgotPassword } from "./pages/Auth/pages/CollegeForgotPassword.jsx";


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState(true);
  const location = useLocation();

  const noModalRoutes = [
    "/job-portal/dashboard/company-dashboard",
    "/job-portal/dashboard/college-dashboard",
    "/job-portal/dashboard/candidate-dashboard",
    "/job-portal/dashboard/student-dashboard",
    "/Company-registration",
    "/College-registration",
    "/consultant-registration",
    "/jobseeker-registration",
    "/register",
    "/login",
    "/jobseeker-login",
    "/college-login",
    "/company-login",
    "/next",
    "/forgot-otp",
    "/College-registration",
    "/forgot-password",
    "/email",
    "/otp",

    "/jobseeker-email",
    "/jobseeker-forgot-otp",
    "/jobseeker-forgot-password",

    "/company-email",
    "/company-forgot-otp",
    "/company-forgot-password",

    "/college-email",
    "/college-forgot-otp",
    "/college-forgot-password",

  ];

  useEffect(() => {
    // Check if the current route starts with any of the noModalRoutes
    const shouldNotOpenModal = noModalRoutes.some(route =>
      location.pathname.startsWith(route)
    );

    if (shouldNotOpenModal) {
      return; // If so, do not proceed with opening the modal
    }

    const lastModalTime = localStorage.getItem("lastModalTime");
    const currentTime = new Date().getTime();
    const elapsed = currentTime - parseInt(lastModalTime, 10);

    const delay = 12000; // Delay of 12 seconds

    const shouldOpenModal = !lastModalTime || elapsed > delay;

    if (shouldOpenModal) {
      const timer = setTimeout(() => {
        setOpenModal(true);
        localStorage.setItem("lastModalTime", currentTime.toString());
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };



  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/coming-soon" element={<Coming />} />
          <Route path="/admission" element={<Admission2023 />} />
          <Route path="/choose-courses/*" element={<ChooseCourses />} />
          <Route path="/choose-courses/courselist" element={<CoursesList />} />
          <Route path="/study-goal" element={<StudyGoalComp />} />
          <Route path="/exam/:filter?/*" element={<Exam setModal={setModal} />} />
          <Route path="/entrance-exam/:filter?/*" element={<Exam setModal={setModal} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/institutes" element={<Institute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<CollegeNews />} />
          <Route path="/next" element={<Next />} />
          <Route path="/otp" element={<RequestOtp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/review" element={<Review />} />
          <Route path="/scholarships" element={<Scholarship />} />
          <Route path="/study-abroad/*" element={<StudyAbroad openModal={setModal} />} />
          <Route path="/study-abroad/canada" element={<Canada />} />
          <Route path="/study-abroad/united-state" element={<USA />} />
          <Route path="/study-abroad/uk" element={<UK />} />
          <Route path="/study-abroad/australia" element={<Australia />} />
          <Route path="/study-abroad/germany" element={<Germany />} />
          <Route path="/study-abroad/ireland" element={<Ireland />} />
          <Route path="/study-abroad/hong-kong" element={<Hongkong />} />
          <Route path="/study-abroad/italy" element={<Italy />} />
          <Route path="/study-abroad/singapore" element={<Singapore />} />
          <Route path="/study-abroad/new-zealand" element={<NewZealand />} />
          <Route path="/study-abroad/malaysia" element={<Malaysia />} />
          <Route path="/study-abroad/sweden" element={<Sweden />} />
          <Route path="/study-abroad/netherlands" element={<Netherlands />} />
          <Route path="/study-abroad/france" element={<France />} />
          <Route path="/study-abroad/argentina" element={<ArgentinaPage />} />
          <Route path="/study-abroad/austria" element={<AustriaPage />} />
          <Route path="/study-abroad/azerbaijan" element={<AzerbaijanPage />} />
          <Route path="/study-abroad/bangladesh" element={<BangladeshPage />} />
          <Route path="/study-abroad/belarus" element={<BelarusPage />} />
          <Route path="/study-abroad/belgium" element={<BelgiumPage />} />
          <Route path="/study-abroad/bolivia" element={<BoliviaPage />} />
          <Route path="/study-abroad/brazil" element={<BrazilPage />} />
          <Route path="/study-abroad/chile" element={<ChilePage />} />
          <Route path="/study-abroad/china" element={<ChinePage />} />
          <Route path="/study-abroad/colombia" element={<ColombiaPage />} />
          <Route path="/study-abroad/costa-rica" element={<CostaRica />} />
          <Route path="/study-abroad/croatia" element={<CroatiaPage />} />
          <Route path="/study-abroad/cuba" element={<CubaPage />} />
          <Route path="/study-abroad/cyprus" element={<CyprusPage />} />
          <Route path="/study-abroad/czechia" element={<CzechiaPage />} />
          <Route path="/study-abroad/denmark" element={<DenmarkPage />} />
          <Route path="/study-abroad/dominican-republic" element={<DominicanRepublicPage />} />
          <Route path="/study-abroad/ecuador" element={<EcuadorPage />} />
          <Route path="/study-abroad/estonia" element={<EstoniaPage />} />
          <Route path="/study-abroad/egypt" element={<EgyptPage />} />
          <Route path="/study-abroad/finland" element={<FinlandPage />} />
          <Route path="/study-abroad/georgia" element={<GeorgiaPage />} />
          <Route path="/study-abroad/ghana" element={<GhanaPage />} />
          <Route path="/study-abroad/greece" element={<GreecePage />} />
          <Route path="/study-abroad/guatemala" element={<GuatemalaPage />} />
          <Route path="/study-abroad/hungary" element={<HungaryPage />} />
          <Route path="/study-abroad/iceland" element={<IcelandPage />} />
          <Route path="/study-abroad/india" element={<IndiaPage />} />
          <Route path="/study-abroad/indonesia" element={<IndonesiaPage />} />
          <Route path="/study-abroad/iran" element={<IranPage />} />
          <Route path="/study-abroad/israel" element={<IsraelPage />} />
          <Route path="/study-abroad/japan" element={<JapanPage />} />
          <Route path="/study-abroad/jordan" element={<JordanPage />} />
          <Route path="/study-abroad/kazakhstan" element={<KazakhstanPage />} />
          <Route path="/study-abroad/kenya" element={<KenyaPage />} />
          <Route path="/study-abroad/kuwait" element={<KuwaitPage />} />
          <Route path="/study-abroad/kyrgyzstan" element={<KyrgyzstanPage />} />
          <Route path="/study-abroad/latvia" element={<LatviaPage />} />
          <Route path="/study-abroad/lebanon" element={<LebanonPage />} />
          <Route path="/study-abroad/lithuania" element={<LithuaniaPage />} />
          <Route path="/study-abroad/luxembourg" element={<LuxembourgPage />} />
          <Route path="/study-abroad/malta" element={<MaltaPage />} />
          <Route path="/study-abroad/macau" element={<MacauPage />} />
          <Route path="/study-abroad/mexico" element={<MexicoPage />} />
          <Route path="/study-abroad/morocco" element={<MoroccoPage />} />
          <Route path="/study-abroad/nigeria" element={<NigeriaPage />} />
          <Route path="/study-abroad/northern-cyprus" element={<NorthernCyprusPage />} />
          <Route path="/study-abroad/norway" element={<NorwayPage />} />
          <Route path="/study-abroad/oman" element={<OmanPage />} />
          <Route path="/study-abroad/pakistan" element={<PakistanPage />} />
          <Route path="/study-abroad/palestinian-territories" element={<PalestinianTerritoriesPage />} />
          <Route path="/study-abroad/panama" element={<PanamaPage />} />
          <Route path="/study-abroad/paraguay" element={<ParaguayPage />} />
          <Route path="/study-abroad/peru" element={<PeruPage />} />
          <Route path="/study-abroad/philippines" element={<PhilippinesPage />} />
          <Route path="/study-abroad/poland" element={<PolandPage />} />
          <Route path="/study-abroad/portugal" element={<PortugalPage />} />
          <Route path="/study-abroad/puerto-rico" element={<PuertoRicoPage />} />
          <Route path="/study-abroad/qatar" element={<QatarPage />} />
          <Route path="/study-abroad/romania" element={<RomaniaPage />} />
          <Route path="/study-abroad/russia" element={<RussiaPage />} />
          <Route path="/study-abroad/saudi-arabia" element={<SaudiArabiaPage />} />
          <Route path="/study-abroad/serbia" element={<SerbiaPage />} />
          <Route path="/study-abroad/slovakia" element={<SlovakiaPage />} />
          <Route path="/study-abroad/slovenia" element={<SloveniaPage />} />
          <Route path="/study-abroad/south-africa" element={<SouthAfricaPage />} />
          <Route path="/study-abroad/south-korea" element={<SouthKoreaPage />} />
          <Route path="/study-abroad/spain" element={<SpainPage />} />


          <Route path="/study-abroad/uae" element={<UAE />} />

          <Route
            path={`/study-abroad/:country/:city`}
            element={<DifferentPlaces />}
          />

          <Route path="/study-abroad/:subject" element={<CourseCollegeList />} />

          <Route path="/study-abroad/degree/:countryName/:degreeName" element={<DegreeCollege />} />

          <Route
            path={`/study-abroad/:city/:id/info`}
            element={<CollegePageIn />}
          />

          <Route path="/study-abroad/abroadExam" element={<AbroadExam />} />
          <Route
            path="/top-universities/:category?/:filter?/*"
            element={<TopUniversities openModal={setModal} />}
          />
          <Route path="/write-review" element={<WriteReview />} />
          <Route path="/collegePredictor" element={<CollegePredictor />} />
          <Route
            path="/collegePredictor/exam"
            element={<CollegePridictorInfo />}
          />
          <Route path="/collegePredictor/:id/result" element={<CpResult />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/quiz/:filter?/*" element={<Quiz />} />
          <Route path="/practice-answer" element={<PracticeAnswer />} />
          <Route path="/practice-questions" element={<PracticeQuestion />} />
          <Route path="/jee-rank" element={<JeeMainRank />} />
          <Route path="/tata-scholarships" element={<TataScholarships />} />
          {/*  */}
          <Route path="/qa" element={<QandA />} />
          <Route path="/course-finder" element={<CourseFinder />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/college-info/:id" element={<CollegePage openModal={setModal} />}>
            <Route
              path="/college-info/:id/info"
              element={<CollageInfoPage />}
            />
            <Route path="/college-info/:id/cutoff" element={<CutOff />} />
            <Route
              path="/college-info/:id/course-fee"
              element={<CollegeFees />}
            />
            <Route path="/college-info/:id/ranking" element={<Ranking />} />
            <Route path="/college-info/:id/gallery" element={<Gallery />} />
            <Route path="/college-info/:id/faculty" element={<Faculty />} />
            <Route path="/college-info/:id/jee-rank" element={<JeeRank />} />
            <Route path="/college-info/:id/hostel" element={<Hostel />} />
            <Route path="/college-info/:id/review" element={<Reviews />} />
            <Route path="/college-info/:id/placement" element={<Placement />} />
            <Route
              path="/college-info/:id/trending-news"
              element={<TrendingNews />}
            />
            <Route
              path="/college-info/:id/collage-compare"
              element={<IIMBangalore />}
            />
          </Route>
          <Route path="/Institute-info/:id" element={<InstitutePage />}>
            <Route path="/Institute-info/:id/info" element={<InfoPage />} />
            <Route
              path="/Institute-info/:id/course-fee"
              element={<CourseFee />}
            />
          </Route>
          <Route path="/Institute-info/exam/*" element={<InstitutePage />} />
          <Route path="/education-loan/*" element={<LoanPage />} />
          <Route path="/job-portal" element={<JobPortal />} />
          <Route path="/job-portal/job" element={<Job />} />
          <Route path="/job-portal/company" element={<CompanyPage />} />
          <Route path="/step" element={<Steps />} />
          {/* Dashboards => candidate, Company, Admin */}



          <Route
            path="/company-registration"
            element={<CompanyRegistration />}
          />
          <Route
            path="/college-registration"
            element={<CollegeRegistration />}
          />
          <Route
            path="/consultant-registration"
            element={<ConsultantRegistration />}
          />

          <Route path="/jobseeker-registration" element={<JobSeekerPage />} />
          <Route path="/jobseeker-login" element={<JobSeekerLogin />} />
          <Route path="/college-login" element={<CollegeLogin />} />
          <Route path="/company-login" element={<CompanyLogin />} />


          <Route path='/job-portal/dashboard/company-dashboard/*' element={<Company />} />
          <Route path="/job-portal/dashboard/college-dashboard/*" element={<CollegeDashboardPage />} />
          <Route path="/job-portal/dashboard/student-dashboard/*" element={<StudentDashboardPage />} />
          <Route path='/job-portal/dashboard/candidate-dashboard/*' element={<Candidate />} />
          <Route path="/dashboards/modern" element={<Admin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-otp" element={<ForgotRequest />} />
          <Route path="/email" element={<Email />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/promotion" element={<Promotion />} />

          <Route path="/jobseeker-email" element={<JobseekerEmail />} />
          <Route path="/jobseeker-forgot-otp" element={<JobseekerForgotRequest />} />
          <Route path="/jobseeker-forgot-password" element={<JobseekerForgotPassword />} />

          <Route path="/company-email" element={<CompanyEmail />} />
          <Route path="/company-forgot-otp" element={<CompanyForgotRequest />} />
          <Route path="/company-forgot-password" element={<CompanyForgotPassword />} />

          <Route path="/college-email" element={<CollegeEmail />} />
          <Route path="/college-forgot-otp" element={<CollegeForgotRequest />} />
          <Route path="/college-forgot-password" element={<CollegeForgotPassword />} />

        </Route>
      </Routes>

      {
        modal && <RegisterModal
          open={openModal}
          handleClose={handleCloseModal}
          showCollegeInfo={true}
        />
      }

      {/* <RegisterModal
        open={openModal}
        handleClose={handleCloseModal}
        showCollegeInfo={true}
      /> */}
    </div>
  );
}

export default App;
