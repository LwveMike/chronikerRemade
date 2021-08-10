import React from 'react';
import style from 'styled-components';
import logoStyling from '../styles/logo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { GlobalStyle } from './Home'
import { useSelector } from 'react-redux'

const Circle = style.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: #283D3B;
    position: relative;
    cursor: pointer;

    .firstTriangle {
        color: ${props => props.logoYellow}
    }

    .thirdTriangle {
        color: ${props => props.logoGray}
    }
    &:hover {
        .firstTriangle {
            color: ${props => props.logoGray}
        }
        .thirdTriangle {
            color: ${props => props.logoYellow}
        }
    }
`;





const selectThemes = state => state.themes;


function Logo() {

    const themes = useSelector(selectThemes);

    return <>
        <GlobalStyle pageColor={themes.colors.pageColor} />
        <Circle logoGray={themes.colors.logoGray} logoYellow={themes.colors.logoYellow}>
            <FontAwesomeIcon className='triangle firstTriangle' icon={faCaretRight} />
            <FontAwesomeIcon className='triangle secondTriangle' icon={faCaretRight} />
            <FontAwesomeIcon className='triangle thirdTriangle' icon={faCaretRight} />
        </Circle>

    </>
}


export default Logo;