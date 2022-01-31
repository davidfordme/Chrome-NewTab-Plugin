import styled, { css } from 'styled-components';

const height = 50;
const gSize = 30;
const size = height + (gSize * 2);

const Form = styled.form`
    position: absolute;
    top: 25%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    height: ${ height }px;
    width: 450px;
    max-width: 80%;
    border-radius: ${ height / 2 }px;

    background: linear-gradient(180deg, #FFF 0%, #EEE 100%);
    box-shadow: 10px 10px 10px rgba(0,0,0,0.1);

    &:after {
        content: ' ';
        position: absolute;
        top: ${ (height - gSize) / 2 }px;
        right: ${ (height - gSize) / 2 }px;
        width: ${ gSize }px;
        height: ${ gSize }px;
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`;

const Input = styled.input`
    width: calc(100% - ${ height + gSize }px);
    height: 100%;
    padding: 0 ${ size % 2 } 0 ${ height / 2 }px;
    line-height: ${ height }px;
    font-size: 18px;
    border: none;
    border-radius: ${ height / 2 }px;
    background: none;
    font-family: 'Kanit', sans-serif;

    &:focus {
        outline: none;
    }
`;

export { Form, Input };