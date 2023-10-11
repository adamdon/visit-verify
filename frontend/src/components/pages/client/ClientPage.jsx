import ContentContainer from "../../layout/ContentContainer.jsx";
import {useData} from "../../../utilities/DataContextProvider.jsx";
import {useState} from "react";
import {toast} from "react-toastify";




export default function ClientPage() {


  const [data, setData] = useData();
  const [isLoading, setIsLoading] = useState(false);


  // const [ref, setRef] = useState("");
  // const [text, setText] = useState("");



  async function checkinOnClick()
  {
    setData({isDisabled: true});
    setIsLoading(true);
    const toastId = toast.loading('Checking in...');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // small sleep for ux drama
      // const returnedItem = await fetchCheckin();
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


  async function checkOutOnClick()
  {
    setData({isDisabled: true});
    setIsLoading(true);
    const toastId = toast.loading('Checking in...');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // small sleep for ux drama
      // const returnedItem = await fetchCheckin();
      toast.success('checked-In');
      console.info("create - returnedItem: ");
    }
    catch (error){
      console.error(error);
      toast.error(error.message);
    }

    toast.dismiss(toastId)
    setIsLoading(false);
    setData({isDisabled: false});
  }


  async function fetchCheckin(newRef, newText)
  {
    try {
      let newItem = {
        "ref": newRef,
        "name": newText
      }

      let requestBody = JSON.stringify(newItem);
      let methodType = "POST"
      let requestUrl = data.backendUrl + "/api/check-in";
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

          <select className="select select-bordered w-full">
            <option disabled>Select Duration</option>
            <option>2 Hour Duration</option>
            <option defaultValue>1 Hour Duration</option>
            <option>30 Minutes</option>
            <option>15 Minutes</option>
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

