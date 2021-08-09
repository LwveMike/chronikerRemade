import React from 'react';
import style from 'styled-components';
import logoStyling from '../styles/logo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Circle = style.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: #283D3B;
    position: relative;
    cursor: pointer;
    &:hover {
        .firstTriangle {
            color: #A9A8A9;
        }
        .thirdTriangle {
            color: #FFD23F;
        }
    }
`;








function Logo() {
    return <>
        <Circle>
            <FontAwesomeIcon className='triangle firstTriangle' icon={faCaretRight} />
            <FontAwesomeIcon className='triangle secondTriangle' icon={faCaretRight} />
            <FontAwesomeIcon className='triangle thirdTriangle' icon={faCaretRight} />
        </Circle>

    </>
}


export default Logo;