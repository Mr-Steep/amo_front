define([
    'jquery',
    '../temp/modal.js',
    '../temp/load.js',
    '../root/function.js',
    '../root/Catalog.js',
    '../root/Consumption.js',


], function (
    $,
    modal,
    load,
    functions,
    Catalog,
    Consumption,
) {
    const templates = load.TwigWrapper._templates

    // class AllStocks {
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


    class itemStock {
        _$
        _address
        _name
        _id
        _$Btn
        _$BtnCH
        _account_id
        static Active_Sore_id
        static Twig

        constructor(id, name, address) {
            this._id = id
            this._name = name
            this._address = address
            this._account_id = AMOCRM.constant('account').id
            this._$ = itemStock.__render(this._id, name, address)
            this._$Btn = this._$.find('.stock_el-class')
            this._$BtnCH = this._$.find('.stock_el_change_btn')
            this.bind_action()
        }

        bind_action = () => {

            this.$Btn.on('click', async () => {
                itemStock.Active_Sore_id = this.id
                Catalog.Catalog.Store_id = this.id
                Consumption.ActiveStock = this.id
                functions.Settings.ActiveStock = this.id
                await this._R_change_select_stock()
                this.active()
                this.$BtnCH.show()
                $('.header_products').trigger('click')
            })

            this.$BtnCH.on('click', async () => {
                ModalCreateStock.Twig = templates.ModalCreateStock
                const _ModalCreateStock = new ModalCreateStock(true, {
                    id: this.id,
                    btncancel: "Удалить",
                    btnsave: "Сохранить"
                })
                ModalCreateStock.ActiveID = this.id
                const obj = {
                    title: 'Изменить склад',
                    class_name: 'change_stock-modal',
                }
                modal.ConfirmModal(obj)
                $('.change_stock-modal').find('.modal-body__inner').append(_ModalCreateStock.$);
                this.fill()
            })

        }

        get $() {
            return this._$
        }

        get $Btn() {
            return this._$Btn
        }

        get $BtnCH() {
            return this._$BtnCH
        }

        get id() {
            return this._id
        }


        get name() {
            return this._name
        }

        get address() {
            return this._address
        }

        _R_change_select_stock = async () => {
            await functions.req_setting({
                stock_id: this.id,
                flag: 'change_active_stock'
            })
        }

        fill = () => {
            $('#stock_name').val(this.name)
            $('#stock_address').val(this.address)

        }

        active = () => {
            $('.stock_el-class').css('color', 'black')
            this.$Btn.css('color', '#0582E4')
            $('.stock_el_change_btn').hide()
        }

        off_btn = () => {
            this.$BtnCH.hide()
            this.$Btn.css('color', 'black')
        }


        static __render = (id, name, address) => $(itemStock.Twig.render({id, name, address}))

    }


    class ModalCreateStock {
        _$
        _$BtnCancel
        _id
        _flag
        _$BtnSave
        _$InputName
        _$InputAddress
        static ActiveID
        static Twig

        constructor(flag, data) {
            this._id = data.id
            this._$ = ModalCreateStock.__render(data)
            this._flag = flag
            this._$BtnCancel = this._$.find('.btn_ooter_cancel')
            this._$BtnSave = this._$.find('.btn_ooter_save')
            this._$InputName = this._$.find('#stock_name')
            this._$InputAddress = this._$.find('#stock_address')
            this.bind_action()
        }

        bind_action = () => {
            this.$BtnCancel.on('click', async () => {
                switch (this.flag) {
                    case true:
                        const obj = {
                            title: "Удалить склад?",
                            class_name: 'delete_stock-modal',
                            accept_text: 'Удалить',
                            cancel_text: 'Отмена',
                            accept_func: async () => {
                                await functions.request({
                                    flag: 'delete_stock',
                                    id_stock: ModalCreateStock.ActiveID
                                })
                                $('.modal-body__close').trigger('click')
                                const id = 'el_stock_' + this.id
                                $(`#${id}`).remove()
                            },

                        }
                        modal.ConfirmModal(obj)
                        break;
                    case false:
                        $('.modal-body__close').trigger('click')
                        break;

                }
            })
            this.$BtnSave.on('click', async () => {
                const X = $('.modal-body__close')
                switch (this.flag) {
                    case true:
                        const data_new = {
                            store_id: ModalCreateStock.ActiveID,
                            address: this.$InputAddress.val(),
                            title: this.$InputName.val()
                        }
                        await functions.request({
                            flag: 'change_stock',
                            data: data_new
                        })

                        const new_chan_stock_el = new itemStock(data_new.store_id, data_new.title, data_new.address)
                        const id = 'el_stock_' + this.id
                        $(`#${id}`).replaceWith(new_chan_stock_el.$)
                        X.trigger('click')

                        break;
                    case false:
                        const create_stock = await functions.request({
                            flag: 'create_stock',
                            data: this.give_data_input()
                        })
                        const parse_data = JSON.parse(create_stock)
                        const new_stock_el = new itemStock(parse_data.store_id, parse_data.title, parse_data.address)
                        $('.add_stock_pragma').before(new_stock_el.$)
                        new_stock_el.off_btn();
                        X.trigger('click')

                        break;
                }

            })


        }

        get $() {
            return this._$
        }

        get $InputName() {
            return this._$InputName
        }

        get $InputAddress() {
            return this._$InputAddress
        }

        get flag() {
            return this._flag
        }

        get $BtnSave() {
            return this._$BtnSave
        }

        get $BtnCancel() {
            return this._$BtnCancel
        }

        get id() {
            return this._id
        }

        give_data_input = () => {
            return {
                address: this.$InputAddress.val(),
                title: this.$InputName.val()
            }
        }


        static  __render = (data) => $(ModalCreateStock.Twig.render({data}))

    }


    class AddStock {
        _$
        static Twig
        _$BTNADDStock

        constructor() {
            this._$ = AddStock.__render()
            this._$BTNADDStock = this._$.find('.footer_add_stocks')
            this.bind_actions()


        }

        bind_actions = () => {
            this.$.on('click', async () => {
                ModalCreateStock.Twig = templates.ModalCreateStock
                const _ModalCreateStock = new ModalCreateStock(false, {
                    btncancel: "Отмена",
                    btnsave: "Сохранить"
                })

                const obj = {
                    title: "Добавить Склад",
                    class_name: 'create_stock-modal',

                }
                modal.ConfirmModal(obj)
                const $create_stock_modal = $('.create_stock-modal')
                $create_stock_modal.find('.modal-body__inner').append(_ModalCreateStock.$);
                $create_stock_modal.find('.modal-body').css('width', '500px')

            })
        }

        get $() {
            return this._$
        }


        static __render = () => $(AddStock.Twig.render())

    }


    class LeftPage {
        _$
        _$Btn_All_Stock
        static Twig
        static ALlStock = []


        constructor() {

            this._$ = LeftPage.__render()
            this._$Btn_All_Stock = this._$.find('.footer_stock_btn_all_stock')
            this.render_Stock().then(r => r)
            this.bind_actions()

        }

        bind_actions = () => {
            this.$Btn_All_Stock.on('click', async () => {
                itemStock.Active_Sore_id = -1
                Catalog.Catalog.Store_id = -1
                Consumption.ActiveStock = -1
                functions.Settings.ActiveStock = -1
                await functions.req_setting({
                    stock_id: -1,
                    flag: 'change_active_stock'
                })
                this.active()

                $('.header_products').trigger('click')
            })
        }

        get $() {
            return this._$
        }

        get $Btn_All_Stock() {
            return this._$Btn_All_Stock
        }


        render_Stock = async () => {
            AddStock.Twig = await templates.AddStock
            const res = await functions.request({
                flag: 'get_stock'
            })

            const parse_res = JSON.parse(res)
            let arr = []
            LeftPage.ALlStock = parse_res
            for (const Key in parse_res) {
                if (parse_res.hasOwnProperty(Key)) {
                    const el = new itemStock(parse_res[Key].id, parse_res[Key].title, parse_res[Key].address)
                    arr.push(el.$)
                }
            }
            const ADDStock = new AddStock()
            arr.push(ADDStock.$)

            $('.place_FOR_stock').html(arr)
            const $__id = '#id_stock_' + functions.Settings.ActiveStock
            $($__id).trigger('click')


        }

        active = () => {
            $('.stock_el-class').css('color', 'black')
            this.$.css('color', '#0582E4')
            $('.stock_el_change_btn').hide()
        }

        static __render = () => $(LeftPage.Twig.render())

    }

    return {
        LeftPage: LeftPage,
        itemStock: itemStock,
        // AllStocks: AllStocks,
    }
});