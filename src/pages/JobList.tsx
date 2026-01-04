import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobs } from "../data/jobs";
import { categories } from "../data/categories";
import { useStore } from "../store/useStore";

const JobList: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { language } = useStore();

  const category = categories.find((c) => c.id === categoryId);

  const filteredJobs = jobs
    .filter((job) => job.category === categoryId)
    .slice(0, category?.jobsAvailable || 0);

  return (
    <div className="app">
      <div className="header">
        <button onClick={() => navigate(-1)}>←</button>
        <h1>{category ? category[language] : "Jobs"}</h1>
      </div>

      {filteredJobs.length === 0 ? (
        <p className="no-jobs">
          {language === "hi"
            ? "इस श्रेणी में कोई नौकरी उपलब्ध नहीं है।"
            : language === "te"
            ? "ఈ వర్గంలో జాబ్‌లు అందుబాటులో లేవు."
            : "No jobs available in this category."}
        </p>
      ) : (
        <div className="job-list">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="job-card"
              onClick={() => navigate(`/job/${job.id}`)}
            >
              <div className="job-info">
                <h3 className="job-title">{job.title[language]}</h3>
                <p className="job-location-salary">📍 {job.location[language]}</p>
                <p className="job-location-salary">💰 {job.salary}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
