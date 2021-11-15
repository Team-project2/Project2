import React from 'react'

export default function AboutUs(props) {
  console.log(props);
  const myName = props.myName;
  const newArr = props.arr
  console.log(newArr);

    return (
      <div>
        <h1>About Us</h1>
      </div>
    );
}
