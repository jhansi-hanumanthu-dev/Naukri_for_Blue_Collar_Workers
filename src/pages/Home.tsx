import { useState } from "react";
import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { setLanguage } = useStore();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  if (!selectedLanguage) {
    return (
      <div className="app" style={{ textAlign: "center", paddingTop: "50px" }}>
        <h1 className="home-title">JobMitra</h1>
        <p className="home-subtitle">Please select your language:</p>

        <div className="language-buttons">
          {["en", "hi", "te"].map((lang) => (
            <button
              key={lang}
              className="language-btn"
              onClick={() => {
                setLanguage(lang as "en" | "hi" | "te");
                setSelectedLanguage(lang);
                navigate("/jobs"); 
              }}
            >
              {lang === "en" ? "English" : lang === "hi" ? "हिंदी" : "తెలుగు"}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
