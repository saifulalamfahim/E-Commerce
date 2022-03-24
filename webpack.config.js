const path = require('path');

module.exports = {
    mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'frontend'),
    filename: 'bundle.js',
  },
  devServer: {
    static: "./frontend",
      },
};
// module.exports = {
//     mode: "development",
  
//     devServer: {
//       static: "./frontend",
//     },
//   };