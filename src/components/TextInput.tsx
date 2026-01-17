import { useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';

const TextInput = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  backgroundColor = '#1F1F23',
  onOtpClick
}: {
  type?: string;
  value?: string;
  onOtpClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  backgroundColor?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (type === 'password') {
    return (
      <div className="relative w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ backgroundColor }}
          className={`w-full border rounded-[10px] border-transparent placeholder:text-sm text-sm px-4 pr-12 h-[40px] text-white placeholder:opacity-30 focus:outline-none focus:border-[#6B2CE9] transition ${className}`}
        />

        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <Eye className="cursor-pointer" size={18} />
          ) : (
            <EyeClosed className="cursor-pointer" size={18} />
          )}
        </button>
      </div>
    );
  } else if (type === 'otp') {
    return (
      <div className="relative w-full flex items-center gap-4">
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ backgroundColor }}
          className={`w-full border rounded-[10px] border-transparent placeholder:text-sm text-sm px-4 pr-28 h-[40px] text-white placeholder:opacity-30 focus:outline-none focus:border-[#6B2CE9] transition ${className}`}
        />

        <button
          type="button"
          onClick={onOtpClick}
          className="text-[#A77BFF] cursor-pointer font-medium text-sm w-fit absolute right-4 top-1/2 -translate-y-1/2"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          Resend code
        </button>
      </div>
    );
  } else {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ backgroundColor }}
        className={`w-full border rounded-[10px] border-transparent placeholder:text-sm text-sm px-4 h-[40px] text-white placeholder:opacity-30 focus:outline-none focus:border-[#6B2CE9] transition ${className}`}
      />
    );
  }
};

export default TextInput;
