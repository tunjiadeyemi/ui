import { useState, useEffect } from 'react';
import { Eye, EyeClosed } from 'lucide-react';
import { TextInputProps } from './types';

const Input = ({
  onChange,
  onOtpClick,
  validate = false,
  type,
  value,
  minLength,
  maxLength,
  className,
  placeholder,
  errorMessage,
  width = '100%',
  height = '40px',
  color = '#6B2CE9',
  textColor = 'white',
  borderRadius = '10px',
  backgroundColor = '#1F1F23',
  eyeIcon = <Eye className="cursor-pointer" size={18} />,
  eyeClosedIcon = <EyeClosed className="cursor-pointer" size={18} />
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateInput = (inputValue: string = '') => {
    if (!validate) {
      setError(null);
      return true;
    }

    // --- check min length
    if (minLength && inputValue.length < minLength) {
      setError(errorMessage || `Minimum ${minLength} characters required`);
      return false;
    }

    // --- check max length
    if (maxLength && inputValue.length > maxLength) {
      setError(errorMessage || `Maximum ${maxLength} characters allowed`);
      return false;
    }

    // -- type-specific validation
    switch (type) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (inputValue && !emailRegex.test(inputValue)) {
          setError(errorMessage || 'Invalid email address');
          return false;
        }
        break;

      case 'password':
        if (!minLength && inputValue.length < 8) {
          setError(errorMessage || 'Password must be at least 8 characters');
          return false;
        }
        break;

      case 'otp':
        if (inputValue && !/^\d*$/.test(inputValue)) {
          setError(errorMessage || 'OTP must contain only numbers');
          return false;
        }
        if (!minLength && !maxLength && inputValue.length !== 6) {
          setError(errorMessage || 'OTP must be 6 digits');
          return false;
        }
        break;

      case 'number':
        if (inputValue && isNaN(Number(inputValue))) {
          setError(errorMessage || 'Must be a valid number');
          return false;
        }
        break;
    }

    setError(null);
    return true;
  };

  useEffect(() => {
    if (validate && value !== undefined) {
      validateInput(value);
    }
  }, [value, validate, minLength, maxLength, type]);

  if (type === 'password') {
    return (
      <div style={{ width }}>
        <div className="relative" style={{ width: '100%' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{
              backgroundColor,
              color: textColor,
              borderRadius,
              height,
              width: '100%'
            }}
            className={`border ${error ? 'border-red-500' : 'border-transparent'} placeholder:text-sm text-sm px-4 pr-12 placeholder:opacity-30 focus:outline-none transition ${className}`}
            onFocus={(e) => !error && (e.target.style.borderColor = color)}
            onBlur={(e) => (e.target.style.borderColor = error ? '#ef4444' : 'transparent')}
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? eyeIcon : eyeClosedIcon}
          </button>
        </div>
        {error && <p className="text-red-500 text-xs mt-1 px-1">{error}</p>}
      </div>
    );
  } else if (type === 'otp') {
    return (
      <div style={{ width }}>
        <div className="relative flex items-center gap-4" style={{ width: '100%' }}>
          <input
            type="number"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{
              backgroundColor,
              color: textColor,
              borderRadius,
              height,
              width: '100%'
            }}
            className={`border ${error ? 'border-red-500' : 'border-transparent'} placeholder:text-sm text-sm px-4 pr-28 placeholder:opacity-30 focus:outline-none transition ${className}`}
            onFocus={(e) => !error && (e.target.style.borderColor = color)}
            onBlur={(e) => (e.target.style.borderColor = error ? '#ef4444' : 'transparent')}
          />

          <button
            type="button"
            onClick={onOtpClick}
            className="text-[#A77BFF] cursor-pointer font-medium text-sm w-fit absolute right-4 top-1/2 -translate-y-1/2"
            aria-label="Resend code"
          >
            Resend code
          </button>
        </div>
        {error && <p className="text-red-500 text-xs mt-1 px-1">{error}</p>}
      </div>
    );
  } else {
    return (
      <div style={{ width }}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            backgroundColor,
            color: textColor,
            borderRadius,
            height,
            width: '100%'
          }}
          className={`border ${error ? 'border-red-500' : 'border-transparent'} placeholder:text-sm text-sm px-4 placeholder:opacity-30 focus:outline-none transition ${className}`}
          onFocus={(e) => !error && (e.target.style.borderColor = color)}
          onBlur={(e) => (e.target.style.borderColor = error ? '#ef4444' : 'transparent')}
        />
        {error && <p className="text-red-500 text-xs mt-1 px-1">{error}</p>}
      </div>
    );
  }
};

export default Input;
