import { categories } from "../data/categories";
import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const { language } = useStore();
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="header">
        <button onClick={() => navigate(-1)}>←</button>
        <h1>
          {language === "hi"
            ? "श्रेणी चुनें"
            : language === "te"
            ? "వర్గాన్ని ఎంచుకోండి"
            : "Select Category"}
        </h1>
      </div>

      <div className="grid">
        {categories.map((c) => (
          <div
            key={c.id}
            className="category-card"
            onClick={() => navigate(`/jobs/${c.id}`)}
          >
            <div className="category-icon">{c.icon}</div>
            <h3>{c[language]}</h3>
            <p>{c.description[language]}</p>
            <p>
              {c.jobsAvailable}{" "}
              {language === "hi"
                ? "नौकरियां उपलब्ध"
                : language === "te"
                ? "ఉపలభ్యమైన ఉద్యోగాలు"
                : "jobs available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
