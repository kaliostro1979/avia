import {FC, useEffect, useState} from 'react';
import {useAppSelector} from "../hooks/ReduxHooks";
import Logo from "../assets/images/logo.png"
import BagIcon from "../icons/BagIcon";
import SuitCaseIcon from "../icons/SuitCaseIcon";
import {useNavigate} from "react-router-dom";

const Info: FC = () => {
    interface ITimes {
        departureTime: string
        arrivalTime: string
    }

    interface ITicket {
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
        availableTimes: ITimes[]
    }


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
        ]
    }

    const [times, setTimes] = useState<ITimes>(ticket.availableTimes[0])
    const [activeIndex, setActiveIndex] = useState(0)
    const navigate = useNavigate()

    const handleClick = (updatedData: ITimes, index: number) => {
        setTimes(updatedData)
        setActiveIndex(index)
    }

    useEffect(()=>{
        if (!ticket.start || !ticket.end || !ticket.startDate){
            navigate("/avia")
        }
    }, [ticket.start, ticket.end, ticket.startDate, navigate])

    return (
        <div className={"page-wrapper"}>
            <div className={"info-cart__wrapper"}>
                <div className={"info-cart__item"}>
                    <div className={"info-cart__body"}>
                        <div className={"info-cart__label"}>
                            <span>{ticket.ticket_status}</span>
                        </div>
                        <div className={"info-cart__logo"}>
                            <img src={Logo} alt=""/>
                            <p>{ticket.airline}</p>
                        </div>
                        <div className={"info-cart__details"}>
                            <div className={"info-cart__path"}>
                                <div className={"info-cart__path-start"}>
                                    <p className={"info-cart__path-time-item info-cart__path-start-time"}>{times.departureTime}</p>
                                    <p className={"info-cart__path-start-point"}>{ticket.start}</p>
                                    <p className={"info-cart__path-start-date"}>{ticket.startDate}</p>
                                </div>
                                <div className={"info-cart__path-duration-wrapper"}>
                                    <ul className={"info-cart__path-duration"}>
                                        <li>{ticket.departure_airport}</li>
                                        <li>{ticket.arrival_airport}</li>
                                    </ul>
                                    <p>В пути {ticket.duration}</p>
                                </div>
                                <div className={"info-cart__path-end"}>
                                    <p className={"info-cart__path-time-item info-cart__path-end-time"}>{times.arrivalTime}</p>
                                    <p className={"info-cart__path-start-point"}>{ticket.end}</p>
                                    <p className={"info-cart__path-start-date"}>{ticket.startDate}</p>
                                </div>
                                <div className={"info-cart__path-icons"}>
                                    <BagIcon/>
                                    <SuitCaseIcon/>
                                </div>
                            </div>
                            {
                                ticket.endDate === "" ? <ul className={"info-cart__time-list"}>
                                    {
                                        ticket.availableTimes.map((item, index) => {
                                            return (
                                                <li
                                                    key={Date.now() * index}
                                                    onClick={() => handleClick({
                                                        departureTime: item.departureTime,
                                                        arrivalTime: item.arrivalTime
                                                    }, index)}
                                                    className={index === activeIndex ? "info-cart__time-list-item active" : "info-cart__time-list-item"}
                                                >
                                                    <p>
                                                    <span className={"info-cart__time-dep"}>{item.departureTime}
                                                    </span> -
                                                        <span
                                                            className={"info-cart__time-arr"}>{item.arrivalTime}</span>
                                                    </p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul> : null
                            }
                        </div>
                    </div>
                    {
                        values.endDate !== "" ?
                            <div className={"info-cart__body"}>
                                <div className={"info-cart__label"}>
                                    <span>{ticket.ticket_status}</span>
                                </div>
                                <div className={"info-cart__logo"}>
                                    <img src={Logo} alt=""/>
                                    <p>{ticket.airline}</p>
                                </div>
                                <div className={"info-cart__details"}>
                                    <div className={"info-cart__path"}>
                                        <div className={"info-cart__path-end"}>
                                            <p className={"info-cart__path-time-item info-cart__path-end-time"}>{times.arrivalTime}</p>
                                            <p className={"info-cart__path-start-point"}>{ticket.end}</p>
                                            <p className={"info-cart__path-start-date"}>{ticket.endDate}</p>
                                        </div>
                                        <div className={"info-cart__path-duration-wrapper"}>
                                            <ul className={"info-cart__path-duration"}>
                                                <li>{ticket.arrival_airport}</li>
                                                <li>{ticket.departure_airport}</li>
                                            </ul>
                                            <p>В пути {ticket.duration}</p>
                                        </div>
                                        <div className={"info-cart__path-start"}>
                                            <p className={"info-cart__path-time-item info-cart__path-start-time"}>{times.departureTime}</p>
                                            <p className={"info-cart__path-start-point"}>{ticket.start}</p>
                                            <p className={"info-cart__path-start-date"}>{ticket.endDate}</p>
                                        </div>
                                        <div className={"info-cart__path-icons"}>
                                            <BagIcon/>
                                            <SuitCaseIcon/>
                                        </div>
                                    </div>
                                </div>
                            </div> : null
                    }
                </div>
                <div className={"info-cart__price"}>
                    <p>{ticket.endDate !== "" ? ticket.price * 2 : ticket.price} ₽</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
