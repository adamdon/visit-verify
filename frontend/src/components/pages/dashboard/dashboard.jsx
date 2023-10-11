import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([
    {
      name: "Alice Hamerly",
      status: "Checked In",
      checkedInAt: new Date(),
      checkInAddress: "123 Main Street",
      visitLength: 3600,
    },
    {
      name: "Bob Canute",
      status: "Checked In",
      checkedInAt: new Date(),
      checkInAddress: "456 Elm Street",
      visitLength: 1800,
    },
    {
      name: "Daniel Green",
      status: "Checked In",
      checkedInAt: new Date(),
      checkInAddress: "789 Oak Street",
      visitLength: 0,
    },
    {
      name: "Sarah Miles",
      status: "Checked Out",
      checkedInAt: null,
      checkInAddress: null,
      visitLength: null,
    },
  ]);

  const getRemainingTime = (user) => {
    const remainingSeconds = ((user.visitLength * 1000 - (Date.now() - user.checkedInAt)) / 1000)
    if (remainingSeconds > 0) {
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = Math.floor(remainingSeconds % 60);
        return `${minutes} minutes ${seconds} seconds`;
    } 
    else if (remainingSeconds > -60) {
        const minutes = 0;
        const seconds = Math.floor(remainingSeconds % 60);
        return `${minutes} minutes ${seconds} seconds`;
    }
    else {
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = Math.floor(remainingSeconds % 60);
        return `${minutes} minutes ${seconds} seconds`;
    }
  };

  const checkWarningLevel = (user) => {
    const remainingSeconds = ((user.visitLength * 1000 - (Date.now() - user.checkedInAt)) / 1000)
    if (remainingSeconds > 0) {
        return false;
    } 
    else {
        return true;
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedUsers = users.map((user) => ({
        ...user,
        remainingTime: getRemainingTime(user),
        warningFlag: checkWarningLevel(user)
      }));

      setUsers(updatedUsers);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [users]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Check In Time</th>
              <th>Check In Address</th>
              <th>Remaining Visit Time</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              user.checkedInAt && (
                <tr key={user.name} className={user.warningFlag ? "bg-red-400" : ""}>
                  <td>{user.name ?? ""}</td>
                  <td>{user.checkedInAt?.toLocaleString() ?? ""}</td>
                  <td>{user.checkInAddress ?? ""}</td>
                  <td>{user.remainingTime ?? ""}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
