import keepPreset from "keep-react/src/keep-preset.js";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors:{
        'bgBack' : '#F9F9F9',
        'Orange' : '#FAB900',
        'orangeOp' : '#FFC107',
        'yellow' : '#FFC645',
        'blue' : '#918CFF',
        'cyan' : '#37DFCF',
        'red' : '#FD6363',
        'textColor' : '#1F1C14',
        'brandPrimary' : '#4caf4f',
        'dbgColor':'#FF9053',
        'dbgColorI':'#3BAFA8',
        'dbgMain':'#30E0AB'
      },
    },
  },
  plugins: [],
}

