import React, { useEffect, useRef } from 'react';
import './styles.css';

export const AutoResizingTextarea = ({ value, onChange, ...props }) => {
 const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = '40px';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [value]);

    return (
        <textarea
            className='message-input'
            ref={textareaRef}
            value={value}
            onChange={e => onChange(e.target.value)}
            {...props}
        />
    );
}