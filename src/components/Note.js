import React, { useState, useEffect, useRef } from 'react';
import style from 'styled-components';
import { GlobalStyle } from './Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
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
    display: flex;
    justify-content: center;
    align-items: center;
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

const HalfHeader = style(Header)`
    width: 80%;
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


function Time({ note }) {

    const themes = useSelector(selectThemes);

    const dispatch = useDispatch();


    return (<>
        <TimeContainer>
            <ContainerDigits>
                <FontAwesomeIcon className='icon' icon={faCaretUp} onClick={() => dispatch({ type: ACTIONS.INCREMENT_HOURS, payload: { id: note.id } })} />
                <Digits timeColor={themes.colors.timeColor}>{/* time.hours */ note.time.hours}</Digits>
                <FontAwesomeIcon className='icon' icon={faCaretDown} onClick={() => dispatch({ type: ACTIONS.DECREMENT_HOURS, payload: { id: note.id } })} />
            </ContainerDigits>
            <Digits timeColor={themes.colors.timeColor} >:</Digits>

            <ContainerDigits>
                <FontAwesomeIcon className='icon' icon={faCaretUp} onClick={() => dispatch({ type: ACTIONS.INCREMENT_MINUTES, payload: { id: note.id } })} />
                <Digits timeColor={themes.colors.timeColor} >{/*time.minutes */ note.time.minutes}</Digits>
                <FontAwesomeIcon className='icon' icon={faCaretDown} onClick={() => dispatch({ type: ACTIONS.DECREMENT_MINUTES, payload: { id: note.id } })} />
            </ContainerDigits>
            <Digits timeColor={themes.colors.timeColor} >:</Digits>

            <ContainerDigits>
                <Digits timeColor={themes.colors.timeColor} >{/* time.seconds */ note.time.seconds}</Digits>
            </ContainerDigits>
            <Digits timeColor={themes.colors.timeColor} >|</Digits>
            <ContainerDigits>
                <Digits timeColor={themes.colors.timeColor} >{/* time.score */ note.time.score}</Digits>
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



const ThirdButton = style(Button)`
    background-color: ${props => props.xButtonCircleColor};
    &:hover {
        background-color:  ${props => props.xButtonCircleColorOnHover};
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
        color: ${props => props.textColor};
        position: absolute;
        left: 120%;
        display: none;



    }
`;

const XButton = style(ThirdButton)`
&:hover {
    &::after {
        display: none;
    }
    &::before {
        display: block;
        content: 'delete';
        width: 60px;
    }
}
`;

const DuplicateButton = style(DotsButton)`
&:hover {
    &::before {
        display: block;
        content: 'duplicate';
        width: 80px;
    }
}
`;

const ResetButton = style(DuplicateButton)`
&:hover {
    &::before {
        display: block;
        content: 'reset time';
        width: 100px;
    }
}
`;


const selectThemes = state => state.themes;



function Note(props) {


    const themes = useSelector(selectThemes);
    const dispatch = useDispatch();

    const dotsRef = useRef(faEllipsisV);
    const leftArrowRef = useRef(faArrowLeft);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const quillRef = useRef(null);



    useEffect(() => {
        let intervalID;
        if (props.note.playing) {
            intervalID = setInterval(() => {
                if (props.note.time.minutes >= 59 && props.note.time.seconds >= 59) {
                    dispatch({ type: ACTIONS.UPDATE_HOURS, payload: { id: props.elId, hours: props.note.time.hours + 1 } });
                }

                else if (props.note.time.seconds >= 59) {
                    dispatch({ type: ACTIONS.UPDATE_MINUTES, payload: { id: props.elId, minutes: props.note.time.minutes + 1 } });
                }
                else
                    dispatch({ type: ACTIONS.UPDATE_SECONDS, payload: { id: props.elId, seconds: props.note.time.seconds + 1 } });
            }, 1000);
        } else {
            clearInterval(intervalID);
        }
        return () => clearInterval(intervalID);
    }, [props.note.playing, props.note.time.seconds]);



    let modules = {
        toolbar: [
            [{ 'size': ['small', 'medium', 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }]
        ]
    };

    function Decision() {
        if (props.note.options === true) {
            return (<>
                <XButton xButtonCircleColor={themes.colors.xButtonCircleColor} xButtonCircleColorOnHover={themes.colors.xButtonCircleColorOnHover} onClick={() => dispatch({ type: ACTIONS.DELETE_NOTE, payload: { id: props.note.id } })}>
                    <FontAwesomeIcon style={{ fontSize: '30px', color: themes.colors.iconsColor }} icon={faTimes} />
                </XButton>
                <DuplicateButton threeDotsCircleColorOnHover={themes.colors.threeDotsCircleColorOnHover} onClick={() => dispatch({ type: ACTIONS.DUPLICATE, payload: { id: props.note.id } })}>
                    <FontAwesomeIcon style={{ color: themes.colors.iconsColor, fontSize: '20px', marginLeft: '2px' }} className='icon' icon={faCopy} />
                </DuplicateButton>
                <ResetButton threeDotsCircleColorOnHover={themes.colors.threeDotsCircleColorOnHover} onClick={() => dispatch({ type: ACTIONS.RESET_TIME, payload: { id: props.note.id } })} >
                    <FontAwesomeIcon style={{ color: themes.colors.iconsColor, fontSize: '20px', marginLeft: '2px' }} className='icon' icon={faRedo} />
                </ResetButton>

            </>);
        }
        return (<>
            <SecondButton playButtonCircleColor={themes.colors.playButtonCircleColor} playButtonCircleColorOnHover={themes.colors.playButtonCircleColorOnHover} onClick={() => dispatch({ type: ACTIONS.TOGGLE_PLAY, payload: { id: props.elId, lastTime: Date.now() } })
            }>
                <FontAwesomeIcon style={{ fontSize: '20px', color: themes.colors.iconsColor }} icon={props.note.playing === true ? faPause : faPlay} />
            </SecondButton>
            <Time note={props.note} />
        </>);
    }

    return (<>
        <GlobalStyle pageColor={themes.colors.pageColor} />
        <Rectangle noteBodyColor={themes.colors.noteBodyColor}>
            <Header headerColor={props.note.playing === true ? themes.colors.headerColorPlaying : themes.colors.headerColor}>
                <HalfHeader headerColor={props.note.playing === true ? themes.colors.headerColorPlaying : themes.colors.headerColor}>
                    <Decision />
                </HalfHeader>
                <DotsButton threeDotsCircleColorOnHover={themes.colors.threeDotsCircleColorOnHover} onClick={() => {
                    return dispatch({ type: ACTIONS.OPEN_OPTIONS, payload: { id: props.elId } })
                }}>
                    <FontAwesomeIcon className='icon' style={{ color: themes.colors.iconsColor }} icon={props.note.options === true ? leftArrowRef.current : dotsRef.current} />
                </DotsButton>
            </Header>

            <NoteTitle noteBodyColor={themes.colors.noteBodyColor} textColor={themes.colors.textColor} placeholder='Title' value={props.note.title} onChange={(e) => dispatch({ type: ACTIONS.EDIT_TITLE, payload: { id: props.note.id, title: e.target.value } })} />
            <EditorWrapper   /* dispatch({ type: ACTIONS.EDIT_TEXT, payload: { id: props.note.id, text: e.nativeEvent.target.textContent } }) */
            >
                <ReactQuill modules={modules} value={props.note.text || ''} onChange={(e) => dispatch({ type: ACTIONS.EDIT_TEXT, payload: { id: props.note.id, text: e } })} />
            </EditorWrapper>
        </Rectangle></>);
};


export default Note;