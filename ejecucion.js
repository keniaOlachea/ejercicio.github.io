function blooming() {
      var image = document.getElementById('myImage');
      if (image.src.match('normal')) {
        image.src = 'marco.jpg';
      } else {
        image.src = 'normal.jpg';
      }    
    }    