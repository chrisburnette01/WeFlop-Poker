import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface BaseTextAreaProps {
    width?: string;
    size: 'large' | 'medium' | 'small';
    rightLine: boolean;
}

const TextAreaBase = styled('div')<BaseTextAreaProps>`
    .wrapper {
        animation: ${({ theme }) => theme.animations.text};
        opacity: 0%;
        position: relative;
        width: 100%;
        height: 100%;
        max-width: ${({ width }) => (width ? width : null)};
    }

    .textarea {
        font-size: ${({ theme }) => theme.typography.input1!.fontSize};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        color: ${({ theme }) => theme.palette.primary};
        letter-spacing: ${({ theme }) => theme.typography.input1?.letterSpacing};
        position: relative;
        width: ${({ width }) => (width ? width : '291px')};
        height: 100%;
        background: transparent;
        border-width: 0;
        border-radius: 4px;
        padding: ${({ size }) => (size === 'large' ? '0 10px' : size === 'medium' ? '0 8px' : '0 4px')};
        outline: none;
        margin: 0 8px 0 8px;
        resize: none;
    }

    .wrapper::after,
    .wrapper::before {
        background-color: ${({ theme }) => theme.palette.primary};
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: ${({ size }) => (size === 'large' ? '10px' : size === 'medium' ? '8px' : '4px')};
        height: 100%;
        border-radius: ${({ size }) => (size === 'large' || size === 'medium' ? '2px' : '1px')};
        margin-left: 3px;
    }

    .wrapper::before {
        left: 0;
    }

    .wrapper::after {
        display: ${({ rightLine }) => (rightLine ? 'block' : 'none')};
    }

    .input::placeholder {
        color: ${({ theme }) => theme.palette.primary};
        text-transform: uppercase;
    }
`;

interface TextAreaProps {
    width?: string;
    size: 'large' | 'medium' | 'small';
    className?: string;
    placeholder?: string;
    register?: (ref: any) => void;
    name?: string;
    disabled?: boolean;
    defaultValue?: string | number;
    onFocus?: any;
    autoresize?: boolean;
    rightLine?: boolean;
    onKeyDown?: () => void;
}

const TextArea = ({
    placeholder,
    name,
    register,
    disabled,
    defaultValue,
    onFocus,
    className,
    width,
    autoresize,
    size,
    rightLine,
    onKeyDown,
}: TextAreaProps) => {
    const [height, setHeight] = useState(autoresize ? 'auto' : '176px');
    const [text, setText] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (textareaRef!.current!.scrollHeight <= 200) {
            setHeight(`${textareaRef!.current!.scrollHeight}px`);
        } else {
            setHeight('200px');
        }
    }, [text]);

    const onChangeHandler = (event) => {
        setHeight('auto');
        setText(event.target.value);
    };

    return (
        <TextAreaBase className={className} width={width} size={size} rightLine={rightLine!}>
            <div className="wrapper">
                <textarea
                    onKeyDown={onKeyDown}
                    onFocus={onFocus}
                    defaultValue={defaultValue}
                    className="textarea"
                    name={name}
                    ref={(ref) => {
                        register!(ref);
                        textareaRef.current = ref;
                    }}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={(event) => autoresize && onChangeHandler(event)}
                    style={{ height }}
                />
            </div>
        </TextAreaBase>
    );
};

TextArea.defaultProps = {
    register: () => undefined,
    autoresize: false,
    rightLine: true,
};

export default TextArea;
