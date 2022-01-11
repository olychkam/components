import React from 'react';
import {Card} from "./Card/Card";
import image from '../c0-Assets/image.jpg'
import s from './Cards.module.css';
import Button from "../c2-Button/Button";
import {Content} from "../c3-Content/Content";
import {Action} from "../c4-Action/Action";

export const Cards = () => {
    return (
        <>
            <Card>
                <img className={s.img} src={image}/>
                <Content  title={'Lorem ipsum dolor sit amet'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis in libero nesciunt placeat qui tempore, voluptates.
                    Aliquid aperiam commodi dicta
                    hic inventore maiores necessitatibus nostrum, nulla odit
                    officiis quibusdam ullam.
                </Content>
                <Button className={s.btn}>Mehr erfahren</Button>
            </Card>
            <Card>
                <img className={s.img} src={image}/>
                <Content  title={'Lorem ipsum dolor sit amet'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis in libero nesciunt placeat qui tempore, voluptates.
                    Aliquid aperiam commodi dicta
                    hic inventore maiores necessitatibus nostrum, nulla odit
                    officiis quibusdam ullam.
                </Content>
                <Action/>
            </Card>
            <Card>
                <img className={s.img} src={image}/>
                <Content spanClassName={s.spn}  title={'Lorem ipsum dolor sit amet'}>
                    <table>
                        <tr>
                            <td>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis in libero nesciunt placeat qui tempore, voluptates.
                            </td>
                            <td>
                    Aliquid aperiam commodi dicta
                    hic inventore maiores necessitatibus nostrum, nulla odit
                    officiis quibusdam ullam.
                            </td>
                        </tr>
                    </table>
                </Content>
                <Action/>
            </Card>
        </>
    )
}