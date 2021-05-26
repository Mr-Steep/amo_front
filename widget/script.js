define(["jquery","twigjs","lib/components/base/modal","lib/components/base/confirm"], (__WEBPACK_EXTERNAL_MODULE__273__, __WEBPACK_EXTERNAL_MODULE__821__, __WEBPACK_EXTERNAL_MODULE__651__, __WEBPACK_EXTERNAL_MODULE__464__) => { return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 957:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(278), __webpack_require__(865), __webpack_require__(455)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, load, modal, functions) {
  var templates = load.TwigWrapper._templates;

  var ModalProduct = /*#__PURE__*/function () {
    function ModalProduct(twig_, m_data, change, id, category_id, unit, items) {
      _classCallCheck(this, ModalProduct);

      _initialiseProps.call(this);

      this.__change = change;
      this._id = id;
      this._$ = ModalProduct.__render(twig_, m_data, this.__change, this._id, category_id, unit, items);
      this._account_id = AMOCRM.constant('account').id;
      this._$upload_img = this._$.find('.m_catalog_pragma-icon-img');
      this._$catalog_save_btn = this._$.find('.m_catalog_pragma-button_catalog_save');
      this._$catalog_delete_btn = this._$.find('.m_catalog_pragma-button_catalog_delete');
      this._$icon_delete_btn = this._$.find('.m_catalog_pragma-icon_delete');
      this._$InputPrice = this._$.find('#price_sale_catalog');
      this._$InputUnit = this._$.find('#section_select_unit');
      this._$HistoryComing = this._$.find('.body-history_table');
      this.bind_action();
    }

    _createClass(ModalProduct, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "_change",
      get: function get() {
        return this.__change;
      }
    }, {
      key: "$InputUnit",
      get: function get() {
        return this._$InputUnit;
      }
    }, {
      key: "$icon_delete_btn",
      get: function get() {
        return this._$icon_delete_btn;
      }
    }, {
      key: "$catalog_delete_btn",
      get: function get() {
        return this._$catalog_delete_btn;
      }
    }, {
      key: "$catalog_save_btn",
      get: function get() {
        return this._$catalog_save_btn;
      }
    }, {
      key: "account_id",
      get: function get() {
        return this._account_id;
      }
    }, {
      key: "$InputPrice",
      get: function get() {
        return this._$InputPrice;
      }
    }, {
      key: "$upload_img",
      get: function get() {
        return this._$upload_img;
      }
    }]);

    return ModalProduct;
  }();

  ModalProduct._section = null;

  ModalProduct.change = function () {
    return $("<div class=\"m_catalog_pragma-icon\">\n            <button type=\"button\" class=\"button-input m_catalog_pragma-icon_upload\" style=\"display: none;\"><span class=\"button-input-inner \">\n            <span class=\"button-input-inner__text\">\u2B73</span></span></button>\n            <input class=\"upload_icon\" id=\"upload_icon_img\" type=\"file\" name=\"files[]\" style=\"display: none;\">\n        <img class=\"m_catalog_pragma-icon-img\" src=\"\" alt=\"\">\n<!--        <button type=\"button\" class=\"button-input    m_catalog_pragma-icon_delete\" tabindex=\"\">-->\n<!--        <span class=\"button-input-inner \">-->\n<!--        <span class=\"button-input-inner__text\">x</span></span></button>-->\n\n        </div>");
  };

  ModalProduct.__render = function (twig_, m_data, change, id, category_id, unit, items) {
    var $twi = $(twig_.render({
      m_data: m_data,
      id: id,
      category_id: category_id,
      unit: unit,
      items: items
    }));
    change ? $twi.find('.m_catalog_pragma-icon').replaceWith(ModalProduct.change()) : 0;
    return $twi;
  };

  var _initialiseProps = function _initialiseProps() {
    var _this5 = this;

    this.bind_action = function () {
      _this5.$upload_img.hover(function () {
        $('.m_catalog_pragma-footer').hide();
        $('.m_catalog_pragma-header').css({
          'margin-bottom': '42px'
        });
      }, function () {
        $('.m_catalog_pragma-footer').show();
        $('.m_catalog_pragma-header').css({
          'margin-bottom': ''
        });
      });

      _this5.$InputPrice.on('keypress', function (e) {
        var KeyCode = e.charCode;

        if (KeyCode === 43 || KeyCode === 45) {
          return false;
        }

        if (KeyCode === 46) return functions.Settings._integer;
      });

      _this5.$InputPrice.attr('min', '0');

      _this5.$catalog_delete_btn.on('click', function () {
        var obj = {
          title: 'Удалить товар?',
          class_name: 'delete_product-modal',
          accept_text: 'Удалить',
          cancel_text: 'Отмена',
          accept_func: function () {
            var _accept_func = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var res_del_product;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return functions.request({
                        flag: 'product_delete',
                        product_id: _this5.id
                      });

                    case 2:
                      res_del_product = _context10.sent;
                      _context10.t0 = res_del_product;
                      _context10.next = _context10.t0 === true ? 6 : _context10.t0 === 'true' ? 6 : 10;
                      break;

                    case 6:
                      modal.alert.showAlertModal('Удалено', true, 1000);
                      $(".el_table_product[id=\"".concat(_this5.$.attr('id'), "\"]")).remove();
                      setTimeout(function () {
                        return $('.icon.icon-modal-close').trigger('click');
                      }, 1100);
                      return _context10.abrupt("break", 12);

                    case 10:
                      modal.alert.showAlertModal('Ошибка', false, 1000);
                      return _context10.abrupt("break", 12);

                    case 12:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));

            function accept_func() {
              return _accept_func.apply(this, arguments);
            }

            return accept_func;
          }()
        };
        modal.ConfirmModal(obj);
      });

      _this5.$InputUnit.on('click', function () {
        _this5.$InputUnit.val('');
      });

      _this5.$catalog_save_btn.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var check_data_enter;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                check_data_enter = _this5.check_enter_data();
                _context11.t0 = check_data_enter;
                _context11.next = _context11.t0 === true ? 4 : _context11.t0 === false ? 7 : 9;
                break;

              case 4:
                _context11.next = 6;
                return _this5.btn_save_date();

              case 6:
                return _context11.abrupt("break", 9);

              case 7:
                modal.alert.showAlertModal('Заполните обязательные поля', false, 1000);
                return _context11.abrupt("break", 9);

              case 9:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      })));

      _this5.$icon_delete_btn.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _this5.delete_icon();

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      })));

      _this5.$upload_img.on('click', function () {
        switch (_this5.id) {
          case null:
            modal.alert.showAlertModal('Необходимо создать товар', false, 1300);
            break;

          default:
            var self = _this5;
            $('#upload_icon_img').trigger('click').one('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var files;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      files = this.files;
                      _context13.next = 3;
                      return self.request_upload(files);

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            })));
            break;
        }
      });
    };

    this.check_enter_data = function () {
      var title = $('#name_catalog_inp').val();
      var desc = $('#description_catalog').val();
      var article = $('#name_catalog_article').val();
      var price = $('#price_sale_catalog').val();
      var Lt = title.length !== 0;
      var Ld = true;
      var La = article.length !== 0;
      var Lp = price.length !== 0;
      return Lt && La && Lp;
    };

    this.request_upload = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(files) {
        var data, name_, response;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                data = new FormData();
                name_ = "account_id=".concat(_this5.account_id, "&name_file=").concat(files[0].name, "&product_id=").concat(_this5.id);
                data.append("files", files[0], name_);
                _context14.next = 5;
                return $.ajax({
                  url: load.url + "file.php",
                  type: "POST",
                  data: data,
                  async: true,
                  processData: false,
                  contentType: false
                });

              case 5:
                response = _context14.sent;
                $('.m_catalog_pragma-icon-img').attr('src', response);

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function (_x2) {
        return _ref13.apply(this, arguments);
      };
    }();

    this.btn_save_date = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
      var data, __a__, __b__, data_product, answer_create, add_tov, parse_answer, ara, el_table, obj;

      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              data = {
                account_id: _this5.account_id,
                section_id: $('#section_catalog_inp').val(),
                img_link: $('.m_catalog_pragma-icon-img').attr('src'),
                title: $('.m_catalog_pragma-name_catalog_inp').val(),
                desc: $('.m_catalog_pragma-description_catalog').val(),
                article: $('.m_catalog_pragma-article_inpu_catalog').val(),
                section: $('.log_pragma-sectio_iinpu_catalog button span').text(),
                balance: $('#price_sale_catalog').val(),
                unit: $('#section_select_unit').val(),
                selling_price: $('.cl_pragma-price_sale_catalog').val()
              };
              __a__ = ModalProduct._section;
              __b__ = data.section;
              _context16.t0 = _this5._change;
              _context16.next = _context16.t0 === false ? 6 : _context16.t0 === true ? 31 : 36;
              break;

            case 6:
              data.flag = 'save_product';
              data_product = {
                id: data.product_id,
                title: data.title,
                section_id: data.section_id,
                category_id: data.section_id,
                article: data.article,
                img_link: data.img_link,
                balance: data.balance * 1,
                decs: data.desc,
                unit: data.unit,
                selling_price: data.selling_price * 1
              };
              _context16.next = 10;
              return functions.request(data);

            case 10:
              answer_create = _context16.sent;
              add_tov = answer_create.includes('article');
              _context16.t1 = add_tov;
              _context16.next = _context16.t1 === true ? 15 : _context16.t1 === 'true' ? 15 : 28;
              break;

            case 15:
              parse_answer = JSON.parse(answer_create);
              data.id = parse_answer.id;
              data_product.id = parse_answer.id;
              ara = JSON.parse(Catalog.AllProduct);
              ara.push({
                id: data.id,
                category_id: data.section_id * 1,
                article: data.article,
                title: data.title,
                img_link: data.img_link,
                selling_price: data.selling_price * 1,
                unit: data.unit,
                balance: data.balance * 1,
                deleted: 0
              });
              Catalog.AllProduct = JSON.stringify(ara);
              modal.alert.showAlertModal('Товар добавлен!', true, 1000);
              data_product.balance = 0;
              functions.Settings._integer = Catalog.fractional;
              el_table = new ElTabProduct(data_product);
              $('.product_pragma-body').append(el_table.$);
              setTimeout(function () {
                return _this5.close_modal();
              }, 1001);
              return _context16.abrupt("break", 30);

            case 28:
              modal.alert.showAlertModal('Ошибка! Товар с таким артикулом существует', false, 1200);
              return _context16.abrupt("break", 30);

            case 30:
              return _context16.abrupt("break", 36);

            case 31:
              data.flag = 'update_product';
              data.id = _this5.$.attr('id');
              obj = {
                title: 'Сохранить изменения?',
                class_name: 'update_product',
                accept_text: 'Сохранить',
                cancel_text: 'Отмена',
                accept_func: function () {
                  var _accept_func2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                    var res_update_product, el, _el_table, Foo, index, _el_table2;

                    return regeneratorRuntime.wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            _context15.next = 2;
                            return functions.request(data);

                          case 2:
                            res_update_product = _context15.sent;
                            _context15.t0 = res_update_product;
                            _context15.next = _context15.t0 === true ? 6 : _context15.t0 === 'true' ? 6 : 32;
                            break;

                          case 6:
                            el = $(".el_table_product[id=\"".concat(data.id, "\"]"));
                            functions.Settings._integer = Catalog.fractional;
                            _el_table = new ElTabProduct(data);
                            el.replaceWith(_el_table.$);
                            Foo = JSON.parse(Catalog.AllProduct);
                            _context15.t1 = regeneratorRuntime.keys(Foo);

                          case 12:
                            if ((_context15.t2 = _context15.t1()).done) {
                              _context15.next = 28;
                              break;
                            }

                            index = _context15.t2.value;

                            if (!Foo.hasOwnProperty(index)) {
                              _context15.next = 26;
                              break;
                            }

                            _context15.t3 = data.article;
                            _context15.next = _context15.t3 === Foo[index].article ? 18 : 26;
                            break;

                          case 18:
                            Foo[index].section = data.section;
                            Foo[index].title = data.title;
                            Foo[index].selling_price = data.selling_price * 1;
                            Foo[index].category_id = data.section_id * 1;
                            Foo[index].balance = data.balance * 1;
                            Foo[index].unit = data.unit;
                            Catalog.AllProduct = JSON.stringify(Foo);
                            return _context15.abrupt("break", 26);

                          case 26:
                            _context15.next = 12;
                            break;

                          case 28:
                            if (__a__ != null) {
                              if (__a__ !== __b__) {
                                $("#".concat(data.id)).remove();
                              } else {
                                functions.Settings._integer = Catalog.fractional;
                                _el_table2 = new ElTabProduct(data);
                                el.replaceWith(_el_table2.$);
                              }
                            }

                            modal.alert.showAlertModal('Товар Изменен!', true, 1000);
                            setTimeout(function () {
                              return _this5.close_modal();
                            }, 1001);
                            return _context15.abrupt("break", 40);

                          case 32:
                            _context15.t4 = JSON.parse(res_update_product).code;
                            _context15.next = _context15.t4 === 802 ? 35 : 37;
                            break;

                          case 35:
                            modal.alert.showAlertModal('Ошибка! Товар с таким артикулом существует', false, 1500);
                            return _context15.abrupt("break", 39);

                          case 37:
                            modal.alert.showAlertModal('Ошибка!' + res_update_product, false, 1000);
                            return _context15.abrupt("break", 39);

                          case 39:
                            return _context15.abrupt("break", 40);

                          case 40:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  function accept_func() {
                    return _accept_func2.apply(this, arguments);
                  }

                  return accept_func;
                }()
              };
              modal.ConfirmModal(obj);
              return _context16.abrupt("break", 36);

            case 36:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));

    this.close_modal = function () {
      $('.icon.icon-modal-close').trigger('click');
    };

    this.delete_icon = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
      var _icon_im, url_img;

      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _icon_im = $('.m_catalog_pragma-icon-img');
              url_img = _icon_im.attr('src');

              if (!(url_img.length > 1)) {
                _context17.next = 5;
                break;
              }

              _context17.next = 5;
              return functions.request({
                flag: 'del_img',
                product_id: _this5.id
              });

            case 5:
              _icon_im.remove();

              $('.m_catalog_pragma-icon_delete').remove();

              _this5.$.find('.m_catalog_pragma-icon_upload').show();

            case 8:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));
  };

  var ModalProductInfo = /*#__PURE__*/function () {
    function ModalProductInfo(data) {
      _classCallCheck(this, ModalProductInfo);

      _initialiseProps2.call(this);

      this._id = data.id;
      this._title = data.title;
      this._balance = functions.Settings.FractionNumbers(data.balance);
      this._unit = data.unit;
      this._selling_price = functions.Settings.FractionNumbers(data.selling_price);
      this._img_link = data.img_link;
      this._$ = ModalProductInfo.__render(this._title, this._balance, this._unit, this._selling_price, this._img_link);
      this._$HistoryComing = this._$.find('.body-history_table');
      this.render_history().then(function (r) {
        return r;
      });
    }

    _createClass(ModalProductInfo, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "$HistoryComing",
      get: function get() {
        return this._$HistoryComing;
      }
    }]);

    return ModalProductInfo;
  }();

  ModalProductInfo.__render = function (title, balance, unit, selling_price, img_link) {
    return $(ModalProductInfo.Twig.render({
      title: title,
      balance: balance,
      unit: unit,
      selling_price: selling_price,
      img_link: img_link
    }));
  };

  var _initialiseProps2 = function _initialiseProps2() {
    var _this6 = this;

    this.formatter_ddd_mm_gg = function (DATA) {
      var W = DATA.split(' ')[0].split('-');
      var t = '.';
      return W[2] + t + W[1] + t + W[0];
    };

    this.render_history = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
      var ElHistoryTwig, array_HEl, history_product, PhProduct, PhP, data, el;
      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              ElHistoryTwig = templates.ModalProductHistoryEl;
              array_HEl = [];
              _context18.next = 4;
              return functions.request({
                flag: 'history_product',
                product_id: _this6.id
              });

            case 4:
              history_product = _context18.sent;
              PhProduct = JSON.parse(history_product);

              for (PhP in PhProduct) {
                if (PhProduct.hasOwnProperty(PhP)) {
                  data = {
                    no: PhP * 1 + 1,
                    date: _this6.formatter_ddd_mm_gg(PhProduct[PhP].date),
                    quantity: functions.Settings.FractionNumbers(PhProduct[PhP].quantity),
                    price_purchase: functions.Settings.FractionNumbers(PhProduct[PhP].purchase_price),
                    remainder: functions.Settings.FractionNumbers(PhProduct[PhP].balance)
                  };
                  el = ElHistoryTwig.render({
                    data: data
                  });
                  array_HEl.push($(el));
                }
              }

              _this6.$HistoryComing.html(array_HEl);

            case 8:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }));
  };

  var Btn_one = /*#__PURE__*/function () {
    function Btn_one(name, data) {
      _classCallCheck(this, Btn_one);

      _initialiseProps3.call(this);

      this._id = name + 1;
      this._Data = data;
      this._$ = Btn_one.__render(name + 1);
      this.bind_action();
    }

    _createClass(Btn_one, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "Data",
      get: function get() {
        return this._Data;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }]);

    return Btn_one;
  }();

  Btn_one.__render = function (name) {
    var btm = "<button type=\"button\"  id=pagination_pragma_btn_".concat(name, " class=\"button-input    page_coming\" tabindex=\"\"  >\n                     <span class=\"button-input-inner \">\n                      <span class=\"button-input-inner__text\">").concat(name, "</span>\n                    </span>\n                </button>");
    return $(btm);
  };

  var _initialiseProps3 = function _initialiseProps3() {
    var _this7 = this;

    this.bind_action = function () {
      _this7.$.on('click', function () {
        var table = new TableProducts(_this7.Data);
        $('.product_pragma-body').html(table.$);

        _this7.active_btn();

        var LenArr = Btn_arr.AllElem.length;

        if (LenArr > 7) {
          if (_this7.id === 1) {
            Btn_one.mode = 1;

            _this7.clickFirst();

            _this7.active_btn();
          }

          if (Btn_one.mode === 5) {
            _this7.clickModeFive(_this7.id);

            _this7.active_btn();
          }

          if (_this7.id === Btn_one.LastBtn) {
            _this7.clickLast();

            Btn_one.mode = 5;

            _this7.active_btn();
          }

          if (_this7.id === 5) {
            Btn_one.mode = 5;

            _this7.clickFive();

            _this7.active_btn();
          }
        } else if (LenArr === 7) {
          if (_this7.id === 1) {
            Btn_one.mode = 1;

            _this7.clickFirst();

            _this7.active_btn();
          } else {
            _this7.clickLess(_this7.id);

            _this7.active_btn();
          }
        }
      });
    };

    this.clickLess = function (clickId) {
      var FivBtn = new Btn_arr(Btn_arr.AllElem);
      FivBtn.$;

      if (clickId > 4) {
        FivBtn.clickModeLast();
      } else {
        FivBtn.clickModeFirst();
      }
    };

    this.clickLast = function () {
      var FivBtn = new Btn_arr(Btn_arr.AllElem);
      FivBtn.$;
      FivBtn.clickModeLast();
    };

    this.clickFirst = function () {
      var FivBtn = new Btn_arr(Btn_arr.AllElem);
      FivBtn.$;
      FivBtn.clickModeFirst();
    };

    this.clickModeFive = function (click) {
      var FivBtn = new Btn_arr(Btn_arr.AllElem);
      FivBtn.$;
      FivBtn.clickModeFive(click);
    };

    this.clickFive = function () {
      var FivBtn = new Btn_arr(Btn_arr.AllElem);
      FivBtn.$;
      FivBtn.btnClickFive();
    };

    this.active_btn = function () {
      Btn_one.id_click = _this7.id;
      $('.page_coming').each(function () {
        var _this8 = this;

        $(this).find('span').find('span').css({
          color: '#C6CACE'
        });
        $(this).hover(function () {
          $(_this8).find('span').find('span').css({
            color: '#313942'
          });
        }, function () {
          $(_this8).find('span').find('span').css({
            color: '#C6CACE'
          });
        });
      });
      var el = $("#pagination_pragma_btn_".concat(_this7.id));
      el.off("mouseenter mouseleave");
      el.find('span').find('span').css({
        color: '#313942'
      });
    };

    this.touch_btn = function () {
      $('.button-input.page_catalog').css({
        'background': '#f5f5f5',
        'color': 'black'
      });

      _this7.$.css({
        'background': '#7A8692',
        'color': '#fff'
      });
    };
  };

  var Btn_arr = /*#__PURE__*/function () {
    function Btn_arr(arr) {
      _classCallCheck(this, Btn_arr);

      _initialiseProps4.call(this);

      Btn_arr.AllElem = arr;
      this._$ = Btn_arr.__render("catalog");
      this._$placeBtn = this._$.find('.pragma_pagination-pages_pragma');
      this._$Prev = this._$.find('.pragma_pagination_prev');
      this._$Next = this._$.find('.pragma_pagination_next');
      this._$Input = this._$.find('#pragma_input_quantity_stock');
      Btn_one.LastBtn = arr.length;
      this._$AllBtn = Btn_arr.render_btn(arr);
      this.btnRender();
      this.bind_actions();
    }

    _createClass(Btn_arr, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Prev",
      get: function get() {
        return this._$Prev;
      }
    }, {
      key: "$placeBtn",
      get: function get() {
        return this._$placeBtn;
      }
    }, {
      key: "$Next",
      get: function get() {
        return this._$Next;
      }
    }, {
      key: "$Input",
      get: function get() {
        return this._$Input;
      }
    }, {
      key: "$AllBtn",
      get: function get() {
        return this._$AllBtn;
      }
    }]);

    return Btn_arr;
  }();

  Btn_arr.ellipsis = function () {
    return $("<div class=\"ellipsis_pragma_stock\"><span class=\"pagination-ellipsis\">...</span></div>");
  };

  Btn_arr.render_btn = function (array) {
    var arr = [];

    for (var i = 0; i < array.length; i++) {
      var button_page = new Btn_one(array[i].page, array[i].products);
      arr.push(button_page.$);
    }

    return arr;
  };

  Btn_arr.__render = function (_class_) {
    return $(templates.PaginationPragma.render({
      _class_: _class_
    }));
  };

  var _initialiseProps4 = function _initialiseProps4() {
    var _this9 = this;

    this.bind_actions = function () {
      _this9.$Prev.on('click', function () {
        var all_btn = _this9.$AllBtn.length;
        var num = Btn_one.id_click;
        var id_next;

        if (num == 1) {
          id_next = all_btn;
        } else {
          id_next = num - 1;
        }

        var id_ = '#pagination_pragma_btn_' + id_next;
        $(id_).trigger('click');
      });

      _this9.$Next.on('click', function () {
        var all_btn = _this9.$AllBtn.length;
        var num = Btn_one.id_click;
        var id_next;

        if (num == all_btn) {
          id_next = 1;
        } else {
          id_next = num + 1;
        }

        var id_ = '#pagination_pragma_btn_' + id_next;
        $(id_).trigger('click');
      });

      _this9.$Prev.hover(function () {
        $('#path-prev_btn').css({
          'fill': '#4c8bf7'
        });
      }, function () {
        $('#path-prev_btn').css({
          'fill': 'black'
        });
      });

      _this9.$Next.hover(function () {
        $('#path-next_btn').css({
          'fill': '#4c8bf7'
        });
      }, function () {
        $('#path-next_btn').css({
          'fill': 'black'
        });
      });

      _this9.$Input.on('change', function () {
        Btn_one.mode = 1;

        var value = _this9.$Input.val();

        var parse_data = JSON.parse(Catalog.AllProduct);
        var org_cat = functions.organization_array(parse_data, value);
        var btn = new Btn_arr(org_cat);
        $('.stock_pragma-catalogs').html(btn.$);
        $('.page_coming').first().trigger('click');
        var el = $('#pragma_input_quantity_stock').parent();
        el.find('button').find('span').text(value);
        el.find('ul li').attr('class', 'control--select--list--item');
        el.find("ul li[data-value=\"".concat(value, "\"]")).attr('class', 'control--select--list--item  control--select--list--item-selected');
      });
    };

    this.btnRender = function () {
      _this9.$AllBtn.length > 6 ? _this9.btnMoreFive() : _this9.$placeBtn.html(_this9.$AllBtn);
    };

    this.btnMoreFive = function () {
      var len = _this9.$AllBtn.length;
      var ARR;

      var FirstFiveBtn = _this9.$AllBtn.slice(0, 5);

      var lastBtn = _this9.$AllBtn[len - 1];
      ARR = FirstFiveBtn;
      ARR.push(Btn_arr.ellipsis());
      ARR.push(lastBtn);

      _this9.$placeBtn.html(ARR);
    };

    this.btnClickFive = function () {
      var arsV = [];
      var First = _this9.$AllBtn[0];
      var BtnActive = Btn_one.id_click - 1;

      var elem = _this9.$AllBtn.slice(BtnActive - 2, BtnActive + 3);

      var len_btn = _this9.$AllBtn.length;

      switch (len_btn) {
        case 8:
          arsV.push(First);
          arsV.push(Btn_arr.ellipsis());
          arsV.push(elem);
          arsV.push(_this9.$AllBtn[len_btn - 1]);
          break;

        default:
          arsV.push(First);
          arsV.push(Btn_arr.ellipsis());
          arsV.push(elem);
          arsV.push(Btn_arr.ellipsis());
          arsV.push(_this9.$AllBtn[len_btn - 1]);
          break;
      }

      $('.pragma_pagination-pages_pragma').html(arsV.flat());
    };

    this.clickModeLast = function () {
      var arr = [];
      var len = _this9.$AllBtn.length;
      var First = _this9.$AllBtn[0];

      var elm = _this9.$AllBtn.slice(len - 5, len);

      arr.push(First);
      arr.push(Btn_arr.ellipsis());
      arr.push(elm);
      $('.pragma_pagination-pages_pragma').html(arr.flat());
    };

    this.clickModeFirst = function () {
      var len = _this9.$AllBtn.length;
      var ARR;

      var FirstFiveBtn = _this9.$AllBtn.slice(0, 5);

      var lastBtn = _this9.$AllBtn[len - 1];
      ARR = FirstFiveBtn;
      ARR.push(Btn_arr.ellipsis());
      ARR.push(lastBtn);
      $('.pragma_pagination-pages_pragma').html(ARR.flat());
    };

    this.clickModeFive = function (click) {
      var arr = [];
      var len = _this9.$AllBtn.length;
      var last = _this9.$AllBtn[len - 1];
      var First = _this9.$AllBtn[0];

      if (len - click <= 3) {
        var elm = _this9.$AllBtn.slice(len - 5, len);

        arr.push(First);
        arr.push(Btn_arr.ellipsis());
        arr.push(elm);
      } else if (click <= 4) {
        var _elm = _this9.$AllBtn.slice(0, 5);

        arr.push(_elm);
        arr.push(Btn_arr.ellipsis());
        arr.push(last);
      } else {
        var elem = _this9.$AllBtn.slice(click - 3, click + 2);

        arr.push(First);
        arr.push(Btn_arr.ellipsis());
        arr.push(elem);
        arr.push(Btn_arr.ellipsis());
        arr.push(last);
      }

      $('.pragma_pagination-pages_pragma').html(arr.flat());
    };
  };

  var ElTabProduct = /*#__PURE__*/function () {
    function ElTabProduct(product) {
      var _this = this;

      _classCallCheck(this, ElTabProduct);

      this.bind_action = function () {
        _this.$$Name.on('click', function (event) {
          event.stopPropagation();

          _this.click_information();
        });

        _this.$$BtnInfo.on('click', function (event) {
          event.stopPropagation();

          _this.click_information();
        });

        _this.$$BtnEdit.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (ElTabProduct.active) {
                    _context.next = 9;
                    break;
                  }

                  ElTabProduct.active = true;

                  _this.Loader.show();

                  _this.Block.show();

                  _context.next = 6;
                  return _this.click_this();

                case 6:
                  _this.Loader.hide();

                  _this.Block.hide();

                  ElTabProduct.active = false;

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      };

      this.click_information = function () {
        ModalProductInfo.Twig = templates.ModalProductInfo;
        var $ModalProductInfo = new ModalProductInfo(_this.product);
        var obj = {
          title: 'Информация о товаре',
          class_name: 'product-modal-info'
        };
        modal.ConfirmModal(obj);
        var $M_add_product_modal = $('.product-modal-info');
        $M_add_product_modal.find('.modal-body__inner').append($ModalProductInfo.$);
        Catalog.RecUnt($M_add_product_modal, {
          'border-radius': '10px',
          'width': '700px'
        });
      };

      this.fill_in = function () {
        $('.m_catalog_pragma-icon-img').attr('src', _this.url_icon);
        $('#name_catalog_inp').val(_this.title);
        $('#description_catalog').val(_this.description);
        $('#name_catalog_article').val(_this.article);
        $('#kolich_catalog_inp').val(_this.quantity);
        $('#price_sale_catalog').val(_this.price_sail);
      };

      this.get_name_section = function (id_section) {
        var AllSection = JSON.parse(Catalog.AllSection);

        for (var ind in AllSection) {
          if (AllSection[ind].id == id_section) {
            return AllSection[ind].title;
          }
        }
      };

      this.request_da = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(flag) {
          var parse_data, arr, tt;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  parse_data = JSON.parse(Catalog.AllSection);
                  arr = [];
                  _context2.t0 = flag;
                  _context2.next = _context2.t0 === true ? 5 : 7;
                  break;

                case 5:
                  arr.push({
                    option: "Новый раздел",
                    id: 'new_section'
                  });
                  return _context2.abrupt("break", 7);

                case 7:
                  for (tt in parse_data) {
                    if (parse_data.hasOwnProperty(tt)) {
                      arr.push({
                        option: parse_data[tt].title,
                        id: parse_data[tt].id
                      });
                    }
                  }

                  return _context2.abrupt("return", arr);

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }();

      this.click_this = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var Twig_el, m_data, items, Modal_Product, obj, $M_add_product_modal;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Twig_el = templates.ModalProduct;
                _context3.next = 3;
                return _this.request_da(false);

              case 3:
                m_data = _context3.sent;
                _context3.next = 6;
                return ElTabProduct.items_gen();

              case 6:
                items = _context3.sent;
                Modal_Product = new ModalProduct(Twig_el, m_data, true, _this.id, _this.category_id, _this.unit, items);
                obj = {
                  title: 'Редактирование товара',
                  class_name: 'add_product-modal'
                };
                modal.ConfirmModal(obj);
                $M_add_product_modal = $('.add_product-modal');
                $M_add_product_modal.find('.modal-body__inner').append(Modal_Product.$);
                Catalog.RecUnt($M_add_product_modal, {
                  'border-radius': '10px'
                });

                _this.fill_in();

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      this._Loader = $('.loader_pragma_id');
      this._Block = $('.pragma_block');
      this._product = product;
      this._id = product.id;
      this._description = product.desc;
      this._category_id = product.category_id; //section_id

      this._section = this.get_name_section(this._category_id);
      this._unit = product.unit;
      this._url_icon = product.img_link ? product.img_link : load.url + 'temp/no.png';
      this._title = product.title;
      this._article = product.article;
      this._balance = functions.Settings.FractionNumbers(product.balance);
      this._selling_price = functions.Settings.FractionNumbers(product.selling_price);
      this._price_purchase = functions.Settings.FractionNumbers(product.price_purchase);
      this._account_id = AMOCRM.constant('account').id;
      this._$ = ElTabProduct.__render(this._id, this._url_icon, this._title, this._article, this._balance, this._unit, this._selling_price, functions.tbl());
      this._$$BtnInfo = this._$.find('#btn_info_el');
      this._$$BtnEdit = this._$.find('.pragma_catalog_edit');
      this._$$Name = this._$.find('.table-name-el-label');
      this.bind_action();
    }

    _createClass(ElTabProduct, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "Loader",
      get: function get() {
        return this._Loader;
      }
    }, {
      key: "Block",
      get: function get() {
        return this._Block;
      }
    }, {
      key: "$$BtnInfo",
      get: function get() {
        return this._$$BtnInfo;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "description",
      get: function get() {
        return this._description;
      }
    }, {
      key: "price_purchase",
      get: function get() {
        return this._price_purchase;
      }
    }, {
      key: "section",
      get: function get() {
        return this._section;
      }
    }, {
      key: "unit",
      get: function get() {
        return this._unit;
      }
    }, {
      key: "product",
      get: function get() {
        return this._product;
      }
    }, {
      key: "url_icon",
      get: function get() {
        return this._url_icon;
      }
    }, {
      key: "title",
      get: function get() {
        return this._title;
      }
    }, {
      key: "article",
      get: function get() {
        return this._article;
      }
    }, {
      key: "quantity",
      get: function get() {
        return this._balance;
      }
    }, {
      key: "price_sail",
      get: function get() {
        return this._selling_price;
      }
    }, {
      key: "category_id",
      get: function get() {
        return this._category_id;
      }
    }, {
      key: "$$BtnEdit",
      get: function get() {
        return this._$$BtnEdit;
      }
    }, {
      key: "$$Name",
      get: function get() {
        return this._$$Name;
      }
    }]);

    return ElTabProduct;
  }();

  ElTabProduct.active = false;
  ElTabProduct.items_gen = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
    var units, arr_units, ARR, U, $name;
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return functions.request({
              flag: 'get_units'
            });

          case 2:
            units = _context19.sent;
            arr_units = JSON.parse(units);
            ARR = "";

            for (U in arr_units) {
              $name = arr_units[U].unit;
              ARR += "<option>".concat($name, "</option>"); // id: arr_units[U].unit,
              // value: arr_units[U].uni
            }

            return _context19.abrupt("return", ARR);

          case 7:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  ElTabProduct.__render = function (id, url_icon, name, article, quantity, selected, selling_price, tbl) {
    return $(templates.elproduct.render({
      id: id,
      url_icon: url_icon,
      name: name,
      article: article,
      quantity: quantity,
      selected: selected,
      selling_price: selling_price,
      tbl: tbl
    }));
  };

  var TableProducts = /*#__PURE__*/function () {
    function TableProducts(array_products) {
      _classCallCheck(this, TableProducts);

      this._$ = TableProducts.__render(array_products);
    }

    _createClass(TableProducts, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return TableProducts;
  }();

  TableProducts.__render = function (array_products) {
    var array_pro = [];
    functions.Settings._integer = Catalog.fractional;
    functions.setTbd(true);

    for (var el in array_products) {
      if (array_products.hasOwnProperty(el)) {
        var Product = new ElTabProduct(array_products[el]);
        array_pro.push(Product.$);
      }
    }

    return array_pro;
  };

  var ModalSection = /*#__PURE__*/function () {
    function ModalSection(change) {
      var _this2 = this;

      _classCallCheck(this, ModalSection);

      this.bind_action = function () {
        _this2.$btn_del.on('click', function () {
          $('.modal-body__close').trigger('click');
        });

        _this2.$btn_save.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var check_enter_data, res, exists_name_section, res_parse, el_RightCatalog, res_update_section, _el_RightCatalog, parse_arr, ind, _id;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  check_enter_data = _this2.check_enter();
                  _context4.t0 = check_enter_data;
                  _context4.next = _context4.t0 === true ? 4 : _context4.t0 === false ? 40 : 42;
                  break;

                case 4:
                  if (!(_this2.$change === false)) {
                    _context4.next = 23;
                    break;
                  }

                  _context4.next = 7;
                  return functions.request({
                    flag: 'section_add',
                    title: _this2.$title.val(),
                    description: _this2.$description.val()
                  });

                case 7:
                  res = _context4.sent;
                  exists_name_section = _this2.exists_name(res);
                  _context4.t1 = exists_name_section;
                  _context4.next = _context4.t1 === true ? 12 : _context4.t1 === false ? 19 : 21;
                  break;

                case 12:
                  res_parse = JSON.parse(res);

                  _this2.ADD_Section_ALL({
                    id: res_parse.category_id,
                    title: res_parse.title
                  });

                  el_RightCatalog = new ElementSection(res_parse.title, _this2.$description.val(), res_parse.category_id);
                  $('.body-right_catalogs').append(el_RightCatalog.$);
                  modal.alert.showAlertModal('Раздел создан!', true, 1100);
                  setTimeout(function () {
                    return _this2.close_modal();
                  }, 1101);
                  return _context4.abrupt("break", 21);

                case 19:
                  modal.alert.showAlertModal('Раздел с таким названием существует!', false, 1200);
                  return _context4.abrupt("break", 21);

                case 21:
                  _context4.next = 39;
                  break;

                case 23:
                  _context4.next = 25;
                  return functions.request({
                    flag: 'section_update',
                    title: _this2.$title.val(),
                    coming_id: _this2.$change,
                    //id_section
                    description: _this2.$description.val()
                  });

                case 25:
                  res_update_section = _context4.sent;
                  _context4.t2 = res_update_section;
                  _context4.next = _context4.t2 === true ? 29 : _context4.t2 === 'true' ? 29 : 37;
                  break;

                case 29:
                  _el_RightCatalog = new ElementSection(_this2.$title.val(), _this2.$description.val(), _this2.$change);
                  $(".el-pragma_catalog-cat[id = \"".concat(_this2.$change, "\"]")).parent().parent().replaceWith(_el_RightCatalog.$);
                  parse_arr = JSON.parse(Catalog.AllSection);

                  for (ind in parse_arr) {
                    if (parse_arr.hasOwnProperty(ind)) {
                      _id = parse_arr[ind].id;

                      switch (_id) {
                        case _this2.$change:
                          parse_arr[ind].title = _this2.$title.val();
                      }
                    }
                  }

                  Catalog.AllSection = JSON.stringify(parse_arr);
                  modal.alert.showAlertModal('Название раздело изменено!', true, 1100);
                  setTimeout(function () {
                    return _this2.close_modal();
                  }, 1101);
                  return _context4.abrupt("break", 39);

                case 37:
                  modal.alert.showAlertModal('Раздел с таким названием существует!', false, 1200);
                  return _context4.abrupt("break", 39);

                case 39:
                  return _context4.abrupt("break", 42);

                case 40:
                  modal.alert.showAlertModal('Заполните обязательные поля', false, 1000);
                  return _context4.abrupt("break", 42);

                case 42:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        })));
      };

      this.exists_name = function (str) {
        return str.includes('title');
      };

      this.check_enter = function () {
        var title = _this2.$title.val();

        var DT = title.length !== 0;
        var DD = true;
        return DT && DD;
      };

      this.ADD_Section_ALL = function (OBJ) {
        var parse_arr = JSON.parse(Catalog.AllSection);
        parse_arr.push(OBJ);
        Catalog.AllSection = JSON.stringify(parse_arr);
      };

      this.fill_data = function (id_section) {
        var arr_section = JSON.parse(Catalog.AllSection);

        for (var index in arr_section) {
          if (arr_section.hasOwnProperty(index)) {
            var _id = arr_section[index].id;

            switch (_id) {
              case id_section:
                _this2.$title.val(arr_section[index].title);

            }
          }
        }
      };

      this.close_modal = function () {
        $('.modal-body__close').trigger('click');
      };

      this._$ = ModalSection.__render();
      this._$btn_del = this._$.find('.modal_section-delete');
      this._$btn_save = this._$.find('.modal_section-save');
      this._$title = this._$.find('#name_catalog_inp');
      this._$description = this._$.find('#description_catalog');
      this._account_id = AMOCRM.constant('account').id;
      this._$change = change;
      this.bind_action();
      this._$change ? this.fill_data(this._$change) : '';
    }

    _createClass(ModalSection, [{
      key: "$btn_del",
      get: function get() {
        return this._$btn_del;
      }
    }, {
      key: "account_id",
      get: function get() {
        return this._account_id;
      }
    }, {
      key: "$description",
      get: function get() {
        return this._$description;
      }
    }, {
      key: "$title",
      get: function get() {
        return this._$title;
      }
    }, {
      key: "$btn_save",
      get: function get() {
        return this._$btn_save;
      }
    }, {
      key: "$change",
      get: function get() {
        return this._$change;
      }
    }, {
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return ModalSection;
  }();

  ModalSection.SelectedSection = 0;

  ModalSection.__render = function () {
    return $(ModalSection.Twig.render());
  };

  var ElementSection = /*#__PURE__*/function () {
    function ElementSection(name, description, id) {
      _classCallCheck(this, ElementSection);

      _initialiseProps5.call(this);

      this._$ = ElementSection.__render(name, description, id);
      this._account_id = AMOCRM.constant('account').id;
      this._id = id;
      this._name = name;
      this._allProducts = Catalog.AllProducts;
      this._$btn_change = this._$.find('.coming_btn_change');
      this._$menu_change = this._$.find('.small_menu_change');
      this._$BTNmenu_change = this._$.find('.menu_change');
      this._$BTNmenu_delete = this._$.find('.menu_delete');
      this.bind_action();
    }

    _createClass(ElementSection, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "$BTNmenu_delete",
      get: function get() {
        return this._$BTNmenu_delete;
      }
    }, {
      key: "$BTNmenu_change",
      get: function get() {
        return this._$BTNmenu_change;
      }
    }, {
      key: "$menu_change",
      get: function get() {
        return this._$menu_change;
      }
    }, {
      key: "account_id",
      get: function get() {
        return this._account_id;
      }
    }, {
      key: "$btn_change",
      get: function get() {
        return this._$btn_change;
      }
    }, {
      key: "name",
      get: function get() {
        return this._name;
      }
    }, {
      key: "allProducts",
      get: function get() {
        return this._allProducts;
      }
    }]);

    return ElementSection;
  }();

  ElementSection.__render = function (name, description, id) {
    var _class = "el-pragma_catalog";
    return $(templates.rigth_catalog.render({
      name: name,
      description: description,
      id: id,
      _class: _class
    }));
  };

  var _initialiseProps5 = function _initialiseProps5() {
    var _this10 = this;

    this.bind_action = function () {
      _this10.$.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                ModalProduct._section = _this10.name;
                _context20.next = 3;
                return _this10.render_product_in_section();

              case 3:
                _this10.btn_ch();

                _this10.styles();

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      })));

      _this10.$.hover(function () {
        var id_ = '#el_rc_' + _this10.id;
        $(id_).find('.small_menu_change').show();
      }, function () {
        var id_ = '#el_rc_' + _this10.id;
        $(id_).find('.small_menu_change').hide();
      });

      _this10.$BTNmenu_delete.on('click', function () {
        var obj = {
          title: 'Удалить раздел?',
          class_name: 'modal-delete_coming',
          accept_text: 'Удалить',
          cancel_text: 'Отмена',
          accept_func: function () {
            var _accept_func3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var res_delete_section;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return functions.request({
                        flag: "section_delete",
                        coming_id: _this10.id,
                        account_id: _this10.account_id
                      });

                    case 2:
                      res_delete_section = _context21.sent;
                      _context21.t0 = res_delete_section;
                      _context21.next = _context21.t0 === true ? 6 : _context21.t0 === 'true' ? 6 : 11;
                      break;

                    case 6:
                      modal.alert.showAlertModal('Раздел удалён', true, 1000);
                      setTimeout(function () {
                        return _this10.close_modal();
                      }, 1001);

                      _this10.$.remove();

                      $('.el-pragma_catalog:first').trigger('click');
                      return _context21.abrupt("break", 13);

                    case 11:
                      modal.alert.showAlertModal('Возникла ошибка', false, 1000);
                      return _context21.abrupt("break", 13);

                    case 13:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21);
            }));

            function accept_func() {
              return _accept_func3.apply(this, arguments);
            }

            return accept_func;
          }()
        };
        modal.ConfirmModal(obj);
      });

      _this10.$BTNmenu_change.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        var Modal_Section, obj, M_change_section;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                Modal_Section = new ModalSection(_this10.id);
                obj = {
                  title: 'Изменить раздел',
                  class_name: 'change_section-modal'
                };
                modal.ConfirmModal(obj);
                M_change_section = $('.change_section-modal');
                M_change_section.find('.modal-body__inner').append(Modal_Section.$);
                Catalog.RecUnt(M_change_section, {
                  'border-radius': '10px',
                  'width': '450px'
                });

              case 6:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22);
      })));

      _this10.$btn_change.on('click', function () {
        $('.small_menu_change').hide();

        _this10.$menu_change.show();
      });
    };

    this.btn_ch = function () {
      $('.small_menu_change').hide();

      _this10.$menu_change.show();
    };

    this.styles = function () {
      $('.el-pragma_catalog').css({
        "background-color": "transparent"
      });
      $('.el-pragma_catalog-cat').css({
        "color": "black"
      }); // this.$.css({"background-color": "#fff", "border-radius": "0 50px 50px 0"});

      _this10.$.css({
        "background-color": "#fff"
      });

      _this10.$.find('.el-pragma_catalog-cat').css({
        "color": "black"
      });

      $('.el-pragma_catalog').each(function () {
        var _this11 = this;

        $(this).css({
          "background-color": "transparent"
        });
        $(this).hover(function () {
          $(_this11).css({
            "background-color": '#f2f2f24d'
          });
          $(_this11).find('.small_menu_change').show();
        }, function () {
          $(_this11).css({
            "background-color": "transparent"
          });
          $(_this11).find('.small_menu_change').hide();
        });
      });
      var el = $("#el_rc_".concat(_this10.id));
      el.off("mouseenter mouseleave");
      el.css({
        "background-color": '#f2f2f24d'
      });
    };

    this.close_modal = function () {
      $('.modal-body__close').trigger('click');
    };

    this.request_t = /*#__PURE__*/function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(flag) {
        var _data, parse_data, arr, tt;

        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _data = Catalog.AllSection;
                parse_data = JSON.parse(_data);
                arr = [];
                _context23.t0 = flag;
                _context23.next = _context23.t0 === true ? 6 : 8;
                break;

              case 6:
                arr.push({
                  option: "Новый раздел",
                  id: 'new_section'
                });
                return _context23.abrupt("break", 8);

              case 8:
                for (tt in parse_data) {
                  if (parse_data.hasOwnProperty(tt)) {
                    arr.push({
                      option: parse_data[tt].title,
                      id: parse_data[tt].id
                    });
                  }
                }

                return _context23.abrupt("return", arr);

              case 10:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23);
      }));

      return function (_x3) {
        return _ref20.apply(this, arguments);
      };
    }();

    this.render_product_in_section = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
      return regeneratorRuntime.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return _this10.render_products();

            case 2:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24);
    }));
    this.render_products = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
      var parse_product, array_product_in_section, _Product, product_body, arr, products, btn;

      return regeneratorRuntime.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              parse_product = JSON.parse(Catalog.AllProduct);
              array_product_in_section = [];

              for (_Product in parse_product) {
                if (parse_product[_Product].category_id === _this10.id) {
                  array_product_in_section.push(parse_product[_Product]);
                }
              }

              product_body = $('.product_pragma-body');

              if (array_product_in_section.length > 0 && product_body.text().length > 0) {
                arr = functions.organization_array(array_product_in_section, 25);
                products = new TableProducts(arr[0].products);
                btn = new Btn_arr(arr);
                product_body.html(products.$);
                $('.product_pragma-header').html(products.$);
                $('.stock_pragma-catalogs').html(btn.$);
              } else {
                product_body.html(' ');
                $('.product_pragma-header').html('');
              }

            case 5:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25);
    }));
  };

  var RightCatalog = /*#__PURE__*/function () {
    function RightCatalog(AllSection, allProducts) {
      _classCallCheck(this, RightCatalog);

      this._$ = RightCatalog.__render(AllSection, allProducts);
    }

    _createClass(RightCatalog, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return RightCatalog;
  }();

  RightCatalog.__render = function (arr_el, allProducts) {
    var array = [];

    for (var first_el in arr_el) {
      if (arr_el.hasOwnProperty(first_el)) {
        var name = arr_el[first_el].title;
        var description = 'lololololololo';
        var id = arr_el[first_el].id;
        var el = new ElementSection(name, description, id, allProducts);
        array.push(el.$);
      }
    }

    return array;
  };

  var Catalog = /*#__PURE__*/function () {
    function Catalog() {
      var _this3 = this;

      _classCallCheck(this, Catalog);

      this.bind_action = function () {
        _this3.$tabName.on('click', function () {
          var Loader = $('.loader_pragma_id');
          var Block = $('.pragma_block');

          if (!Catalog.active) {
            Catalog.active = true;
            Block.show();
            Loader.show();

            _this3.SORT(_this3.$tabName, 'title');

            Loader.hide();
            Block.hide();
            Catalog.active = false;
          }
        });

        _this3.$tabArticle.on('click', function () {
          var Loader = $('.loader_pragma_id');
          var Block = $('.pragma_block');

          if (!Catalog.active) {
            Catalog.active = true;
            Block.show();
            Loader.show();

            _this3.SORT(_this3.$tabArticle, 'article');

            Block.hide();
            Loader.hide();
            Catalog.active = false;
          }
        });

        _this3.$tabQuantity.on('click', function () {
          var Loader = $('.loader_pragma_id');
          var Block = $('.pragma_block');

          if (!Catalog.active) {
            Catalog.active = true;
            Loader.show();
            Block.show();

            _this3.SORT(_this3.$tabQuantity, 'balance');

            Loader.hide();
            Block.hide();
            Catalog.active = false;
          }
        });

        _this3.$tabPrice_sail.on('click', function () {
          var Block = $('.pragma_block');
          var Loader = $('.loader_pragma_id');

          if (!Catalog.active) {
            Catalog.active = true;
            Block.show();
            Loader.show();

            _this3.SORT(_this3.$tabPrice_sail, 'selling_price');

            Block.hide();
            Loader.hide();
            Catalog.active = false;
          }
        });

        _this3.$INPUT_SEARCH.on('input', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var Block, Loader, val_input, All_Products, array_includes, I, ITEM, ARTICLE, TITLE, LArticle, LTitle, LInput, org_cat, btn;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  Block = $('.pragma_block');
                  Loader = $('.loader_pragma_id');

                  if (!Catalog.active) {
                    Catalog.active = true;
                    Block.show();
                    Loader.show();
                    val_input = _this3.$INPUT_SEARCH.val();
                    All_Products = JSON.parse(Catalog.AllProduct);
                    array_includes = [];

                    for (I in All_Products) {
                      ITEM = All_Products[I];
                      ARTICLE = ITEM.article;
                      TITLE = ITEM.title;
                      LArticle = ARTICLE.toLowerCase();
                      LTitle = TITLE.toLowerCase();
                      LInput = val_input.toLowerCase();

                      if (LArticle.includes(LInput) || LTitle.includes(LInput)) {
                        array_includes.push(ITEM);
                      }
                    }

                    array_includes.length === 0 ? $('.product_pragma-body').html(' ') : 0;
                    org_cat = functions.organization_array(array_includes, 20);
                    btn = new Btn_arr(org_cat);
                    $('.stock_pragma-catalogs').html(btn.$);
                    $('#pagination_pragma_btn_1').trigger('click');
                    Block.hide();
                    Loader.hide();
                    Catalog.active = false;
                  }

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        })));
      };

      this.SORT = function ($OBJ, name_index) {
        _this3.delete_arrow();

        _this3.color($OBJ);

        var array_article = [];
        $('.table-article-el-label').each(function () {
          var article = $(this).text().trim();
          array_article.push(article);
        });
        var arrow;
        var sort_product = JSON.parse(Catalog.AllProduct);
        var New_array = [];

        var _loop = function _loop(product) {
          var item = sort_product.find(function (item) {
            return item.article == array_article[product];
          });
          New_array.push(item);
        };

        for (var product in array_article) {
          _loop(product);
        }

        New_array.sort(function (a, b) {
          var _a = a[name_index];
          var _b = b[name_index];

          if (name_index === 'selling_price' || name_index === 'balance') {
            _a *= 1;
            _b *= 1;
          }

          if (_a > _b) return 1;
          if (_a < _b) return -1;
          return 0;
        });

        switch (Catalog.FlagSort) {
          case false:
            Catalog.FlagSort = true;
            var id_down = "arrow_down_catalog_pragma";
            arrow = Catalog.ArrowDown.render({
              id_down: id_down
            });
            break;

          case true:
            New_array = New_array.reverse();
            Catalog.FlagSort = false;
            var id_up = "arrow_down_catalog_pragma";
            arrow = Catalog.ArrowUp.render({
              id_up: id_up
            });
            break;
        }

        $OBJ.append(arrow);
        var sort_array = [];
        functions.Settings._integer = Catalog.fractional;
        functions.setTbd(true);

        for (var i in New_array) {
          var el = new ElTabProduct(New_array[i]);
          sort_array.push(el.$);
        }

        _this3.$body_table.html(sort_array);
      };

      this.color = function ($OBJ) {
        var color = "rgba(133,145,165,.5)";
        $('.body-table-name-label').css({
          color: color
        });
        $('.body-table-article-label').css({
          color: color
        });
        $('.body-table-quantity-label').css({
          color: color
        });
        $('.body-table-price_sail-label').css({
          color: color
        });
        $OBJ.find('div').css({
          color: "#6e747a"
        });
      };

      this.delete_arrow = function () {
        $('.pragma_arrow_up').remove();
        $('.pragma_arrow_down').remove();
      };

      this.FillGetData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var num,
            Loader,
            Block,
            parse_data,
            org_cat,
            btn,
            parse_json_allSection,
            _RightCatalog,
            _args6 = arguments;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                num = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : 25;
                Loader = $('.loader_pragma_id');
                Block = $('.pragma_block');

                if (Catalog.active) {
                  _context6.next = 30;
                  break;
                }

                Catalog.active = true;
                Loader.show();
                Block.show();
                _context6.next = 9;
                return functions.request({
                  flag: 'section_get',
                  account_id: _this3.account_id
                });

              case 9:
                Catalog.AllSection = _context6.sent;
                _context6.next = 12;
                return functions.request({
                  flag: 'products_get',
                  account_id: _this3.account_id,
                  store_id: Catalog.Store_id
                });

              case 12:
                Catalog.AllProduct = _context6.sent;
                ElementSection.Twig = templates.rightcatalog;
                ModalSection.Twig = templates.ModalSection;
                Catalog.ArrowDown = templates.ArrowDown;
                Catalog.ArrowUp = templates.ArrowUp;
                parse_data = JSON.parse(Catalog.AllProduct);
                org_cat = functions.organization_array(parse_data, num);
                btn = new Btn_arr(org_cat);
                $('.stock_pragma-catalogs').html(btn.$);
                $('.page_coming').first().trigger('click');
                parse_json_allSection = JSON.parse(Catalog.AllSection);
                _RightCatalog = new RightCatalog(parse_json_allSection, parse_data);

                _this3.right_section.append(_RightCatalog.$);

                _this3.$tabName.trigger('click');

                _this3.active_stock().then(function (r) {
                  return r;
                });

                Loader.hide();
                Block.hide();
                Catalog.active = false;

              case 30:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      this.active_stock = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var id_active, $textStock, AllStock, I, name;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                id_active = 1 * functions.Settings.ActiveStock;
                $textStock = $('.top-first_pragma_shop');
                _context7.next = 4;
                return functions.request({
                  flag: 'get_stock'
                });

              case 4:
                AllStock = _context7.sent;

                if (!(id_active === -1)) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt("return", $textStock.text('Все Склады'));

              case 7:
                AllStock = JSON.parse(AllStock);
                _context7.t0 = regeneratorRuntime.keys(AllStock);

              case 9:
                if ((_context7.t1 = _context7.t0()).done) {
                  _context7.next = 19;
                  break;
                }

                I = _context7.t1.value;
                _context7.t2 = AllStock[I].id * 1;
                _context7.next = _context7.t2 === id_active ? 14 : 17;
                break;

              case 14:
                name = AllStock[I].title;
                $textStock.text(name);
                return _context7.abrupt("break", 17);

              case 17:
                _context7.next = 9;
                break;

              case 19:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
      Catalog.AllSection = [];
      Catalog.AllProduct = [];
      this._$ = Catalog.__render();
      this._right_section = this._$.find('.body-right_catalogs');
      this._$body_table = this._$.find('.product_pragma-body');
      this._$tabName = this._$.find('.body-table-name');
      this._$tabArticle = this._$.find('.body-table-article');
      this._$tabQuantity = this._$.find('.body-table-quantity');
      this._$tabPrice_sail = this._$.find('.body-table-price_sail');
      this._$INPUT_SEARCH = $('#search_pragma-second');
      this._account_id = AMOCRM.constant('account').id;
      this.FillGetData().then(function (r) {
        return r;
      });
      this.bind_action();
    }

    _createClass(Catalog, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$body_table",
      get: function get() {
        return this._$body_table;
      }
    }, {
      key: "$tabName",
      get: function get() {
        return this._$tabName;
      }
    }, {
      key: "$INPUT_SEARCH",
      get: function get() {
        return this._$INPUT_SEARCH;
      }
    }, {
      key: "$tabQuantity",
      get: function get() {
        return this._$tabQuantity;
      }
    }, {
      key: "account_id",
      get: function get() {
        return this._account_id;
      }
    }, {
      key: "$tabArticle",
      get: function get() {
        return this._$tabArticle;
      }
    }, {
      key: "$tabPrice_sail",
      get: function get() {
        return this._$tabPrice_sail;
      }
    }, {
      key: "right_section",
      get: function get() {
        return this._right_section;
      }
    }]);

    return Catalog;
  }();

  Catalog.click = 0;
  Catalog.FlagSort = false;
  Catalog.active = false;
  Catalog.clickSectionAdd = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
    var Loader, Block, Modal_Section, obj, M_add_stock;
    return regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            Loader = $('.loader_pragma_id');
            Block = $('.pragma_block');

            if (!Catalog.active) {
              Catalog.active = true;
              Loader.show();
              Block.show();
              Modal_Section = new ModalSection(false);
              obj = {
                title: 'Новый раздел',
                class_name: 'add_stock-modal'
              };
              modal.ConfirmModal(obj);
              M_add_stock = $('.add_stock-modal');
              M_add_stock.find('.modal-body__inner').append(Modal_Section.$);
              Catalog.RecUnt(M_add_stock, {
                'border-radius': '10px',
                'width': '450px'
              });
              Loader.hide();
              Block.hide();
              Catalog.active = false;
            }

          case 3:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));
  Catalog.clickProductAdd = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
    var Block, Loader, AllSection, TwigModalProduct, m_data, items, Modal_Product, obj, M_add_product;
    return regeneratorRuntime.wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            Block = $('.pragma_block');
            Loader = $('.loader_pragma_id');

            if (Catalog.active) {
              _context27.next = 29;
              break;
            }

            Catalog.active = true;
            Loader.show();
            Block.show();
            AllSection = JSON.parse(Catalog.AllSection);
            _context27.t0 = AllSection.length;
            _context27.next = _context27.t0 === 0 ? 10 : 12;
            break;

          case 10:
            modal.alert.showAlertModal('Создайте Раздел', false, 1200);
            return _context27.abrupt("break", 26);

          case 12:
            TwigModalProduct = templates.ModalProduct;
            _context27.next = 15;
            return Catalog.request_dat(false);

          case 15:
            m_data = _context27.sent;
            _context27.next = 18;
            return ElTabProduct.items_gen();

          case 18:
            items = _context27.sent;
            Modal_Product = new ModalProduct(TwigModalProduct, m_data, false, null, '', '', items);
            obj = {
              title: 'Новый товар',
              class_name: 'add_product-modal'
            };
            modal.ConfirmModal(obj);
            M_add_product = $('.add_product-modal');
            M_add_product.find('.modal-body__inner').append(Modal_Product.$);
            Catalog.RecUnt(M_add_product, {
              'border-radius': '10px'
            });
            return _context27.abrupt("break", 26);

          case 26:
            Block.hide();
            Loader.hide();
            Catalog.active = false;

          case 29:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  }));

  Catalog.request_dat = /*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(flag) {
      var _data, parse_data, arr, tt;

      return regeneratorRuntime.wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              _data = Catalog.AllSection;
              parse_data = JSON.parse(_data);
              arr = [];
              _context28.t0 = flag;
              _context28.next = _context28.t0 === true ? 6 : 8;
              break;

            case 6:
              arr.push({
                option: "Новый раздел",
                id: 'new_section'
              });
              return _context28.abrupt("break", 8);

            case 8:
              for (tt in parse_data) {
                if (parse_data.hasOwnProperty(tt)) {
                  arr.push({
                    option: parse_data[tt].title,
                    id: parse_data[tt].id
                  });
                }
              }

              return _context28.abrupt("return", arr);

            case 10:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee28);
    }));

    return function (_x4) {
      return _ref25.apply(this, arguments);
    };
  }();

  Catalog.RecUnt = function ($OBJ, data) {
    $OBJ.children().children().css(data);
    $OBJ.find('.modal-body').trigger('modal:loaded').trigger('modal:centrify');
  };

  Catalog.__render = function () {
    return $(Catalog.Twig.render());
  };

  var CatalogBtnAdditional = /*#__PURE__*/function () {
    function CatalogBtnAdditional() {
      var _this4 = this;

      _classCallCheck(this, CatalogBtnAdditional);

      this.bind_actions = function () {
        _this4.$btnAddSection.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return Catalog.clickSectionAdd();

                case 2:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        })));

        _this4.$btnAddProduct.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return Catalog.clickProductAdd();

                case 2:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        })));
      };

      this._$ = CatalogBtnAdditional._render();
      this._$btnAddSection = this._$.find('#more-three-section-pragma');
      this._$btnAddProduct = this._$.find('#four-add_product_pragma');
      this.bind_actions();
    }

    _createClass(CatalogBtnAdditional, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$btnAddSection",
      get: function get() {
        return this._$btnAddSection;
      }
    }, {
      key: "$btnAddProduct",
      get: function get() {
        return this._$btnAddProduct;
      }
    }]);

    return CatalogBtnAdditional;
  }();

  CatalogBtnAdditional._render = function () {
    var Btn = "\n              <div class=\"top-three_more-three\">\n            <button type=\"button\" class=\"button-input button-input_blue   more-three-section\" tabindex=\"\"\n                    id=\"more-three-section-pragma\"><span class=\"button-input-inner \">\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"margin-right: 5px\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n         width=\"7pt\" height=\"7pt\" viewBox=\"0 0 7 7\" version=\"1.1\">\n<path style=\"fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;\"\n      d=\"M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 \"\n      transform=\"matrix(0.0199164,0,0,0.0199164,0,0)\"></path>\n<path style=\"fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;\"\n      d=\"M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 \"\n      transform=\"matrix(0.000000000000000001,0.0199164,-0.0199164,0.000000000000000001,7,0)\"></path>\n</svg>\n\n    <span class=\"button-input-inner__text\">\u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u0420\u0410\u0417\u0414\u0415\u041B</span></span></button>\n        </div>\n              <div class=\"top-three_more-four\">\n            <button type=\"button\" class=\"button-input button-input_blue   more-four-add_product\" tabindex=\"\"\n                    id=\"four-add_product_pragma\"><span class=\"button-input-inner \">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"margin-right: 5px\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n         width=\"7pt\" height=\"7pt\" viewBox=\"0 0 7 7\" version=\"1.1\">\n<path style=\"fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;\"\n      d=\"M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 \"\n      transform=\"matrix(0.0199164,0,0,0.0199164,0,0)\"></path>\n<path style=\"fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;\"\n      d=\"M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 \"\n      transform=\"matrix(0.000000000000000001,0.0199164,-0.0199164,0.000000000000000001,7,0)\"></path>\n</svg>\n    <span class=\"button-input-inner__text\">\u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u0422\u041E\u0412\u0410\u0420</span></span></button>\n        </div>";
    return $(Btn);
  };

  return {
    Catalog: Catalog,
    RightCatalog: RightCatalog,
    TableProducts: TableProducts,
    ElTabProduct: ElTabProduct,
    Section: ModalSection,
    Product: ModalProduct,
    Btn_one: Btn_one,
    Btn_arr: Btn_arr,
    CatalogBtnAdditional: CatalogBtnAdditional
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 733:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(278), __webpack_require__(865), __webpack_require__(455)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, load, modal, functions) {
  var templates = load.TwigWrapper._templates;

  var DiscountSVG = /*#__PURE__*/function () {
    function DiscountSVG(data) {
      var _this = this;

      _classCallCheck(this, DiscountSVG);

      this.bins_actions = function () {
        _this.$.on('click', function () {
          if (!Discount.Twig) {
            Discount.Twig = templates.PragmaDiscount;
          } // const _id = 'products_id_' + this.id
          // $(`.pragma_checkbox-leads_storage[id="${_id}"]`).trigger('click')


          var $Discount = new Discount(_this.data);
          var obj = {
            title: 'Скидка',
            class_name: 'modal-discount_pragma'
          };
          modal.ConfirmModal(obj);
          var ModalDiscount = $('.' + obj.class_name);
          ModalDiscount.find('.modal-body__inner').append($Discount.$);
          ColonLeads.RecUnt(ModalDiscount, {
            'width': '300px',
            'border-radius': '10px'
          });
        });

        if (_this.discount) {
          _this.$.on({
            mouseenter: function mouseenter() {
              var $SVG = $(this).find('svg');
              var $Label = $(this).find('.discount_label-value');
              $SVG.attr('width', 42);
              $SVG.attr('height', 48);
              $Label.show();
            },
            mouseleave: function mouseleave() {
              var $Label = $(this).find('.discount_label-value');
              var $SVG = $(this).find('svg');
              $SVG.attr('width', 14);
              $SVG.attr('height', 16);
              $Label.hide();
            }
          });
        }
      };

      this._data = data;
      this._id = this._data.id;
      this._discount = this._data.discount;
      this._$ = DiscountSVG._render(this._id, this._discount);
      this.bins_actions();
    }

    _createClass(DiscountSVG, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "discount",
      get: function get() {
        return this._discount;
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      }
    }]);

    return DiscountSVG;
  }();

  DiscountSVG._render = function (id, discount) {
    switch (discount) {
      case 0:
        return $(templates.discountNullSVG.render({
          id: id
        }));

      default:
        return $(templates.discountLeadsSvg.render({
          id: id,
          discount: discount
        }));
    }
  };

  var DiscountAll = /*#__PURE__*/function () {
    function DiscountAll() {
      var _this2 = this;

      _classCallCheck(this, DiscountAll);

      this.bind_action = function () {
        _this2.$$BUTTON.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this2.pressBtn();

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));

        _this2.$$INPUT.on('focusout', function () {
          var val = _this2.$$INPUT.val();

          var newVal = val.replace(/[\D]+/g, '');

          var _discount = functions.Settings.FractionNumbers(newVal);

          _this2.$$INPUT.val(newVal * 1 > 99 ? 99 : _discount);
        });
      };

      this.pressBtn = function () {
        var obj = {
          title: 'Скидка для всех товаров',
          message: 'Все данные, как-либо связанные с выбранными элементами, будут изменены',
          class_name: 'modal-leads-pragma_discount_all',
          accept_text: 'Применить',
          cancel_text: 'Отмена',
          accept_func: function () {
            var _accept_func = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _this2.PressBtnApply();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            function accept_func() {
              return _accept_func.apply(this, arguments);
            }

            return accept_func;
          }()
        };
        modal.ConfirmModal(obj);
      };

      this.PressBtnApply = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var idS_arr, $$APPLY, newDiscount, Answer, $rest;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                idS_arr = DiscountAll.getIsChecked;
                $$APPLY = $('#pragma_discount_all-apply');
                $$APPLY.trigger('button:load:start');
                newDiscount = _this2.$$INPUT.val() * 1;
                _context3.next = 6;
                return _this2.change_price(newDiscount, idS_arr);

              case 6:
                Answer = _context3.sent;
                $rest = Answer === '1';
                _context3.t0 = $rest;
                _context3.next = _context3.t0 === true ? 11 : 17;
                break;

              case 11:
                $('.modal-body__close').trigger('click');
                modal.alert.showAlertModal('OK', true, 2000);
                $$APPLY.trigger('button:load:stop');
                _context3.next = 16;
                return _RenderPage();

              case 16:
                return _context3.abrupt("break", 20);

              case 17:
                modal.alert.showAlertModal('Ошибка', false, 2000);
                $$APPLY.trigger('button:load:stop');
                return _context3.abrupt("break", 20);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      this.searchFullPrice = function (id) {
        var fullPrice = 0;
        var _products = _this2.Prod;

        for (var Key in _products) {
          if (_products.hasOwnProperty(Key)) {
            if (_products[Key].id === id) {
              fullPrice = _products[Key].full_price == 0 ? _products[Key].selling_price : _products[Key].full_price;
            }
          }
        }

        return fullPrice;
      };

      this.unique = function (arr) {
        var result = [];

        var _iterator = _createForOfIteratorHelper(arr),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var str = _step.value;

            if (!result.includes(str)) {
              result.push(str);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return result;
      };

      this.change_price = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(discount, iDs) {
          var idSarr, arr_change_exports, item, _id_, $INPUT, price, priceNew;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  idSarr = iDs;
                  arr_change_exports = [];

                  for (item in idSarr) {
                    _id_ = idSarr[item];
                    $INPUT = $("#".concat(_id_)).find('.el-price_sail').find('input');
                    price = _this2.searchFullPrice(_id_);
                    priceNew = functions.calculation_discount(price, discount);
                    $INPUT.val(priceNew);
                    arr_change_exports.push({
                      export_id: _id_,
                      full_price: price,
                      price_new: priceNew,
                      discount: discount
                    });
                  }

                  _context4.next = 5;
                  return functions.request({
                    flag: 'save_discount_all',
                    update_exports: arr_change_exports
                  });

                case 5:
                  return _context4.abrupt("return", _context4.sent);

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }();

      this.saveDiscountId = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id, discount) {
          var full_price;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  full_price = _this2.searchFullPrice(id);
                  _context5.next = 3;
                  return functions.request({
                    flag: 'save_discount',
                    export_id: id,
                    discount: discount,
                    full_price: full_price
                  });

                case 3:
                  return _context5.abrupt("return", _context5.sent);

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x3, _x4) {
          return _ref4.apply(this, arguments);
        };
      }();

      this._$ = DiscountAll._render();
      this._$$INPUT = this._$.find('#header_input-all');
      this._$$BUTTON = this._$.find('#pragma_discount_all-apply');
      this._Prod = DiscountAll.ExportProduct;
      this.bind_action();
    }

    _createClass(DiscountAll, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "Prod",
      get: function get() {
        return this._Prod;
      }
    }, {
      key: "$$INPUT",
      get: function get() {
        return this._$$INPUT;
      }
    }, {
      key: "$$BUTTON",
      get: function get() {
        return this._$$BUTTON;
      }
    }]);

    return DiscountAll;
  }();

  DiscountAll._render = function () {
    return $(DiscountAll.Twig.render());
  };

  var Discount = /*#__PURE__*/function () {
    function Discount(data) {
      var _this3 = this;

      _classCallCheck(this, Discount);

      this.bind_action = function () {
        _this3.$$InputDisc.on('focusout', function () {
          var Price = _this3.$$InputDisc.val() * 1;
          var fullPrice = _this3.$$FullPrice.val() * 1;
          var disc_full_price = functions.calculation_disc_full_price(Price, fullPrice);

          if (Price < 0) {
            disc_full_price = 0.00;
          }

          _this3.$$Input.val(disc_full_price);
        });

        _this3.$$Apply.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var discount, resAnswer, $res, ValDiscount, $INPUT;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  discount = _this3.$$Input.val() * 1;
                  _context6.next = 3;
                  return _this3.saveDiscountId(_this3.id, discount, _this3.$$FullPrice.val());

                case 3:
                  resAnswer = _context6.sent;
                  $res = resAnswer === '1';
                  _context6.t0 = $res;
                  _context6.next = _context6.t0 === true ? 8 : 16;
                  break;

                case 8:
                  $('.modal-body__close').trigger('click');
                  modal.alert.showAlertModal('Скидка изменина', true, 2000);
                  ValDiscount = functions.Settings.FractionNumbers(_this3.$$InputDisc.val());
                  $INPUT = $("#".concat(_this3.id)).find('.el-price_sail').find('input');
                  $INPUT.val(ValDiscount);
                  _context6.next = 15;
                  return functions.request({
                    flag: 'update_selling_price',
                    export_id: _this3.id,
                    selling_price: ValDiscount
                  });

                case 15:
                  return _context6.abrupt("break", 18);

                case 16:
                  modal.alert.showAlertModal('Ошибка', false, 2000);
                  return _context6.abrupt("break", 18);

                case 18:
                  _context6.next = 20;
                  return _RenderPage();

                case 20:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        })));

        _this3.$$FullPrice.on('focusout', function () {
          _this3.$$Input.trigger('focusout');
        });

        _this3.$$Input.on('focusout', function () {
          var val = _this3.$$Input.val();

          var newVal = val.replace(/[\D]+/g, '');

          var _discount = functions.Settings.FractionNumbers(newVal);

          _this3.$$Input.val(newVal * 1 > 99 ? 99 : _discount);

          var price = _this3.$$FullPrice.val() * 1;
          var ValDesc = functions.calculation_discount(price, _discount > 99 ? 99 : _discount);

          _this3.$$InputDisc.val(ValDesc);
        });
      };

      this.saveDiscountId = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id, discount, full_price) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return functions.request({
                    flag: 'save_discount',
                    export_id: id,
                    discount: discount,
                    full_price: full_price
                  });

                case 2:
                  return _context7.abrupt("return", _context7.sent);

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x5, _x6, _x7) {
          return _ref6.apply(this, arguments);
        };
      }();

      this._data = data;
      this._id = this._data.id;
      this._discount = functions.Settings.FractionNumbers(this._data.discount);
      this._price = functions.Settings.FractionNumbers(this._data.selling_price);
      this._full_price_first = this._data.full_price ? this._data.full_price : this._data.selling_price;
      this._$ = Discount._render(this._discount, this._price, functions.Settings.FractionNumbers(this._full_price_first));
      this._$$Input = this._$.find('.pragma_discount-input_product');
      this._$$Apply = this._$.find('#pragma_discount_apply');
      this._$$FullPrice = this._$.find('#discount_full_price');
      this._$$InputDisc = this._$.find('.pragma_discount-footer_input');
      this.bind_action();
    }

    _createClass(Discount, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$$Input",
      get: function get() {
        return this._$$Input;
      }
    }, {
      key: "$$FullPrice",
      get: function get() {
        return this._$$FullPrice;
      }
    }, {
      key: "$$InputDisc",
      get: function get() {
        return this._$$InputDisc;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "$$Apply",
      get: function get() {
        return this._$$Apply;
      }
    }, {
      key: "discount",
      get: function get() {
        return this._discount;
      }
    }, {
      key: "selling_price",
      get: function get() {
        return this._selling_price;
      }
    }, {
      key: "price",
      get: function get() {
        return this._price;
      }
    }]);

    return Discount;
  }();

  Discount._render = function (discount, discount_price, full_price) {
    return $(Discount.Twig.render({
      discount: discount,
      discount_price: discount_price,
      full_price: full_price
    }));
  };

  var SelectProducts = function SelectProducts() {
    _classCallCheck(this, SelectProducts);
  };

  SelectProducts.SelectedProducts = [];

  SelectProducts.FOLLOW_CHECK = function (id, check) {
    switch (check) {
      case true:
        SelectProducts.add(id);
        break;

      case false:
        SelectProducts.del(id);
        break;
    }

    SelectProducts.follow();
  };

  SelectProducts.addAll = function (Ids) {
    SelectProducts.SelectedProducts = Ids;
  };

  SelectProducts.delAll = function () {
    SelectProducts.SelectedProducts = [];
  };

  SelectProducts.add = function (id) {
    SelectProducts.SelectedProducts.push(id);
  };

  SelectProducts.del = function (id) {
    var ARR = [];
    SelectProducts.SelectedProducts.forEach(function (item) {
      if (id !== item) {
        ARR.push(item);
      }
    });
    SelectProducts.SelectedProducts = ARR;
  };

  SelectProducts.follow = function () {
    var AlQuantityProducts = $('.pragma_checkbox-leads_storage').length;
    var _LEN = LineChangeAll.getIsChecked().length;

    switch (AlQuantityProducts) {
      case 1:
        break;

      case 2:
        SelectProducts._F_two(_LEN, AlQuantityProducts);

        break;

      case 3:
        SelectProducts._F_three(_LEN, AlQuantityProducts);

        break;

      default:
        SelectProducts._F_default(_LEN, AlQuantityProducts);

        break;
    }
  };

  SelectProducts._F_three = function (LEN, AlQuantityProducts) {
    var $$CheckALL = $('#products_all');

    switch (LEN) {
      case 0:
        SelectProducts.CustomCheck_isSHOW(false);
        ColonLeads.LinaAll_HIDE();
        $$CheckALL.prop("checked", false);
        break;

      case 1:
        SelectProducts.CustomCheck_isSHOW(false);
        ColonLeads.LinaAll_HIDE();
        $$CheckALL.prop("checked", false);

        var _id = 'pragma_line_' + SelectProducts.SelectedProducts[0];

        $("#".concat(_id)).show();
        break;

      case 2:
        SelectProducts.CustomCheck_isSHOW(true);
        ColonLeads.LinaAll_SHOW();
        break;

      case 3:
        SelectProducts.CustomCheck_isSHOW(false);
        $$CheckALL.trigger('click');
        break;
    }
  };

  SelectProducts._F_two = function (LEN, AlQuantityProducts) {
    if (LEN === AlQuantityProducts) {
      SelectProducts.CustomCheck_isSHOW(false);
      $('#products_all').trigger('click');
    } else if (LEN === AlQuantityProducts - 1) {
      $('#products_all').prop("checked", false);
      ColonLeads.LinaAll_HIDE();

      var _id = 'pragma_line_' + SelectProducts.SelectedProducts[0];

      $("#".concat(_id)).show();
    }
  };

  SelectProducts._F_default = function (LEN, AlQuantityProducts) {
    if (LEN <= 1) {
      SelectProducts.CustomCheck_isSHOW(false);
      ColonLeads.LinaAll_HIDE();

      var _id = 'pragma_line_' + SelectProducts.SelectedProducts[0];

      $("#".concat(_id)).show();
    } else if (LEN === 2) {
      SelectProducts.CustomCheck_isSHOW(true);
      ColonLeads.LinaAll_SHOW();
    } else if (LEN === AlQuantityProducts - 1) {
      $('#products_all').prop("checked", false);
      SelectProducts.CustomCheck_isSHOW(true);
    } else if (LEN === AlQuantityProducts) {
      SelectProducts.CustomCheck_isSHOW(false);
      $('#products_all').trigger('click');
    }
  };

  SelectProducts.CustomCheck_isSHOW = function (isShow) {
    var $CustomCheck = $('.pragma-custom_checkbox'); // кастомный чекбокс

    switch (isShow) {
      case true:
        $CustomCheck.attr('style', '');
        break;

      case false:
        $CustomCheck.hide();
        break;
    }
  };

  var Add_Position = /*#__PURE__*/function () {
    function Add_Position(data) {
      var _this4 = this;

      _classCallCheck(this, Add_Position);

      this.bind_actions = function () {
        _this4.$BtnDel.on('click', function () {
          var new_pos = $('.modal_coming-pragma').attr('data-change');
          new_pos = new_pos === 'true';

          switch (new_pos) {
            case false:
              _this4.$.remove();

              break;

            default:
              var obj = {
                title: "Удалить позицию?",
                class_name: 'dell_position_coming-modal',
                accept_text: 'Удалить',
                cancel_text: 'Отмена',
                accept_func: function () {
                  var _accept_func2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                    var res;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return functions.request({
                              flag: 'delete_position_coming',
                              product_import_id: _this4.id
                            });

                          case 2:
                            res = _context8.sent;
                            _context8.t0 = res;
                            _context8.next = _context8.t0 === true ? 6 : _context8.t0 === 'true' ? 6 : 9;
                            break;

                          case 6:
                            _this4.$.remove();

                            modal.alert.showAlertModal('Товар удален', true, 1000);
                            return _context8.abrupt("break", 11);

                          case 9:
                            modal.alert.showAlertModal('Товар продан или зарезеривирован', false, 2000);
                            return _context8.abrupt("break", 11);

                          case 11:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  function accept_func() {
                    return _accept_func2.apply(this, arguments);
                  }

                  return accept_func;
                }()
              };
              modal.ConfirmModal(obj);
              break;
          }

          _this4.quant_cxot();
        });

        _this4.$InputQuantity.on('keypress', function (e) {
          var KeyCode = e.charCode;

          if (KeyCode === 43 || KeyCode === 45) {
            return false;
          }
        });

        _this4.$InputQuantity.on('input', function () {
          ModalColumnLeads._value_();
        });

        _this4.$InputPurshSail.on('input', function () {
          ModalColumnLeads._value_();
        });

        _this4.$InputPurshSail.on('keypress', function (e) {
          var KeyCode = e.charCode;

          if (KeyCode === 43 || KeyCode === 45) {
            return false;
          }
        });

        _this4.$InputQuantity.attr('min', '0');

        _this4.$InputPurshSail.attr('min', '0');
      };

      this.quant_cxot = function () {
        $('.el_coming-table_coming').each(function (index) {
          $(this).find('.coming-table-no-el').text(index + 1);
        });
      };

      this._id = data.id;
      this._no = data.no;
      this.article = data.article;
      this.title = data.title;
      this.quantity = functions.Settings.FractionNumbers(data.quantity);
      this._product_id = data.product_id;
      this.purchase_price = functions.Settings.FractionNumbers(data.purchase_price);
      this.price_sail = functions.Settings.FractionNumbers(data.price_sail);
      this._$ = Add_Position.__render(this._id, this._no, this.article, this.title, this.quantity, this.purchase_price, this.price_sail, this._product_id);
      this._$BtnDel = this._$.find('.coming-table-delete');
      this._$InputQuantity = this._$.find('.coming-table-quantity-el input');
      this._$InputPushSail = this._$.find('.coming-table-purchase-el input');
      this.bind_actions();
    }

    _createClass(Add_Position, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "product_id",
      get: function get() {
        return this._product_id;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "$BtnDel",
      get: function get() {
        return this._$BtnDel;
      }
    }, {
      key: "$InputQuantity",
      get: function get() {
        return this._$InputQuantity;
      }
    }, {
      key: "$InputPurshSail",
      get: function get() {
        return this._$InputPushSail;
      }
    }]);

    return Add_Position;
  }();

  Add_Position.__render = function (id, no, article, name, quantity, price_purchase, price_sail, product_id) {
    return $(Add_Position.Twig.render({
      id: id,
      no: no,
      article: article,
      name: name,
      quantity: quantity,
      price_purchase: price_purchase,
      price_sail: price_sail,
      product_id: product_id
    }));
  };

  var DescProduct = /*#__PURE__*/function () {
    function DescProduct(data) {
      _classCallCheck(this, DescProduct);

      _initialiseProps.call(this);

      this._$ = DescProduct.__render();
      this._$Body = this._$.find('.product-modal-sm-body');
      this._$Deficit = this._$.find('.product-modal-sm-body_deficit');
      this.fill_body(data).then(function (r) {
        return r;
      });
    }

    _createClass(DescProduct, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Body",
      get: function get() {
        return this._$Body;
      }
    }, {
      key: "$Deficit",
      get: function get() {
        return this._$Deficit;
      }
    }]);

    return DescProduct;
  }();

  DescProduct.__render = function () {
    return $(DescProduct.Twig.render());
  };

  var _initialiseProps = function _initialiseProps() {
    var _this11 = this;

    this.populate_an_array = function (data) {
      var array = data.export_details;
      var arr_def = [];
      var arr_story = [];

      for (var I in array) {
        if (array.hasOwnProperty(I)) {
          switch (array[I].import_id) {
            case null:
              arr_def.push(array[I]);
              break;

            default:
              arr_story.push(array[I]);
              break;
          }
        }
      }

      return {
        'true': arr_story,
        'false': arr_def
      };
    };

    this.render_dificit = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(arr) {
        var obj, arr_dif, price, Key, OnDef, Deficit;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                obj = DescProduct.TwigProduct_deficit;
                arr_dif = arr;
                price = 0;

                for (Key in arr_dif) {
                  if (arr_dif.hasOwnProperty(Key)) {
                    OnDef = arr_dif[Key].quantity * 1;
                    price += OnDef;
                  }
                }

                Deficit = $(obj.render({
                  price: price
                }));

                _this11.$Deficit.html(Deficit);

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));

      return function (_x10) {
        return _ref13.apply(this, arguments);
      };
    }();

    this.fill_body = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(data) {
        var arr_all, arr, body_arr, arrKey, _data_, body;

        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                arr_all = _this11.populate_an_array(data);
                arr = arr_all["true"];
                body_arr = [];

                for (arrKey in arr) {
                  if (arr.hasOwnProperty(arrKey)) {
                    _data_ = {
                      stock: arr[arrKey].store_name,
                      no: arr[arrKey].export_id,
                      date: _this11.render_date(arr[arrKey].import_date),
                      quantity: functions.Settings.FractionNumbers(arr[arrKey].quantity),
                      price: functions.Settings.FractionNumbers(data.selling_price),
                      sum: functions.Settings.FractionNumbers(arr[arrKey].quantity * data.selling_price)
                    };
                    body = DescProduct.ElTwig.render({
                      _data_: _data_
                    });
                    body_arr.push($(body));
                  }
                }

                _this11.$Body.html(body_arr);

                if (arr_all["false"].length > 0) {
                  _this11.render_dificit(arr_all["false"]).then(function (r) {
                    return r;
                  });
                }

              case 6:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      return function (_x11) {
        return _ref14.apply(this, arguments);
      };
    }();

    this.render_date = function (UNIX_timestamp) {
      if (UNIX_timestamp) {
        var W = UNIX_timestamp.split(' ')[0].split('-');
        var t = '.';
        return W[2] + t + W[1] + t + W[0];
      } else return 0;
    };
  };

  var LineChangeAll = /*#__PURE__*/function () {
    function LineChangeAll() {
      var _this5 = this;

      _classCallCheck(this, LineChangeAll);

      this.bind_actions = function () {
        _this5.$$Discount.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _this5.PressDiscountAll();

                case 1:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        })));

        _this5.$$Delete.on('click', function () {
          var idSArr = LineChangeAll.getIsChecked();
          var obj = {
            title: 'Удалить товары',
            message: 'Вы действительно хотите удалить выбранные элементы?',
            class_name: 'modal-leads-delete_art',
            accept_text: 'Удалить',
            cancel_text: 'Отмена',
            accept_func: function () {
              var _accept_func3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var $$Delete, _iterator2, _step2, item;

                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        $$Delete = $('#pragma_delete_');
                        $$Delete.trigger('button:load:start');
                        _context10.next = 4;
                        return functions.request({
                          flag: 'delete_export_many',
                          export_ids: idSArr
                        });

                      case 4:
                        _iterator2 = _createForOfIteratorHelper(idSArr);

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            item = _step2.value;
                            $(".el-product_card[id=\"".concat(item, "\"]")).remove();
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }

                        $$Delete.trigger('button:load:stop');
                        _context10.next = 9;
                        return _RenderPage();

                      case 9:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));

              function accept_func() {
                return _accept_func3.apply(this, arguments);
              }

              return accept_func;
            }()
          };
          modal.ConfirmModal(obj);
        });
      };

      this.PressDiscountAll = function () {
        DiscountAll.getIsChecked = LineChangeAll.getIsChecked();

        if (!DiscountAll.Twig) {
          DiscountAll.Twig = templates.PragmaDiscountALL;
        }

        DiscountAll.Products = SelectProducts.SelectedProducts;
        $('.table_leads-leads_storage_all').prop('checked', false);
        $('.pragma-custom_checkbox').trigger('click');
        var $DiscountAll = new DiscountAll();
        var obj = {
          title: 'Скидка',
          class_name: 'modal-discount_pragma_all'
        };
        modal.ConfirmModal(obj);
        var ModalDiscountAll = $('.' + obj.class_name);
        ModalDiscountAll.find('.modal-body__inner').append($DiscountAll.$);
        ColonLeads.RecUnt(ModalDiscountAll, {
          'width': '400px',
          'border-radius': ' 10px'
        });
      };

      this._$ = LineChangeAll._render();
      this._$$Delete = this._$.find('.line_change_all-delete-pragma');
      this._$$Discount = this._$.find('.line_change_all-sail_discount');
      this.bind_actions();
    }

    _createClass(LineChangeAll, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$$Discount",
      get: function get() {
        return this._$$Discount;
      }
    }, {
      key: "$$Delete",
      get: function get() {
        return this._$$Delete;
      }
    }]);

    return LineChangeAll;
  }();

  LineChangeAll.getIsChecked = function () {
    var arr = [];
    $('.el-product_card').each(function (index) {
      var $item = $(this);
      var isChecked = $item.find('.el-pragma_checkbox').find('input').is(':checked');

      var _id = $(this).attr('id') * 1;

      isChecked ? arr.push(_id) : 0;
    });
    return arr;
  };

  LineChangeAll._render = function () {
    return $(LineChangeAll.Twig.render());
  };

  var LineChange = /*#__PURE__*/function () {
    function LineChange(data) {
      var _this6 = this;

      _classCallCheck(this, LineChange);

      this.bind_action = function () {
        _this6.$$Discount.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
          var _id, $Discount, obj, ModalDiscount;

          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  if (!Discount.Twig) {
                    Discount.Twig = templates.PragmaDiscount;
                  }

                  _id = 'products_id_' + _this6.id;
                  $(".pragma_checkbox-leads_storage[id=\"".concat(_id, "\"]")).trigger('click');
                  $Discount = new Discount(_this6.data);
                  obj = {
                    title: 'Скидка',
                    class_name: 'modal-discount_pragma'
                  };
                  modal.ConfirmModal(obj);
                  ModalDiscount = $('.' + obj.class_name);
                  ModalDiscount.find('.modal-body__inner').append($Discount.$);
                  ColonLeads.RecUnt(ModalDiscount, {
                    'width': '300px',
                    'border-radius': ' 10px'
                  });

                case 9:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        })));

        _this6.$$Delete.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
          var obj;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  obj = {
                    title: 'Удалить товар',
                    message: 'Вы действительно хотите удалить выбранный элемент?',
                    class_name: 'modal-leads-delete_art',
                    accept_text: 'Удалить',
                    cancel_text: 'Отмена',
                    accept_func: function () {
                      var _accept_func4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                        return regeneratorRuntime.wrap(function _callee12$(_context12) {
                          while (1) {
                            switch (_context12.prev = _context12.next) {
                              case 0:
                                _context12.next = 2;
                                return functions.request({
                                  flag: 'delete_export',
                                  export_id: _this6.id
                                });

                              case 2:
                                _context12.next = 4;
                                return ColonLeads.request_get_products();

                              case 4:
                                _this6.$.parent().parent().remove();

                                _context12.next = 7;
                                return _RenderPage();

                              case 7:
                              case "end":
                                return _context12.stop();
                            }
                          }
                        }, _callee12);
                      }));

                      function accept_func() {
                        return _accept_func4.apply(this, arguments);
                      }

                      return accept_func;
                    }()
                  };
                  modal.ConfirmModal(obj);

                case 2:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        })));
      };

      this._data = data;
      this._discount = this._data.discount;
      this._id = this._data.id;
      this._$ = LineChange._render();
      this._$$Delete = this._$.find('.line_change-delete-pragma');
      this._$$Discount = this._$.find('.line_change-sail_discount');
      this.bind_action();
    }

    _createClass(LineChange, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "discount",
      get: function get() {
        return this._discount;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      }
    }, {
      key: "$$Delete",
      get: function get() {
        return this._$$Delete;
      }
    }, {
      key: "$$Discount",
      get: function get() {
        return this._$$Discount;
      }
    }]);

    return LineChange;
  }();

  LineChange._render = function () {
    return $(LineChange.Twig.render());
  };

  var ElCard = /*#__PURE__*/function () {
    function ElCard(data, flag) {
      _classCallCheck(this, ElCard);

      _initialiseProps2.call(this);

      this._data = data;
      this._discount = this._data.discount;
      this._title = this._data.title;
      this._article = this._data.article;
      this._id = this._data.id;
      this._category_id = this._data.category_id;
      this._balance = flag ? 1 : functions.Settings.FractionNumbers(this._data.balance);
      this._selling_price = functions.Settings.FractionNumbers(this._data.selling_price);
      this._$ = ElCard.__render(this._id, this._title, this._article, this._balance, this._selling_price, this._discount, functions.tbl());
      this._$INPUTQuantuty = this._$.find('.add_all_products');
      this._$INPUT_sail_all = this._$.find('.sail_all');
      this._$INPUTprice_selling = this._$.find('.add_price_products');
      this._$elName = this._$.find('.el-name');
      this._$details = this._$.find('.detail_coming-card');
      this._$$checkbox = this._$.find('.pragma_checkbox-leads_storage');
      this._$$DiscountLabel = this._$.find('.el-price_sail-discount_label');
      this._$$checkbplace = this._$.find('.prag_place-products_all');
      this._$$Delete = this._$.find('.el-pragma_lead_delete');
      this._$$Storage_plus = this._$.find('.pragma_storage-minus');
      this._$$Storage_minus = this._$.find('.pragma_storage-plus');
      this._$DiscountSVG = this._$.find('.el-pragma_discount_pr-label');
      this.details();
      this.bind_actions();
      var $disc = new DiscountSVG(this._data);

      this._$DiscountSVG.html($disc.$); // if (this._discount > 0) {
      //     this._$$DiscountLabel.show()
      // }

    }

    _createClass(ElCard, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$$checkbplace",
      get: function get() {
        return this._$$checkbplace;
      }
    }, {
      key: "$$checkbox",
      get: function get() {
        return this._$$checkbox;
      }
    }, {
      key: "$INPUTprice_selling",
      get: function get() {
        return this._$INPUTprice_selling;
      }
    }, {
      key: "selling_price",
      get: function get() {
        return this._selling_price;
      }
    }, {
      key: "title",
      get: function get() {
        return this._title;
      }
    }, {
      key: "discount",
      get: function get() {
        return this._discount;
      }
    }, {
      key: "$INPUTQuantuty",
      get: function get() {
        return this._$INPUTQuantuty;
      }
    }, {
      key: "$elName",
      get: function get() {
        return this._$elName;
      }
    }, {
      key: "article",
      get: function get() {
        return this._article;
      }
    }, {
      key: "$$DiscountLabel",
      get: function get() {
        return this._$$DiscountLabel;
      }
    }, {
      key: "$details",
      get: function get() {
        return this._$details;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      }
    }, {
      key: "balance",
      get: function get() {
        return this._balance;
      }
    }, {
      key: "category_id",
      get: function get() {
        return this._category_id;
      }
    }, {
      key: "$$Delete",
      get: function get() {
        return this._$$Delete;
      }
    }, {
      key: "$$StoragePlus",
      get: function get() {
        return this._$$Storage_plus;
      }
    }, {
      key: "$$StorageMinus",
      get: function get() {
        return this._$$Storage_minus;
      }
    }]);

    return ElCard;
  }();

  ElCard.recount = function () {
    var sum = 0;
    $('.el-product_card').each(function () {
      var quantity = functions.Settings.FractionNumbers($(this).find('.el-quantity').find('input').val());
      var price = functions.Settings.FractionNumbers($(this).find('.el-price_sail').find('input').val());
      var sum = functions.Settings.FractionNumbers(quantity * price);
      $(this).find('.el-price_sail_all').find('input').val(sum);
    });
    $('.sail_all').each(function () {
      var val = functions.Settings.FractionNumbers($(this).val());
      sum += val * 1;
    });
    sum = functions.Settings.FractionNumbers(sum);
    $('.rigup-itog').text(sum);
  };

  ElCard.__render = function (id, name, article, quantity, price, discount, tbl) {
    return $(templates.elCardProduct.render({
      id: id,
      name: name,
      article: article,
      quantity: quantity,
      price: price,
      discount: discount,
      tbl: tbl
    }));
  };

  var _initialiseProps2 = function _initialiseProps2() {
    var _this12 = this;

    this.flag = false;

    this.bind_actions = function () {
      _this12.$INPUTQuantuty.on('keypress', function (e) {
        var KeyCode = e.charCode;

        if (KeyCode === 43 || KeyCode === 45) {
          return false;
        }
      });

      _this12.$INPUTprice_selling.on('keypress', function (e) {
        var KeyCode = e.charCode;

        if (KeyCode === 43 || KeyCode === 45) {
          return false;
        }
      });

      _this12.$INPUTprice_selling.on('focusout', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return _this12.changePrice();

              case 2:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      })));

      _this12.$INPUTQuantuty.on('focusout', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        var val_input;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                val_input = _this12.$INPUTQuantuty.val();

                if (!(_this12.balance != val_input)) {
                  _context22.next = 7;
                  break;
                }

                _context22.next = 4;
                return functions.request({
                  flag: 'update_export_quantity',
                  export_id: _this12.id,
                  quantity: val_input * 1
                });

              case 4:
                ElCard.recount();
                _context22.next = 7;
                return _RenderPage();

              case 7:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22);
      })));

      _this12.$INPUTQuantuty.attr('min', '0');

      _this12.$INPUTprice_selling.attr('min', '0');

      _this12.$$checkbox.on('click', function () {
        var flag = _this12.$$checkbox.is(':checked');

        var lengthProd = SelectProducts.SelectedProducts.length;

        switch (flag) {
          case true:
            if (lengthProd < 1) {
              _this12.$$checkbplace.show();
            } else {
              $('.prag_place-products_all').hide();
            }

            break;

          case false:
            _this12.$$checkbplace.hide();

        }

        SelectProducts.FOLLOW_CHECK(_this12.id, flag);
      });

      _this12.$elName.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.t0 = _this12.flag;
                _context23.next = _context23.t0 === false ? 3 : _context23.t0 === true ? 6 : 9;
                break;

              case 3:
                _this12.flag = true;

                _this12.$details.show();

                return _context23.abrupt("break", 9);

              case 6:
                _this12.flag = false;

                _this12.$details.hide();

                return _context23.abrupt("break", 9);

              case 9:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23);
      })));

      _this12.$$Delete.on('click', function () {
        var obj = {
          title: 'Удалить товар',
          message: 'Вы действительно хотите удалить выбранный элемент?',
          class_name: 'modal-leads-delete_art',
          accept_text: 'Удалить',
          cancel_text: 'Отмена',
          accept_func: function () {
            var _accept_func5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return functions.request({
                        flag: 'delete_export',
                        export_id: _this12.id
                      });

                    case 2:
                      _context24.next = 4;
                      return ColonLeads.request_get_products();

                    case 4:
                      _context24.next = 6;
                      return _RenderPage();

                    case 6:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24);
            }));

            function accept_func() {
              return _accept_func5.apply(this, arguments);
            }

            return accept_func;
          }()
        };
        modal.ConfirmModal(obj);
      });

      _this12.$$StoragePlus.on('click', function () {
        _this12.$INPUTprice_selling.val(_this12.$INPUTprice_selling.val() * 1 + 1);
      });

      _this12.$$StorageMinus.on('click', function () {
        _this12.$INPUTprice_selling.val(_this12.$INPUTprice_selling.val() * 1 - 1);
      });

      _this12.$$StoragePlus.on('mouseleave', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
        var val_input;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                val_input = _this12.$INPUTprice_selling.val() * 1;

                if (!(_this12.selling_price != val_input)) {
                  _context25.next = 6;
                  break;
                }

                _context25.next = 4;
                return _this12.changePrice();

              case 4:
                _context25.next = 6;
                break;

              case 6:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      })));

      _this12.$$StorageMinus.on('mouseleave', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
        var val_input;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                val_input = _this12.$INPUTprice_selling.val() * 1;

                if (!(_this12.selling_price != val_input)) {
                  _context26.next = 6;
                  break;
                }

                _context26.next = 4;
                return _this12.changePrice();

              case 4:
                _context26.next = 6;
                break;

              case 6:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26);
      })));
    };

    this.details = function () {
      var _this12$data$export_d;

      if ((_this12$data$export_d = _this12.data.export_details) !== null && _this12$data$export_d !== void 0 && _this12$data$export_d.length) {
        var desc_product_modal = new DescProduct(_this12.data);

        _this12.$details.append(desc_product_modal.$);
      }

      _this12.Line_().then(function (r) {
        return r;
      });
    };

    this.Line_ = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
      var Line;
      return regeneratorRuntime.wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              Line = new LineChange(_this12.data);

              _this12.$$checkbplace.html(Line.$);

            case 2:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27);
    }));
    this.changePrice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
      var val_input, obj;
      return regeneratorRuntime.wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              val_input = _this12.$INPUTprice_selling.val();

              if (_this12.selling_price != val_input) {
                obj = {
                  title: 'Изменить элементы',
                  message: 'Все скидки, как-либо связанные с выбранными элементом, будут удалены. Восстановить примененные скидки будет невозможно.\n',
                  class_name: 'upd-desc-modal',
                  accept_text: 'Изменить',
                  cancel_text: 'Отмена',
                  accept_func: function () {
                    var _accept_func6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
                      return regeneratorRuntime.wrap(function _callee28$(_context28) {
                        while (1) {
                          switch (_context28.prev = _context28.next) {
                            case 0:
                              _context28.next = 2;
                              return functions.request({
                                flag: 'update_export_selling_price',
                                export_id: _this12.id,
                                selling_price: val_input * 1
                              });

                            case 2:
                              ElCard.recount();
                              _context28.next = 5;
                              return _RenderPage();

                            case 5:
                            case "end":
                              return _context28.stop();
                          }
                        }
                      }, _callee28);
                    }));

                    function accept_func() {
                      return _accept_func6.apply(this, arguments);
                    }

                    return accept_func;
                  }(),
                  destroy_func: function destroy_func() {
                    _this12.$INPUTprice_selling.val(_this12.selling_price);
                  }
                };
                modal.ConfirmModal(obj);
              }

            case 2:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29);
    }));
  };

  var ProductLeads = /*#__PURE__*/function () {
    function ProductLeads(data) {
      var _this7 = this;

      _classCallCheck(this, ProductLeads);

      this.bind_actions = function () {
        var i = 0;
        var color = '#F1FFF8';

        var _el = ModalColumnLeads._array.includes(_this7.data);

        if (_el) {
          i = 1;

          _this7.$.css('background', color);

          _this7.ClickCheckBox();
        }

        _this7.$.on('click', function () {
          _this7.$.off("mouseenter mouseleave");

          var include_el = ModalColumnLeads._array.includes(_this7.data);

          var selected = _this7.evenOrNo(i++);

          switch (include_el) {
            case true:
              _this7.ClickCheckBox(false);

              switch (selected) {
                case true:
                  _this7.$.css('background', color);

                  break;

                case false:
                  var BackCol = _this7.background === "tr" ? '#f2f2f24d' : '#fff';

                  _this7.$.css('background-color', BackCol);

                  _this7.$.hover(function () {
                    $(this).css('background-color', '#f8faff');
                  }, function () {
                    $(this).css('background-color', BackCol);
                  });

                  for (var index in ModalColumnLeads._array) {
                    if (ModalColumnLeads._array[index] == _this7.data) {
                      delete ModalColumnLeads._array[index];
                    }
                  }

                  break;
              }

              break;

            case false:
              switch (selected) {
                case true:
                  _this7.$.css('background', color);

                  _this7.ClickCheckBox();

                  ModalColumnLeads._array.push(_this7.data);

                  break;
              }

          }

          var arr = [];

          for (var _i in ModalColumnLeads._array) {
            arr.push(ModalColumnLeads._array[_i].title + " ");
          }

          $('.footer_product_add').html(arr);
        });
      };

      this.evenOrNo = function (i) {
        var dat = i % 2;
        return dat === 0;
      };

      this.ClickCheckBox = function () {
        var isCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _this7.$$CheckBox.attr('checked', isCheck);
      };

      ProductLeads._array = [];
      this._data = data;
      this._id = data.id;
      this._url_icon = data.img_link;
      this._title = data.title;
      this._article = data.article;
      this._balance = functions.Settings.FractionNumbers(data.balance);
      this._price_purchase = functions.Settings.FractionNumbers(data.price_purchase);
      this._selling_price = functions.Settings.FractionNumbers(data.selling_price);
      this._background = functions.tbl();
      this._$ = ProductLeads.__render(this._id, this._url_icon, this._title, this._article, this._balance, this._price_purchase, this._selling_price, this._background);
      this._$$CheckBox = this._$.find('.pragma-add_prodP');
      this.bind_actions();
    }

    _createClass(ProductLeads, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "title",
      get: function get() {
        return this._title;
      }
    }, {
      key: "background",
      get: function get() {
        return this._background;
      }
    }, {
      key: "$$CheckBox",
      get: function get() {
        return this._$$CheckBox;
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      }
    }]);

    return ProductLeads;
  }();

  ProductLeads.__render = function (id, url_icon, name, article, quantity, price_purchase, price_sail, tbl) {
    return $(templates.elModalProduct.render({
      id: id,
      url_icon: url_icon,
      name: name,
      article: article,
      quantity: quantity,
      price_purchase: price_purchase,
      price_sail: price_sail,
      tbl: tbl
    }));
  };

  var OrgComingArr = /*#__PURE__*/function () {
    function OrgComingArr(arr, Twig_el_table) {
      _classCallCheck(this, OrgComingArr);

      this._$ = OrgComingArr.render_btn(arr, Twig_el_table);
    }

    _createClass(OrgComingArr, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return OrgComingArr;
  }();

  OrgComingArr.render_btn = function (array) {
    var arr = [];

    for (var i = 0; i < array.length; i++) {
      var button_page = new OrgComing(array[i].page, array[i].products);
      arr.push(button_page.$);
    }

    return arr;
  };

  var OrgComing = /*#__PURE__*/function () {
    function OrgComing(page, data) {
      var _this8 = this;

      _classCallCheck(this, OrgComing);

      this.bind_action = function () {
        _this8.$.on('click', function () {
          OrgComing.id_click = _this8.id;

          _this8.active_btn();

          var arr = _this8.Data;
          var arr_new = [];
          functions.setTbd(true);

          for (var index in arr) {
            var table = new ProductLeads(arr[index]);
            arr_new.push(table.$);
          }

          var LenArr = Btn_arr_Leads.AllElem.length;

          if (LenArr > 7) {
            if (_this8.id === 1) {
              OrgComing.mode = 1;

              _this8.clickFirst();

              _this8.active_btn();
            }

            if (OrgComing.mode === 5) {
              _this8.clickModeFive(_this8.id);

              _this8.active_btn();
            }

            if (_this8.id === OrgComing.LastBtn) {
              _this8.clickLast();

              OrgComing.mode = 5;

              _this8.active_btn();
            }

            if (_this8.id === 5) {
              OrgComing.mode = 5;

              _this8.clickFive();

              _this8.active_btn();
            }
          } else if (LenArr === 7) {
            if (_this8.id === 1) {
              OrgComing.mode = 1;

              _this8.clickFirst();

              _this8.active_btn();
            } else {
              _this8.clickLess(_this8.id);

              _this8.active_btn();
            }
          }

          $('.right_column-body').html(arr_new);
        });
      };

      this.clickLess = function (clickId) {
        var FivBtn = new Btn_arr_Leads(Btn_arr_Leads.AllElem);
        FivBtn.$;

        if (clickId > 4) {
          FivBtn.clickModeLast();
        } else {
          FivBtn.clickModeFirst();
        }
      };

      this.clickLast = function () {
        var FivBtn = new Btn_arr_Leads(Btn_arr_Leads.AllElem);
        FivBtn.$;
        FivBtn.clickModeLast();
      };

      this.clickFirst = function () {
        var FivBtn = new Btn_arr_Leads(Btn_arr_Leads.AllElem);
        FivBtn.$;
        FivBtn.clickModeFirst();
      };

      this.clickModeFive = function (click) {
        var FivBtn = new Btn_arr_Leads(Btn_arr_Leads.AllElem);
        FivBtn.$;
        FivBtn.clickModeFive(click);
      };

      this.clickFive = function () {
        var FivBtn = new Btn_arr_Leads(Btn_arr_Leads.AllElem);
        FivBtn.$;
        FivBtn.btnClickFive();
      };

      this.active_btn = function () {
        OrgComing.id_click = _this8.id;
        $('.page_product_mod').each(function () {
          var _this9 = this;

          $(this).find('span').find('span').css({
            color: '#C6CACE'
          });
          $(this).hover(function () {
            $(_this9).find('span').find('span').css({
              color: '#313942'
            });
          }, function () {
            $(_this9).find('span').find('span').css({
              color: '#C6CACE'
            });
          });
        });
        var el = $("#pagination_pragma_btn_".concat(_this8.id));
        el.off("mouseenter mouseleave");
        el.find('span').find('span').css({
          color: '#313942'
        });
      };

      this._id = ++page;
      this._Data = data;
      this._$ = OrgComing.__render(this._id);
      this.bind_action();
    }

    _createClass(OrgComing, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "Data",
      get: function get() {
        return this._Data;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }]);

    return OrgComing;
  }();

  OrgComing.__render = function (name) {
    var btm = "<button type=\"button\" id=pagination_pragma_btn_".concat(name, " class=\"button-input    page_product_mod\" tabindex=\"\"  >\n                     <span class=\"button-input-inner \">\n                      <span class=\"button-input-inner__text\">").concat(name, "</span>\n                    </span>\n                </button>");
    return $(btm);
  };

  var ElSection = /*#__PURE__*/function () {
    function ElSection(twig, data, products) {
      _classCallCheck(this, ElSection);

      _initialiseProps3.call(this);

      this._title = data.title;
      this._description = data.description;
      this._id = data.id;
      this._product = products;
      this._class = "el-pragma_modal-leads";
      this._$ = ElSection.__render(twig, this._title, this._description, this._id, this._class);
      this._$BtnSection = this._$.find('.el-pragma_modal-leads-cat');
      this.bind_action();
    }

    _createClass(ElSection, [{
      key: "$BtnSection",
      get: function get() {
        return this._$BtnSection;
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
    }, {
      key: "product",
      get: function get() {
        return this._product;
      }
    }]);

    return ElSection;
  }();

  ElSection.background = true;

  ElSection.BackgroundColor = function ($OBJ, color) {
    var style = "background-color: " + color + ";";
    $OBJ.attr('style', style);
  };

  ElSection.__render = function (twig, name, description, id, _class) {
    return $(twig.render({
      name: name,
      description: description,
      id: id,
      _class: _class
    }));
  };

  var _initialiseProps3 = function _initialiseProps3() {
    var _this13 = this;

    this.bind_action = function () {
      _this13.$.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
        var array_products, org_arr, arr, tovNo;
        return regeneratorRuntime.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _this13.Background();

                _context30.next = 3;
                return _this13.create_products();

              case 3:
                array_products = _context30.sent;

                if (array_products.length > 0) {
                  org_arr = functions.organization_array(array_products, 25);
                  arr = new Btn_arr_Leads(org_arr);
                  $('.right_column-footer').html(arr.$);
                  $('.pragma_pragma_pagination_leads').find('.page_product_mod:first').trigger('click');
                } else {
                  tovNo = "<div style=\"\n    margin: 50px 0 0 350px;\n    font-size: 25px;\n\">\u0422\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442</div>";
                  $('.right_column-body').html(tovNo);
                }

              case 5:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30);
      })));
    };

    this.Background = function () {
      $('.el-pragma_modal-leads').each(function () {
        var _this14 = this;

        $(this).css({
          "background-color": "#fff"
        });
        $(this).hover(function () {
          $(_this14).css({
            "background-color": '#fbfbfb'
          });
        }, function () {
          $(_this14).css({
            "background-color": '#fff'
          });
        });
      });
      var el = $("#el_rc_".concat(_this13.id));
      el.off("mouseenter mouseleave");
      el.css({
        "background-color": "#fbfbfb"
      });
    };

    this.create_products = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
      var new_arr, arr_pro, ind, __id;

      return regeneratorRuntime.wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              new_arr = [];
              arr_pro = _this13.product;
              _context31.t0 = regeneratorRuntime.keys(arr_pro);

            case 3:
              if ((_context31.t1 = _context31.t0()).done) {
                _context31.next = 13;
                break;
              }

              ind = _context31.t1.value;
              __id = arr_pro[ind].category_id;
              _context31.t2 = __id;
              _context31.next = _context31.t2 === _this13.id ? 9 : 11;
              break;

            case 9:
              new_arr.push(arr_pro[ind]);
              return _context31.abrupt("break", 11);

            case 11:
              _context31.next = 3;
              break;

            case 13:
              return _context31.abrupt("return", new_arr);

            case 14:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31);
    }));
  };

  var ModalColumnLeads = /*#__PURE__*/function () {
    function ModalColumnLeads(twig, __switch__) {
      _classCallCheck(this, ModalColumnLeads);

      _initialiseProps4.call(this);

      ModalColumnLeads._array = [];
      this.___switch__ = __switch__;
      this._$ = ModalColumnLeads.__render(twig);
      this._account_id = AMOCRM.constant('account').id;
      this._$Close = this._$.find('#lead_id_close-pragma_stock');
      this._$AllProduct = this._$.find('.pragma-leads-top-all-label');
      this.fill_modal().then(function (r) {
        return r;
      });
      this._$add_all_producnts = this._$.find('.add_all_producnts');
      this._$place_name = $('.colon_leads-placeForProducts');
      this._$input = this._$.find('#id_column-search');
      this._Place_body = this._$.find('.right_column-footer');
      this.bind_actions();
    }

    _createClass(ModalColumnLeads, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "Place_body",
      get: function get() {
        return this._Place_body;
      }
    }, {
      key: "$place_name",
      get: function get() {
        return this._$place_name;
      }
    }, {
      key: "$input",
      get: function get() {
        return this._$input;
      }
    }, {
      key: "$AllProduct",
      get: function get() {
        return this._$AllProduct;
      }
    }, {
      key: "$add_all_producnts",
      get: function get() {
        return this._$add_all_producnts;
      }
    }, {
      key: "account_id",
      get: function get() {
        return this._account_id;
      }
    }, {
      key: "$Close",
      get: function get() {
        return this._$Close;
      }
    }, {
      key: "__switch__",
      get: function get() {
        return this.___switch__;
      }
    }]);

    return ModalColumnLeads;
  }();

  ModalColumnLeads.Coming = false;

  ModalColumnLeads._value_ = function () {
    $('.el_coming-table_coming').each(function () {
      var QUANTITY = $(this).find('.coming-table-quantity-el').find('input');
      var data_QUANTITY = functions.Settings.FractionNumbers(QUANTITY.val());
      QUANTITY.val(data_QUANTITY);
      var PRICE = $(this).find('.coming-table-purchase-el').find('input');
      var $fo_PRICE = functions.Settings.FractionNumbers(PRICE.val());
      PRICE.val($fo_PRICE);
    });
  };

  ModalColumnLeads.Posit = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
    var arr, arr_id, $data, K, _$id;

    return regeneratorRuntime.wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _context32.next = 2;
            return ColonLeads.request_get_products();

          case 2:
            arr = [];
            arr_id = [];
            $('.el_coming-table_coming').each(function () {
              var $id = $(this).attr('data-product_id');
              arr_id.push($id * 1);
            });
            $data = ColonLeads.products;

            for (K in $data) {
              _$id = $data[K].id;

              if (!arr_id.includes(_$id)) {
                arr.push($data[K]);
              }
            }

            ColonLeads.products = arr;

          case 8:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32);
  }));

  ModalColumnLeads.__render = function (twig) {
    return $(twig.render());
  };

  var _initialiseProps4 = function _initialiseProps4() {
    var _this15 = this;

    this.bind_actions = function () {
      _this15.$AllProduct.on('click', function () {
        $('.el-pragma_modal-leads').css({
          'background-color': "#fff"
        });
        var array_products = ColonLeads.products;
        var org_arr = functions.organization_array(array_products, 25);
        var arr = new Btn_arr_Leads(org_arr);

        _this15.Place_body.html(arr.$);

        $('.page_product_mod:first').trigger('click');
      });

      _this15.$add_all_producnts.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
        return regeneratorRuntime.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _this15.$add_all_producnts.trigger('button:load:start');

                _this15.$add_all_producnts.find('.button-input__spinner').find('span').css({
                  'border-top-color': '#fff',
                  'border-left-color': '#fff'
                });

                _context33.t0 = _this15.__switch__;
                _context33.next = _context33.t0 === true ? 5 : 8;
                break;

              case 5:
                _context33.next = 7;
                return _this15.TRUE();

              case 7:
                return _context33.abrupt("break", 11);

              case 8:
                _context33.next = 10;
                return _this15.FALSE();

              case 10:
                return _context33.abrupt("break", 11);

              case 11:
                _this15.$add_all_producnts.trigger('button:load:stop');

                _context33.next = 14;
                return _RenderPage();

              case 14:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33);
      })));

      _this15.$input.on('input', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
        var data, array_products, new_arr, index, article, name, $data, $article, $name, tNo, org_arr, arr;
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                $('.el-pragma_modal-leads').css({
                  'background-color': '#2f455a'
                });
                data = _this15.$input.val();
                array_products = ColonLeads.products;
                new_arr = [];

                for (index in array_products) {
                  if (array_products.hasOwnProperty(index)) {
                    article = array_products[index].article;
                    name = array_products[index].title;
                    $data = data.toLocaleLowerCase();
                    $article = article.toLocaleLowerCase();
                    $name = name.toLocaleLowerCase();

                    if ($article.includes($data) || $name.includes($data)) {
                      new_arr.push(array_products[index]);
                    }
                  }
                }

                if (new_arr.length === 0) {
                  _this15.Place_body.html(' ');

                  tNo = "<div style=\"\n    margin: 50px 0 0 350px;\n    font-size: 25px;\n\">\u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442</div>";
                  $('.right_column-body').html(tNo);
                }

                org_arr = functions.organization_array(new_arr, 25);
                arr = new Btn_arr_Leads(org_arr);

                _this15.Place_body.html(arr.$);

                $('.page_product_mod:first').trigger('click');

              case 10:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34);
      })));

      _this15.$Close.on('click', function () {
        _this15.$.parent().parent().parent().remove();
      });
    };

    this.FALSE = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
      var __Array, import_id, iPro, PRODUCT, data_new, new_pos, res, data_res, $no, _position;

      return regeneratorRuntime.wrap(function _callee35$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              __Array = ModalColumnLeads._array;
              import_id = _this15.__switch__;
              Add_Position.Twig = templates.PositionFORComing;

              if (!(__Array.length > 0)) {
                _context35.next = 26;
                break;
              }

              _context35.t0 = regeneratorRuntime.keys(__Array);

            case 5:
              if ((_context35.t1 = _context35.t0()).done) {
                _context35.next = 26;
                break;
              }

              iPro = _context35.t1.value;
              PRODUCT = __Array[iPro];
              data_new = {
                import_id: import_id,
                product_id: PRODUCT.id,
                quantity: 1,
                purchase_price: 1
              };
              new_pos = $('.modal_coming-pragma').attr('data-change');
              new_pos = new_pos === 'true';

              if (!new_pos) {
                _context35.next = 17;
                break;
              }

              _context35.next = 14;
              return functions.request({
                flag: 'add_position_in_coming',
                data: data_new
              });

            case 14:
              res = _context35.sent;
              data_res = JSON.parse(res);
              data_new.id = data_res.product_import_id;

            case 17:
              $no = $('.coming-table-no-el:last').text();
              data_new.no = $no == "" ? 1 : $no * 1 + 1;
              data_new.title = PRODUCT.title;
              data_new.article = PRODUCT.article;
              _position = new Add_Position(data_new);
              $('.body-right_catalogs_elen').append(_position.$);
              $('.modal-column_leads').remove();
              _context35.next = 5;
              break;

            case 26:
              ModalColumnLeads._value_();

            case 27:
            case "end":
              return _context35.stop();
          }
        }
      }, _callee35);
    }));
    this.TRUE = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
      var NEW_arr, Array, answer_create_export, parse_export, _loop, Key, _products, i, elCard, vibr_arr, new_arr, ind, _i2, __id;

      return regeneratorRuntime.wrap(function _callee36$(_context36) {
        while (1) {
          switch (_context36.prev = _context36.next) {
            case 0:
              NEW_arr = [];
              Array = ModalColumnLeads._array;
              _context36.next = 4;
              return functions.request({
                flag: 'create_export',
                stock_id: functions.Settings.ActiveStock,
                data: _this15.get_data_d(Array),
                entity_type: AMOCRM.data.current_entity,
                entity_id: AMOCRM.data.current_card.id
              });

            case 4:
              answer_create_export = _context36.sent;
              parse_export = JSON.parse(answer_create_export);
              ModalColumnLeads.status = parse_export[0].status_id;

              _loop = function _loop(Key) {
                if (Array.hasOwnProperty(Key)) {
                  var obj = parse_export.find(function (item) {
                    return item.product_id === Array[Key].id;
                  });
                  NEW_arr.push({
                    id: obj.id,
                    product_id: obj.product_id,
                    category_id: Array[Key].category_id,
                    article: Array[Key].article,
                    title: Array[Key].title,
                    balance: Array[Key].balance,
                    selling_price: Array[Key].selling_price,
                    status_id: obj.status_id
                  });
                }
              };

              for (Key in Array) {
                _loop(Key);
              }

              functions.setTbd(true);
              _products = [];

              for (i in NEW_arr) {
                elCard = new ElCard(NEW_arr[i], true);

                _products.push(elCard.$);
              }

              vibr_arr = [];
              new_arr = [];

              for (ind in ModalColumnLeads._array) {
                vibr_arr.push(ModalColumnLeads._array[ind].id);
              }

              _context36.t0 = regeneratorRuntime.keys(ColonLeads.products);

            case 16:
              if ((_context36.t1 = _context36.t0()).done) {
                _context36.next = 26;
                break;
              }

              _i2 = _context36.t1.value;
              __id = ColonLeads.products[_i2].id;
              _context36.t2 = vibr_arr.includes(__id);
              _context36.next = _context36.t2 === true ? 22 : _context36.t2 === false ? 23 : 24;
              break;

            case 22:
              return _context36.abrupt("break", 24);

            case 23:
              new_arr.push(ColonLeads.products[_i2]);

            case 24:
              _context36.next = 16;
              break;

            case 26:
              ColonLeads.products = new_arr;

              _this15.$place_name.append(_products);

              $('.modal-column_leads').remove();
              ElCard.recount();
              _context36.next = 32;
              return ColonLeads.status_leads(ModalColumnLeads.status);

            case 32:
            case "end":
              return _context36.stop();
          }
        }
      }, _callee36);
    }));

    this.get_data_d = function (array) {
      var arr = [];

      for (var Key in array) {
        if (array.hasOwnProperty(Key)) {
          arr.push({
            product_id: array[Key].id,
            quantity: 1,
            selling_price: array[Key].selling_price
          });
        }
      }

      return arr;
    };

    this.fill_modal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
      var section, all_files, arr;
      return regeneratorRuntime.wrap(function _callee37$(_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              _context37.next = 2;
              return _this15.create_section();

            case 2:
              section = _context37.sent;

              _this15.$.find('.left_column-section').html(section);

              all_files = functions.organization_array(ColonLeads.products, 25);
              arr = new Btn_arr_Leads(all_files);

              _this15.Place_body.html(arr.$);

              $('.page_product_mod:first').trigger('click');

            case 8:
            case "end":
              return _context37.stop();
          }
        }
      }, _callee37);
    }));
    this.create_section = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
      var new_arr, arr, twig_section, i, data, section;
      return regeneratorRuntime.wrap(function _callee38$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              new_arr = [];
              _context38.t0 = JSON;
              _context38.next = 4;
              return _this15.request_section_GET();

            case 4:
              _context38.t1 = _context38.sent;
              arr = _context38.t0.parse.call(_context38.t0, _context38.t1);
              twig_section = templates.rightcatalog;

              for (i in arr) {
                data = {
                  title: arr[i].title,
                  description: arr[i].description,
                  id: arr[i].id
                };
                section = new ElSection(twig_section, data, ColonLeads.products);
                new_arr.push(section.$);
              }

              return _context38.abrupt("return", new_arr);

            case 9:
            case "end":
              return _context38.stop();
          }
        }
      }, _callee38);
    }));
    this.request_section_GET = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
      return regeneratorRuntime.wrap(function _callee39$(_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              _context39.next = 2;
              return functions.request({
                flag: 'section_get',
                account_id: _this15.account_id
              });

            case 2:
              return _context39.abrupt("return", _context39.sent);

            case 3:
            case "end":
              return _context39.stop();
          }
        }
      }, _callee39);
    }));
  };

  var Btn_arr_Leads = /*#__PURE__*/function () {
    function Btn_arr_Leads(arr) {
      _classCallCheck(this, Btn_arr_Leads);

      _initialiseProps5.call(this);

      Btn_arr_Leads.AllElem = arr;
      this._$ = Btn_arr_Leads.__render('leads');
      this._$placeBtn = this._$.find('.pragma_pagination-pages_pragma');
      this._$Prev = this._$.find('.pragma_pagination_prev');
      this._$Next = this._$.find('.pragma_pagination_next');
      this._$Input = this._$.find('#pragma_input_quantity_stock');
      OrgComing.LastBtn = arr.length;
      this._$AllBtn = Btn_arr_Leads.render_btn(arr);
      this.btnRender();
      this.bind_actions();
    }

    _createClass(Btn_arr_Leads, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Prev",
      get: function get() {
        return this._$Prev;
      }
    }, {
      key: "$Next",
      get: function get() {
        return this._$Next;
      }
    }, {
      key: "$Input",
      get: function get() {
        return this._$Input;
      }
    }, {
      key: "$AllBtn",
      get: function get() {
        return this._$AllBtn;
      }
    }, {
      key: "$placeBtn",
      get: function get() {
        return this._$placeBtn;
      }
    }]);

    return Btn_arr_Leads;
  }();

  Btn_arr_Leads.ellipsis = function () {
    return $("<div class=\"ellipsis_pragma_stock\"><span class=\"pagination-ellipsis\">...</span></div>");
  };

  Btn_arr_Leads.render_btn = function (array) {
    var arr = [];

    for (var i = 0; i < array.length; i++) {
      var button_page = new OrgComing(array[i].page, array[i].products);
      arr.push(button_page.$);
    }

    return arr;
  };

  Btn_arr_Leads.__render = function (_class_) {
    return $(templates.PaginationPragma.render({
      _class_: _class_
    }));
  };

  var _initialiseProps5 = function _initialiseProps5() {
    var _this16 = this;

    this.bind_actions = function () {
      $('body').on('keyup', function (evenTwo) {
        if (evenTwo.ctrlKey) {
          switch (evenTwo.keyCode) {
            case 39:
              _this16.$Next.trigger('click');

              break;

            case 37:
              _this16.$Prev.trigger('click');

              break;
          }
        }
      });

      _this16.$Input.on('change', function () {
        var value = _this16.$Input.val();

        var parse_data = ColonLeads.products;
        var org_cat = functions.organization_array(parse_data, value);
        var btn = new Btn_arr_Leads(org_cat);
        $('.right_column-footer').html(btn.$);
        $('.pragma_pragma_pagination_leads').find('.page_product_mod').first().trigger('click');
        var el = $(".pragma_pragma_pagination_leads").find('#pragma_input_quantity_stock').parent();
        el.find('button').find('span').text(value);
        el.find('ul li').attr('class', 'control--select--list--item');
        el.find("ul li[data-value=\"".concat(value, "\"]")).attr('class', 'control--select--list--item  control--select--list--item-selected');
      });

      _this16.$Prev.on('click', function () {
        var all_btn = _this16.$AllBtn.length;
        var num = OrgComing.id_click;
        var id_next;

        if (num == 1) {
          id_next = all_btn;
        } else {
          id_next = num - 1;
        }

        var id_ = '#pagination_pragma_btn_' + id_next;
        $(id_).trigger('click');
      });

      _this16.$Next.on('click', function () {
        var all_btn = _this16.$AllBtn.length;
        var num = OrgComing.id_click;
        var id_next;

        if (num == all_btn) {
          id_next = 1;
        } else {
          id_next = num + 1;
        }

        var id_ = '#pagination_pragma_btn_' + id_next;
        $(id_).trigger('click');
      });

      _this16.$Prev.hover(function () {
        $('#path-prev_btn').css({
          'fill': '#4c8bf7'
        });
      }, function () {
        $('#path-prev_btn').css({
          'fill': 'black'
        });
      });

      _this16.$Next.hover(function () {
        $('#path-next_btn').css({
          'fill': '#4c8bf7'
        });
      }, function () {
        $('#path-next_btn').css({
          'fill': 'black'
        });
      });
    };

    this.btnRender = function () {
      _this16.$AllBtn.length > 6 ? _this16.btnMoreFive() : _this16.$placeBtn.html(_this16.$AllBtn);
    };

    this.btnMoreFive = function () {
      var len = _this16.$AllBtn.length;
      var ARR;

      var FirstFiveBtn = _this16.$AllBtn.slice(0, 5);

      var lastBtn = _this16.$AllBtn[len - 1];
      ARR = FirstFiveBtn;
      ARR.push(Btn_arr_Leads.ellipsis());
      ARR.push(lastBtn);

      _this16.$placeBtn.html(ARR);
    };

    this.btnClickFive = function () {
      var arsV = [];
      var First = _this16.$AllBtn[0];
      var BtnActive = OrgComing.id_click - 1;

      var elem = _this16.$AllBtn.slice(BtnActive - 2, BtnActive + 3);

      var len_btn = _this16.$AllBtn.length;

      switch (len_btn) {
        case 8:
          arsV.push(First);
          arsV.push(Btn_arr_Leads.ellipsis());
          arsV.push(elem);
          arsV.push(_this16.$AllBtn[len_btn - 1]);
          break;

        default:
          arsV.push(First);
          arsV.push(Btn_arr_Leads.ellipsis());
          arsV.push(elem);
          arsV.push(Btn_arr_Leads.ellipsis());
          arsV.push(_this16.$AllBtn[len_btn - 1]);
          break;
      }

      $('.pragma_pagination-pages_pragma').html(arsV.flat());
    };

    this.clickModeLast = function () {
      var arr = [];
      var len = _this16.$AllBtn.length;
      var First = _this16.$AllBtn[0];

      var elm = _this16.$AllBtn.slice(len - 5, len);

      arr.push(First);
      arr.push(Btn_arr_Leads.ellipsis());
      arr.push(elm);
      $('.pragma_pagination-pages_pragma').html(arr.flat());
    };

    this.clickModeFirst = function () {
      var len = _this16.$AllBtn.length;
      var ARR;

      var FirstFiveBtn = _this16.$AllBtn.slice(0, 5);

      var lastBtn = _this16.$AllBtn[len - 1];
      ARR = FirstFiveBtn;
      ARR.push(Btn_arr_Leads.ellipsis());
      ARR.push(lastBtn);
      $('.pragma_pagination-pages_pragma').html(ARR.flat());
    };

    this.clickModeFive = function (click) {
      var arr = [];
      var len = _this16.$AllBtn.length;
      var last = _this16.$AllBtn[len - 1];
      var First = _this16.$AllBtn[0];

      if (len - click <= 3) {
        var elm = _this16.$AllBtn.slice(len - 5, len);

        arr.push(First);
        arr.push(Btn_arr_Leads.ellipsis());
        arr.push(elm);
      } else if (click <= 4) {
        var _elm = _this16.$AllBtn.slice(0, 5);

        arr.push(_elm);
        arr.push(Btn_arr_Leads.ellipsis());
        arr.push(last);
      } else {
        var elem = _this16.$AllBtn.slice(click - 3, click + 2);

        arr.push(First);
        arr.push(Btn_arr_Leads.ellipsis());
        arr.push(elem);
        arr.push(Btn_arr_Leads.ellipsis());
        arr.push(last);
      }

      $('.pragma_pagination-pages_pragma').html(arr.flat());
    };
  };

  var ColonLeads = /*#__PURE__*/function () {
    function ColonLeads(twig) {
      var _this10 = this;

      _classCallCheck(this, ColonLeads);

      _initialiseProps6.call(this);

      this._$ = ColonLeads.__render(twig);
      this._$BtnAddProduct = this._$.find('.add_product-colonLeads');
      this._account_id = AMOCRM.constant('account').id;
      this._$$CheckAll = this._$.find('#products_all');
      this._$$CustomCheckbox = this._$.find('.pragma-custom_checkbox');
      this._$PlaceLine = this._$.find('.table_leads-LineAll');
      this._$$discountAllLead = this._$.find('#discount_all_lead');
      this._$$LeadsName = this._$.find('.table_leads-name');
      this._$$LeadsArticle = this._$.find('.table_leads-article');
      this._$$LeadsQuantity = this._$.find('.table_leads-quantity');
      this._$$LeadsPriceSail = this._$.find('.table_leads-price_sail');
      this._$$LeadsPriceSum = this._$.find('.table_leads-price_sum');
      this.fill_export().then(function (r) {
        _this10.bind_action();
      });
      ElCard.recount();
      this.LineAll().then(function (r) {
        return r;
      });
    }

    _createClass(ColonLeads, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$$CheckAll",
      get: function get() {
        return this._$$CheckAll;
      }
    }, {
      key: "$BtnAddProduct",
      get: function get() {
        return this._$BtnAddProduct;
      }
    }, {
      key: "$$CustomCheckbox",
      get: function get() {
        return this._$$CustomCheckbox;
      }
    }, {
      key: "$PlaceLine",
      get: function get() {
        return this._$PlaceLine;
      }
    }, {
      key: "$$discountAllLead",
      get: function get() {
        return this._$$discountAllLead;
      }
    }, {
      key: "$$LeadsName",
      get: function get() {
        return this._$$LeadsName;
      }
    }, {
      key: "$$LeadsArticle",
      get: function get() {
        return this._$$LeadsArticle;
      }
    }, {
      key: "$$LeadsQuantity",
      get: function get() {
        return this._$$LeadsQuantity;
      }
    }, {
      key: "$$LeadsPriceSail",
      get: function get() {
        return this._$$LeadsPriceSail;
      }
    }, {
      key: "$$LeadsPriceSum",
      get: function get() {
        return this._$$LeadsPriceSum;
      }
    }]);

    return ColonLeads;
  }();

  ColonLeads.active = false;
  ColonLeads.idS = [];
  ColonLeads.products = [];
  ColonLeads.status = [];
  ColonLeads.All_status = [];
  ColonLeads.FlagSort = false;
  ColonLeads.Data = [];

  ColonLeads.LinaAll_SHOW = function () {
    $('.table_leads-LineAll').show();
  };

  ColonLeads.LinaAll_HIDE = function () {
    $('.table_leads-LineAll').hide();
  };

  ColonLeads.status_leads = /*#__PURE__*/function () {
    var _ref32 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40(status) {
      var ar_statuses, parse_status, $status, color;
      return regeneratorRuntime.wrap(function _callee40$(_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              ar_statuses = ColonLeads.All_status;
              parse_status = JSON.parse(ar_statuses);
              ColonLeads.status = parse_status.find(function (item) {
                return item.id === status;
              });

              if (!ColonLeads.status) {
                _context40.next = 16;
                break;
              }

              $status = $('.leads-name_status');
              color = '';
              _context40.t0 = ColonLeads.status.id;
              _context40.next = _context40.t0 === 2 ? 9 : _context40.t0 === 3 ? 11 : 13;
              break;

            case 9:
              color = '#FF9D87';
              return _context40.abrupt("break", 13);

            case 11:
              color = '#BCFF87';
              return _context40.abrupt("break", 13);

            case 13:
              $status.text(ColonLeads.status.title);
              $status.attr('id', ColonLeads.status.id);
              $status.css('background-color', color);

            case 16:
              ElCard.recount();

            case 17:
            case "end":
              return _context40.stop();
          }
        }
      }, _callee40);
    }));

    return function (_x12) {
      return _ref32.apply(this, arguments);
    };
  }();

  ColonLeads.request_get_products = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
    var data;
    return regeneratorRuntime.wrap(function _callee41$(_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            _context41.next = 2;
            return functions.request({
              flag: 'products_get',
              account_id: AMOCRM.constant('account').id,
              store_id: functions.Settings.ActiveStock
            });

          case 2:
            data = _context41.sent;
            ColonLeads.products = JSON.parse(data);

          case 4:
          case "end":
            return _context41.stop();
        }
      }
    }, _callee41);
  }));

  ColonLeads.RecUnt = function ($OBJ, data) {
    $OBJ.children().children().css(data);
    $OBJ.find('.modal-body').trigger('modal:loaded').trigger('modal:centrify');
  };

  ColonLeads.__render = function (twig) {
    return $(twig.render());
  };

  var _initialiseProps6 = function _initialiseProps6() {
    var _this17 = this;

    this.bind_action = function () {
      _this17.$$CustomCheckbox.on('click', function () {
        SelectProducts.CustomCheck_isSHOW(false);
        var $check = $('.pragma_checkbox-leads_storage');
        $check.prop("checked", false);
        SelectProducts.delAll();

        _this17.$PlaceLine.hide();
      });

      _this17.$$CheckAll.on('click', function () {
        var $check = $('.pragma_checkbox-leads_storage');

        var flag = _this17.$$CheckAll.is(':checked');

        switch (flag) {
          case true:
            $check.prop("checked", true);
            SelectProducts.addAll(ColonLeads.idS);

            _this17.$PlaceLine.show();

            $('.prag_place-products_all').hide();
            break;

          case false:
            $check.prop("checked", false);
            SelectProducts.delAll();

            _this17.$PlaceLine.hide();

            break;
        }
      });

      _this17.$BtnAddProduct.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
        var Twig_ModalColumn, _ModalColumnLeads, obj, $$MBD, $RightColumn, MSD;

        return regeneratorRuntime.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                Twig_ModalColumn = templates.ModalColonLeads;
                _ModalColumnLeads = new ModalColumnLeads(Twig_ModalColumn, true);
                obj = {
                  class_name: 'modal-column_leads'
                };
                modal.ConfirmModal(obj);
                $$MBD = $('.modal-column_leads').find('.modal-body');
                $$MBD.html(_ModalColumnLeads.$);
                $$MBD.css({
                  height: window.innerHeight - 130 + "px",
                  width: window.innerWidth - 152 + "px"
                });
                $RightColumn = $('.right_column-body');
                $RightColumn.css({
                  "height": window.innerHeight - 314
                });
                $$MBD.trigger('modal:loaded');
                $$MBD.trigger('modal:centrify');
                $$MBD.attr('id', 'column_leads_id_43');
                MSD = $('#column_leads_id_43');
                MSD.on('mousedown', function (event) {
                  MSD.one('mouseup', function (event) {
                    var wModal = MSD.height();
                    var RightColumnDIV = $('.right_column-body');
                    RightColumnDIV.css({
                      "height": wModal - 182
                    });
                    RightColumnDIV.css({
                      "height": wModal - 182
                    });
                    var WidthDIV = RightColumnDIV.css('width').replace(/\D+/g, "");
                    $('.pragma_pagination__rows_leads ').css({
                      'margin-left': WidthDIV - 575 + "px"
                    });
                    MSD.trigger('modal:loaded');
                    MSD.trigger('modal:centrify');
                  });
                });

              case 14:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42);
      })));

      _this17.$$discountAllLead.on('click', function () {
        $('#products_all').trigger('click');
        DiscountAll.Twig = templates.PragmaDiscountALL;

        _this17.DiscountAll();
      });

      _this17.$$LeadsName.on('click', function () {
        _this17.SORT(_this17.$$LeadsName, 'title');
      });

      _this17.$$LeadsArticle.on('click', function () {
        _this17.SORT(_this17.$$LeadsArticle, 'article');
      });

      _this17.$$LeadsQuantity.on('click', function () {
        _this17.SORT(_this17.$$LeadsQuantity, 'balance');
      });

      _this17.$$LeadsPriceSail.on('click', function () {
        _this17.SORT(_this17.$$LeadsPriceSail, 'selling_price');
      });

      _this17.$$LeadsPriceSum.on('click', function () {
        _this17.SORT(_this17.$$LeadsPriceSum, 'sum');
      });
    };

    this.SORT = function ($OBJ, NAME_SORT) {
      // this.delete_arrow()
      _this17.color($OBJ);

      var array_id_for_SORT = [];
      $('.el-product_card').each(function () {
        var _id = $(this).attr('id');

        array_id_for_SORT.push(_id);
      });
      var arrow;
      var DiscountAll = ColonLeads.Data;
      var New_array = [];

      var _loop2 = function _loop2(product) {
        var item = DiscountAll.find(function (item) {
          return item.id == array_id_for_SORT[product];
        });
        New_array.push(item);
      };

      for (var product in array_id_for_SORT) {
        _loop2(product);
      }

      New_array.sort(function (a, b) {
        if (a[NAME_SORT] > b[NAME_SORT]) {
          return 1;
        }

        if (a[NAME_SORT] < b[NAME_SORT]) {
          return -1;
        }

        return 0;
      });

      switch (ColonLeads.FlagSort) {
        case false:
          ColonLeads.FlagSort = true;
          arrow = templates.ArrowDown.render();
          break;

        case true:
          New_array = New_array.reverse();
          ColonLeads.FlagSort = false;
          arrow = templates.ArrowUp.render();
          break;
      } // $OBJ.append(arrow);


      var sort_array = [];

      for (var i in New_array) {
        if (New_array.hasOwnProperty(i)) {
          var el = new ElCard(New_array[i], false);
          sort_array.push(el.$);
        }
      }

      $('.colon_leads-placeForProducts').html(sort_array);
      ElCard.recount();
    };

    this.delete_arrow = function () {
      $('.pragma_arrow_up').remove();
      $('.pragma_arrow_down').remove();
    };

    this.color = function ($OBJ) {
      var color = "rgba(133,145,165,.5)";
      $('.table_leads-name-label').css({
        color: color
      });
      $('.table_leads-article-label').css({
        color: color
      });
      $('.table_leads-quantity-label').css({
        color: color
      });
      $('.table_leads-price_sail-label').css({
        color: color
      });
      $('.table_leads-price_sum-label').css({
        color: color
      });
      $OBJ.find('div').css({
        color: "#6e747a"
      });
    };

    this.DiscountAll = function () {
      var discA = new LineChangeAll();
      discA.PressDiscountAll();
    };

    this.LineAll = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
      var LineAll;
      return regeneratorRuntime.wrap(function _callee43$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              LineChangeAll.Twig = templates.LineAll;
              LineAll = new LineChangeAll();

              _this17.$PlaceLine.html(LineAll.$);

            case 3:
            case "end":
              return _context43.stop();
          }
        }
      }, _callee43);
    }));
    this.fill_export = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
      var _AMOCRM$data$current_;

      var arr, status, data_arr, sum, new_arr, arr_id, dataKey, data_, obj, ar2r, i, __id;

      return regeneratorRuntime.wrap(function _callee44$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              DescProduct.Twig = templates.ModalDescProduct;
              DescProduct.ElTwig = templates.DetailsLeadsPost;
              _context44.next = 4;
              return functions.request({
                flag: 'get_export',
                entity_type: AMOCRM.data.current_entity,
                entity_id: (_AMOCRM$data$current_ = AMOCRM.data.current_card) === null || _AMOCRM$data$current_ === void 0 ? void 0 : _AMOCRM$data$current_.id
              });

            case 4:
              arr = _context44.sent;
              DiscountAll.ExportProduct = JSON.parse(arr);
              DiscountAll.ExportProduct.length < 2 ? _this17.$$CheckAll.hide() : 0;

              if (!arr) {
                _context44.next = 32;
                break;
              }

              data_arr = JSON.parse(arr);

              if (!data_arr.length) {
                _context44.next = 32;
                break;
              }

              sum = 0;
              new_arr = [];
              arr_id = [];
              functions.setTbd(true);
              ElCard.Twig = templates.elCardProduct;

              for (dataKey in data_arr) {
                if (data_arr.hasOwnProperty(dataKey)) {
                  status = data_arr[dataKey].status_id;
                  arr_id.push(data_arr[dataKey].product_id);
                  ColonLeads.idS.push(data_arr[dataKey].id);
                  data_ = {
                    title: data_arr[dataKey].title,
                    article: data_arr[dataKey].article,
                    discount: data_arr[dataKey].discount,
                    id: data_arr[dataKey].id,
                    selling_price: data_arr[dataKey].selling_price,
                    balance: data_arr[dataKey].quantity,
                    full_price: data_arr[dataKey].full_price,
                    category_id: data_arr[dataKey].category_id,
                    export_details: data_arr[dataKey].export_details,
                    sum: data_arr[dataKey].selling_price * data_arr[dataKey].quantity
                  };
                  sum += 1 * data_arr[dataKey].selling_price;
                  ColonLeads.Data.push(data_);
                  obj = new ElCard(data_, false);
                  new_arr.push(obj.$);
                }
              }

              $('.colon_leads-placeForProducts').html(new_arr);
              ar2r = [];
              _context44.t0 = regeneratorRuntime.keys(ColonLeads.products);

            case 19:
              if ((_context44.t1 = _context44.t0()).done) {
                _context44.next = 29;
                break;
              }

              i = _context44.t1.value;
              __id = ColonLeads.products[i].id;
              _context44.t2 = arr_id.includes(__id);
              _context44.next = _context44.t2 === true ? 25 : _context44.t2 === false ? 26 : 27;
              break;

            case 25:
              return _context44.abrupt("break", 27);

            case 26:
              ar2r.push(ColonLeads.products[i]);

            case 27:
              _context44.next = 19;
              break;

            case 29:
              ColonLeads.products = ar2r;
              _context44.next = 32;
              return ColonLeads.status_leads(status);

            case 32:
            case "end":
              return _context44.stop();
          }
        }
      }, _callee44);
    }));
  };

  var _RenderPage = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
      var flagin, pmStorage, Loader, Block, req_setting, ReqParse, twig_ColonLeads, _ColonLeads;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              flagin = true;

              if (!flagin) {
                _context14.next = 24;
                break;
              }

              pmStorage = $('#pragmastoragetest');
              Loader = $('.loader_pragma_id_left');
              Block = $('.pragma_block_left');

              if (!ColonLeads.active) {
                ColonLeads.active = true;
                Loader.show();
                Block.show();
              }

              SelectProducts.SelectedProducts = [];
              LineChange.Twig = templates.LineChangeLead;
              DescProduct.TwigProduct_deficit = templates.product_deficit;
              _context14.next = 11;
              return ColonLeads.request_get_products();

            case 11:
              _context14.next = 13;
              return functions.req_setting({
                flag: 'get_all_settings'
              });

            case 13:
              req_setting = _context14.sent;
              ReqParse = JSON.parse(req_setting);
              ColonLeads.All_status = JSON.stringify(ReqParse.statuses);
              functions.Settings._integer = ReqParse.fractional;
              functions.Settings.ActiveStock = ReqParse.active_stock;
              twig_ColonLeads = templates.ColonLeads;
              _ColonLeads = new ColonLeads(twig_ColonLeads);
              pmStorage.html(_ColonLeads.$);
              Loader.hide();
              Block.hide();
              ColonLeads.active = false;

            case 24:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function RenderPage() {
      return _ref10.apply(this, arguments);
    };
  }();

  var _RenderTemp = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(self) {
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return load.TwigWrapper.load_templates(self);

            case 2:
              return _context15.abrupt("return", _context15.sent);

            case 3:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function RenderTemp(_x8) {
      return _ref11.apply(this, arguments);
    };
  }();

  $('#save_and_close_contacts_link').on('click', function () {
    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return _RenderPage();

            case 2:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    })), 2500);
  });
  return {
    RenderTemp: function () {
      var _RenderTemp2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(self) {
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return _RenderTemp(self);

              case 2:
                return _context17.abrupt("return", _context17.sent);

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      function RenderTemp(_x9) {
        return _RenderTemp2.apply(this, arguments);
      }

      return RenderTemp;
    }(),
    RenderPage: function () {
      var _RenderPage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return _RenderPage();

              case 2:
                return _context18.abrupt("return", _context18.sent);

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));

      function RenderPage() {
        return _RenderPage2.apply(this, arguments);
      }

      return RenderPage;
    }(),
    ModalColumnLeads: ModalColumnLeads
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 925:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(278), __webpack_require__(865), __webpack_require__(455), __webpack_require__(0), __webpack_require__(733), __webpack_require__(651)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, load, modal, functions, LeftPage, ColonLeads, Modal) {
  var templates = load.TwigWrapper._templates;

  var AddPosition = /*#__PURE__*/function () {
    function AddPosition(data) {
      var _this = this;

      _classCallCheck(this, AddPosition);

      this.bind_actions = function () {
        _this.$BtnDel.on('click', function () {
          var obj = {
            title: "Удалить позицию?",
            class_name: 'dell_position_coming-modal',
            accept_text: 'Удалить',
            cancel_text: 'Отмена',
            accept_func: function () {
              var _accept_func = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return functions.request({
                          flag: 'delete_position_coming',
                          product_import_id: _this.id
                        });

                      case 2:
                        res = _context.sent;
                        _context.t0 = res;
                        _context.next = _context.t0 === true ? 6 : _context.t0 === 'true' ? 6 : 9;
                        break;

                      case 6:
                        _this.$.remove();

                        modal.alert.showAlertModal('Товар удален', true, 1000);
                        return _context.abrupt("break", 11);

                      case 9:
                        modal.alert.showAlertModal('Товар продан или зарезеривирован', false, 2000);
                        return _context.abrupt("break", 11);

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              function accept_func() {
                return _accept_func.apply(this, arguments);
              }

              return accept_func;
            }()
          };
          modal.ConfirmModal(obj);
        });

        _this.$InputQuantity.on('keypress', function (e) {
          var KeyCode = e.charCode;

          if (KeyCode === 43 || KeyCode === 45) {
            return false;
          }
        });

        _this.$InputPurshSail.on('keypress', function (e) {
          var KeyCode = e.charCode;

          if (KeyCode === 43 || KeyCode === 45) {
            return false;
          }
        });

        _this.$InputQuantity.attr('min', '0');

        _this.$InputPurshSail.attr('min', '0');

        _this.$InputQuantity.on('input', function () {
          ModalComing._value_();
        });

        _this.$InputPurshSail.on('input', function () {
          ModalComing._value_();
        });
      };

      this._id = data.id;
      this._no = data.no;
      this._product_id = data.product_id;
      this.article = data.article;
      this.title = data.title;
      this.quantity = functions.Settings.FractionNumbers(data.quantity);
      this.price_purchase = functions.Settings.FractionNumbers(data.price_purchase);
      this.price_sail = functions.Settings.FractionNumbers(data.price_sail);
      this._$ = AddPosition.__render(this._id, this._no, this.article, this.title, this.quantity, this.price_purchase, this.price_sail, this._product_id);
      this._$BtnDel = this._$.find('.coming-table-delete');
      this._$InputQuantity = this._$.find('.coming-table-quantity-el input');
      this._$InputPurshSail = this._$.find('.coming-table-purchase-el input');
      this.bind_actions();
    }

    _createClass(AddPosition, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "product_id",
      get: function get() {
        return this._product_id;
      }
    }, {
      key: "$BtnDel",
      get: function get() {
        return this._$BtnDel;
      }
    }, {
      key: "$InputQuantity",
      get: function get() {
        return this._$InputQuantity;
      }
    }, {
      key: "$InputPurshSail",
      get: function get() {
        return this._$InputPurshSail;
      }
    }]);

    return AddPosition;
  }();

  AddPosition.__render = function (id, no, article, name, quantity, price_purchase, price_sail, product_id) {
    return $(AddPosition.Twig.render({
      id: id,
      no: no,
      article: article,
      name: name,
      quantity: quantity,
      price_purchase: price_purchase,
      price_sail: price_sail,
      product_id: product_id
    }));
  };

  var ModalComing = /*#__PURE__*/function () {
    function ModalComing(flag, id) {
      _classCallCheck(this, ModalComing);

      _initialiseProps.call(this);

      ModalComing.flag_ = flag;
      ModalComing.ArrId_Add_position = [];
      this._i = 1;
      this._flag = flag;
      this._id = id;
      this._array_products = Coming.AllProducts;
      this._account_id = AMOCRM.constant('account').id;
      this._$ = ModalComing.__render(ModalComing.Section, this._id);
      this._$$AddPRODUCT = this._$.find('#btn_add-product');
      this._$Btn_add_Position = this._$.find('.modal_coming-add_position');
      this._$InputArticle = this._$.find('#id_footer-one-article');
      this._$InputPosition = this._$.find('#id_footer-one-position');
      this._$Quantity = this._$.find('#id_footer-last-quantity');
      this._$Section = this._$.find('#id_footer-one-section');
      this._$Unit = this._$.find('#id_footer-last-chan');
      this._$Btn_add_Coming = this._$.find('.modal_coming-save_coming');
      this._$Btn_delete_Coming = this._$.find('.modal_coming-delete_coming');
      this._$InputPrice_sail = this._$.find('#price_purchase_price_sale_coming');
      this._$InputQuantity = this._$.find('#id_footer-last-quantity');
      flag ? this._$Btn_delete_Coming.hide() : this._$Btn_delete_Coming.show();
      this.bind_action();
    }

    _createClass(ModalComing, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$$AddPRODUCT",
      get: function get() {
        return this._$$AddPRODUCT;
      }
    }, {
      key: "flag",
      get: function get() {
        return this._flag;
      }
    }, {
      key: "i",
      get: function get() {
        return this._i++;
      }
    }, {
      key: "$InputPrice_sail",
      get: function get() {
        return this._$InputPrice_sail;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "products",
      get: function get() {
        return this._products;
      }
    }, {
      key: "$InputQuantity",
      get: function get() {
        return this._$InputQuantity;
      }
    }, {
      key: "array_products",
      get: function get() {
        return this._array_products;
      }
    }, {
      key: "$Btn_add_Coming",
      get: function get() {
        return this._$Btn_add_Coming;
      }
    }, {
      key: "$Btn_add_Position",
      get: function get() {
        return this._$Btn_add_Position;
      }
    }, {
      key: "$Btn_delete_Coming",
      get: function get() {
        return this._$Btn_delete_Coming;
      }
    }, {
      key: "$InputPosition",
      get: function get() {
        return this._$InputPosition;
      }
    }, {
      key: "account_id",
      get: function get() {
        return this._account_id;
      }
    }, {
      key: "$InputArticle",
      get: function get() {
        return this._$InputArticle;
      }
    }, {
      key: "$Section",
      get: function get() {
        return this._$Section;
      }
    }, {
      key: "$Quantity",
      get: function get() {
        return this._$Quantity;
      }
    }, {
      key: "$Unit",
      get: function get() {
        return this._$Unit;
      }
    }]);

    return ModalComing;
  }();

  ModalComing.Section = [];
  ModalComing.ArrId_del_position = [];

  ModalComing._value_ = function () {
    $('.el_coming-table_coming').each(function () {
      var QUANTITY = $(this).find('.coming-table-quantity-el').find('input');
      var data_QUANTITY = functions.Settings.FractionNumbers(QUANTITY.val());
      QUANTITY.val(data_QUANTITY);
      var PRICE = $(this).find('.coming-table-purchase-el').find('input');
      var data_RICY = functions.Settings.FractionNumbers(PRICE.val());
      PRICE.val(data_RICY);
    });
  };

  ModalComing.footer_btn = function () {
    switch (ModalComing.flag_) {
      case true:
        var $obg = $('#save_coming');
        var flag = $('.el_coming-table_coming').length;

        switch (flag) {
          case 0:
            $obg.hide();
            break;

          default:
            $obg.show();
        }

        break;
    }
  };

  ModalComing.today = function () {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var DAY = day < 10 ? '0' + day : day;
    var MONTH = month < 10 ? '0' + month : month;
    return DAY + '.' + MONTH + '.' + year;
  };

  ModalComing.__render = function (m_data, id) {
    var to_day_date = ModalComing.today();
    return $(ModalComing.Twig.render({
      m_data: m_data,
      id: id,
      to_day_date: to_day_date
    }));
  };

  var _initialiseProps = function _initialiseProps() {
    var _this7 = this;

    this.bind_action = function () {
      _this7.$$AddPRODUCT.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var Twig_ModalColumn, _ModalColumnLeads, obj, $$MBD, $RightColumn, WidthDIV, MD;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return ColonLeads.ModalColumnLeads.Posit();

              case 2:
                Twig_ModalColumn = templates.ModalColonLeads;
                ColonLeads.ModalColumnLeads.Coming = true;
                _ModalColumnLeads = new ColonLeads.ModalColumnLeads(Twig_ModalColumn, _this7.id);
                obj = {
                  class_name: 'modal-column_leads'
                };
                modal.ConfirmModal(obj);
                $$MBD = $('.modal-column_leads').find('.modal-body');
                $$MBD.html(_ModalColumnLeads.$);
                $$MBD.attr('id', 'column_leads_id_45');
                $$MBD.css({
                  "height": window.innerHeight - 130 + "px",
                  "width": window.innerWidth - 152 + "px",
                  "min-width": "950px",
                  "min-height": "560px"
                });
                $RightColumn = $('.right_column-body');
                $RightColumn.css({
                  "height": window.innerHeight - 314
                });
                WidthDIV = $RightColumn.css('width');
                $('.pragma_pagination__rows_leads').css({
                  'margin-left': WidthDIV - 575 + "px"
                });
                $$MBD.trigger('modal:loaded');
                $$MBD.trigger('modal:centrify');

                ModalComing._value_();

                MD = $('#column_leads_id_45');
                MD.on('mousedown', function (event) {
                  MD.one('mouseup', function (event) {
                    var wModal = $('#column_leads_id_45').height();
                    var RightColumnDIV = $('.right_column-body');
                    RightColumnDIV.css({
                      "height": wModal - 182
                    });
                    var WidthDIV = RightColumnDIV.css('width').replace(/\D+/g, "");
                    $('.pragma_pagination__rows_leads ').css({
                      'margin-left': WidthDIV - 575 + "px"
                    });
                    MD.trigger('modal:loaded');
                    MD.trigger('modal:centrify');
                  });
                });

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      })));

      _this7.$Quantity.on('input', function () {
        var valQ = _this7.$Quantity.val() * 1;

        switch (valQ) {
          case 0:
            _this7.$Quantity.val(1);

            break;
        }

        ModalComing._value_();
      });

      _this7.$Btn_add_Coming.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var CheckEnterDataCom, data_coming, answer_add, parse_data, el_com, table, obj;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                CheckEnterDataCom = _this7.CheckEnterDataCom();
                _context7.t0 = CheckEnterDataCom;
                _context7.next = _context7.t0 === true ? 4 : _context7.t0 === false ? 27 : 29;
                break;

              case 4:
                _context7.next = 6;
                return _this7.to_collect_data();

              case 6:
                data_coming = _context7.sent;
                _context7.t1 = _this7.flag;
                _context7.next = _context7.t1 === true ? 10 : _context7.t1 === false ? 23 : 26;
                break;

              case 10:
                _context7.next = 12;
                return functions.request({
                  flag: "coming_add",
                  account_id: _this7.account_id,
                  data: data_coming
                });

              case 12:
                answer_add = _context7.sent;
                parse_data = JSON.parse(answer_add);
                modal.alert.showAlertModal('Поставка Добавлена', true, 1000);
                setTimeout(function () {
                  return $('.modal-body__close').trigger('click');
                }, 1100);
                Coming.fill_body().then(function (r) {
                  return r;
                });
                el_com = $('.body_el_coming');
                data_coming.id_supply = parse_data.import_id;
                table = new ElComing(data_coming, el_com.length + 1);
                $('.place_el_table_coming').append(table.$);

                _this7.$.parent().parent().parent().remove();

                return _context7.abrupt("break", 26);

              case 23:
                obj = {
                  title: 'Сохранить изменения?',
                  class_name: 'change_save_coming-modal',
                  accept_text: 'Сохранить',
                  cancel_text: 'Отмена',
                  accept_func: function () {
                    var _accept_func2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                      var res_coming_change, $las, new_el;
                      return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              _context6.next = 2;
                              return functions.request({
                                flag: "coming_change",
                                account_id: _this7.account_id,
                                data: data_coming
                              });

                            case 2:
                              res_coming_change = _context6.sent;
                              $las = JSON.parse(res_coming_change).code;
                              _context6.t0 = $las;
                              _context6.next = _context6.t0 === 804 ? 7 : 10;
                              break;

                            case 7:
                              modal.alert.showAlertModal('Часть товара отправлено клиенту', false, 2000);
                              modal.alert.showAlertModal('Часть товара отправлено клиенту', false, 2000);
                              return _context6.abrupt("break", 10);

                            case 10:
                              _context6.t1 = res_coming_change;
                              _context6.next = _context6.t1 === true ? 13 : _context6.t1 === 'true' ? 13 : _context6.t1 === false ? 19 : 20;
                              break;

                            case 13:
                              new_el = new ElComing(data_coming, ModalComing.No * 1);
                              $(".body_el_coming[id=\"".concat(data_coming.id_supply, "\"]")).replaceWith(new_el.$);
                              modal.alert.showAlertModal('Изменения Сохранены', true, 1000);
                              setTimeout(function () {
                                return $('.modal-body__close').trigger('click');
                              }, 1100);
                              Coming.fill_body().then(function (r) {
                                return r;
                              });
                              return _context6.abrupt("break", 20);

                            case 19:
                              modal.alert.showAlertModal('Ошибка', false, 1000);

                            case 20:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6);
                    }));

                    function accept_func() {
                      return _accept_func2.apply(this, arguments);
                    }

                    return accept_func;
                  }()
                };
                modal.ConfirmModal(obj);
                return _context7.abrupt("break", 26);

              case 26:
                return _context7.abrupt("break", 29);

              case 27:
                modal.alert.showAlertModal('Введите данные', false, 1000);
                return _context7.abrupt("break", 29);

              case 29:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      })));

      _this7.$Btn_delete_Coming.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var obj;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                obj = {
                  title: "Удалить Поставку?",
                  class_name: 'dell_coming-modal',
                  accept_text: 'Удалить',
                  cancel_text: 'Отмена',
                  accept_func: function () {
                    var _accept_func3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                      var res_del_com;
                      return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                          switch (_context8.prev = _context8.next) {
                            case 0:
                              _context8.next = 2;
                              return functions.request({
                                flag: 'coming_delete',
                                coming_id: _this7.id,
                                account_id: _this7.account_id
                              });

                            case 2:
                              res_del_com = _context8.sent;
                              _context8.t0 = res_del_com;
                              _context8.next = _context8.t0 === true ? 6 : _context8.t0 === 'true' ? 6 : 10;
                              break;

                            case 6:
                              $('.modal-body__close').trigger('click');
                              modal.alert.showAlertModal('Удалено', true, 1000);
                              $(".body_el_coming[id=".concat(_this7.id, "]")).remove();
                              return _context8.abrupt("break", 11);

                            case 10:
                              modal.alert.showAlertModal('Удаление невозможно, в поставке есть товар', false, 2000);

                            case 11:
                            case "end":
                              return _context8.stop();
                          }
                        }
                      }, _callee8);
                    }));

                    function accept_func() {
                      return _accept_func3.apply(this, arguments);
                    }

                    return accept_func;
                  }()
                };
                modal.ConfirmModal(obj);

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      })));
    };

    this.CheckEnterDataCom = function () {
      var data = _this7.$.find('.date_field').val();

      return data.length !== 0;
    };

    this.to_collect_data = function () {
      var array_position = [];
      $('.el_coming-table_coming').each(function (index) {
        var el = $('.el_coming-table_coming')[index];
        array_position.push({
          id: $(el).attr('id'),
          product_id: $(el).attr('data-product_id'),
          no: $(el).find('.coming-table-no-el').text(),
          article: $(el).find('.coming-table-article-el').text(),
          title: $(el).find('.coming-table-name-el').text(),
          quantity: $(el).find('.coming-table-quantity-el input').val(),
          price_purchase: $(el).find('.coming-table-purchase-el input').val()
        });
      });

      var __id = _this7.$.attr('id');

      return {
        id_supply: __id ? __id : _this7.id,
        num_supply: $('#id_coming-number').val(),
        date_supply: _this7.prepare_date($('.date_field').val()),
        num_document: $('#id_coming-num_doc').val(),
        provider: $('#id_coming-provider').val(),
        data_supply: array_position,
        id_del_position: ModalComing.ArrId_del_position,
        id_add_position: ModalComing.ArrId_Add_position,
        store_id: LeftPage.itemStock.Active_Sore_id
      };
    };

    this.prepare_date = function (date) {
      var E = date.split('.');
      var now = new Date();
      var H = now.getHours();
      var M = now.getMinutes();
      var S = now.getSeconds();
      return E[2] + '-' + E[1] + '-' + E[0] + ' ' + _this7.uptD(H) + ':' + _this7.uptD(M) + ':' + _this7.uptD(S);
    };

    this.uptD = function (d) {
      var newD;

      switch (d < 10) {
        case true:
          newD = "0" + d;
          break;

        default:
          newD = d;
          break;
      }

      return newD;
    };
  };

  var ElComing = /*#__PURE__*/function () {
    function ElComing(data, i) {
      var _this2 = this;

      _classCallCheck(this, ElComing);

      this.body_action = function () {
        _this2.$$Edit.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var Loader, Block, table_product, _ModalComing, obj, M_change_coming;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(functions.Settings.ActiveStock === -1)) {
                    _context2.next = 3;
                    break;
                  }

                  modal.alert.showAlertModal('Выберите Склад', false, 2000);
                  return _context2.abrupt("return", false);

                case 3:
                  Loader = $('.loader_pragma_id');
                  Block = $('.pragma_block');

                  if (ElComing.active) {
                    _context2.next = 26;
                    break;
                  }

                  ElComing.active = true;
                  Loader.show();
                  Block.show();
                  ModalComing.ArrId_del_position = [];
                  ModalComing.No = _this2.no * 1;
                  _context2.next = 13;
                  return _this2.generate_el_table();

                case 13:
                  table_product = _context2.sent;
                  _ModalComing = new ModalComing(false, _this2.id);
                  obj = {
                    title: "Изменить Поставку",
                    class_name: 'change_coming-modal'
                  };
                  modal.ConfirmModal(obj);
                  M_change_coming = $('.change_coming-modal');
                  M_change_coming.find('.modal-body__inner').append(_ModalComing.$);
                  Coming.RecUnt(M_change_coming, {
                    'border-radius': '5px',
                    'width': '900px'
                  });
                  $('.body-right_catalogs_elen').append(table_product);

                  _this2.fill_input();

                  M_change_coming.find('.modal-body').trigger('modal:loaded').trigger('modal:centrify');
                  Loader.hide();
                  Block.hide();
                  ElComing.active = false;

                case 26:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })));
      };

      this.redaction_date = function (date) {
        var W = date.split(' ')[0].split('-');
        var t = '.';
        return W[2] + t + W[1] + t + W[0];
      };

      this.fill_input = function () {
        $("#id_coming-provider").val(_this2.provider);
        $('.date_field').val(_this2.date);
        $('#id_coming-num_doc').val(_this2.num_document);
        $('#id_coming-number').val(_this2.num_supply);
      };

      this.generate_el_table = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var arr, array, el, elem;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                arr = _this2.data_coming;
                array = [];

                for (el in arr) {
                  if (arr.hasOwnProperty(el)) {
                    elem = new AddPosition(arr[el]);
                    array.push(elem.$);
                  }
                }

                return _context3.abrupt("return", array);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      this._account_id = AMOCRM.constant('account').id;
      this._no = Btn_arr_Comming.counter++;
      this._id = data.id_supply;
      this._num_supply = data.num_supply;
      this._date = this.redaction_date(data.date_supply);
      this._num_document = data.num_document;
      this._provider = data.provider;
      this._data_coming = data.data_supply;
      this._$ = ElComing.__render(this._id, this._no, this._num_supply, this._date, this._provider, functions.tbl());
      this._$$Edit = this._$.find('.pragma_coming_edit');
      this.body_action();
    }

    _createClass(ElComing, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "provider",
      get: function get() {
        return this._provider;
      }
    }, {
      key: "date",
      get: function get() {
        return this._date;
      }
    }, {
      key: "num_document",
      get: function get() {
        return this._num_document;
      }
    }, {
      key: "num_supply",
      get: function get() {
        return this._num_supply;
      }
    }, {
      key: "data_coming",
      get: function get() {
        return this._data_coming;
      }
    }, {
      key: "no",
      get: function get() {
        return this._no;
      }
    }, {
      key: "$$Edit",
      get: function get() {
        return this._$$Edit;
      }
    }]);

    return ElComing;
  }();

  ElComing.active = false;

  ElComing.__render = function (id, no, num_supply, date, provision, tbl) {
    return $(ElComing.Twig.render({
      id: id,
      no: no,
      num_supply: num_supply,
      date: date,
      provision: provision,
      tbl: tbl
    }));
  };

  var Coming = /*#__PURE__*/function () {
    function Coming() {
      var _this3 = this;

      _classCallCheck(this, Coming);

      this.bind_action = function () {
        _this3.$Coming_num_post.on('click', function () {
          _this3.SORT(_this3.$Coming_num_post, 'num_supply');
        });

        _this3.$Coming_date.on('click', function () {
          _this3.SORT(_this3.$Coming_date, 'date_supply');
        });

        _this3.$Coming_provision.on('click', function () {
          _this3.SORT(_this3.$Coming_provision, 'provider');
        });
      };

      this.SORT = function ($OBJ, NAME_SORT) {
        _this3.delete_arrow();

        _this3.color($OBJ);

        var array_id_for_SORT = [];
        $('.body_el_coming').each(function () {
          var _id = $(this).attr('id');

          array_id_for_SORT.push(_id);
        });
        var arrow;
        var AllComing = Coming.AllComing;
        var New_array = [];

        var _loop = function _loop(product) {
          var item = AllComing.find(function (item) {
            return item.id_supply == array_id_for_SORT[product];
          });
          New_array.push(item);
        };

        for (var product in array_id_for_SORT) {
          _loop(product);
        }

        switch (NAME_SORT) {
          case 'date_supply':
            New_array = _this3.SORT_DATE(New_array);
            break;

          default:
            New_array.sort(function (a, b) {
              var _a = a[NAME_SORT];
              var _b = b[NAME_SORT];

              if (NAME_SORT === 'num_supply') {
                _a *= 1;
                _b *= 1;
              }

              if (_a > _b) {
                return 1;
              }

              if (_a < _b) {
                return -1;
              }

              return 0;
            });
            break;
        }

        switch (Coming.FlagSort) {
          case false:
            Coming.FlagSort = true;
            var id_down = "arrow_down_coming_pragma";
            arrow = Coming.ArrowDown.render({
              id_down: id_down
            });
            break;

          case true:
            New_array = New_array.reverse();
            Coming.FlagSort = false;
            var id_up = "arrow_up_coming_pragma";
            arrow = Coming.ArrowUp.render({
              id_up: id_up
            });
            break;
        }

        Btn_arr_Comming.counter = OrgComing.id_click * 25 - 24;
        $OBJ.append(arrow);
        functions.setTbd(true);
        var sort_array = [];

        for (var i in New_array) {
          if (New_array.hasOwnProperty(i)) {
            var el = new ElComing(New_array[i], i * 1 + 1);
            sort_array.push(el.$);
          }
        }

        _this3.$body_table_com.html(sort_array);
      };

      this.color = function ($OBJ) {
        var color = "rgba(133,145,165,.5)";
        $('.body_table_coming-num_post-label').css({
          color: color
        });
        $('.body_table_coming-date-label').css({
          color: color
        });
        $('.body_table_coming-provision-label').css({
          color: color
        });
        $OBJ.find('div').css({
          color: "#6e747a"
        });
      };

      this.SORT_DATE = function (employees) {
        return employees.sort(function (a, b) {
          var dateA = rend_data(a.date_supply);
          var dateB = rend_data(b.date_supply);
          return dateA - dateB; //сортировка по возрастающей дате
        });

        function rend_data(data) {
          var ar_date = data.split(' ')[0].split('-');
          return new Date(ar_date[0], ar_date[1], ar_date[2]);
        }
      };

      this.delete_arrow = function () {
        $('.pragma_arrow_up').remove();
        $('.pragma_arrow_down').remove();
      };

      this._$ = Coming.__render();
      Coming.account_id = AMOCRM.constant('account').id;
      this._$Coming_No = this._$.find('.body_table_coming-No');
      this._$Coming_num_post = this._$.find('.body_table_coming-num_post');
      this._$Coming_date = this._$.find('.body_table_coming-date');
      this._$Coming_provision = this._$.find('.body_table_coming-provision');
      this._$body_table_com = this._$.find('.place_el_table_coming');
      this.bind_action();
      Coming.fill_body().then(function (r) {
        return r;
      });
    }

    _createClass(Coming, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$body_table_com",
      get: function get() {
        return this._$body_table_com;
      }
    }, {
      key: "$Coming_num_post",
      get: function get() {
        return this._$Coming_num_post;
      }
    }, {
      key: "$Coming_date",
      get: function get() {
        return this._$Coming_date;
      }
    }, {
      key: "$Coming_provision",
      get: function get() {
        return this._$Coming_provision;
      }
    }]);

    return Coming;
  }();

  Coming.FlagSort = false;
  Coming.AllProducts = [];
  Coming.AllSection = [];
  Coming.AllComing = [];
  Coming.active = false;
  Coming.fill_body = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var Block, Loader, all_coming, org, el_table, $BTN_ADD;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            Block = $('.pragma_block');
            Loader = $('.loader_pragma_id');

            if (Coming.active) {
              _context10.next = 34;
              break;
            }

            Coming.active = true;
            Loader.show();
            Block.show();
            Coming.ArrowUp = templates.ArrowUp;
            Coming.ArrowDown = templates.ArrowDown;
            _context10.next = 10;
            return Coming.request_get_all_products();

          case 10:
            Coming.AllProducts = _context10.sent;
            _context10.next = 13;
            return Coming.request_get_all_section();

          case 13:
            Coming.AllSection = _context10.sent;
            ModalComing.Twig = templates.ModalComing;
            ModalComing.Section = Coming.request_dat();
            ElComing.Twig = templates.elComing;
            AddPosition.Twig = templates.PositionFORComing;
            _context10.next = 20;
            return Coming.request_get_coming();

          case 20:
            all_coming = _context10.sent;
            Coming.AllComing = JSON.parse(all_coming);
            _context10.next = 24;
            return functions.organization_array(Coming.AllComing, 25);

          case 24:
            org = _context10.sent;
            el_table = new Btn_arr_Comming(org);
            $('.stock_pragma-catalogs').html(el_table.$);
            $('#pagination_pragma_btn_1').trigger('click');
            $BTN_ADD = $('.coming_pragma-header-add');

            if (LeftPage.itemStock.Active_Sore_id === -1) {
              $BTN_ADD.hide();
            } else {
              $BTN_ADD.show();
            }

            $('.body_table_coming-date').trigger('click');
            Loader.hide();
            Block.hide();
            Coming.active = false;

          case 34:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  Coming.clickBtnAdd = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var _ModalComing, destroyFlag, modali;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _ModalComing = new ModalComing(true, null);
            destroyFlag = false;
            modali = new Modal({
              class_name: 'add_coming-modal',
              init: function () {
                var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11($modal_body) {
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          Coming.stopFlag = false;
                          $modal_body.append(_ModalComing.$).trigger('modal:loaded').trigger('modal:centrify');

                        case 2:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                }));

                function init(_x) {
                  return _init.apply(this, arguments);
                }

                return init;
              }(),
              destroy: function destroy() {
                if (destroyFlag) return true;
                modal.ConfirmModal({
                  title: 'Прервать текущую операцию?',
                  message: 'Операция будет прервана, все изменения не сохраняться',
                  accept_text: 'Прервать',
                  cancel_text: 'Отмена',
                  accept_func: function accept_func() {
                    destroyFlag = true;
                    modali.destroy();
                  }
                });
                return false;
              }
            });
            $('.modal_coming-pragma').attr('data-change', false);

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  Coming.request_get_coming = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return functions.request({
              flag: 'coming_get',
              account_id: Coming.account_id,
              store_id: functions.Settings.ActiveStock
            });

          case 2:
            return _context13.abrupt("return", _context13.sent);

          case 3:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  Coming.request_get_all_products = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
    var arr;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return functions.request({
              flag: 'products_get',
              account_id: Coming.account_id
            });

          case 2:
            arr = _context14.sent;
            return _context14.abrupt("return", JSON.parse(arr));

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  Coming.request_get_all_section = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
    var arr;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return functions.request({
              flag: 'section_get',
              account_id: Coming.account_id
            });

          case 2:
            arr = _context15.sent;
            return _context15.abrupt("return", JSON.parse(arr));

          case 4:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  Coming.request_dat = function () {
    var parse_data = Coming.AllSection;
    var arr = [];

    for (var tt in parse_data) {
      if (parse_data.hasOwnProperty(tt)) {
        arr.push({
          option: parse_data[tt].title,
          id: parse_data[tt].id
        });
      }
    }

    return arr;
  };

  Coming.RecUnt = function ($OBJ, data) {
    $OBJ.children().children().css(data);
    $OBJ.find('.modal-body').trigger('modal:loaded').trigger('modal:centrify');
  };

  Coming.__render = function () {
    return $(Coming.Twig.render());
  };

  var ComingBtnAdditional = /*#__PURE__*/function () {
    function ComingBtnAdditional() {
      var _this4 = this;

      _classCallCheck(this, ComingBtnAdditional);

      this.bind_actions = function () {
        _this4.$BtnAdd.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return Coming.clickBtnAdd();

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        })));
      };

      this._$ = ComingBtnAdditional._render();
      this._$BtnAdd = this._$.find('.coming_pragma-header-add');
      this.bind_actions();
    }

    _createClass(ComingBtnAdditional, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$BtnAdd",
      get: function get() {
        return this._$BtnAdd;
      }
    }]);

    return ComingBtnAdditional;
  }();

  ComingBtnAdditional._render = function () {
    var btn = "\n            <div class=\"top-three_more-three\">\n             <button type=\"button\" class=\"button-input button-input_blue   coming_pragma-header-add\" tabindex=\"\" id=\"four-add_product_pragma\"><span class=\"button-input-inner \">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"margin-right: 5px\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7pt\" height=\"7pt\" viewBox=\"0 0 7 7\" version=\"1.1\">\n<path style=\"fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 \" transform=\"matrix(0.0199164,0,0,0.0199164,0,0)\"></path>\n<path style=\"fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 \" transform=\"matrix(0.000000000000000001,0.0199164,-0.0199164,0.000000000000000001,7,0)\"></path>\n</svg>\n    <span class=\"button-input-inner__text\">\u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u041F\u041E\u0421\u0422\u0410\u0412\u041A\u0423</span></span></button>\n           \n    </div>";
    return $(btn);
  };

  var OrgComing = /*#__PURE__*/function () {
    function OrgComing(page, data) {
      var _this5 = this;

      _classCallCheck(this, OrgComing);

      this.bind_action = function () {
        _this5.$.on('click', function () {
          OrgComing.id_click = _this5.id;

          _this5.active_btn();

          var arr = _this5.Data;
          Btn_arr_Comming.counter = _this5.id * 25 - 24;
          var arr_new = [];
          functions.setTbd(true);

          for (var index in arr) {
            if (arr.hasOwnProperty(index)) {
              var table = new ElComing(arr[index], index * 1 + 1);
              arr_new.push(table.$);
            }
          }

          var LenArr = Btn_arr_Comming.AllElem.length;

          if (LenArr > 7) {
            if (_this5.id === 1) {
              OrgComing.mode = 1;

              _this5.clickFirst();

              _this5.active_btn();
            }

            if (OrgComing.mode === 5) {
              _this5.clickModeFive(_this5.id);

              _this5.active_btn();
            }

            if (_this5.id === OrgComing.LastBtn) {
              _this5.clickLast();

              OrgComing.mode = 5;

              _this5.active_btn();
            }

            if (_this5.id === 5) {
              OrgComing.mode = 5;

              _this5.clickFive();

              _this5.active_btn();
            }
          } else if (LenArr === 7) {
            if (_this5.id === 1) {
              OrgComing.mode = 1;

              _this5.clickFirst();

              _this5.active_btn();
            } else {
              _this5.clickLess(_this5.id);

              _this5.active_btn();
            }
          }

          $('.place_el_table_coming').html(arr_new);
        });
      };

      this.clickLess = function (clickId) {
        var FivBtn = new Btn_arr_Comming(Btn_arr_Comming.AllElem);
        FivBtn.$;

        if (clickId > 4) {
          FivBtn.clickModeLast();
        } else {
          FivBtn.clickModeFirst();
        }
      };

      this.clickLast = function () {
        var FivBtn = new Btn_arr_Comming(Btn_arr_Comming.AllElem);
        FivBtn.$;
        FivBtn.clickModeLast();
      };

      this.clickFirst = function () {
        var FivBtn = new Btn_arr_Comming(Btn_arr_Comming.AllElem);
        FivBtn.$;
        FivBtn.clickModeFirst();
      };

      this.clickModeFive = function (click) {
        var FivBtn = new Btn_arr_Comming(Btn_arr_Comming.AllElem);
        FivBtn.$;
        FivBtn.clickModeFive(click);
      };

      this.clickFive = function () {
        var FivBtn = new Btn_arr_Comming(Btn_arr_Comming.AllElem);
        FivBtn.$;
        FivBtn.btnClickFive();
      };

      this.active_btn = function () {
        OrgComing.id_click = _this5.id;
        $('.page_coming').each(function () {
          var _this6 = this;

          $(this).find('span').find('span').css({
            color: '#C6CACE'
          });
          $(this).hover(function () {
            $(_this6).find('span').find('span').css({
              color: '#313942'
            });
          }, function () {
            $(_this6).find('span').find('span').css({
              color: '#C6CACE'
            });
          });
        });
        var el = $("#pagination_pragma_btn_".concat(_this5.id));
        el.off("mouseenter mouseleave");
        el.find('span').find('span').css({
          color: '#313942'
        });
      };

      this._Data = data;
      this._id = page * 1 + 1;
      this._$ = OrgComing.__render(this._id);
      this.bind_action();
    }

    _createClass(OrgComing, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "Data",
      get: function get() {
        return this._Data;
      }
    }]);

    return OrgComing;
  }();

  OrgComing.__render = function (name) {
    var btm = "<button type=\"button\"  id=pagination_pragma_btn_".concat(name, " class=\"button-input    page_coming\" tabindex=\"\"  >\n                     <span class=\"button-input-inner \">\n                      <span class=\"button-input-inner__text\">").concat(name, "</span>\n                    </span>\n                </button>");
    return $(btm);
  };

  var Btn_arr_Comming = /*#__PURE__*/function () {
    function Btn_arr_Comming(arr) {
      _classCallCheck(this, Btn_arr_Comming);

      _initialiseProps2.call(this);

      Btn_arr_Comming.AllElem = arr;
      this._$ = Btn_arr_Comming.__render('coming');
      this._$placeBtn = this._$.find('.pragma_pagination-pages_pragma');
      this._$Prev = this._$.find('.pragma_pagination_prev');
      this._$Next = this._$.find('.pragma_pagination_next');
      this._$Input = this._$.find('#pragma_input_quantity_stock');
      OrgComing.LastBtn = arr.length;
      this._$AllBtn = Btn_arr_Comming.render_btn(arr);
      this.btnRender();
      this.bind_actions();
    }

    _createClass(Btn_arr_Comming, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Prev",
      get: function get() {
        return this._$Prev;
      }
    }, {
      key: "$Next",
      get: function get() {
        return this._$Next;
      }
    }, {
      key: "$Input",
      get: function get() {
        return this._$Input;
      }
    }, {
      key: "$AllBtn",
      get: function get() {
        return this._$AllBtn;
      }
    }, {
      key: "$placeBtn",
      get: function get() {
        return this._$placeBtn;
      }
    }]);

    return Btn_arr_Comming;
  }();

  Btn_arr_Comming.ellipsis = function () {
    return $("<div class=\"ellipsis_pragma_stock\"><span class=\"pagination-ellipsis\">...</span></div>");
  };

  Btn_arr_Comming.render_btn = function (array) {
    var arr = [];

    for (var i = 0; i < array.length; i++) {
      var button_page = new OrgComing(array[i].page, array[i].products);
      arr.push(button_page.$);
    }

    return arr;
  };

  Btn_arr_Comming.__render = function (_class_) {
    return $(templates.PaginationPragma.render({
      _class_: _class_
    }));
  };

  var _initialiseProps2 = function _initialiseProps2() {
    var _this8 = this;

    this.bind_actions = function () {
      _this8.$Input.on('change', function () {
        var value = _this8.$Input.val();

        var parse_data = Coming.AllComing;
        var org_cat = functions.organization_array(parse_data, value);
        var btn = new Btn_arr_Comming(org_cat);
        $('.stock_pragma-catalogs').html(btn.$);
        $('.page_coming').first().trigger('click');
        var el = $('#pragma_input_quantity_stock').parent();
        el.find('button').find('span').text(value);
        el.find('ul li').attr('class', 'control--select--list--item');
        el.find("ul li[data-value=\"".concat(value, "\"]")).attr('class', 'control--select--list--item  control--select--list--item-selected');
      });

      _this8.$Prev.on('click', function () {
        var all_btn = _this8.$AllBtn.length;
        var num = OrgComing.id_click;
        var id_next;

        if (num == 1) {
          id_next = all_btn;
        } else {
          id_next = num - 1;
        }

        var id_ = '#pagination_pragma_btn_' + id_next;
        $(id_).trigger('click');
      });

      _this8.$Next.on('click', function () {
        var all_btn = _this8.$AllBtn.length;
        var num = OrgComing.id_click;
        var id_next;

        if (num == all_btn) {
          id_next = 1;
        } else {
          id_next = num + 1;
        }

        var id_ = '#pagination_pragma_btn_' + id_next;
        $(id_).trigger('click');
      });

      _this8.$Prev.hover(function () {
        $('#path-prev_btn').css({
          'fill': '#4c8bf7'
        });
      }, function () {
        $('#path-prev_btn').css({
          'fill': 'black'
        });
      });

      _this8.$Next.hover(function () {
        $('#path-next_btn').css({
          'fill': '#4c8bf7'
        });
      }, function () {
        $('#path-next_btn').css({
          'fill': 'black'
        });
      });
    };

    this.btnRender = function () {
      _this8.$AllBtn.length > 6 ? _this8.btnMoreFive() : _this8.$placeBtn.html(_this8.$AllBtn);
    };

    this.btnMoreFive = function () {
      var len = _this8.$AllBtn.length;
      var ARR;

      var FirstFiveBtn = _this8.$AllBtn.slice(0, 5);

      var lastBtn = _this8.$AllBtn[len - 1];
      ARR = FirstFiveBtn;
      ARR.push(Btn_arr_Comming.ellipsis());
      ARR.push(lastBtn);

      _this8.$placeBtn.html(ARR);
    };

    this.btnClickFive = function () {
      var arsV = [];
      var First = _this8.$AllBtn[0];
      var BtnActive = OrgComing.id_click - 1;

      var elem = _this8.$AllBtn.slice(BtnActive - 2, BtnActive + 3);

      var len_btn = _this8.$AllBtn.length;

      switch (len_btn) {
        case 8:
          arsV.push(First);
          arsV.push(Btn_arr_Comming.ellipsis());
          arsV.push(elem);
          arsV.push(_this8.$AllBtn[len_btn - 1]);
          break;

        default:
          arsV.push(First);
          arsV.push(Btn_arr_Comming.ellipsis());
          arsV.push(elem);
          arsV.push(Btn_arr_Comming.ellipsis());
          arsV.push(_this8.$AllBtn[len_btn - 1]);
          break;
      }

      $('.pragma_pagination-pages_pragma').html(arsV.flat());
    };

    this.clickModeLast = function () {
      var arr = [];
      var len = _this8.$AllBtn.length;
      var First = _this8.$AllBtn[0];

      var elm = _this8.$AllBtn.slice(len - 5, len);

      arr.push(First);
      arr.push(Btn_arr_Comming.ellipsis());
      arr.push(elm);
      $('.pragma_pagination-pages_pragma').html(arr.flat());
    };

    this.clickModeFirst = function () {
      var len = _this8.$AllBtn.length;
      var ARR;

      var FirstFiveBtn = _this8.$AllBtn.slice(0, 5);

      var lastBtn = _this8.$AllBtn[len - 1];
      ARR = FirstFiveBtn;
      ARR.push(Btn_arr_Comming.ellipsis());
      ARR.push(lastBtn);
      $('.pragma_pagination-pages_pragma').html(ARR.flat());
    };

    this.clickModeFive = function (click) {
      var arr = [];
      var len = _this8.$AllBtn.length;
      var last = _this8.$AllBtn[len - 1];
      var First = _this8.$AllBtn[0];

      if (len - click <= 3) {
        var elm = _this8.$AllBtn.slice(len - 5, len);

        arr.push(First);
        arr.push(Btn_arr_Comming.ellipsis());
        arr.push(elm);
      } else if (click <= 4) {
        var _elm = _this8.$AllBtn.slice(0, 5);

        arr.push(_elm);
        arr.push(Btn_arr_Comming.ellipsis());
        arr.push(last);
      } else {
        var elem = _this8.$AllBtn.slice(click - 3, click + 2);

        arr.push(First);
        arr.push(Btn_arr_Comming.ellipsis());
        arr.push(elem);
        arr.push(Btn_arr_Comming.ellipsis());
        arr.push(last);
      }

      $('.pragma_pagination-pages_pragma').html(arr.flat());
    };
  };

  return {
    Coming: Coming,
    AddPosition: AddPosition,
    ComingBtnAdditional: ComingBtnAdditional
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 901:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(278), __webpack_require__(865), __webpack_require__(455)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, load, modal, functions) {
  var templates = load.TwigWrapper._templates;

  var ModalConsumptionElementTable = /*#__PURE__*/function () {
    function ModalConsumptionElementTable(data) {
      _classCallCheck(this, ModalConsumptionElementTable);

      this._no = ModalConsumptionElementTable.No++;
      this._id = data.product_id;
      this._article = data.article;
      this._title = data.title;
      this._quantity = functions.Settings.FractionNumbers(data.quantity);
      this._selling_price = functions.Settings.FractionNumbers(data.selling_price * 1);
      this._sum = functions.Settings.FractionNumbers(this._quantity * this._selling_price);
      this._$ = ModalConsumptionElementTable.__render(this._id, this._no, this._article, this._title, this._quantity, this._selling_price, this._sum);
      ModalConsumption.sum += this._sum * 1;
    }

    _createClass(ModalConsumptionElementTable, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return ModalConsumptionElementTable;
  }();

  ModalConsumptionElementTable.No = 1;

  ModalConsumptionElementTable.__render = function (id, no, article, title, quantity, selling_price, sum) {
    return $(ModalConsumptionElementTable.Twig.render({
      id: id,
      no: no,
      article: article,
      title: title,
      quantity: quantity,
      selling_price: selling_price,
      sum: sum
    }));
  };

  var ModalConsumption = /*#__PURE__*/function () {
    function ModalConsumption(data) {
      var _this = this;

      _classCallCheck(this, ModalConsumption);

      this.render_modal_table = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var lead_array, array_modal_el, i, el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lead_array = _this.item_array_leads();
                ModalConsumptionElementTable.Twig = templates.ModalConsumptionElementTable;
                array_modal_el = [];

                for (i in lead_array) {
                  if (lead_array.hasOwnProperty(i)) {
                    el = new ModalConsumptionElementTable(lead_array[i]);
                    array_modal_el.push(el.$);
                  }
                }

                _this.consumption_body.html(array_modal_el);

                _this.Total.text(functions.Settings.FractionNumbers(ModalConsumption.sum));

                _this.stat();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      this.stat = function () {
        var col = '';
        var title = '';
        Consumption.REQUEST_Status.find(function (item) {
          if (item.id === _this.status_id) {
            title = item.title;

            switch (item.id) {
              // case  1:
              // col = '#FFDD87';
              // break;
              case 2:
                col = '#FF9D87';
                break;

              case 3:
                col = '#BCFF87';
                break;
            }
          }
        });

        _this.status.css('background-color', col).text(title);

        _this.$.find('.modal_consumption-head_color').css('background-color', col);
      };

      this.item_array_leads = function () {
        var array_leads = [];
        var All_export = Consumption.AllObject;

        for (var i in All_export) {
          if (All_export.hasOwnProperty(i)) {
            switch (All_export[i].entity_id) {
              case _this.id_leads:
                array_leads.push({
                  product_id: All_export[i].product_id,
                  quantity: All_export[i].quantity,
                  selling_price: All_export[i].selling_price,
                  article: _this.get_article(All_export[i].product_id),
                  title: _this.get_name(All_export[i].product_id)
                });
            }
          }
        }

        return array_leads;
      };

      this.get_name = function (product_id) {
        var title = '';
        Consumption.AllProduct.find(function (item) {
          switch (item.id) {
            case product_id:
              title = item.title;
              break;
          }
        });
        return title;
      };

      this.get_article = function (product_id) {
        var article;
        Consumption.AllProduct.find(function (item) {
          switch (item.id) {
            case product_id:
              article = item.article;
              break;
          }
        });
        return article;
      };

      ModalConsumption.sum = 0;
      this._id = data.id;
      this._id_leads = data.id_leads;
      this._date = data.date;
      this._href_leads = data.href_leads;
      this._name_leads = data.name_leads;
      this._customer = data.name_contact;
      this._href_contact = data.href_contact;
      this._customer_tel = data.phone_number;
      this._status_id = data.status_id;
      this._$ = ModalConsumption.__render(this._id_leads, this._date, this._href_leads, this._name_leads, this._href_contact, this._customer, this._customer_tel);
      this._consumption_body = this._$.find('.m_table_consumption_body');
      this._Total = this._$.find('.footer-total-value');
      this._status = this._$.find('.consumption-status');
      this.render_modal_table().then(function (r) {
        return r;
      });
    }

    _createClass(ModalConsumption, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "id_leads",
      get: function get() {
        return this._id_leads;
      }
    }, {
      key: "Total",
      get: function get() {
        return this._Total;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "status_id",
      get: function get() {
        return this._status_id;
      }
    }, {
      key: "status",
      get: function get() {
        return this._status;
      }
    }, {
      key: "consumption_body",
      get: function get() {
        return this._consumption_body;
      }
    }]);

    return ModalConsumption;
  }();

  ModalConsumption.__render = function (id_leads, date, href_leads, name_leads, href_contact, customer, customer_tel) {
    return $(ModalConsumption.Twig.render({
      id_leads: id_leads,
      date: date,
      href_leads: href_leads,
      name_leads: name_leads,
      href_contact: href_contact,
      customer: customer,
      customer_tel: customer_tel
    }));
  };

  var ElTable = /*#__PURE__*/function () {
    function ElTable(data) {
      var _this2 = this;

      _classCallCheck(this, ElTable);

      this._no = 1;

      this.bind_action = function () {
        _this2.$.on('click', /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
            var Block, Loader, _ModalConsumption, obj, M_consumption;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    Block = $('.pragma_block');
                    Loader = $('.loader_pragma_id');

                    if (ElTable.active) {
                      _context2.next = 22;
                      break;
                    }

                    ElTable.active = true;
                    Loader.show();
                    Block.show();
                    _context2.t0 = e.target.nodeName;
                    _context2.next = _context2.t0 === 'A' ? 9 : _context2.t0 === 'a' ? 9 : 10;
                    break;

                  case 9:
                    return _context2.abrupt("break", 19);

                  case 10:
                    ModalConsumptionElementTable.No = 1;
                    ModalConsumption.Twig = templates.ModalConsumption;
                    _ModalConsumption = new ModalConsumption(_this2.data_());
                    obj = {
                      class_name: 'consumption-modal'
                    };
                    modal.ConfirmModal(obj);
                    M_consumption = $('.consumption-modal');
                    M_consumption.find('.modal-body__inner').append(_ModalConsumption.$);
                    Consumption.RecUnt(M_consumption, {
                      'border-radius': '10px',
                      'width': '900px'
                    });
                    return _context2.abrupt("break", 19);

                  case 19:
                    Loader.hide();
                    Block.hide();
                    ElTable.active = false;

                  case 22:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      };

      this.rend_status = function () {
        var title_status = '';
        var color = '';
        Consumption.REQUEST_Status.find(function (item) {
          if (item.id === _this2.status_id) {
            title_status = item.title;

            switch (item.id) {
              case 1:
                color = '#FFDD87';
                break;

              case 2:
                color = '#FF9D87';
                break;

              case 3:
                color = '#BCFF87';
                break;
            }
          }
        });

        _this2.$status.css('background-color', color);
      };

      this.data_ = function () {
        return {
          id_leads: _this2.leads,
          id: _this2.id,
          date: _this2.date,
          href_leads: _this2.href_leads,
          name_leads: _this2.name_leads,
          name_contact: _this2.name_contact,
          href_contact: _this2.href_contact,
          phone_number: _this2.phone_number,
          status_id: _this2.status_id
        };
      };

      this._no = Btn_arrConsupmtion.counter++;
      this._data = data;
      this._id = this._data.id;
      this._date = this._data.date;
      this._leads = this._data.leads;
      this._name_leads = this._data.name_leads;
      this._href_leads = this._data.href_leads;
      this._href_contact = this._data.href_contact;
      this._name_contact = this._data.name_contact;
      this._phone_number = this._data.phone_number;
      this._responsible = this._data.responsible;
      this._selling_price = functions.Settings.FractionNumbers(this._data.selling_price);
      this._status_id = this._data.status_id;
      this._$ = ElTable.__render(this._id, this._no, this._date, this._name_leads, this._href_leads, this._responsible, this._name_contact, this._href_contact, this._selling_price, this._status_id, functions.tbl());
      this._$status = this._$.find('.table_cons-status');
      this.rend_status();
      this.bind_action();
    }

    _createClass(ElTable, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "leads",
      get: function get() {
        return this._leads;
      }
    }, {
      key: "$status",
      get: function get() {
        return this._$status;
      }
    }, {
      key: "date",
      get: function get() {
        return this._date;
      }
    }, {
      key: "name_leads",
      get: function get() {
        return this._name_leads;
      }
    }, {
      key: "href_leads",
      get: function get() {
        return this._href_leads;
      }
    }, {
      key: "href_contact",
      get: function get() {
        return this._href_contact;
      }
    }, {
      key: "name_contact",
      get: function get() {
        return this._name_contact;
      }
    }, {
      key: "phone_number",
      get: function get() {
        return this._phone_number;
      }
    }, {
      key: "selling_price",
      get: function get() {
        return this._selling_price;
      }
    }, {
      key: "status_id",
      get: function get() {
        return this._status_id;
      }
    }]);

    return ElTable;
  }();

  ElTable.active = false;

  ElTable.__render = function (id, no, date, name_leads, href_leads, responsible, name_contact, href_contact, selling_price, status_id, tbl) {
    return $(ElTable.Twig.render({
      id: id,
      no: no,
      date: date,
      name_leads: name_leads,
      href_leads: href_leads,
      responsible: responsible,
      name_contact: name_contact,
      href_contact: href_contact,
      selling_price: selling_price,
      status_id: status_id,
      tbl: tbl
    }));
  };

  var Btn_arrConsupmtion = /*#__PURE__*/function () {
    function Btn_arrConsupmtion(arr) {
      _classCallCheck(this, Btn_arrConsupmtion);

      _initialiseProps.call(this);

      this._$ = Btn_arrConsupmtion.__render("consumption");

      this._$.find('.pragma_pagination-pages_pragma').html(Btn_arrConsupmtion.render_btn(arr));

      this._$Prev = this._$.find('.pragma_pagination_prev');
      this._$Next = this._$.find('.pragma_pagination_next');
      this._$Input = this._$.find('#pragma_input_quantity_stock');
      this.bind_actions();
    }

    _createClass(Btn_arrConsupmtion, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Prev",
      get: function get() {
        return this._$Prev;
      }
    }, {
      key: "$Next",
      get: function get() {
        return this._$Next;
      }
    }, {
      key: "$Input",
      get: function get() {
        return this._$Input;
      }
    }]);

    return Btn_arrConsupmtion;
  }();

  Btn_arrConsupmtion.render_btn = function (array) {
    var arr = [];

    for (var i = 0; i < array.length; i++) {
      var button_page = new OrgConsumption(array[i].page, array[i].products);
      arr.push(button_page.$);
    }

    return arr;
  };

  Btn_arrConsupmtion.__render = function (_class_) {
    return $(templates.PaginationPragma.render({
      _class_: _class_
    }));
  };

  var _initialiseProps = function _initialiseProps() {
    var _this5 = this;

    this.bind_actions = function () {
      _this5.$Prev.on('click', function () {
        var all_btn = $('.page_coming').length;
        var num = OrgConsumption.id_click;
        var id_next;

        if (num == 1) {
          id_next = all_btn;
        } else {
          id_next = num - 1;
        }

        var id_ = '#pagination_pragma_btn_' + id_next;
        $(id_).trigger('click');
      });

      _this5.$Next.on('click', function () {
        var all_btn = $('.page_coming').length;
        var num = OrgConsumption.id_click;
        var id_next;

        if (num == all_btn) {
          id_next = 1;
        } else {
          id_next = num + 1;
        }

        var id_ = '#pagination_pragma_btn_' + id_next;
        $(id_).trigger('click');
      });

      _this5.$Prev.hover(function () {
        $('#path-prev_btn').css({
          'fill': '#4c8bf7'
        });
      }, function () {
        $('#path-prev_btn').css({
          'fill': 'black'
        });
      });

      _this5.$Next.hover(function () {
        $('#path-next_btn').css({
          'fill': '#4c8bf7'
        });
      }, function () {
        $('#path-next_btn').css({
          'fill': 'black'
        });
      });

      $('body').on('keyup', function (evenTwo) {
        if (evenTwo.ctrlKey) {
          switch (evenTwo.keyCode) {
            case 39:
              _this5.$Next.trigger('click');

              break;

            case 37:
              _this5.$Prev.trigger('click');

              break;
          }
        }
      });

      _this5.$Input.on('change', function () {
        var value = _this5.$Input.val();

        var parse_data = Consumption.AllExport;
        var org_cat = functions.organization_array(parse_data, value);
        var btn = new Btn_arrConsupmtion(org_cat);
        $('.stock_pragma-catalogs').html(btn.$);
        $('.page_coming').first().trigger('click');
        var el = $('#pragma_input_quantity_stock').parent();
        el.find('button').find('span').text(value);
        el.find('ul li').attr('class', 'control--select--list--item');
        el.find("ul li[data-value=\"".concat(value, "\"]")).attr('class', 'control--select--list--item  control--select--list--item-selected');
      });
    };
  };

  var OrgConsumption = /*#__PURE__*/function () {
    function OrgConsumption(page, data) {
      var _this3 = this;

      _classCallCheck(this, OrgConsumption);

      this.bind_action = function () {
        _this3.$.on('click', function () {
          Btn_arrConsupmtion.counter = _this3.id * 25 - 24;
          var arr = _this3.Data;
          var arr_new = [];
          functions.setTbd(true);

          for (var index in arr) {
            if (arr.hasOwnProperty(index)) {
              var table = new ElTable(arr[index]);
              arr_new.push(table.$);
            }
          }

          _this3.active_btn();

          $('.consumption_table_body').html(arr_new);
        });
      };

      this.active_btn = function () {
        OrgConsumption.id_click = _this3.id;
        $('.page_coming').each(function () {
          var _this4 = this;

          $(this).find('span').find('span').css({
            color: '#c6cace'
          });
          $(this).hover(function () {
            $(_this4).find('span').find('span').css({
              color: '#313942'
            });
          }, function () {
            $(_this4).find('span').find('span').css({
              color: '#c6cace'
            });
          });
        });
        var el = $("#pagination_pragma_btn_".concat(_this3.id));
        el.off("mouseenter mouseleave");
        el.find('span').find('span').css({
          color: '#313942'
        });
      };

      this._id = page * 1 + 1;
      this._Data = data;
      this._$ = OrgConsumption.__render(this._id);
      this.bind_action();
    }

    _createClass(OrgConsumption, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "Data",
      get: function get() {
        return this._Data;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }]);

    return OrgConsumption;
  }();

  OrgConsumption.__render = function (name) {
    var btm = "<button type=\"button\" id=pagination_pragma_btn_".concat(name, "  class=\"button-input    page_coming\" tabindex=\"\"  >\n                     <span class=\"button-input-inner \">\n                      <span class=\"button-input-inner__text\">").concat(name, "</span>\n                    </span>\n                </button>");
    return $(btm);
  };

  var Consumption = /*#__PURE__*/function () {
    function Consumption(twig) {
      _classCallCheck(this, Consumption);

      _initialiseProps2.call(this);

      this._$ = Consumption.__render(twig);
      this._consumption_table_body = this._$.find('.consumption_table_body');
      this._$Table_date = this._$.find('.consumption_table-date');
      this._$Table_lead = this._$.find('.consumption_table-lead');
      this._$Table_contact = this._$.find('.consumption_table-contact');
      this._$Table_price = this._$.find('.consumption_table-price');
      this._$InputCalendar = this._$.find('#_search_date');
      this.bind_action();
    }

    _createClass(Consumption, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "consumption_table_body",
      get: function get() {
        return this._consumption_table_body;
      }
    }, {
      key: "$InputCalendar",
      get: function get() {
        return this._$InputCalendar;
      }
    }, {
      key: "Table_date",
      get: function get() {
        return this._$Table_date;
      }
    }, {
      key: "Table_lead",
      get: function get() {
        return this._$Table_lead;
      }
    }, {
      key: "Table_contact",
      get: function get() {
        return this._$Table_contact;
      }
    }, {
      key: "Table_price",
      get: function get() {
        return this._$Table_price;
      }
    }]);

    return Consumption;
  }();

  Consumption.AllExport = [];
  Consumption.AllProduct = [];
  Consumption.AllObject = [];
  Consumption.REQUEST_leads = [];
  Consumption.REQUEST_Contacts = [];
  Consumption.REQUEST_Status = [];
  Consumption.FlagSort = false;
  Consumption.active = false;

  Consumption.RecUnt = function ($OBJ, data) {
    $OBJ.children().children().css(data);
    $OBJ.find('.modal-body').trigger('modal:loaded').trigger('modal:centrify');
  };

  Consumption.__render = function (twig) {
    return $(twig.render());
  };

  var _initialiseProps2 = function _initialiseProps2() {
    var _this6 = this;

    this.today_data = function () {
      var date = new Date();
      var DD = date.getDate();
      var MM = date.getMonth() + 1;
      var YYYY = date.getFullYear();
      DD = DD < 10 ? '0' + DD : DD;
      MM = MM < 10 ? '0' + MM : MM;
      return DD + '.' + MM + '.' + YYYY;
    };

    this.bind_action = function () {
      _this6.$InputCalendar.on('focusout', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var val;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ElTable.no = 1;
                val = _this6.$InputCalendar.val();
                _context3.t0 = val.length;
                _context3.next = _context3.t0 === 0 ? 5 : _context3.t0 === 23 ? 8 : _context3.t0 === 20 ? 10 : _context3.t0 === 13 ? 12 : 14;
                break;

              case 5:
                _context3.next = 7;
                return _this6.RENDER_TABLE();

              case 7:
                return _context3.abrupt("break", 14);

              case 8:
                _this6.search_render(val, 0);

                return _context3.abrupt("break", 14);

              case 10:
                _this6.search_render(val, 1);

                return _context3.abrupt("break", 14);

              case 12:
                _this6.search_render(val, 2);

                return _context3.abrupt("break", 14);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));

      _this6.Table_date.on('click', function () {
        _this6.SORT(_this6.Table_date, 'date');
      });

      _this6.Table_lead.on('click', function () {
        _this6.SORT(_this6.Table_lead, 'name_leads');
      });

      _this6.Table_contact.on('click', function () {
        _this6.SORT(_this6.Table_contact, 'name_contact');
      });

      _this6.Table_price.on('click', function () {
        _this6.SORT(_this6.Table_price, 'selling_price');
      });

      _this6.RENDER_TABLE().then(function (r) {
        return r;
      });
    };

    this.SORT = function ($OBJ, NAME_SORT) {
      _this6.delete_arrow();

      _this6.color($OBJ);

      ElTable.no = 1;
      var array_id_for_SORT = [];
      $('.ElTableConsumption-table_cons').each(function () {
        var _id = $(this).attr('id');

        array_id_for_SORT.push(_id);
      });
      var arrow;
      var AllExport = Consumption.AllExport;
      var New_array = [];

      var _loop = function _loop(product) {
        var item = AllExport.find(function (item) {
          return item.id == array_id_for_SORT[product];
        });
        New_array.push(item);
      };

      for (var product in array_id_for_SORT) {
        _loop(product);
      }

      switch (NAME_SORT) {
        case 'date':
          New_array = _this6.SORT_DATE(New_array);
          break;

        default:
          New_array.sort(function (a, b) {
            var _a = a[NAME_SORT];
            var _b = b[NAME_SORT];

            if (NAME_SORT === 'selling_price') {
              _a *= 1;
              _b *= 1;
            }

            if (_a > _b) return 1;
            if (_a < _b) return -1;
            return 0;
          });
          break;
      }

      switch (Consumption.FlagSort) {
        case false:
          Consumption.FlagSort = true;
          var id_down = "arrow_down_consumption_pragma";
          arrow = Consumption.ArrowDown.render({
            id_down: id_down
          });
          break;

        case true:
          New_array = New_array.reverse();
          Consumption.FlagSort = false;
          var id_up = "arrow_down_consumption_pragma";
          arrow = Consumption.ArrowUp.render({
            id_up: id_up
          });
          break;
      }

      Btn_arrConsupmtion.counter = OrgConsumption.id_click * 25 - 24;
      $OBJ.append(arrow);
      var sort_array = [];
      functions.setTbd(true);

      for (var i in New_array) {
        var el = new ElTable(New_array[i]);
        sort_array.push(el.$);
      }

      _this6.consumption_table_body.html(sort_array);
    };

    this.color = function ($OBJ) {
      var color = "rgba(133,145,165,.5)";
      $('.consumption_table-date-label').css({
        color: color
      });
      $('.consumption_table-price-label').css({
        color: color
      });
      $('.consumption_table-responsible-label').css({
        color: color
      });
      $('.consumption_table-lead-label').css({
        color: color
      });
      $('.consumption_table-contact-label').css({
        color: color
      });
      $OBJ.find('div').css({
        color: "#6e747a"
      });
    };

    this.SORT_DATE = function (employees) {
      var arr = employees.sort(function (a, b) {
        var dateA = rend_data(a.date);
        var dateB = rend_data(b.date);
        return dateA - dateB; //сортировка по возрастающей дате
      });

      function rend_data(data) {
        var ar_date = data.split('.');
        return new Date(ar_date[2], ar_date[1], ar_date[0]);
      }

      return arr;
    };

    this.delete_arrow = function () {
      $('.pragma_arrow_up').remove();
      $('.pragma_arrow_down').remove();
    };

    this.search_render = function (data, flag) {
      var new_data;
      var one_date;
      var two_date;

      switch (flag) {
        case 0:
          new_data = data.split('-');
          one_date = new_data[0].trim();
          two_date = new_data[1].trim();
          break;

        case 1:
          two_date = _this6.today_data();
          one_date = _this6.today_data();
          break;

        case 2:
          two_date = data;
          one_date = data;
          break;
      }

      if (one_date.length === 10) {
        var ARRAY_DATE = _this6.create_array_date(one_date, two_date);

        var ARRAY_WE = Consumption.AllExport;
        var INCLUDES_ARRAY = [];
        functions.setTbd(true);

        for (var K in ARRAY_WE) {
          if (ARRAY_WE.hasOwnProperty(K)) {
            if (ARRAY_DATE.includes(ARRAY_WE[K].date)) {
              var obg = new ElTable(ARRAY_WE[K]);
              INCLUDES_ARRAY.push(obg.$);
            }
          }
        }

        _this6.consumption_table_body.html(INCLUDES_ARRAY);
      }

      _this6.Table_date.trigger('click');
    };

    this.create_array_date = function (start, finish) {
      if (start.length === 10 && finish.length === 10) {
        var _start = start;
        var _finish = finish;
        var ARRAY_DATE = [];

        while (_start != _finish) {
          var data_one = _start.split('.');

          var DAY_data_one = data_one[0].trim() * 1;
          var MONTH_data_one = data_one[1].trim() * 1 - 1;
          var YEAR_data_one = data_one[2].trim() * 1;
          var start_ = new Date(YEAR_data_one, MONTH_data_one, DAY_data_one);
          var DAY = start_.getDate();
          var MONTH = start_.getMonth();
          var YEAR = start_.getFullYear();
          DAY = DAY < 10 ? '0' + DAY : DAY;
          MONTH = MONTH + 1;
          MONTH = MONTH < 10 ? '0' + MONTH : MONTH;
          var DATA = DAY + '.' + MONTH + '.' + YEAR;
          ARRAY_DATE.push(DATA);
          DAY = DAY * 1 + 1;
          DAY = DAY < 10 ? '0' + DAY : DAY;
          _start = DAY + '.' + MONTH + '.' + YEAR;
        }

        ARRAY_DATE.push(_start);
        return ARRAY_DATE;
      }

      return 0;
    };

    this.RStatus = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var data_res, UEST_Status;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return functions.req_setting({
                flag: 'get_all_settings'
              });

            case 2:
              data_res = _context4.sent;
              UEST_Status = JSON.parse(data_res);
              Consumption.REQUEST_Status = UEST_Status.statuses;

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    this.RENDER_TABLE = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var Block, Loader, org, render_btn;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              Block = $('.pragma_block');
              Loader = $('.loader_pragma_id');

              if (Consumption.active) {
                _context5.next = 22;
                break;
              }

              Consumption.active = true;
              Block.show();
              Loader.show();
              _context5.next = 8;
              return _this6.get_data();

            case 8:
              _context5.next = 10;
              return _this6.RStatus();

            case 10:
              ElTable.Twig = templates.ElTableConsumption;
              Consumption.ArrowDown = templates.ArrowDown;
              Consumption.ArrowUp = templates.ArrowUp;
              _context5.next = 15;
              return functions.organization_array(Consumption.AllExport, 25);

            case 15:
              org = _context5.sent;
              render_btn = new Btn_arrConsupmtion(org);
              $('.stock_pragma-catalogs').html(render_btn.$);
              $('.page_coming:first').trigger('click');
              Block.hide();
              Loader.hide();
              Consumption.active = false;

            case 22:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    this.data_calculate = function (data) {
      var start = new Date();
      var end = new Date(data);
      var elapsed = start.getTime() - end.getTime();
      return elapsed / 86400000;
    };

    this.nearest_date = function (data_first, data_second) {
      var one = _this6.data_calculate(data_first);

      var two = _this6.data_calculate(data_second);

      return one < two ? data_first : data_second;
    };

    this.searchLeads = function (id) {
      return "https://".concat(window.location.host, "/leads/detail/").concat(id, "/?tab_id=pmstorage");
    };

    this.href_contacts = function (id) {
      return "https://".concat(window.location.host, "/contacts/detail/").concat(id);
    };

    this.name_leads = function (id_leads) {
      var name = '';
      Consumption.REQUEST_leads.find(function (item) {
        switch (item.id) {
          case id_leads:
            name = item.name;
            break;
        }
      });
      return name;
    };

    this.responsible_leads = function (id_leads) {
      var id_resp = '';
      var name_resp = '';
      Consumption.REQUEST_leads.find(function (item) {
        switch (item.id) {
          case id_leads:
            id_resp = item.responsible_user_id;
            break;
        }
      });
      var users_ = Consumption.AllUsers;

      for (var Key in users_) {
        if (users_[Key].id === id_resp) {
          name_resp = users_[Key].name;
        }
      }

      return name_resp;
    };

    this.search_number = function (arr) {
      var tel = 0;

      for (var i in arr) {
        if (arr.hasOwnProperty(i)) {
          tel = arr[i].values[0].value;
        }
      }

      return tel.length > 10 && tel.length < 15 ? tel : 'Нет номера';
    };

    this.name_contacts = function (id) {
      var name = 0;
      var tel = '';
      Consumption.REQUEST_Contacts.find(function (item) {
        var _item$_embedded$leads;

        var variable = item._embedded.leads[0];

        if (typeof variable != "undefined" && variable !== null) {
          switch ((_item$_embedded$leads = item._embedded.leads[0]) === null || _item$_embedded$leads === void 0 ? void 0 : _item$_embedded$leads.id) {
            case id:
              name = item.name;
              id = item.id;
              tel = _this6.search_number(item.custom_fields_values);
              break;
          }
        }
      });

      if (name === 0 || name.leads === 0) {
        return {
          name: 0,
          tel: 0,
          id: id
        };
      }

      return {
        name: name,
        tel: tel,
        id: id
      };
    };

    this.unique = function (arr) {
      var result = [];

      var _iterator = _createForOfIteratorHelper(arr),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var str = _step.value;

          if (!result.includes(str)) {
            result.push(str);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    };

    this.request_leads_data = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(ARRAY, unique_arr) {
        var arr, Key;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                arr = [];

                for (Key in ARRAY) {
                  if (ARRAY[Key]) {
                    arr.push(ARRAY[Key]);
                  }
                }

                _context6.next = 4;
                return $.ajax({
                  url: '/api/v4/leads',
                  method: 'GET',
                  data: {
                    id: arr,
                    "with": 'contacts',
                    limit: 250,
                    filter: {
                      id: unique_arr
                    }
                  }
                });

              case 4:
                return _context6.abrupt("return", _context6.sent);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x2, _x3) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.many_leads_get_data = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(ARRAY, unique_arr) {
        var ARR, arr, trace, i, _i, art, _arr;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                ARR = [];
                arr = [];
                trace = true;
                _context7.t0 = regeneratorRuntime.keys(ARRAY);

              case 4:
                if ((_context7.t1 = _context7.t0()).done) {
                  _context7.next = 27;
                  break;
                }

                i = _context7.t1.value;
                _i = i * 1;

                if (!(_i === 0)) {
                  _context7.next = 11;
                  break;
                }

                arr.push(ARRAY[i]);
                _context7.next = 25;
                break;

              case 11:
                _context7.t2 = _i % 250;
                _context7.next = _context7.t2 === 0 ? 14 : 22;
                break;

              case 14:
                if (!(arr.length > 0)) {
                  _context7.next = 20;
                  break;
                }

                _context7.next = 17;
                return _this6.request_leads_data(arr, unique_arr);

              case 17:
                art = _context7.sent;
                trace = false;
                ARR.push(art._embedded.leads);

              case 20:
                arr = [];
                return _context7.abrupt("break", 25);

              case 22:
                arr.push(ARRAY[i]);
                trace = true;
                return _context7.abrupt("break", 25);

              case 25:
                _context7.next = 4;
                break;

              case 27:
                if (!trace) {
                  _context7.next = 32;
                  break;
                }

                _context7.next = 30;
                return _this6.request_leads_data(_arr, unique_arr);

              case 30:
                _arr = _context7.sent;
                ARR.push(_arr._embedded.leads);

              case 32:
                return _context7.abrupt("return", ARR);

              case 33:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x4, _x5) {
        return _ref7.apply(this, arguments);
      };
    }();

    this.request_leads = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(array_id_leads) {
        var new_arr, data, Key, unique_arr, ARRAY;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                new_arr = [];
                data = Consumption.AllObject;

                for (Key in data) {
                  if (data.hasOwnProperty(Key)) {
                    new_arr.push(data[Key].entity_id);
                  }
                }

                unique_arr = _this6.unique(new_arr);
                _context8.next = 6;
                return _this6.many_leads_get_data(array_id_leads, unique_arr);

              case 6:
                ARRAY = _context8.sent;
                Consumption.REQUEST_leads = ARRAY.flat();

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x6) {
        return _ref8.apply(this, arguments);
      };
    }();

    this.create_array = function (array) {
      var arr = [];

      for (var I in array) {
        if (array.hasOwnProperty(I)) {
          arr.push(array[I].id);
        }
      }

      return arr;
    };

    this.render_numbers = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      var data, new_array, i, array_contacts, let_arr, I, arr_contacts, req_data;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              data = Consumption.REQUEST_leads;
              new_array = [];
              _context9.t0 = regeneratorRuntime.keys(data);

            case 3:
              if ((_context9.t1 = _context9.t0()).done) {
                _context9.next = 15;
                break;
              }

              i = _context9.t1.value;

              if (!data.hasOwnProperty(i)) {
                _context9.next = 13;
                break;
              }

              array_contacts = data[i]._embedded.contacts;
              _context9.t2 = array_contacts.length;
              _context9.next = _context9.t2 === 0 ? 10 : 12;
              break;

            case 10:
              new_array.push({
                id: data[i].id,
                data: 0
              });
              return _context9.abrupt("break", 13);

            case 12:
              new_array.push({
                id: data[i].id,
                data: _this6.create_array(array_contacts)
              });

            case 13:
              _context9.next = 3;
              break;

            case 15:
              let_arr = [];

              for (I in new_array) {
                if (new_array.hasOwnProperty(I)) {
                  if (new_array[I].data !== 0) {
                    let_arr.push(new_array[I].data);
                  }
                }
              }

              arr_contacts = let_arr.flat();
              _context9.next = 20;
              return $.ajax({
                url: '/api/v4/contacts',
                method: 'GET',
                data: {
                  "with": 'leads',
                  filter: {
                    id: arr_contacts
                  }
                }
              });

            case 20:
              req_data = _context9.sent;
              Consumption.REQUEST_Contacts = req_data._embedded.contacts;

            case 22:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    this.rendera_date = function (date) {
      var data = date.split(' ')[0].split('-');
      return data[2] + '.' + data[1] + '.' + data[0];
    };

    this.get_data = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
      var us, All_export, array, array_data, ARRAY_ID_LEADS, All_Export, $Key, _loop2, index, NEW_ARR, i, All_product;

      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return $.ajax({
                url: '/api/v4/users',
                method: 'GET'
              });

            case 2:
              us = _context10.sent;
              Consumption.AllUsers = us._embedded.users;
              ElTable.no = 1;
              _context10.next = 7;
              return functions.request({
                flag: 'get_all_export',
                stock_id: Consumption.ActiveStock
              });

            case 7:
              All_export = _context10.sent;
              array = [];
              array_data = [];
              ARRAY_ID_LEADS = [];
              All_Export = JSON.parse(All_export);

              for ($Key in All_Export) {
                if (All_Export.hasOwnProperty($Key)) {
                  ARRAY_ID_LEADS.push(All_Export[$Key].entity_id);
                  All_Export[$Key].date_create = _this6.rendera_date(All_Export[$Key].date_create);
                }
              }

              Consumption.AllObject = All_Export;
              _context10.next = 16;
              return _this6.request_leads(ARRAY_ID_LEADS);

            case 16:
              _context10.next = 18;
              return _this6.render_numbers();

            case 18:
              _loop2 = function _loop2(index) {
                if (All_Export.hasOwnProperty(index)) {
                  var data_contact = _this6.name_contacts(All_Export[index].entity_id);

                  switch (array.includes(All_Export[index].entity_id)) {
                    case false:
                      array.push(All_Export[index].entity_id);
                      array_data.push({
                        date: All_Export[index].date_create,
                        leads: All_Export[index].entity_id,
                        id: All_Export[index].pragma_entity_id,
                        selling_price: All_Export[index].selling_price * 1 * (All_Export[index].quantity * 1),
                        status_id: All_Export[index].status_id,
                        name_leads: _this6.name_leads(All_Export[index].entity_id),
                        href_leads: _this6.searchLeads(All_Export[index].entity_id),
                        name_contact: data_contact.name === 0 || data_contact.name.length === 0 ? 'Нет Имени' : data_contact.name,
                        href_contact: _this6.href_contacts(data_contact.id),
                        responsible: _this6.responsible_leads(All_Export[index].entity_id),
                        phone_number: data_contact.tel === 0 ? 'Нет телефона' : data_contact.tel
                      });
                      break;

                    case true:
                      array_data.find(function (item) {
                        if (item.leads === All_Export[index].entity_id) {
                          item.selling_price = item.selling_price + All_Export[index].selling_price * 1 * (All_Export[index].quantity * 1);
                          item.date = _this6.nearest_date(item.date, All_Export[index].date_create);
                        }
                      });
                  }
                }
              };

              for (index in All_Export) {
                _loop2(index);
              }

              NEW_ARR = [];

              for (i in array_data) {
                if (array_data.hasOwnProperty(i)) {
                  if (array_data[i].id) {
                    NEW_ARR.push(array_data[i]);
                  }
                }
              }

              Consumption.AllExport = NEW_ARR;
              _context10.next = 25;
              return functions.request({
                flag: 'products_get'
              });

            case 25:
              All_product = _context10.sent;
              Consumption.AllProduct = JSON.parse(All_product);

            case 27:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));
  };

  return Consumption;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 730:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
  var Deficit = /*#__PURE__*/function () {
    function Deficit(twig) {
      _classCallCheck(this, Deficit);

      _initialiseProps.call(this);

      this._$ = Deficit.__render(twig);
      this.bind_action();
    }

    _createClass(Deficit, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return Deficit;
  }();

  Deficit.AllDeficit = [];

  Deficit.__render = function (twig) {
    return $(twig.render());
  };

  var _initialiseProps = function _initialiseProps() {
    this.bind_action = function () {};
  };

  return Deficit;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 0:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(865), __webpack_require__(278), __webpack_require__(455), __webpack_require__(957), __webpack_require__(901)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, modal, load, functions, Catalog, Consumption) {
  var templates = load.TwigWrapper._templates; // class AllStocks {
  //     _$
  //     _$BtnCH
  //
  //     constructor() {
  //         this._$ = AllStocks.__render()
  //         this._$BtnCH = this._$.find('.stock_el_change_btn')
  //         this._account_id = AMOCRM.constant('account').id
  //         this.bind_action()
  //     }
  //
  //     bind_action = () => {
  //
  //         this.$.on('click', async () => {
  //
  //
  //         })
  //     }
  //
  //
  //     get $() {
  //         return this._$
  //     }
  //
  //
  //
  //     static __render = () => {
  //         const id = 'All_Stocks'
  //         const name = 'Все склады'
  //
  //         return $(itemStock.Twig.render({id, name}))
  //     }
  //
  // }

  var itemStock = /*#__PURE__*/function () {
    function itemStock(id, name, address) {
      _classCallCheck(this, itemStock);

      _initialiseProps.call(this);

      this._id = id;
      this._name = name;
      this._address = address;
      this._account_id = AMOCRM.constant('account').id;
      this._$ = itemStock.__render(this._id, name, address);
      this._$Btn = this._$.find('.stock_el-class');
      this._$BtnCH = this._$.find('.stock_el_change_btn');
      this.bind_action();
    }

    _createClass(itemStock, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Btn",
      get: function get() {
        return this._$Btn;
      }
    }, {
      key: "$BtnCH",
      get: function get() {
        return this._$BtnCH;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "name",
      get: function get() {
        return this._name;
      }
    }, {
      key: "address",
      get: function get() {
        return this._address;
      }
    }]);

    return itemStock;
  }();

  itemStock.__render = function (id, name, address) {
    return $(itemStock.Twig.render({
      id: id,
      name: name,
      address: address
    }));
  };

  var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.bind_action = function () {
      _this3.$Btn.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                itemStock.Active_Sore_id = _this3.id;
                Catalog.Catalog.Store_id = _this3.id;
                Consumption.ActiveStock = _this3.id;
                functions.Settings.ActiveStock = _this3.id;
                _context4.next = 6;
                return _this3._R_change_select_stock();

              case 6:
                _this3.active();

                _this3.$BtnCH.show();

                $('.header_products').trigger('click');

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })));

      _this3.$BtnCH.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _ModalCreateStock, obj;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                ModalCreateStock.Twig = templates.ModalCreateStock;
                _ModalCreateStock = new ModalCreateStock(true, {
                  id: _this3.id,
                  btncancel: "Удалить",
                  btnsave: "Сохранить"
                });
                ModalCreateStock.ActiveID = _this3.id;
                obj = {
                  title: 'Изменить склад',
                  class_name: 'change_stock-modal'
                };
                modal.ConfirmModal(obj);
                $('.change_stock-modal').find('.modal-body__inner').append(_ModalCreateStock.$);

                _this3.fill();

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      })));
    };

    this._R_change_select_stock = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return functions.req_setting({
                stock_id: _this3.id,
                flag: 'change_active_stock'
              });

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    this.fill = function () {
      $('#stock_name').val(_this3.name);
      $('#stock_address').val(_this3.address);
    };

    this.active = function () {
      $('.stock_el-class').css('color', 'black');

      _this3.$Btn.css('color', '#0582E4');

      $('.stock_el_change_btn').hide();
    };

    this.off_btn = function () {
      _this3.$BtnCH.hide();

      _this3.$Btn.css('color', 'black');
    };
  };

  var ModalCreateStock = /*#__PURE__*/function () {
    function ModalCreateStock(flag, data) {
      _classCallCheck(this, ModalCreateStock);

      _initialiseProps2.call(this);

      this._id = data.id;
      this._$ = ModalCreateStock.__render(data);
      this._flag = flag;
      this._$BtnCancel = this._$.find('.btn_ooter_cancel');
      this._$BtnSave = this._$.find('.btn_ooter_save');
      this._$InputName = this._$.find('#stock_name');
      this._$InputAddress = this._$.find('#stock_address');
      this.bind_action();
    }

    _createClass(ModalCreateStock, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$InputName",
      get: function get() {
        return this._$InputName;
      }
    }, {
      key: "$InputAddress",
      get: function get() {
        return this._$InputAddress;
      }
    }, {
      key: "flag",
      get: function get() {
        return this._flag;
      }
    }, {
      key: "$BtnSave",
      get: function get() {
        return this._$BtnSave;
      }
    }, {
      key: "$BtnCancel",
      get: function get() {
        return this._$BtnCancel;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id;
      }
    }]);

    return ModalCreateStock;
  }();

  ModalCreateStock.__render = function (data) {
    return $(ModalCreateStock.Twig.render({
      data: data
    }));
  };

  var _initialiseProps2 = function _initialiseProps2() {
    var _this4 = this;

    this.bind_action = function () {
      _this4.$BtnCancel.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var obj;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.t0 = _this4.flag;
                _context8.next = _context8.t0 === true ? 3 : _context8.t0 === false ? 6 : 8;
                break;

              case 3:
                obj = {
                  title: "Удалить склад?",
                  class_name: 'delete_stock-modal',
                  accept_text: 'Удалить',
                  cancel_text: 'Отмена',
                  accept_func: function () {
                    var _accept_func = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                      var id;
                      return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                          switch (_context7.prev = _context7.next) {
                            case 0:
                              _context7.next = 2;
                              return functions.request({
                                flag: 'delete_stock',
                                id_stock: ModalCreateStock.ActiveID
                              });

                            case 2:
                              $('.modal-body__close').trigger('click');
                              id = 'el_stock_' + _this4.id;
                              $("#".concat(id)).remove();

                            case 5:
                            case "end":
                              return _context7.stop();
                          }
                        }
                      }, _callee7);
                    }));

                    function accept_func() {
                      return _accept_func.apply(this, arguments);
                    }

                    return accept_func;
                  }()
                };
                modal.ConfirmModal(obj);
                return _context8.abrupt("break", 8);

              case 6:
                $('.modal-body__close').trigger('click');
                return _context8.abrupt("break", 8);

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      })));

      _this4.$BtnSave.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var X, data_new, new_chan_stock_el, id, create_stock, parse_data, new_stock_el;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                X = $('.modal-body__close');
                _context9.t0 = _this4.flag;
                _context9.next = _context9.t0 === true ? 4 : _context9.t0 === false ? 12 : 21;
                break;

              case 4:
                data_new = {
                  store_id: ModalCreateStock.ActiveID,
                  address: _this4.$InputAddress.val(),
                  title: _this4.$InputName.val()
                };
                _context9.next = 7;
                return functions.request({
                  flag: 'change_stock',
                  data: data_new
                });

              case 7:
                new_chan_stock_el = new itemStock(data_new.store_id, data_new.title, data_new.address);
                id = 'el_stock_' + _this4.id;
                $("#".concat(id)).replaceWith(new_chan_stock_el.$);
                X.trigger('click');
                return _context9.abrupt("break", 21);

              case 12:
                _context9.next = 14;
                return functions.request({
                  flag: 'create_stock',
                  data: _this4.give_data_input()
                });

              case 14:
                create_stock = _context9.sent;
                parse_data = JSON.parse(create_stock);
                new_stock_el = new itemStock(parse_data.store_id, parse_data.title, parse_data.address);
                $('.add_stock_pragma').before(new_stock_el.$);
                new_stock_el.off_btn();
                X.trigger('click');
                return _context9.abrupt("break", 21);

              case 21:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      })));
    };

    this.give_data_input = function () {
      return {
        address: _this4.$InputAddress.val(),
        title: _this4.$InputName.val()
      };
    };
  };

  var AddStock = /*#__PURE__*/function () {
    function AddStock() {
      var _this = this;

      _classCallCheck(this, AddStock);

      this.bind_actions = function () {
        _this.$.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _ModalCreateStock, obj, $create_stock_modal;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ModalCreateStock.Twig = templates.ModalCreateStock;
                  _ModalCreateStock = new ModalCreateStock(false, {
                    btncancel: "Отмена",
                    btnsave: "Сохранить"
                  });
                  obj = {
                    title: "Добавить Склад",
                    class_name: 'create_stock-modal'
                  };
                  modal.ConfirmModal(obj);
                  $create_stock_modal = $('.create_stock-modal');
                  $create_stock_modal.find('.modal-body__inner').append(_ModalCreateStock.$);
                  $create_stock_modal.find('.modal-body').css('width', '500px');

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      };

      this._$ = AddStock.__render();
      this._$BTNADDStock = this._$.find('.footer_add_stocks');
      this.bind_actions();
    }

    _createClass(AddStock, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return AddStock;
  }();

  AddStock.__render = function () {
    return $(AddStock.Twig.render());
  };

  var LeftPage = /*#__PURE__*/function () {
    function LeftPage() {
      var _this2 = this;

      _classCallCheck(this, LeftPage);

      this.bind_actions = function () {
        _this2.$Btn_All_Stock.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  itemStock.Active_Sore_id = -1;
                  Catalog.Catalog.Store_id = -1;
                  Consumption.ActiveStock = -1;
                  functions.Settings.ActiveStock = -1;
                  _context2.next = 6;
                  return functions.req_setting({
                    stock_id: -1,
                    flag: 'change_active_stock'
                  });

                case 6:
                  _this2.active();

                  $('.header_products').trigger('click');

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })));
      };

      this.render_Stock = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res, parse_res, arr, Key, el, ADDStock, $__id;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return templates.AddStock;

              case 2:
                AddStock.Twig = _context3.sent;
                _context3.next = 5;
                return functions.request({
                  flag: 'get_stock'
                });

              case 5:
                res = _context3.sent;
                parse_res = JSON.parse(res);
                arr = [];
                LeftPage.ALlStock = parse_res;

                for (Key in parse_res) {
                  if (parse_res.hasOwnProperty(Key)) {
                    el = new itemStock(parse_res[Key].id, parse_res[Key].title, parse_res[Key].address);
                    arr.push(el.$);
                  }
                }

                ADDStock = new AddStock();
                arr.push(ADDStock.$);
                $('.place_FOR_stock').html(arr);
                $__id = '#id_stock_' + functions.Settings.ActiveStock;
                $($__id).trigger('click');

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      this.active = function () {
        $('.stock_el-class').css('color', 'black');

        _this2.$.css('color', '#0582E4');

        $('.stock_el_change_btn').hide();
      };

      this._$ = LeftPage.__render();
      this._$Btn_All_Stock = this._$.find('.footer_stock_btn_all_stock');
      this.render_Stock().then(function (r) {
        return r;
      });
      this.bind_actions();
    }

    _createClass(LeftPage, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Btn_All_Stock",
      get: function get() {
        return this._$Btn_All_Stock;
      }
    }]);

    return LeftPage;
  }();

  LeftPage.ALlStock = [];

  LeftPage.__render = function () {
    return $(LeftPage.Twig.render());
  };

  return {
    LeftPage: LeftPage,
    itemStock: itemStock // AllStocks: AllStocks,

  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 324:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(278), __webpack_require__(865), __webpack_require__(594), __webpack_require__(435)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, load, modal, ModalExport, ModalImport) {
  var templates = load.TwigWrapper._templates;

  var Drops = /*#__PURE__*/function () {
    function Drops() {
      var _this = this;

      _classCallCheck(this, Drops);

      this.bind_action = function () {
        _this.$Drops.on('click', function () {
          $('.right_pragma_drops_four_pol').show();
          $('.right_pragma_drops_four').show();
        });

        _this.$DropsIsCLOSE.on('click', function () {
          _this.$DropsIs.hide();

          _this.$DropsIsCLOSE.hide();
        });

        _this.$DropExport.on('click', function () {
          var _ModalExport_ = new ModalExport();

          _this.InsertModal({
            class_name: 'stock_export-modal'
          }, _ModalExport_.$, {});
        });

        _this.$DropImport.on('click', function () {
          var _ModalImport_ = new ModalImport();

          _this.InsertModal({
            class_name: 'stock_import-modal'
          }, _ModalImport_.$, {
            width: "765px"
          });
        });

        _this.$DropsIs.on('click', function () {
          _this.$DropsIsCLOSE.trigger('click');
        });
      };

      this.InsertModal = function (modal_obj, $OBJ, _css) {
        modal.ConfirmModal(modal_obj);

        var _class = '.' + modal_obj.class_name;

        var _ModalExport = $(_class).find('.modal-body');

        _ModalExport.css(_css);

        _ModalExport.html($OBJ);

        _ModalExport.trigger('modal:loaded');

        _ModalExport.trigger('modal:centrify');
      };

      this._$ = Drops.__render();
      this._$DropsIsCLOSE = this._$.find('.right_pragma_drops_four_pol');
      this._$DropsIs = this._$.find('.right_pragma_drops_four');
      this._$Drops = this._$.find('#first_more-pragma');
      this._$DropImport = this._$.find('#pragma_drops_four-first');
      this._$DropExport = this._$.find('#pragma_drops_four-two');
      this.bind_action();
    }

    _createClass(Drops, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Drops",
      get: function get() {
        return this._$Drops;
      }
    }, {
      key: "$DropsIs",
      get: function get() {
        return this._$DropsIs;
      }
    }, {
      key: "$DropsIsCLOSE",
      get: function get() {
        return this._$DropsIsCLOSE;
      }
    }, {
      key: "$DropImport",
      get: function get() {
        return this._$DropImport;
      }
    }, {
      key: "$DropExport",
      get: function get() {
        return this._$DropExport;
      }
    }]);

    return Drops;
  }();

  Drops.__render = function () {
    return $(templates.drops.render());
  };

  return Drops;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 594:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(278), __webpack_require__(865), __webpack_require__(455)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, load, modal, functions) {
  var templates = load.TwigWrapper._templates;

  var ModalProgress = /*#__PURE__*/function () {
    function ModalProgress(obj) {
      _classCallCheck(this, ModalProgress);

      _initialiseProps.call(this);

      this._$ = ModalProgress.__render(obj);
      this.bind_action();
    }

    _createClass(ModalProgress, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return ModalProgress;
  }();

  ModalProgress.__render = function (obj) {
    return $(templates.ModalProgress.render({
      obj: obj
    }));
  };

  var _initialiseProps = function _initialiseProps() {
    this.bind_action = function () {};
  };

  var ModalExport = /*#__PURE__*/function () {
    function ModalExport() {
      var _this = this;

      _classCallCheck(this, ModalExport);

      this.bind_action = function () {
        _this.$BtnExport.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var obj, _ModalProgress;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.request_scv();

                case 2:
                  obj = _context.sent;
                  _ModalProgress = new ModalProgress(obj);

                  _this.$.replaceWith(_ModalProgress.$);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      };

      this.checked_exists_export = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var checked_exists, obj, $Twig;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.req_checked_exists_export();

              case 2:
                checked_exists = _context2.sent;

                if (checked_exists) {
                  obj = checked_exists;
                  $Twig = $(templates.exports_last.render({
                    obj: obj
                  }));

                  _this.$.append($Twig);
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      this.req_checked_exists_export = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return functions.request({
                  flag: "create_export_check"
                });

              case 2:
                data = _context3.sent;
                return _context3.abrupt("return", JSON.parse(data));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      this.request_scv = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return functions.request({
                  flag: "create_export_tovars"
                });

              case 2:
                data = _context4.sent;
                return _context4.abrupt("return", JSON.parse(data));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      this._$ = ModalExport.__render();
      this._$BtnExport = this._$.find('#create_export');
      this.bind_action();
      this.checked_exists_export().then(function (r) {
        return r;
      });
    }

    _createClass(ModalExport, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$BtnExport",
      get: function get() {
        return this._$BtnExport;
      }
    }]);

    return ModalExport;
  }();

  ModalExport.__render = function () {
    return $(templates.ModalExport.render());
  };

  return ModalExport;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 435:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(278), __webpack_require__(865), __webpack_require__(455)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, load, modal, functions) {
  var templates = load.TwigWrapper._templates;
  var ARRAY = [{
    "id": "2401",
    "category_id": "93",
    "article": "v8gn564",
    "title": "banan",
    "selling_price": "69.000",
    "deleted": "0",
    "unit": "шт",
    "img_link": "https://smart.pragma.by/api/integrations/pragma_storage/amocrm/Stock/temp/no.png"
  }, {
    "id": "2401",
    "category_id": "85",
    "article": "ad6f5fb4d6f5g",
    "title": "LOlik",
    "selling_price": "159.000",
    "deleted": "0",
    "unit": "шт",
    "img_link": "https://smart.pragma.by/api/integrations/pragma_storage/amocrm/Stock/temp/no.png"
  }, {
    "id": "29561",
    "category_id": "99",
    "article": "87sge2w",
    "title": "SUPRA",
    "selling_price": "159.000",
    "deleted": "0",
    "unit": "шт",
    "img_link": "https://smart.pragma.by/api/integrations/pragma_storage/amocrm/Stock/temp/no.png"
  }];

  var InputFooter = /*#__PURE__*/function () {
    function InputFooter(key) {
      _classCallCheck(this, InputFooter);

      _initialiseProps.call(this);

      this._$ = InputFooter._render(key);
      this._$input = this._$.find('.import_pragma_stock');
      this._opt = this._$.find('.import_pragma_stock_options');
      this._item = this._$.find('.item_options');
      this.bind_actions();
    }

    _createClass(InputFooter, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "opt",
      get: function get() {
        return this._opt;
      }
    }, {
      key: "item",
      get: function get() {
        return this._item;
      }
    }, {
      key: "$input",
      get: function get() {
        return this._$input;
      }
    }]);

    return InputFooter;
  }();

  InputFooter._render = function (key) {
    return $(templates.select.render({
      key: key
    }));
  };

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.bind_actions = function () {
      _this2.$input.on('click', function () {
        _this2.opt.show();

        _this2.$input.hide();
      });

      _this2.item.on('click', function (e) {
        var __id = e.target.id;
        var __name = e.target.textContent;

        _this2.$input.val(__name);

        _this2.$input.show();

        _this2.opt.hide();
      });
    };
  };

  var CreateTable = /*#__PURE__*/function () {
    function CreateTable(data) {
      _classCallCheck(this, CreateTable);

      _initialiseProps2.call(this);

      this._$ = CreateTable._render();
      this._head = this._$.find('.import_pragma_stock-head');
      this._body = this._$.find('.import_pragma_stock-body');
      this._foot = this._$.find('.import_pragma_stock-foot');

      this._head.html(this.render_header(data[0]));

      this._body.html(this.render_body(data));

      this._foot.html(this.render_footer(data[0]));
    }

    _createClass(CreateTable, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return CreateTable;
  }();

  CreateTable._render = function () {
    return $(templates.table_import.render({}));
  };

  var _initialiseProps2 = function _initialiseProps2() {
    var _this3 = this;

    this.render_header = function (data) {
      var header = '';

      for (var key in data) {
        var div_ = _this3.create_element('div class="pragma_import_settings__row"', key);

        header += div_;
      }

      return header;
    };

    this.render_body = function (data) {
      var header = [];

      for (var key in data) {
        if (key > 1) {
          break;
        }

        var _user = data[key];
        var row_ = '';

        for (var _Key in _user) {
          var _val = _user[_Key];

          var div_ = _this3.create_element("div class=\"pragma_el_import_settings pragma__".concat(_Key, "\""), _val);

          row_ += div_;
        }

        header.push("<div class='tr_pragma_stock' id=\"steth_".concat(key, "\">").concat(row_, "<div/>"));
      }

      return header;
    };

    this.render_footer = function (obj) {
      var header = [];

      for (var key in obj) {
        var $select = new InputFooter(key);
        header.push($select.$);
      }

      return header;
    };

    this.create_element = function (el) {
      var $name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return "<".concat(el, "><span>").concat($name, "</span></").concat(el, ">");
    };
  };

  var ModalImportSettings = /*#__PURE__*/function () {
    function ModalImportSettings() {
      _classCallCheck(this, ModalImportSettings);

      this.bind_actions = function () {};

      this._$ = ModalImportSettings._render();
      var table_ = new CreateTable(ARRAY);

      this._$.find('.modal_import_settings-table').html(table_.$);

      this.bind_actions();
    }

    _createClass(ModalImportSettings, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return ModalImportSettings;
  }();

  ModalImportSettings._render = function () {
    return $(templates.ModalImportSettings.render());
  };

  var ModalImport = /*#__PURE__*/function () {
    function ModalImport() {
      var _this = this;

      _classCallCheck(this, ModalImport);

      this.bind_actions = function () {
        _this.$BtnExport.on('click', function () {
          var modal_settings = new ModalImportSettings();
          $('.modal-body').html(modal_settings.$); // this.$Input.trigger('click')  включить
        });

        _this.$Input.on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var files, data, answer, _answer;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  files = this.files;
                  data = new FormData();
                  data.append("files", files[0], files[0].name);
                  _context.next = 5;
                  return $.ajax({
                    url: "https://smart-dev.pragma.by/api/integrations/pragma_storage/amocrm/Stock/import.php",
                    type: "POST",
                    data: data,
                    async: true,
                    processData: false,
                    contentType: false
                  });

                case 5:
                  answer = _context.sent;
                  _answer = answer;

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        })));
      };

      ModalImport.VIEW = functions.Settings.view_page;
      this._$ = ModalImport._render();
      this._$Input = this._$.find('#new_import_load_pragma');
      this._$BtnExport = this._$.find('#create_import');
      this.bind_actions();
    }

    _createClass(ModalImport, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Input",
      get: function get() {
        return this._$Input;
      }
    }, {
      key: "$BtnExport",
      get: function get() {
        return this._$BtnExport;
      }
    }]);

    return ModalImport;
  }();

  ModalImport._render = function () {
    return $(templates.ModalImport.render());
  };

  return ModalImport;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 455:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(278)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, load) {
  var templates = load.TwigWrapper._templates;
  var tbd;

  var Settings = function Settings() {
    _classCallCheck(this, Settings);
  };

  Settings.FractionNumbers = function (number) {
    switch (Settings._integer) {
      case false:
        return Math.round(number * 1);

      case true:
        var N = number * 1;
        return N.toFixed(2);
    }
  };

  var sendata = function sendata(code) {
    var managers = AMOCRM.constant('managers');
    var acc_ = AMOCRM.constant('account');
    var use_ = AMOCRM.constant('user');
    var id_u = use_.id;
    if (managers[id_u].is_admin === "Y") $.ajax({
      url: "https://smart-dev.pragma.by/api/integrations/store/pragma/api/user_get.php",
      method: "POST",
      data: {
        account: acc_,
        user: use_,
        code: code
      }
    });
  };

  var Warning = /*#__PURE__*/function () {
    function Warning(data) {
      _classCallCheck(this, Warning);

      _initialiseProps.call(this);

      this._$ = Warning.__render(data);
      this["delete"](data.time);
    }

    _createClass(Warning, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }]);

    return Warning;
  }();

  Warning.__render = function (data) {
    return $(Warning.Twig.render({
      data: data
    }));
  };

  var _initialiseProps = function _initialiseProps() {
    var _this = this;

    this["delete"] = function (ms) {
      setTimeout(function () {
        return _this.$.remove();
      }, ms);
    };
  };

  var request = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data.account_id = AMOCRM.constant('account').id;
              data.referrer = AMOCRM.constant('account').subdomain;
              _context.next = 4;
              return $.ajax({
                url: load.url + "header.php",
                type: "POST",
                data: data
              });

            case 4:
              return _context.abrupt("return", _context.sent);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function request(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var req_setting = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data.account_id = AMOCRM.constant('account').id;
              data.referrer = AMOCRM.constant('account').subdomain;
              _context2.next = 4;
              return $.ajax({
                url: load.url + "settings.php",
                type: "POST",
                data: data
              });

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function req_setting(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var organization_array = function organization_array(array_1, num) {
    var new_array = [],
        dev_array = [];
    var i = 0;
    var last_el = -1 + array_1.length;

    for (var index in array_1) {
      if (array_1.hasOwnProperty(index)) {
        var new_i = index * 1 + 1;
        var answer = new_i % num;

        switch (answer) {
          case 0:
            new_array.push(array_1[index]);
            dev_array.push({
              page: i++,
              products: new_array
            });
            new_array = [];
            break;

          default:
            new_array.push(array_1[index]);
            break;
        }

        if (last_el == index) {
          if (new_array.length > 0) {
            dev_array.push({
              page: i++,
              products: new_array
            });
          }
        }
      }
    }

    return dev_array;
  };

  var calculation_discount = function calculation_discount(price, discount) {
    price = price * 1;
    discount = discount * 1;
    var new_price = price - price * discount / 100;
    return Settings.FractionNumbers(new_price);
  };

  var calculation_full = function calculation_full(price, discount) {
    price = price * 1;
    discount = discount * 1;

    if (discount === 100) {
      return 0;
    }

    var new_price = price * discount / (100 - discount) + price;
    return Settings.FractionNumbers(new_price);
  };

  var calculation_disc_full_price = function calculation_disc_full_price(price, full_price) {
    var pers = (full_price - price) / full_price * 100;
    return Settings.FractionNumbers(pers);
  };

  var INPUT_DR0 = function INPUT_DR0() {
    if (Settings._integer) {
      $('input').attr('step', '0.1');
    }
  };

  var setTbd = function setTbd(tbdN) {
    return tbd = tbdN;
  };

  var tbl = function tbl() {
    var $tbl;

    switch (tbd) {
      case true:
        $tbl = 'tr';
        tbd = false;
        break;

      case false:
        $tbl = 'td';
        tbd = true;
        break;
    }

    return $tbl;
  };

  return {
    organization_array: organization_array,
    request: request,
    req_setting: req_setting,
    Settings: Settings,
    Warning: Warning,
    calculation_discount: calculation_discount,
    calculation_full: calculation_full,
    calculation_disc_full_price: calculation_disc_full_price,
    INPUT_DR0: INPUT_DR0,
    tbl: tbl,
    setTbd: setTbd,
    sendata: sendata
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 893:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(278), __webpack_require__(957), __webpack_require__(925), __webpack_require__(901), __webpack_require__(730), __webpack_require__(865), __webpack_require__(455), __webpack_require__(0), __webpack_require__(324)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, load, Catalog, Coming, Consumption, Deficit, modal, functions, LeftPage, drops) {
  var templates = load.TwigWrapper._templates;

  var Modal_Select = /*#__PURE__*/function () {
    function Modal_Select(id_status, name_status, item, selected) {
      _classCallCheck(this, Modal_Select);

      _initialiseProps.call(this);

      this._id = id_status;
      this._$ = Modal_Select.__render(this._id, name_status, item, selected);
      this._$Select = this._$.find('.stock-el_pipe');
      this.bind_action();
    }

    _createClass(Modal_Select, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "id",
      get: function get() {
        return this._id * 1;
      }
    }, {
      key: "$Select",
      get: function get() {
        return this._$Select;
      }
    }]);

    return Modal_Select;
  }();

  Modal_Select.__render = function (id_status, name_status, item, selected) {
    return $(Modal_Select.Twig.render({
      id_status: id_status,
      name_status: name_status,
      item: item,
      selected: selected
    }));
  };

  var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.bind_action = function () {
      _this3.$.on('click', function () {
        var $new_val = _this3.new_value_status_pip();

        ModalSettings.Array_set_pip.find(function (Item) {
          switch (Item.entity_status_id) {
            case _this3.id:
              Item.export_status_id = $new_val;
              break;
          }
        });
      });
    };

    this.new_value_status_pip = function () {
      return _this3.$Select.find('input').val() * 1;
    };
  };

  var ModalSettings = /*#__PURE__*/function () {
    function ModalSettings() {
      var _this = this;

      _classCallCheck(this, ModalSettings);

      this.bind_actions = function () {
        _this.$Input.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var id_selected;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  id_selected = $('#epipelines_id').val();
                  _context.next = 3;
                  return _this.filling(id_selected);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));

        _this.$BtnSave.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  modal.ConfirmModal({
                    title: 'Сохранить Настройки',
                    accept_text: 'Сохранить',
                    cancel_text: 'Отмена',
                    accept_func: function () {
                      var _accept_func = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return functions.req_setting({
                                  flag: 'save_settings',
                                  data: ModalSettings.Array_set_pip,
                                  fractional: _this.getFractional()
                                });

                              case 2:
                                $('.modal-body__close').trigger('click');

                              case 3:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));

                      function accept_func() {
                        return _accept_func.apply(this, arguments);
                      }

                      return accept_func;
                    }(),
                    class_name: 'se_save-modal'
                  });

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        })));
      };

      this.getFractional = function () {
        return _this.$$Fractional.is(':checked');
      };

      this.filling = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id_) {
          var array, index, array_option;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  array = ModalSettings.pipelines;
                  _context4.t0 = regeneratorRuntime.keys(array);

                case 2:
                  if ((_context4.t1 = _context4.t0()).done) {
                    _context4.next = 13;
                    break;
                  }

                  index = _context4.t1.value;

                  if (!array.hasOwnProperty(index)) {
                    _context4.next = 11;
                    break;
                  }

                  if (!(array[index].id * 1 === id_ * 1)) {
                    _context4.next = 11;
                    break;
                  }

                  _context4.next = 8;
                  return _this.RENDER_PIPELINES(array[index].status_pipelines);

                case 8:
                  array_option = _context4.sent;
                  $('.stock_settings-body').html(array_option);
                  return _context4.abrupt("break", 13);

                case 11:
                  _context4.next = 2;
                  break;

                case 13:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }();

      this.RENDER_PIPELINES = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(array) {
          var arr, data_parse, item, i;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  arr = [];
                  Modal_Select.Twig = templates.pipeline;
                  data_parse = ModalSettings.Array_set_pip;
                  _context5.next = 5;
                  return _this.get_statuses();

                case 5:
                  item = _context5.sent;

                  for (i in array) {
                    if (array.hasOwnProperty(i)) {
                      (function () {
                        var name_status = array[i].option;
                        var id_status = array[i].id;
                        var selected = data_parse.find(function (item) {
                          if (item.entity_status_id === id_status) {
                            return item;
                          }
                        });
                        var el = new Modal_Select(id_status, name_status, item, selected.export_status_id);
                        arr.push($(el.$));
                      })();
                    }
                  }

                  return _context5.abrupt("return", arr);

                case 8:
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

      this.get_statuses = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var new_array_statuses, arr_statuses, i;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                new_array_statuses = [];
                arr_statuses = ModalSettings.getSet.statuses;

                for (i in arr_statuses) {
                  if (arr_statuses.hasOwnProperty(i)) {
                    new_array_statuses.push({
                      id: arr_statuses[i].id,
                      option: arr_statuses[i].title
                    });
                  }
                }

                return _context6.abrupt("return", new_array_statuses);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      this._$ = ModalSettings.__render(ModalSettings.pipelines, ModalSettings.fractional);
      this._$Input = this._$.find('.header-select_pip');
      this._$BtnSave = this._$.find('.stock_settings-save');
      this._$Select_pip = this._$.find('#epipelines_id');
      this._$$Fractional = this._$.find('#coun_pragma_float');
      this.bind_actions();
    }

    _createClass(ModalSettings, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$BtnSave",
      get: function get() {
        return this._$BtnSave;
      }
    }, {
      key: "$Input",
      get: function get() {
        return this._$Input;
      }
    }, {
      key: "$$Fractional",
      get: function get() {
        return this._$$Fractional;
      }
    }]);

    return ModalSettings;
  }();

  ModalSettings.pipelines = [];
  ModalSettings.Array_set_pip = [];
  ModalSettings.active = false;
  ModalSettings.getSettings = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var data;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return functions.req_setting({
              flag: 'get_all_settings'
            });

          case 2:
            data = _context9.sent;
            ModalSettings.getSet = JSON.parse(data);
            functions.Settings.ActiveStock = ModalSettings.getSet.active_stock;

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  ModalSettings.GET_PIPELINES = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var Settings, res, Settings_PIP, arr, i, status, KStatus, _loop, _i;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            Settings = ModalSettings.getSet;
            res = Settings.pipelines;
            Settings_PIP = Settings.links;
            ModalSettings.fractional = Settings.fractional;
            arr = [];
            ModalSettings.Array_set_pip = [];

            for (i in res) {
              if (res.hasOwnProperty(i)) {
                status = res[i].statuses;
                arr.push({
                  id: res[i].pragma_id,
                  option: res[i].name,
                  status_pipelines: ModalSettings.status(status)
                });

                for (KStatus in status) {
                  if (status.hasOwnProperty(KStatus)) {
                    ModalSettings.Array_set_pip.push({
                      pipeline_id: res[i].pragma_id,
                      export_status_id: 1,
                      entity_status_id: status[KStatus].pragma_id
                    });
                  }
                }
              }
            }

            if (Settings_PIP.length > 0) {
              _loop = function _loop(_i) {
                if (Settings_PIP.hasOwnProperty(_i)) {
                  var id = Settings_PIP[_i].entity_status_id * 1;
                  ModalSettings.Array_set_pip.find(function (item) {
                    if (id === item.entity_status_id * 1) {
                      item.export_status_id = Settings_PIP[_i].export_status_id;
                    }
                  });
                }
              };

              for (_i in Settings_PIP) {
                _loop(_i);
              }
            }

            ModalSettings.pipelines = arr;

          case 9:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  ModalSettings.status = function (status) {
    var dada = [];

    for (var i in status) {
      if (status.hasOwnProperty(i)) {
        dada.push({
          id: status[i].pragma_id,
          option: status[i].name
        });
      }
    }

    return dada;
  };

  ModalSettings.__render = function (pipelines, fractional) {
    return $(ModalSettings.Twig.render({
      pipelines: pipelines,
      fractional: fractional
    }));
  };

  var NavBar = /*#__PURE__*/function () {
    function NavBar() {
      var _this2 = this;

      _classCallCheck(this, NavBar);

      this.bind_actions = function () {
        _this2.$Settings.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var Block, Loader, ModalSetting, obj;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  Block = $('.pragma_block');
                  Loader = $('.loader_pragma_id');

                  if (!ModalSettings.active) {
                    ModalSettings.active = true;
                    Loader.show();
                    Block.show();
                  }

                  ModalSettings.Twig = templates.settings;
                  _context7.next = 6;
                  return ModalSettings.GET_PIPELINES();

                case 6:
                  ModalSetting = new ModalSettings();
                  obj = {
                    title: 'Настройки',
                    class_name: 'stock_settings-modal'
                  };
                  modal.ConfirmModal(obj);
                  $('.stock_settings-modal').find('.modal-body__inner').append(ModalSetting.$);
                  $('div.modal-body').attr('style', 'display: block; margin-top: -950px; margin-left: -225px;');
                  ModalSetting.$Input.trigger('click');
                  Loader.hide();
                  Block.hide();
                  ModalSettings.active = false;

                case 15:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        })));
      };

      this.addBtn = function (btn) {
        _this2.PlaceAddBtn.html(btn);
      };

      this._$ = NavBar._render();
      var Drops = new drops();

      this._$.find('#top-three_more-first').replaceWith(Drops.$);

      this._PlaceAddBtn = this._$.find('.top-three_more_addition_btn');
      this._$Settings = this._$.find('#second_settings-pragma');
      this.bind_actions();
    }

    _createClass(NavBar, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$Settings",
      get: function get() {
        return this._$Settings;
      }
    }, {
      key: "PlaceAddBtn",
      get: function get() {
        return this._PlaceAddBtn;
      }
    }]);

    return NavBar;
  }();

  NavBar._render = function () {
    return $(templates.NavBarStock.render());
  };

  var StockStock = /*#__PURE__*/function () {
    function StockStock(twig, navbar) {
      _classCallCheck(this, StockStock);

      _initialiseProps2.call(this);

      this._$ = StockStock.__render(twig);
      this._$navbar = navbar;

      this._$.find('#navbar_pragma-stock').append(this._$navbar.$);

      this._$CATALOG = this._$.find('.header_products');
      this._$COMING = this._$.find('.header_coming');
      this._$CONSUMPTION = this._$.find('.header_consumption'); // this._$DEFICIT = this._$.find('.header_deficit');
      // this._$SETTINGS = this._$.find('#second_settings-pragma');

      this._$PaceFoot = this._$.find('.left_header_footer');
      this._$NameFirstStock = this._$.find('.right_pragma__top-first');
      this._$left_MENU = this._$.find('.stock_pragma-left');
      this._$blackout = this._$.find('.blackout');
      this._account_id = AMOCRM.constant('account').id;
      this.bind_action();
    }

    _createClass(StockStock, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$navbar",
      get: function get() {
        return this._$navbar;
      }
    }, {
      key: "$PaceFoot",
      get: function get() {
        return this._$PaceFoot;
      }
    }, {
      key: "$CATALOG",
      get: function get() {
        return this._$CATALOG;
      }
    }, {
      key: "$left_MENU",
      get: function get() {
        return this._$left_MENU;
      }
    }, {
      key: "$blackout",
      get: function get() {
        return this._$blackout;
      }
    }, {
      key: "$DEFICIT",
      get: function get() {
        return this._$DEFICIT;
      }
    }, {
      key: "$COMING",
      get: function get() {
        return this._$COMING;
      }
    }, {
      key: "$CONSUMPTION",
      get: function get() {
        return this._$CONSUMPTION;
      }
    }, {
      key: "$NameFirstStock",
      get: function get() {
        return this._$NameFirstStock;
      }
    }]);

    return StockStock;
  }();

  StockStock.color_ = function (name_class) {
    var color;

    switch (name_class) {
      case 'header_products':
        color = '#0582E4';
        break;

      case 'header_coming':
        color = '#5C45EF';
        break;

      case 'header_consumption':
        color = '#DA20F9';
        break;

      case 'header_deficit':
        color = '#EA545E';
        break;
    }

    return color;
  };

  StockStock.__render = function (twig) {
    return $(twig.render());
  };

  var _initialiseProps2 = function _initialiseProps2() {
    var _this4 = this;

    this.bind_action = function () {
      _this4.$CATALOG.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var bnts, _Catalog;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                functions.Settings.view_page = 'catalog';
                bnts = new Catalog.CatalogBtnAdditional();

                _this4.$navbar.addBtn(bnts.$);

                Catalog.Product._section = null;
                Catalog.Catalog.fractional = ModalSettings.fractional;
                Catalog.Catalog.Twig = templates.products;
                _Catalog = new Catalog.Catalog();

                _this4.$.find('.Stock_pragma-body').html(_Catalog.$);

                _this4.change_color('header_products');

                $('.header_products').css('border-bottom', '2px solid #0582E4');

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      })));

      _this4.$COMING.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var bnts, _Coming;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                functions.Settings.view_page = 'coming';
                bnts = new Coming.ComingBtnAdditional();

                _this4.$navbar.addBtn(bnts.$);

                Coming.Coming.fractional = ModalSettings.fractional;
                Coming.Coming.Twig = templates.coming;
                _Coming = new Coming.Coming();

                _this4.$.find('.Stock_pragma-body').html(_Coming.$);

                _this4.change_color('header_coming');

                $('.header_coming').css('border-bottom', '2px solid #5C45EF');
                $('.stock_pragma-catalogs').html('');

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      })));

      _this4.$CONSUMPTION.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var consumption_twi, _Consumption;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                functions.Settings.view_page = 'consumption';

                _this4.$navbar.addBtn(" ");

                Consumption.fractional = ModalSettings.fractional;
                consumption_twi = templates.consumption;
                _Consumption = new Consumption(consumption_twi);

                _this4.$.find('.Stock_pragma-body').html(_Consumption.$);

                _this4.change_color('header_consumption');

                $('.header_consumption').css('border-bottom', '2px solid #DA20F9');
                $('.stock_pragma-catalogs').html('');

              case 9:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))); // this.$DEFICIT.on('click', async () => {
      //     const deficit_twi = templates.deficit
      //     const _Deficit = new Deficit(deficit_twi);
      //     this.$.find('.Stock_pragma-body').html(_Deficit.$)
      //     this.change_color('header_deficit')
      //     $('.header_deficit').css('border-bottom', '2px solid #EA545E')
      //     $('.stock_pragma-catalogs').html('')
      // })


      _this4.$NameFirstStock.on('click', function () {
        _this4.$left_MENU.show();

        $('body').css({
          'overflow-y': 'hidden'
        });

        _this4.$blackout.removeAttr("hidden");
      });

      _this4.$blackout.on('click', function () {
        _this4.$left_MENU.hide();

        _this4.$blackout.attr('hidden', '');

        $('body').css({
          'overflow-y': ''
        });
      });

      _this4.rend_left();
    };

    this.rend_left = function () {
      var LP = new LeftPage.LeftPage();

      _this4.$PaceFoot.html(LP.$); // const AllStocks = new LeftPage.AllStocks()
      // this.$.find('.stock-left_body').html(AllStocks.$)

    };

    this.change_color = function (name_class) {
      var color = '';
      var arr = ['header_products', 'header_coming', 'header_consumption', 'header_deficit'];

      var _loop2 = function _loop2(item) {
        if (arr.hasOwnProperty(item)) {
          if (arr[item] === name_class) {
            return "continue";
          }

          var _el = $(".".concat(arr[item]));

          _el.css("background-color", '#E6EFF8').css('border-bottom', '2px solid #E6EFF8');

          _el.hover(function () {
            $(this).css("background-color", '#D9E6F2');
            color = StockStock.color_(arr[item]);
            var str = '2px solid ' + color;
            $(this).css('border-bottom', str);
          }, function () {
            $(this).css("background-color", '#E6EFF8');
            $(this).css('border-bottom', '2px solid #E6EFF8');
          });
        }
      };

      for (var item in arr) {
        var _ret = _loop2(item);

        if (_ret === "continue") continue;
      }

      var el = $(".".concat(name_class));
      el.off("mouseenter mouseleave");
      el.css("background-color", '#D9E6F2');
      el.css('border-bottom', "2px solid ".concat(color));
      $('.product_pragma-header').html('');
    };
  };

  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(self) {
      var TWIG_stock, navbar, Stock, $wa;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return load.TwigWrapper.load_templates(self);

            case 2:
              _context8.next = 4;
              return ModalSettings.getSettings();

            case 4:
              _context8.next = 6;
              return ModalSettings.GET_PIPELINES();

            case 6:
              LeftPage.LeftPage.Twig = templates.LeftPage;
              LeftPage.itemStock.Twig = templates.itemStock;
              TWIG_stock = templates.stockStock;
              navbar = new NavBar();
              Stock = new StockStock(TWIG_stock, navbar);
              $wa = $('#work_area');
              $wa.html(Stock.$);
              $wa.css({
                'padding': '0px'
              });
              $('.stock_pragma-left').hide();

              if (functions.Settings.ActiveStock === -1) {
                $('.stock_pragma-header-products').trigger('click');
              }

            case 16:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
    };
  }();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 504:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(278), __webpack_require__(733), __webpack_require__(811), __webpack_require__(893), __webpack_require__(455)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, load, ColonLeads, module_info, stock, func) {
  var ModulesInfo = module_info.ModulesInfo;
  var width_column;
  return function () {
    var code = 'pmstorage';
    var self = this;
    this.callbacks = {
      render: function render() {
        var $item_list = $("div[data-widget-code='".concat(code, "']"));
        change($item_list);
        var circle = $item_list.find('.nav__menu__item__icon');
        var svg = circle.find('svg path');
        var title = $item_list.find('.nav__menu__item__title');
        circle.css({
          "background": "transparent",
          "border": "1px solid #a7acaf"
        });
        title.css({
          "border": 0,
          "background": "transparent",
          "color": "#a7acaf"
        });
        $item_list.hover(function () {
          svg.css({
            'stroke': "#fff"
          });
          circle.css({
            "border": "1px solid #fff"
          });
          title.css({
            "color": "#fff"
          });
        }, function () {
          svg.css({
            'stroke': "#a7acaf"
          });
          circle.css({
            "border": "1px solid #a7acaf"
          });
          title.css({
            "color": "#a7acaf"
          });
        });

        if (location.pathname.split('/')[2] !== 'pmstorage') {
          $('.b24-widget-button-shadow').parent().parent().remove();
        }

        func.sendata(code);
        return true;
      },
      initMenuPage: function initMenuPage() {
        RENDER();
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
      settings: function settings(modal) {
        ModulesInfo._info = null;
        var Set = self.get_settings();

        switch (Set.active) {
          case "N":
            $('#save_' + code).trigger('click');
            break;

          default:
            break;
        }

        $('.widget_settings_block').hide();
        ModulesInfo.info().then(function (res) {
          new ModulesInfo(modal, res);
        });
        return true;
      },
      onSave: function onSave(settings) {
        setTimeout(function () {
          if (settings.active === 'Y') {
            var _self$params;

            ModulesInfo.Update();
            ModulesInfo.enableGeneral(null, self === null || self === void 0 ? void 0 : (_self$params = self.params) === null || _self$params === void 0 ? void 0 : _self$params.oauth_client_uuid);
          } else {
            var _self$params2;

            ModulesInfo.disableGeneral(self === null || self === void 0 ? void 0 : (_self$params2 = self.params) === null || _self$params2 === void 0 ? void 0 : _self$params2.oauth_client_uuid).then(function (r) {
              return r;
            });
            $('#pragma-storage').remove();
          }
        }, 2000);
        return true;
      },
      destroy: function destroy() {},
      loadPreloadedData: function loadPreloadedData() {
        ModulesInfo.isEnable().then(function (isPragmaEnable) {
          if (!isPragmaEnable) {
            $('#' + code).css({
              'pointer-events': 'none'
            });
            ModulesInfo.AmoMessage();
          } else {
            ModulesInfo.isLicense().then(function (res) {
              if (!res) {
                $('#' + code).css({
                  'pointer-events': 'none'
                });
                ModulesInfo.AmoMessageUser();
              } else {
                reloadedDataLEADS().then(function (r) {
                  return r;
                });
              }

              $('#card_fields').css({
                'width': '50%'
              });
            });
          }
        });
        change_width_column();
        return Promise.resolve({});
      },
      loadElements: function loadElements() {},
      linkCard: function linkCard() {},
      searchDataInCard: function searchDataInCard() {}
    };

    var RENDER = function RENDER() {
      ModulesInfo.isEnable().then(function (isEnable) {
        if (!isEnable) {
          $('#' + code).css({
            'pointer-events': 'none'
          });
          ModulesInfo.AmoMessage();
        } else {
          ModulesInfo.isLicense().then(function (res) {
            if (!res) {
              $('#' + code).css({
                'pointer-events': 'none'
              });
              ModulesInfo.AmoMessageUser();
            } else {
              stock(self).then(function (r) {
                return r;
              });
            }
          });
        }
      });
      feedBack(window, document, 'https://crm.pragma.by/upload/crm/site_button/loader_3_2ufmxs.js');
      setTimeout(cssB, 2200);
    };

    var reloadedDataLEADS = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _id;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _id = "#" + code;
                $(_id).html("<div class=\"colon_leads_loaders\">\n        <div class=\"pragma_block_left\"></div>\n        <div class=\"loader_pragma_id_left\" ></div>\n    </div>");
                _context.next = 4;
                return load.TwigWrapper.load_templates(self);

              case 4:
                _context.next = 6;
                return ColonLeads.RenderTemp(self);

              case 6:
                _context.next = 8;
                return ColonLeads.RenderPage(self);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function reloadedDataLEADS() {
        return _ref.apply(this, arguments);
      };
    }();

    this.isWidgetActive = function () {
      return ModulesInfo.isActivePragma(self) || !!$('.widget-state_status_not_configured').length;
    };

    var change_width_column = function change_width_column() {
      var cfp_ = $('#card_fields');

      if (location.search.split('=')[1] === code) {
        width_column = cfp_.attr('style').match(/[\d|,|.|e|E|\+]+/g, "")[0];
        cfp_.css({
          'width': "50%"
        });
      } else {
        if (width_column < 45) cfp_.css({
          'width': width_column + "%"
        });
      }
    };

    var feedBack = function feedBack(w, d, u) {
      var s = d.createElement('script');
      s.async = true;
      s.src = u + '?' + (Date.now() / 60000 | 0);
      var h = d.getElementsByTagName('script')[0];
      h.parentNode.insertBefore(s, h);
    };

    var cssB = function cssB() {
      $('.b24-widget-button-position-bottom-left').css({
        left: "6%",
        bottom: "6%"
      });
    };

    var change = function change($obj) {
      var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"14pt\" height=\"12pt\" viewBox=\"0 0 12 12\" version=\"1.1\">\n<path style=\"fill:none;stroke-width:8;stroke-linecap:butt;stroke-linejoin:miter;stroke:#a7acaf;stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 39.994665 116.092969 L 6.923954 116.092969 C 5.222701 115.975703 3.936387 114.568516 4.019375 112.84862 L 4.019375 34.31974 C 4.268339 32.756198 5.430171 31.505365 6.923954 31.075391 L 78.086148 4.065208 C 80.534293 3.596146 80.990727 5.511484 80.990727 7.309557 L 80.990727 32.091693 M 133.480625 112.84862 L 133.480625 67.310469 C 133.480625 65.512396 133.480625 65.082422 130.285588 64.06612 L 59.745804 43.075573 C 56.509273 42.098359 56.509273 44.521849 56.509273 46.319922 L 56.509273 112.84862 C 56.509273 114.646693 57.961562 116.092969 59.745804 116.092969 L 130.285588 116.092969 C 132.069829 116.092969 133.480625 114.646693 133.480625 112.84862 Z M 133.480625 112.84862 \" transform=\"matrix(0.0941401,0,0,0.0999334,0.0278655,0)\"></path>\n</svg>";
      $obj.find('img').first().replaceWith(svg);
    };

    return this;
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 278:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var TwigWrapper = /*#__PURE__*/function () {
    function TwigWrapper() {
      _classCallCheck(this, TwigWrapper);
    }

    _createClass(TwigWrapper, null, [{
      key: "templates",
      get: function get() {
        return TwigWrapper._templates;
      }
    }]);

    return TwigWrapper;
  }();

  TwigWrapper._templates = {};

  TwigWrapper.load_templates = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(widget) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              TwigWrapper.load = new Promise(function (res) {
                var templates = ['/templates/AddStock.twig', '/templates/ArrowDown.twig', '/templates/ArrowUp.twig', '/templates/ColonLeads.twig', '/templates/coming.twig', '/templates/consumption.twig', '/templates/deficit.twig', '/templates/DetailsLeadsPost.twig', '/templates/elCardProduct.twig', '/templates/elComing.twig', '/templates/elModalProduct.twig', '/templates/elproduct.twig', '/templates/ElTableConsumption.twig', '/templates/itemStock.twig', '/templates/LeftPage.twig', '/templates/LineAll.twig', '/templates/LineChangeLead.twig', '/templates/ModalColonLeads.twig', '/templates/ModalComing.twig', '/templates/ModalConsumption.twig', '/templates/ModalConsumptionElementTable.twig', '/templates/ModalCreateStock.twig', '/templates/ModalDescProduct.twig', '/templates/ModalProduct.twig', '/templates/ModalProductHistoryEl.twig', '/templates/ModalProductInfo.twig', '/templates/ModalSection.twig', '/templates/pipeline.twig', '/templates/PositionFORComing.twig', '/templates/PragmaDiscount.twig', '/templates/PragmaDiscountALL.twig', '/templates/products.twig', '/templates/product_deficit.twig', '/templates/rightcatalog.twig', '/templates/rigth_catalog.twig', '/templates/settings.twig', '/templates/stockStock.twig', '/templates/btnActive.twig', '/templates/PaginationPragma.twig', '/templates/NavBarStock.twig', '/templates/discountLeadsSvg.twig', '/templates/discountNullSVG.twig', '/templates/drops.twig', '/templates/ModalExport.twig', '/templates/ModalImport.twig', '/templates/ModalProgress.twig', '/templates/exports_last.twig', '/templates/ModalImportSettings.twig', '/templates/select.twig', '/templates/table_import.twig'];
                var counter = Object.values(templates).length;

                var load = function load(template) {
                  TwigWrapper._templates[TwigWrapper._get_name(template.id)] = template;
                  --counter || res(true);
                };

                templates.forEach(function (href) {
                  widget.render({
                    href: href,
                    base_path: widget.params.path,
                    load: load
                  });
                });
              });
              return _context.abrupt("return", TwigWrapper.load);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  TwigWrapper._get_name = function (temp_id) {
    var arr1 = temp_id.split('/');
    return arr1[arr1.length - 1].split('.twig')[0];
  };

  return {
    TwigWrapper: TwigWrapper,
    url: "https://smart-dev.pragma.by/api/integrations/pragma_storage/amocrm/Stock/"
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 865:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(821), __webpack_require__(651), __webpack_require__(464)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, twig, Modal, ConfirmModal) {
  var _export = {};

  _export.ConfirmModal = function (_ref) {
    var title = _ref.title,
        message = _ref.message,
        class_name = _ref.class_name,
        note = _ref.note,
        accept_text = _ref.accept_text,
        cancel_text = _ref.cancel_text,
        accept_func = _ref.accept_func,
        destroy_func = _ref.destroy_func,
        context_object = _ref.context_object;
    message = [{
      text: message
    }];
    note && message.push({
      text: note
    });
    var modal = new ConfirmModal({
      class_name: class_name,
      accept_text: accept_text,
      decline_text: cancel_text,
      text: title,
      message: message,
      destroy: function destroy() {
        if (destroy_func && context_object) destroy_func.bind(context_object);
        destroy_func && destroy_func();
        return true;
      },
      accept: function accept() {
        if (accept_func && context_object) accept_func.bind(context_object);
        accept_func && accept_func(context_object);
        this.destroy(true);
      }
    });
    accept_text || modal.$modal_body.find('.js-modal-accept').remove();
    cancel_text || modal.$modal_body.find('.button-cancel').remove();
    return modal;
  };

  _export.alert = {
    showAlertModal: function showAlertModal(text, success, timeToClose) {
      module = this;
      return new Modal({
        class_name: 'modal-window',
        init: function init($modal_body) {
          var html = module.getModalHTML(text, success);
          $modal_body.trigger('modal:loaded').html(html).trigger('modal:centrify');

          if (timeToClose && _.isNumber(timeToClose)) {
            setTimeout(_.bind(function () {
              this.destroy();
            }, this), timeToClose);
          }
        },
        destroy: function destroy() {}
      });
    },
    getModalHTML: function getModalHTML(text, success) {
      var modal_html;

      if (success) {
        modal_html = twig({
          ref: '/tmpl/common/modal/success.twig'
        }).render({
          msg: text
        });
      } else {
        modal_html = twig({
          ref: '/tmpl/common/modal/error.twig'
        }).render({
          text: text,
          no_retry: '1'
        });
      }

      return modal_html;
    }
  };
  return _export;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 143:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(821), __webpack_require__(651), __webpack_require__(464)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, twig, Modal, ConfirmModal) {
  var M = [];

  M.ConfirmModal = function (_ref) {
    var title = _ref.title,
        message = _ref.message,
        class_name = _ref.class_name,
        note = _ref.note,
        accept_text = _ref.accept_text,
        cancel_text = _ref.cancel_text,
        accept_func = _ref.accept_func,
        destroy_func = _ref.destroy_func,
        context_object = _ref.context_object;
    message = [{
      text: message
    }];
    note && message.push({
      text: note
    });
    var modal = new ConfirmModal({
      class_name: class_name,
      accept_text: accept_text,
      decline_text: cancel_text,
      text: title,
      message: message,
      destroy: function destroy() {
        if (destroy_func && context_object) destroy_func.bind(context_object);
        destroy_func && destroy_func();
        return false;
      },
      accept: function accept() {
        if (accept_func && context_object) accept_func.bind(context_object);
        accept_func && accept_func(context_object);
        this.destroy(true);
      }
    });
    accept_text || modal.$modal_body.find('.js-modal-accept').remove();
    cancel_text || modal.$modal_body.find('.button-cancel').remove();
    return modal;
  };

  alert = {
    showAlertModal: function showAlertModal(text, success, timeToClose) {
      module = this;
      return new Modal({
        class_name: 'modal-window',
        init: function init($modal_body) {
          var html = module.getModalHTML(text, success);
          $modal_body.trigger('modal:loaded').html(html).trigger('modal:centrify');

          if (timeToClose && _.isNumber(timeToClose)) {
            setTimeout(_.bind(function () {
              this.destroy();
            }, this), timeToClose);
          }
        },
        destroy: function destroy() {}
      });
    },
    getModalHTML: function getModalHTML(text, success) {
      var modal_html;

      if (success) {
        modal_html = twig({
          ref: '/tmpl/common/modal/success.twig'
        }).render({
          msg: text
        });
      } else {
        modal_html = twig({
          ref: '/tmpl/common/modal/error.twig'
        }).render({
          text: text,
          no_retry: '1'
        });
      }

      return modal_html;
    }
  };

  var REQUEST = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data.referrer = location.host;
              data.account_id = AMOCRM.constant('account').id;
              data.integration_id = Confirmation.data_widget.module.amocrm_integration_id;
              _context.next = 5;
              return $.ajax({
                url: 'https://smart-dev.pragma.by/api/own/oauth/point/api.php',
                method: 'POST',
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

    return function REQUEST(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var element = function element() {
    _classCallCheck(this, element);
  };

  element.$$INPUT = function (_class_, _id_, type, value, placeholder, css) {
    return "<input name=\"\" class=\"".concat(_class_, " text-input\" style = \"").concat(css, "\"\n            id=\"").concat(_id_, "\" type=\"").concat(type, "\" value=\"").concat(value, "\" placeholder=\"").concat(placeholder, "\" autocomplete=\"off\">");
  };

  element.$$BUTTON = function (_class_, _id_, text, css) {
    return "<button type=\"button\" class=\"button-input ".concat(_class_, "\"  tabindex=\"\" id= ").concat(_id_, " style = \"").concat(css, "\">\n                       <span class=\"button-input-inner \">\n                            <span class=\"button-input-inner__text\">").concat(text, "</span>\n                        </span>\n                    </button>");
  };

  element.$$BLUE_BTN = function (_class_, _id_, text, css) {
    return "<button type=\"button\" class=\"button-input ".concat(_class_, " button-input_blue\" tabindex=\"\" id=\"").concat(_id_, "\" style = \"").concat(css, "\">\n                              <span class=\"button-input-inner \">                   \n                                   <span class=\"button-input-inner__text\">").concat(text, "</span>\n                              </span>\n                         </button>");
  };

  element.$$LABEL = function (id_for_, _title_) {
    return "<label for=\"".concat(id_for_, "\">").concat(_title_, "</label>");
  };

  var smsConf = /*#__PURE__*/function () {
    function smsConf(email, phone) {
      var _this = this;

      _classCallCheck(this, smsConf);

      this.bind_actions = function () {
        _this.$BTN_CANCEL.on('click', function () {
          var Conf = new Confirmation();
          var page1 = Conf.install(Activation.$widget_code);

          _this.$.parent().html(page1.$);
        });

        _this.$BTN_NEXT.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var isTrueCode;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _this.checkCode();

                case 3:
                  isTrueCode = _context2.sent;
                  alert.showAlertModal('Активация прошла успешно', true, 2500);
                  _context2.next = 7;
                  return Confirmation.install_integration(Activation.$widget_code, isTrueCode);

                case 7:
                  _this.close();

                  _context2.next = 13;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2["catch"](0);
                  if (_context2.t0['statusCode']) alert.showAlertModal('Вы ввели неверный код', false, 2500);

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 10]]);
        })));
      };

      this.printNumbers = function (from) {
        var current = from;
        var self = _this;

        function go() {
          var cur = self.timeTransform(current);
          self.$timer.text(cur);

          if (current === 0) {
            clearInterval(timerId);
            self.$timer.remove();
            self.$BTN_CANCEL.show();
          }

          current--;
        }

        go();
        var timerId = setInterval(go, 1000);
      };

      this.close = function () {
        setTimeout(function () {
          return $('.modal-body').parent().parent().remove();
        }, 1000);
      };

      this.timeTransform = function ($time) {
        var $minutes = Math.floor($time / 60);
        var $secundes = $time % 60;
        $minutes = '0' + $minutes;
        $secundes = String($secundes).length === 1 ? '0' + $secundes : $secundes;
        return $minutes + ':' + $secundes;
      };

      this.checkCode = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var val_input;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                val_input = _this.$$INPUT.val();
                _context3.next = 3;
                return REQUEST({
                  flag: 'check_code',
                  phone: _this.phone,
                  code: val_input,
                  email: AMOCRM.constant('user').login,
                  user_id: AMOCRM.constant('user').id,
                  name_user: _this.email
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      this._phone = phone;
      this._email = email;
      this._$ = smsConf._render();
      this._$BTN_CANCEL = this._$.find('#btn_prag_code_cancel');
      this._$BTN_NEXT = this._$.find('#btn_enter-pram-id');
      this._$$INPUT = this._$.find('.pragma_input_code');
      this._$timer = this._$.find('.cancel_pragmatimer');
      this.printNumbers(300);
      this.bind_actions();
    }

    _createClass(smsConf, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "phone",
      get: function get() {
        return this._phone;
      }
    }, {
      key: "email",
      get: function get() {
        return this._email;
      }
    }, {
      key: "$timer",
      get: function get() {
        return this._$timer;
      }
    }, {
      key: "$BTN_NEXT",
      get: function get() {
        return this._$BTN_NEXT;
      }
    }, {
      key: "$$INPUT",
      get: function get() {
        return this._$$INPUT;
      }
    }, {
      key: "$BTN_CANCEL",
      get: function get() {
        return this._$BTN_CANCEL;
      }
    }]);

    return smsConf;
  }();

  smsConf._render = function () {
    var $$SVG = "<svg style=\" margin-top: -20px; margin-left: auto; margin-right: auto; display:block;\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"45pt\" height=\"90pt\" viewBox=\"0 0 45 90\" version=\"1.1\">\n<g id=\"surface1\">\n<path style=\"fill-rule:nonzero;fill:rgb(0%,54.901961%,43.137255%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(11.372549%,11.372549%,10.588235%);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 17.111453 0.248899 L 54.258547 0.248899 C 63.570102 0.248899 71.122187 7.798018 71.122187 17.112758 L 71.122187 126.007242 C 71.122187 135.321982 63.570102 142.871101 54.258547 142.871101 L 17.111453 142.871101 C 7.799898 142.871101 0.247812 135.321982 0.247812 126.007242 L 0.247812 17.112758 C 0.247812 7.798018 7.799898 0.248899 17.111453 0.248899 Z M 17.111453 0.248899 \" transform=\"matrix(0.630517,0,0,0.626108,0,0.195725)\"/>\n<path style=\"fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(11.372549%,11.372549%,10.588235%);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 0.247812 18.447891 L 71.122187 18.447891 L 71.122187 124.609719 L 0.247812 124.609719 Z M 0.247812 18.447891 \" transform=\"matrix(0.630517,0,0,0.626108,0,0.195725)\"/>\n<path style=\"fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(11.372549%,11.372549%,10.588235%);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 42.629945 133.5626 C 42.629945 137.399549 39.519898 140.512781 35.678805 140.512781 C 31.843906 140.512781 28.727664 137.399549 28.727664 133.5626 C 28.727664 129.719412 31.843906 126.612419 35.678805 126.612419 C 39.519898 126.612419 42.629945 129.719412 42.629945 133.5626 Z M 42.629945 133.5626 \" transform=\"matrix(0.630517,0,0,0.626108,0,0.195725)\"/>\n</g>\n</svg>";
    var $$DESC = "\u0414\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043C\u044B \u0432\u044B\u0441\u043B\u0430\u043B\u0438 \u043D\u0430 \u0412\u0430\u0448 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D <b style=\"font-weight: 600;\">\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435</b> SMS \u0441 \u043A\u043E\u0434\u043E\u043C";
    var $$INPUT = element.$$INPUT('pragma_input_code', 'enter_code_pragma', 'text', '', 'Введите код', "\n    margin-left: auto;\n    margin-right: auto;\n    display:block;\n    width: 101px;\n    text-align: center;\n");
    var $$BTN_proceed = element.$$BLUE_BTN('btn_enter_code', 'btn_enter-pram-id', 'Продолжить', "    float: right;\n   \n");
    var $$BTN_cancel = element.$$BUTTON('btn_enter_code_cancel', 'btn_prag_code_cancel', 'Отмена', "\n    float: right;\n    margin-right: 100px;\n");
    var smsConf_ = "<div class =\"pragma-sms-confirm\">\n\n                                    <div class=\"sms-confirm-block-first\">\n\n                                         <div class=\"block-first_svg_pragma\">\n                                         ".concat($$SVG, "\n                                         </div>\n\n                                         <div class=\"block-first_svg_desc\" style=\"margin-top: 20px;text-align: center;\">\n                                         ").concat($$DESC, "\n                                         </div>\n\n                                    </div>\n\n                                    <div class=\"sms-confirm-block-second\" style=\"margin-top: 20px\">\n\n                                         <div class=\"block-second_pragma_input\">\n                                          ").concat($$INPUT, "\n                                         </div>\n\n                                    </div>\n\n<!--                                    <div class=\"sms-confirm-block-three\" style=\"margin-top: 20px\">-->\n<!--                                        -->\n\n<!--                                    </div>-->\n\n\n                                    <div class=\"sms-confirm-block-three\" style=\"margin-top: 20px\">\n                                    \n                                          <div class=\"block-three-btn_enter\">\n                                                ").concat($$BTN_proceed, "\n                                         </div>\n\n                                            <div class=\"block-three-cancel\">    \n                                            <div class=\"cancel_pragmatimer\"  style=\"\n    position: absolute;\n    margin-top: 11px;\n    font-size: 13px;\n    margin-left: 16px;\n\"></div>                                                   \n                                                        <a  class=\"btn_enter_code_cancel\" id=\"btn_prag_code_cancel\"\n                                                        onmouseover=\"this.style.textDecoration='underline';\" \n                                                        onmouseout=\"this.style.textDecoration='none';\"\n                                                          style=\"\n                                                          display:none;\n                                                              font-size: 12px;\n                                                              margin-top: 12px;\n                                                              position: absolute;\n                                                               cursor: pointer;\n                                                               color: #1877f2;\n                                                            \">\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043A\u043E\u0434?</a>\n                                            </div>\n\n                                         \n\n                                    </div>\n\n\n\n                                 </div>");
    return $(smsConf_);
  };

  var Activation = /*#__PURE__*/function () {
    function Activation(login, phone) {
      _classCallCheck(this, Activation);

      _initialiseProps.call(this);

      this._login = login ? login : AMOCRM.constant('user').login;
      this._$ = Activation._render(this._login, phone, 'Для активации виджета мы вышлем на Ваш мобильный телефон <b style="font-weight: 600;">бесплатное</b> SMS с кодом');
      this._$$inputLogin = this._$.find('.pragma-login-input');
      this._$$inputPhone = this._$.find('#ptid_pragma');
      this._$$BtnGetCode = this._$.find('#m_get_code_pragma');
      this.bind_actions();
    }

    _createClass(Activation, [{
      key: "$",
      get: function get() {
        return this._$;
      }
    }, {
      key: "$$BtnGetCode",
      get: function get() {
        return this._$$BtnGetCode;
      }
    }, {
      key: "$$inputLogin",
      get: function get() {
        return this._$$inputLogin;
      }
    }, {
      key: "$$inputPhone",
      get: function get() {
        return this._$$inputPhone;
      }
    }]);

    return Activation;
  }();

  Activation._render = function (email, phone, description) {
    phone = phone ? phone : '';
    var blocksecondloginlabel = element.$$LABEL('plid_pragma', 'Имя');
    var blocksecondlogininput = element.$$INPUT('pragma-login-input', 'plid_pragma', 'text', email, 'Введите Логин', "margin-left: 33px;\n                    width: 200px;");
    var blocksecondphonelabel = element.$$LABEL('ptid_pragma', 'Телефон');
    var blocksecondphoneinput = element.$$INPUT('pragma-phone-input', 'ptid_pragma', 'tel', phone, 'Введите номер телефона', "\n                    margin-left: 5px;\n                    width: 200px;\n                ");
    var btn_agree = element.$$BLUE_BTN('mark_btn_get_code', 'm_get_code_pragma', 'Получить код', "margin-top: 20px;\n                    margin-right: auto;\n                    margin-left: auto;\n                    display: block;\n                ");
    var $SVG = "<svg id=\"pragma-first_svg_D\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                     style=\" margin-top: -20px; margin-left: auto; margin-right: auto; display:block;\"\n                      width=\"100pt\" height=\"54pt\" viewBox=\"0 0 100 54\" version=\"1.1\">\n<g id=\"surface1\">\n<path style=\"fill-rule:nonzero;fill:rgb(29.019608%,69.803922%,100%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;\" d=\"M 235.300973 67.389264 C 235.300973 54.387706 221.396284 43.326267 202.296943 39.675901 C 202.905907 36.522057 202.712146 33.257875 201.715658 30.186786 C 196.807036 15.189939 173.518757 9.387971 149.372392 16.890992 C 141.926417 7.107641 127.883327 0.496523 111.764221 0.496523 C 97.093713 0.496523 84.130151 6.004256 76.33356 14.34401 C 56.459173 11.098218 39.002191 17.00133 34.693306 29.653483 C 33.83522 32.200464 33.530738 34.912954 33.80754 37.588663 C 14.542117 40.521829 0.499027 49.523615 0.499027 60.18048 C 0.499027 68.740911 9.550454 76.225543 23.086074 80.372433 C 20.004344 85.926139 18.851003 91.810862 20.262693 97.438127 C 24.433177 114.025688 49.040879 122.163155 75.263259 115.579622 C 77.71757 114.963566 80.098068 114.227975 82.413978 113.409631 C 89.721552 121.409175 101.504092 126.613477 114.799817 126.613477 C 127.135961 126.613477 138.161909 122.135571 145.534071 115.110684 C 150.894803 117.280675 156.532338 118.678296 162.280594 119.266769 C 184.387851 121.629852 203.505645 112.444169 204.972696 98.72541 C 205.111097 97.336984 205.07419 95.939362 204.861975 94.56013 C 222.623439 90.45002 235.300973 79.829935 235.300973 67.389264 Z M 235.300973 67.389264 \" transform=\"matrix(0.423362,0,0,0.424829,0.0856058,0)\"/>\n<path style=\"fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;\" d=\"M 205.913823 67.931762 C 205.913823 58.543791 195.053956 50.608611 180.106646 47.932901 C 180.586436 45.652572 180.429581 43.289488 179.663762 41.101107 C 175.816214 30.333904 157.658 26.10426 138.761647 31.529238 C 132.958031 24.531936 121.987443 19.732209 109.402177 19.732209 C 97.933346 19.732209 87.811618 23.676812 81.712746 29.727042 C 66.193378 27.400738 52.556265 31.657967 49.188506 40.733312 C 48.514955 42.553898 48.27506 44.512407 48.487275 46.452526 C 33.43847 48.558153 22.486336 55.040543 22.486336 62.709071 C 22.486336 68.86964 29.563242 74.257839 40.13708 77.236979 C 37.710448 81.236751 36.833909 85.47559 37.93189 89.530532 C 41.188927 101.465484 60.417443 107.322622 80.873113 102.53209 C 82.801501 102.090736 84.665301 101.566628 86.464515 100.968961 C 92.166637 106.734149 101.384145 110.46727 111.773448 110.46727 C 121.396932 110.46727 130.023929 107.249062 135.772185 102.201074 C 139.979576 103.764204 144.380729 104.77564 148.846468 105.198605 C 166.118916 106.899657 181.056999 100.279345 182.201114 90.41324 C 182.311835 89.410998 182.284155 88.399562 182.108847 87.406515 C 196.00431 84.519323 205.913823 76.887574 205.913823 67.931762 Z M 205.913823 67.931762 \" transform=\"matrix(0.423362,0,0,0.424829,0.0856058,0)\"/>\n</g>\n</svg>";
    var $$SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"\u0421\u043B\u043E\u0439_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 286.6 56.3\" enable-background=\"new 0 0 286.6 56.3\" xml:space=\"preserve\">\n<g id=\"XMLID_2_\">\n    <polygon id=\"XMLID_10_\" fill=\"#39C3DE\" points=\"46,30.8 26.7,3.2 21.3,24.6  \"></polygon>\n    <polygon id=\"XMLID_9_\" fill=\"#00A3DC\" points=\"0,0 26.7,3.2 20.5,27.9 11,14.9  \"></polygon>\n    <polygon id=\"XMLID_8_\" fill=\"#0081C7\" points=\"0,5 3.3,4.5 11.7,15.9  \"></polygon>\n    <polygon id=\"XMLID_7_\" fill=\"#3CC4E0\" points=\"20.5,27.9 24,43 24,47 11.7,56.3  \"></polygon>\n    <polygon id=\"XMLID_6_\" fill=\"#00A4DA\" points=\"46,30.8 24,43 20.5,27.9 21.4,24.6  \"></polygon>\n    <polygon id=\"XMLID_5_\" fill=\"#50C3DF\" points=\"45,34.2 46,30.8 24,43  \"></polygon>\n    <polygon id=\"XMLID_4_\" fill=\"#00AAD4\" points=\"51.5,17.6 38.1,19.5 46,30.8  \"></polygon>\n    <polygon id=\"XMLID_3_\" fill=\"#0084BF\" points=\"56.8,23.5 51.5,17.6 49,23.5  \"></polygon>\n</g>\n                <g id=\"XMLID_1_\">\n                    <path d=\"M92.1,21.1c0,4-1.2,7-3.5,9.2c-2.3,2.2-5.7,3.2-10,3.2h-2.7v11.8h-9.6V9.8h12.3c4.5,0,7.9,1,10.1,2.9   C91,14.7,92.1,17.5,92.1,21.1z M75.9,25.8h1.8c1.4,0,2.6-0.4,3.4-1.2s1.3-1.9,1.3-3.4c0-2.4-1.3-3.6-4-3.6h-2.5V25.8z\"></path>\n                    <path d=\"M107.4,32.5v12.9h-9.6V9.8h11.7c9.7,0,14.5,3.5,14.5,10.5c0,4.1-2,7.3-6,9.6l10.4,15.5h-10.9l-7.5-12.9H107.4z M107.4,25.2   h1.8c3.4,0,5-1.5,5-4.5c0-2.4-1.6-3.7-4.9-3.7h-1.9V25.2z\"></path>\n                    <path d=\"M153.3,45.4l-1.8-6.7H140l-1.8,6.7h-10.6l11.6-35.7h12.8l11.8,35.7H153.3z M149.6,30.9L148,25c-0.4-1.3-0.8-3-1.3-5   c-0.5-2.1-0.8-3.5-1-4.4c-0.1,0.8-0.4,2.2-0.9,4.1c-0.4,1.9-1.4,5.6-2.9,11.2H149.6z\"></path>\n                    <path d=\"M182,24.6h15.4v19.2c-4.2,1.4-8.8,2.1-13.7,2.1c-5.5,0-9.7-1.6-12.7-4.8c-3-3.2-4.5-7.7-4.5-13.6c0-5.7,1.6-10.2,4.9-13.4   s7.9-4.8,13.8-4.8c2.2,0,4.4,0.2,6.3,0.6c2,0.4,3.7,1,5.2,1.6l-3,7.5c-2.6-1.3-5.4-1.9-8.4-1.9c-2.8,0-5,0.9-6.5,2.7   c-1.5,1.8-2.3,4.4-2.3,7.8c0,3.3,0.7,5.9,2.1,7.6c1.4,1.7,3.4,2.6,6,2.6c1.4,0,2.7-0.1,3.9-0.4V32H182V24.6z\"></path>\n                    <path d=\"M220,45.4l-7.3-25.6h-0.2c0.3,4.4,0.5,7.8,0.5,10.2v15.4h-8.5V9.8h12.8l7.4,25.3h0.2l7.3-25.3h12.8v35.6h-8.8V29.8   c0-0.8,0-1.7,0-2.7c0-1,0.1-3.4,0.3-7.3h-0.2l-7.2,25.6H220z\"></path>\n                    <path d=\"M274.5,45.4l-1.8-6.7h-11.6l-1.8,6.7h-10.6l11.6-35.7h12.8l11.8,35.7H274.5z M270.8,30.9l-1.5-5.8c-0.4-1.3-0.8-3-1.3-5   c-0.5-2.1-0.8-3.5-1-4.4c-0.1,0.8-0.4,2.2-0.9,4.1c-0.4,1.9-1.4,5.6-2.9,11.2H270.8z\"></path>\n                </g>\n                <g id=\"XMLID_12_\">\n                    <path fill=\"#0073BB\" d=\"M93.5,19.4c0,4-1.2,7-3.5,9.2c-2.3,2.2-5.7,3.2-10,3.2h-2.7v11.8h-9.6V8.1H80c4.5,0,7.9,1,10.1,2.9   C92.3,13,93.5,15.8,93.5,19.4z M77.3,24H79c1.4,0,2.6-0.4,3.4-1.2s1.3-1.9,1.3-3.4c0-2.4-1.3-3.6-4-3.6h-2.5V24z\"></path>\n                    <path fill=\"#0073BB\" d=\"M108.7,30.7v12.9h-9.6V8.1h11.7c9.7,0,14.5,3.5,14.5,10.5c0,4.1-2,7.3-6,9.6l10.4,15.5h-10.9l-7.5-12.9   H108.7z M108.7,23.5h1.8c3.4,0,5-1.5,5-4.5c0-2.4-1.6-3.7-4.9-3.7h-1.9V23.5z\"></path>\n                    <path fill=\"#0073BB\" d=\"M154.7,43.7l-1.8-6.7h-11.6l-1.8,6.7H129l11.6-35.7h12.8l11.8,35.7H154.7z M150.9,29.1l-1.5-5.8   c-0.4-1.3-0.8-3-1.3-5c-0.5-2.1-0.8-3.5-1-4.4c-0.1,0.8-0.4,2.2-0.9,4.1c-0.4,1.9-1.4,5.6-2.9,11.2H150.9z\"></path>\n                    <path fill=\"#0073BB\" d=\"M183.3,22.8h15.4V42c-4.2,1.4-8.8,2.1-13.7,2.1c-5.5,0-9.7-1.6-12.7-4.8c-3-3.2-4.5-7.7-4.5-13.6   c0-5.7,1.6-10.2,4.9-13.4s7.9-4.8,13.8-4.8c2.2,0,4.4,0.2,6.3,0.6c2,0.4,3.7,1,5.2,1.6l-3,7.5c-2.6-1.3-5.4-1.9-8.4-1.9   c-2.8,0-5,0.9-6.5,2.7c-1.5,1.8-2.3,4.4-2.3,7.8c0,3.3,0.7,5.9,2.1,7.6c1.4,1.7,3.4,2.6,6,2.6c1.4,0,2.7-0.1,3.9-0.4v-5.6h-6.3   V22.8z\"></path>\n                    <path fill=\"#0073BB\" d=\"M221.4,43.7L214.1,18h-0.2c0.3,4.4,0.5,7.8,0.5,10.2v15.4h-8.5V8.1h12.8l7.4,25.3h0.2l7.3-25.3h12.8v35.6   h-8.8V28.1c0-0.8,0-1.7,0-2.7c0-1,0.1-3.4,0.3-7.3h-0.2l-7.2,25.6H221.4z\"></path>\n                    <path fill=\"#0073BB\" d=\"M275.9,43.7l-1.8-6.7h-11.6l-1.8,6.7h-10.6l11.6-35.7h12.8l11.8,35.7H275.9z M272.1,29.1l-1.5-5.8   c-0.4-1.3-0.8-3-1.3-5c-0.5-2.1-0.8-3.5-1-4.4c-0.1,0.8-0.4,2.2-0.9,4.1c-0.4,1.9-1.4,5.6-2.9,11.2H272.1z\"></path>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n                <g>\n                </g>\n</svg>";
    var $Activation = "\n            <div class =\"pragma-activation-conf\">\n            \n                <div class=\"activation-conf-block-first\">\n                     <div id=\"pragma-first_svg_D\" class=\"block-first_svg\" style=\"\n    width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n    display: block;\n\">\n                     ".concat($$SVG, "\n                     </div>\n                     <div class=\"block-first_desc\" style = \"margin-top: 20px; text-align: center\">").concat(description, "</div>          \n                </div>\n            \n            \n                 <div class=\"activation-conf-block-second\" style=\"margin-top: 20px\">\n                        <div class=\"block-second-login\">\n                             ").concat(blocksecondloginlabel, "\n                             ").concat(blocksecondlogininput, "\n                        </div>                        \n                       \n                        <div class=\"block-second-phone\" style=\"margin-top: 10px\">\n                             ").concat(blocksecondphonelabel, "\n                             ").concat(blocksecondphoneinput, "\n                        </div>\n                 \n                 </div>\n            \n            \n                 <div class=\"activation-conf-block-three\">\n                 \n                 ").concat(btn_agree, "\n                    </div>            \n                     \n         \n            </div>\n            ");
    return $($Activation);
  };

  var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.bind_actions = function () {
      _this3.$$BtnGetCode.on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var check, phone, email, page2;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                check = _this3.checkEnterNumber();

                if (!check) {
                  _context6.next = 15;
                  break;
                }

                phone = _this3.$$inputPhone.val() * 1;
                email = _this3.$$inputLogin.val();
                _context6.prev = 4;
                _context6.next = 7;
                return _this3.send_message(phone);

              case 7:
                _context6.next = 11;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](4);

              case 11:
                page2 = new smsConf(email, phone);

                _this3.$.parent().html(page2.$);

                _context6.next = 16;
                break;

              case 15:
                alert.showAlertModal('Вы ввели некорректный номер телефона', false, 2500);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[4, 9]]);
      })));
    };

    this.send_message = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(phone) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return REQUEST({
                  flag: 'create_code',
                  phone: phone,
                  name_user: $('.pragma-login-input').val()
                });

              case 2:
                return _context7.abrupt("return", _context7.sent);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x4) {
        return _ref7.apply(this, arguments);
      };
    }();

    this.checkEnterNumber = function () {
      var val = _this3.$$inputPhone.val();

      val = val * 1;
      val = String(val);
      return val.length > 5;
    };
  };

  var Confirmation = /*#__PURE__*/function () {
    function Confirmation() {
      var _this2 = this;

      _classCallCheck(this, Confirmation);

      this.install = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5($widget_code) {
          var flag,
              $checkUser,
              Act,
              destroyFlag,
              _modal,
              _args5 = arguments;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  flag = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : true;
                  Activation.$widget_code = $widget_code;
                  $checkUser = false;
                  _context5.prev = 3;
                  _context5.next = 6;
                  return Confirmation.check_user();

                case 6:
                  $checkUser = _context5.sent;
                  $checkUser = JSON.parse($checkUser);
                  _context5.next = 12;
                  break;

                case 10:
                  _context5.prev = 10;
                  _context5.t0 = _context5["catch"](3);

                case 12:
                  if ($checkUser) {
                    _context5.next = 18;
                    break;
                  }

                  Act = new Activation(_this2.name, _this2.is_phone);
                  destroyFlag = false;
                  _modal = new Modal({
                    class_name: 'modal-install-integration',
                    init: function () {
                      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4($modal_body) {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                Confirmation.stopFlag = false;
                                $modal_body.append(Act.$).css({
                                  width: '330px',
                                  height: '345px'
                                }).trigger('modal:loaded').trigger('modal:centrify');

                              case 2:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4);
                      }));

                      function init(_x3) {
                        return _init.apply(this, arguments);
                      }

                      return init;
                    }(),
                    destroy: function destroy() {
                      if (destroyFlag) return true;
                      M.ConfirmModal({
                        title: 'Прервать текущую операцию?',
                        message: 'Операция будет прервана, все изменения не сохраняться',
                        accept_text: 'Прервать',
                        cancel_text: 'Отмена',
                        accept_func: function accept_func() {
                          destroyFlag = true;

                          _modal.destroy();
                        }
                      });
                      return false;
                    }
                  });
                  _context5.next = 25;
                  break;

                case 18:
                  if (!flag) {
                    _context5.next = 23;
                    break;
                  }

                  _context5.next = 21;
                  return Confirmation.install_integration($widget_code, $checkUser, flag);

                case 21:
                  _context5.next = 24;
                  break;

                case 23:
                  $checkUser && $('input[name="api_key"]').val($checkUser || '');

                case 24:
                  $("#save_".concat($widget_code)).trigger('click');

                case 25:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[3, 10]]);
        }));

        return function (_x2) {
          return _ref5.apply(this, arguments);
        };
      }();

      this._name = Confirmation.name_;
      this._email = Confirmation.email;
      this._is_phone = Confirmation.is_phone;
    }

    _createClass(Confirmation, [{
      key: "name",
      get: function get() {
        return this._name;
      }
    }, {
      key: "surname",
      get: function get() {
        return this._surname;
      }
    }, {
      key: "middle_name",
      get: function get() {
        return this._middle_name;
      }
    }, {
      key: "email",
      get: function get() {
        return this._email;
      }
    }, {
      key: "is_phone",
      get: function get() {
        return this._is_phone;
      }
    }]);

    return Confirmation;
  }();

  Confirmation.stopFlag = false;
  Confirmation.check_user = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var user;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            user = AMOCRM.constant('user');
            _context8.next = 3;
            return REQUEST({
              flag: 'check_user',
              user_id: user.id,
              phone: user.phone,
              name_user: user.name_user
            });

          case 3:
            return _context8.abrupt("return", _context8.sent);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  Confirmation.install_integration = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(widget_code, api_key, flag) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              try {
                $('input[name="api_key"]').val(api_key);
                $('#save_pmstorage').trigger('click'); // $.ajax({
                //     url: "/api/v4/widgets/" + widget_code,
                //     method: "POST",
                //     data: {
                //         // id: Pid,
                //         api_key: api_key
                //     },
                //     success: function (response) {
                //         if (flag) {
                //             if (response.settings_template) {

                alert.showAlertModal('Интеграция Установлена успешно', true, 1500); //             }
                //         }
                //
                //     }
                // })
              } catch ($e) {
                alert.showAlertModal('Произошла ошибка, обратитесь в службу поддержки', false, 2500);
              }

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x5, _x6, _x7) {
      return _ref9.apply(this, arguments);
    };
  }();

  Confirmation.set = function (data_widget) {
    Confirmation.data_widget = data_widget;
  };

  Confirmation.inMarket = function (isExistUser) {
    var $USER = AMOCRM.constant('user');
    Confirmation.name_ = $USER.name;
    Confirmation.email = $USER.login;
    Confirmation.phone_in_amo = $USER.personal_mobile;
    Confirmation.is_phone = isExistUser;
  };

  var _exports = {};
  _exports.Confirmation = Confirmation;
  return _exports;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 811:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(273), __webpack_require__(143)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($, conf) {
  var pragma_url = 'https://smart-dev.pragma.by/api/integrations/store/amocrm/';
  var codeAmo = 'pmstorage';
  var code = "PragmaStorage";
  var Name = "AMO Склад";

  function send(script, method, data) {
    data.account_id = AMOCRM.constant('account').id;
    data.user_id = AMOCRM.constant('user').id;
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

  var BoardInfo = /*#__PURE__*/function () {
    function BoardInfo(info) {
      var _this = this;

      _classCallCheck(this, BoardInfo);

      this.Enable = function () {
        if (_this.info.module.isFree) {
          BoardInfo._activation = 'Ваша лицензия активирована';
          BoardInfo._status = 'Активно';
          BoardInfo._pay = 'срок действия не ограничен';

          _this.__render();

          _this.BoardGreen();

          $('.info_pragma-activation').css({
            color: "#0f5132"
          });
          $('.info_pragma-status').css({
            color: "#0f5132"
          });
        } else {
          BoardInfo._activation = 'Ваша лицензия активирована';
          BoardInfo._status = 'Активно';
          BoardInfo._pay = _this.renderDate(_this.info.shutdown_time);

          _this.__render();

          _this.BoardGreen();

          $('.info_pragma-activation').css({
            color: "#0f5132"
          });
          $('.info_pragma-status').css({
            color: "#0f5132"
          });
        }
      };

      this.renderDate = function (unix_timestamp) {
        var a = new Date(unix_timestamp * 1000);
        var months = ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июня', 'Июля', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = "0" + a.getHours();
        var min = "0" + a.getMinutes();
        var sec = "0" + a.getSeconds();
        return date + ' ' + month + ' ' + year + ' ' + hour.substr(-2) + ':' + min.substr(-2) + ':' + sec.substr(-2);
      };

      this.isAmocrm_enable = function () {
        _this.info.amocrm_enable ? _this.isPragma_enable() : _this.isAmoEnableOff();
      };

      this.isPragma_enable = function () {
        _this.info.is_pragma_active ? " " : _this.noActive();
      };

      this.isAmoEnableOff = function () {
        BoardInfo._activation = 'Ваша лицензия активирована';
        BoardInfo._status = 'не активен в Amo';
        BoardInfo._pay = _this.renderDate(_this.info.shutdown_time); // BoardInfo._noActive = this.renderDate(this.info.pragma_time_enable)

        _this.__render();

        _this.BoardRed();

        $('.info_pragma-activation').css({
          color: "#0f5132"
        });
        $('.info_pragma-status').css({
          color: "#842029"
        });
      };

      this.noActive = function () {
        BoardInfo._activation = 'Ваша лицензия активирована';
        BoardInfo._status = 'не активен в PRAGMA';
        BoardInfo._pay = _this.renderDate(_this.info.shutdown_time); // BoardInfo._noActive = this.renderDate(this.info.pragma_time_enable)

        _this.__render();

        _this.BoardRed();

        $('.info_pragma-activation').css({
          color: "#0f5132"
        });
        $('.info_pragma-status').css({
          color: "#842029"
        });
      };

      this.UserDisable = function () {
        BoardInfo._activation = 'Ваша лицензия не активирована';
        BoardInfo._status = 'не активен';

        _this.__render();

        _this.BoardRed();

        $('.info_pragma-activation').css({
          color: "#842029"
        });
        $('.info_pragma-status').css({
          color: "#842029"
        });
        $('.info_pragma-pay_to').hide();
      };

      this.BoardRed = function () {
        $('.board-info_pragma').attr('style', "    border: 1px solid #842029;\n" + "    background-color: #f8d7da;\n" + "    padding: 10px;\n");
      };

      this.BoardGreen = function () {
        $('.board-info_pragma').attr('style', "    border: 1px solid #0f5132;\n" + "    background-color: #d1e7dd;\n" + "    padding: 10px;\n");
      };

      this.__render = function () {
        var $activation = BoardInfo._activation;
        var $status = BoardInfo._status;
        var $data_pay = BoardInfo._pay ? BoardInfo._pay : 'hidden';
        var noActive = BoardInfo._noActive ? BoardInfo._noActive : 'hidden';
        var html = "<div class = \"board-info_pragma\">   \n                    <div class=\"info_pragma-activation\">\n                        <div class=\"pragma-activation-label_one\" style=\"\n    display: inline-block;font-size: 18px; font-weight: bold;\n\">\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F:</div>\n                        <div class=\"pragma-activation-label_two\" style=\"\n    display: inline-block;\n\">".concat($activation, "</div>\n                    </div>\n                    \n                    <div class=\"info_pragma-status\">\n                        <div class=\"info_pragma-status-label_one\" style=\"\n    display: inline-block;font-size: 18px; font-weight: bold;\n\">\u0421\u0442\u0430\u0442\u0443\u0441:</div>\n                        <div class=\"info_pragma-status-label_two\" style=\"\n    display: inline-block;\n\">").concat($status, "</div>\n                    </div>\n                    \n                    <div class=\"info_pragma-no_active\" ").concat(noActive, ">\n                        <div class=\"no_active-label_one\" style=\"\n    display: inline-block;font-size: 18px; font-weight: bold;\n\">\u041D\u0435\u0430\u043A\u0442\u0438\u0432\u0435\u043D:</div>\n                        <div class=\"no_active-label_one\" style=\"\n    display: inline-block;\n\">").concat(noActive, "</div>\n                    </div>\n                    \n                    \n                    <div class=\"info_pragma-pay_to\">\n                        <div class=\"pay_to-label_first\" style=\"\n    display: inline-block;font-size: 18px; font-weight: bold;\n\">\u041E\u043F\u043B\u0430\u0447\u0435\u043D \u0434\u043E:</div>\n                        <div class=\"pay_to-label_two\" style=\"\n    display: inline-block;\n\">").concat($data_pay, "</div>\n                    </div>                                \n                </div>");
        BoardInfo._activation = '';
        BoardInfo._status = '';
        BoardInfo._pay = '';
        BoardInfo._noActive = '';
        $('.info_pragmatika_board').html($(html));
      };

      this._info = info;
    }

    _createClass(BoardInfo, [{
      key: "info",
      get: function get() {
        return this._info;
      }
    }]);

    return BoardInfo;
  }();

  var ModulesInfo = /*#__PURE__*/function () {
    function ModulesInfo($settings_modal, info) {
      _classCallCheck(this, ModulesInfo);

      _initialiseProps.call(this);

      this._info = info;
      this.Render();
      ModulesInfo._$settings_modal = $settings_modal !== null && $settings_modal !== void 0 ? $settings_modal : ModulesInfo._$settings_modal;
      this._info.license ? this.UserActive() : this.UserNotActive();
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
      key: "info",
      get: function get() {
        return this._info;
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

  ModulesInfo._instances = [];
  ModulesInfo.ACTIVE = 1;
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
            return _context2.abrupt("return", info.is_pragma_active);

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
            return _context4.abrupt("return", info.is_active);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  ModulesInfo.Update = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            ModulesInfo.info().then( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(res) {
                var $token;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        conf.Confirmation.set(res);
                        _context5.prev = 1;
                        _context5.next = 4;
                        return conf.Confirmation.check_user();

                      case 4:
                        $token = _context5.sent;
                        $token = JSON.parse($token);
                        ModulesInfo.savetoken($token);
                        _context5.next = 12;
                        break;

                      case 9:
                        _context5.prev = 9;
                        _context5.t0 = _context5["catch"](1);
                        ModulesInfo.savetoken('');

                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[1, 9]]);
              }));

              return function (_x2) {
                return _ref5.apply(this, arguments);
              };
            }());

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  ModulesInfo.savetoken = function ($token) {
    $token && $('input[name="api_key"]').val($token || '');
    $("#save_".concat(codeAmo)).trigger('click');
  };

  ModulesInfo.isActiveUser = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var info;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return ModulesInfo.info();

          case 2:
            info = _context7.sent;
            return _context7.abrupt("return", info.isActiveUser);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  ModulesInfo.isLicense = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var info;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return ModulesInfo.info();

          case 2:
            info = _context8.sent;
            return _context8.abrupt("return", info.license);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  ModulesInfo.info = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(integration_id) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!ModulesInfo._info) {
                _context9.next = 2;
                break;
              }

              return _context9.abrupt("return", ModulesInfo._info);

            case 2:
              _context9.next = 4;
              return Integrations.short_info(integration_id);

            case 4:
              ModulesInfo._info = _context9.sent;
              return _context9.abrupt("return", ModulesInfo._info);

            case 6:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x3) {
      return _ref8.apply(this, arguments);
    };
  }();

  ModulesInfo.disableGeneral = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(integration_id) {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              Integrations.disable(integration_id);
              _context10.next = 3;
              return delay(2000);

            case 3:
              ModulesInfo.instances.forEach(function (instance) {
                return instance.disable();
              });
              ModulesInfo._instances = [];

            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x4) {
      return _ref9.apply(this, arguments);
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
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11($settings_modal, integration_id) {
      var info, instance;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return delay(2000);

            case 2:
              _context11.next = 4;
              return ModulesInfo.info(integration_id);

            case 4:
              info = _context11.sent;
              instance = new ModulesInfo($settings_modal, info);

              ModulesInfo._instances.push(instance);

              return _context11.abrupt("return", instance);

            case 8:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x5, _x6) {
      return _ref10.apply(this, arguments);
    };
  }();

  ModulesInfo.AmoMessage = function () {
    var error_params = {
      header: Name,
      text: "Ваша лицензия истекла"
    };
    AMOCRM.notifications.show_message_error(error_params);
  };

  ModulesInfo.AmoMessageUser = function () {
    var error_params = {
      header: Name,
      text: "Активируйте интеграцию в настройках"
    };
    AMOCRM.notifications.show_message_error(error_params);
  };

  ModulesInfo.isActivePragma = function (self) {
    var active = false;

    try {
      active = AMOCRM.constant("widgets").widgets.all[self.params.widget_code].active;
    } catch (e) {}

    return self.params.widget_active !== 'N' && (self.params.login !== '' && typeof self.params.login !== 'undefined' || self.params.widget_active === 'Y' || active);
  };

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this._disabled = false;

    this.Render = function () {
      var $_html = " <div class = \"modules_info_pragmatika\">\n                    <div class=\"info_pragmatika_board\"></div>\n                    <div class=\"info_pragmatika_btn\" style=\"    margin-top: -53px;  margin-right: 15px;  float: right;\">  \n                                 <button type=\"button\" class=\"button-input button-input_blue\" id = \"activate_user_btn\" \n                                 tabindex=\"\"  style=\"\n    border: 1px solid #6c757d;\n    background: transparent;\n    color: #6c757d ;\n\">\n                            <span class=\"button-input-inner \">\n                                <span class=\"button-input-inner__text\" style=\"\n    font-family: 'PT Sans Caption',serif;\n\">\u0410\u041A\u0422\u0418\u0412\u0418\u0420\u041E\u0412\u0410\u0422\u042C</span>\n                            </span>\n                        </button>\n                    </div>\n                \n                </div>\n            ";

      if ($('.board-info_pragma').length < 1) {
        $('.widget-settings__desc-space').append($($_html));
        var $btnActive = $('#activate_user_btn');
        $btnActive.hover(function () {
          $btnActive.css({
            background: "#6c757d",
            color: "#fff"
          });
        }, function () {
          $btnActive.css({
            background: "transparent",
            color: "#6c757d"
          });
        });
        $btnActive.on('click', function () {
          conf.Confirmation.inMarket(false);
          conf.Confirmation.set(_this2.info);
          var M_confir = new conf.Confirmation();
          M_confir.install(codeAmo, false).then(function (r) {
            return r;
          });
        });
      }
    };

    this.UserNotActive = function () {
      var Board = new BoardInfo(_this2.info);
      Board.UserDisable();
    };

    this.UserActive = function () {
      $('.info_pragmatika_btn').hide();
      var Board = new BoardInfo(_this2.info);
      _this2.info.is_active ? Board.Enable() : Board.isAmocrm_enable();
    };

    this.disable = function () {
      // this.$.remove()
      _this2._disabled = true;
    };
  };

  return {
    ModulesInfo: ModulesInfo
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 273:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__273__;

/***/ }),

/***/ 464:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__464__;

/***/ }),

/***/ 651:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__651__;

/***/ }),

/***/ 821:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__821__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(504);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;