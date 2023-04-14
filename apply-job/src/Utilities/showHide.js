const showHide = (divId, style) => {
	const x = document.getElementById(divId);
	if (x.style.display === style) {
		x.style.display = "none";
	} else {
		x.style.display = style;
	}
};
export { showHide };
