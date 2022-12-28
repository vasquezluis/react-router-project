import { useNavigate, Link, Outlet } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Outlet />

      <button onClick={handleClick}>Logout</button>

      <br />

      <Link to="welcome">say welcome</Link>
      <br />

      <Link to="goodbye">say goodbye</Link>
    </div>
  );
}

export default Dashboard;
