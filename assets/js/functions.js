export function loadCSS(url) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.type = 'text/css'; l.href = url;
    document.head.appendChild(l);
}

export function loadJS(url,type) {
    var s = document.createElement('script');
    s.src = url;
    s.type = type
    document.head.appendChild(s);
}
export function close(elm,elm2,anielm) {
    const modalClosing = [
        { transform: "scale(1)" },
        { transform: "scale(0)" },
       ];
          
      const modalClosingTiming = {
        duration: 210,
        iterations: 1,
       };

      var animation = anielm.animate(modalClosing, modalClosingTiming);
      
      animation.onfinish = function(){
        document.body.style.overflow = "auto";
        elm.remove();
        elm2.remove();
      }
}