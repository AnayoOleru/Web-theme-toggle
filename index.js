window.onload = function() {
    let toggleBtn = document.getElementById("toggleBtn");
    toggleBtn.onclick = toggleTheme;
    toggleBtn.onkeypress = handleKeyPress;
  
    function toggleTheme(e) {
      //calls changeTheme and passes true or false depending on the state of checkbox "checked"
      changeTheme(e.target.checked);
    }
  
    function changeTheme(theme) {
      //reverses css custom var colors
      if (!theme) {
        document.documentElement.style.setProperty("--bg-main-color", "#1f2029");
        document.documentElement.style.setProperty(
          "--toned-down-white",
          "#f1f1f1"
        );
        let header = document.querySelector("h2");
  
        header.classList.add("hearBeat");
        setTimeout(function() {
          header.classList.remove("hearBeat");
        }, 700);
      } else {
        document.documentElement.style.setProperty("--bg-main-color", "#f1f1f1");
        document.documentElement.style.setProperty(
          "--toned-down-white",
          "#1f2029"
        );
        let header = document.querySelector("h2");
  
        header.classList.add("hearBeat");
        setTimeout(function() {
          header.classList.remove("hearBeat");
        }, 700);
      }
    }
    function handleKeyPress(e) {
      //handles enter keypress
      let toggleBtn = document.getElementById("toggleBtn");
      if (e.keyCode === 13) {
        toggleBtn.click();
      }
    }
  };
  