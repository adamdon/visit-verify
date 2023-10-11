import {useEffect, useState} from "react";
import {Flip, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useData} from "../utilities/DataContextProvider.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import Navbar from "./layout/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/about/AboutPage.jsx";




export default function App() {

    const [data, setData] = useData();
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => initialize(), []);


    function initialize(){
        const backendUrl = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8081";

        console.log(`crud-starter startup (╯°□°)╯︵ ┻━┻`, " ⚙️:", import.meta.env, import.meta.env.VITE_BACKEND_URL);


        const initialGlobalData = {
            backendUrl: backendUrl,
            isDisabled: false,
        }
        setData(initialGlobalData);

        setIsInitialized(true);
    }




    return (
    <>
            {isInitialized &&
                <>
                    <ToastContainer theme="dark" position="top-center" transition={Flip}/>

                    <Navbar></Navbar>

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>


                    {/*<Route path="*" element={<AnimatedMount show={loaded}> <NotFoundPage /> </AnimatedMount>} />*/}


                    {/*//TODO create router*/}
                    {/*<HomePage></HomePage>*/}
                </>
            }
    </>
  )
}