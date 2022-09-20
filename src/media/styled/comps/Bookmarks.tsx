import styled from 'styled-components';

const Bookmarks = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    background: #313442;
    border-top: 1px solid #181A20;
    border-bottom: 1px solid #181A20;
    max-height: 35px;
    overflow: hidden;
    opacity: 0;

    &.in {
        opacity: 1;
    }

    a {
        display: inline-block;
        padding: 0.5rem;
        color: #FFF;
        text-decoration: none;
        font-weight: 400;

        img {
            height: 14px;
            width: 14px;
            margin-right: 5px;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Card = styled.div``;

export { Bookmarks, Card };