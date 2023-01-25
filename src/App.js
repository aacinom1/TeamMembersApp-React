import "./App.css";
import { Header } from "./Header";
import { Employees } from "./Employees";
import { GroupedTeamMembers } from "./GroupedTeamMembers";
import { Nav } from "./Nav";
import { NotFound } from "./NotFound";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeInfo")) || [
      {
        id: 1,
        fullName: "Monika Bohara",
        designation: "Software Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Arnob Kundu",
        designation: "Software Consultant",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Srijana Thulung",
        designation: "Frontend Developer",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 4,
        fullName: "Prakriti Shah",
        designation: "JavaScript Developer",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "Babita Paudel",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 6,
        fullName: "Ramesh Bohara",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "Sajana Thulung",
        designation: "Python Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Prakash Shrestha",
        designation: "Frontend Designer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Ram Chandra",
        designation: "Graphics Designer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "James Charles",
        designation: "API Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Jessica Young",
        designation: "Angular Developer",
        gender: "female",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Jenisha Blake",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeInfo", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelection(event) {
    setSelectedTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map(employee =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }
  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter(employee => employee.teamName === selectedTeam)
            .length
        }
      />

      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleTeamSelection={handleTeamSelection}
              handleEmployeeCardClick={handleEmployeeCardClick}
            />
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
