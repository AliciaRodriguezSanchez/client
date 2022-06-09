import React from 'react';
import logo from '../../images/langai-logo.svg';
import useStyles from './header.style';

const Header = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
         <img src={logo} alt="langai"/>
      </div>
)};
export default Header;