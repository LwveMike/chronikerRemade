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
                <NormalPinkText textColor={themes.colors.textColor}>I am LwveMike</NormalPinkText>
                <NormalPinkText textColor={themes.colors.textColor}>And this is a reacreation of the real website chroniker.co</NormalPinkText>
            </Section>

        </PageContainer>
    </>);
}

export default About;