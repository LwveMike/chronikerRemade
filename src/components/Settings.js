import React from 'react';
import { PageContainer, Button } from './Home';
import style from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Switch from '@material-ui/core/Switch';


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
    color: rgb(162, 152, 150);
    line-height: 1.5em;
    width: 250px;
    padding-right: 20px;
`;

const Bell = style(Button)`
background-color: rgb(16, 74, 78);
&:hover {
    background-color: rgb(7, 34, 36);
}
`;

const NotificationInput = style.input`
width: 80px;
padding: 0px 10px;
border-radius: 5px;
font-size: 16px;
height: 34px;
text-align: center;
vertical-align: middle;
font-family: Roboto;
color: rgb(162, 152, 150);
background-color: rgb(64, 85, 94);
outline: none;
border: none;
`;

const Separator = style.div`
    width: 100px;
    display: flex;
    justify-content: center;
`;



function Settings() {

    return (<PageContainer>
        <Field>
            <PinkText>Request notification permission</PinkText>
            <Separator>
                <Bell>
                    <FontAwesomeIcon style={{ color: '#A9A8A9' }} icon={faBell} />
                </Bell>
            </Separator>
        </Field>

        <Field>
            <PinkText>Notify every ( minutes )</PinkText>
            <Separator>
                <NotificationInput defaultValue='0' />
            </Separator>
        </Field>

        <Field>
            <PinkText>Dark Mode</PinkText>
            <Separator>
                <Switch />
            </Separator>
        </Field>
    </PageContainer>);


}

export default Settings;