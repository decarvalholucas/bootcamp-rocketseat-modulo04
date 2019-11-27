module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}

/* 
 * preset-env => Transforma as funcionalidades do JavaScript, por exemplo,
 * import/export, arrow functions, classes, entre algumas coisas que o navegador
 * não entende.
 * 
 * preset-react => Transforma as funcionalidades que o navegador no entende,
 * do React. Por exemplo, JSX
 */