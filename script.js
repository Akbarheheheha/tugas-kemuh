      // Toggle sidebar on mobile
      document
        .getElementById("sidebarToggle")
        .addEventListener("click", function () {
          document.querySelector(".sidebar").classList.toggle("active");
          document.getElementById("overlay").classList.toggle("active");
        });

      // Close sidebar when clicking on overlay
      document.getElementById("overlay").addEventListener("click", function () {
        document.querySelector(".sidebar").classList.remove("active");
        this.classList.remove("active");
      });

      // Close sidebar when clicking on a link (mobile)
      document.querySelectorAll(".sidebar a").forEach((link) => {
        link.addEventListener("click", function () {
          if (window.innerWidth < 768) {
            document.querySelector(".sidebar").classList.remove("active");
            document.getElementById("overlay").classList.remove("active");
          }
        });
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Progress bar
      window.addEventListener("scroll", function () {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
      });

      // Animation on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      }, observerOptions);

      document.querySelectorAll(".section-animate").forEach((section) => {
        observer.observe(section);
      });
      