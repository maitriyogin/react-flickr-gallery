/**
 * Created by stephenwhite on 18/08/15.
 */
var babelJest = require("babel-jest");

module.exports = {
process: function(src, filename) {
      return babelJest.process(src.replace(/^import\s*(\"|\')styles.*(\"|\')\;$/gm, ''), filename);
    }
};