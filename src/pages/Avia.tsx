import React, {FC, useState} from 'react';
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import {useNavigate} from "react-router-dom";
import CalendarIcon from "../icons/CalendarIcon";
import {getValues} from "../app/slices/searchSlice";
import {useAppDispatch} from "../hooks/ReduxHooks";


const Avia: FC = () => {
    const navigate = useNavigate()
    const dispatch  = useAppDispatch()

    interface State {
        start: string;
        end: string;
        startDate: string;
        endDate: string;
    }

    const [values, setValues] = useState<State>({start: '', end: '', startDate: '', endDate: ''});

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleSubmit = (e: React.SyntheticEvent)=>{
        e.preventDefault()
        dispatch(getValues(values))
        navigate('info')
    }

    return (
        <div className={"page-wrapper"}>
            <form onSubmit={handleSubmit} className={"search-form"}>
                <div className={"search-form__inputs"}>
                    <div className={"input-group"}>
                        <Input
                            placeholder={"Город вылета"}
                            value={values.start}
                            type={"text"}
                            className={"input search-form__input"}
                            onChange={handleChange('start')}
                            id={"start"}
                            aria-label={"Откуда"}
                        />
                    </div>
                    <div className={"input-group"}>
                        <Input
                            placeholder={"Город прилёта"}
                            value={values.end} type={"text"}
                            className={"input search-form__input"}
                            onChange={handleChange('end')}
                            id={"end"}
                            aria-label={"Куда"}
                        />
                    </div>
                    <div className={"input-group start-date__input-group"}>
                        <div className={"input-group__icon"} style={{color: values.startDate ? "#5C87DB" : "#232323"}}>
                            <CalendarIcon/>
                        </div>
                        <Input
                            placeholder={"дд.мм.гг"}
                            value={values.startDate}
                            type={"text"}
                            className={"input search-form__input with-icon"}
                            onChange={handleChange('startDate')}
                            id={"startDate"}
                            aria-label={"Туда"}
                            pattern={"^\\s*(3[01]|[12][0-9]|0?[1-9])\\.(1[012]|0?[1-9])\\.(\\d{2})\\s*$"}
                            title={"Дата должна быть заполнена в формате дд.мм.гг"}
                        />
                    </div>
                    <div className={"input-group"}>
                        <div className={"input-group__icon"} style={{color: values.endDate ? "#5C87DB" : "#232323"}}>
                            <CalendarIcon/>
                        </div>
                        <Input
                            placeholder={"дд.мм.гг"}
                            value={values.endDate}
                            type={"text"}
                            className={"input search-form__input with-icon"}
                            onChange={handleChange('endDate')}
                            id={"endDate"}
                            aria-label={"Обратно"}
                            pattern={"^\\s*(3[01]|[12][0-9]|0?[1-9])\\.(1[012]|0?[1-9])\\.(\\d{2})\\s*$"}
                            title={"Дата должна быть заполнена в формате дд.мм.гг"}
                        />
                    </div>
                </div>
                <div className={"search-form__button"}>
                    <Button
                        type={"submit"}
                        className={"button button-primary"}
                        disabled={(!values.start || !values.end || !values.startDate)}
                    >Найти билеты</Button>
                </div>
            </form>
        </div>
    )
};

export default Avia;
