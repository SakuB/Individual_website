import React, { Component, PropTypes } from 'react';

import {
  Tip,
  TipText,
} from './components';

let timer = '';

class ToolTip extends Component {
  state = {
    open: '',
    close: '',
  }

  handleMouseEnter = () => {
    timer = setTimeout(() => {
      this.setState({ open: true });
    }, 500);
  }

  handleMouseLeave = () => {
    clearTimeout(timer);
    this.setState({ close: true });
    setTimeout(() => {
      this.setState({ open: false, close: false });
    }, 250);
  }

  render() {
    const { children, hintText } = this.props;
    return (
      <Tip
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
        {this.state.open ?
          <TipText open={this.state.close}>
            {hintText}
          </TipText> :
          null}
      </Tip>
    );
  }
}

ToolTip.propTypes = {
  children: PropTypes.object,
  hintText: PropTypes.string,
};

export default ToolTip;
