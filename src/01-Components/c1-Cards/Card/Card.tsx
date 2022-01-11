import React from 'react';
import s from './Card.module.css';
import image from "../../c0-Assets/image.jpg";

type CardPropsType = {}

export const Card: React.FC<CardPropsType> = ({children}) => {
    return (
        <div className={s.card}>
            {children}
        </div>
    )
}