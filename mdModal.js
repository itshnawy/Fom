import { loadCSS, loadJS , close } from './assets/js/functions.js';

const mdModal = {
    currentLanguage: 'ar',
    currentColor : '#ffffff',
    style: "./assets/css/modal.css",
    new: function(src) {
        // Parameter Validation
        if (typeof src !== 'string' || src.trim() === '') {
        throw new Error('src parameter must be a non-empty string.');
        }

        // Vars
        let p = document.body;
        let ov = document.createElement("div");
        let modal = document.createElement("div"); modal.id = "modal";
        let BGTL = this.currentColor === "#000" || this.currentColor === "#000000" ? '#ffffff' : '#000000';
        let dir = this.currentLanguage === 'ar' ? "rtl" : "ltr";
        let dOrW = this.currentColor === "#000" || this.currentColor === "#000000" ? './assets/css/md-dark.css' : './assets/css/md.css';
        ov.id = "overlay";
        const modalContainer = document.createElement("div");
        modalContainer.classList.add("mdModal");
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
        const modalOpening = [{transform: "scale(0)"},{transform: "scale(1)"},];
        const modalOpeningTiming = {duration: 210,iterations: 1,};
        // append on the position
        p.appendChild(ov)
        p.appendChild(modal);
        modalContainer.animate(modalOpening, modalOpeningTiming)
        document.body.style.overflow = "hidden";


    // closing
    const closeButton = modalContainer.querySelector("#close-btn");
    closeButton.addEventListener("click", () => close(ov,modal,modalContainer))
    ov.addEventListener('click', () => close(ov,modal,modalContainer))

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
    agree: function(src,headerText,buttonText) {
                // Parameter Validation
                if (typeof src !== 'string' || src.trim() === '') {
                    throw new Error('src parameter must be a non-empty string.');
                    }
            
                    // Vars
                    let p = document.body;
                    let ov = document.createElement("div");
                    let modal = document.createElement("div"); modal.id = "modal";
                    let BGTL = this.currentColor === "#000" || this.currentColor === "#000000" ? '#ffffff' : '#000000';
                    let dir = this.currentLanguage === 'ar' ? "rtl" : "ltr";
                    let dOrW = this.currentColor === "#000" || this.currentColor === "#000000" ? './assets/css/md-dark.css' : './assets/css/md.css';
                    ov.id = "overlay";
                    const modalContainer = document.createElement("div");
                    modalContainer.classList.add("mdModal");
                    modalContainer.style.backgroundColor = this.currentColor;
            
            
                    // append
                    loadCSS(this.style)
                    loadJS("./assets/js/zero-md.min.js", "module")
            
                    // Modal Content
                    modalContainer.innerHTML = `
                    <button id="close-btn" title="Close Button" style="color:${BGTL}">&times;</button>
                    <div class="header" style="color:${BGTL}"><h1>${headerText}</h1></div>
                    <zero-md id="mdContainer" src="${src}" dir="${dir}">
                     <template>
                      <link rel="stylesheet" href="${dOrW}" />
                      <link rel="stylesheet" href="./assets/css/hili.css" />
                     </template>
                    </zero-md>
                    <div class="footer agree" style="color:${BGTL}"><button id="agreeColse">${buttonText}</button></div>
                    `;
                    
                    modal.append(modalContainer)
                    // modal opening animation
                    const modalOpening = [{transform: "scale(0)"},{transform: "scale(1)"},];
                    const modalOpeningTiming = {duration: 210,iterations: 1,};
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
                closeButton.addEventListener("click", () => close(ov,modal,modalContainer))
                ov.addEventListener('click', () => close(ov,modal,modalContainer))
                agree.addEventListener('click', () => close(ov,modal,modalContainer))
    }
    
}

export default mdModal;