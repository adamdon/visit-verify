import ContentContainer from "../../layout/ContentContainer.jsx";
import React, { Component } from "react";




export default function HistoryPage() {

  const position = [51.505, -0.09]

  // import Students from "./Students";

  // export class Example2 extends Component {
  //     render() {
  //         return (
  //             <>
  //                 <div>
  //                     <table border="2">
  //                         <tbody>
  //                             <tr>
  //                                 <th>Name</th>
  //                                 <th>Department</th>
  //                             </tr>
  //                             // Mapping array of objects
  //                             {Students.students.map((item, i) => (
  //                                 <tr key={i}>
  //                                     <td>{item.name}</td>
  //                                     <td>{item.department}</td>
  //                                 </tr>
  //                             ))}
  //                         </tbody>
  //                     </table>
  //                 </div>
  //             </>
  //         );
  //     }
  // }
  
  // export default Example2;

  return (
    <>
      <ContentContainer>
        <a className="btn btn-block">
          Jane Doe - Visit History
          <svg fill="#FFFFFF" height="24" viewBox="0 0 16 16" width="30">
          </svg>
        </a>
      </ContentContainer>

      <ContentContainer>
      <div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  Visit: Client Name on XX MONTH 2023
  </div>
  <div className="collapse-content"> 

  {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: 100, width : 100}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> */}
    <p>Check In time: </p>
    <p>Check Out time: </p>
    <p>Status: On time/Late/Not checked out</p>
    <p>Additional Information:</p>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  Visit: Client Name on XX MONTH 2023
  </div>
  <div className="collapse-content"> 
    <p>Check In time: </p>
    <p>Check Out time: </p>
    <p>Status: On time/Late/Not checked out</p>
    <p>Additional Information:</p>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  Visit: Client Name on XX MONTH 2023
  </div>
  <div className="collapse-content"> 
    <p>Check In time: </p>
    <p>Check Out time: </p>
    <p>Status: On time/Late/Not checked out</p>
    <p>Additional Information:</p>
  </div>
</div>
</ContentContainer>
    </>
  )
}

