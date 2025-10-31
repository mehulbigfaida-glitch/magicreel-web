/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./pages/**/*.{js,jsx}",
"./components/**/*.{js,jsx}"
],
theme: {
extend: {
colors: {
midnight: "#0A0A1A",
royal: "#5D3FD3",
gold: "#FFD36B",
cyanGlow: "#38F8E1"
},
fontFamily: {
cinematic: ["Inter", "sans-serif"]
}
},
},
plugins: [],
};
