import { Button  } from '@material-ui/core';
import { withStyles ,Theme  } from '@material-ui/core/styles';

const orangeTheme = '#F17C16';
const orangeHover = '#f09546';
// ini ada opacity, mengikuti mockup
const orangePale = 'rgba(241, 124, 22, 0.25)';
const orangePaleHover = 'rgba(224, 113, 15, 0.4)';

export const ButtonSolid = 
    withStyles({
        root: {
            textTransform: 'none',
            color: 'white',
            backgroundColor: orangeTheme,
            '&:hover' : {
                backgroundColor: orangeHover,
            },
        }
  })(Button);

export const ButtonPale = 
    withStyles({
        root: {
            textTransform: 'none',
            color: orangeTheme,
            backgroundColor: orangePale,
            '&:hover' : {
                backgroundColor: orangePaleHover,
        },
    }
})(Button);

export const ButtonReverse = 
withStyles({
        root: {
        textTransform: 'none',
        color: orangeTheme,
    }
})(Button)
