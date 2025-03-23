import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} style={{ float: "right", padding: "10px", cursor: "pointer" }}>
        Logout
      </button>
      <PostForm />
      <PostList />
    </div>
  );
};

export default Dashboard;
