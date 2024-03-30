// Append CDN

var script = document.createElement('script');
script.src = `./assets/addon/zero-md.min.js`;
script.type = "module"
document.head.appendChild(script);

// mdModal Function
function mdModal(
  src,
  dir = "ltr",
  header = "",
  bg = "#ffffff",
  fontSrc = `./assets/addon/fonts.css`,
  fontName = "Tajawal",
    ) {

    // Parameter Validation
    if (typeof src !== 'string' || src.trim() === '' || typeof fontSrc !== 'string'|| fontSrc.trim() === '') {
      throw new Error('src or fontSrc parameter must be a non-empty string.');
    }

    if (!['ltr', 'rtl'].includes(dir)) {
      throw new Error('Invalid dir parameter. Valid values are "ltr" or "rtl".');
    }

    // vars
    let overlay = document.createElement('div');
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("mdModal");
    overlay.id = 'overlay';
    let body = document.body;

    // append model style
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

    // modal opening animation
    const modalOpening = [
      { transform: "scale(0)" },
      { transform: "scale(1)" },
      ];
      
    const modalOpeningTiming = {
      duration: 210,
      iterations: 1,
      };

    // Append modal container and overlay to the body

    body.appendChild(overlay)
    body.appendChild(modalContainer);
    modalContainer.animate(modalOpening, modalOpeningTiming)

    // Disable scrolling on the body
    
    body.style.overflow = "hidden";

    // closing modal Function

    function colseFn() {
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
        body.style.overflow = "auto";
        const mdStyle = document.getElementById("mdStyle");
        if (mdStyle) mdStyle.remove();
        modalContainer.remove();
        overlay.remove();
        }
      }
    // closing
    const closeButton = modalContainer.querySelector("#close-btn");
    closeButton.addEventListener("click", colseFn)
    overlay.addEventListener('click', colseFn)
}

