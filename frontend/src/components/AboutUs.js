import React ,{useState} from 'react'

import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};
export default function AboutUs() {

 

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState("");
  const stars = Array(5).fill(0)
  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
  }
    return (
      <div className="raiting">
        <div >
      <h2  className="RatingUs">Rating Our Site</h2>
      <div className="RatingUs">
        {stars.map((ele, i) => {
          return (
            <FaStar
              size={50}
              onClick={() => handleClick(i + 1)}
              onMouseOver={() => handleMouseOver(i + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) >i ? colors.orange : colors.grey}/>
        )
        })}
        <br/>
        <img className="RatingUs" src="https://www.pinclipart.com/picdir/big/0-2861_kids-transparent-clip-art-students-clipart-transparent-background.png" width="40%"/>
      </div>
  
      
    </div>
      </div>
    );
}

