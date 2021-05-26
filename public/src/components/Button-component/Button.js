import React, { useState } from 'react';
import './Button.css';
import PropTypes from "prop-types";


const Button = ({ children,size, btnColor,labelColor, type, isDisabled, icon, isBusy, style }) => {
	const [ hover,	setHover ] = useState(false);
  
  const toggleHover = () => { setHover(!hover)};
  
  Button.propTypes = {
    children: PropTypes.any,
    icon: PropTypes.any,
		size: PropTypes.any,
    isBusy: PropTypes.bool,
    isDisabled: PropTypes.bool,
    type: PropTypes.string,
    btnColor :PropTypes.string
  };

  
  Button.defaultProps = {
    children: undefined,
		size: 'default',
    icon: undefined,
    isBusy: false,
    isDisabled: false,
    btnColor: 'grey',
    type: "default"
  };

	const outlineStyles = {
		border          : `1px solid ${btnColor}`,
		color           : btnColor,
		backgroundColor : 'white',
  };
  
	const outlineHoverStyle = {
		color           : labelColor || 'white',
		backgroundColor : btnColor,
	};


	const disabledStyle = {
		cursor          : 'default',
		backgroundColor : btnColor,
		color           : labelColor || 'white',
		opacity         : 0.4
  };

	const smallBtn = {
		height					:'30px',
		fontSize				:'1rem'
	}

	const defaultHoverStyle= {
		backgroundColor   : btnColor,
		color							: labelColor || 'white',
	}

	const defaultStyle = {
		backgroundColor   : btnColor,
		color							: labelColor || 'white',
		opacity						: 0.8

	}
  
	const largeBtn = {
		height					:'60px',
		fontSize				:'1.4rem'
	}

  let btnStyle;
	let btnSize;
	switch (size) {
	
		case 'small':
			btnSize = smallBtn;
			break;

		case 'large':
			btnSize = largeBtn;
			break;
  }
  
	switch (type) {
	
		case 'outline':
			if (hover) {
				btnStyle = outlineHoverStyle;
			}
			else {
				btnStyle = outlineStyles;
			}
			break;
		default:
			if (hover) {
				btnStyle = defaultHoverStyle;
			}
			else {
				btnStyle = defaultStyle;
			}	
			break;
  }

	return (
		<button
			style={ isDisabled ? {  ...btnStyle, ...disabledStyle, ...style, ...btnSize } : {  ...btnStyle, ...style, ...btnSize }}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			type="button"
			className='btn'
			disabled={isDisabled}
		>
			<i className={icon} style={{marginRight:'10px'}}></i>
			{children || 'button'}
		</button>
	);
};

export default Button;
