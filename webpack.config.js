const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader' }
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};

// Entry: Arquivo de entrada. 

// Output: Onde o webpack vai jogar o bundle, condigo transpilado pelo mesmo.
// Codigo ja compilado com as funcionalidades que os navegadores ja entende.

// Rules: Informar ao webpack qual tipo de arquivo ele deve utilizar, exemplo:
// Quando tivermos arquivos JavaScript, quem vai lidar com os mesmos é o Babel,
// Quando for CSS não é mais o Babel e sim outros loaders.

// /expressao regular/