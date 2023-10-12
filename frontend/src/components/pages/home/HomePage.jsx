import { useState } from "react";
import { Link } from "react-router-dom";
import ContentContainer from "../../layout/ContentContainer.jsx";

export default function HomePage() {
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <ContentContainer>
      <div className="join join-vertical">
        <input
          className="input input-bordered join-item"
          placeholder="Username"
          value={username}
          onChange={handleInputChange}
        />
        <button className="btn join-item">
          {username === "admin" ? (
            <Link to="/dashboard">Login as Admin</Link>
          ) : (
            <Link to="/client">Login as User</Link>
          )}
        </button>
      </div>
    </ContentContainer>
  );
}
