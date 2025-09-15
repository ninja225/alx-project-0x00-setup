export interface PillProps {
    title: string;
}

export interface ButtonStyles {
    styles: string;
}

export interface ButtonProps extends ButtonStyles {
    title: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-full';
    onClick?: () => void;
}