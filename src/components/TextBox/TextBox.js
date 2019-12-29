import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import './TextBoxStyle.css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  label: {
    color: ['#252627', '!important'],
    fontSize: ['1.2rem', '!important']
  },
  filledLabel:{
    fontSize: ['1.2rem', '!important']
  },
  focusedLabel: {
    color: ['#e5a900', '!important'],
    fontWeight: 'bold',
    fontSize: ['1.4rem', '!important']
  },
  underline: {
    '&:before': {
      borderBottomColor: '#252627',
    },
    '&:after': {
      borderBottomColor: '#e5a900',
    },
    '&:hover:before': {
      borderBottomColor: ['#252627', '!important'],
    },
  },
  textField: {
    width: '800px'
  }
})

const TextBox = (props) =>{
  const {multiline, label, required, classes} = props;
  const getIcon = (icon) => {
    if(icon){
      const resolvedIcon = require(`@material-ui/icons/${props.icon}`).default;
      return React.createElement(resolvedIcon);
    }
    return null;
  };
  const GridContainer = styled(Grid)
  `margin: 5px 0 !important;
  `;
  return (
    <GridContainer container spacing={1} alignItems="flex-end" className="textfield-grid">
      <Grid item className="textfield-icon">
        { getIcon(props.icon) }
      </Grid>
      <Grid item>
        <TextField 
        color="green"
        multiline = {multiline ? true: false}
        required={required ? true : false}
        label={label}
        InputLabelProps={
          {classes: {
            filled: classes.filledLabel,
            root: classes.label, 
            focused: classes.focusedLabel
            }
          }}
        InputProps={{
          classes: {             
            underline:  classes.underline,
            root: classes.textField
          },
        }}/>
      </Grid>
    </GridContainer>

      
  )
}

export default withStyles(styles)(TextBox);