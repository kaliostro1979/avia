import React from "react";


type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (props: Props) => {
    return (
        <>
            <label htmlFor={props.id} className={"label"}>{props["aria-label"]}</label>
            <input {...props}/>
        </>
    );
};

export default Input;
