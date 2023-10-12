import { useState } from "react";
import { Link } from "react-router-dom";
import ContentContainer from "../../layout/ContentContainer.jsx";
import {useData} from "../../../utilities/DataContextProvider.jsx";

export default function HomePage() {
  // const [username, setUsername] = useState("");
  const [data, setData] = useData();


  // const handleInputChange = (e) => {
  //   setUsername(e.target.value);
  // };

  return (
    <ContentContainer>
      <div className="join join-vertical">
        <input
          className="input input-bordered join-item"
          placeholder="Username"
          value={data.username}
          onChange={(event => setData({username: event.target.value}))}
        />
        <button className="btn join-item">
          {data.username === "admin" ? (
            <Link to="/dashboard">Login as Admin</Link>
          ) : (
            <Link to="/client">Login as User</Link>
          )}
        </button>
      </div>
    </ContentContainer>
  );
}
