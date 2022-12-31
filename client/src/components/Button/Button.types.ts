import { MouseEventHandler } from 'react';

export interface ButtonProps {
  label: string;
  variant: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
