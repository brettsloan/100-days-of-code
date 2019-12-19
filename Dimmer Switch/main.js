function toggleLights() {
    if (getComputedStyle(document.documentElement).getPropertyValue('--lightness') === '60%') {
        document.documentElement.style.setProperty('--lightness', '100%');
        document.getElementById('dimmer').style.boxShadow  = "0px 10px 5px";
    } else {
        document.documentElement.style.setProperty('--lightness', '60%');
        document.getElementById('dimmer').style.boxShadow  = "0px 5px 5px";
    }

}