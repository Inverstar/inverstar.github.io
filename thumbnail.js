document.addEventListener("DOMContentLoaded", function(event) {
  
    // 听好了,你的代码都必须写在下面!
  
  //alert("Hello javascript");
  let targetImage = document.querySelector("#smart-image");
  targetImage.addEventListener
  (
    "click", function() 
    { 
      if (targetImage.classList.contains("small")) 
      {
        targetImage.classList.remove("small"); // 移除small
      } 
      else
      {
        targetImage.classList.add("small"); //增加small
      }
    }
  );
  
    // 不,你的所有代码都应该写在上面!
  
});
