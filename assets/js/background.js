let styleElem = document.head.appendChild(document.createElement("style"));
  
      styleElem.innerHTML = "#theDiv:before {content: '';position: fixed;top: 0;left: 0;height: 1280px;width: 100%;z-index: -1;background: rgba(204, 204, 204, 0.2);background-size: cover;background-repeat: no-repeat;background-position: center;}";
      
      function Randomize() {
        let images = new Array("https://wallpaperaccess.com/full/2073407.jpg", "https://www.losangelesdream.com/wp-content/uploads/2018/01/california-los-angeles-4k-1536x960.jpeg", "https://4kwallpapers.com/images/walls/thumbs_3t/7284.jpg");
        let imageNum = Math.floor(Math.random() * images.length);
        
        document.getElementById("theDiv").style.backgroundImage = "url('" + images[imageNum] + "')";
      }
      window.onload = Randomize;