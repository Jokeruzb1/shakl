function shape() {
    let width = document.getElementById("width");
    let height = document.getElementById("height");
    let color = document.getElementById("color");
    let bradius = document.getElementById("bradius");
    let transition = document.getElementById("transition");
    let result = document.querySelector(".result");
  
    if (width.value > 600 || height.value > 500) {
      alert("Kichikroq son kiriting");
    } else {
      result.style.width = width.value + "px";
      result.style.height = height.value + "px";
      result.style.background = color.value;
      result.style.borderRadius = bradius.value;
      result.style.transition = transition.value +'s';
    }
  }
  