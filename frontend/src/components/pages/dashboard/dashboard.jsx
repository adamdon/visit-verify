import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [visits, setVisits] = useState([]);

  async function fetchReadAll()
  {
      try {
          let methodType = "GET"
          let requestUrl = 'http://127.0.0.1:8000/visits/?format=json';
          let requestHeaders = {"Content-Type": "application/json"};
          let requestOptions = {method: methodType, headers: requestHeaders};

          const response = await fetch(requestUrl, requestOptions);
          const jsonData = await response.json();

          console.log(jsonData)

          return jsonData
      }
      catch (error) {
          throw error;
      }
  }

  const getRemainingTime = (visit) => {
    const remainingSeconds = ((visit.expectedDuration - (Date.now() - visit.checkedInAt)) / 1000)
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

  const checkWarningLevel = (visit) => {
    const remainingSeconds = ((visit.expectedDuration  - (Date.now() - visit.checkedInAt)) / 1000)
    if (remainingSeconds > 0) {
        return false;
    } 
    else {
        return true;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const jsonData = await fetchReadAll();
        const formattedVisits = jsonData.map((visit) => ({
          username: visit.username,
          checkedInAt: visit.checkInTime * 1000, 
          checkInAddress: visit.GPS_Location,
          expectedDuration: visit.ExpectedDuration * 60 * 1000, 
          contact: 999
        }));
        updateVisitObject(formattedVisits)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const updateVisitObject = (visitsModify) => {
    const updatedVisits = visitsModify.map((visit) => ({
      ...visit,
      remainingTime: getRemainingTime(visit),
      warningFlag: checkWarningLevel(visit)
    }));
    setVisits(updatedVisits);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateVisitObject(visits)
    }, 1000);
    return () => clearInterval(intervalId);
  }, [visits]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Employee Username</th>
              <th>Check In Time</th>
              <th>Check In GPS Location</th>
              <th>Contact Number</th>
              <th>Remaining Visit Time</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit) => (
              visit.checkedInAt && (
                <tr key={visit.username} className={visit.warningFlag ? "bg-red-400" : ""}>
                  <td>{visit.username ?? ""}</td>
                  <td>{new Date(visit.checkedInAt).toLocaleString()}</td>
                  <td>{visit.checkInAddress ?? ""}</td>
                  <td>{visit.contact}</td>
                  <td>{visit.remainingTime ?? ""}</td>
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
