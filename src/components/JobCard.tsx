import { useStore } from "../store/useStore";
import type { Props } from "../types/Job";

const JobCard = ({ job, onClick }: Props) => {
  const { language } = useStore(); 

  return (
    <div
      onClick={onClick}
      style={{
        padding: 16,
        border: "1px solid #ccc",
        borderRadius: 8,
        cursor: "pointer",
        marginBottom: 12,
        transition: "0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h3 style={{ marginBottom: 8 }}>{job.title[language]}</h3>
      <p style={{ margin: "4px 0" }}>📍 {job.location[language]}</p>
      <p style={{ margin: "4px 0" }}>💰 {job.salary}</p>
      <p
        style={{
          marginTop: 8,
          color: "#555",
          fontSize: 14,
          whiteSpace: "normal", 
          overflow: "visible",
          textOverflow: "unset",
        }}
      >
        {job.description[language]}
      </p>
    </div>
  );
};

export default JobCard;
