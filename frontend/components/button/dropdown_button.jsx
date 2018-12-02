import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    position: relative;
    display: inline-block;
`;

class DropdownButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (this.state.visible) {
            if (this.props.insideClickOn &&
                this.node.contains(e.target)) return;
            document.removeEventListener('click', this.handleClick, false);
        } else {
            document.addEventListener('click', this.handleClick, false);
        }

        this.setState({ visible: !this.state.visible });
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    render() {
        const { buttonContent, dropdownContent } = this.props;
        return (
            <ButtonContainer
                onClick={this.handleClick}>
                {buttonContent()}
                <div ref={node => { this.node = node; }}>
                    {this.state.visible &&
                        dropdownContent()
                    }
                </div>
            </ButtonContainer>
        );
    }
}

export default DropdownButton;