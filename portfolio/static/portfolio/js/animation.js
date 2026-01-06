document.addEventListener("DOMContentLoaded", function () {
    const homeHero = document.querySelector(".hero-section:not([class*='-hero'])");
    if (homeHero && typeof VANTA !== "undefined" && VANTA.WAVES) {
      VANTA.WAVES({
        el: ".hero-section",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 2.0,
        scaleMobile: 1.0,
        color: 0x1f3b5c, //Blue:0x1f3b5c, Gray:0x222222
        backgroundColor: 0x0a0a0a, //Blue:0x0a0a0a, Gray:0x1a1a1a
        shininess: 100.0,
        waveHeight: 20.0,
        waveSpeed: 1.2,
        zoom: 1.0
      });
    }

    const unityHero = document.querySelector(".unity-hero");
    if (unityHero && typeof VANTA !== "undefined" && VANTA.NET) {
      VANTA.NET({
        el: unityHero,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00ffee,
        backgroundColor: 0x121212,
        points: 12.0,
        maxDistance: 19.0,
        spacing: 15.0
      });
    }

    //Cpp
    const cppHero = document.querySelector(".cpp-hero");
        if (cppHero && typeof VANTA !== "undefined" && VANTA.NET) {
        VANTA.NET({
            el: cppHero,
            mouseControls: true,
            touchControls: true,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x333333,
            backgroundColor: 0x0d0d0d,
            points: 10,
            maxDistance: 20,
            spacing: 18
        });
    }

    //timeline
    const timelineHero = document.querySelector(".timeline-hero");
        if (timelineHero && typeof VANTA !== "undefined" && VANTA.NET) {
        VANTA.NET({
            el: timelineHero,
            mouseControls: true,
            touchControls: true,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x333333,
            backgroundColor: 0x0d0d0d,
            points: 10,
            maxDistance: 30,
            spacing: 6
        });
    }

    // Django page background
    const djangoHero = document.querySelector(".django-hero");
    if (djangoHero && typeof VANTA !== "undefined" && VANTA.WAVES) {
        VANTA.WAVES({
            el: djangoHero,
            mouseControls: true,
            touchControls: true,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x1f2e2e,
            backgroundColor: 0x0a0a0a,
            shininess: 35,
            waveHeight: 18,
            waveSpeed: 0.9,
            zoom: 3.0
        });
    }

    // Rust
    const rustHero = document.querySelector(".rust-hero");
    if (rustHero && typeof VANTA !== "undefined" && VANTA.WAVES) {
        VANTA.WAVES({
            el: rustHero,
            mouseControls: true,
            touchControls: true,
            scale: 2.0,
            scaleMobile: 2.0,
            color: 0x1c1c1c,
            backgroundColor: 0x0a0a0a,
            shininess: 30,
            waveHeight: 22,
            waveSpeed: 0.8,
            zoom: 3.0
        });
    }

    // React
    const reactHero = document.querySelector(".react-hero");
    if (reactHero && typeof VANTA !== "undefined" && VANTA.NET) {
        VANTA.NET({
            el: reactHero,
            mouseControls: true,
            touchControls: true,
            scale: 1.0,
            color: 0x61dafb,
            backgroundColor: 0x101820,
            points: 10.0,
            maxDistance: 25.0,
            spacing: 14.0
        });
    }

    // Python
    const pythonHero = document.querySelector(".python-hero");
    if (pythonHero && typeof VANTA !== "undefined" && VANTA.NET) {
        VANTA.NET({
            el: pythonHero,
            mouseControls: true,
            touchControls: true,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x1e2e3e,
            backgroundColor: 0x0a0e14,
            points: 11,
            maxDistance: 50,
            spacing: 16
        });
    }
    // Projects - same as Unity
    const projectsHero = document.querySelector(".projects-hero");
    if (projectsHero && typeof VANTA !== "undefined" && VANTA.NET) {
        VANTA.NET({
            el: projectsHero,
            mouseControls: true,
            touchControls: true,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x1e2e3e,
            backgroundColor: 0x0a0e14,
            points: 11,
            maxDistance: 50,
            spacing: 16
        });
    }

    // Hardware
    const hardwareHero = document.querySelector(".hardware-hero");
    if (hardwareHero && typeof VANTA !== "undefined" && VANTA.NET) {
        VANTA.NET({
            el: hardwareHero,
            mouseControls: true,
            touchControls: true,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x333333,
            backgroundColor: 0x0d0d0d,
            points: 10,
            maxDistance: 20,
            spacing: 18
        });
    }

    // Java
    const javaHero = document.querySelector(".java-hero");
    if (javaHero && typeof VANTA !== "undefined" && VANTA.WAVES) {
        VANTA.WAVES({
            el: javaHero,
            mouseControls: true,
            touchControls: true,
            scale: 2.0,
            color: 0x334455,
            backgroundColor: 0x0f0f0f,
            shininess: 10,
            waveHeight: 10,
            waveSpeed: 1.0,
            zoom: 3.0
        });
    }

});

  
  
  
  

