import React from 'react';

const Button = ({ children, backgroundColor = 'red', size = "md", onClick }) => {
    let scale = 1;
    if (size === 'sm') scale = 0.75;
    if (size === 'lg') scale = 1.5;
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        color: '#fff',
        border: 'none'
    }
    return (
        <button className="button" onClick={onClick} style={style}>
            {children}
        </button>
    )
}

export default Button;