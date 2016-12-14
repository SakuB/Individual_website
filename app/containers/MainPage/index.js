import React, { Component, PropTypes } from 'react';
// import QueueAnim from 'rc-queue-anim';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import LeftNav from './LeftNav';
import {
  fetchAuthInfo,
  changeNavActive,
  fetchAllArticle,
} from './actions';
import {
  selectAuthInfo,
  selectNavActive,
} from './selector';
import {
  MainPageContainer,
} from './styledComponents';

class MainPage extends Component {  // eslint-disable-line
  componentDidMount() {
    this.props.onFetchAuthInfo();
    this.props.onFetchAllArticle();
  }

  render() {
    const {
      children,
      authInfo,
      navActive,
      onNavActiveChange,
    } = this.props;
    return (
      <MainPageContainer>
        <LeftNav
          authInfo={authInfo}
          navActive={navActive}
          onNavActiveChange={onNavActiveChange}
        />
        {children}
      </MainPageContainer>
    );
  }
}

MainPage.propTypes = {
  authInfo: PropTypes.object,
  onFetchAuthInfo: PropTypes.func,
  children: PropTypes.object,
  navActive: PropTypes.number,
  onNavActiveChange: PropTypes.func,
  onFetchAllArticle: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authInfo: selectAuthInfo(),
  navActive: selectNavActive(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onFetchAllArticle: () => dispatch(fetchAllArticle()),
    onFetchAuthInfo: () => dispatch(fetchAuthInfo()),
    onNavActiveChange: (val) => dispatch(changeNavActive(val)),
  };
}

export default connect(mapStateToProps, mapDispatchTpProps)(MainPage);
