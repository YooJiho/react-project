import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        const loginBtn = (
            <a className="f-25 block btn-square relative">
                <i className="material-icons acenter">person</i>
            </a>
        );

        const logoutBtn = (
            <a className="f-25 block btn-square relative">
                <i className="material-icons acenter">exit_to_app</i>
            </a>
        );

        return (
            <header>
                <div className="fixed-top header">
                    <a className="logo center">
                        <h3 className="padding-15">MEMO'JI</h3>
                    </a>

                    <div className="fleft">
                        <a className="f-25 block btn-square relative">
                            <i className="material-icons acenter">search</i>
                        </a>
                    </div>

                    <div className="fright">
                        { this.props.isLogin ? logoutBtn : loginBtn }
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    isLogin : PropTypes.bool,
    onLogout : PropTypes.func
}

Header.defaultProps = {
    isLogin : false,
    onLogout : () => { console.log('onLogout function not defined'); }
}

export default Header;