# Invoice Web App

Invoice Web App is a web application for managing and generating invoices. It provides a user-friendly interface for creating, updating, and managing invoices for various clients.

## Features

- **User Authentication**: Secure user registration and login system.
- **Dashboard**: An intuitive dashboard displaying key metrics and summaries.
- **Client Management**: Add, edit, and delete client information.
- **Invoice Management**: Create, update, and delete invoices for clients.
- **Invoice Templates**: Customizable invoice templates with predefined fields.
- **Invoice Generation**: Generate professional PDF invoices with ease.
- **Payment Tracking**: Track payment status and due dates for each invoice.
- **Reports**: Generate reports on invoices, payments, and client statistics.
- **Search and Filtering**: Easily search and filter invoices and clients.
- **Multi-Language Support**: Localization options for multiple languages.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/akrambzgh/invoice-web-app.git
```

2. Install Npm

```bash
cd invoice-web-app
npm install
```

Install the dependencies:

```bash
npm i webpack webpack-cli css-loader style-loader file-loader html-webpack-plugin node-sass sass-loader html-loader webpack-dev-server webpack-merge mini-css-extract-plugin optimize-css-assets-webpack-plugin -D
```

Set up the configuration file:

Webpack

1. common

```bash
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
};
```

2. dev

```bash
const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});

```

3. prod

```bash
const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});
```

Make sure to update the necessary configuration values in config.js.

Start the application:

```bash
npm start
```

The application will be accessible at http://localhost:3000.

OR

```bash
npm run build
```

Contributing
Contributions are always welcome! If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push your changes to your forked repository.
Submit a pull request to the master branch of the original repository.
Please ensure that your code follows the project's coding conventions and includes appropriate tests.
