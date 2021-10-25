import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";



function Home() {
  const style = {
    border: 0,
    outline: 0,
    background: "transparent",
    borderBottom: "1px solid lightgrey"
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col-md-6 offset-md-3"> 
          <div className="row mt-5 mb-5">
            <div className="col">
              <FaUser size={25} className="mr-2"/>
              <input name="name" id=" " style={style} placeholder="name"/>
            </div>
            <div className="col">
              <BsFillCheckSquareFill size={25} className="mr-2"/>
              <input name="meal" id=" " style={style} placeholder="meal"/>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col">
              <AiFillCalendar size={25} className="mr-2"/>
              <input name=" " id=" "  style={style} placeholder="date"/>
            </div>
            <div className="col">
              <AiFillClockCircle size={25} className="mr-2"/>
              <input name=" " id=" " style={style} placeholder="time"/>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col">
              <FaUserFriends size={25} className="mr-2"/>
              <input name=" " id=" " style={style} placeholder="guests"/>
            </div>
            <div className="col">
              <BsSuitHeartFill size={25} className="mr-2"/>
              <input name=" " id=" " style={style} placeholder="Food preferences"/>
            </div>
          </div>
          <div className="row mt-5 mb-5 ml-1">
            <BsFillPencilFill size={25} />
            <textarea id="" rows="1" cols="65" style={style} placeholder="Special requests"></textarea>
          </div>
          </div>
      </form>
    </div>
  );
}

export default Home;