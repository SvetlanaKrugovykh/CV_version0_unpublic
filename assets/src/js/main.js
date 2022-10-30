const slyleChoiceChBx = document.getElementById('highload1');
slyleChoiceChBx.addEventListener('change', slyleChoiceChBxHandler);


function slyleChoiceChBxHandler() {
	if (slyleChoiceChBx.checked) {
		changeCSS('assets/dist/style2.min.css', 0);
	} else {
		changeCSS('assets/dist/style1.min.css', 0);
	}
}

function changeCSS(cssFile, cssLinkIndex) {

    let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    let newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

