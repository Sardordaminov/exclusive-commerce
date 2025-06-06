
      const langBtn = document.getElementById("lang-btn");
      const langDropdown = document.getElementById("lang-dropdown");

      langBtn.addEventListener("click", () => {
        langDropdown.classList.toggle("show");
      });


      const sliders = document.querySelectorAll(".slider");
      const bannerImg = document.getElementById("banner-img");
      const bannerTitle = document.getElementById("banner-title");

      sliders.forEach(slider => {
        slider.addEventListener("click", () => {
          const imgSrc = slider.getAttribute("data-img");
          const title = slider.getAttribute("data-title");
          bannerImg.src = imgSrc;
          bannerTitle.textContent = title;
        });
      });