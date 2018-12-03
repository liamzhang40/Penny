import React from 'react';
import styled from 'styled-components';
import { Label } from '../styles';

const Input = styled.input`
    width: 250px;
`;

const Span = styled.span`
    margin-right: 10px;
    font-weight: 700;
`;

class RestaurantSearchFormInput extends React.Component {
    constructor() {
        super();

        this.state = {
            visible: false
        };
    }

    render() {
        const { labelContent, placeholder, setParentState } = this.props;

        return (
            <Label labelContent={labelContent}>
                <Span>{labelContent}</Span>
                <Input
                    type="text"
                    placeholder={placeholder}
                    onChange={setParentState}
                    onFocus={() => this.setState({ visible: !this.state.visible })}
                    onBlur={() => this.setState({ visible: !this.state.visible })} /> 
                {
                    this.state.visible &&
                    <div></div>
                }
            </Label>
        );
    }
}

export default RestaurantSearchFormInput;