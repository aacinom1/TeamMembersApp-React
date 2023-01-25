export const Footer = () => {
    let today = new Date()
  return (
    <footer className="container">
      <div className="text-center p-4 bg-light mt-3" >
        <div className="text-muted fw-bold">
          <h5>Team Members App - {today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  );
};
