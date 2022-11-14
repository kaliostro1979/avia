import React, {FC, useState} from 'react';
import {ITicket, ITimes} from "../pages/Info";
import Logo from "../assets/images/logo.png";
import BagIcon from "../icons/BagIcon";
import SuitCaseIcon from "../icons/SuitCaseIcon";

const InfoCartBody = (ticket:ITicket) => {
    const {start, end, startDate, endDate, departure_airport, arrival_airport, duration, ticket_status, airline, availableTimes, twoWaysTicket} = ticket
    const [times, setTimes] = useState<ITimes>(availableTimes[0])
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (updatedData: ITimes, index: number) => {
        setTimes(updatedData)
        setActiveIndex(index)
    }

    return (
        <div className={"info-cart__body"}>
            <div className={"info-cart__label"}>
                <span>{ticket_status}</span>
            </div>
            <div className={"info-cart__logo"}>
                <img src={Logo} alt=""/>
                <p>{airline}</p>
            </div>
            <div className={"info-cart__details"}>
                <div className={"info-cart__path"}>
                    <div className={"info-cart__path-start"}>
                        <p className={"info-cart__path-time-item info-cart__path-start-time"}>{!twoWaysTicket ? times.departureTime : times.arrivalTime}</p>
                        <p className={"info-cart__path-start-point"}>{!twoWaysTicket ? start : end}</p>
                        <p className={"info-cart__path-start-date"}>{startDate}</p>
                    </div>
                    <div className={"info-cart__path-duration-wrapper"}>
                        <ul className={"info-cart__path-duration"}>
                            <li>{!twoWaysTicket ? arrival_airport : departure_airport}</li>
                            <li>{!twoWaysTicket ? departure_airport : arrival_airport}</li>
                        </ul>
                        <p>В пути {duration}</p>
                    </div>
                    <div className={"info-cart__path-end"}>
                        <p className={"info-cart__path-time-item info-cart__path-end-time"}>{!twoWaysTicket ? times.arrivalTime : times.departureTime}</p>
                        <p className={"info-cart__path-start-point"}>{!twoWaysTicket ? end : start}</p>
                        <p className={"info-cart__path-start-date"}>{startDate}</p>
                    </div>
                    <div className={"info-cart__path-icons"}>
                        <BagIcon/>
                        <SuitCaseIcon/>
                    </div>
                </div>
                {
                    endDate === "" ? <ul className={"info-cart__time-list"}>
                        {
                            availableTimes.map((item, index) => {
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
    );
};

export default InfoCartBody;
