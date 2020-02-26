var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/modules/index.ts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'modules.bundle.js'
  },
  resolve: {
    extensions: [ ".ts", ".js" ]
  },
  module: {
    rules: [
     
      {
        test: /\.(ts)?$/,
        loader: "ts-loader",
        options: {
          configFile: path.join(__dirname, 'tsconfig.modules.json'),
        },
      },
      // ALTERNATIVE - AWESOME-TYPESCRIPT-LOADER
      // - doesn't support declaration maps :(
      //
      // {
      //   test: /\.(ts)?$/,
      //   loader: "awesome-typescript-loader",
      //   options: {
      //     configFileName: path.join(__dirname, 'tsconfig.modules.json'),
      //     // useCache: true,
      //     // reportFiles: ["src/**/*.{ts,tsx}"]
      //   },
      //   // exclude: [/\.(spec|e2e)\.ts$/]
      // },
    ]
  }
};