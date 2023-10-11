import React, {useContext, useState} from "react";




const DataContext = React.createContext();
const SetDataContext = React.createContext();
export function useData() {
    return [useContext(DataContext), useContext(SetDataContext)];
}


export default function DataContextProvider({children}) {
    const [localData, setLocalData] = useState(() => ({}));


    /**
     * Custom hook usage for add/change and modify
     * add/change: //setData({letter: "d"});
     * modify: //setData((oldData) => ({...oldData, letter: (oldData.letter + "+")}));
     */
    function setData(newData) {
        if(newData !== undefined) {
            if(typeof newData == "function") {
                // if arrow function is passed for modify data
                setLocalData(newData(localData));
            }
            else {
                // if object is passed for simple add/change data
                setLocalData(oldData =>  ({...oldData, ...newData}));
            }
        }
        else {
            console.error("attempt to setData with undefined");
        }
    }

    return(
        <DataContext.Provider value={localData}>
            <SetDataContext.Provider value={setData}>
                {children}
            </SetDataContext.Provider>
        </DataContext.Provider>

    )

}