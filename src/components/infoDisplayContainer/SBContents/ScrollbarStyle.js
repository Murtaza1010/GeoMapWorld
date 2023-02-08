import { css } from 'styled-components/macro'


const ScrollbarStyles = css`
    /* fireFox */
    scrollbar-color: #757579;
    scrollbar-width: thin;

    /* Chrome Edge & safari */
    ::webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: #e7e7e7;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #d1d1d1;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #757579;
    }
    ::-webkit-scrollbar-thumb:active {
        background-color: #757579;
    }

`

export default ScrollbarStyles