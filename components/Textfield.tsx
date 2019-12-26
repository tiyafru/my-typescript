import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const textboxColor = {
  textboxColor: '#F17C16'
}
export const StandartTextField = 
  withStyles({
      root: {
        textTransform: 'none',
        color: textboxColor.textboxColor,
        id: 'standard-basic',
        '& label.Mui-focused': {
          color: textboxColor.textboxColor,
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: textboxColor.textboxColor,
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: textboxColor.textboxColor,
          },
          '&:hover fieldset': {
            borderColor: textboxColor.textboxColor,
          },
          '&.Mui-focused fieldset': {
            borderColor: textboxColor.textboxColor,
          },
        },
      },
  })(TextField);
