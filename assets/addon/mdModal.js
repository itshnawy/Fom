// Append CDN
var script = document.createElement('script');
script.src = `./assets/addon/zero-md.min.js`;
script.type = "module"
document.head.appendChild(script);


function mdModal(
    src,
    dir = "ltr",
    header = "",
    bg = "#ffffff",
    fontSrc = `./assets/addon/fonts.css`,
    fontName = "Tajawal",
    ) {
        let overlay = document.createElement('div');
        overlay.id = 'overlay';
        document.body.appendChild(overlay)
    
    // Create modal container
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("mdModal");
    // Add modal styles

    const style = document.createElement("style");
    style.id = "mdStyle";
    style.innerHTML = `@import url('./assets/addon/modal.css');.mdModal {background: ${bg};}`;
    document.head.appendChild(style);

    // Modal content
    modalContainer.innerHTML = `
    <button id="close-btn" title="Close Button" style="color:${bg === "#000" || bg === "#000000" ? '#fff' : '#000'}">&times;</button>
    <h1 class="modalheader" style="color:${bg === "#000" || bg === "#000000" ? '#fff' : '#000'}">${header}</h1>
    <zero-md id="mdContainer" class="${header !== "" ? 'h' : ''}" src="${src}" dir="${dir}">
            <template>
                <link id="mainmdstyle" rel="stylesheet" href="${bg === "#000" || bg === "#000000" ? './assets/addon/md-dark.css' : './assets/addon/md.css'}" />
                <link rel="stylesheet" href="./assets/addon/hili.css" />
                <style>@import url('${fontSrc}');*{font-family: "${fontName}";}</style>
            </template>
        </zero-md>`;
    // Append modal container to the body
    const modalOpening = [
        { transform: "scale(0)" },
        { transform: "scale(1)" },
      ];
      
      const modalOpeningTiming = {
        duration: 210,
        iterations: 1,
      };
      
        document.body.appendChild(modalContainer);
        modalContainer.animate(modalOpening, modalOpeningTiming)

    // Disable scrolling on the body
    document.body.style.overflow = "hidden";

    // Event listener for closing the modal

    function colsefn() {
        const modalClosing = [
            { transform: "scale(1)" },
            { transform: "scale(0)" },
          ];
          
          const modalClosingTiming = {
            duration: 210,
            iterations: 1,
          };

    var animation = modalContainer.animate(modalClosing, modalClosingTiming);
    animation.onfinish= function(){
    document.body.style.overflow = "auto";
    const mdStyle = document.getElementById("mdStyle");
    if (mdStyle) mdStyle.remove();
    modalContainer.remove();
    overlay.remove();
}
    }

    const closeButton = modalContainer.querySelector("#close-btn");
    const ov = document.getElementById('overlay');
    closeButton.addEventListener("click", colsefn)
    ov.addEventListener('click', colsefn)


}

