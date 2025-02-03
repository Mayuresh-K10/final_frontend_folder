import React from "react";
//import "../Assets/CSS/style.css";
import { Link } from "react-router-dom";

const InnerTextSection = () => {
  const categoryCard = [
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_63.772e8f20.svg",
      category: "UI/UX Design",
      totalJobs: "12",
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_64.35fa6b78.svg",
      category: "Development",
      totalJobs: "7",
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_65.718cba66.svg",
      category: "Telemarketing",
      totalJobs: "310",
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_68.41869509.svg",
      category: "Marketing",
      totalJobs: "420",
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_66.64f36c76.svg",
      category: "Editing",
      totalJobs: "3",
    },
    {
      image:
        "https://jobi-nextjs.vercel.app/_next/static/media/icon_67.569964fa.svg",
      category: "Accounting",
      totalJobs: "150",
    },
  ];

  return (
    <section
      style={{ backgroundColor: "inherit" }}
      className="category-section-one position-relative mt-120 lg-mt-80"
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-8">
            <div className="title-three">
              <h2
                className="wow fadeInUp fw-600 text-dark"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible; animation-delay: 0.3s",
                  fontWeight: "380",
                  fontSize: "40px",
                }}
              >
                Most Demanding Categories.
              </h2>
            </div>
          </div>

          <div style={{ height: "10vh" }} className="col-lg-5">
            <div className="d-flex justify-content-lg-end">
              <Link
                to="/job-portal/job"
                className="btn-six  d-lg-inline-block"
                style={{ color: "#7F29CF" }}
              >
                Explore all fields
              </Link>
            </div>
          </div>
        </div>

        <div className="card-wrapper row justify-content-center mt-45 lg-mt-30">
          {categoryCard.map((card, index) => (
            <div
              key={index}
              className="card-style-one text-center mt-20 wow fadeInUp"
              style={{
                visibility: "visible",
              }}
            >
              <Link
                to="/job-portal/job"
                className="wrapper "
                data-wow-delay="0.2s"
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="21"
                    height="20"
                    decoding="async"
                    dataNimg="1"
                    className="lazy-img"
                    src={card.image}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="title fw-500">{card.category}</div>
                <div className="total-job">{card.totalJobs}k+ Jobs</div>
              </Link>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
export default InnerTextSection;
