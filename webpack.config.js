const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename: "style.css",
  //  disable: process.env.NODE_ENV === "development"
});

//what give this starter: 
//compress css/js/html and images
//clean dist every time when you use prod mode
//adding sass workflow
//servering page

module.exports = {
    entry: {
    app: './src/app.js' , 
   // newpage:'./src/newpage.js'
    },
    output: {    
        filename: '[name].bundle.js',
        path: __dirname + '/dist' 
    },
    

    // css + sass modlules 
    module:{
          rules: [
              {
               test: /\.css$/,
                use: [
                    'handlebars-loader', // handlebars loader expects raw resource string
                    'extract-loader',
                    'css-loader'
                ]},
              {  
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader'] 
              },
         {
         test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader?name=[name].[ext]&outputPath=img/',
            'image-webpack-loader'
        ]
       },
        ]
    },

    //dev server option like: open: new window 
    devServer:{
            contentBase: path.join(__dirname, "/dist"),
            compress: true,
            // open true/false opening new window in every start dev mode
            open: true,
            // hot dinamic css 
             hot: true,
             //showing only errors in console
            stats: "errors-only",
    },
// plugins define new html webside , can add new to grow up project 
    plugins: [
        //this is a first site 
        new HtmlWebpackPlugin({
        title:'new project',
        minify:{
            collapseWhitespace: true
        },
        // exclude - this turns off app.js for this page
        hash: true,
        excludeChunks: ['newpage'],
        template:'./src/index.html',
    }),

    //next site and this turns off js for this website by using excludeChunks/chunks
    // new HtmlWebpackPlugin({
    //     title:'pagetwo',
    //    hash: true,
    //    chunks:['newpage'],
    //     filename: 'newpage.html',
    //     template:'./src/newpage.html'
    // }),

    // in new version webpack 2.0.0+
    new ExtractTextPlugin({
        filename: (getPath) => {
            return getPath('css/[name].css').replace('css/js', 'css');
        },
        allChunks: true
    }),

       new ExtractTextPlugin({
        filename: '[name].bundle.css',
        allChunks: true,
       // disable: env === 'dev',
      }),
     new webpack.HotModuleReplacementPlugin() // Enable HMR
    // add sass
   // extractSass
    ],
}