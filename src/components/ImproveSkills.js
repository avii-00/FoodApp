import { useNavigate } from "react-router-dom";

import SignUp from "../pages/Signup";

export default function ImproveSkills() {
  const navigate = useNavigate();
  const list = [
    "Know nutrition facts",
    "Experiment with food",
    "Get cooking tips",
    "Learn new recipes",
    "Get ranked",
    "Write your own recipes",
  ];
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/table.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Cooking Skills</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
