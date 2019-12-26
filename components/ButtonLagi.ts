import { Button  } from '@material-ui/core';
import { withStyles ,Theme  } from '@material-ui/core/styles';

interface StyleProps {
  warna ?: 'white' | 'orange';
  backgroundColor : '#F17C16' | 'rgba(241, 124, 22, 0.25)' | 'rgba(224, 113, 15, 0.4)'
  
}

export const ButtonSolid = 
  withStyles({
      root: (props: StyleProps) => ({
          textTransform: 'none',
          color: props.warna,
          backgroundColor: props.backgroundColor,
          '&:hover' : {
              backgroundColor: props.backgroundColor,
          },
    })
})(Button);

export const ButtonPale = 
  withStyles({
      root: (props: StyleProps) => ({
          textTransform: 'none',
          color: props.warna,
          backgroundColor: props.backgroundColor,
          '&:hover' : {
              backgroundColor: props.backgroundColor,
      },
    })
})(Button);

export const ButtonReverse = 
  withStyles({
          root: (props: StyleProps) => ({
          textTransform: 'none',
          color: props.warna,
      })
  })(Button)
