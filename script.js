let selectedCareer = "";
let completedSteps = 0;

function analyzeCareer() {
  const interest = document.getElementById("interest").value;
  const workStyle = document.getElementById("workStyle").value;
  const tech = document.getElementById("techLevel").value;

  let career = "";
  let reason = "";
  let skills = [];

  if (interest === "logic" && tech !== "low") {
    career = "Frontend Developer";
    reason = "You enjoy problem-solving and logical thinking.";
    skills = ["HTML", "CSS", "JavaScript", "React", "Git"];
  } 
  else if (interest === "creative") {
    career = "UI/UX Designer";
    reason = "You prefer creative and visual work.";
    skills = ["Design Principles", "Figma", "Color Theory", "Prototyping"];
  } 
  else if (interest === "data") {
    career = "Data Analyst";
    reason = "You enjoy working with numbers and patterns.";
    skills = ["Excel", "SQL", "Python", "Data Visualization"];
  } 
  else {
    career = "Digital Marketer";
    reason = "You enjoy communication and helping people.";
    skills = ["SEO", "Content Writing", "Analytics", "Social Media"];
  }

  selectedCareer = career;

  document.getElementById("careerTitle").innerText = career;
  document.getElementById("careerReason").innerText = reason;

  const skillList = document.getElementById("skillList");
  skillList.innerHTML = "";
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillList.appendChild(li);
  });

  document.getElementById("resultSection").classList.remove("hidden");
}

function showRoadmap() {
  const roadmap = {
    "Frontend Developer": [
      "Learn HTML & CSS",
      "JavaScript Basics",
      "Build Mini Projects",
      "Learn React",
      "Create Portfolio"
    ],
    "UI/UX Designer": [
      "Design Basics",
      "Learn Figma",
      "UX Research",
      "Build Case Studies",
      "Portfolio Design"
    ],
    "Data Analyst": [
      "Excel Basics",
      "SQL Queries",
      "Python Basics",
      "Data Visualization",
      "Projects & Reports"
    ],
    "Digital Marketer": [
      "Marketing Basics",
      "SEO",
      "Content Strategy",
      "Analytics Tools",
      "Campaign Projects"
    ]
  };

  const list = document.getElementById("roadmapList");
  list.innerHTML = "";
  completedSteps = 0;

  roadmap[selectedCareer].forEach(step => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onclick="updateProgress(this)">
      ${step}
    `;
    list.appendChild(li);
  });

  document.getElementById("roadmapSection").classList.remove("hidden");
}

function updateProgress(checkbox) {
  completedSteps += checkbox.checked ? 1 : -1;
  const total = document.querySelectorAll("#roadmapList input").length;
  const percent = Math.round((completedSteps / total) * 100);
  document.getElementById("progressBar").value = percent;
}
