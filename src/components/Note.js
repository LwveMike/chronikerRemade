import React, { useState, useEffect } from 'react';
import style from 'styled-components';
import { GlobalStyle } from './Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.bubble.css'
import { useSelector, useDispatch } from 'react-redux'
import ACTIONS from '../features/Actions'


const Rectangle = style.div`
    width: 400px;
    height: 360px;
    background-color: ${props => props.noteBodyColor};
    border-radius: 5px;
    box-shadow: 0px 0px 30px -15px rgba(0,0,0,0.75);
`;

const Button = style.div`
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


const SecondButton = style(Button)`
    background-color: ${props => props.playButtonCircleColor};
    &:hover {
        background-color: ${props => props.playButtonCircleColorOnHover};
        &:before {
            display: block;
            content: 'play/pause';
        }
    }
    
`;



const DotsButton = style(Button)`
    background-color: transparent;
    &:hover {
        background-color: ${props => props.threeDotsCircleColorOnHover};
    }

    .icon {
        color: ${props => props.iconsColor};
        font-size: 25px;
    }
`;


const Header = style.div`
    width: 100%;
    height: 60px;
    background-color: ${props => props.headerColor};
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


const Digits = style.div`
font-family: Roboto;
font-weight: 300;
font-style: normal;
font-size: 18px;
color: ${props => props.timeColor};
`;

const TimeContainer = style.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width : 180px;
`;

const ContainerDigits = style.div`
    :root {
        @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
             }
        }
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
        opacity: 0;
        color: rgb(178, 178, 178); 
    }

    .icon:hover {
        color: rgb(230, 230, 230);
    }

    &:hover .icon{
            animation: fadeInAnimation ease 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        
    }
`;


function Time({ time }) {

    const themes = useSelector(selectThemes);


    return (<>
        <TimeContainer>
            <ContainerDigits>
                <FontAwesomeIcon className='icon' icon={faCaretUp} />
                <Digits timeColor={themes.colors.timeColor}>{time.hours}</Digits>
                <FontAwesomeIcon className='icon' icon={faCaretDown} />
            </ContainerDigits>
            <Digits timeColor={themes.colors.timeColor} >:</Digits>

            <ContainerDigits>
                <FontAwesomeIcon className='icon' icon={faCaretUp} />
                <Digits timeColor={themes.colors.timeColor} >{time.minutes}</Digits>
                <FontAwesomeIcon className='icon' icon={faCaretDown} />
            </ContainerDigits>
            <Digits timeColor={themes.colors.timeColor} >:</Digits>

            <ContainerDigits>
                <Digits timeColor={themes.colors.timeColor} >{time.seconds}</Digits>
            </ContainerDigits>
            <Digits timeColor={themes.colors.timeColor} >|</Digits>
            <ContainerDigits>
                <Digits timeColor={themes.colors.timeColor} >{time.score}</Digits>
            </ContainerDigits>
        </TimeContainer>
    </>);
}

const NoteTitle = style.input`
width: 356px;
outline: none;
border: medium none;
background: ${props => props.noteBodyColor};
height: 40px;
vertical-align: middle;
font-family: Roboto;
color: ${props => props.textColor};
font-size: 20px;
padding-left: 15px;
padding-right: 15px;
`;



const EditorWrapper = style.div`
    position: relative;
    .ql-container {
        border: none;
    }
    .ql-editor {
        height: 220px;
        width: 356px;
        border: none;
        outline: none;
        color:rgb(162, 152, 150);
        font-size: 18px;
    }


    .ql-toolbar {
        position: absolute;
        bottom: 0;
        width: 100%;
        transform: translateY(100%);
        outline: none;
        border: none;

      }


    .ql-toolbar .ql-stroke {
        fill: none;
        stroke: rgb(162, 152, 150);
    }

    .ql-toolbar button:hover .ql-stroke, .ql-toolbar svg:hover .ql-stroke {
        fill: none;
        stroke: #2F3D45;
    }

    .ql-toolbar button:hover .ql-fill, .ql-toolbar svg:hover .ql-fill{
        fill: #2F3D45;
        stroke: none;
    }
    
    .ql-toolbar .ql-fill {
        fill: rgb(162, 152, 150);
        stroke: none;
    }

    .ql-toolbar .ql-picker-label:hover, .ql-toolbar .ql-picker-label:hover .ql-stroke {
        color: #2F3D45;
        fill: none;
        stroke: #2F3D45;
    }

    .ql-toolbar .ql-picker-label:hover .ql-fill {
        fill: #2F3D45;
        stroke: none;

    }
    
    .ql-toolbar .ql-picker {
        color: rgb(162, 152, 150);
    }

`;


const selectThemes = state => state.themes;


function Note(props) {

    const [hours, setHours] = useState(props.note.time.hours);
    const [minutes, setMinutes] = useState(props.note.time.minutes);
    const [seconds, setSeconds] = useState(props.note.time.seconds);
    const [score, setScore] = useState(props.note.time.score);
    const [started, setStarted] = useState(false);

    let timeCollection = {
        hours,
        setHours,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        score,
        setScore
    }

    const themes = useSelector(selectThemes);
    const dispatch = useDispatch();

    const handleCount = () => {
        setSeconds(seconds + 1);
    };

    useEffect(() => {
        let intervalID;
        if (started) {
            intervalID = setInterval(() => {
                setSeconds(seconds + 1);
            }, 1000);
        } else {
            clearInterval(intervalID);
        }
        return () => clearInterval(intervalID);
    }, [started, seconds]);


    let modules = {
        toolbar: [
            [{ 'size': ['small', 'medium', 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }]
        ]
    };

    return (<>
        <GlobalStyle pageColor={themes.colors.pageColor} />
        <Rectangle noteBodyColor={themes.colors.noteBodyColor}>
            <Header headerColor={themes.colors.headerColor}>
                <SecondButton playButtonCircleColor={themes.colors.playButtonCircleColor} playButtonCircleColorOnHover={themes.colors.playButtonCircleColorOnHover} onClick={() => setStarted(true)}>
                    <FontAwesomeIcon style={{ fontSize: '40px', marginLeft: '5px', color: themes.colors.iconsColor }} icon={faCaretRight} />
                </SecondButton>
                <Time time={timeCollection} />
                <DotsButton threeDotsCircleColorOnHover={themes.colors.threeDotsCircleColorOnHover}>
                    <FontAwesomeIcon className='icon' icon={faEllipsisV} />
                </DotsButton>
            </Header>

            <NoteTitle noteBodyColor={themes.colors.noteBodyColor} textColor={themes.colors.textColor} placeholder='Title' />
            <EditorWrapper>
                <ReactQuill modules={modules} />
            </EditorWrapper>
        </Rectangle></>);
};


export default Note;