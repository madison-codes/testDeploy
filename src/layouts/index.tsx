import * as React from 'react';
import AppBar from '../components/AppBar';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

import '../styles/_main.scss';
import 'prismjs/themes/prism.css';

const mainStyleOpen = {
    width: 'calc(100vw - 240px)',
    marginLeft: '240px'
};

const mainStyleClose = {
    width: 'calc(100vw - 62px)',
    marginLeft: '62px',
};

interface AppProps {
    children: any;
    data: any;
}

interface AppState {
    open: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
    state = {
        open: true,
    };

    handleDrawer = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;
        return (
            <div id="main">
                <Helmet title={`${siteTitle}`} />
                <AppBar />
                <SideNav navOpen={this.state.open} toggle={this.handleDrawer} />
                <div id="main-content-container" style={this.state.open ? mainStyleOpen : mainStyleClose}>
                    {this.props.children()}
                    <Footer />
                </div>
            </div>
        );
    }
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;