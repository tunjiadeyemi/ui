export interface TextInputProps {
  type?: 'password' | 'otp' | 'text' | 'email' | 'number';
  value?: string;
  onOtpClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  backgroundColor?: string;
  validate?: boolean;
  minLength?: number;
  maxLength?: number;
  errorMessage?: string;
  borderColor?: string;
  textColor?: string;
  borderRadius?: string;
  height?: string;
  width?: string;
  eyeIcon?: React.ReactNode;
  eyeClosedIcon?: React.ReactNode;
}
