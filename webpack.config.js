// const path = require('path');

// module.exports = {
//     context: __dirname,
//     entry: './frontend/bimmers_performance.jsx',
//     output: {
//         path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//         filename: './bundle.js'
//     },
//     module: {
//         rules: [
//             { 
//                 test: [/\.jsx?$/, /\.css?$/],
//                 exclude: /(node_modules)/,
//                 use: [
                    
//                     {
//                         loader: 'babel-loader',
//                         query: {
//                             presets: ['@babel/env', '@babel/react']
//                         }
//                     },
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             modules: true
//                         }
//                     }
//                 ],
//             }
//         ],
//     },

//     devtool: 'source-map',
//     resolve: {
//         extensions: [".js", ".jsx", "*"]
//     }
// };
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/bimmers_performance.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.css?$/,
                include: [
                        path.resolve(__dirname, "not_exist_path")
                    ],
                loader: "style!css"
                // use: "css-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use:
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/env', '@babel/react']
                        }
                    },
            }
        ],
    },

    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};