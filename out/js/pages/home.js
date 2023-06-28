"use strict";
particlesJS("particles", {
    particles: {
        number: {
            value: 160,
            density: {
                enable: true,
                value_area: 1000,
            },
        },
        color: {
            value: "#fff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0,
                sync: true,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.3,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            color: "#fff",
            opacity: 0.2,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1.25,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
                enable: true,
                rotateX: 1000,
                rotateY: 1000,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble",
            },
            onclick: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 50,
                size: 5,
                duration: 1,
                opacity: 0.5,
                speed: 1,
            },
            repulse: {
                distance: 400,
                duration: 0.3,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});
let home_ts = new Typewriter("home-intro-undertitle", 120, 90, 500, 250);
home_ts.execute();
