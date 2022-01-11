import React from 'react';
import Button from "../c2-Button/Button";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import s from './Action.module.css'

export const Action = () => {
    return (
        <div className={s.container}>
            <div>
                <Button>ACTION 1</Button>
                <Button>ACTION 2</Button>
            </div>
            <div className={s.icon}>
                <FavoriteIcon/>
                <IosShareIcon/>
            </div>
        </div>
    )
}