import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobs } from "../data/jobs";
import { useStore } from "../store/useStore";

const JobDetail: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { language } = useStore();
  const [applied, setApplied] = useState(false);

  const job = jobs.find((j) => j.id === Number(jobId));

  if (!job)
    return (
      <p className="no-jobs">
        {language === "hi"
          ? "नौकरी नहीं मिली!"
          : language === "te"
          ? "జాబ్ కనుగొనబడలేదు!"
          : "Job not found!"}
      </p>
    );

  const handleApply = () => {
    setApplied(true);
    setTimeout(() => setApplied(false), 3000); 
  };

  return (
    <div className="app">
      <div className="header">
        <button onClick={() => navigate(-1)}>←</button>
        <h1>
          {language === "hi"
            ? "नौकरी विवरण"
            : language === "te"
            ? "జాబ్ వివరాలు"
            : "Job Details"}
        </h1>
      </div>

      <div className="job-detail-card">
        <h2 className="job-title">{job.title[language]}</h2>
        <p className="job-location-salary">📍 {job.location[language]}</p>
        <p className="job-location-salary">💰 {job.salary}</p>
        {job.verified && (
          <p className="verified">
            {language === "hi"
              ? "✔ सत्यापित"
              : language === "te"
              ? "✔ ధృవీకరించబడింది"
              : "✔ Verified"}
          </p>
        )}
        {job.rating && <p className="job-rating">⭐ {job.rating}</p>}

        <p className="job-description">{job.description[language]}</p>
        
        <div className="apply-btn-container">
          <button
            onClick={handleApply}
            disabled={applied}
            className={`apply-btn ${applied ? "applied" : ""}`}
          >
            {applied
              ? language === "hi"
                ? "आवेदन सफल"
                : language === "te"
                ? "అప్లికేషన్ విజయవంతం"
                : "Applied Successfully"
              : language === "hi"
              ? "आवेदन करें"
              : language === "te"
              ? "అప్లై చేయండి"
              : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
