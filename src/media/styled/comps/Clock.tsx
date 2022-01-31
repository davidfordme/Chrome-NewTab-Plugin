import styled, { css } from 'styled-components';

const clockFontSize = '120px';
const clockPadding = '20px';
const calendarTop = 20;
const opacity = 0.9;

const Clock = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 630px;
    transform: translate(-50%, -50%);
`;

const Calendar = styled.div`
    text-align: center;
    color: #FFF;
    text-shadow: 5px 5px 5px rgba(0,0,0,0.3);
    margin-top: 20px;
    line-height: 20px;
    font-size: 25px;
`;

const Time = css`
    display: block;
    overflow: hidden;
    height: 50%;
    margin: 0;
    padding: 0;
    opacity: 1;
    font-weight: 900;
`;

const TimeOne = styled.h1`
    visibility: hidden;
    ${ Time }
`;

const TimeTwo = styled.h2`
    ${ Time }
    position: absolute;
    top: 0;

    height: calc(50% - ${ calendarTop + 1 }px);

    &:last-child {
        top: calc(50% - ${ calendarTop - 1 }px);

        span {
            transform: translateY(calc(-50% - 11px));
            background: linear-gradient(180deg, rgba(25,25,25,${ opacity }) 50%, rgba(35,35,35,${ opacity }) 75%, rgba(50,50,50,${ opacity }) 100%);
        }
    }
`;

const Span = styled.span`
    display: inline-block;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(25,25,25,${ opacity }) 0%, rgba(35,35,35,${ opacity }) 25%, rgba(50,50,50,${ opacity }) 50%);
    border-radius: ${ clockPadding };
    padding: ${ clockPadding };
    margin: 10px;
    color: #FFF;
    font-size: ${ clockFontSize };
    line-height: ${ clockFontSize };
    text-shadow: 10px 10px 10px rgba(0,0,0,0.3);
    box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
    width: 150px;
    text-align: center;
`;

export { Clock, Calendar, TimeOne, TimeTwo, Span };