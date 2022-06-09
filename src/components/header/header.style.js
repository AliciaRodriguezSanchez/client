import {createUseStyles} from 'react-jss';

export default createUseStyles({
 root: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    padding: '0px 30px',
    height: '70px',
    width:'100%',
    position:'fixed',
    backgroundColor:'white',
    zIndex:1,
    boxShadow: '0 6px 15px 0 rgb(36 46 109 / 6%)', 
    '& img': {
        height: '40px',
        paddingLeft: '10px',
    }
 }
});