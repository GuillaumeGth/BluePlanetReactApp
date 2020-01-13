import React, { useState } from 'react';
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
  shrinkedLabel:{
    fontSize: ['1.4rem', '!important'],
    fontWeight: '600'
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
  const [value, setValue] = useState();
  const [error, setError] = useState(false);
  // const [selected, setSelected] = useState(false);
  const {multiline, label, required, classes, type} = props;
  const getIcon = (icon) => {
    if(icon){
      const resolvedIcon = require(`@material-ui/icons/${props.icon}`).default;
      return React.createElement(resolvedIcon);
    }
    return null;
  };
  const GridContainer = styled(Grid)`
    margin: 10px 0 !important;
  `;

  const validate = (input) => {    
    if(input.getAttribute('required') !== null && input.value.trim().length === 0){
      setError(true);
      return false;
    }
    setError(false);
    return true;
  }

  return (
    <GridContainer container spacing={1} alignItems="flex-end" className="textfield-grid">
      <Grid item className="textfield-icon">
        { getIcon(props.icon) }
      </Grid>
      <Grid item>
        <TextField
        error={error}
        type={type || 'text'}
        multiline = {multiline ? true: false}
        required={required ? true : false}
        label={label}
        defaultValue={value}
        onBlur={(e) => {
            setValue(e.target.value);
            if(validate(e.target)){
              props.onChange(e.target.value);
            }
          }
        }
        InputLabelProps={
          {classes: {
            shrink: classes.shrinkedLabel,
            root: classes.label, 
            focused: classes.focusedLabel
            }
          }}
        InputProps={{
          // key: `${props.id}_controlfield`,
          // id: `${props.id}_controlfield`,
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