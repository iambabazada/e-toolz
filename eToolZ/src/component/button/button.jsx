import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
    variant,
    size,
    className,
    rounded,
    children,
    icon,
    block,
    ...restProps
}) => {
    const buttonClasses = classNames(
        'button',
        {
            'rounded-full': rounded,
            'block': block,
        },
        {
            'bg-primary text-white': variant === 'primary',
            'outline outline-textColor': variant === 'outline',
            'button--text': variant === 'text',
            'button--link': variant === 'link',
        },
        size === 'sm' && 'py-1 px-3',
        size === 'md' && 'py-2 px-5',
        size === 'lg' && 'py-3 px-7',
        className
    );

    return (
        <button className={buttonClasses} {...restProps}>
            {icon && <span className="button__icon">{icon}</span>}
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'outline', 'text', 'link']),
    size: PropTypes.string,
    className: PropTypes.string,
    rounded: PropTypes.bool,
    children: PropTypes.node.isRequired,
    icon: PropTypes.node,
    block: PropTypes.bool,
};

export default Button;
