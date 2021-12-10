import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const [data, setDate] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((value) => {
        setDate(value.data);
      });
  });

  function backHome() {
    navigate("/");
  }

  return (
    <div>
      <img src={data.thumbnailUrl} alt="rasm" />
      <h4>{data.title}</h4>
      <button onClick={backHome}>Back to Home</button>
    </div>
  );
};

export default Index;
