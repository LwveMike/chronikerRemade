import React, { useRef } from 'react';
import style, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import Note from './Note'

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${props => props.pageColor}
    }
`;


export const PageContainer = style.div`
    background-color: ${props => props.pageColor};
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
    background-color: ${props => props.plusIconCircleColor};
    &:hover {
        background-color: ${props => props.plusIconCircleColorOnHover};
        &:before {
            display: block;
            content: 'add';
        }
    }
`;

export const SecondButton = style(Button)`
    background-color: ${props => props.playButtonCircleColor};
    &:hover {
        background-color: ${props => props.playButtonCircleColorOnHover};
        &:before {
            display: block;
            content: 'play/pause';
        }
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

const Counter = style.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${props => props.textColor};
`;

const ButtonsContainer = style.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ReduxElement = style.div`
font-family: Roboto;
font-weight: 300;
font-style: normal;
font-size: 36px;
`;

const NotesContainer = style.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1300px;
    background-color: white;
    margin: 20px auto;

`;



const selectNotes = state => state.notes;
const selectThemes = state => state.themes;




function Home() {



    const notes = useSelector(selectNotes);
    const themes = useSelector(selectThemes);

    const dispatch = useDispatch();

    const notesContainerRef = useRef(null);


    return (<>
        <GlobalStyle pageColor={themes.colors.pageColor} />
        <PageContainer pageColor={themes.colors.pageColor}>
            <BigCounter>
                <ButtonsContainer>
                    <FirstButton plusIconCircleColor={themes.colors.plusIconCircleColor} plusIconCircleColorOnHover={themes.colors.plusIconCircleColorOnHover}>
                        <FontAwesomeIcon style={{ fontSize: '25px', color: themes.colors.iconsColor }} icon={faPlus} />
                    </FirstButton>

                    <SecondButton playButtonCircleColor={themes.colors.playButtonCircleColor} playButtonCircleColorOnHover={themes.colors.playButtonCircleColorOnHover}>
                        <FontAwesomeIcon style={{ fontSize: '40px', marginLeft: '5px', color: themes.colors.iconsColor }} icon={faCaretRight} />
                    </SecondButton>

                    <ThirdButton textColor={themes.colors.textColor} xButtonCircleColor={themes.colors.xButtonCircleColor} xButtonCircleColorOnHover={themes.colors.xButtonCircleColorOnHover}>
                        <FontAwesomeIcon style={{ fontSize: '30px', color: themes.colors.iconsColor }} icon={faTimes} />
                    </ThirdButton>
                </ButtonsContainer>

                <Counter textColor={themes.colors.textColor}>
                    <ReduxElement value='0' />
                    <ReduxElement> : </ReduxElement>
                    <ReduxElement value='0' />
                    <ReduxElement> : </ReduxElement>
                    <ReduxElement value='0' />
                    <ReduxElement> | </ReduxElement>
                    <ReduxElement value='0' />
                </Counter>


            </BigCounter>

            <NotesContainer ref={notesContainerRef}>
                {notes.map(note => {
                    return (<Note key={note.id} note={note} />);
                })}
            </NotesContainer>

        </PageContainer >
    </>);
}


export default Home;