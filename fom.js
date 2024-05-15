import { loadCSS, loadJS, close } from './assets/js/functions.js';

const Fom = {
  currentLanguage: 'en',
  currentColor: '#ffffff',
  style: "./assets/css/modal.css",
  newMD: function(src) {
    // Parameter Validation
    if (typeof src !== 'string' || src.trim() === '') {
      throw new Error('src parameter must be a non-empty string.');
    }

    // Vars
    let p = document.body;
    let ov = document.createElement("div");
    let modal = document.createElement("div"); modal.id = "Fom_Modal";
    let BGTL = this.currentColor === "#000" || this.currentColor === "#000000" ? '#ffffff' : '#000000';
    let dir = this.currentLanguage === 'ar' ? "rtl" : "ltr";
    let dOrW = this.currentColor === "#000" || this.currentColor === "#000000" ? './assets/css/md-dark.css' : './assets/css/md.css';
    ov.id = "overlay";
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-body");
    modalContainer.classList.add("md");
    modalContainer.style.backgroundColor = this.currentColor;


    // append
    loadCSS(this.style)
    loadJS("./assets/js/zero-md.min.js", "module")

    // Modal Content
    modalContainer.innerHTML = `
        <button id="close-btn" title="Close Button" style="color:${BGTL}">&times;</button>
        <div class="header" style="color:${BGTL}"></div>
        <zero-md id="mdContainer" src="${src}" dir="${dir}">
         <template>
          <link rel="stylesheet" href="${dOrW}" />
          <link rel="stylesheet" href="./assets/css/hili.css" />
         </template>
        </zero-md>
        <div class="footer" style="color:${BGTL}"></div>
        `;

    modal.append(modalContainer)
    // modal opening animation
    const modalOpening = [{ transform: "scale(0)" }, { transform: "scale(1)" },];
    const modalOpeningTiming = { duration: 210, iterations: 1, };
    // append on the position
    p.appendChild(ov)
    p.appendChild(modal);
    modalContainer.animate(modalOpening, modalOpeningTiming)
    document.body.style.overflow = "hidden";


    // closing
    const closeButton = modalContainer.querySelector("#close-btn");
    closeButton.addEventListener("click", () => close(ov, modal, modalContainer))
    ov.addEventListener('click', () => close(ov, modal, modalContainer))

    // another features
    return {
      header: function(t) {
        const elm = document.createElement("h1");
        elm.textContent = t;
        let h = modalContainer.querySelector(".header");
        h.prepend(elm);
        let m = modalContainer.querySelector("#mdContainer")
        m.classList.add("m");
        return this;
      },
      footer: function(t) {
        const elm = document.createElement("p");
        elm.textContent = t;
        let f = modalContainer.querySelector(".footer");
        f.prepend(elm);
        let m = modalContainer.querySelector("#mdContainer")
        m.classList.add("m");
        return this;
      }
    }
  },
  new: function(content, headerText, buttonText) {
    // Parameter Validation
    if (typeof src !== 'string' || src.trim() === '') {
      throw new Error('src parameter must be a non-empty string.');
    }

    // Vars
    let p = document.body;
    let ov = document.createElement("div");
    let modal = document.createElement("div"); modal.id = "Fom_Modal";
    let BGTL = this.currentColor === "#000" || this.currentColor === "#000000" ? '#ffffff' : '#000000';
    let dir = this.currentLanguage === 'ar' ? "rtl" : "ltr";
    ov.id = "overlay";
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-body");
    modalContainer.style.backgroundColor = this.currentColor;


    // append
    loadCSS(this.style)
    loadJS("./assets/js/zero-md.min.js", "module")

    // Modal Content
    modalContainer.innerHTML = `
                    <button id="close-btn" title="Close Button" style="color:${BGTL}">&times;</button>
                    <div class="header" style="color:${BGTL}"><h1>${headerText}</h1></div>
                    <div id="modal-text" dir='${dir}'>
                    <p>${content}</p>
                      </div>
                    <div class="footer agree" style="color:${BGTL}"><button id="agreeColse">${buttonText}</button></div>
                    `;

    modal.append(modalContainer)
    // modal opening animation
    const modalOpening = [{ transform: "scale(0)" }, { transform: "scale(1)" },];
    const modalOpeningTiming = { duration: 210, iterations: 1, };
    // append on the position
    p.appendChild(ov)
    p.appendChild(modal);
    modalContainer.animate(modalOpening, modalOpeningTiming)
    document.body.style.overflow = "hidden";
    let m = modalContainer.querySelector("#mdContainer")
    m.classList.add("m");

    // closing
    const closeButton = modalContainer.querySelector("#close-btn");
    const agree = modalContainer.querySelector("#agreeColse");
    closeButton.addEventListener("click", () => close(ov, modal, modalContainer))
    ov.addEventListener('click', () => close(ov, modal, modalContainer))
    agree.addEventListener('click', () => close(ov, modal, modalContainer))
  },
  toast: function(text, position) {
    // Parameter Validation
    if (typeof text !== 'string' || text.trim() === '') {
      throw new Error('Text parameter must be a non-empty string.');
    }
    let BGTL = this.currentColor === "#000" || this.currentColor === "#000000" ? '#ffffff' : '#000000';
    loadCSS(this.style)

    let toastContainer = document.createElement('div');
    toastContainer.id = 'toast'
    let pos = position.trim() !== 'bottom' && position.trim() !== 'top' ? 'bottom' : position;

    toastContainer.innerHTML = `<p style='color: ${BGTL}'>${text}</p>`;
    toastContainer.style.backgroundColor = this.currentColor;
    toastContainer.style[position] = (pos === 'top' ? '30px' : '10px');
    document.body.appendChild(toastContainer);

  }
}

export default Fom;
