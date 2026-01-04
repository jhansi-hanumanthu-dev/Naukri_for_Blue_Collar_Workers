import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Categories />} />
        <Route path="/jobs/:categoryId" element={<JobList />} />
        <Route path="/job/:jobId" element={<JobDetail />} /> 
      </Routes>
    </BrowserRouter>
  );
}
