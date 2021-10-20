import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../assets/sass/main.scss';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <>
        <Helmet
          title="EthPDX"
          meta={[
            { name: 'description', content: 'EthPDX' },
            { name: 'keywords', content: 'site, web' },
          ]}
        >
          <html lang="en" />
        </Helmet>
          <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
            {children}
          </div>
        </>
      )}
    }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
