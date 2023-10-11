import {useEffect, useState} from "react";
import {useData} from "../../../../utilities/DataContextProvider.jsx";
import ContentContainer from "../../../layout/ContentContainer.jsx";
import {toast} from "react-toastify";




export default function Delete(props) {
    const [data, setData] = useData();

    const [ref, setRef] = useState("");

    // const [output, setOutput] = useState("");



    useEffect(() => enableDefaultOnChange(), [props.enableDefault]);
    function enableDefaultOnChange(){
        if(props.enableDefault) {
            setRef("01");
        }
        else{
            setRef("");
        }
    }


    async function createOnClick()
    {
        setData({isDisabled: true});
        const toastId = toast.loading('Creating Item ');

        if((ref !== "")) {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // small sleep for ux drama
                const returnedObject = await fetchDelete(ref);
                toast.success('Items deleted: ' + returnedObject.deletedCount);
                console.info("delete - returnedObject", returnedObject);
                setRef("");
            }
            catch (error){
                console.error(error);
                toast.error(error.message);
            }
        }
        else {
            toast.warn("Ref must be filled");
        }

        toast.dismiss(toastId)
        setData({isDisabled: false});
    }


    async function fetchDelete(toDeleteRef)
    {
        try {
            let toDeleteItem = {
                "ref": toDeleteRef,
                "name": ""
            }

            let requestBody = JSON.stringify(toDeleteItem);
            let methodType = "POST"
            let requestUrl = data.backendUrl + "/api/delete";
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
            <div className="form-control ">
                <label className="label">
                    <span className="label-text">Enter a reference you want delete (will delete all items with same ref)</span>
                </label>
                <div className="join">
                    <input value={ref} onChange={(e) => setRef(e.target.value)} className="input input-bordered join-item w-full" placeholder="Reference" disabled={data.isDisabled}/>

                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">Click</span>
                        <button onClick={createOnClick} className="btn join-item" disabled={data.isDisabled}>Delete</button>
                    </div>
                </div>
            </div>

            {/*<div>{output}</div>*/}

        </ContentContainer>
    </>
  )
}