let Op_fu = document.querySelector(".link-use");
let Cl_fu = document.querySelector(".button-window");
let overlay = document.querySelector(".overlay");
let fu = document.querySelector(".hidden-block");
let darg_obl = document.querySelector(".titel-block");

Op_fu.onclick = function(){
    overlay.style.display = "block";
    fu.style.display = "flex";
};

Cl_fu.onclick = ()=>{
    overlay.style.display = "none";
    fu.style.display = "none";
};


darg_obl.onmousedown = function(event) {
    function moveAt(pageX, pageY) {
      fu.style.left = pageX - shiftX + 'px';
      fu.style.top = pageY - shiftY + 'px';
    }
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    let shiftX = event.clientX - fu.getBoundingClientRect().left;
    let shiftY = event.clientY - fu.getBoundingClientRect().top;

    document.body.append(fu);
    document.addEventListener('mousemove', onMouseMove);
    moveAt(event.pageX, event.pageY);
      
    darg_obl.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      darg_obl.onmouseup = null;
    };
  };
  
  darg_obl.ondragstart = function() {
    return false;
  };

  let app  = new Vue({
    el: "#application",
    data: {
        materials: null
    },
    mounted(){
      axios
          .get('https://isidea.ru/rgups_data.json')
          .then(respose => this.materials = respose.data)
    } 
  });