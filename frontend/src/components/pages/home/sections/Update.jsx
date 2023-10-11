import {useEffect, useState} from "react";
import {useData} from "../../../../utilities/DataContextProvider.jsx";
import ContentContainer from "../../../layout/ContentContainer.jsx";
import {toast} from "react-toastify";




export default function Update(props) {
    const [data, setData] = useData();

    const [ref, setRef] = useState("");
    const [text, setText] = useState("");

    // const [output, setOutput] = useState("");



    useEffect(() => enableDefaultOnChange(), [props.enableDefault]);
    function enableDefaultOnChange(){
        if(props.enableDefault) {
            setRef("01");
            setText("updated text");
        }
        else{
            setRef("");
            setText("");
        }
    }


    async function updateOnClick()
    {
        setData({isDisabled: true});
        const toastId = toast.loading('Updating Item...');

        if((ref !== "") && (text !== "")) {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // small sleep for ux drama
                const returnedObject = await fetchUpdate(ref, text);
                toast.success('Items updated: ' + returnedObject.modifiedCount);
                console.info("update - returnedObject", returnedObject);
                setRef("");
                setText("");
            }
            catch (error){
                console.error(error);
                toast.error(error.message);
            }
        }
        else {
            toast.warn("Both ref and text must be filled");
        }

        toast.dismiss(toastId)
        setData({isDisabled: false});
    }


    async function fetchUpdate(newRef, newText)
    {
        try {
            let newItem = {
                "ref": newRef,
                "name": newText
            }

            let requestBody = JSON.stringify(newItem);
            let methodType = "POST"
            let requestUrl = data.backendUrl + "/api/update";
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
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Enter a reference you want update and the new text (will update all items with same ref)</span>
                </label>
                <div className="join">
                    <div>
                        <div>
                            <input value={ref} onChange={(e) => setRef(e.target.value)} className="input input-bordered join-item" placeholder="Reference" disabled={data.isDisabled}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input value={text} onChange={(e) => setText(e.target.value)} className="input input-bordered join-item" placeholder="Text" disabled={data.isDisabled}/>
                        </div>
                    </div>
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">Click</span>
                        <button onClick={updateOnClick} className="btn join-item" disabled={data.isDisabled}>Update</button>
                    </div>
                </div>
            </div>

            {/*<div>{output}</div>*/}

        </ContentContainer>
    </>
  )
}