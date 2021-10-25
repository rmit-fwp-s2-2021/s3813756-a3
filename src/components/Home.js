import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { createReservation } from "../data/repository";



function Home() {
  const [fields, setFields] = useState({ name: "", meal: "", calendar: "", clock: "", guest: "", heart: "", text: "" });
  const [dateErrorMessage, setDateErrorMessage] = useState(null);
  const [timeErrorMessage, setTimeErrorMessage] = useState(null);
  const [guestErrorMessage, setGuestErrorMessage] = useState(null);
  const [reqErrorMessage, setReqErrorMessage] = useState(null);

  const [message, setMessage] = useState(null);

  // Set message to null automatically after a period of time.
  useEffect(() => {
    if (message === null)
      return;

    const id = setTimeout(() => setMessage(null), 5000);

    // When message changes clear the queued timeout function.
    return () => clearTimeout(id);
  }, [message]);




  const button = {
    borderRadius: "30px",
    width: "200px",
    height: "40px",
    color: "black",
    fontSize: "13px",
    backgroundColor: "#d9d9d9"

  }
  const style = {
    border: 0,
    outline: 0,
    background: "transparent",
    borderBottom: "1px solid lightgrey"
  };
  const bg = {
    backgroundColor: "#d9d9d9"
  };

  function handleSubmit() {
    createReservation(fields.name, fields.meal, fields.calendar, fields.clock, fields.guest, fields.heart, fields.text);
    setMessage("Success");

    // Reset All Field
    const temp = {...fields};
    temp.name = "";
    temp.meal = "";
    temp.calendar = "";
    temp.clock = "";
    temp.guest = "";
    temp.heart = "";
    temp.text = "";
    setFields(temp);
  }

  const handleValidation = (event) => {
    event.preventDefault();
    if (!/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(fields.calendar))
      setDateErrorMessage("Date format must be dd-mm-yyyy, eg 25-10-2021");
    else if (!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(fields.clock))
      setTimeErrorMessage("Time must be in 24 hour format. For example 4pm = 16:00.");
    else if (fields.guest > 10)
      setGuestErrorMessage("Number of guests cannot exceed 10.")
    else if (fields.text.length > 600)
      setReqErrorMessage("Special requests cannot exceed more than 600 characters.")
    else {
      setDateErrorMessage(null);
      setTimeErrorMessage(null);
      setGuestErrorMessage(null);
      setReqErrorMessage(null);
      confirmBooking();
    }

  }

  // Generic change handler.
  const handleInputChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  }

  const confirmBooking = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Reservation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Name: {fields.name} </p>
                <p>Meal: {fields.meal} </p>
                <p>Date: {fields.calendar} </p>
                <p>Time: {fields.clock} </p>
                <p>Guests: {fields.guest} </p>
                <p>Food Preferences: {fields.heart} </p>
                <p>Special Requests: {fields.text} </p>
              </div>
              <div className="modal-footer">
                <button onClick={onClose} className="btn btn-outline-secondary">CANCEL</button>
                <button onClick={() => {
                  handleSubmit();
                  onClose();
                }}
                  className="btn btn-outline-success"
                >
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleValidation}>
        <div className="col-md-6 offset-md-3">
          {message !== null &&
            <div className="row mt-5 mb-5 ">
              <h3 className="p-3 mb-2 text-center w-100 bg-success text-white">{message}</h3>
            </div>
          }
          <div className="row mt-5 mb-5 ">
            <h3 className="p-3 mb-2 text-black w-100" style={bg}>Reservation</h3>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col">
              <FaUser size={25} className="mr-2" />
              <input name="name" id="name" value={fields.name} style={style} placeholder="name" onChange={handleInputChange} required />
            </div>
            <div className="col">
              <BsFillCheckSquareFill size={25} className="mr-2" />
              <input name="meal" id="meal" value={fields.meal} style={style} placeholder="meal" onChange={handleInputChange} required />
            </div>

          </div>
          <div className="row mt-5">
            <div className="col">
              <AiFillCalendar size={25} className="mr-2" />
              <input name="calendar" id="calendar" value={fields.calendar} style={style} placeholder="date" onChange={handleInputChange} />
            </div>
            <div className="col">
              <AiFillClockCircle size={25} className="mr-2" />
              <input name="clock" id="clock" value={fields.clock} style={style} placeholder="time" onChange={handleInputChange} required />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              {dateErrorMessage !== null &&
                <p className="text-danger">{dateErrorMessage}</p>
              }
            </div>
            <div className="col">
              {timeErrorMessage !== null &&
                <p className="text-danger">{timeErrorMessage}</p>
              }
            </div>
          </div>

          <div className="row mb-5">
            <div className="col">
              <FaUserFriends size={25} className="mr-2" />
              <input name="guest" id="guest" value={fields.guest} style={style} placeholder="guests" onChange={handleInputChange} required />
            </div>
            <div className="col">
              <BsSuitHeartFill size={25} className="mr-2" />
              <input name="heart" id="heart" value={fields.heart} style={style} placeholder="Food preferences" onChange={handleInputChange} required />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              {guestErrorMessage !== null &&
                <p className="text-danger">{guestErrorMessage}</p>
              }
            </div>
            <div className="col">

            </div>
          </div>
          <div className="row mb-5 ml-1">
            <BsFillPencilFill size={25} className="mr-2" />
            <textarea name="text" rows="2" cols="65" value={fields.text} style={style} placeholder="Special requests" onChange={handleInputChange} required></textarea>
          </div>
          <div className="row mt-5">
            <div className="col">
              {reqErrorMessage !== null &&
                <p className="text-danger">{reqErrorMessage}</p>
              }
            </div>
          </div>
          <hr></hr>
          <div className="row mt-5 mb-5 ml-1">
            <hr></hr>
            <button type="submit" style={button} className="btn">
              <FaPaperPlane size={15} /> RESERVE TABLE
            </button>
          </div>
        </div>
      </form>

    </div>
  );
}

export default Home;
