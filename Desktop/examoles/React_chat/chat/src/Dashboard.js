import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
//import Paper from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles=makeStyles(theme=>({
    root:{
        margin:'50px',
        padding:theme.spacing(3,2)
    },
    flex:{
        display:'flex',
        alignItems:'center'
    },
    topicWindow:{
        width:'30%',
        height:'300px',
        borderRight:'2px slid gery ' 
    },
    chatWindow:{
        width:'70%',
        height:'300px',
        padding:'20px'
    },
    chatBax:{
        width:'85%'
    },
    button:{
        width:'15%'
    },
}))

export default function Dashboard(){

    const[textValue,changeTextValue]=React.useState('')
   const classes=useStyles();
    return(
        <div>
            <div></div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                   Chat app
                </Typography>
                <Typography variant="h5" component="h5">
                    Topic placeholders
                </Typography>
                <div className={classes.flex} >
                    <div className={classes.topicWindow}>

                        <List>
                            {

                            ['topic'].map(topic=>(
                                <ListItem key={topic} button>

                                <ListItemText primary={topic} />
                            </ListItem>
                            ))
                            }
                       
                        </List>
                      
                    </div>
                    <div></div>
                    <div className={classes.chatWindow}>
                    <List>
                            {


                            [{from:'user',msg:'hello'}].map((chat,i)=>(
                                <div className={classes.flex} key={i} >
                                    <Chip label={chat.from} className={classes.Chip} />
                            <Typography variant='p'>{chat.msg}</Typography>
                               
                                </div>
                            ))
                            }
                       
                        </List>
                        
                    </div>
                </div>
                <div className={classes.flex} >
                <TextField
                  label="Standard"
                  className={classes.chatBax}
                  value={textValue}
                  onChange={e=>changeTextValue(e.target.value)}
                
                  />

                        <Button variant="contained" color="primary">
                            send
                        </Button>

                </div>
            </Paper>
        </div>
    )
}
