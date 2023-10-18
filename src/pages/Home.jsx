import Spinner from "../Components/Spinner";
import Item from "../Components/Item";
import { useState,useEffect } from "react";
import Navbar from "../Components/Navbar";
import Pagination from "../Components/Pagination";


import logo from "../Components/logo1.jpeg";

const Home = () =>{

    const [loading,setLoading] = useState("false");
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [searchKey,setSearchKey] = useState("");

    const API_KEY = "-pGIvmleZVoWmN75XTAO50fj7UmUTEgHc-hgzhIixnA";
    const url = "https://api.unsplash.com/";
    const pr_page = 28;

    async function fetchData(){

        setLoading(true);
        var URL;
        if(searchKey.length ){
            console.log("search key " + searchKey);
            URL = `${url}search/photos?page=${page}&query=${searchKey}&client_id=${API_KEY}&per_page=${pr_page}`;
        }
        else{
            URL = `${url}search/photos?page=${page}&query="random"&client_id=${API_KEY}&per_page=${pr_page}`;
        }
        console.log(URL);
        const resp = await fetch(URL);
        const resdata = await resp.json();
        const Data = resdata.results;
        console.log(Data);

        setData(Data);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[searchKey,page]);
    
    

    return (
        <div className="bg-slate-500">
            <div className="bg-slate-500">
                <Navbar searchKey={searchKey} setSearchKey={setSearchKey}></Navbar>
            </div>

            


            {
                loading ? <Spinner></Spinner> : 

                data?.length > 0 ?
                (
                    
                    <div className="flex flex-col items-center justify-center bg-slate-800">
                        <div className="grid xs:grid-cols-1 sl:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-8xl p-2 mx-auto space-y-5 space-x-5">
                            {
                                data.map( (item) =>(
                                    <Item key={item.id} item={item}></Item>
                                ))
                            
                            }
                        </div>
                    </div>

                ) :
                (
                    <div className="flex justify-center items-center"><p>No Data Found</p></div>
                )
            }

            <div>
                <Pagination page={page} setPage={setPage}></Pagination>
                <span>made by : Ak</span>
            </div>
            
        </div>
    )
};

export default Home;


/*

const API_KEY = "-pGIvmleZVoWmN75XTAO50fj7UmUTEgHc-hgzhIixnA";
const url = "https://api.unsplash.com/";
valide ex. : "https://api.unsplash.com/search/photos?query=%22ganesh%22&client_id=-pGIvmleZVoWmN75XTAO50fj7UmUTEgHc-hgzhIixnA" 
%22 ==> "  and %20 ==> space

sample pop-up 1:


declaration:
    const [dialog, setDialog] = useState(false);
    const toggleDialog = () => {
        setDialog(!dialog);
      };


in return :

            <div>
                <img src={logo} className="py-10 px-10" onClick={toggleDialog}></img>
            </div>
            {dialog && (
                <div className="">
                    <div className="">
                        <h3>React Js Show Image in Popup Modal </h3>
                        <button className="" onClick={toggleDialog}>&#10005;</button>
                        <img className="" src={logo} height={300} width={500} alt="Popup Image" />
                    </div>
                </div>
            )}


sample pop-up 2: >npm i react-modal-image

import {Ligthbox} from "react-modal-image";

const closeLigthbox = () =>{
    this.state.open = true;
}

{
    this.state.open && (
        <Ligthbox
            medium={//large image url}
            large={// huge image url}
            alt="image description"
            onClose={this.closeLigthbox}
        />
        <div>
                // other code
        </div>
    )
}




react-modal

<Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img src={item.urls.raw} className="py-10 px-10" ></img>
                <p>This is sample img</p>

            </Modal> 

            let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            height:500,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            p: 4,
        },
    };





    <div className="flex flex-col items-center justify-center">
                        <div className="grid xs:grid-cols-1 sl:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                            {
*/