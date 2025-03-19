import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


function ReserveForm(props){
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [guest, setGuest] = useState("");
    const [date, setDate] = useState("");
    const [options, setOptions] = useState("");
    const [occasion, setOccasion] = useState("");
    const [comments, setComments] = useState("")
    const [finalTime, setFinalTime] =useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    );

    function handleDateChange(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const date= new Date(stringify);

        props.updateTimes(date);

        setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
    }

    return (
        <form className="reservation-form">
            <div>
                <label htmlFor="fName">First Name</label><br />
                <input
                    type="text"
                    id="fName"
                    placeholder="First Name"
                    required
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="lName">Last Name</label><br />
                <input
                    type="text"
                    id="lName"
                    placeholder="Last Name"
                    required
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label><br />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="tel">Phone Number</label><br />
                <input
                    type="tel"
                    id="tel"
                    placeholder="(xxx)-xxx-xxxx"
                    value={tel}
                    required
                    minLength={10}
                    maxLength={25}
                    onChange={(e) => setTel(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="guest">Number of Guests</label><br />
                <input
                    type="number"
                    id="guest"
                    placeholder="Number of Guests"
                    value={guest}
                    required
                    min={1}
                    max={50}
                    onChange={(e) => setGuest(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="date">Select a Date</label><br />
                <input
                    type="date"
                    id="date"
                    value={date}
                    required
                    onChange={handleDateChange}></input>
            </div>
            <div>
                <label htmlFor="time">Select a Time</label><br />
                <select id="time" required>
                    {finalTime}
                </select>
            </div>
            <div>
                <label htmlFor="options">Seating Preferences</label><br />
                <select
                id="options"
                value={options}
                onChange={(e) => setOptions(e.target.value)}>
                    <option>No Preference</option>
                    <option>Indoors</option>
                    <option>Indoor (Booth)</option>
                    <option>Indoor (Table)</option>
                    <option>Outdoors</option>
                </select>
            </div>
            <div>
                <label htmlFor="occasion">Is this for a Special Event?</label><br />
                <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="comments">Additional Comments</label> <br />
                <textarea
                id="comments"
                rows={8}
                cols={50}
                placeholder="Additional Comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}></textarea>
            </div>
            <div>
                <br />
                <small>
                    <p>
                        Note: If you need to edit your reservation after submission you will have to call the restaurant.
                        Please double-check the anwsers you have selected before submitting your request.
                    </p>
                </small>
                <Link className="action-button" to="/confirmation">Book Table</Link>
            </div>
        </form>
    );
}
export default ReserveForm;