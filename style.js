const { complementary } = require("chromatism")
const Color = require("color")

const primaryColor = "#663399"

module.exports = {
  fonts: {
    heading: {
      family: "Kumbh Sans",
      weight: 800,
    },
    body: {
      family: "Kumbh Sans",
      weight: 300,
    },
  },
  palette: {
    primary: primaryColor,
    secondary: complementary(primaryColor).hex,
    light: (() => {
      const color = Color(primaryColor).lighten(1.45)
      return color.hex()
    })(),
    dark: (() => {
      const color = Color(primaryColor).darken(1)
      return color.hex()
    })(),
    // dark: color.darken(0.9).hex,
  },
}
