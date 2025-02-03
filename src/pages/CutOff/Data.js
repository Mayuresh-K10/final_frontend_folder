function Category(category, overall, varc, dilr, qa) {

    return { category, overall, varc, dilr, qa };
}
const Categoryrows = [
    Category('General', '80', '80', '75', '75'),
    Category('NC-OBC', '80', '80', '75', '75'),
    Category('EWS', '70', '60', '75', '75'),
    Category('SC', '80', '80', '75', '75'),
    Category('ST', '80', '80', '75', '75'),
    Category('PWD', '50', '60', '50', '65'),

];
function Process(steps, process) {

    return { steps, process };
}
const Processrows = [
    Process('Step 1', 'Visit the Official site of CAT 2022 at iimcat.ac.in'),
    Process('Step 2', 'Click on the “Login” button (mentioned under CAT 2022 scorecard download)'),
    Process('Step 3', 'Enter CAT 2022 ID & Password Press Enter'),
    Process('Step 4', 'Click on “Scorecard” tab'),
    Process('Step 5', 'Download the CAT result 2022 pdf'),


];
function FInalCutoff(IIMs, Cutoffs) {

    return { IIMs, Cutoffs };
}
const FInalCutoffrows = [
    FInalCutoff('IIM Bangalore', '99-100'),
    FInalCutoff('IIM Bodh Gaya', '92-94'),
    FInalCutoff('IIM Ahmedabad', '99-100'),
    FInalCutoff('IIM Calcutta', '99'),
    FInalCutoff('IIM Nagpur', '95-96'),
    FInalCutoff('IIM Sambalpur', '95-96'),

];

const Information = [
    "The CAT 2022 result is available on the official site of IIM CAT. Candidates can check the result & also download the scorecard using their ID & password. The below table represents the process of how to check CAT 2022 scores to qualify for IIM Bangalore cutoff 2023:"
];


function Ranking(placement, ranking) {

    return { placement, ranking };
}
const rankingrows = [
    Ranking('IIM Bangalore Courses & Fees', 'IIM Bangalore Scholarship'),
];

const Exam = [
    "CAT",
];
const Programs = [
    "All",
];
const Type = [
    "Percentile",
];
const Categoryy = [
    "General",
];
const Round = [
    "Round 1"
];
function CATCutoff(Courses, cutoff2022, cutoff2021) {

    return { Courses, cutoff2022, cutoff2021 };
}
const CATCutoffs = [
    CATCutoff('PGP-PPM', '99', '99'),
    CATCutoff('PGPM', '-', '99'),


];

const Info = [
    "IIM Bangalore, CAT Cutoff 2022 for General Category is listed below. The overall cutoff for CAT is 99 percentile."
];
const QuestAns = [
    
    {
       id:1,
       ques:"What is IIM Bangalore Cutoff 2023?",
       ans:"IIM Bangalore Final Cutoff 2023 may be 99 to 100 percentile for general category."
    },
    {
        id:2,
        ques:"What are category - wise CAT cutoffs of IIM Bangalore?",
        ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        id:3,
        ques:"What are category - wise CAT cutoffs of IIM Bangalore?",
        ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
]
const notify = [
    "10 May, 2023 : IIM Admission 2023: Keeping a Check on the Waitlist Movement Trend Might Subdue your Anxiety. Read How? IIM Bangalore Cutoff may range between 99 to 100 percentile for the general category candidates. IIM Bangalore admission 2023 follows a two step process i.e Writing Ability test (WAT) & Personal Interview (PI). However, IIMs do not release the CAT cutoffs in public domain."
];
const Highlights = [
    "IIM Bangalore accepts both sectional & overall cutoff for admission process. IIM Bangalore cutoff 2023 will be 99 to 100 percentile for the general category students. The below table represents the minimum prescribed cutoffs for preparing shortlist of IIM Bangalore:"
];

export {Categoryrows,Info,CATCutoffs,Round,Categoryy,Type,Programs,Exam,rankingrows,Information ,FInalCutoffrows,Processrows,QuestAns,notify,Highlights}
