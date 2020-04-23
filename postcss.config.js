const tailwinddcss = require('tailwindcss');

module.exports = {
    plugins : [
        tailwinddcss('./tailwind.js'),
        require('autoprefixer')
    ]
}