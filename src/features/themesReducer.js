import ACTIONS from './Actions';

const initialState = {
    theme: 'dark',
    checked: false,
    colors: {
        navBarColor: '#1E272C',
        logoCircleColor: '#283D3B',
        logoRed: '#C44536',
        logoYellow: '#FFD23F',
        logoGray: '#A9A8A9',
        navBarItems: '#B2B2B2',
        navBarItemsOnHover: '#9A7979',
        iconsColor: 'rgb(169, 168, 169)',
        plusIconCircleColor: '#104A4E',
        plusIconCircleColorOnHover: 'rgb(7, 34, 36)',
        playButtonCircleColor: 'rgb(40, 61, 59)',
        playButtonCircleColorOnHover: 'rgb(20, 30, 29)',
        xButtonCircleColor: 'rgb(119, 46, 37)',
        xButtonCircleColorOnHover: 'rgb(80, 31, 25)',
        headerColor: '#1E272C',
        headerColorPlaying: '#4c1b15',
        threeDotsCircleColorOnHover: '#0F1316',
        noteBodyColor: '#40555E',
        bellNotificationCircleColor: 'rgb(16, 74, 78)',
        bellNotificationCircleColorOnHover: '#072224',
        inputBackgroundColor: '#40555E',
        timeColor: '#9D7B7B',
        switchColor: '#772E25',
        textColor: '#9D7B7B',
        pageColor: '#263238'

    }
}

const themes = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_THEME: return {
            theme: state.theme === 'dark' ? 'light' : 'dark',
            checked: !state.checked,
            colors: {
                ...state.colors,
                navBarColor: state.theme === 'dark' ? '#1E272C' : '#197278',
                logoCircleColor: state.theme === 'dark' ? '#283D3B' : '#FBFBF0',
                navBarItems: state.theme === 'dark' ? '#B2B2B2' : '#E5E5E5',
                navBarItemsOnHover: state.theme === 'dark' ? '#9A7979' : '#664C4C',
                iconsColor: state.theme === 'dark' ? 'rgb(169, 168, 169)' : '#FBFBF0',
                plusIconCircleColor: state.theme === 'dark' ? '#104A4E' : 'rgb(25, 114, 120)',
                plusIconCircleColorOnHover: state.theme === 'dark' ? 'rgb(7, 34, 36)' : '#104A4E',
                playButtonCircleColor: state.theme === 'dark' ? 'rgb(40, 61, 59)' : '#283D3B',
                playButtonCircleColorOnHover: state.theme === 'dark' ? 'rgb(7, 34, 36)' : '#141E1D',
                headerColor: state.theme === 'dark' ? '#1E272C' : '#197278',
                headerColorPlaying: state.theme === 'dark' ? '#4c1b15' : '#C44536',
                threeDotsCircleColorOnHover: state.theme === 'dark' ? '#0F1316' : '#0D393C',
                noteBodyColor: state.theme === 'dark' ? '#40555E' : '#FBFBF0',
                bellNotificationCircleColor: state.theme === 'dark' ? 'rgb(16, 74, 78)' : 'rgb(25, 114, 120)',
                bellNotificationCircleColorOnHover: state.theme === 'dark' ? '#072224' : '#104A4E',
                inputBackgroundColor: state.theme === 'dark' ? '#40555E' : '#FBFBF0',
                timeColor: state.theme === 'dark' ? '#9D7B7B' : 'white',
                switchColor: state.theme === 'dark' ? '#772E25' : '#E5E5E5',
                textColor: state.theme === 'dark' ? '#9D7B7B' : '#6C6665',
                pageColor: state.theme === 'dark' ? '#263238' : '#E5E5E5'
            }
        }
        default: return state;
    }
}

export default themes;