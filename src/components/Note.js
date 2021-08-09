import React from 'react';
import style from 'styled-components';
import { Button, SecondButton } from './Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.bubble.css'


const Rectangle = style.div`
    width: 400px;
    height: 360px;
    background-color: #40555E;
    border-radius: 5px;
`;

const Header = style.div`
    width: 100%;
    height: 60px;
    background-color: #1E272C;
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
color: rgb(178, 178, 178);
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

const DotsButton = style(Button)`
    background-color: transparent;
    &:hover {
        background-color: #0F1316;
    }

    .icon {
        color: #A9A8A9;
        font-size: 25px;
    }
`;


function Time() {

    return (
        <TimeContainer>
            <ContainerDigits>
                <FontAwesomeIcon className='icon' icon={faCaretUp} />
                <Digits>00</Digits>
                <FontAwesomeIcon className='icon' icon={faCaretDown} />
            </ContainerDigits>
            <Digits>:</Digits>

            <ContainerDigits>
                <FontAwesomeIcon className='icon' icon={faCaretUp} />
                <Digits>00</Digits>
                <FontAwesomeIcon className='icon' icon={faCaretDown} />
            </ContainerDigits>
            <Digits>:</Digits>

            <ContainerDigits>
                <Digits>00</Digits>
            </ContainerDigits>
            <Digits>|</Digits>
            <ContainerDigits>
                <Digits>00</Digits>
            </ContainerDigits>
        </TimeContainer>
    );
}

const NoteTitle = style.input`
width: 356px;
outline: none;
border: medium none;
background: rgb(64, 85, 94);
height: 40px;
vertical-align: middle;
font-family: Roboto;
color: rgb(162, 152, 150);
font-size: 20px;
padding-left: 15px;
padding-right: 15px;
`;

const NoteBody = style.textarea`
display: block;
width: 356px;
    background-color: yellow;
    height: 190px;
    background: rgb(64, 85, 94);
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: normal;
    padding-top: 0px;
    color: rgb(162, 152, 150);
    padding-left: 15px;
    padding-right: 15px;
    outline: none;
    resize: none;
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











function Note() {

    let modules = {
        toolbar: [
            [{ 'size': ['small', 'medium', 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }]
        ]
    };

    return <Rectangle>
        <Header>
            <SecondButton>
                <FontAwesomeIcon style={{ fontSize: '40px', marginLeft: '5px', color: '#A9A8A9' }} icon={faCaretRight} />
            </SecondButton>
            <Time />
            <DotsButton>
                <FontAwesomeIcon className='icon' icon={faEllipsisV} />
            </DotsButton>
        </Header>

        <NoteTitle placeholder='Title' />
        <EditorWrapper>
            <ReactQuill modules={modules} />
        </EditorWrapper>
    </Rectangle>
};


export default Note;