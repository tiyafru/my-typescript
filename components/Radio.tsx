import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiRadio from '@material-ui/core/Radio';

interface Props {
  color?: 'primary' | 'secondary' | 'default';
  disabled?: boolean;
  label?: string;
  width?: number;
  height?: number;
}

export function Radio(props) {
  const { label, ...other } = props;

  return <FormControlLabel control={<MuiRadio />} label={label} {...other} />;
}

Radio.defaultProps = {
  color: 'secondary',
  disabled: false,
  label: 'Radio',
  width: '100%',
  height: 42,
};
