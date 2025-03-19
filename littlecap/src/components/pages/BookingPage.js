import Heading from "../sectionComponents/ReserveHeader";
import ReserveForm from "../sectionComponents/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";

function BookingPage (){
    function updateTimes(date){
        return fetchAPI(date);
    }
    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return(
        <>
        <Heading />
        <ReserveForm availableTimes={availableTimes} updateTimes={dispatch} />
        </>
    );
}
