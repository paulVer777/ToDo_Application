import React from 'react'
import Button from '@material-ui/core/Button';


const styles = {

    header: {
        textAlign: 'center',
        fontSize: '3em',
        borderBottom:'3px solid #3f51b5',
        padding:'2em 0'
    },
    span__h3: {
        color: '#3f51b5'
    },
    button: {

        left:'50%',
        transform:'translateX(-50%)',
        fontSize:'0.8em',
        marginTop:'5em',
        backgroundColor:'#3f51b5'
    }
}

const LoginByGoogle = (props) => (

    <div>
        <h1 style={styles.header}>ToDo <span style={styles.span__h3}>App &#9400;</span></h1>
        <Button color={"secondary"} variant={"contained"}
                onClick={props.logIn}
                style={styles.button}
        >Login By Google</Button>

    </div>
);

export default LoginByGoogle