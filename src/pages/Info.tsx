import {FC, useEffect} from 'react';
import {useAppSelector} from "../hooks/ReduxHooks";
import {useNavigate} from "react-router-dom";
import InfoCartBody from "../components/InfoCartBody";

export interface ITimes {
    departureTime: string
    arrivalTime: string
}


export interface ITicket {
    start: string
    end: string
    startDate: string
    endDate: string,
    departure_airport: string
    arrival_airport: string
    duration: string
    ticket_status: string
    airline: string
    price: number
    availableTimes: ITimes[],
    twoWaysTicket: boolean
}


const Info: FC = () => {
    const values = useAppSelector(state => state.search.values)

    const ticket: ITicket = {
        start: values.start,
        end: values.end,
        startDate: values.startDate,
        endDate: values.endDate,
        departure_airport: "SVO",
        arrival_airport: "ROV",
        duration: "1 ч 55 мин",
        ticket_status: "Невозвратный",
        airline: "S7 Airlines",
        price: 4150,
        availableTimes: [
            {
                departureTime: "09:20",
                arrivalTime: "11:05"
            },
            {
                departureTime: "10:20",
                arrivalTime: "12:05"
            },
            {
                departureTime: "11:20",
                arrivalTime: "13:05"
            }
        ],
        twoWaysTicket: false
    }

    const navigate = useNavigate()


    useEffect(()=>{
        if (!ticket.start || !ticket.end || !ticket.startDate){
            navigate("/avia")
        }
    }, [ticket.start, ticket.end, ticket.startDate, navigate])

    return (
        <div className={"page-wrapper"}>
            <div className={"info-cart__wrapper"}>
                <div className={"info-cart__item"}>
                    <InfoCartBody {...ticket}/>
                    {ticket.endDate ? <InfoCartBody {...{...ticket, twoWaysTicket: true}}/> : null}
                </div>
                <div className={"info-cart__price"}>
                    <p>{ticket.endDate !== "" ? ticket.price * 2 : ticket.price} ₽</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
