define(["jquery","twigjs"], function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2), __webpack_require__(3), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, twig, Settings, createTemplatesRenderer, module_info) {
  var ModulesInfo = module_info.ModulesInfo;

  var CustomWidget = function CustomWidget() {
    var self = this,
        system = self.system(),
        langs = self.langs,
        settingSuggest;
    this.getTemplate = createTemplatesRenderer(this);
    this.templates = {};
    this.init = false;
    this.bind_stats = false;
    this.callbacks = {
      settings: function settings(modal) {
        ModulesInfo._info = null;
        var Set = self.get_settings();
        $('.widget_settings_block__item_field').hide();
        self.isWidgetActive() && ModulesInfo.enableGeneral(modal);
        Settings(self, ModulesInfo).then(function (r) {
          return r;
        });
      },
      init: function init() {
        var widgetSettings = self.get_settings();

        if ($('link[href="' + widgetSettings.path + '/style.css?v=' + widgetSettings.version + '"').length < 1) {
          $("head").append('<link href="' + widgetSettings.path + '/style.css?v=' + widgetSettings.version + '" type="text/css" rel="stylesheet">');
        }

        return true;
      },
      bind_actions: function bind_actions() {
        return true;
      },
      render: function render() {
        return true;
      },
      destroy: function destroy() {},
      onSave: function onSave() {
        if (self.isActivePragma()) {
          ModulesInfo.enableGeneral();
        } else {
          ModulesInfo.disableGeneral();
        }

        return true;
      }
    };

    this.isWidgetActive = function () {
      return self.isActivePragma() || !!$('.widget-state_status_not_configured').length;
    };

    this.isActivePragma = function () {
      var active = false;

      try {
        active = AMOCRM.constant("widgets").widgets.all[self.params.widget_code].active;
      } catch (e) {}

      if (self.params.widget_active !== 'N' && (self.params.login !== '' && typeof self.params.login !== 'undefined' || self.params.widget_active === 'Y' || active)) {
        return true;
      }

      return false;
    };

    return this;
  };

  return CustomWidget;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, func) {
  var CorePipeline = /*#__PURE__*/function () {
    function CorePipeline(data) {
      var _this = this;

      _classCallCheck(this, CorePipeline);

      this.bind_actions = function () {
        _this.$ElCheck.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var CHECK;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  CHECK = _this.$ElCheck.is(":checked");
                  _context.next = 3;
                  return func.pip({
                    flag: 'save',
                    id: _this.id,
                    CHECK: CHECK
                  });

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      };

      this._id = data.id;
      this._name = data.name;
      this._$ = CorePipeline._render(this._id, this._name);
      this._$ElCheck = this._$.find('#pragma-check_pipe');
      this.bind_actions();
    }

    _createClass(CorePipeline, [{
      key: "$ElCheck",
      get: function get() {
        return this._$ElCheck;
      }
    }, {
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }]);

    return CorePipeline;
  }();

  CorePipeline._render = function (id, name) {
    return $(CorePipeline.Twig.render({
      id: id,
      name: name
    }));
  };

  var CorePragma = /*#__PURE__*/function () {
    function CorePragma() {
      var _this2 = this;

      _classCallCheck(this, CorePragma);

      this.bind_actions = function () {
        _this2.$BtnAccordion.on('click', function () {
          switch (CorePragma.active) {
            case false:
              _this2.$DataBody.hide();

              CorePragma.active = true;
              break;

            default:
              _this2.$DataBody.show();

              CorePragma.active = false;
              break;
          }
        });

        _this2.render_body().then(function (r) {
          return r;
        });
      };

      this.render_body = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var ALL_PIP, Data, Pips, Pi, data, Key;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.request_GetPip();

              case 2:
                ALL_PIP = _context2.sent;
                Data = [];

                for (Pips in ALL_PIP) {
                  Pi = new CorePipeline(ALL_PIP[Pips]);
                  Data.push(Pi.$);
                }

                _this2.$DataBody.html(Data);

                if (CorePragma.set_pi) {
                  data = CorePragma.set_pi.pipelines;

                  for (Key in data) {
                    $(".core-pipeline-pragma[id=\"".concat(data[Key], "\"]")).find('#pragma-check_pipe').attr("checked", "checked");
                  }
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      this.request_GetPip = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var Pipe;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $.ajax({
                  url: '/api/v4/leads/pipelines',
                  method: 'GET'
                });

              case 2:
                Pipe = _context3.sent;
                return _context3.abrupt("return", Pipe._embedded.pipelines);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      this._$ = CorePragma._render();
      this._$BtnAccordion = this._$.find('.pragma-lirax-core_pipeline');
      this._$DataBody = this._$.find('.pragma-core_pipeline_sel_body');
      this.bind_actions();
    }

    _createClass(CorePragma, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$BtnAccordion",
      get: function get() {
        return this._$BtnAccordion;
      }
    }, {
      key: "$DataBody",
      get: function get() {
        return this._$DataBody;
      }
    }]);

    return CorePragma;
  }();

  CorePragma.active = false;
  CorePragma.set_pi = [];
  CorePragma.get_set_pi = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var data;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return func.pip({
              flag: 'get'
            });

          case 2:
            data = _context5.sent;
            CorePragma.set_pi = JSON.parse(data);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  CorePragma._render = function () {
    return $(CorePragma.Twig.render());
  };

  var ElPriority = /*#__PURE__*/function () {
    function ElPriority(data) {
      _classCallCheck(this, ElPriority);

      _initialiseProps.call(this);

      this._$ = ElPriority.__render(data);
      this._$Input = this._$.find('.priority_pragma');
      this.bind_actions();
    }

    _createClass(ElPriority, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Input",
      get: function get() {
        return this._$Input;
      }
    }]);

    return ElPriority;
  }();

  ElPriority.__render = function (data) {
    return $(ElPriority.Twig.render({
      data: data
    }));
  };

  var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.bind_actions = function () {
      _this3.$Input.on('focusout', function () {
        var val = _this3.$Input.val();

        _this3.SORT();
      });
    };

    this.SORT = function () {
      var arr = [];
      $('.pragma-el_priority').each(function () {
        var i = $(this).attr('id');
        var prior = $(this).find('input').val();
        var name = $(this).find('.el_priority-name').text();
        arr.push({
          id: i,
          name: name,
          val: prior * 1
        });
      });
      arr.sort(function (a, b) {
        if (a.val > b.val) {
          return 1;
        }

        if (a.val < b.val) {
          return -1;
        }

        return 0;
      });
      arr = arr.reverse();
      var data = [];

      for (var I in arr) {
        arr[I].no = I * 1 + 1;
        var item = new ElPriority(arr[I]);
        data.push(item.$);
      }

      $('.pragma-priority_work_custom').html(data);
    };
  };

  var Settings = /*#__PURE__*/function () {
    function Settings(List, twig) {
      _classCallCheck(this, Settings);

      _initialiseProps2.call(this);

      this._data_account = AMOCRM.constant('account');
      this._twig = twig;
      this._list = List;
      this._$ = Settings.__render(this._twig.set_twig);
      this._$btn_save = $('#save_devpmlirax'); // $('#save_pmlirax') ||

      this._$using_shop = this._$.find('#pragma-lirax-using_shop');
      this._$check_fun_numb = this._$.find('#pragma-lirax-funnel_number');
      this._$quantity_tell = this._$.find('.pragma-quantity_tell');
      this._$place_quantity = this._$.find('.place_quantity');
      this._$responsible = this._$.find('#pragma-responsible');
      this._$PRIORITY = this._$.find('#pragma-lirax-priority');
      this._$digital_funnel = this._$.find('.pragma-lirax-amo--digital_funnel');
      this._$place_for_funel_number = this._$.find('.pragma-lirax-place-funnel_number');
      this._$priority_place = this._$.find('.pragma-priority_work_custom');
      this._$priority = this._$.find('.priority-table_pragma_all');

      this._bind_actions();

      this.render_funnel_number().then(function (r) {
        return r;
      });
      this.render_list().then(function (r) {
        return r;
      });
      this.render_priority().then(function (r) {
        return r;
      });
    }

    _createClass(Settings, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$priority",
      get: function get() {
        return this._$priority;
      }
    }, {
      key: "twig",
      get: function get() {
        return this._twig;
      }
    }, {
      key: "$responsible",
      get: function get() {
        return this._$responsible;
      }
    }, {
      key: "list",
      get: function get() {
        return this._list;
      }
    }, {
      key: "$place_quantity",
      get: function get() {
        return this._$place_quantity;
      }
    }, {
      key: "$PRIORITY",
      get: function get() {
        return this._$PRIORITY;
      }
    }, {
      key: "data_account",
      get: function get() {
        return this._data_account;
      }
    }, {
      key: "$quantity_tell",
      get: function get() {
        return this._$quantity_tell;
      }
    }, {
      key: "$digital_funnel",
      get: function get() {
        return this._$digital_funnel;
      }
    }, {
      key: "$using_shop",
      get: function get() {
        return this._$using_shop;
      }
    }, {
      key: "$check_fun_numb",
      get: function get() {
        return this._$check_fun_numb;
      }
    }, {
      key: "$btn_save",
      get: function get() {
        return this._$btn_save;
      }
    }, {
      key: "$priority_place",
      get: function get() {
        return this._$priority_place;
      }
    }, {
      key: "$place_for_funel_number",
      get: function get() {
        return this._$place_for_funel_number;
      }
    }]);

    return Settings;
  }();

  Settings.__render = function (set_twig) {
    return $(set_twig.render());
  };

  var _initialiseProps2 = function _initialiseProps2() {
    var _this4 = this;

    this._bind_actions = function () {
      _this4.$btn_save.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = {};
                data.FLAG = 'save_settings';
                data.REFERRER = _this4.data_account.subdomain;
                data.ID_ACCOUNT = _this4.data_account.id;
                data.USE_STORE = _this4.get_attr_chek();
                data.USE_NUMBER = _this4.get_che_number();
                data.USE_RESPONSIBLE = _this4.$responsible.val();
                data.USE_PRIORY = _this4.get_PRIORITY();
                data.TOKEN = $('.widget_settings_block__controls__.text-input').val();
                data.APPLICATION = _this4.id_new_application();
                data.ARRAY_PIPELINE = _this4.get_array_pipeline();
                data.ARRAY_NUM_PIP = _this4.get_number_funnel();
                data.QUANTITY = _this4.get_quantity();
                data.ARRAY_PRIORY = _this4.get_array_priority();

                _this4.request_server(data).then(function (r) {
                  return r;
                });

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      })));

      _this4.$using_shop.on('click', function () {
        switch (_this4.get_attr_chek()) {
          case false:
            _this4.$digital_funnel.hide();

            break;

          case true:
            _this4.$digital_funnel.show();

            break;
        }
      });

      _this4.$PRIORITY.on('click', function () {
        switch (_this4.get_PRIORITY()) {
          case true:
            _this4.$priority.show();

            break;

          case false:
            _this4.$priority.hide();

        }
      });

      _this4.$check_fun_numb.on('click', function () {
        switch (_this4.get_che_number()) {
          case false:
            _this4.$place_for_funel_number.hide();

            break;

          case true:
            _this4.$place_for_funel_number.show();

            break;
        }
      });

      _this4.$quantity_tell.on('input', function () {
        var val = _this4.$quantity_tell.val();

        var val_n = val * 1;

        if (val_n < 11) {
          _this4.quantity_create(val);
        } else {
          _this4.$quantity_tell.val(10);

          _this4.$quantity_tell.trigger('input');
        }

        $('.quantity_pragma').val("00:01");
      });
    };

    this.get_array_priority = function () {
      var arr = [];
      $('.pragma-el_priority').each(function (el) {
        var priory = $(this).find('input').val();
        var id = $(this).attr('id');
        var name = $(this).find('.el_priority-name').text();
        arr.push({
          id: id,
          priory: priory,
          name: name
        });
      });
      return arr;
    };

    this.id_new_application = function () {
      var users = AMOCRM.constant('account').users;
      var us = "";

      for (var user in users) {
        if (users[user] == "AutoCall") {
          us = user;
        }
      }

      return us;
    };

    this.get_PRIORITY = function () {
      return _this4.$PRIORITY.is(":checked");
    };

    this.quantity_create = function (val) {
      var data = [];
      val++;

      for (var i = 1; i < val; i++) {
        var obj = $(_this4.twig.quantity.render({
          i: i
        }));
        data.push(obj);
      }

      _this4.$place_quantity.html(data);
    };

    this.render_priority = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var users, no, arr, i, USER;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              users = AMOCRM.constant('account').users;
              no = 0;
              arr = [];

              for (i in users) {
                USER = new ElPriority({
                  id: i,
                  no: no++,
                  name: users[i]
                });
                arr.push(USER.$);
              }

              _this4.$priority_place.html(arr);

              _context7.t0 = _this4.get_che_priory();
              _context7.next = _context7.t0 === true ? 8 : _context7.t0 === false ? 10 : 12;
              break;

            case 8:
              _this4.$priority.show();

              return _context7.abrupt("break", 12);

            case 10:
              _this4.$priority.hide();

              return _context7.abrupt("break", 12);

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    this.render_funnel_number = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var array, twig, index, id_funnel, name_funnel, element;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _this4.$quantity_tell.attr('max', 10).attr('min', 0);

              array = [];
              twig = _this4.twig.funnel_number;

              for (index in _this4.list) {
                if (_this4.list.hasOwnProperty(index)) {
                  id_funnel = _this4.list[index]['id'];
                  name_funnel = _this4.list[index]['name'];
                  element = $(twig.render({
                    id_funnel: id_funnel,
                    name_funnel: name_funnel
                  }));
                  array.push(element);
                }
              }

              _this4.$place_for_funel_number.html(array);

              _context8.t0 = _this4.get_che_number();
              _context8.next = _context8.t0 === false ? 8 : _context8.t0 === true ? 10 : 12;
              break;

            case 8:
              _this4.$place_for_funel_number.hide();

              return _context8.abrupt("break", 12);

            case 10:
              _this4.$place_for_funel_number.show();

              return _context8.abrupt("break", 12);

            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    this.render_list = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      var array, twig, item, name_funnel, id_funnel, element;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              array = [];
              twig = _this4.twig.item_funnel;

              for (item in _this4.list) {
                if (_this4.list.hasOwnProperty(item)) {
                  name_funnel = _this4.list[item]['name'];
                  id_funnel = _this4.list[item]['id'];
                  element = $(twig.render({
                    id_funnel: id_funnel,
                    name_funnel: name_funnel
                  }));
                  array.push(element);
                }
              }

              _this4.$digital_funnel.html(array);

              _context9.t0 = _this4.get_attr_chek();
              _context9.next = _context9.t0 === false ? 7 : _context9.t0 === true ? 9 : 11;
              break;

            case 7:
              _this4.$digital_funnel.hide();

              return _context9.abrupt("break", 11);

            case 9:
              _this4.$digital_funnel.show();

              return _context9.abrupt("break", 11);

            case 11:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    this.get_quantity = function () {
      var array = [];
      $('.pragma_quantity').each(function (index) {
        var time = $(this).find('.quantity_pragma').val();
        array.push({
          q: index + 1,
          time: time,
          id: 'quantity_' + (1 + index)
        });
      });
      return {
        quantity: $('.pragma-quantity_tell').val(),
        data_q: array,
        work_start: $('.time-pragma_foot_start').val(),
        work_finish: $('.time-pragma_foot_finish').val()
      };
    };

    this.get_number_funnel = function () {
      var obj = [];
      $('.funnel_number').each(function () {
        var name_pipeline = $(this).find('label').text();
        var id_pipeline = $(this).find('label').attr('id');
        var number = $(this).find('.funnel_number_input').val();
        obj.push({
          name_pipeline: name_pipeline,
          id_pipeline: id_pipeline,
          number: number
        });
      });
      return obj;
    };

    this.get_array_pipeline = function () {
      var obj = [];
      $('.digital_funnel--item').each(function () {
        var id_pip = $(this).find('label').attr('id');
        var name = $(this).find('label').text();

        var _val = $(this).find('input').val();

        obj.push({
          pip_name: encodeURI(name),
          pip_set_id: _val,
          pip_id: id_pip
        });
      });
      return obj;
    };

    this.get_che_priory = function () {
      return _this4.$PRIORITY.is(":checked");
    };

    this.get_attr_chek = function () {
      return _this4.$using_shop.is(":checked");
    };

    this.get_che_number = function () {
      return _this4.$check_fun_numb.is(":checked");
    };

    this.request_server = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_data) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return func.requestSettings(_data);

              case 2:
                return _context10.abrupt("return", _context10.sent);

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x3) {
        return _ref10.apply(this, arguments);
      };
    }();

    this.fill_input = function (arr) {
      var data = arr['data'][0];

      if (data) {
        _this4.fill_quantity(arr['quantity']);

        var pipelines = arr['pipelines'];
        var numbers = arr['numbers'];
        var priority = arr['priority'];
        var use_store = data.use_store === "true";
        var use_number = data.use_number === "true";
        var use_priory = data.use_priory === "true";
        $('.widget_settings_block__controls__.text-input').val(data.token);
        $('#pragma-responsible').val(data.use_responsible);

        switch (use_priory) {
          case true:
            $('#pragma-lirax-priority').trigger('click');

            _this4.filling_using_priority(priority);

            break;
        }

        switch (use_store) {
          case true:
            $('#pragma-lirax-using_shop').trigger('click');

            _this4.filling_using_shop(pipelines);

            break;
        }

        switch (use_number) {
          case true:
            $('#pragma-lirax-funnel_number').trigger('click');

            _this4.filling_funnel_number(numbers);

            break;
        }
      }
    };

    this.fill_quantity = function (data) {
      $('#time-pragma_id_start').val(data.work_start);
      $('#time-pragma_id-finish').val(data.work_finish);
      $('#quantity_tell').val(data.quantity).trigger('click');

      _this4.quantity_create(data.quantity);

      var arr = data.data_q;

      for (var i in arr) {
        $(".quantity_pragma[id=\"".concat(arr[i].id, "\"]")).val(arr[i].time);
      }
    };

    this.filling_funnel_number = function (numbers) {
      for (var index in numbers) {
        $("input[id=\"funnel_".concat(numbers[index].id_pipeline, "\"]")).val(numbers[index].number);
      }
    };

    this.filling_using_shop = function (pipelines) {
      for (var index in pipelines) {
        $("input[id=\"using_shop_".concat(pipelines[index].id_pipeline, "\"]")).val(pipelines[index].id_set_pep);
      }
    };

    this.filling_using_priority = function (priory) {
      for (var index in priory) {
        $("input[id=\"priority".concat(priory[index].id, "\"]")).val(priory[index].priory);
      }

      $('.priority_pragma').trigger('focusout');
    };
  };

  function request_get_all_pipelines() {
    return _request_get_all_pipelines.apply(this, arguments);
  }

  function _request_get_all_pipelines() {
    _request_get_all_pipelines = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
      var res, arr, LIST, item;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return $.ajax({
                url: '/api/v4/leads/pipelines',
                method: 'GET',
                dataType: 'json'
              });

            case 2:
              res = _context11.sent;
              arr = res._embedded.pipelines;
              LIST = [];

              for (item in arr) {
                if (arr.hasOwnProperty(item)) {
                  LIST.push(arr[item]);
                }
              }

              return _context11.abrupt("return", LIST);

            case 7:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));
    return _request_get_all_pipelines.apply(this, arguments);
  }

  function get_data() {
    return _get_data.apply(this, arguments);
  }

  function _get_data() {
    _get_data = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return func.requestSettings({
                FLAG: 'get_settings',
                ID_ACCOUNT: AMOCRM.constant('account').id
              });

            case 2:
              return _context12.abrupt("return", _context12.sent);

            case 3:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));
    return _get_data.apply(this, arguments);
  }

  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(self, ModulesInfo) {
      var data, List, twig, repragma, setting;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return get_data();

            case 2:
              data = _context4.sent;
              _context4.next = 5;
              return request_get_all_pipelines();

            case 5:
              List = _context4.sent;
              _context4.next = 8;
              return self.getTemplate("CorePipeline");

            case 8:
              CorePipeline.Twig = _context4.sent;
              _context4.next = 11;
              return self.getTemplate("CorePragma");

            case 11:
              CorePragma.Twig = _context4.sent;
              _context4.next = 14;
              return self.getTemplate("settings");

            case 14:
              _context4.t0 = _context4.sent;
              _context4.next = 17;
              return self.getTemplate("item_funnel");

            case 17:
              _context4.t1 = _context4.sent;
              _context4.next = 20;
              return self.getTemplate("funnelnumber");

            case 20:
              _context4.t2 = _context4.sent;
              _context4.next = 23;
              return self.getTemplate("quantity");

            case 23:
              _context4.t3 = _context4.sent;
              twig = {
                set_twig: _context4.t0,
                item_funnel: _context4.t1,
                funnel_number: _context4.t2,
                quantity: _context4.t3
              };
              _context4.next = 27;
              return self.getTemplate('elPriority');

            case 27:
              ElPriority.Twig = _context4.sent;
              _context4.next = 30;
              return CorePragma.get_set_pi();

            case 30:
              repragma = new CorePragma();
              setting = new Settings(List, twig);
              $('#widget_settings__fields_wrapper div:first').html(setting.$);
              $('.pragma_full_data').before(repragma.$);
              $('.pragma-lirax-core_pipeline').trigger('click');
              setting.fill_input(JSON.parse(data));
              $('.widget_settings_block__item_field').show(); // }

            case 37:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
  var requestSettings = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data.account_id = AMOCRM.constant('account').id;
              data.referrer = AMOCRM.constant('account').subdomain;
              data.typeCRM = 'amocrm';
              _context.next = 5;
              return $.ajax({
                url: 'https://smart-dev.pragma.by/api/own/autocall/amocrm/settings.php',
                type: "POST",
                data: data
              });

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function requestSettings(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var pip = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data.account_id = AMOCRM.constant('account').id;
              data.referrer = AMOCRM.constant('account').subdomain;
              data.typeCRM = 'amocrm';
              _context2.next = 5;
              return $.ajax({
                url: 'https://smart.pragma.by/api/own/lirax/pip.php',
                type: "POST",
                data: data
              });

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function pip(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    requestSettings: requestSettings,
    pip: pip
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  'use strict';

  var instance = null;
  return function (context) {
    if (!instance && context) {
      instance = context;
    }

    return function (template) {
      return instance.render({
        href: '/templates/' + template + '.twig',
        base_path: instance.params.path,
        v: instance.get_version(),
        promised: true
      });
    };
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
  var pragma_url = 'https://smart-dev.pragma.by/api/integrations/store/amocrm/';
  var code = "pmLirax";

  function send(script, method, data) {
    data.account_id = AMOCRM.constant('account').id;
    return $.ajax({
      type: method,
      url: pragma_url + script,
      dataType: 'json',
      data: {
        json_data: JSON.stringify(data)
      }
    });
  }

  var Integrations = {};

  Integrations.short_info = function (integration_id) {
    return send('integrations.php', 'GET', {
      action: 'short_info',
      integration_id: integration_id,
      module_code: code
    });
  };

  Integrations.disable = function (integration_id) {
    return send('integrations.php', 'POST', {
      action: 'disable',
      integration_id: integration_id,
      module_code: code
    });
  };

  function isActive(info) {
    return isPragmaActive(info) && info.amocrm_enable;
  }

  function isPragmaActive(info) {
    return info.pragma_time_enable * 1000 > new Date().getTime();
  }

  function getDate(time) {
    var date = new Date(time);
    var date_string = date.toLocaleDateString('ru', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timezone: 'UTC'
    });
    var time_string = date.toLocaleString('ru', {
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric'
    });
    return date_string + ' ' + time_string;
  }

  function delay(_x) {
    return _delay.apply(this, arguments);
  }

  function _delay() {
    _delay = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(time) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (res) {
                return setTimeout(res, time);
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _delay.apply(this, arguments);
  }

  var Status = /*#__PURE__*/function () {
    function Status(info) {
      _classCallCheck(this, Status);

      _initialiseProps.call(this);

      this._set_status(info);

      this._render_body();
    }

    _createClass(Status, [{
      key: "statusText",
      get: function get() {
        return this.status === 'active' ? 'активен' : 'неактивен';
      }
    }, {
      key: "status",
      get: function get() {
        return this._status;
      }
    }, {
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return Status;
  }();

  Status._render = function (status) {
    return $("<div><span>\u0421\u0442\u0430\u0442\u0443\u0441: <span style=\"font-weight: 700\">".concat(status, "</span></span></div>"));
  };

  var _initialiseProps = function _initialiseProps() {
    var _this = this;

    this._set_status = function (info) {
      _this._status = info.is_enable ? 'active' : 'disable';
    };

    this._render_body = function () {
      return _this._$ = Status._render(_this.statusText);
    };
  };

  var ShutdownTime = /*#__PURE__*/function () {
    function ShutdownTime(info) {
      _classCallCheck(this, ShutdownTime);

      _initialiseProps2.call(this);

      this._inactive_time = info.pragma_inactive_time > info.amocrm_inactive_time ? info.amocrm_inactive_time : info.pragma_inactive_time;

      this._set_shutdown(info);

      this._render_body();
    }

    _createClass(ShutdownTime, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "shutdown_time_text",
      get: function get() {
        return this._shutdown_time_text;
      }
    }]);

    return ShutdownTime;
  }();

  ShutdownTime._render = function (active_time) {
    return $("<div><span\">".concat(active_time, "</span></div>"));
  };

  var _initialiseProps2 = function _initialiseProps2() {
    var _this2 = this;

    this._set_shutdown = function (info) {
      if (info.isFree || info.is_pragma_unlimited_time) _this2._shutdown_time_text = 'Активен до: ' + '<span style="font-weight: 700">время использования неограниченно</span>';else if (isActive(info)) _this2._shutdown_time_text = 'Активен до: <span style="font-weight: 700">' + getDate(info.pragma_time_enable * 1000) + '</span>';else _this2._shutdown_time_text = 'Оплачен до: <span style="font-weight: 700">' + getDate(info.pragma_time_enable * 1000) + '</span>';
    };

    this._render_body = function () {
      return _this2._$ = ShutdownTime._render(_this2.shutdown_time_text);
    };
  };

  var InactiveTime = /*#__PURE__*/function () {
    function InactiveTime(info) {
      _classCallCheck(this, InactiveTime);

      _initialiseProps3.call(this);

      this._inactive_time = this._get_shutdown_time(info) * 1000;

      this._set_shutdown();

      this._render_body();
    }

    _createClass(InactiveTime, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "text",
      get: function get() {
        return this._text;
      }
    }]);

    return InactiveTime;
  }();

  InactiveTime._render = function (active_time) {
    return $("<div><span\">".concat(active_time, "</span></div>"));
  };

  var _initialiseProps3 = function _initialiseProps3() {
    var _this3 = this;

    this._get_shutdown_time = function (info) {
      if (!info.pragma_inactive_time && info.amocrm_inactive_time) return info.amocrm_inactive_time;
      if (info.pragma_inactive_time && !info.amocrm_inactive_time) return info.pragma_inactive_time;
      if (info.pragma_inactive_time > info.amocrm_inactive_time && info.amocrm_inactive_time) return info.amocrm_inactive_time;
      return info.pragma_inactive_time || 0;
    };

    this._set_shutdown = function () {
      _this3._text = 'Неактивен с <span style="font-weight: 700">' + getDate(_this3._inactive_time) + '</span>';
    };

    this._render_body = function () {
      return _this3._$ = InactiveTime._render(_this3.text);
    };
  };

  var ModulesInfo = /*#__PURE__*/function () {
    function ModulesInfo($settings_modal, info) {
      _classCallCheck(this, ModulesInfo);

      _initialiseProps4.call(this);

      this._info = info;
      ModulesInfo._$settings_modal = $settings_modal !== null && $settings_modal !== void 0 ? $settings_modal : ModulesInfo._$settings_modal;
      this._status = new Status(info);
      this._shutdown_time = new ShutdownTime(info);
      this._inactive = new InactiveTime(info);

      this._render();

      this._insert();
    }

    _createClass(ModulesInfo, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "shutdown_time",
      get: function get() {
        return this._shutdown_time;
      }
    }, {
      key: "status",
      get: function get() {
        return this._status;
      }
    }, {
      key: "disabled",
      get: function get() {
        return this._disabled;
      }
    }], [{
      key: "$settings_modal",
      get: function get() {
        return ModulesInfo._$settings_modal;
      }
    }, {
      key: "instances",
      get: function get() {
        return this._instances;
      }
    }]);

    return ModulesInfo;
  }();

  ModulesInfo._render_container = function () {
    return $('<div></div>');
  };

  ModulesInfo._instances = [];
  ModulesInfo.isPragmaEnable = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var info;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ModulesInfo.info();

          case 2:
            info = _context2.sent;
            return _context2.abrupt("return", info.pragma_is_enable);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  ModulesInfo.isAmoEnable = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var info;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return ModulesInfo.info();

          case 2:
            info = _context3.sent;
            return _context3.abrupt("return", info.amocrm_enable);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  ModulesInfo.isEnable = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var info;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return ModulesInfo.info();

          case 2:
            info = _context4.sent;
            return _context4.abrupt("return", info.is_enable);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  ModulesInfo.info = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(integration_id) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!ModulesInfo._info) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return", ModulesInfo._info);

            case 2:
              _context5.next = 4;
              return Integrations.short_info(integration_id);

            case 4:
              ModulesInfo._info = _context5.sent;
              return _context5.abrupt("return", ModulesInfo._info);

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  ModulesInfo.disableGeneral = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(integration_id) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              Integrations.disable(integration_id);
              _context6.next = 3;
              return delay(2000);

            case 3:
              ModulesInfo.instances.forEach(function (instance) {
                return instance.disable();
              });
              ModulesInfo._instances = [];

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  ModulesInfo.enableGeneral = function ($settings_modal, integration_id) {
    ModulesInfo.instances.forEach(function (instance) {
      return instance.disable();
    });
    ModulesInfo._instances = [];
    ModulesInfo.create($settings_modal, integration_id);
  };

  ModulesInfo.create = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7($settings_modal, integration_id) {
      var info, instance;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return delay(2000);

            case 2:
              _context7.next = 4;
              return ModulesInfo.info(integration_id);

            case 4:
              info = _context7.sent;
              instance = new ModulesInfo($settings_modal, info);

              ModulesInfo._instances.push(instance);

              return _context7.abrupt("return", instance);

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x4, _x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  var _initialiseProps4 = function _initialiseProps4() {
    var _this4 = this;

    this._disabled = false;

    this._render = function () {
      _this4._$ = ModulesInfo._render_container();

      _this4.$.append(_this4.status.$);

      if (_this4.status.status !== 'active') _this4.$.append(_this4._inactive.$);

      _this4.$.append(_this4.shutdown_time.$);

      _this4._css();
    };

    this._css = function () {
      var css = {
        display: 'flex',
        'flex-direction': 'column',
        padding: '10px 15px',
        'margin-bottom': '15px',
        'border-radius': '5px'
      };

      if (_this4.status.status === 'active') {
        css.color = '#155724';
        css['background-color'] = '#d4edda';
        css.border = '1px solid #c3e6cb';
      } else {
        css.color = '#721c24';
        css['background-color'] = '#f8d7da';
        css.border = '1px solid #f5c6cb';
      }

      _this4.$.css(css);
    };

    this._insert = function () {
      var _ModulesInfo$$setting;

      return (_ModulesInfo$$setting = ModulesInfo.$settings_modal) === null || _ModulesInfo$$setting === void 0 ? void 0 : _ModulesInfo$$setting.prepend(_this4.$);
    };

    this.disable = function () {
      _this4.$.remove();

      _this4._disabled = true;
    };
  };

  return {
    ModulesInfo: ModulesInfo
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ])});;