import ContentContainer from "../../layout/ContentContainer.jsx";
import {useData} from "../../../utilities/DataContextProvider.jsx";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";




export default function ClientPage() {


  const [data, setData] = useData();
  const [isLoading, setIsLoading] = useState(true);

  const [duration, setDuration] = useState("60");
  const [username, setUsername] = useState("janeDoe");
  const [checkinTime, setCheckinTime] = useState(0);

  const [location, setLocation] = useState(null);




  useEffect(() => {
    if (navigator.geolocation) {
      setData({isDisabled: true});
      navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation( `${position.coords.latitude}, ${position.coords.longitude}`);
            setData({isDisabled: false});
            setIsLoading(false);
          },
          (error) => {
            console.log(error.message);
          }
      );
    } else {
      console.log("GPS not supported");
    }
  }, []);

  async function checkinOnClick()
  {
    setData({isDisabled: true});
    setIsLoading(true);
    const toastId = toast.loading('Checking in...');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // small sleep for ux drama
      const returnedItem = await fetchCheckin();
      toast.success('checked-In');
      console.info("create - returnedItem: ");
    }
    catch (error){
      console.error(error);
      toast.error(error.message);
    }

    toast.dismiss(toastId);
    setIsLoading(false);
    setData({isDisabled: false});
  }





  async function fetchCheckin()
  {
    try {
      const currentTime= Date.now();
      // const gps = `${location.coords.longitude}, ${location.coords.latitude}`


      console.log(location)

      setCheckinTime(currentTime);

      // const visit = {
      //   "username": username,
      //   "checkInTime": 40,
      //   "checkOutTime": 600,
      //   "ExpectedDuration": Number(duration),
      //   "GPS_Location": "1..34354,,-2.1344"
      // }

      const visit =     {
        "username": username,
        "checkInTime": currentTime,
        "checkOutTime": null,
        // "ExpectedDuration": currentTime + (parseInt(duration) * 60),
        "ExpectedDuration": parseInt(duration),
        "GPS_Location": location
      }


      let requestBody = JSON.stringify(visit);

      console.log(requestBody);

      let methodType = "POST"
      let requestUrl = "http://127.0.0.1:8000/visits/";
      let requestHeaders = {"Content-Type": "application/json"};
      let requestOptions = {method: methodType, headers: requestHeaders, body: requestBody};

      const response = await fetch(requestUrl, requestOptions);
      const jsonData = await response.json();

      return jsonData
    }
    catch (error) {
      throw error;
    }
  }






  async function checkOutOnClick()
  {
    setData({isDisabled: true});
    setIsLoading(true);
    const toastId = toast.loading('Checking out...');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // small sleep for ux drama
      const returnedItem = await fetchCheckout();
      toast.success('checked-out');
      console.info("create - returnedItem: returnedItem");
    }
    catch (error){
      console.error(error);
      // toast.error(error.message);
    }

    toast.dismiss(toastId)
    setIsLoading(false);
    setData({isDisabled: false});
  }


  async function fetchCheckout(newRef, newText)
  {
    try {

      const currentTime= Date.now()

      const visit =     {
        "username": username,
        "checkOutTime": currentTime,
      }


      let requestBody = JSON.stringify(visit);

      console.log(requestBody);

      let methodType = "PUT"
      let requestUrl = "http://127.0.0.1:8000/visits/";
      let requestHeaders = {"Content-Type": "application/json"};
      let requestOptions = {method: methodType, headers: requestHeaders, body: requestBody};

      const response = await fetch(requestUrl, requestOptions);
      const jsonData = await response.json();

      return jsonData
    }
    catch (error) {
      throw error;
    }
  }




  return (
    <>
      <ContentContainer>

        <h1 className="text-5xl font-bold">Client Login Page</h1>


        <div>
          <button className="btn btn-block btn-accent h-40" onClick={checkinOnClick} disabled={data.isDisabled}>
            <span>Check in</span>
            {isLoading ? <span className="loading loading-spinner"></span> : <></> }
          </button>

          <select defaultValue={"60"} className="select select-bordered w-full" onChange={(event) => setDuration(event.target.value)}>
            <option disabled>Select Duration</option>
            <option value="120">2 Hour Duration</option>
            <option value="60">1 Hour Duration</option>
            <option value="30">30 Minutes</option>
            <option value="15">15 Minutes</option>
          </select>

          <button className="btn btn-block btn-success h-40" onClick={checkOutOnClick} disabled={data.isDisabled}>
            <span>Check Out</span>
            {isLoading ? <span className="loading loading-spinner"></span> : <></> }
          </button>
        </div>




      </ContentContainer>
    </>
  )
}

