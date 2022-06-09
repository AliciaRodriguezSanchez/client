import {createUseStyles} from 'react-jss';

export default createUseStyles({
    root:{
        textAlign:'left',
        margin: '0% 7%',
        height: '100%',
        overflow: 'auto',
        position:'relative',
        zIndex:0,
        top:'70px',
        marginBottom: '150px',
    },
    title:{
        display:'flex',
        justifyContent:'left',
    },
    h1: {
        fontSize: '25px',
        fontWeight: 600,
        color: '#3e4eb8',
    },
    subtitle:{
        fontSize: '20px',
        lineHeight: '30px',
        padding:'8px 20px',
        backgroundColor: '#f6f8fa',
        color:'#3e4eb8',
        fontFamily: 'Rubik, sans-serif',
    },
    searchTag:{
        padding:'5px 25px',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        fontFamily: 'Rubik, sans-serif',
        
    },
    input:{
        border:'1px solid #eaecf7',
        borderRadius: '5px',
        color:'#353e44',
        padding: '10px',
        lineHeight:'30px',
        width:'65%',
        fontFamily: 'Rubik, sans-serif',
    },
    btn:{
        color:'#f7fafc',
        border:'1px solid #eaecf7',
        borderRadius: '5px',
        backgroundColor:'#00a7f7',
        fontWeight: 800,
        lineHeight:'30px',
        textAlign: 'center',
        padding: '10px',
        width:'30%',
        fontFamily: 'Rubik, sans-serif',
    },
    tags:{
        display:'flex',
        justifyItems:'center',
        justifyContent: 'center',
        backgroundColor: '#3e4eb8',
        margin: '5px',
        borderRadius: '5px',
        '& p':{
            margin:'0px',
            padding: '5px 15px',
            color:'#f7fafc',
            fontWeight: 800,
            lineHeight:'30px',
            fontFamily: 'Rubik, sans-serif',
            
            
        },
        '& p:first-child': {
            borderRight: '1px solid #ffff',
        }
    },
    noResult:{
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 600,
        color: '#3e4eb8',
    },
    form:{
        display:'flex',
        justifyContent:'space-between',
    },
    formA:{
        width:'58%',
        
    },
    formB:{
        width:'40%',
    },
    headList:{
        borderBottom:'1px solid #eaecf7',
        width:'100%',
        '& p':{ 
            color:'#5d6366;',
            fontFamily: 'Rubik, sans-serif',
            paddingLeft: '10px',
            margin: '5px',
            textTransform:'capitalize',
        }
    },
    lastSearch:{
        padding:'5px 25px',
        alignItems:'center',
        fontFamily: 'Rubik, sans-serif',
    },
    list:{
        paddingLeft:'10px',
        width:'inherit',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& div p':{ 
            color:'#5d6366;',
            fontFamily: 'Rubik, sans-serif',
            margin: 0,
            padding: '10px 15px'
        },
        '& div:last-child': {
            textAlign: 'right',
        },
    },
    resultList:{
        padding:'0 px 5px',
        display: 'flex',
        alignItems:'center',
        fontFamily: 'Rubik, sans-serif',
        texttransform:'capitalize',
    },
    divul: {
        'list-style-type': 'none',
        margin: '0px',
        padding:'0px',
        '& li':{
            display: 'inline-block',
        }
    },
});