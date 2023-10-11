import {useState} from "react";
import {useData} from "../../../../utilities/DataContextProvider.jsx";
import ContentContainer from "../../../layout/ContentContainer.jsx";
import AutoAnimate from "../../../layout/AutoAnimate.jsx";
import {toast} from "react-toastify";




export default function Read() {
    const [data, setData] = useData();
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);




    async function readOnClick() {
        setData({isDisabled: true});
        setIsLoading(true);
        setItems([]);
        const toastId = toast.loading('Reading Items');

        await new Promise((resolve) => setTimeout(resolve, 1000)); // small sleep for ux drama

        try {
            const returnedItems = await fetchReadAll();
            toast.success('Read total Items: ' + returnedItems.length);
            console.info("Read - returnedItems", returnedItems);


            setItems(returnedItems);
        }
        catch (error){
            console.error(error);
            toast.error(error.message);
        }

        toast.dismiss(toastId)
        setIsLoading(false);
        setData({isDisabled: false});
    }


    async function fetchReadAll()
    {
        try {
            let methodType = "GET"
            let requestUrl = data.backendUrl + "/api/readAll";
            let requestHeaders = {"Content-Type": "application/json"};
            let requestOptions = {method: methodType, headers: requestHeaders};

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

            <button className="btn btn-block btn-outline btn-accent" onClick={readOnClick} disabled={data.isDisabled}>
                <span>Read all</span>
                {isLoading ? <span className="loading loading-spinner"></span> : <></> }
            </button>

            <AutoAnimate className={'flex flex-col w-full'}>
                {items.length > 0 ?
                    <table className="table table-auto">
                        <thead>
                            <tr>
                                <th>Ref</th>
                                <th>Text</th>
                                <th>_id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item._id} className="hover">
                                    <th>{item.ref}</th>
                                    <td>{item.name}</td>
                                    <th>{item._id}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    :
                    <></>
                }
            </AutoAnimate>




        </ContentContainer>
    </>
  )
}