import React from "react";
import "../Assets/CSS/style.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const FaqPage = () => {
  const FaqData = [
    {
      id: 1,
      ques: "How does the free trial work?",
      ans: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      ques: "How do you find different criteria in your process?",
      ans: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      ques: "What do you look for in a founding team?",
      ans: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      ques: "Do you recommend Pay as you go or Pre pay?",
      ans: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 5,
      ques: "What do I get for $0 with my plan?",
      ans: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section className="faq-section position-relative mt-180 xl-mt-150 lg-mt-100 mb-150 lg-mb-100">
      <div className="container">
        <div className="title-one text-center">
          <h2
            className="text-dark wow fadeInUp"
            data-wow-delay="0.3s"
            style={{ visibility: "visible; animation-delay: 0.3s",fontWeight: "380", fontSize: "65px" , }}
          >
            Questions &amp; Answers
          </h2>
        </div>

        <div className="bg-wrapper mt-60 lg-mt-40">
          <div className="accordion accordion-style-two" id="accordionTwo">
            {FaqData.map((faq, index) => (
              <Accordion variant="outlined" key={index} className="accordion-item">
                <AccordionSummary className="accordion-header" id="heading-One">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-One"
                    aria-expanded="false"
                    aria-controls="collapse-One"
                  >
                    {faq.ques}
                  </button>
                </AccordionSummary>
                
                  <AccordionDetails className="accordion-body">
                    <p>
                     {faq.ans}
                    </p>
                  </AccordionDetails>
                
              </Accordion>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default FaqPage;
