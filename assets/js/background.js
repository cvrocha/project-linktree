let styleElem = document.head.appendChild(document.createElement("style"));
  
      styleElem.innerHTML = "#theDiv:before {content: '';position: fixed;top: 0;left: 0;height: 1280px;width: 100%;z-index: -1;background: rgba(204, 204, 204, 0.2);background-size: cover;background-repeat: no-repeat;background-position: center;}";
      
      function Randomize() {
        let images = new Array("assets/images/bsb.jpg", "assets/images/ny.jpg", "assets/images/la.jpeg");
        let imageNum = Math.floor(Math.random() * images.length);
        
        document.getElementById("theDiv").style.backgroundImage = "url('" + images[imageNum] + "')";
      }
      window.onload = Randomize;