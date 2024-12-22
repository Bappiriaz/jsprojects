const imageContainerEl = document.querySelector(".imge_item");
const butEl = document.querySelector(".but");

butEl.addEventListener("click", () => {
    imageNum = 16;
    addNewImages();
  });

  function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
       
        const newImgEl = document.createElement("img");
         newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
            Math.random() * 2000
          )}`;

          imageContainerEl.appendChild(newImgEl);

        
    }
}