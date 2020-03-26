import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <CircularProgress style={{
                width: '50px',
                height: '50px',
                position: 'absolute',
                marginLeft: '27%',
                marginTop: '40px'
            }} />
        </div>
    );
}