function startApp(){navFija(),crearGaleria()}function navFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`    \n        <source srcset = "./build/img/thumb/${t}.webp" type = "image/webp">\n        <img loading="lazy" width="200" height="300" src="./build/img/thumb/${t}.jpg"\n            alt="Imagen vocalista"></img>\n        `,n.onclick=function(){mostrarImg(t)},e.appendChild(n)}}function mostrarImg(e){const t=document.createElement("picture");t.innerHTML=`    \n        <source srcset = "./build/img/grande/${e}.webp" type = "image/webp">\n        <img loading="lazy" width="200" height="300" src="./build/img/grande/${e}.jpg"\n            alt="Imagen vocalista"></img>\n        `;const n=document.createElement("div");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){const e=document.querySelector("body");n.remove(),e.classList.remove("fijar-body")};const o=document.querySelector("body");o.appendChild(n),o.classList.add("fijar-body");const c=document.createElement("p");c.textContent="X",c.classList="btn-cerrar",c.onclick=function(){n.remove(),o.classList.remove("fijar-body")},n.appendChild(c)}document.addEventListener("DOMContentLoaded",(function(){startApp()}));
//# sourceMappingURL=scripts.js.map