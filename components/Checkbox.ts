import { Checkbox  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const checkboxColor = {
  chekedColor: '#F17C16',
  primaryColor: '#f09546'
}

export const PrimaryCheckbox = 
  withStyles({
      root: {
        textTransform: 'none',
        color: checkboxColor.primaryColor,
        '&$checked': {
          color: checkboxColor.chekedColor,
        },
      },
      checked: {},
  })(Checkbox);