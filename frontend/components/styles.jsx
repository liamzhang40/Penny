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
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8.5px 11px;

    margin-left: ${props => props.marginOn ? "6px" : "0"};
    border-color: ${props => props.selected ? "#348c42" : "#ccc"};
    color: ${props => props.selected ? "#348c42" : "#333"};
    background-color: ${props => props.selected ? "#c4f3a4" : "#fff"};
    z-index: ${props => props.selected ? "1" : "0"};

    &:hover {
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.1);
    }
`;