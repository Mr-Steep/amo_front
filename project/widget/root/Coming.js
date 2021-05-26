define([
    'jquery',
    '../temp/load.js',
    '../temp/modal.js',
    '../root/function.js',
    '../root/LeftPage.js',
    '../root/ColonLeads.js',
    'lib/components/base/modal',


], function (
    $,
    load,
    modal,
    functions,
    LeftPage,
    ColonLeads,
    Modal
) {
    const templates = load.TwigWrapper._templates

    class AddPosition {
        _$
        _$InputQuantity
        _$InputPurshSail
        _$BtnDel
        _product_id
        static Twig


        constructor(data) {
            this._id = data.id
            this._no = data.no
            this._product_id = data.product_id
            this.article = data.article
            this.title = data.title
            this.quantity = functions.Settings.FractionNumbers(data.quantity)
            this.price_purchase = functions.Settings.FractionNumbers(data.price_purchase)
            this.price_sail = functions.Settings.FractionNumbers(data.price_sail)
            this._$ = AddPosition.__render(this._id, this._no, this.article, this.title, this.quantity, this.price_purchase, this.price_sail, this._product_id)
            this._$BtnDel = this._$.find('.coming-table-delete')
            this._$InputQuantity = this._$.find('.coming-table-quantity-el input')
            this._$InputPurshSail = this._$.find('.coming-table-purchase-el input')
            this.bind_actions()

        }

        bind_actions = () => {
            this.$BtnDel.on('click', () => {
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
            })

            this.$InputQuantity.on('keypress', (e) => {
                const KeyCode = e.charCode
                if (KeyCode === 43 || KeyCode === 45) {
                    return false
                }
            })

            this.$InputPurshSail.on('keypress', (e) => {
                const KeyCode = e.charCode
                if (KeyCode === 43 || KeyCode === 45) {
                    return false
                }
            })
            this.$InputQuantity.attr('min', '0')
            this.$InputPurshSail.attr('min', '0')


            this.$InputQuantity.on('input', () => {
                ModalComing._value_();
            })
            this.$InputPurshSail.on('input', () => {
                ModalComing._value_();
            })


        }

        get $() {
            return this._$
        }

        get id() {
            return this._id
        }

        get product_id() {
            return this._product_id
        }

        get $BtnDel() {
            return this._$BtnDel
        }

        get $InputQuantity() {
            return this._$InputQuantity
        }

        get $InputPurshSail() {
            return this._$InputPurshSail
        }


        static __render = (id, no, article, name, quantity, price_purchase, price_sail, product_id) =>
            $(AddPosition.Twig.render({
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

    class ModalComing {
        static Twig
        static No
        static flag_
        static Section = []
        static ArrId_del_position = []
        _$
        _account_id

        _$$AddPRODUCT
        _$Btn_delete_Coming
        _$Btn_add_Position
        _$InputArticle
        _$Quantity
        _$InputQuantity
        _$InputPosition
        _$InputPrice_sail
        _$Btn_add_Coming
        _$Section
        _$Unit
        _array_products
        _products
        _i
        _flag

        constructor(flag, id) {
            ModalComing.flag_ = flag
            ModalComing.ArrId_Add_position = []
            this._i = 1
            this._flag = flag
            this._id = id
            this._array_products = (Coming.AllProducts)
            this._account_id = AMOCRM.constant('account').id
            this._$ = ModalComing.__render(ModalComing.Section, this._id)
            this._$$AddPRODUCT = this._$.find('#btn_add-product')
            this._$Btn_add_Position = this._$.find('.modal_coming-add_position')
            this._$InputArticle = this._$.find('#id_footer-one-article')
            this._$InputPosition = this._$.find('#id_footer-one-position')
            this._$Quantity = this._$.find('#id_footer-last-quantity')
            this._$Section = this._$.find('#id_footer-one-section')
            this._$Unit = this._$.find('#id_footer-last-chan')
            this._$Btn_add_Coming = this._$.find('.modal_coming-save_coming');
            this._$Btn_delete_Coming = this._$.find('.modal_coming-delete_coming')
            this._$InputPrice_sail = this._$.find('#price_purchase_price_sale_coming')
            this._$InputQuantity = this._$.find('#id_footer-last-quantity')
            flag ? this._$Btn_delete_Coming.hide() : this._$Btn_delete_Coming.show()

            this.bind_action()

        }


        bind_action = () => {


            this.$$AddPRODUCT.on('click', async () => {
                await ColonLeads.ModalColumnLeads.Posit();
                const Twig_ModalColumn = templates.ModalColonLeads
                ColonLeads.ModalColumnLeads.Coming = true
                const _ModalColumnLeads = new ColonLeads.ModalColumnLeads(Twig_ModalColumn, this.id)
                const obj = {
                    class_name: 'modal-column_leads',
                }
                modal.ConfirmModal(obj)

                const $$MBD = $('.modal-column_leads').find('.modal-body')

                $$MBD.html(_ModalColumnLeads.$)
                $$MBD.attr('id', 'column_leads_id_45')
                $$MBD.css({
                    "height": window.innerHeight - 130 + "px",
                    "width": window.innerWidth - 152 + "px",
                    "min-width": "950px",
                    "min-height": "560px",
                })
                const $RightColumn = $('.right_column-body')
                $RightColumn.css({
                    "height": window.innerHeight - 314
                });

                const WidthDIV = $RightColumn.css('width')

                $('.pragma_pagination__rows_leads').css({
                    'margin-left': WidthDIV - 575 + "px"
                })

                $$MBD.trigger('modal:loaded');
                $$MBD.trigger('modal:centrify');
                ModalComing._value_()

                const MD = $('#column_leads_id_45')


                MD.on('mousedown', (event) => {
                    MD.one('mouseup', (event) => {
                        let wModal = $('#column_leads_id_45').height()

                        const RightColumnDIV = $('.right_column-body')
                        RightColumnDIV.css({
                            "height": wModal - 182
                        });
                        const WidthDIV = RightColumnDIV.css('width').replace(/\D+/g, "")
                        $('.pragma_pagination__rows_leads ').css({
                            'margin-left': WidthDIV - 575 + "px"
                        })


                        MD.trigger('modal:loaded');
                        MD.trigger('modal:centrify');


                    })
                })


            })


            this.$Quantity.on('input', () => {
                const valQ = this.$Quantity.val() * 1;
                switch (valQ) {
                    case 0:
                        this.$Quantity.val(1)
                        break;

                }
                ModalComing._value_()

            })


            this.$Btn_add_Coming.on('click', async () => {


                const CheckEnterDataCom = this.CheckEnterDataCom()

                switch (CheckEnterDataCom) {
                    case true:
                        let data_coming = await this.to_collect_data();
                        switch (this.flag) {
                            case true:
                                const answer_add = await functions.request({
                                    flag: "coming_add",
                                    account_id: this.account_id,
                                    data: data_coming
                                })
                                const parse_data = JSON.parse(answer_add)
                                modal.alert.showAlertModal('Поставка Добавлена', true, 1000)
                                setTimeout(() => $('.modal-body__close').trigger('click'), 1100)
                                Coming.fill_body().then(r => r)
                                const el_com = $('.body_el_coming');
                                data_coming.id_supply = parse_data.import_id
                                let table = new ElComing(data_coming, el_com.length + 1)
                                $('.place_el_table_coming').append(table.$);

                                this.$.parent().parent().parent().remove()

                                break;
                            case false:
                                const obj = {
                                    title: 'Сохранить изменения?',
                                    class_name: 'change_save_coming-modal',
                                    accept_text: 'Сохранить',
                                    cancel_text: 'Отмена',
                                    accept_func: async () => {
                                        const res_coming_change = await functions.request({
                                            flag: "coming_change",
                                            account_id: this.account_id,
                                            data: data_coming
                                        })

                                        let $las = JSON.parse(res_coming_change).code

                                        switch ($las) {
                                            case 804:
                                                modal.alert.showAlertModal('Часть товара отправлено клиенту', false, 2000)
                                                modal.alert.showAlertModal('Часть товара отправлено клиенту', false, 2000)
                                                break;
                                        }


                                        switch (res_coming_change) {
                                            case true:
                                            case 'true':
                                                const new_el = new ElComing(data_coming, ModalComing.No * 1)
                                                $(`.body_el_coming[id="${data_coming.id_supply}"]`).replaceWith(new_el.$)
                                                modal.alert.showAlertModal('Изменения Сохранены', true, 1000)
                                                setTimeout(() => $('.modal-body__close').trigger('click'), 1100)
                                                Coming.fill_body().then(r => r)

                                                break;
                                            case false :
                                                modal.alert.showAlertModal('Ошибка', false, 1000)

                                        }
                                    }
                                }
                                modal.ConfirmModal(obj)

                                break;

                        }
                        break;

                    case false:
                        modal.alert.showAlertModal('Введите данные', false, 1000)
                        break;
                }


            })

            this.$Btn_delete_Coming.on('click', async () => {
                const obj = {
                    title: "Удалить Поставку?",
                    class_name: 'dell_coming-modal',
                    accept_text: 'Удалить',
                    cancel_text: 'Отмена',
                    accept_func: async () => {
                        let res_del_com = await functions.request(
                            {
                                flag: 'coming_delete',
                                coming_id: this.id,
                                account_id: this.account_id,
                            })

                        switch (res_del_com) {
                            case true:
                            case 'true':
                                $('.modal-body__close').trigger('click')
                                modal.alert.showAlertModal('Удалено', true, 1000)
                                $(`.body_el_coming[id=${this.id}]`).remove()
                                break;
                            default:
                                modal.alert.showAlertModal('Удаление невозможно, в поставке есть товар', false, 2000)
                        }

                    }
                }
                modal.ConfirmModal(obj)
            })

        }


        get $() {
            return this._$
        }

        get $$AddPRODUCT() {
            return this._$$AddPRODUCT
        }

        get flag() {
            return this._flag
        }

        get i() {
            return this._i++
        }

        get $InputPrice_sail() {
            return this._$InputPrice_sail
        }

        get id() {
            return this._id
        }

        get products() {
            return this._products
        }

        get $InputQuantity() {
            return this._$InputQuantity
        }

        get array_products() {
            return this._array_products
        }

        get $Btn_add_Coming() {
            return this._$Btn_add_Coming
        }

        get $Btn_add_Position() {
            return this._$Btn_add_Position
        }

        get $Btn_delete_Coming() {
            return this._$Btn_delete_Coming
        }

        get $InputPosition() {
            return this._$InputPosition
        }

        get account_id() {
            return this._account_id
        }

        get $InputArticle() {
            return this._$InputArticle
        }

        get $Section() {
            return this._$Section
        }

        get $Quantity() {
            return this._$Quantity
        }

        get $Unit() {
            return this._$Unit
        }


        static _value_ = () => {
            $('.el_coming-table_coming').each(function () {
                const QUANTITY = $(this).find('.coming-table-quantity-el').find('input')
                let data_QUANTITY = functions.Settings.FractionNumbers(QUANTITY.val())
                QUANTITY.val(data_QUANTITY)

                const PRICE = $(this).find('.coming-table-purchase-el').find('input')
                let data_RICY = functions.Settings.FractionNumbers(PRICE.val())
                PRICE.val(data_RICY)
            });


        }

        static footer_btn = () => {
            switch (ModalComing.flag_) {
                case true:
                    const $obg = $('#save_coming')
                    let flag = $('.el_coming-table_coming').length
                    switch (flag) {
                        case 0 :
                            $obg.hide()
                            break
                        default:
                            $obg.show()
                    }
                    break
            }

        }

        CheckEnterDataCom = () => {
            const data = this.$.find('.date_field').val();
            return data.length !== 0
        }


        to_collect_data = () => {
            let array_position = [];
            $('.el_coming-table_coming').each(function (index) {
                let el = $('.el_coming-table_coming')[index];
                array_position.push({
                    id: $(el).attr('id'),
                    product_id: $(el).attr('data-product_id'),
                    no: $(el).find('.coming-table-no-el').text(),
                    article: $(el).find('.coming-table-article-el').text(),
                    title: $(el).find('.coming-table-name-el').text(),
                    quantity: $(el).find('.coming-table-quantity-el input').val(),
                    price_purchase: $(el).find('.coming-table-purchase-el input').val(),
                });
            });
            let __id = this.$.attr('id')
            return {
                id_supply: __id ? __id : this.id,
                num_supply: $('#id_coming-number').val(),
                date_supply: this.prepare_date($('.date_field').val()),
                num_document: $('#id_coming-num_doc').val(),
                provider: $('#id_coming-provider').val(),
                data_supply: array_position,
                id_del_position: ModalComing.ArrId_del_position,
                id_add_position: ModalComing.ArrId_Add_position,
                store_id: LeftPage.itemStock.Active_Sore_id
            };
        };

        prepare_date = (date) => {
            const E = date.split('.')
            const now = new Date();
            const H = now.getHours();
            const M = now.getMinutes();
            const S = now.getSeconds();
            return E[2] + '-' + E[1] + '-' + E[0] + ' ' + this.uptD(H) + ':' + this.uptD(M) + ':' + this.uptD(S)
        }


        uptD = (d) => {
            let newD
            switch (d < 10) {
                case true:
                    newD = "0" + d
                    break;
                default:
                    newD = d
                    break;
            }

            return newD;
        }


        static today = () => {
            const today = new Date()
            const day = today.getDate()
            const month = today.getMonth() + 1
            const year = today.getFullYear()
            const DAY = day < 10 ? '0' + day : day
            const MONTH = month < 10 ? '0' + month : month
            return DAY + '.' + MONTH + '.' + year
        }


        static __render = (m_data, id,) => {
            const to_day_date = ModalComing.today()
            return $(ModalComing.Twig.render({m_data, id, to_day_date}))
        }
    }

    class ElComing {

        static Twig
        static active = false

        _$
        _account_id
        _data_coming
        _id
        _provider
        _date
        _no
        _num_document
        _num_supply
        _$$Edit


        constructor(data, i) {
            this._account_id = AMOCRM.constant('account').id
            this._no = Btn_arr_Comming.counter++
            this._id = data.id_supply
            this._num_supply = data.num_supply
            this._date = this.redaction_date(data.date_supply)
            this._num_document = data.num_document
            this._provider = data.provider
            this._data_coming = data.data_supply
            this._$ = ElComing.__render(this._id, this._no, this._num_supply, this._date, this._provider, functions.tbl())
            this._$$Edit = this._$.find('.pragma_coming_edit')
            this.body_action()


        }

        body_action = () => {
            this.$$Edit.on('click', async () => {
                if (functions.Settings.ActiveStock === -1) {
                    modal.alert.showAlertModal('Выберите Склад', false, 2000)
                    return false
                }
                const Loader = $('.loader_pragma_id')
                const Block = $('.pragma_block')
                if (!ElComing.active) {
                    ElComing.active = true
                    Loader.show();
                    Block.show();

                    ModalComing.ArrId_del_position = []
                    ModalComing.No = this.no * 1
                    const table_product = await this.generate_el_table()
                    const _ModalComing = new ModalComing(false, this.id)
                    const obj = {
                        title: "Изменить Поставку",
                        class_name: 'change_coming-modal',
                    }
                    modal.ConfirmModal(obj)

                    const M_change_coming = $('.change_coming-modal')

                    M_change_coming.find('.modal-body__inner').append(_ModalComing.$)
                    Coming.RecUnt(M_change_coming, {'border-radius': '5px', 'width': '900px'})
                    $('.body-right_catalogs_elen').append(table_product)
                    this.fill_input()

                    M_change_coming.find('.modal-body').trigger('modal:loaded')
                        .trigger('modal:centrify')


                    Loader.hide();
                    Block.hide();
                    ElComing.active = false

                }


            })
        }


        get $() {
            return this._$
        }

        get id() {
            return this._id
        }


        get provider() {
            return this._provider
        }

        get date() {
            return this._date
        }

        get num_document() {
            return this._num_document
        }

        get num_supply() {
            return this._num_supply
        }

        get data_coming() {
            return this._data_coming
        }

        get no() {
            return this._no
        }

        get $$Edit() {
            return this._$$Edit
        }


        redaction_date = (date) => {
            const W = date.split(' ')[0].split('-')
            const t = '.'
            return W[2] + t + W[1] + t + W[0]
        }


        fill_input = () => {
            $("#id_coming-provider").val(this.provider)
            $('.date_field').val(this.date)
            $('#id_coming-num_doc').val(this.num_document)
            $('#id_coming-number').val(this.num_supply)
        }

        generate_el_table = async () => {
            const arr = this.data_coming
            const array = []
            for (const el in arr) {
                if (arr.hasOwnProperty(el)) {
                    const elem = new AddPosition(arr[el])
                    array.push(elem.$)
                }

            }
            return array
        }


        static __render = (id, no, num_supply, date, provision, tbl) => $(ElComing.Twig.render({
            id,
            no,
            num_supply,
            date,
            provision,
            tbl
        }))


    }

    class Coming {
        static Twig
        static FlagSort = false
        static ArrowUp
        static ArrowDown
        static AllProducts = []
        static AllSection = []
        static AllComing = []
        static active = false
        static fractional


        _$
        _account_id
        _$Coming_No
        _$Coming_num_post
        _$body_table_com
        _$Coming_date
        _$Coming_provision


        constructor() {

            this._$ = Coming.__render()
            Coming.account_id = AMOCRM.constant('account').id
            this._$Coming_No = this._$.find('.body_table_coming-No')
            this._$Coming_num_post = this._$.find('.body_table_coming-num_post')
            this._$Coming_date = this._$.find('.body_table_coming-date')
            this._$Coming_provision = this._$.find('.body_table_coming-provision')
            this._$body_table_com = this._$.find('.place_el_table_coming')
            this.bind_action()
            Coming.fill_body().then(r => r)

        }


        bind_action = () => {


            this.$Coming_num_post.on('click', () => {
                this.SORT(this.$Coming_num_post, 'num_supply')
            })
            this.$Coming_date.on('click', () => {
                this.SORT(this.$Coming_date, 'date_supply')
            })
            this.$Coming_provision.on('click', () => {
                this.SORT(this.$Coming_provision, 'provider')
            })


        }

        static fill_body = async () => {
            const Block = $('.pragma_block')
            const Loader = $('.loader_pragma_id')
            if (!Coming.active) {
                Coming.active = true
                Loader.show();
                Block.show();

                Coming.ArrowUp = templates.ArrowUp
                Coming.ArrowDown = templates.ArrowDown
                Coming.AllProducts = await Coming.request_get_all_products()
                Coming.AllSection = await Coming.request_get_all_section()
                ModalComing.Twig = templates.ModalComing
                ModalComing.Section = Coming.request_dat()
                ElComing.Twig = templates.elComing
                AddPosition.Twig = templates.PositionFORComing
                const all_coming = await Coming.request_get_coming()
                Coming.AllComing = JSON.parse(all_coming)
                const org = await functions.organization_array(Coming.AllComing, 25)
                const el_table = new Btn_arr_Comming(org)
                $('.stock_pragma-catalogs').html(el_table.$)
                $('#pagination_pragma_btn_1').trigger('click');

                const $BTN_ADD = $('.coming_pragma-header-add')
                if (LeftPage.itemStock.Active_Sore_id === -1) {
                    $BTN_ADD.hide()

                } else {
                    $BTN_ADD.show()
                }
                $('.body_table_coming-date').trigger('click')


                Loader.hide();
                Block.hide();
                Coming.active = false
            }


        }


        get $() {
            return this._$
        }


        get $body_table_com() {
            return this._$body_table_com
        }


        get $Coming_num_post() {
            return this._$Coming_num_post
        }

        get $Coming_date() {
            return this._$Coming_date
        }

        get $Coming_provision() {
            return this._$Coming_provision
        }


        SORT = ($OBJ, NAME_SORT) => {
            this.delete_arrow()
            this.color($OBJ)
            let array_id_for_SORT = []

            $('.body_el_coming').each(function () {
                let _id = $(this).attr('id')
                array_id_for_SORT.push(_id)
            })
            let arrow
            let AllComing = Coming.AllComing
            let New_array = [];
            for (const product in array_id_for_SORT) {
                const item = AllComing.find(item => item.id_supply == array_id_for_SORT[product])
                New_array.push(item)
            }
            switch (NAME_SORT) {
                case 'date_supply':
                    New_array = this.SORT_DATE(New_array)
                    break;
                default:
                    New_array.sort(function (a, b) {
                        let _a = a[NAME_SORT]
                        let _b = b[NAME_SORT]
                        if (NAME_SORT === 'num_supply') {
                            _a *= 1
                            _b *= 1
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
                case false :
                    Coming.FlagSort = true
                    const id_down = "arrow_down_coming_pragma"
                    arrow = Coming.ArrowDown.render({id_down})
                    break;
                case true :
                    New_array = New_array.reverse()
                    Coming.FlagSort = false
                    const id_up = "arrow_up_coming_pragma"
                    arrow = Coming.ArrowUp.render({id_up})
                    break;
            }
            Btn_arr_Comming.counter = OrgComing.id_click * 25 - 24
            $OBJ.append(arrow);
            functions.setTbd(true)
            let sort_array = []
            for (let i in New_array) {
                if (New_array.hasOwnProperty(i)) {
                    const el = new ElComing(New_array[i], i * 1 + 1)
                    sort_array.push(el.$)
                }
            }
            this.$body_table_com.html(sort_array)


        }
        color = ($OBJ) => {
            const color = "rgba(133,145,165,.5)"
            $('.body_table_coming-num_post-label').css({color: color})
            $('.body_table_coming-date-label').css({color: color})
            $('.body_table_coming-provision-label').css({color: color})
            $OBJ.find('div').css({color: "#6e747a"})
        }

        SORT_DATE = (employees) => {

            return employees.sort(function (a, b) {
                let dateA = rend_data(a.date_supply)
                let dateB = rend_data(b.date_supply)
                return dateA - dateB //сортировка по возрастающей дате
            })

            function rend_data(data) {
                const ar_date = data.split(' ')[0].split('-')
                return new Date(ar_date[0], ar_date[1], ar_date[2])
            }
        }


        delete_arrow = () => {
            $('.pragma_arrow_up').remove()
            $('.pragma_arrow_down').remove()
        }


        static clickBtnAdd = async () => {

            const _ModalComing = new ModalComing(true, null)
            let destroyFlag = false
            const modali = new Modal({
                class_name: 'add_coming-modal',
                init: async $modal_body => {
                    Coming.stopFlag = false
                    $modal_body
                        .append(_ModalComing.$)
                        .trigger('modal:loaded')
                        .trigger('modal:centrify')
                },
                destroy: () => {
                    if (destroyFlag)
                        return true
                    modal.ConfirmModal({
                        title: 'Прервать текущую операцию?',
                        message: 'Операция будет прервана, все изменения не сохраняться',
                        accept_text: 'Прервать',
                        cancel_text: 'Отмена',
                        accept_func: () => {
                            destroyFlag = true
                            modali.destroy()
                        }
                    })
                    return false
                }
            })

            $('.modal_coming-pragma').attr('data-change', false)
        }


        static request_get_coming = async () => {
            return await functions.request({
                flag: 'coming_get',
                account_id: Coming.account_id,
                store_id: functions.Settings.ActiveStock
            })
        }


        static request_get_all_products = async () => {
            let arr = await functions.request({
                flag: 'products_get',
                account_id: Coming.account_id,
            })

            return JSON.parse(arr)
        }

        static request_get_all_section = async () => {
            let arr = await functions.request({
                flag: 'section_get',
                account_id: Coming.account_id,
            })
            return JSON.parse(arr)

        }


        static request_dat = () => {
            let parse_data = Coming.AllSection
            let arr = [];

            for (let tt in parse_data) {
                if (parse_data.hasOwnProperty(tt)) {
                    arr.push({
                        option: parse_data[tt].title,
                        id: parse_data[tt].id
                    })
                }

            }
            return arr
        }

        static RecUnt = ($OBJ, data) => {
            $OBJ.children().children().css(data)
            $OBJ.find('.modal-body')
                .trigger('modal:loaded')
                .trigger('modal:centrify')
        }

        static __render = () => $(Coming.Twig.render())


    }

    class ComingBtnAdditional {
        _$

        constructor() {
            this._$ = ComingBtnAdditional._render()
            this._$BtnAdd = this._$.find('.coming_pragma-header-add')
            this.bind_actions()
        }


        bind_actions = () => {
            this.$BtnAdd.on('click', async () => {
                await Coming.clickBtnAdd()
            })
        }

        get $() {
            return this._$
        }

        get $BtnAdd() {
            return this._$BtnAdd
        }

        static  _render = () => {
            const btn = `
            <div class="top-three_more-three">
             <button type="button" class="button-input button-input_blue   coming_pragma-header-add" tabindex="" id="four-add_product_pragma"><span class="button-input-inner ">
    <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px" xmlns:xlink="http://www.w3.org/1999/xlink" width="7pt" height="7pt" viewBox="0 0 7 7" version="1.1">
<path style="fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 " transform="matrix(0.0199164,0,0,0.0199164,0,0)"></path>
<path style="fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;" d="M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 " transform="matrix(0.000000000000000001,0.0199164,-0.0199164,0.000000000000000001,7,0)"></path>
</svg>
    <span class="button-input-inner__text">ДОБАВИТЬ ПОСТАВКУ</span></span></button>
           
    </div>`;
            return $(btn)
        }
    }

    class OrgComing {

        _$
        _Data

        static id_click
        static mode
        static LastBtn

        constructor(page, data) {

            this._Data = data
            this._id = page * 1 + 1
            this._$ = OrgComing.__render(this._id)
            this.bind_action()
        }

        bind_action = () => {
            this.$.on('click', () => {
                OrgComing.id_click = this.id
                this.active_btn()

                const arr = this.Data
                Btn_arr_Comming.counter = this.id * 25 - 24
                let arr_new = [];
                functions.setTbd(true)
                for (const index in arr) {
                    if (arr.hasOwnProperty(index)) {
                        let table = new ElComing(arr[index], index * 1 + 1)
                        arr_new.push(table.$)
                    }
                }
                const LenArr = Btn_arr_Comming.AllElem.length
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

                $('.place_el_table_coming').html(arr_new)
            })

        }

        get $() {
            return this._$
        }

        get id() {
            return this._id
        }


        get Data() {
            return this._Data
        }


        clickLess = (clickId) => {
            const FivBtn = new Btn_arr_Comming(Btn_arr_Comming.AllElem)
            FivBtn.$
            if (clickId > 4) {
                FivBtn.clickModeLast()
            } else {
                FivBtn.clickModeFirst()

            }

        }

        clickLast = () => {
            const FivBtn = new Btn_arr_Comming(Btn_arr_Comming.AllElem)
            FivBtn.$
            FivBtn.clickModeLast()
        }

        clickFirst = () => {
            const FivBtn = new Btn_arr_Comming(Btn_arr_Comming.AllElem)
            FivBtn.$
            FivBtn.clickModeFirst()
        }

        clickModeFive = (click) => {
            const FivBtn = new Btn_arr_Comming(Btn_arr_Comming.AllElem)
            FivBtn.$
            FivBtn.clickModeFive(click)

        }

        clickFive = () => {
            const FivBtn = new Btn_arr_Comming(Btn_arr_Comming.AllElem)
            FivBtn.$
            FivBtn.btnClickFive()
        }

        active_btn = () => {
            OrgComing.id_click = this.id

            $('.page_coming').each(function () {
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
                `<button type="button"  id=pagination_pragma_btn_${name} class="button-input    page_coming" tabindex=""  >
                     <span class="button-input-inner ">
                      <span class="button-input-inner__text">${name}</span>
                    </span>
                </button>`;

            return $(btm)
        }

    }

    class Btn_arr_Comming {
        _$
        _$Prev
        _$Next
        _$Input
        _$placeBtn
        _$AllBtn

        static AllElem
        static counter

        constructor(arr) {
            Btn_arr_Comming.AllElem = arr
            this._$ = Btn_arr_Comming.__render('coming')
            this._$placeBtn = this._$.find('.pragma_pagination-pages_pragma')
            this._$Prev = this._$.find('.pragma_pagination_prev')
            this._$Next = this._$.find('.pragma_pagination_next')
            this._$Input = this._$.find('#pragma_input_quantity_stock')
            OrgComing.LastBtn = arr.length
            this._$AllBtn = Btn_arr_Comming.render_btn(arr)
            this.btnRender()
            this.bind_actions()
        }

        bind_actions = () => {


            this.$Input.on('change', () => {
                const value = this.$Input.val()
                let parse_data = Coming.AllComing
                const org_cat = functions.organization_array(parse_data, value)
                const btn = new Btn_arr_Comming(org_cat)
                $('.stock_pragma-catalogs').html(btn.$)
                $('.page_coming').first().trigger('click')
                const el = $('#pragma_input_quantity_stock').parent()
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

        btnRender = () => {
            this.$AllBtn.length > 6 ? this.btnMoreFive() : this.$placeBtn.html(this.$AllBtn)
        }

        btnMoreFive = () => {
            let len = this.$AllBtn.length
            let ARR
            const FirstFiveBtn = this.$AllBtn.slice(0, 5)
            const lastBtn = this.$AllBtn[len - 1]
            ARR = FirstFiveBtn
            ARR.push(Btn_arr_Comming.ellipsis());
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
                    arsV.push(Btn_arr_Comming.ellipsis());
                    arsV.push(elem);
                    arsV.push(this.$AllBtn[len_btn - 1]);
                    break
                default:
                    arsV.push(First);
                    arsV.push(Btn_arr_Comming.ellipsis());
                    arsV.push(elem);
                    arsV.push(Btn_arr_Comming.ellipsis());
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
            arr.push(Btn_arr_Comming.ellipsis());
            arr.push(elm);
            $('.pragma_pagination-pages_pragma').html(arr.flat())
        }

        clickModeFirst = () => {
            let len = this.$AllBtn.length
            let ARR
            const FirstFiveBtn = this.$AllBtn.slice(0, 5)
            const lastBtn = this.$AllBtn[len - 1]
            ARR = FirstFiveBtn
            ARR.push(Btn_arr_Comming.ellipsis());
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
                arr.push(Btn_arr_Comming.ellipsis());
                arr.push(elm)

            } else if (click <= 4) {
                const elm = this.$AllBtn.slice(0, 5);
                arr.push(elm)
                arr.push(Btn_arr_Comming.ellipsis());
                arr.push(last)

            } else {

                const elem = this.$AllBtn.slice(click - 3, click + 2);
                arr.push(First)
                arr.push(Btn_arr_Comming.ellipsis());
                arr.push(elem)
                arr.push(Btn_arr_Comming.ellipsis());
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

    return {
        Coming: Coming,
        AddPosition: AddPosition,
        ComingBtnAdditional: ComingBtnAdditional
    }

});