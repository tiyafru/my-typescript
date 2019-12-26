import { Button  } from '@material-ui/core';
import { withStyles ,Theme  } from '@material-ui/core/styles';

const color = {
    orangeTheme: '#F17C16',
    orangeHover: '#f09546',
    orangePale: 'rgba(241, 124, 22, 0.25)',
    orangePaleHover: 'rgba(224, 113, 15, 0.4)'
  };

export const ButtonSolid = 
    withStyles({
        root: {
            textTransform: 'none',
            color: 'white',
            backgroundColor: color.orangeTheme,
            '&:hover' : {
                backgroundColor: color.orangeHover,
            },
        }
  })(Button);

export const ButtonPale = 
    withStyles({
        root: {
            textTransform: 'none',
            color: color.orangeTheme,
            backgroundColor: color.orangePale,
            '&:hover' : {
                backgroundColor: color.orangePaleHover,
        },
    }
})(Button);

export const ButtonReverse = 
withStyles({
        root: {
        textTransform: 'none',
        color: color.orangeTheme,
    }
})(Button)
