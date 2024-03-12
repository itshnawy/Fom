// Append CDN
var script = document.createElement('script');
script.src = 'https://mdmodal.vercel.app/assets/addon/zero-md.min.js';
script.type = "module"
document.head.appendChild(script);


function mdModal(
    src,
    dir = "ltr",
    header = "",
    bg = "#ffffff",
    fontSrc = "https://mdmodal.vercel.app/assets/addon/fonts.css",
    fontName = "Tajawal",
    ) {
    // Create modal container
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("mdModal");
    // Add modal styles

    const style = document.createElement("style");
    style.id = "mdStyle";
    style.innerHTML = `@import url('https://mdmodal.vercel.app/assets/addon/modal.css');.mdModal {background: ${bg};}`;
    document.head.appendChild(style);

    // Modal content
    modalContainer.innerHTML = `
    <button id="close-btn" title="Close Button" style="color:${bg === "#000" || bg === "#000000" ? '#fff' : '#000'}">✖</button>
    <h1 class="modalheader" style="color:${bg === "#000" || bg === "#000000" ? '#fff' : '#000'}">${header}</h1>
    <zero-md id="mdContainer" src="${src}" dir="${dir}">
            <template>
                <link id="mainmdstyle" rel="stylesheet" href="${bg === "#000" || bg === "#000000" ? 'https://mdmodal.vercel.app/assets/addon/md-dark.css' : 'https://mdmodal.vercel.app/assets/addon/md.css'}" />
                <link rel="stylesheet" href="https://mdmodal.vercel.app/assets/addon/hili.css" />
                <style>@import url('${fontSrc}');*{font-family: "${fontName}";}</style>
            </template>
        </zero-md>`;
    // Append modal container to the body
    document.body.appendChild(modalContainer);

    // Disable scrolling on the body
    document.body.style.overflow = "hidden";

    // Event listener for closing the modal
    const closeButton = modalContainer.querySelector("#close-btn");
    if (closeButton) {  
    closeButton.addEventListener("click", function() {

        document.body.style.overflow = "auto";
        const mdStyle = document.getElementById("mdStyle");
        if (mdStyle) mdStyle.remove();
        modalContainer.remove();
    })
} else {
    console.error("Close button not found.");
};

}
