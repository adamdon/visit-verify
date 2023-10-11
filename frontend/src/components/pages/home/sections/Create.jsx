import {useEffect, useState} from "react";
import {useData} from "../../../../utilities/DataContextProvider.jsx";
import ContentContainer from "../../../layout/ContentContainer.jsx";
import {toast} from "react-toastify";




export default function Create(props) {
    const [data, setData] = useData();

    const [ref, setRef] = useState("");
    const [text, setText] = useState("");

    // const [output, setOutput] = useState("");



    useEffect(() => enableDefaultOnChange(), [props.enableDefault]);
    function enableDefaultOnChange(){
        if(props.enableDefault) {
            setRef("01");
            setText("test text");
        }
        else{
            setRef("");
            setText("");
        }
    }


    async function createOnClick()
    {
        setData({isDisabled: true});
        const toastId = toast.loading('Creating Item ');

        if((ref !== "") && (text !== "")) {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // small sleep for ux drama
                const returnedItem = await fetchCreate(ref, text);
                toast.success('New Item created with ref: ' + returnedItem.ref);
                console.info("create - returnedItem", returnedItem);
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


    async function fetchCreate(newRef, newText)
    {
        try {
            let newItem = {
                "ref": newRef,
                "name": newText
            }

            let requestBody = JSON.stringify(newItem);
            let methodType = "POST"
            let requestUrl = data.backendUrl + "/api/create";
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
                    <span className="label-text">Enter a reference and some text (e.g "01", "test")</span>
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
                        <button onClick={createOnClick} className="btn join-item" disabled={data.isDisabled}>Create</button>
                    </div>
                </div>
            </div>

            {/*<div>{output}</div>*/}

        </ContentContainer>
    </>
  )
}