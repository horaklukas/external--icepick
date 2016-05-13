umdBlock = " \n\
(function(root, factory) { \n\
  if (typeof define === 'function' && define.amd) { \n\
      // AMD. Register as an anonymous module. \n\
      define(factory); \n\
  } else if (typeof module === 'object' && module.exports) { \n\
      // Node. Does not work with strict CommonJS, but \n\
      // only CommonJS-like environments that support module.exports, \n\
      // like Node. \n\
      module.exports = factory(); \n\
  } else { \n\
      // Browser globals (root is window) \n\
      root.icepick = factory(); \n\
  } \n\
}(this, function () { \n\
  \n\"use \
"

var replacements = {
  icepick: [
    {search: 'var i = exports;', replacement: 'var i = {};'},

    {search: 'exports', replacement: 'i'},

      // start of wrapping function
    {search: /(\s)?\"use /, replacement: umdBlock},

    // end of wrapping function
    {search: /\n$/, replacement: '\n\nreturn i;\n\n}));'},
  ],
  typings: [
    // module declaration
    {search: 'declare module "icepick" {', replacement: ''},

    // module decalaration closing bracket
    {search: /}\s*$/, replacement: ''},

    // remove indentation at line beginning
    {search: '\n  ', replacement: '\n'}
  ]
}

module.exports = replacements;