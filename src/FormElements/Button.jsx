import React from "react";

export default ({
	Button,
	Loading,
	text,
	showLoading,
	className,
	isDisabled,
	icon
}) => {
	const SButton = Button ? Button : "button";
	return (
		<SButton
			type="submit"
			className={`form-submit-button button ${className}`}
			disabled={showLoading || isDisabled}
			mr={20}
		>
			{showLoading && Loading ? <Loading inline /> : text}
			{text}
		</SButton>
	);
};
