import React from 'react';

interface ButtonProps {
    title: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    title,
    size = 'medium',
    shape = 'rounded-md',
    onClick
}) => {
    const sizeClasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

    const buttonClasses = `
    ${sizeClasses[size]}
    ${shape}
    bg-blue-500
    text-white
    font-semibold
    hover:bg-blue-600
    transition-colors
    duration-200
    border border-transparent
  `.trim().replace(/\s+/g, ' ');

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
