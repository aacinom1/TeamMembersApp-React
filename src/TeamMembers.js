import { TeamMemberCard } from "./TeamMemberCard";

export const TeamMembers = ({
  employees,
  handleEmployeeCardClick,
  selectedTeam,
}) => {
  return employees.map(employee => {
    return (
      <TeamMemberCard
        employee={employee}
        handleEmployeeCardClick={handleEmployeeCardClick}
        selectedTeam={selectedTeam}
      />
    );
  });
};
