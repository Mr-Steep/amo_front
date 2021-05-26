define([
        'jquery',
        '../temp/load.js',
        '../temp/modal.js',
        '../root/function.js',

    ], function (
    $,
    load,
    modal,
    functions,
    ) {

        const templates = load.TwigWrapper._templates

        class DiscountSVG {
            _discount
            _id
            _data

            constructor(data) {
                this._data = data
                this._id = this._data.id
                this._discount = this._data.discount
                this._$ = DiscountSVG._render(this._id, this._discount)
                this.bins_actions()
            }

            bins_actions = () => {

                this.$.on('click', () => {
                    if (!Discount.Twig) {
                        Discount.Twig = templates.PragmaDiscount
                    }
                    // const _id = 'products_id_' + this.id
                    // $(`.pragma_checkbox-leads_storage[id="${_id}"]`).trigger('click')

                    const $Discount = new Discount(this.data)

                    const obj = {
                        title: 'Скидка',
                        class_name: 'modal-discount_pragma',
                    }
                    modal.ConfirmModal(obj)

                    const ModalDiscount = $('.' + obj.class_name)
                    ModalDiscount.find('.modal-body__inner').append($Discount.$)

                    ColonLeads.RecUnt(ModalDiscount, {'width': '300px', 'border-radius': '10px'})


                })


                if (this.discount) {
                    this.$.on({
                        mouseenter: function () {
                            const $SVG = $(this).find('svg')
                            const $Label = $(this).find('.discount_label-value')
                            $SVG.attr('width', 42)
                            $SVG.attr('height', 48)
                            $Label.show()
                        },
                        mouseleave: function () {
                            const $Label = $(this).find('.discount_label-value')

                            const $SVG = $(this).find('svg')
                            $SVG.attr('width', 14)
                            $SVG.attr('height', 16)
                            $Label.hide()
                        }
                    });
                }

            }

            get $() {
                return this._$
            }

            get id() {
                return this._id
            }

            get discount() {
                return this._discount
            }

            get data() {
                return this._data
            }

            static _render = (id, discount) => {

                switch (discount) {
                    case 0:
                        return $(templates.discountNullSVG.render({id}))
                    default:
                        return $(templates.discountLeadsSvg.render({id, discount}))
                }
            }
        }

        class DiscountAll {
            static Twig

            static Products
            static getIsChecked
            static ExportProduct
            _$$INPUT
            _Prod
            _$$BUTTON

            constructor() {

                this._$ = DiscountAll._render()
                this._$$INPUT = this._$.find('#header_input-all')
                this._$$BUTTON = this._$.find('#pragma_discount_all-apply')
                this._Prod = DiscountAll.ExportProduct
                this.bind_action()

            }

            bind_action = () => {


                this.$$BUTTON.on('click', async () => {
                    this.pressBtn()
                })


                this.$$INPUT.on('focusout', () => {
                    const val = this.$$INPUT.val()
                    const newVal = val.replace(/[\D]+/g, '')
                    const _discount = functions.Settings.FractionNumbers(newVal)
                    this.$$INPUT.val(newVal * 1 > 99 ? 99 : _discount)
                })

            }

            pressBtn = () => {
                const obj = {
                    title: 'Скидка для всех товаров',
                    message: 'Все данные, как-либо связанные с выбранными элементами, будут изменены',
                    class_name: 'modal-leads-pragma_discount_all',
                    accept_text: 'Применить',
                    cancel_text: 'Отмена',
                    accept_func: async () => {
                        await this.PressBtnApply()
                    }
                }
                modal.ConfirmModal(obj)
            }


            get $() {
                return this._$
            }

            get Prod() {
                return this._Prod
            }

            get $$INPUT() {
                return this._$$INPUT
            }

            get $$BUTTON() {
                return this._$$BUTTON
            }


            PressBtnApply = async () => {
                const idS_arr = DiscountAll.getIsChecked
                const $$APPLY = $('#pragma_discount_all-apply')


                $$APPLY.trigger('button:load:start')
                let newDiscount = this.$$INPUT.val() * 1
                const Answer = await this.change_price(newDiscount, idS_arr)
                const $rest = Answer === '1'
                switch ($rest) {
                    case true:
                        $('.modal-body__close').trigger('click')
                        modal.alert.showAlertModal('OK', true, 2000)
                        $$APPLY.trigger('button:load:stop')
                        await RenderPage()

                        break;
                    default:
                        modal.alert.showAlertModal('Ошибка', false, 2000)
                        $$APPLY.trigger('button:load:stop')

                        break;
                }


            }


            searchFullPrice = (id) => {
                let fullPrice = 0

                const _products = this.Prod
                for (const Key in _products) {
                    if (_products.hasOwnProperty(Key)) {
                        if (_products[Key].id === id) {
                            fullPrice = _products[Key].full_price == 0 ? _products[Key].selling_price : _products[Key].full_price
                        }
                    }

                }
                return fullPrice
            }

            unique = arr => {
                let result = [];
                for (let str of arr) {
                    if (!result.includes(str)) {
                        result.push(str);
                    }
                }
                return result;
            }
            change_price = async (discount, iDs) => {

                const idSarr = iDs
                let arr_change_exports = []
                for (const item in idSarr) {
                    let _id_ = idSarr[item]
                    const $INPUT = $(`#${_id_}`).find('.el-price_sail').find('input')
                    const price = this.searchFullPrice(_id_)
                    const priceNew = functions.calculation_discount(price, discount)
                    $INPUT.val(priceNew)
                    arr_change_exports.push({
                        export_id: _id_,
                        full_price: price,
                        price_new: priceNew,
                        discount: discount
                    })
                }

                return await functions.request({
                    flag: 'save_discount_all',
                    update_exports: arr_change_exports
                })
            }


            saveDiscountId = async (id, discount) => {
                const full_price = this.searchFullPrice(id)

                return await functions.request({
                    flag: 'save_discount',
                    export_id: id,
                    discount: discount,
                    full_price: full_price
                })
            }

            static _render = () => $(DiscountAll.Twig.render())

        }

        class Discount {
            static Twig


            _$
            _$$Input
            _$$Apply
            _$$InputDisc
            _$$FullPrice
            _discount
            _full_price_first
            _selling_price
            _price
            _id


            constructor(data) {
                this._data = data
                this._id = this._data.id
                this._discount = functions.Settings.FractionNumbers(this._data.discount)
                this._price = functions.Settings.FractionNumbers(this._data.selling_price)
                this._full_price_first = this._data.full_price ? this._data.full_price : this._data.selling_price
                this._$ = Discount._render(this._discount, this._price, functions.Settings.FractionNumbers(this._full_price_first))
                this._$$Input = this._$.find('.pragma_discount-input_product')
                this._$$Apply = this._$.find('#pragma_discount_apply')
                this._$$FullPrice = this._$.find('#discount_full_price')
                this._$$InputDisc = this._$.find('.pragma_discount-footer_input')
                this.bind_action()

            }

            bind_action = () => {

                this.$$InputDisc.on('focusout', () => {
                    const Price = this.$$InputDisc.val() * 1
                    const fullPrice = this.$$FullPrice.val() * 1
                    let disc_full_price = functions.calculation_disc_full_price(Price, fullPrice)

                    if (Price < 0) {
                        disc_full_price = 0.00
                    }
                    this.$$Input.val(disc_full_price)
                })


                this.$$Apply.on('click', async () => {
                    const discount = this.$$Input.val() * 1

                    const resAnswer = await this.saveDiscountId(this.id, discount, this.$$FullPrice.val())

                    const $res = resAnswer === '1'
                    switch ($res) {
                        case true:
                            $('.modal-body__close').trigger('click')
                            modal.alert.showAlertModal('Скидка изменина', true, 2000)

                            const ValDiscount = functions.Settings.FractionNumbers(this.$$InputDisc.val())
                            const $INPUT = $(`#${this.id}`).find('.el-price_sail').find('input')
                            $INPUT.val(ValDiscount)
                            await functions.request({
                                flag: 'update_selling_price',
                                export_id: this.id,
                                selling_price: ValDiscount
                            })

                            break;
                        default:
                            modal.alert.showAlertModal('Ошибка', false, 2000)
                            break;
                    }


                    await RenderPage()
                })

                this.$$FullPrice.on('focusout', () => {
                    this.$$Input.trigger('focusout')
                })


                this.$$Input.on('focusout', () => {
                    const val = this.$$Input.val()
                    const newVal = val.replace(/[\D]+/g, '')
                    const _discount = functions.Settings.FractionNumbers(newVal)
                    this.$$Input.val(newVal * 1 > 99 ? 99 : _discount)
                    let price = this.$$FullPrice.val() * 1
                    const ValDesc = functions.calculation_discount(price, _discount > 99 ? 99 : _discount)
                    this.$$InputDisc.val(ValDesc)

                })
            }


            get $() {
                return this._$
            }


            get $$Input() {
                return this._$$Input
            }

            get $$FullPrice() {
                return this._$$FullPrice
            }

            get $$InputDisc() {
                return this._$$InputDisc
            }

            get id() {
                return this._id
            }

            get $$Apply() {
                return this._$$Apply
            }

            get discount() {
                return this._discount
            }

            get selling_price() {
                return this._selling_price
            }

            get price() {
                return this._price
            }

            saveDiscountId = async (id, discount, full_price) => {
                return await functions.request({
                    flag: 'save_discount',
                    export_id: id,
                    discount: discount,
                    full_price: full_price
                })
            }

            static _render = (discount, discount_price, full_price) => $(Discount.Twig.render({
                discount,
                discount_price,
                full_price
            }))
        }

        class SelectProducts {
            static SelectedProducts = []


            static FOLLOW_CHECK = (id, check) => {
                switch (check) {
                    case true:
                        SelectProducts.add(id)
                        break;
                    case false:
                        SelectProducts.del(id)
                        break;
                }
                SelectProducts.follow()

            }

            static addAll = (Ids) => {
                SelectProducts.SelectedProducts = Ids

            }

            static delAll = () => {
                SelectProducts.SelectedProducts = []

            }

            static add = (id) => {
                SelectProducts.SelectedProducts.push(id)
            }

            static del = (id) => {
                const ARR = []
                SelectProducts.SelectedProducts.forEach(function (item) {
                    if (id !== item) {
                        ARR.push(item)
                    }
                })
                SelectProducts.SelectedProducts = ARR
            }

            static follow = () => {

                const AlQuantityProducts = $('.pragma_checkbox-leads_storage').length
                const _LEN = LineChangeAll.getIsChecked().length

                switch (AlQuantityProducts) {
                    case 1:
                        break;
                    case 2:
                        SelectProducts._F_two(_LEN, AlQuantityProducts)
                        break;
                    case 3:
                        SelectProducts._F_three(_LEN, AlQuantityProducts)

                        break;
                    default:
                        SelectProducts._F_default(_LEN, AlQuantityProducts)
                        break;

                }

            }

            static _F_three = (LEN, AlQuantityProducts) => {

                const $$CheckALL = $('#products_all')

                switch (LEN) {
                    case 0:
                        SelectProducts.CustomCheck_isSHOW(false)
                        ColonLeads.LinaAll_HIDE()
                        $$CheckALL.prop("checked", false)
                        break;

                    case 1:
                        SelectProducts.CustomCheck_isSHOW(false)
                        ColonLeads.LinaAll_HIDE()
                        $$CheckALL.prop("checked", false)
                        let _id = 'pragma_line_' + SelectProducts.SelectedProducts[0]
                        $(`#${_id}`).show()
                        break;
                    case 2:
                        SelectProducts.CustomCheck_isSHOW(true)
                        ColonLeads.LinaAll_SHOW()
                        break;
                    case 3:
                        SelectProducts.CustomCheck_isSHOW(false)
                        $$CheckALL.trigger('click')
                        break;
                }
            }

            static _F_two = (LEN, AlQuantityProducts) => {
                if (LEN === AlQuantityProducts) {
                    SelectProducts.CustomCheck_isSHOW(false)
                    $('#products_all').trigger('click')
                } else if (LEN === AlQuantityProducts - 1) {
                    $('#products_all').prop("checked", false)
                    ColonLeads.LinaAll_HIDE()
                    let _id = 'pragma_line_' + SelectProducts.SelectedProducts[0]
                    $(`#${_id}`).show()
                }
            }
            static _F_default = (LEN, AlQuantityProducts) => {
                if (LEN <= 1) {
                    SelectProducts.CustomCheck_isSHOW(false)
                    ColonLeads.LinaAll_HIDE()
                    let _id = 'pragma_line_' + SelectProducts.SelectedProducts[0]
                    $(`#${_id}`).show()

                } else if (LEN === 2) {
                    SelectProducts.CustomCheck_isSHOW(true)
                    ColonLeads.LinaAll_SHOW()
                } else if (LEN === AlQuantityProducts - 1) {
                    $('#products_all').prop("checked", false)
                    SelectProducts.CustomCheck_isSHOW(true)

                } else if (LEN === AlQuantityProducts) {
                    SelectProducts.CustomCheck_isSHOW(false)
                    $('#products_all').trigger('click')
                }
            }

            static CustomCheck_isSHOW = (isShow) => {
                const $CustomCheck = $('.pragma-custom_checkbox')  // кастомный чекбокс
                switch (isShow) {
                    case true:
                        $CustomCheck.attr('style', '')
                        break;
                    case false:
                        $CustomCheck.hide()
                        break;
                }
            }


        }

        class Add_Position {
            _$
            _$InputQuantity
            _$InputPushSail
            _$BtnDel
            _product_id
            static Twig


            constructor(data) {
                this._id = data.id
                this._no = data.no
                this.article = data.article
                this.title = data.title
                this.quantity = functions.Settings.FractionNumbers(data.quantity)
                this._product_id = data.product_id
                this.purchase_price = functions.Settings.FractionNumbers(data.purchase_price)
                this.price_sail = functions.Settings.FractionNumbers(data.price_sail)
                this._$ = Add_Position.__render(this._id, this._no, this.article, this.title, this.quantity, this.purchase_price, this.price_sail, this._product_id)
                this._$BtnDel = this._$.find('.coming-table-delete')
                this._$InputQuantity = this._$.find('.coming-table-quantity-el input')
                this._$InputPushSail = this._$.find('.coming-table-purchase-el input')
                this.bind_actions()

            }

            bind_actions = () => {
                this.$BtnDel.on('click', () => {
                    let new_pos = $('.modal_coming-pragma').attr('data-change')
                    new_pos = new_pos === 'true';
                    switch (new_pos) {
                        case false:
                            this.$.remove();
                            break;
                        default:
                            const obj = {
                                title: "Удалить позицию?",
                                class_name: 'dell_position_coming-modal',
                                accept_text: 'Удалить',
                                cancel_text: 'Отмена',
                                accept_func: async () => {
                                    const res = await functions.request({
                                        flag: 'delete_position_coming',
                                        product_import_id: this.id
                                    })

                                    switch (res) {
                                        case true:
                                        case 'true':
                                            this.$.remove();
                                            modal.alert.showAlertModal('Товар удален', true, 1000)

                                            break;
                                        default:
                                            modal.alert.showAlertModal('Товар продан или зарезеривирован', false, 2000)
                                            break;
                                    }
                                    // ModalComing.footer_btn()

                                }
                            }
                            modal.ConfirmModal(obj)
                            break;
                    }

                    this.quant_cxot()

                })

                this.$InputQuantity.on('keypress', (e) => {
                    const KeyCode = e.charCode
                    if (KeyCode === 43 || KeyCode === 45) {
                        return false
                    }
                })

                this.$InputQuantity.on('input', () => {
                    ModalColumnLeads._value_();
                })
                this.$InputPurshSail.on('input', () => {
                    ModalColumnLeads._value_();
                })

                this.$InputPurshSail.on('keypress', (e) => {
                    const KeyCode = e.charCode
                    if (KeyCode === 43 || KeyCode === 45) {
                        return false
                    }
                })
                this.$InputQuantity.attr('min', '0')
                this.$InputPurshSail.attr('min', '0')

            }

            get $() {
                return this._$
            }

            get product_id() {
                return this._product_id
            }

            get id() {
                return this._id
            }

            get $BtnDel() {
                return this._$BtnDel
            }

            get $InputQuantity() {
                return this._$InputQuantity
            }

            get $InputPurshSail() {
                return this._$InputPushSail
            }

            quant_cxot = () => {
                $('.el_coming-table_coming').each(function (index) {
                    $(this).find('.coming-table-no-el').text(index + 1)
                });
            }


            static __render = (id, no, article, name, quantity, price_purchase, price_sail, product_id) =>
                $(Add_Position.Twig.render({
                    id,
                    no,
                    article,
                    name,
                    quantity,
                    price_purchase,
                    price_sail,
                    product_id
                }))


        }

        class DescProduct {
            static Twig
            static ElTwig
            static TwigProduct_deficit


            _$
            _$Body
            _$Deficit

            constructor(data) {
                this._$ = DescProduct.__render()
                this._$Body = this._$.find('.product-modal-sm-body')
                this._$Deficit = this._$.find('.product-modal-sm-body_deficit')
                this.fill_body(data).then(r => r)
            }

            get $() {
                return this._$
            }

            get $Body() {
                return this._$Body
            }

            get $Deficit() {
                return this._$Deficit
            }

            populate_an_array = (data) => {
                const array = data.export_details
                let arr_def = []
                let arr_story = []

                for (const I in array) {
                    if (array.hasOwnProperty(I)) {
                        switch (array[I].import_id) {
                            case null:
                                arr_def.push(array[I])
                                break;
                            default:
                                arr_story.push(array[I])
                                break;
                        }
                    }
                }

                return {
                    'true': arr_story,
                    'false': arr_def
                }

            }

            render_dificit = async (arr) => {
                let obj = DescProduct.TwigProduct_deficit
                const arr_dif = arr
                let price = 0
                for (const Key in arr_dif) {
                    if (arr_dif.hasOwnProperty(Key)) {
                        let OnDef = arr_dif[Key].quantity * 1
                        price += OnDef
                    }
                }
                const Deficit = $(obj.render({price}))
                this.$Deficit.html(Deficit)
            }

            fill_body = async (data) => {
                const arr_all = this.populate_an_array(data);
                const arr = arr_all.true
                let body_arr = []
                for (const arrKey in arr) {
                    if (arr.hasOwnProperty(arrKey)) {
                        const _data_ = {
                            stock: arr[arrKey].store_name,
                            no: arr[arrKey].export_id,
                            date: this.render_date(arr[arrKey].import_date),
                            quantity: functions.Settings.FractionNumbers(arr[arrKey].quantity),
                            price: functions.Settings.FractionNumbers(data.selling_price),
                            sum: functions.Settings.FractionNumbers(arr[arrKey].quantity * data.selling_price)
                        }
                        let body = DescProduct.ElTwig.render({_data_})
                        body_arr.push($(body))
                    }
                }
                this.$Body.html(body_arr)
                if (arr_all.false.length > 0) {
                    this.render_dificit(arr_all.false).then(r => r)
                }
            }

            render_date = (UNIX_timestamp) => {
                if (UNIX_timestamp) {
                    const W = UNIX_timestamp.split(' ')[0].split('-');
                    const t = '.';
                    return W[2] + t + W[1] + t + W[0];
                } else return 0;

            }

            static __render = () => $(DescProduct.Twig.render())
        }

        class LineChangeAll {
            static Twig

            _$
            _$$Discount
            _$$Delete

            constructor() {
                this._$ = LineChangeAll._render()
                this._$$Delete = this._$.find('.line_change_all-delete-pragma')
                this._$$Discount = this._$.find('.line_change_all-sail_discount')

                this.bind_actions()
            }

            bind_actions = () => {


                this.$$Discount.on('click', async () => {
                    this.PressDiscountAll()

                })


                this.$$Delete.on('click', () => {

                    const idSArr = LineChangeAll.getIsChecked()


                    const obj = {
                        title: 'Удалить товары',
                        message: 'Вы действительно хотите удалить выбранные элементы?',
                        class_name: 'modal-leads-delete_art',
                        accept_text: 'Удалить',
                        cancel_text: 'Отмена',
                        accept_func: async () => {

                            const $$Delete = $('#pragma_delete_')

                            $$Delete.trigger('button:load:start')
                            await functions.request({
                                flag: 'delete_export_many',
                                export_ids: idSArr
                            })

                            for (const item of idSArr) {
                                $(`.el-product_card[id="${item}"]`).remove()
                            }
                            $$Delete.trigger('button:load:stop')

                            await RenderPage()
                        }
                    }


                    modal.ConfirmModal(obj)
                })

            }

            get $() {
                return this._$
            }

            get $$Discount() {
                return this._$$Discount
            }

            get $$Delete() {
                return this._$$Delete
            }

            PressDiscountAll = () => {
                DiscountAll.getIsChecked = LineChangeAll.getIsChecked()

                if (!DiscountAll.Twig) {
                    DiscountAll.Twig = templates.PragmaDiscountALL
                }
                DiscountAll.Products = SelectProducts.SelectedProducts
                $('.table_leads-leads_storage_all').prop('checked', false)
                $('.pragma-custom_checkbox').trigger('click')

                const $DiscountAll = new DiscountAll()


                const obj = {
                    title: 'Скидка',
                    class_name: 'modal-discount_pragma_all',
                }
                modal.ConfirmModal(obj)

                const ModalDiscountAll = $('.' + obj.class_name)
                ModalDiscountAll.find('.modal-body__inner').append($DiscountAll.$)

                ColonLeads.RecUnt(ModalDiscountAll, {'width': '400px', 'border-radius': ' 10px'})


            }

            static getIsChecked = () => {
                let arr = []

                $('.el-product_card').each(function (index) {
                    let $item = $(this)
                    let isChecked = $item.find('.el-pragma_checkbox').find('input').is(':checked')
                    let _id = $(this).attr('id') * 1
                    isChecked ? arr.push(_id) : 0
                })

                return arr
            }

            static _render = () => $(LineChangeAll.Twig.render())


        }

        class LineChange {
            static Twig

            _data
            _id
            _discount
            _$$Delete
            _$$Discount
            _$

            constructor(data) {
                this._data = data
                this._discount = this._data.discount
                this._id = this._data.id
                this._$ = LineChange._render()
                this._$$Delete = this._$.find('.line_change-delete-pragma')
                this._$$Discount = this._$.find('.line_change-sail_discount')

                this.bind_action()
            }

            bind_action = () => {

                this.$$Discount.on('click', async () => {
                    if (!Discount.Twig) {
                        Discount.Twig = templates.PragmaDiscount
                    }
                    const _id = 'products_id_' + this.id
                    $(`.pragma_checkbox-leads_storage[id="${_id}"]`).trigger('click')

                    const $Discount = new Discount(this.data)

                    const obj = {
                        title: 'Скидка',
                        class_name: 'modal-discount_pragma',
                    }
                    modal.ConfirmModal(obj)

                    const ModalDiscount = $('.' + obj.class_name)
                    ModalDiscount.find('.modal-body__inner').append($Discount.$)

                    ColonLeads.RecUnt(ModalDiscount, {'width': '300px', 'border-radius': ' 10px'})


                })


                this.$$Delete.on('click', async () => {
                    const obj = {
                        title: 'Удалить товар',
                        message: 'Вы действительно хотите удалить выбранный элемент?',
                        class_name: 'modal-leads-delete_art',
                        accept_text: 'Удалить',
                        cancel_text: 'Отмена',
                        accept_func: async () => {
                            // const sum_all = $('.rigup-itog')
                            // sum_all.text((sum_all.text() * 1) - (this.$INPUT_sail_all.val() * 1))

                            await functions.request({
                                flag: 'delete_export',
                                export_id: this.id
                            })
                            await ColonLeads.request_get_products()
                            this.$.parent().parent().remove();
                            await RenderPage()
                        }
                    }

                    modal.ConfirmModal(obj)


                })

            }

            get $() {
                return this._$
            }

            get discount() {
                return this._discount
            }

            get id() {
                return this._id
            }

            get data() {
                return this._data
            }


            get $$Delete() {
                return this._$$Delete
            }

            get $$Discount() {
                return this._$$Discount
            }


            static _render = () => $(LineChange.Twig.render())

        }

        class ElCard {

            static Twig

            _$
            _article
            _category_id
            _selling_price
            _id
            _data
            _title
            _$INPUTQuantuty
            _$$DiscountLabel
            _$INPUTprice_selling
            _$INPUT_sail_all
            _$elName
            _$$checkbox
            _$details
            _$$checkbplace
            _$$Delete
            _$$Storage_plus
            _$$Storage_minus
            _$DiscountSVG

            flag = false


            constructor(data, flag) {
                this._data = data
                this._discount = this._data.discount
                this._title = this._data.title
                this._article = this._data.article
                this._id = this._data.id
                this._category_id = this._data.category_id
                this._balance = flag ? 1 : functions.Settings.FractionNumbers(this._data.balance)
                this._selling_price = functions.Settings.FractionNumbers(this._data.selling_price)
                this._$ = ElCard.__render(this._id, this._title, this._article, this._balance, this._selling_price, this._discount, functions.tbl())
                this._$INPUTQuantuty = this._$.find('.add_all_products')
                this._$INPUT_sail_all = this._$.find('.sail_all')
                this._$INPUTprice_selling = this._$.find('.add_price_products')
                this._$elName = this._$.find('.el-name')
                this._$details = this._$.find('.detail_coming-card')
                this._$$checkbox = this._$.find('.pragma_checkbox-leads_storage')
                this._$$DiscountLabel = this._$.find('.el-price_sail-discount_label')
                this._$$checkbplace = this._$.find('.prag_place-products_all')
                this._$$Delete = this._$.find('.el-pragma_lead_delete')
                this._$$Storage_plus = this._$.find('.pragma_storage-minus')
                this._$$Storage_minus = this._$.find('.pragma_storage-plus')
                this._$DiscountSVG = this._$.find('.el-pragma_discount_pr-label')

                this.details()
                this.bind_actions()

                const $disc = new DiscountSVG(this._data)
                this._$DiscountSVG.html($disc.$)
                // if (this._discount > 0) {
                //     this._$$DiscountLabel.show()
                // }
            }

            bind_actions = () => {


                this.$INPUTQuantuty.on('keypress', (e) => {
                    const KeyCode = e.charCode
                    if (KeyCode === 43 || KeyCode === 45) {
                        return false
                    }
                })
                this.$INPUTprice_selling.on('keypress', (e) => {
                    const KeyCode = e.charCode
                    if (KeyCode === 43 || KeyCode === 45) {
                        return false
                    }
                })


                this.$INPUTprice_selling.on('focusout', async () => {
                    await this.changePrice()
                })
                this.$INPUTQuantuty.on('focusout', async () => {
                    const val_input = this.$INPUTQuantuty.val()
                    if (this.balance != val_input) {
                        await functions.request({
                            flag: 'update_export_quantity',
                            export_id: this.id,
                            quantity: val_input * 1
                        })
                        ElCard.recount()
                        await RenderPage()
                    }

                })


                this.$INPUTQuantuty.attr('min', '0')
                this.$INPUTprice_selling.attr('min', '0')


                this.$$checkbox.on('click', () => {
                    const flag = this.$$checkbox.is(':checked')
                    const lengthProd = SelectProducts.SelectedProducts.length

                    switch (flag) {
                        case true:
                            if (lengthProd < 1) {
                                this.$$checkbplace.show()
                            } else {
                                $('.prag_place-products_all').hide()
                            }
                            break;
                        case false:
                            this.$$checkbplace.hide()
                    }

                    SelectProducts.FOLLOW_CHECK(this.id, flag)


                })
                this.$elName.on('click', async () => {
                    switch (this.flag) {
                        case false:
                            this.flag = true
                            this.$details.show()
                            break;

                        case true:
                            this.flag = false
                            this.$details.hide()
                            break;
                    }
                })

                this.$$Delete.on('click', () => {
                    const obj = {
                        title: 'Удалить товар',
                        message: 'Вы действительно хотите удалить выбранный элемент?',
                        class_name: 'modal-leads-delete_art',
                        accept_text: 'Удалить',
                        cancel_text: 'Отмена',
                        accept_func: async () => {

                            await functions.request({
                                flag: 'delete_export',
                                export_id: this.id
                            })
                            await ColonLeads.request_get_products()
                            await RenderPage()
                        }
                    }

                    modal.ConfirmModal(obj)
                })

                this.$$StoragePlus.on('click', () => {
                    this.$INPUTprice_selling.val(this.$INPUTprice_selling.val() * 1 + 1)
                })

                this.$$StorageMinus.on('click', () => {
                    this.$INPUTprice_selling.val(this.$INPUTprice_selling.val() * 1 - 1)
                })

                this.$$StoragePlus.on('mouseleave', async () => {
                    const val_input = this.$INPUTprice_selling.val() * 1
                    if (this.selling_price != val_input) {
                        await this.changePrice()
                    } else {
                    }

                })

                this.$$StorageMinus.on('mouseleave', async () => {
                    const val_input = this.$INPUTprice_selling.val() * 1
                    if (this.selling_price != val_input) {
                        await this.changePrice()
                    } else {
                    }
                })

            }


            get $() {
                return this._$
            }


            get $$checkbplace() {
                return this._$$checkbplace
            }


            get $$checkbox() {
                return this._$$checkbox
            }

            get $INPUTprice_selling() {
                return this._$INPUTprice_selling
            }

            get selling_price() {
                return this._selling_price
            }

            get title() {
                return this._title
            }

            get discount() {
                return this._discount
            }

            get $INPUTQuantuty() {
                return this._$INPUTQuantuty
            }

            get $elName() {
                return this._$elName
            }

            get article() {
                return this._article
            }

            get $$DiscountLabel() {
                return this._$$DiscountLabel
            }

            get $details() {
                return this._$details
            }

            get id() {
                return this._id
            }

            get data() {
                return this._data
            }

            get balance() {
                return this._balance
            }

            get category_id() {
                return this._category_id
            }

            get $$Delete() {
                return this._$$Delete
            }


            get $$StoragePlus() {
                return this._$$Storage_plus
            }

            get $$StorageMinus() {
                return this._$$Storage_minus
            }


            details = () => {
                if (this.data.export_details?.length) {
                    const desc_product_modal = new DescProduct(this.data)
                    this.$details.append(desc_product_modal.$)
                }
                this.Line_().then(r => r)
            }

            Line_ = async () => {
                const Line = new LineChange(this.data);
                this.$$checkbplace.html(Line.$)
            }

            changePrice = async () => {
                const val_input = this.$INPUTprice_selling.val()
                if (this.selling_price != val_input) {

                    const obj = {
                        title: 'Изменить элементы',
                        message: 'Все скидки, как-либо связанные с выбранными элементом, будут удалены. Восстановить примененные скидки будет невозможно.\n',
                        class_name: 'upd-desc-modal',
                        accept_text: 'Изменить',
                        cancel_text: 'Отмена',
                        accept_func: async () => {
                            await functions.request({
                                flag: 'update_export_selling_price',
                                export_id: this.id,
                                selling_price: val_input * 1
                            })


                            ElCard.recount()
                            await RenderPage()
                        },
                        destroy_func: () => {
                            this.$INPUTprice_selling.val(this.selling_price)
                        }
                    }

                    modal.ConfirmModal(obj)


                }
            }


            static recount = () => {
                let sum = 0
                $('.el-product_card').each(function () {
                    let quantity = functions.Settings.FractionNumbers($(this).find('.el-quantity').find('input').val())
                    let price = functions.Settings.FractionNumbers($(this).find('.el-price_sail').find('input').val())
                    let sum = functions.Settings.FractionNumbers(quantity * price)
                    $(this).find('.el-price_sail_all').find('input').val(sum)
                })


                $('.sail_all').each(function () {
                    const val = functions.Settings.FractionNumbers($(this).val())
                    sum += val * 1

                })
                sum = functions.Settings.FractionNumbers(sum)
                $('.rigup-itog').text(sum)

            }

            static __render = (id, name, article, quantity, price, discount, tbl) => $(templates.elCardProduct.render({
                id,
                name,
                article,
                quantity,
                price,
                discount,
                tbl
            }))

        }

        class ProductLeads {
            _$
            _title
            _data
            _background

            _$$CheckBox

            constructor(data) {
                ProductLeads._array = []
                this._data = data
                this._id = data.id
                this._url_icon = data.img_link
                this._title = data.title
                this._article = data.article
                this._balance = functions.Settings.FractionNumbers(data.balance)
                this._price_purchase = functions.Settings.FractionNumbers(data.price_purchase)
                this._selling_price = functions.Settings.FractionNumbers(data.selling_price)
                this._background = functions.tbl()
                this._$ = ProductLeads.__render(this._id, this._url_icon, this._title, this._article, this._balance, this._price_purchase, this._selling_price, this._background)
                this._$$CheckBox = this._$.find('.pragma-add_prodP')
                this.bind_actions()
            }

            bind_actions = () => {
                let i = 0;
                const color = '#F1FFF8'
                const _el = ModalColumnLeads._array.includes(this.data)
                if (_el) {
                    i = 1;
                    this.$.css('background', color)
                    this.ClickCheckBox()
                }

                this.$.on('click', () => {
                    this.$.off("mouseenter mouseleave");
                    const include_el = ModalColumnLeads._array.includes(this.data)
                    let selected = this.evenOrNo(i++)
                    switch (include_el) {
                        case true:
                            this.ClickCheckBox(false)

                            switch (selected) {
                                case true:
                                    this.$.css('background', color);
                                    break;
                                case false:
                                    const BackCol = this.background === "tr" ? '#f2f2f24d' : '#fff'
                                    this.$.css('background-color', BackCol)
                                    this.$.hover(
                                        function () {
                                            $(this).css('background-color', '#f8faff');
                                        }, function () {
                                            $(this).css('background-color', BackCol);
                                        }
                                    )

                                    for (const index in ModalColumnLeads._array) {
                                        if (ModalColumnLeads._array[index] == this.data) {
                                            delete ModalColumnLeads._array[index]
                                        }
                                    }
                                    break;
                            }
                            break;

                        case false:
                            switch (selected) {
                                case true:
                                    this.$.css('background', color);
                                    this.ClickCheckBox()
                                    ModalColumnLeads._array.push(this.data)
                                    break;
                            }
                    }
                    let arr = [];
                    for (const i in ModalColumnLeads._array) {
                        arr.push(ModalColumnLeads._array[i].title + " ")
                    }

                    $('.footer_product_add').html(arr)
                })

            }

            get $() {
                return this._$
            }

            get title() {
                return this._title
            }

            get background() {
                return this._background
            }

            get $$CheckBox() {
                return this._$$CheckBox
            }

            get data() {
                return this._data
            }

            evenOrNo = (i) => {
                const dat = i % 2
                return dat === 0

            }

            ClickCheckBox = (isCheck = true) => {
                this.$$CheckBox.attr('checked', isCheck)
            }


            static __render = (id, url_icon, name, article, quantity, price_purchase, price_sail, tbl) => $(templates.elModalProduct.render({
                id, url_icon, name, article, quantity, price_purchase, price_sail, tbl
            }))

        }

        class OrgComingArr {
            _$

            constructor(arr, Twig_el_table) {
                this._$ = OrgComingArr.render_btn(arr, Twig_el_table)
            }

            get $() {
                return this._$
            }

            static render_btn = (array) => {
                let arr = [];
                for (let i = 0; i < array.length; i++) {
                    let button_page = new OrgComing(array[i].page, array[i].products)
                    arr.push(button_page.$)
                }
                return arr
            }

        }

        class OrgComing {
            _$
            _Data
            static id_click
            static mode
            static LastBtn

            constructor(page, data) {
                this._id = ++page
                this._Data = data
                this._$ = OrgComing.__render(this._id)
                this.bind_action()
            }

            bind_action = () => {
                this.$.on('click', () => {
                    OrgComing.id_click = this.id
                    this.active_btn()

                    const arr = this.Data
                    let arr_new = [];
                    functions.setTbd(true)
                    for (const index in arr) {
                        let table = new ProductLeads(arr[index])
                        arr_new.push(table.$)

                    }
                    const LenArr = Btn_arr_Leads.AllElem.length
                    if (LenArr > 7) {
                        if (this.id === 1) {
                            OrgComing.mode = 1
                            this.clickFirst()
                            this.active_btn()
                        }
                        if (OrgComing.mode === 5) {
                            this.clickModeFive(this.id)
                            this.active_btn()

                        }

                        if (this.id === OrgComing.LastBtn) {
                            this.clickLast()
                            OrgComing.mode = 5
                            this.active_btn()

                        }

                        if (this.id === 5) {
                            OrgComing.mode = 5
                            this.clickFive()
                            this.active_btn()
                        }
                    } else if (LenArr === 7) {
                        if (this.id === 1) {
                            OrgComing.mode = 1
                            this.clickFirst()
                            this.active_btn()
                        } else {
                            this.clickLess(this.id)
                            this.active_btn()

                        }


                    }


                    $('.right_column-body').html(arr_new)
                })

            }

            get $() {
                return this._$
            }

            get Data() {
                return this._Data
            }

            get id() {
                return this._id
            }

            clickLess = (clickId) => {
                const FivBtn = new Btn_arr_Leads(Btn_arr_Leads.AllElem)
                FivBtn.$
                if (clickId > 4) {
                    FivBtn.clickModeLast()
                } else {
                    FivBtn.clickModeFirst()

                }

            }

            clickLast = () => {
                const FivBtn = new Btn_arr_Leads(Btn_arr_Leads.AllElem)
                FivBtn.$
                FivBtn.clickModeLast()
            }

            clickFirst = () => {
                const FivBtn = new Btn_arr_Leads(Btn_arr_Leads.AllElem)
                FivBtn.$
                FivBtn.clickModeFirst()
            }

            clickModeFive = (click) => {
                const FivBtn = new Btn_arr_Leads(Btn_arr_Leads.AllElem)
                FivBtn.$
                FivBtn.clickModeFive(click)

            }

            clickFive = () => {
                const FivBtn = new Btn_arr_Leads(Btn_arr_Leads.AllElem)
                FivBtn.$
                FivBtn.btnClickFive()
            }

            active_btn = () => {
                OrgComing.id_click = this.id

                $('.page_product_mod').each(function () {
                    $(this).find('span').find('span').css({color: '#C6CACE'})
                    $(this).hover(
                        () => {
                            $(this).find('span').find('span').css({color: '#313942'})
                        },
                        () => {
                            $(this).find('span').find('span').css({color: '#C6CACE'})
                        }
                    )
                })

                const el = $(`#pagination_pragma_btn_${this.id}`)
                el.off("mouseenter mouseleave");
                el.find('span').find('span').css({color: '#313942'})

            }

            static __render = (name) => {
                const btm =
                    `<button type="button" id=pagination_pragma_btn_${name} class="button-input    page_product_mod" tabindex=""  >
                     <span class="button-input-inner ">
                      <span class="button-input-inner__text">${name}</span>
                    </span>
                </button>`;
                return $(btm)
            }

        }

        class ElSection {
            _$
            _$BtnSection
            _product
            _id

            static background = true


            constructor(twig, data, products) {
                this._title = data.title;
                this._description = data.description;
                this._id = data.id
                this._product = products
                this._class = "el-pragma_modal-leads"
                this._$ = ElSection.__render(twig, this._title, this._description, this._id, this._class)
                this._$BtnSection = this._$.find('.el-pragma_modal-leads-cat')

                this.bind_action()
            }

            bind_action = () => {
                this.$.on('click', async () => {
                    this.Background()
                    const array_products = await this.create_products()
                    if (array_products.length > 0) {
                        const org_arr = functions.organization_array(array_products, 25)
                        const arr = new Btn_arr_Leads(org_arr)
                        $('.right_column-footer').html(arr.$)
                        $('.pragma_pragma_pagination_leads').find('.page_product_mod:first').trigger('click')
                    } else {
                        const tovNo = `<div style="
    margin: 50px 0 0 350px;
    font-size: 25px;
">Товаров не существует</div>`
                        $('.right_column-body').html(tovNo)

                    }

                })

            }

            get $BtnSection() {
                return this._$BtnSection
            }

            get $() {
                return this._$
            }

            get id() {
                return this._id
            }

            get product() {
                return this._product
            }


            Background = () => {

                $('.el-pragma_modal-leads').each(function () {

                    $(this).css({"background-color": "#fff"})
                    $(this).hover(
                        () => {
                            $(this).css({"background-color": '#fbfbfb'})
                        },
                        () => {
                            $(this).css({"background-color": '#fff'})
                        }
                    )
                })
                const el = $(`#el_rc_${this.id}`)
                el.off("mouseenter mouseleave");
                el.css({"background-color": "#fbfbfb"})
            }


            static  BackgroundColor = ($OBJ, color) => {
                const style = "background-color: " + color + ";"
                $OBJ.attr('style', style)
            }


            create_products = async () => {
                const new_arr = [];
                const arr_pro = this.product
                for (const ind in arr_pro) {
                    const __id = arr_pro[ind].category_id
                    switch (__id) {
                        case this.id:
                            new_arr.push(arr_pro[ind])
                            break;
                    }
                }
                return new_arr
            }


            static __render = (twig, name, description, id, _class) => $(twig.render({name, description, id, _class}))
        }

        class ModalColumnLeads {

            _$
            _account_id
            _$add_all_producnts
            _$place_name
            _$input
            _Place_body
            ___switch__
            _$Close
            _$AllProduct

            static Coming = false
            static _array
            static status

            constructor(twig, __switch__) {
                ModalColumnLeads._array = []
                this.___switch__ = __switch__
                this._$ = ModalColumnLeads.__render(twig)
                this._account_id = AMOCRM.constant('account').id
                this._$Close = this._$.find('#lead_id_close-pragma_stock')
                this._$AllProduct = this._$.find('.pragma-leads-top-all-label')
                this.fill_modal().then(r => r)
                this._$add_all_producnts = this._$.find('.add_all_producnts')
                this._$place_name = $('.colon_leads-placeForProducts')
                this._$input = this._$.find('#id_column-search')
                this._Place_body = this._$.find('.right_column-footer')
                this.bind_actions()
            }


            bind_actions = () => {

                this.$AllProduct.on('click', () => {
                    $('.el-pragma_modal-leads').css({'background-color': "#fff"})

                    const array_products = ColonLeads.products
                    const org_arr = functions.organization_array(array_products, 25)
                    const arr = new Btn_arr_Leads(org_arr)
                    this.Place_body.html(arr.$)
                    $('.page_product_mod:first').trigger('click');
                })


                this.$add_all_producnts.on('click', async () => {
                    this.$add_all_producnts.trigger('button:load:start')
                    this.$add_all_producnts.find('.button-input__spinner').find('span').css({
                        'border-top-color': '#fff',
                        'border-left-color': '#fff'
                    })
                    switch (this.__switch__) {
                        case true:
                            await this.TRUE();
                            break;
                        default:
                            await this.FALSE();
                            break
                    }

                    this.$add_all_producnts.trigger('button:load:stop');

                    await RenderPage()
                })


                this.$input.on('input', async () => {
                    $('.el-pragma_modal-leads').css({'background-color': '#2f455a'})
                    const data = this.$input.val()
                    const array_products = ColonLeads.products
                    let new_arr = []

                    for (const index in array_products) {
                        if (array_products.hasOwnProperty(index)) {
                            let article = array_products[index].article
                            let name = array_products[index].title
                            const $data = data.toLocaleLowerCase();
                            const $article = article.toLocaleLowerCase();
                            const $name = name.toLocaleLowerCase();

                            if ($article.includes($data) || $name.includes($data)) {
                                new_arr.push(array_products[index])
                            }
                        }

                    }
                    if (new_arr.length === 0) {
                        this.Place_body.html(' ')
                        const tNo = `<div style="
    margin: 50px 0 0 350px;
    font-size: 25px;
">В данном разделе товаров не существует</div>`

                        $('.right_column-body').html(tNo);
                    }
                    const org_arr = functions.organization_array(new_arr, 25)
                    const arr = new Btn_arr_Leads(org_arr)
                    this.Place_body.html(arr.$)
                    $('.page_product_mod:first').trigger('click');


                })

                this.$Close.on('click', () => {
                    this.$.parent().parent().parent().remove()
                })

            }


            get $() {
                return this._$
            }

            get Place_body() {
                return this._Place_body
            }

            get $place_name() {
                return this._$place_name
            }

            get $input() {
                return this._$input
            }

            get $AllProduct() {
                return this._$AllProduct
            }

            get $add_all_producnts() {
                return this._$add_all_producnts
            }


            get account_id() {
                return this._account_id
            }


            get $Close() {
                return this._$Close
            }


            get __switch__() {
                return this.___switch__
            }

            FALSE = async () => {
                const __Array = ModalColumnLeads._array
                const import_id = this.__switch__
                Add_Position.Twig = templates.PositionFORComing
                if (__Array.length > 0) {
                    for (const iPro in __Array) {

                        const PRODUCT = __Array[iPro]
                        let data_new = {
                            import_id: import_id,
                            product_id: PRODUCT.id,
                            quantity: 1,
                            purchase_price: 1
                        }
                        let new_pos = $('.modal_coming-pragma').attr('data-change')
                        new_pos = new_pos === 'true';
                        if (new_pos) {
                            const res = await functions.request({
                                flag: 'add_position_in_coming',
                                data: data_new
                            })
                            const data_res = JSON.parse(res)
                            data_new.id = data_res.product_import_id

                        }
                        const $no = $('.coming-table-no-el:last').text()
                        data_new.no = $no == "" ? 1 : $no * 1 + 1
                        data_new.title = PRODUCT.title
                        data_new.article = PRODUCT.article
                        const _position = new Add_Position(data_new)

                        $('.body-right_catalogs_elen').append(_position.$)
                        $('.modal-column_leads').remove()

                    }

                }
                ModalColumnLeads._value_()

            }


            TRUE = async () => {
                let NEW_arr = []
                const Array = ModalColumnLeads._array
                const answer_create_export = await functions.request({
                    flag: 'create_export',
                    stock_id: functions.Settings.ActiveStock,
                    data: this.get_data_d(Array),
                    entity_type: AMOCRM.data.current_entity,
                    entity_id: AMOCRM.data.current_card.id

                })
                const parse_export = JSON.parse(answer_create_export);
                ModalColumnLeads.status = parse_export[0].status_id
                for (const Key in Array) {
                    if (Array.hasOwnProperty(Key)) {

                        const obj = parse_export.find(item => item.product_id === Array[Key].id)
                        NEW_arr.push({
                            id: obj.id,
                            product_id: obj.product_id,
                            category_id: Array[Key].category_id,
                            article: Array[Key].article,
                            title: Array[Key].title,
                            balance: Array[Key].balance,
                            selling_price: Array[Key].selling_price,
                            status_id: obj.status_id,
                        })
                    }

                }

                functions.setTbd(true)

                let _products = []

                for (const i in NEW_arr) {
                    const elCard = new ElCard(NEW_arr[i], true)
                    _products.push(elCard.$)
                }

                let vibr_arr = []
                let new_arr = []

                for (const ind in ModalColumnLeads._array) {
                    vibr_arr.push(ModalColumnLeads._array[ind].id)
                }
                for (const i in ColonLeads.products) {
                    const __id = ColonLeads.products[i].id
                    switch (vibr_arr.includes(__id)) {
                        case true :
                            break;
                        case false:
                            new_arr.push(ColonLeads.products[i])
                    }
                }

                ColonLeads.products = new_arr


                this.$place_name.append(_products)
                $('.modal-column_leads').remove()

                ElCard.recount()
                await ColonLeads.status_leads(ModalColumnLeads.status)
            }


            static _value_ = () => {
                $('.el_coming-table_coming').each(function () {
                    const QUANTITY = $(this).find('.coming-table-quantity-el').find('input')
                    let data_QUANTITY = functions.Settings.FractionNumbers(QUANTITY.val())
                    QUANTITY.val(data_QUANTITY)

                    const PRICE = $(this).find('.coming-table-purchase-el').find('input')
                    let $fo_PRICE = functions.Settings.FractionNumbers(PRICE.val())
                    PRICE.val($fo_PRICE)
                });


            }

            get_data_d = (array) => {
                let arr = []
                for (const Key in array) {
                    if (array.hasOwnProperty(Key)) {
                        arr.push({
                            product_id: array[Key].id,
                            quantity: 1,
                            selling_price: array[Key].selling_price
                        })
                    }
                }
                return arr
            }

            fill_modal = async () => {
                const section = await this.create_section()
                this.$.find('.left_column-section').html(section)
                const all_files = functions.organization_array(ColonLeads.products, 25)
                const arr = new Btn_arr_Leads(all_files)
                this.Place_body.html(arr.$)
                $('.page_product_mod:first').trigger('click');

            }


            create_section = async () => {
                const new_arr = []
                const arr = JSON.parse(await this.request_section_GET())
                const twig_section = templates.rightcatalog
                for (const i in arr) {
                    const data = {
                        title: arr[i].title,
                        description: arr[i].description,
                        id: arr[i].id
                    }
                    let section = new ElSection(twig_section, data, ColonLeads.products)
                    new_arr.push(section.$)
                }
                return new_arr
            }

            static Posit = async () => {
                await ColonLeads.request_get_products();
                let arr = []
                let arr_id = [];
                $('.el_coming-table_coming').each(function () {
                    let $id = $(this).attr('data-product_id')
                    arr_id.push($id * 1)
                })

                const $data = ColonLeads.products
                for (const K in $data) {
                    const _$id = $data[K].id
                    if (!arr_id.includes(_$id)) {
                        arr.push($data[K])
                    }
                }
                ColonLeads.products = arr
            }

            request_section_GET = async () => {
                return await functions.request({
                    flag: 'section_get',
                    account_id: this.account_id,
                })
            }

            static __render = twig => $(twig.render())
        }

        class Btn_arr_Leads {
            _$
            _$Prev
            _$Next
            _$Input
            _$placeBtn
            _$AllBtn
            static AllElem
            static counter

            constructor(arr) {
                Btn_arr_Leads.AllElem = arr
                this._$ = Btn_arr_Leads.__render('leads')
                this._$placeBtn = this._$.find('.pragma_pagination-pages_pragma')
                this._$Prev = this._$.find('.pragma_pagination_prev')
                this._$Next = this._$.find('.pragma_pagination_next')
                this._$Input = this._$.find('#pragma_input_quantity_stock')
                OrgComing.LastBtn = arr.length
                this._$AllBtn = Btn_arr_Leads.render_btn(arr)
                this.btnRender()
                this.bind_actions()
            }

            get $() {
                return this._$
            }

            get $Prev() {
                return this._$Prev
            }

            get $Next() {
                return this._$Next
            }

            get $Input() {
                return this._$Input
            }

            get $AllBtn() {
                return this._$AllBtn
            }

            get $placeBtn() {
                return this._$placeBtn
            }


            bind_actions = () => {

                $('body').on('keyup', (evenTwo) => {
                        if (evenTwo.ctrlKey) {

                            switch (evenTwo.keyCode) {
                                case 39:
                                    this.$Next.trigger('click')
                                    break;

                                case 37:
                                    this.$Prev.trigger('click')
                                    break;
                            }
                        }
                    }
                )


                this.$Input.on('change', () => {
                    const value = this.$Input.val()
                    let parse_data = ColonLeads.products
                    const org_cat = functions.organization_array(parse_data, value)
                    const btn = new Btn_arr_Leads(org_cat)
                    $('.right_column-footer').html(btn.$)
                    $('.pragma_pragma_pagination_leads').find('.page_product_mod').first().trigger('click')
                    const el = $(".pragma_pragma_pagination_leads").find('#pragma_input_quantity_stock').parent()
                    el.find('button').find('span').text(value)
                    el.find('ul li').attr('class', 'control--select--list--item')
                    el.find(`ul li[data-value="${value}"]`).attr('class', 'control--select--list--item  control--select--list--item-selected')
                })

                this.$Prev.on('click', () => {
                    const all_btn = this.$AllBtn.length
                    let num = OrgComing.id_click
                    let id_next

                    if (num == 1) {
                        id_next = all_btn
                    } else {
                        id_next = num - 1
                    }
                    const id_ = '#pagination_pragma_btn_' + id_next
                    $(id_).trigger('click')


                })

                this.$Next.on('click', () => {
                    const all_btn = this.$AllBtn.length
                    let num = OrgComing.id_click
                    let id_next

                    if (num == all_btn) {
                        id_next = 1
                    } else {
                        id_next = num + 1
                    }
                    const id_ = '#pagination_pragma_btn_' + id_next
                    $(id_).trigger('click')


                })

                this.$Prev.hover(
                    () => {
                        $('#path-prev_btn').css({'fill': '#4c8bf7'})
                    },
                    () => {
                        $('#path-prev_btn').css({'fill': 'black'})

                    }
                )

                this.$Next.hover(
                    () => {
                        $('#path-next_btn').css({'fill': '#4c8bf7'})
                    },
                    () => {
                        $('#path-next_btn').css({'fill': 'black'})

                    }
                )
            }

            btnRender = () => {
                this.$AllBtn.length > 6 ? this.btnMoreFive() : this.$placeBtn.html(this.$AllBtn)
            }


            btnMoreFive = () => {
                let len = this.$AllBtn.length
                let ARR
                const FirstFiveBtn = this.$AllBtn.slice(0, 5)
                const lastBtn = this.$AllBtn[len - 1]
                ARR = FirstFiveBtn
                ARR.push(Btn_arr_Leads.ellipsis());
                ARR.push(lastBtn)
                this.$placeBtn.html(ARR)
            }

            btnClickFive = () => {
                let arsV = [];
                const First = this.$AllBtn[0];
                const BtnActive = OrgComing.id_click - 1;

                const elem = this.$AllBtn.slice(BtnActive - 2, BtnActive + 3);
                const len_btn = this.$AllBtn.length
                switch (len_btn) {
                    case 8:
                        arsV.push(First);
                        arsV.push(Btn_arr_Leads.ellipsis());
                        arsV.push(elem);
                        arsV.push(this.$AllBtn[len_btn - 1]);
                        break
                    default:
                        arsV.push(First);
                        arsV.push(Btn_arr_Leads.ellipsis());
                        arsV.push(elem);
                        arsV.push(Btn_arr_Leads.ellipsis());
                        arsV.push(this.$AllBtn[len_btn - 1]);
                        break

                }

                $('.pragma_pagination-pages_pragma').html(arsV.flat())

            }


            clickModeLast = () => {
                let arr = []
                const len = this.$AllBtn.length
                const First = this.$AllBtn[0];
                const elm = this.$AllBtn.slice(len - 5, len);


                arr.push(First)
                arr.push(Btn_arr_Leads.ellipsis());
                arr.push(elm);
                $('.pragma_pagination-pages_pragma').html(arr.flat())
            }

            clickModeFirst = () => {
                let len = this.$AllBtn.length
                let ARR
                const FirstFiveBtn = this.$AllBtn.slice(0, 5)
                const lastBtn = this.$AllBtn[len - 1]
                ARR = FirstFiveBtn
                ARR.push(Btn_arr_Leads.ellipsis());
                ARR.push(lastBtn)
                $('.pragma_pagination-pages_pragma').html(ARR.flat())

            }

            clickModeFive = click => {

                let arr = []
                const len = this.$AllBtn.length
                const last = this.$AllBtn[len - 1]
                const First = this.$AllBtn[0];


                if (len - click <= 3) {
                    const elm = this.$AllBtn.slice(len - 5, len);
                    arr.push(First)
                    arr.push(Btn_arr_Leads.ellipsis());
                    arr.push(elm)

                } else if (click <= 4) {
                    const elm = this.$AllBtn.slice(0, 5);
                    arr.push(elm)
                    arr.push(Btn_arr_Leads.ellipsis());
                    arr.push(last)

                } else {

                    const elem = this.$AllBtn.slice(click - 3, click + 2);
                    arr.push(First)
                    arr.push(Btn_arr_Leads.ellipsis());
                    arr.push(elem)
                    arr.push(Btn_arr_Leads.ellipsis());
                    arr.push(last);
                }


                $('.pragma_pagination-pages_pragma').html(arr.flat())
            }

            static ellipsis = () => $("<div class=\"ellipsis_pragma_stock\"><span class=\"pagination-ellipsis\">...</span></div>")

            static render_btn = (array) => {
                let arr = [];
                for (let i = 0; i < array.length; i++) {
                    let button_page = new OrgComing(array[i].page, array[i].products)
                    arr.push(button_page.$)
                }
                return arr
            }

            static __render = _class_ => $(templates.PaginationPragma.render({_class_}))

        }

        class ColonLeads {

            _$
            _$BtnAddProduct
            _account_id
            _$$CheckAll
            _$$CustomCheckbox
            _$PlaceLine
            _$$discountAllLead

            _$$LeadsName
            _$$LeadsArticle
            _$$LeadsQuantity
            _$$LeadsPriceSail
            _$$LeadsPriceSum

            static active = false
            static idS = []
            static products = [];
            static status = [];
            static All_status = []
            static FlagSort = false
            static Data = []


            constructor(twig) {

                this._$ = ColonLeads.__render(twig)
                this._$BtnAddProduct = this._$.find('.add_product-colonLeads')
                this._account_id = AMOCRM.constant('account').id
                this._$$CheckAll = this._$.find('#products_all')
                this._$$CustomCheckbox = this._$.find('.pragma-custom_checkbox')
                this._$PlaceLine = this._$.find('.table_leads-LineAll')
                this._$$discountAllLead = this._$.find('#discount_all_lead')


                this._$$LeadsName = this._$.find('.table_leads-name')
                this._$$LeadsArticle = this._$.find('.table_leads-article')
                this._$$LeadsQuantity = this._$.find('.table_leads-quantity')
                this._$$LeadsPriceSail = this._$.find('.table_leads-price_sail')
                this._$$LeadsPriceSum = this._$.find('.table_leads-price_sum')


                this.fill_export().then(r => {
                    this.bind_action()
                })
                ElCard.recount()
                this.LineAll().then(r => r)
            }


            bind_action = () => {


                this.$$CustomCheckbox.on('click', () => {
                    SelectProducts.CustomCheck_isSHOW(false)
                    const $check = $('.pragma_checkbox-leads_storage');
                    $check.prop("checked", false)
                    SelectProducts.delAll()
                    this.$PlaceLine.hide()

                })

                this.$$CheckAll.on('click', () => {

                    const $check = $('.pragma_checkbox-leads_storage');

                    const flag = this.$$CheckAll.is(':checked')
                    switch (flag) {
                        case true:
                            $check.prop("checked", true)
                            SelectProducts.addAll(ColonLeads.idS)
                            this.$PlaceLine.show()
                            $('.prag_place-products_all').hide()

                            break;

                        case false:
                            $check.prop("checked", false)
                            SelectProducts.delAll()
                            this.$PlaceLine.hide()

                            break;

                    }

                })

                this.$BtnAddProduct.on('click', async () => {
                    const Twig_ModalColumn = templates.ModalColonLeads
                    const _ModalColumnLeads = new ModalColumnLeads(Twig_ModalColumn, true)
                    const obj = {
                        class_name: 'modal-column_leads',
                    }
                    modal.ConfirmModal(obj)

                    const $$MBD = $('.modal-column_leads').find('.modal-body')
                    $$MBD.html(_ModalColumnLeads.$)
                    $$MBD.css({
                        height: window.innerHeight - 130 + "px",
                        width: window.innerWidth - 152 + "px"
                    })
                    const $RightColumn = $('.right_column-body')

                    $RightColumn.css({
                        "height": window.innerHeight - 314
                    });

                    $$MBD.trigger('modal:loaded');
                    $$MBD.trigger('modal:centrify');
                    $$MBD.attr('id', 'column_leads_id_43')

                    const MSD = $('#column_leads_id_43')

                    MSD.on('mousedown', (event) => {
                        MSD.one('mouseup', (event) => {
                            let wModal = MSD.height()
                            const RightColumnDIV = $('.right_column-body')
                            RightColumnDIV.css({
                                "height": wModal - 182
                            });

                            RightColumnDIV.css({
                                "height": wModal - 182
                            });
                            const WidthDIV = RightColumnDIV.css('width').replace(/\D+/g, "")
                            $('.pragma_pagination__rows_leads ').css({
                                'margin-left': WidthDIV - 575 + "px"
                            })

                            MSD.trigger('modal:loaded');
                            MSD.trigger('modal:centrify');


                        })
                    })


                })

                this.$$discountAllLead.on('click', () => {
                    $('#products_all').trigger('click')
                    DiscountAll.Twig = templates.PragmaDiscountALL
                    this.DiscountAll()
                })


                this.$$LeadsName.on('click', () => {
                    this.SORT(this.$$LeadsName, 'title')
                })
                this.$$LeadsArticle.on('click', () => {
                    this.SORT(this.$$LeadsArticle, 'article')
                })
                this.$$LeadsQuantity.on('click', () => {
                    this.SORT(this.$$LeadsQuantity, 'balance')
                })
                this.$$LeadsPriceSail.on('click', () => {
                    this.SORT(this.$$LeadsPriceSail, 'selling_price')
                })
                this.$$LeadsPriceSum.on('click', () => {
                    this.SORT(this.$$LeadsPriceSum, 'sum')
                })


            }

            get $() {
                return this._$
            }

            get $$CheckAll() {
                return this._$$CheckAll
            }


            get $BtnAddProduct() {
                return this._$BtnAddProduct
            }

            get $$CustomCheckbox() {
                return this._$$CustomCheckbox
            }

            get $PlaceLine() {
                return this._$PlaceLine
            }

            get $$discountAllLead() {
                return this._$$discountAllLead
            }

            get $$LeadsName() {
                return this._$$LeadsName
            }

            get $$LeadsArticle() {
                return this._$$LeadsArticle
            }

            get $$LeadsQuantity() {
                return this._$$LeadsQuantity
            }

            get $$LeadsPriceSail() {
                return this._$$LeadsPriceSail
            }

            get $$LeadsPriceSum() {
                return this._$$LeadsPriceSum
            }

            SORT = ($OBJ, NAME_SORT) => {
                // this.delete_arrow()
                this.color($OBJ)

                let array_id_for_SORT = []

                $('.el-product_card').each(function () {
                    let _id = $(this).attr('id')
                    array_id_for_SORT.push(_id)
                })
                let arrow
                let DiscountAll = ColonLeads.Data
                let New_array = [];
                for (const product in array_id_for_SORT) {
                    const item = DiscountAll.find(item => item.id == array_id_for_SORT[product])
                    New_array.push(item)
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
                    case false :
                        ColonLeads.FlagSort = true
                        arrow = templates.ArrowDown.render()
                        break;
                    case true :
                        New_array = New_array.reverse()
                        ColonLeads.FlagSort = false
                        arrow = templates.ArrowUp.render()
                        break;
                }
                // $OBJ.append(arrow);

                let sort_array = []
                for (let i in New_array) {
                    if (New_array.hasOwnProperty(i)) {
                        const el = new ElCard(New_array[i], false)
                        sort_array.push(el.$)
                    }
                }
                $('.colon_leads-placeForProducts').html(sort_array)

                ElCard.recount()

            }

            delete_arrow = () => {
                $('.pragma_arrow_up').remove()
                $('.pragma_arrow_down').remove()
            }

            color = ($OBJ) => {
               const color = "rgba(133,145,165,.5)"
                $('.table_leads-name-label').css({color:color})
                $('.table_leads-article-label').css({color:color})
                $('.table_leads-quantity-label').css({color:color})
                $('.table_leads-price_sail-label').css({color:color})
                $('.table_leads-price_sum-label').css({color:color})
                $OBJ.find('div').css({color:"#6e747a"})
            }
            DiscountAll = () => {
                let discA = new LineChangeAll()
                discA.PressDiscountAll()
            }
            LineAll = async () => {
                LineChangeAll.Twig = templates.LineAll
                const LineAll = new LineChangeAll();
                this.$PlaceLine.html(LineAll.$)
            }
            fill_export = async () => {
                DescProduct.Twig = templates.ModalDescProduct
                DescProduct.ElTwig = templates.DetailsLeadsPost
                const arr = await functions.request({
                    flag: 'get_export',
                    entity_type: AMOCRM.data.current_entity,
                    entity_id: AMOCRM.data.current_card?.id,
                })
                DiscountAll.ExportProduct = JSON.parse(arr)

                DiscountAll.ExportProduct.length < 2 ? this.$$CheckAll.hide() : 0

                let status
                if (arr) {
                    const data_arr = JSON.parse(arr);

                    if (data_arr.length) {
                        let sum = 0
                        let new_arr = [];
                        let arr_id = [];
                        functions.setTbd(true)
                        ElCard.Twig = templates.elCardProduct
                        for (const dataKey in data_arr) {
                            if (data_arr.hasOwnProperty(dataKey)) {
                                status = data_arr[dataKey].status_id
                                arr_id.push(data_arr[dataKey].product_id)
                                ColonLeads.idS.push(data_arr[dataKey].id)
                                const data_ = {
                                    title: data_arr[dataKey].title,
                                    article: data_arr[dataKey].article,
                                    discount: data_arr[dataKey].discount,
                                    id: data_arr[dataKey].id,
                                    selling_price: data_arr[dataKey].selling_price,
                                    balance: data_arr[dataKey].quantity,
                                    full_price: data_arr[dataKey].full_price,
                                    category_id: data_arr[dataKey].category_id,
                                    export_details: data_arr[dataKey].export_details,
                                    sum: data_arr[dataKey].selling_price * data_arr[dataKey].quantity,
                                }
                                sum += (1 * data_arr[dataKey].selling_price)
                                ColonLeads.Data.push(data_)
                                const obj = new ElCard(data_, false)
                                new_arr.push(obj.$)
                            }

                        }
                        $('.colon_leads-placeForProducts').html(new_arr)
                        let ar2r = [];
                        for (const i in ColonLeads.products) {
                            const __id = ColonLeads.products[i].id
                            switch (arr_id.includes(__id)) {
                                case true :
                                    break;
                                case false:
                                    ar2r.push(ColonLeads.products[i])
                            }
                        }

                        ColonLeads.products = ar2r
                        await ColonLeads.status_leads(status)
                    }

                }


            }

            static LinaAll_SHOW = () => {
                $('.table_leads-LineAll').show()
            }
            static LinaAll_HIDE = () => {
                $('.table_leads-LineAll').hide()
            }
            static status_leads = async (status) => {

                const ar_statuses = ColonLeads.All_status
                const parse_status = JSON.parse(ar_statuses)
                ColonLeads.status = parse_status.find(item => item.id === status)

                if (ColonLeads.status) {
                    const $status = $('.leads-name_status')
                    let color = '';
                    switch (ColonLeads.status.id) {
                        // case  1:
                        //     color = '#FFDD87';
                        //     break;
                        case  2:
                            color = '#FF9D87';
                            break;
                        case  3:
                            color = '#BCFF87';
                            break;
                    }
                    $status.text(ColonLeads.status.title)
                    $status.attr('id', ColonLeads.status.id)
                    $status.css('background-color', color)
                }
                ElCard.recount()

            }
            static request_get_products = async () => {
                const data = await functions.request({
                    flag: 'products_get',
                    account_id: AMOCRM.constant('account').id,
                    store_id: functions.Settings.ActiveStock

                })
                ColonLeads.products = JSON.parse(data)
            }
            static RecUnt = ($OBJ, data) => {
                $OBJ.children().children().css(data)
                $OBJ.find('.modal-body')
                    .trigger('modal:loaded')
                    .trigger('modal:centrify')
            }
            static __render = (twig) => {
                return $(twig.render())
            }
        }

        let RenderPage = async () => {
            const flagin = true
            if (flagin) {
                const pmStorage = $('#pragmastoragetest')

                const Loader = $('.loader_pragma_id_left')
                const Block = $('.pragma_block_left')
                if (!ColonLeads.active) {
                    ColonLeads.active = true
                    Loader.show();
                    Block.show();

                }
                SelectProducts.SelectedProducts = []
                LineChange.Twig = templates.LineChangeLead
                DescProduct.TwigProduct_deficit = templates.product_deficit

                await ColonLeads.request_get_products()
                const req_setting = await functions.req_setting({
                    flag: 'get_all_settings'
                })

                const ReqParse = JSON.parse(req_setting);

                ColonLeads.All_status = JSON.stringify(ReqParse.statuses)
                functions.Settings._integer = ReqParse.fractional
                functions.Settings.ActiveStock = ReqParse.active_stock
                const twig_ColonLeads = templates.ColonLeads
                const _ColonLeads = new ColonLeads(twig_ColonLeads)
                pmStorage.html(_ColonLeads.$);


                Loader.hide();
                Block.hide();
                ColonLeads.active = false
            }
        }

        let RenderTemp = async (self) => {
            return await load.TwigWrapper.load_templates(self)
        }

        $('#save_and_close_contacts_link').on('click', () => {
            setTimeout(async () => {
                await RenderPage()
            }, 2500);


        })

        return {
            RenderTemp: async self => await RenderTemp(self),
            RenderPage: async () => await RenderPage(),
            ModalColumnLeads: ModalColumnLeads
        }


    }
);