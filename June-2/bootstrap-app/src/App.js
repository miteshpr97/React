import Header from "./components/Header";
import ImageList from "./components/ImageList";
// import { Button } from "react-bootstrap";
import Popup from "./components/Popup";
import { useEffect, useState } from "react";
import "./App.css"
import axios from 'axios';
// import {Routes, Route} from "react-router-dom";
// import Detail from "./components/Detail";


function App() {
  //  console.log(process.env.REACT_APP_API_KEY);
  // All the states will be in App.js
  const [showModal, setShowModal] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [modalData, setModalData] = useState({});

  const[searchkey, setSearchkey] = useState("");



  useEffect (() =>{
    if(searchkey !== "") {
      axios.get(`https://api.unsplash.com/search/photos/?query=${searchkey}&client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageList(response.data.results));

    }
  }, [searchkey])





  const closeModal = () => setShowModal(false);
  const openModal = id =>{
    //  axios.get(`https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_API_KEY}`)
    //  .then(response => console.log(response.data));

    const selected_image = imageList.find(single_elm => single_elm.id === id);
    // console.log(selected_image);
    setModalData(selected_image);
    setShowModal(true);
  } 

  useEffect(() => {
    // axios.get(`https://api.unsplash.com/search/collections?page=1&query=office&client_id=${process.env.REACT_APP_API_KEY}`)
    // axios.get("https://api.unsplash.com/search/collections?page=1&query=office&client_id=PB6IXtOLrQYa8GP6K9YJ_ueIiQmirmQw_OZRhHUHHSE")
    // 
    axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageList(response.data));
  }, []);
  
  // const getIamge =() =>{
  //   axios.get("https://api.unsplash.com/search/collections?page=1&query=office&client_id=PB6IXtOLrQYa8GP6K9YJ_ueIiQmirmQw_OZRhHUHHSE")
  //   .then((response)=>{
  //     console.log(response.data);
  //   })
  // }

  return (
    <>
      <Header setSearchkey={setSearchkey} />
      {/* <Routes>
        <Route path="/" element={<ImageList cardClick={openModal} images={imageList} />} />
        <Route path="/image" element={<Detail />} />
      </Routes>  */}




      {/* <Button variant="primary" >
        Launch static backdrop modal
      </Button> */}
      <ImageList cardClick={openModal} images={imageList} />
      <Popup showModal={showModal} closeModal={closeModal} modalData={modalData} />
      {/* <button onClick={getIamge}>click</button> */}

    </>
  );
}

export default App;

