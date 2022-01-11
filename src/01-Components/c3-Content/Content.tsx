import React from 'react';
import s from "./Content.module.css";

type ContentPropsType = {
    title: string
    spanClassName?: string
}
export const Content: React.FC<ContentPropsType> = (
    {
        children, title, spanClassName,
        ...restProps
    }
) => {
    return (
        <div className={s.content}>
            <h1>{title}</h1>
            {children && <span className={spanClassName}>{children}</span>}
        </div>
    )
}


