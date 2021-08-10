import { pink } from '@material-ui/core/colors';
import React from 'react';
import { PageContainer } from './Home';
import { PinkText } from './Settings';
import style from 'styled-components'
import { useSelector } from 'react-redux'
import { GlobalStyle } from './Home'


const NormalPinkText = style(PinkText)`
    width: auto;
    line-height: 2em;
`;

const Section = style.section`
    margin: 100px 300px;
`;

const selectThemes = state => state.themes;

function About() {

    const themes = useSelector(selectThemes);

    return (<>
        <GlobalStyle pageColor={themes.colors.pageColor} /><PageContainer pageColor={themes.colors.pageColor}>
            <Section>
                <NormalPinkText textColor={themes.colors.textColor}>Hi there ! </NormalPinkText>
                <NormalPinkText textColor={themes.colors.textColor}>This is a small application that was mainly developed for myself.
                    Later some other 2 - 3 people wanted to use it so now it's online.
                    By now you probably guessed that it has something to do with time management and you are correct.
                    I was looking online for a simple app with a simple interface that would allow me to track the time I spend while working on something.
                    There are a few sites that do this but they either want you to pay or register for an account.
                    Not this one. Let me list some of the key features of chroniker.co :</NormalPinkText>
                <NormalPinkText textColor={themes.colors.textColor}>
                    <ol style={{ marginLeft: '40px' }}>
                        <li>Free </li>
                        <li>Simple interface </li>
                        <li>No registration required. In fact, no personal data is collected except the traffic details that are used by google analytics.</li>
                        <li>Works offline. Yes you can use it with no internet, it's magic, believe me.</li>
                        <li>Might "work" as a standalone desktop or mobile app. Chroniker is built as a progressive web application, that means that you can install it on your phone or on your computer.</li>
                        <li>Stores everything in your browser cache. No information is sent to any server, it's all here on your machine, try it, refresh the homepage.</li>
                        <li>It can send you notifications at fixed time intervals (even on your phone) if you need that sort of thing.</li>
                        <li>Dark Mode </li>
                    </ol>
                </NormalPinkText>
                <NormalPinkText textColor={themes.colors.textColor}>
                    That's about it!
                </NormalPinkText>
                <NormalPinkText textColor={themes.colors.textColor}>
                    You might be thinking "Ok cool, dark mode is nice", and then click away to get back to whatever you were doing before this.
                </NormalPinkText>
                <NormalPinkText textColor={themes.colors.textColor}>But now you will leave knowing that there's this small website that makes it extremely easy to manage your time or just take some notes.</NormalPinkText>
                <NormalPinkText textColor={themes.colors.textColor}>In case you do come back, and you like the small improvements I make, then here is a way you can support me.</NormalPinkText>
                <NormalPinkText textColor={themes.colors.textColor}>I like coffee but I try to avoid it. <u><b>Pizza</b></u> however is an entirely different story.☺</NormalPinkText>
            </Section>

        </PageContainer>
    </>);
}

export default About;