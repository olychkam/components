import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./Button.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType

const Button: React.FC<SuperButtonPropsType> = (
    {
        className,
        ...restProps
    }
) => {
    const finalClassName = `${s.buttonStyle} ${className}`;

    return (
        <button
            className={finalClassName}
            {...restProps}/>
    );
}

export default Button;
