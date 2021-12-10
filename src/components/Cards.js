import { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard.js";
import { Row } from "react-bootstrap";
const Cards = () => {
  const [data, setData] = useState([]);
  const [sliceValue, setSliceValue] = useState(10);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_limit=${sliceValue}`)
      .then((value) => {
        setData(value.data.slice(sliceValue - 10, sliceValue));
      });
  }, [sliceValue]);

  return (
    <>
      {console.log(data)}
      <Row>
        {data.map((value, index) => (
          <SingleCard key={index} data={value} />
        ))}
      </Row>
      <div>
        <button
          onClick={() => {
            setSliceValue(sliceValue - 10);
          }}
        >
          Move to less 10
        </button>
        {sliceValue - 10 + 1} -- {sliceValue}
        <button
          onClick={() => {
            setSliceValue(sliceValue + 10);
          }}
        >
          Move to more 10
        </button>
      </div>
    </>
  );
};
export default Cards;
