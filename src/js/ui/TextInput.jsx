import React, { PropTypes, Component } from "react";
import { findDOMNode } from "react-dom";
import cn from "classnames";

const TextInput = ({ name: _name, placeholder, className, value }) => ( 
	<input
		type="text"
		name={_name}
		placeholder={placeholder}
		className={cn(className, "textInput")}
		value={value}
	/>
);

TextInput.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	value: PropTypes.string
};

TextInput.defaultProps = {
	name: "textInput"
};

module.exports =TextInput;