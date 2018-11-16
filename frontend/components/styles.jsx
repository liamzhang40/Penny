import styled, { css } from 'styled-components';

export const Button = styled.button`
    background-color: #bd1f1f;
    fill: #fff;

    &:hover {
        background-color: #a71c1c;
    }
`;

export const Label = styled.label`
    font-size: 14px;
    background-color: #fff;
    padding: 8px 12px;
    border-radius: 4px 0 0 4px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export const FilterButton = styled.li`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8.5px 11px;
    margin-left: ${props => props.marginOn ? "6px" : "0"};

    &:hover {
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.1);
    }
`;