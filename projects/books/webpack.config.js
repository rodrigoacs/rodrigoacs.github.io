const path = require('path');

const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/tabelaLivros.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js',
    },
};