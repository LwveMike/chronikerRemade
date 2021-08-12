import React, { useState } from 'react';
import { PageContainer, Button, GlobalStyle } from './Home';
import style from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Switch from '@material-ui/core/Switch';
import { useSelector, useDispatch } from 'react-redux'
import ACTIONS from '../features/Actions'


const Field = style.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 10px 20px;
    width: 500px;
`;

export const PinkText = style.p`
    font-family: Roboto;
    font-weight: 300;
    color: ${props => props.textColor};
    line-height: 1.5em;
    width: 250px;
    padding-right: 20px;
`;

const Bell = style(Button)`
background-color: ${props => props.bellNotificationCircleColor};
&:hover {
    background-color: ${props => props.bellNotificationCircleColorOnHover};
}
`;

// const NotificationInput = style.input`
// width: 80px;
// padding: 0px 10px;
// border-radius: 5px;
// font-size: 16px;
// height: 34px;
// text-align: center;
// vertical-align: middle;
// font-family: Roboto;
// color: ${props => props.textColor};
// background-color: ${props => props.inputBackgroundColor};
// outline: none;
// border: none;
// `;

const Separator = style.div`
    width: 100px;
    display: flex;
    justify-content: center;
    .notification {
        width: 80px;
        padding: 0px 10px;
        border-radius: 5px;
        font-size: 16px;
        height: 34px;
        text-align: center;
        vertical-align: middle;
        font-family: Roboto;
        outline: none;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: textfield;
    }
`;


const selectThemes = state => state.themes;




function Settings() {

    const themes = useSelector(selectThemes);
    const dispatch = useDispatch();

    let inputStyle = {
        color: themes.colors.textColor,
        backgroundColor: themes.colors.inputBackgroundColor

    }

    const [minutes, setMinutes] = useState('0');
    const [notification, setNotification] = useState({});

    const accesNotifications = () => {
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
        else if (Notification.permission === "granted") {
            setNotification(new Notification('Chroniker Remade'))
        }
        else if (Notification.permission !== "denied") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    var notification = new Notification("Hi there!");
                }
            });
        }
    }

    return (<>
        <GlobalStyle pageColor={themes.colors.pageColor} />
        <PageContainer pageColor={themes.colors.pageColor}>
            <Field>
                <PinkText textColor={themes.colors.textColor}>Request notification permission</PinkText>
                <Separator>
                    <Bell bellNotificationCircleColor={themes.colors.bellNotificationCircleColor} bellNotificationCircleColorOnHover={themes.colors.bellNotificationCircleColorOnHover} onClick={accesNotifications} >
                        <FontAwesomeIcon style={{ color: themes.colors.iconsColor }} icon={faBell} />
                    </Bell>
                </Separator>
            </Field>

            <Field>
                <PinkText textColor={themes.colors.textColor}>Notify every ( minutes )</PinkText>
                <Separator>
                    <input className='notification' style={inputStyle} value={minutes} onChange={(e) => setMinutes(e.target.value.replace(/\D/, ''))} />
                </Separator>
            </Field>

            <Field>
                <PinkText textColor={themes.colors.textColor}>Dark Mode</PinkText>
                <Separator>
                    <Switch value={themes.checked} checked={themes.checked} onChange={() => dispatch({ type: ACTIONS.CHANGE_THEME })} />
                </Separator>
            </Field>
            <div>{JSON.stringify(notification.body)} {Notification.permission}</div>
        </PageContainer>
    </>);


}

export default Settings;