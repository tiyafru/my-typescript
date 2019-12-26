import * as React from 'react';
import MuiButton from '@material-ui/core/Button';

interface Props {
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  label?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
}

const defaultProps: Props = {
  color: 'default',
  backgroundColor: '#F17C16',
  disabled: false,
  fullWidth: false,
  size: 'medium',
  variant: 'text',
  label: 'Button',
  width: 100,
  height: 38,
};

export const Button: React.SFC<Props> = (props: Props) => {
  const {
    height,
    backgroundColor,
    label,
    variant,
    width,
    ...other
  } = props;

  return (
    <div>
      <MuiButton variant={variant} {...other}>
        {label}
      </MuiButton>
    </div>
  );
};

Button.defaultProps = defaultProps;

