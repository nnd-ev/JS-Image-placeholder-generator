 const inputWidth = document.querySelector("#inputWidth");
 const inputHeight = document.querySelector("#inputHeight");
 const inputDataUrl = document.querySelector("#inputDataUrl");
 const imagePreview = document.querySelector("#image-preview");


document.querySelector("#buttonGenerate").addEventListener("click", ()=>{
const MIN_LEN = 200;
  if(isNaN(inputWidth.value) || isNaN(inputHeight.value) || inputWidth.value < MIN_LEN || inputHeight.value< MIN_LEN){
    alert(`Please enter a valid image size. The minimum len is ${MIN_LEN} px`);
    return;
  }
  const dataUrl= "https://via.placeholder.com/"+inputWidth.value+"x"+inputHeight.value;
  inputDataUrl.value = dataUrl;
  imagePreview.src = dataUrl;
});
 
 
  imagePreview.src = `https://via.placeholder.com/200x200`;
 