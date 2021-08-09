import React from 'react';
import generalStyling from '../styles/generalStyling.css';
import style from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import home from '../styles/home.css';

export const PageContainer = style.div`
    background-color: #263238;
    padding-bottom: 20px;
`;

const BigCounter = style.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px;
`;


export const Button = style.div`
    width: 40px;
    height: 40px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;  
    border-radius: 50%;
    transition: background-color 300ms ease;
    cursor: pointer;
    margin: 10px;
    &::before {
        transition: display 400ms ease;
        content: '';
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        position: absolute;
        background-color:black;
        color: white;
        padding: 9px 6px;
        border-radius: 10px;
        left: 50%;
        transform: translateX(-50%);
        top: -45px;
        font-variant: small-caps;
        font-size: 14px;
        display: none;
        text-align: center;
    }
`;

const FirstButton = style(Button)`
    background-color: rgb(16, 74, 78);
    &:hover {
        background-color: rgb(7, 34, 36);
        &:before {
            display: block;
            content: 'add';
        }
    }
`;

export const SecondButton = style(Button)`
    background-color: rgb(40, 61, 59);
    &:hover {
        background-color: rgb(20, 30, 29);
        &:before {
            display: block;
            content: 'play/pause';
        }
    }
`;

const ThirdButton = style(Button)`
    background-color: rgb(119, 46, 37);
    &:hover {
        background-color: rgb(80, 31, 25);
        &::after {
            display: block;
        }
        &:before {
            display: block;
            content: 'long press to delete all';
            width: 180px;
        }
    }
    &::after {
        content: 'Long press to delete all';
        width: 200px;
        font-family: Roboto;
        font-weight: 300;
        font-style: normal;
        font-size: 16px;
        color: rgb(157, 123, 123);
        position: absolute;
        left: 120%;
        display: none;



    }
`;

const Counter = style.div`
    font-family: Roboto;
    font-weight: 300;
    font-style: normal;
    font-size: 36px;
    color: rgb(157, 123, 123);
`;

const ButtonsContainer = style.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


function Home() {
    return (<PageContainer>
        <BigCounter>
            <ButtonsContainer>
                <FirstButton>
                    <FontAwesomeIcon style={{ fontSize: '25px', color: '#A9A8A9' }} icon={faPlus} />
                </FirstButton>

                <SecondButton>
                    <FontAwesomeIcon style={{ fontSize: '40px', marginLeft: '5px', color: '#A9A8A9' }} icon={faCaretRight} />
                </SecondButton>

                <ThirdButton>
                    <FontAwesomeIcon style={{ fontSize: '30px', color: '#A9A8A9' }} icon={faTimes} />
                </ThirdButton>
            </ButtonsContainer>

            <Counter>00 : 00 : 00 | 0.00</Counter>


        </BigCounter>

    </PageContainer >);
}


export default Home;