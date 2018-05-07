"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Animal = function Animal() {
  (0, _classCallCheck2.default)(this, Animal);
};

var Dog =
/*#__PURE__*/
function (_Animal) {
  function Dog() {
    (0, _classCallCheck2.default)(this, Dog);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Dog).call(this));
  }

  (0, _createClass2.default)(Dog, [{
    key: "bark",
    value: function bark() {
      console.log("Bauw");
    }
  }]);
  (0, _inherits2.default)(Dog, _Animal);
  return Dog;
}(Animal);

var dog = new Dog();
dog.bark();