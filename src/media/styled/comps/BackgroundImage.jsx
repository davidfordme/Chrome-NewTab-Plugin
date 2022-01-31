import styled from 'styled-components';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;

    &.ready {
        img {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    opacity: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s;
    -webkit-transition: opacity 1s;
`;

const DownloadButton = styled.a`
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    font-size: 0;
    &:hover {
        cursor: pointer;
    }
`;

export const bis = {
    Background: Background,
    Image : Image,
    DownloadButton: DownloadButton
};