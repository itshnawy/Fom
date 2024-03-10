// Append CDN
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/zerodevx/zero-md@2/dist/zero-md.min.js';
script.type = "module"
document.head.appendChild(script);


function mdModal(
    src,
    dir = "ltr",
    header = "",
    bg = "#fff",
    ) {
    // Create modal container
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("mdModal");
    document.body.innerHTML += `<style id="mdStyle">.mdModal {background: ${bg !== "#000" && bg !== "#000000" ? bg : "#fff"}; } </style>`
    // Modal content
    modalContainer.innerHTML = `
    <button id="close-btn" title="Close Button">✖</button><h1 class="modalheader">${header}</h1>
    <zero-md id="mdContainer" src="${src}" dir="${dir}">
            <template>
                <link rel="stylesheet" href="/assets/addon/md.css" />
                <link rel="stylesheet" href="/assets/addon/hili.css" />
            </template>
        </zero-md>`;
        
    // Append modal container to the body
    document.body.appendChild(modalContainer);

    // Disable scrolling on the body
    document.body.style.overflow = "hidden";

    // Event listener for closing the modal
    const closeButton = modalContainer.querySelector("#close-btn");
    closeButton.addEventListener("click", function() {
        document.body.style.overflow = "auto";
        document.getElementById("mdStyle").remove();
        modalContainer.remove();
    });
}