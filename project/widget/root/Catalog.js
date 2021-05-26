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

    class ModalProduct {

        static _section = null

        static fractional

        _$
        _$InputPrice
        _$upload_imga
        _account_id
        _$catalog_save_btn
        _$HistoryComing
        _$InputUnit
        _$catalog_delete_btn
        _$icon_delete_btn
        _id
        __change

        constructor(twig_, m_data, change, id, category_id, unit, items) {
            this.__change = change
            this._id = id
            this._$ = ModalProduct.__render(twig_, m_data, this.__change, this._id, category_id, unit, items)
            this._account_id = AMOCRM.constant('account').id;
            this._$upload_img = this._$.find('.m_catalog_pragma-icon-img')
            this._$catalog_save_btn = this._$.find('.m_catalog_pragma-button_catalog_save')
            this._$catalog_delete_btn = this._$.find('.m_catalog_pragma-button_catalog_delete')
            this._$icon_delete_btn = this._$.find('.m_catalog_pragma-icon_delete')
            this._$InputPrice = this._$.find('#price_sale_catalog')
            this._$InputUnit = this._$.find('#section_select_unit')
            this._$HistoryComing = this._$.find('.body-history_table')
            this.bind_action()
        }

        bind_action = () => {

            this.$upload_img.hover(
                () => {
                    $('.m_catalog_pragma-footer').hide()
                    $('.m_catalog_pragma-header').css({'margin-bottom': '42px'})

                },

                () => {
                    $('.m_catalog_pragma-footer').show()
                    $('.m_catalog_pragma-header').css({'margin-bottom': ''})

                }
            )


            this.$InputPrice.on('keypress', (e) => {
                const KeyCode = e.charCode
                if (KeyCode === 43 || KeyCode === 45) {
                    return false
                }
                if (KeyCode === 46)
                    return functions.Settings._integer
            })


            this.$InputPrice.attr('min', '0')


            this.$catalog_delete_btn.on('click', () => {
                const obj = {
                    title: 'Удалить товар?',
                    class_name: 'delete_product-modal',
                    accept_text: 'Удалить',
                    cancel_text: 'Отмена',
                    accept_func: async () => {

                        const res_del_product = await functions.request({
                            flag: 'product_delete',
                            product_id: this.id
                        })

                        switch (res_del_product) {
                            case true:
                            case 'true':
                                modal.alert.showAlertModal('Удалено', true, 1000)
                                $(`.el_table_product[id="${this.$.attr('id')}"]`).remove()
                                setTimeout(() => $('.icon.icon-modal-close').trigger('click'), 1100)
                                break;
                            default:
                                modal.alert.showAlertModal('Ошибка', false, 1000)
                                break;
                        }


                    }
                }
                modal.ConfirmModal(obj)
            })
            this.$InputUnit.on('click', () => {
                this.$InputUnit.val('')
            })
            this.$catalog_save_btn.on('click', async () => {


                const check_data_enter = this.check_enter_data()
                switch (check_data_enter) {
                    case true:
                        await this.btn_save_date()
                        break;
                    case false:
                        modal.alert.showAlertModal('Заполните обязательные поля', false, 1000)
                        break;
                }


            })
            this.$icon_delete_btn.on('click', async () => {
                await this.delete_icon();
            })
            this.$upload_img.on('click', () => {

                switch (this.id) {
                    case null:
                        modal.alert.showAlertModal('Необходимо создать товар', false, 1300)

                        break;
                    default:
                        const self = this;
                        $('#upload_icon_img')
                            .trigger('click')
                            .one('change', async function () {
                                let files = this.files;
                                await self.request_upload(files)
                            })
                        break;
                }

            })


        }

        static change = () => {
            return $(`<div class="m_catalog_pragma-icon">
            <button type="button" class="button-input m_catalog_pragma-icon_upload" style="display: none;"><span class="button-input-inner ">
            <span class="button-input-inner__text">⭳</span></span></button>
            <input class="upload_icon" id="upload_icon_img" type="file" name="files[]" style="display: none;">
        <img class="m_catalog_pragma-icon-img" src="" alt="">
<!--        <button type="button" class="button-input    m_catalog_pragma-icon_delete" tabindex="">-->
<!--        <span class="button-input-inner ">-->
<!--        <span class="button-input-inner__text">x</span></span></button>-->

        </div>`)
        }


        get $() {
            return this._$
        }

        get id() {
            return this._id
        }

        get _change() {
            return this.__change
        }

        get $InputUnit() {
            return this._$InputUnit
        }

        get $icon_delete_btn() {
            return this._$icon_delete_btn
        }

        get $catalog_delete_btn() {
            return this._$catalog_delete_btn
        }


        get $catalog_save_btn() {
            return this._$catalog_save_btn
        }

        get account_id() {
            return this._account_id
        }

        get $InputPrice() {
            return this._$InputPrice
        }

        get $upload_img() {
            return this._$upload_img
        }


        check_enter_data = () => {
            const title = $('#name_catalog_inp').val()
            const desc = $('#description_catalog').val()
            const article = $('#name_catalog_article').val()
            const price = $('#price_sale_catalog').val()
            const Lt = title.length !== 0
            const Ld = true
            const La = article.length !== 0
            const Lp = price.length !== 0
            return Lt && La && Lp
        }


        request_upload = async (files) => {

            const data = new FormData();
            const name_ = `account_id=${this.account_id}&name_file=${files[0].name}&product_id=${this.id}`
            data.append("files", files[0], name_)
            const response = await $.ajax({
                url: load.url + "file.php",
                type: "POST",
                data: data,
                async: true,
                processData: false,
                contentType: false,
            })

            $('.m_catalog_pragma-icon-img').attr('src', response)

        }


        btn_save_date = async () => {
            const data = {
                account_id: this.account_id,
                section_id: $('#section_catalog_inp').val(),
                img_link: $('.m_catalog_pragma-icon-img').attr('src'),
                title: $('.m_catalog_pragma-name_catalog_inp').val(),
                desc: $('.m_catalog_pragma-description_catalog').val(),
                article: $('.m_catalog_pragma-article_inpu_catalog').val(),
                section: $('.log_pragma-sectio_iinpu_catalog button span').text(),
                balance: $('#price_sale_catalog').val(),
                unit: $('#section_select_unit').val(),
                selling_price: $('.cl_pragma-price_sale_catalog').val(),
            }
            const __a__ = ModalProduct._section;
            const __b__ = data.section;

            switch (this._change) {
                case false:
                    data.flag = 'save_product'
                    const data_product = {
                        id: data.product_id,
                        title: data.title,
                        section_id: data.section_id,
                        category_id: data.section_id,
                        article: data.article,
                        img_link: data.img_link,
                        balance: data.balance * 1,
                        decs: data.desc,
                        unit: data.unit,
                        selling_price: data.selling_price * 1,
                    }
                    const answer_create = await functions.request(data);

                    const add_tov = answer_create.includes('article')


                    switch (add_tov) {
                        case true:
                        case 'true':
                            const parse_answer = JSON.parse(answer_create);
                            data.id = parse_answer.id
                            data_product.id = parse_answer.id
                            let ara = JSON.parse(Catalog.AllProduct)
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
                            })
                            Catalog.AllProduct = JSON.stringify(ara)

                            modal.alert.showAlertModal('Товар добавлен!', true, 1000)
                            data_product.balance = 0
                            functions.Settings._integer = Catalog.fractional
                            const el_table = new ElTabProduct(data_product);

                            $('.product_pragma-body').append(el_table.$)

                            setTimeout(() => this.close_modal(), 1001)
                            break;
                        default:
                            modal.alert.showAlertModal('Ошибка! Товар с таким артикулом существует', false, 1200)
                            break;
                    }


                    break;
                case true:
                    data.flag = 'update_product'
                    data.id = this.$.attr('id')
                    const obj = {
                        title: 'Сохранить изменения?',
                        class_name: 'update_product',
                        accept_text: 'Сохранить',
                        cancel_text: 'Отмена',
                        accept_func: async () => {
                            const res_update_product = await functions.request(data);
                            switch (res_update_product) {
                                case true:
                                case 'true':
                                    const el = $(`.el_table_product[id="${data.id}"]`)
                                    functions.Settings._integer = Catalog.fractional
                                    const el_table = new ElTabProduct(data);
                                    el.replaceWith(el_table.$)
                                    const Foo = JSON.parse(Catalog.AllProduct);
                                    for (const index in Foo) {
                                        if (Foo.hasOwnProperty(index)) {
                                            switch (data.article) {
                                                case Foo[index].article:
                                                    Foo[index].section = data.section
                                                    Foo[index].title = data.title
                                                    Foo[index].selling_price = data.selling_price * 1
                                                    Foo[index].category_id = data.section_id * 1
                                                    Foo[index].balance = data.balance * 1
                                                    Foo[index].unit = data.unit
                                                    Catalog.AllProduct = JSON.stringify(Foo)
                                                    break;
                                            }
                                        }
                                    }
                                    if (__a__ != null) {
                                        if (__a__ !== __b__) {

                                            $(`#${data.id}`).remove();
                                        } else {
                                            functions.Settings._integer = Catalog.fractional
                                            const el_table = new ElTabProduct(data);
                                            el.replaceWith(el_table.$)

                                        }

                                    }
                                    modal.alert.showAlertModal('Товар Изменен!', true, 1000)
                                    setTimeout(() => this.close_modal(), 1001)
                                    break;
                                default:
                                    switch (JSON.parse(res_update_product).code) {
                                        case 802:
                                            modal.alert.showAlertModal('Ошибка! Товар с таким артикулом существует', false, 1500)
                                            break;
                                        default:
                                            modal.alert.showAlertModal('Ошибка!' + res_update_product, false, 1000)
                                            break;

                                    }

                                    break;

                            }


                        }
                    }
                    modal.ConfirmModal(obj)


                    break;

            }

        }

        close_modal = () => {
            $('.icon.icon-modal-close').trigger('click')

        }

        delete_icon = async () => {
            const _icon_im = $('.m_catalog_pragma-icon-img');
            const url_img = _icon_im.attr('src')
            if (url_img.length > 1) {
                await functions.request({
                    flag: 'del_img',
                    product_id: this.id
                })
            }
            _icon_im.remove();
            $('.m_catalog_pragma-icon_delete').remove();
            this.$.find('.m_catalog_pragma-icon_upload').show();
        }

        static __render = (twig_, m_data, change, id, category_id, unit, items) => {
            const $twi = $(twig_.render({m_data, id, category_id, unit, items}))
            change ? $twi.find('.m_catalog_pragma-icon').replaceWith(ModalProduct.change()) : 0
            return $twi
        }

    }

    class ModalProductInfo {
        _$
        _id
        static Twig
        _$HistoryComing

        constructor(data) {
            this._id = data.id
            this._title = data.title
            this._balance = functions.Settings.FractionNumbers(data.balance)
            this._unit = data.unit
            this._selling_price = functions.Settings.FractionNumbers(data.selling_price)
            this._img_link = data.img_link


            this._$ = ModalProductInfo.__render(this._title, this._balance, this._unit, this._selling_price, this._img_link)
            this._$HistoryComing = this._$.find('.body-history_table')
            this.render_history().then(r => r)

        }

        get $() {
            return this._$
        }

        get id() {
            return this._id
        }

        get $HistoryComing() {
            return this._$HistoryComing
        }


        formatter_ddd_mm_gg = (DATA) => {
            const W = DATA.split(' ')[0].split('-')
            const t = '.'
            return W[2] + t + W[1] + t + W[0]
        }

        render_history = async () => {
            const ElHistoryTwig = templates.ModalProductHistoryEl
            let array_HEl = []
            const history_product = await functions.request({
                flag: 'history_product',
                product_id: this.id
            })

            const PhProduct = JSON.parse(history_product)
            for (const PhP in PhProduct) {
                if (PhProduct.hasOwnProperty(PhP)) {
                    const data = {
                        no: PhP * 1 + 1,
                        date: this.formatter_ddd_mm_gg(PhProduct[PhP].date),
                        quantity: functions.Settings.FractionNumbers(PhProduct[PhP].quantity),
                        price_purchase: functions.Settings.FractionNumbers(PhProduct[PhP].purchase_price),
                        remainder: functions.Settings.FractionNumbers(PhProduct[PhP].balance),
                    }
                    const el = ElHistoryTwig.render({data})
                    array_HEl.push($(el))
                }

            }


            this.$HistoryComing.html(array_HEl)

        }

        static __render = (title, balance, unit, selling_price, img_link) => $(ModalProductInfo.Twig.render({
            title,
            balance,
            unit,
            selling_price,
            img_link
        }))

    }

    class Btn_one {
        _$
        _Data


        static id_click
        static mode
        static LastBtn

        constructor(name, data) {
            this._id = name + 1
            this._Data = data
            this._$ = Btn_one.__render(name + 1)
            this.bind_action()

        }

        bind_action = () => {
            this.$.on('click', () => {
                let table = new TableProducts(this.Data)
                $('.product_pragma-body').html(table.$)
                this.active_btn()
                const LenArr = Btn_arr.AllElem.length
                if (LenArr > 7) {
                    if (this.id === 1) {
                        Btn_one.mode = 1
                        this.clickFirst()
                        this.active_btn()
                    }
                    if (Btn_one.mode === 5) {
                        this.clickModeFive(this.id)
                        this.active_btn()

                    }

                    if (this.id === Btn_one.LastBtn) {
                        this.clickLast()
                        Btn_one.mode = 5
                        this.active_btn()

                    }

                    if (this.id === 5) {
                        Btn_one.mode = 5
                        this.clickFive()
                        this.active_btn()
                    }
                } else if (LenArr === 7) {
                    if (this.id === 1) {
                        Btn_one.mode = 1
                        this.clickFirst()
                        this.active_btn()
                    } else {
                        this.clickLess(this.id)
                        this.active_btn()

                    }


                }


            })

        }
        clickLess = (clickId) => {
            const FivBtn = new Btn_arr(Btn_arr.AllElem)
            FivBtn.$
            if (clickId > 4) {
                FivBtn.clickModeLast()
            } else {
                FivBtn.clickModeFirst()

            }

        }

        clickLast = () => {
            const FivBtn = new Btn_arr(Btn_arr.AllElem)
            FivBtn.$
            FivBtn.clickModeLast()
        }

        clickFirst = () => {
            const FivBtn = new Btn_arr(Btn_arr.AllElem)
            FivBtn.$
            FivBtn.clickModeFirst()
        }

        clickModeFive = (click) => {
            const FivBtn = new Btn_arr(Btn_arr.AllElem)
            FivBtn.$
            FivBtn.clickModeFive(click)

        }

        clickFive = () => {
            const FivBtn = new Btn_arr(Btn_arr.AllElem)
            FivBtn.$
            FivBtn.btnClickFive()
        }

        active_btn = () => {
            Btn_one.id_click = this.id

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


        get $() {
            return this._$
        }

        get Data() {
            return this._Data
        }

        get id() {
            return this._id
        }

        touch_btn = () => {
            $('.button-input.page_catalog').css({'background': '#f5f5f5', 'color': 'black'})
            this.$.css({'background': '#7A8692', 'color': '#fff'})
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

    class Btn_arr {
        _$
        _$Prev
        _$Next
        _$Input
        _$placeBtn
        _$AllBtn

        static AllElem

        constructor(arr) {
            Btn_arr.AllElem = arr
            this._$ = Btn_arr.__render("catalog")
            this._$placeBtn = this._$.find('.pragma_pagination-pages_pragma')
            this._$Prev = this._$.find('.pragma_pagination_prev')
            this._$Next = this._$.find('.pragma_pagination_next')
            this._$Input = this._$.find('#pragma_input_quantity_stock')
            Btn_one.LastBtn = arr.length
            this._$AllBtn = Btn_arr.render_btn(arr)
            this.btnRender()
            this.bind_actions()
        }


        bind_actions = () => {

            this.$Prev.on('click', () => {
                const all_btn = this.$AllBtn.length
                let num = Btn_one.id_click
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
                let num = Btn_one.id_click
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

            this.$Input.on('change', () => {
                Btn_one.mode = 1
                const value = this.$Input.val()
                let parse_data = JSON.parse(Catalog.AllProduct)
                const org_cat = functions.organization_array(parse_data, value)
                const btn = new Btn_arr(org_cat)
                $('.stock_pragma-catalogs').html(btn.$)
                $('.page_coming').first().trigger('click')
                const el = $('#pragma_input_quantity_stock').parent()
                el.find('button').find('span').text(value)
                el.find('ul li').attr('class', 'control--select--list--item')
                el.find(`ul li[data-value="${value}"]`).attr('class', 'control--select--list--item  control--select--list--item-selected')
            })
        }

        get $() {
            return this._$
        }

        get $Prev() {
            return this._$Prev
        }

        get $placeBtn() {
            return this._$placeBtn
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

        btnRender = () => {
            this.$AllBtn.length > 6 ? this.btnMoreFive() : this.$placeBtn.html(this.$AllBtn)
        }

        btnMoreFive = () => {
            let len = this.$AllBtn.length
            let ARR
            const FirstFiveBtn = this.$AllBtn.slice(0, 5)
            const lastBtn = this.$AllBtn[len - 1]
            ARR = FirstFiveBtn
            ARR.push(Btn_arr.ellipsis());
            ARR.push(lastBtn)
            this.$placeBtn.html(ARR)

        }

        btnClickFive = () => {
            let arsV = [];
            const First = this.$AllBtn[0];
            const BtnActive = Btn_one.id_click - 1;

            const elem = this.$AllBtn.slice(BtnActive - 2, BtnActive + 3);
            const len_btn = this.$AllBtn.length
            switch (len_btn) {
                case 8:
                    arsV.push(First);
                    arsV.push(Btn_arr.ellipsis());
                    arsV.push(elem);
                    arsV.push(this.$AllBtn[len_btn - 1]);
                    break
                default:
                    arsV.push(First);
                    arsV.push(Btn_arr.ellipsis());
                    arsV.push(elem);
                    arsV.push(Btn_arr.ellipsis());
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
            arr.push(Btn_arr.ellipsis());
            arr.push(elm);
            $('.pragma_pagination-pages_pragma').html(arr.flat())

        }

        clickModeFirst = () => {
            let len = this.$AllBtn.length
            let ARR
            const FirstFiveBtn = this.$AllBtn.slice(0, 5)
            const lastBtn = this.$AllBtn[len - 1]
            ARR = FirstFiveBtn
            ARR.push(Btn_arr.ellipsis());
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
                arr.push(Btn_arr.ellipsis());
                arr.push(elm)

            } else if (click <= 4) {
                const elm = this.$AllBtn.slice(0, 5);
                arr.push(elm)
                arr.push(Btn_arr.ellipsis());
                arr.push(last)

            } else {

                const elem = this.$AllBtn.slice(click - 3, click + 2);
                arr.push(First)
                arr.push(Btn_arr.ellipsis());
                arr.push(elem)
                arr.push(Btn_arr.ellipsis());
                arr.push(last);
            }


            $('.pragma_pagination-pages_pragma').html(arr.flat())
        }

        static ellipsis = () => $("<div class=\"ellipsis_pragma_stock\"><span class=\"pagination-ellipsis\">...</span></div>")


        static render_btn = (array) => {
            let arr = [];
            for (let i = 0; i < array.length; i++) {
                let button_page = new Btn_one(array[i].page, array[i].products)
                arr.push(button_page.$)
            }
            return arr
        }
        static __render = _class_ => {
            return $(templates.PaginationPragma.render({_class_}))
        }

    }

    class ElTabProduct {
        static Twig
        _$
        _account_id
        _id
        _url_icon
        _title
        _article
        _balance
        _selling_price
        _description
        _price_purchase
        _section
        _category_id
        _unit
        _product
        _Loader
        _Block
        _$$BtnInfo
        _$$BtnEdit
        _$$Name

        static active = false

        constructor(product) {
            this._Loader = $('.loader_pragma_id')
            this._Block = $('.pragma_block')


            this._product = product
            this._id = product.id
            this._description = product.desc
            this._category_id = product.category_id  //section_id
            this._section = this.get_name_section(this._category_id)
            this._unit = product.unit
            this._url_icon = product.img_link ? product.img_link : load.url + 'temp/no.png'
            this._title = product.title

            this._article = product.article
            this._balance = functions.Settings.FractionNumbers(product.balance)


            this._selling_price = functions.Settings.FractionNumbers(product.selling_price)
            this._price_purchase = functions.Settings.FractionNumbers(product.price_purchase)
            this._account_id = AMOCRM.constant('account').id;
            this._$ = ElTabProduct.__render(this._id, this._url_icon, this._title, this._article, this._balance, this._unit, this._selling_price, functions.tbl())
            this._$$BtnInfo = this._$.find('#btn_info_el')
            this._$$BtnEdit = this._$.find('.pragma_catalog_edit')
            this._$$Name = this._$.find('.table-name-el-label')

            this.bind_action()

        }


        bind_action = () => {

            this.$$Name.on('click', (event) => {
                event.stopPropagation();
                this.click_information()
            })

            this.$$BtnInfo.on('click', (event) => {
                event.stopPropagation();
                this.click_information()

            })


            this.$$BtnEdit.on('click', async () => {


                if (!ElTabProduct.active) {
                    ElTabProduct.active = true
                    this.Loader.show();
                    this.Block.show();
                    await this.click_this()
                    this.Loader.hide();
                    this.Block.hide();
                    ElTabProduct.active = false
                }


            })


        }


        get $() {
            return this._$
        }

        get Loader() {
            return this._Loader
        }

        get Block() {
            return this._Block
        }

        get $$BtnInfo() {
            return this._$$BtnInfo
        }

        get id() {
            return this._id
        }

        get description() {
            return this._description
        }

        get price_purchase() {
            return this._price_purchase
        }

        get section() {
            return this._section
        }

        get unit() {
            return this._unit
        }

        get product() {
            return this._product
        }

        get url_icon() {
            return this._url_icon
        }

        get title() {
            return this._title
        }

        get article() {
            return this._article
        }

        get quantity() {
            return this._balance
        }

        get price_sail() {
            return this._selling_price
        }

        get category_id() {
            return this._category_id
        }

        get $$BtnEdit() {
            return this._$$BtnEdit
        }

        get $$Name() {
            return this._$$Name
        }

        click_information = () => {
            ModalProductInfo.Twig = templates.ModalProductInfo

            const $ModalProductInfo = new ModalProductInfo(this.product)

            const obj = {
                title: 'Информация о товаре',
                class_name: 'product-modal-info',
            }
            modal.ConfirmModal(obj)
            const $M_add_product_modal = $('.product-modal-info')

            $M_add_product_modal.find('.modal-body__inner').append($ModalProductInfo.$)
            Catalog.RecUnt($M_add_product_modal, {'border-radius': '10px', 'width': '700px'})
        }


        fill_in = () => {

            $('.m_catalog_pragma-icon-img').attr('src', this.url_icon)
            $('#name_catalog_inp').val(this.title)
            $('#description_catalog').val(this.description)
            $('#name_catalog_article').val(this.article)
            $('#kolich_catalog_inp').val(this.quantity)
            $('#price_sale_catalog').val(this.price_sail)
        }

        get_name_section = (id_section) => {
            const AllSection = JSON.parse(Catalog.AllSection);
            for (const ind in AllSection) {
                if (AllSection[ind].id == id_section) {
                    return AllSection[ind].title
                }
            }
        }


        request_da = async (flag) => {
            let parse_data = JSON.parse(Catalog.AllSection);
            let arr = [];
            switch (flag) {
                case true:
                    arr.push({
                        option: "Новый раздел",
                        id: 'new_section'
                    })
                    break;
            }


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

        click_this = async () => {
            const Twig_el = templates.ModalProduct;
            const m_data = await this.request_da(false)
            const items = await ElTabProduct.items_gen()


            const Modal_Product = new ModalProduct(Twig_el, m_data, true, this.id, this.category_id, this.unit, items)

            const obj = {
                title: 'Редактирование товара',
                class_name: 'add_product-modal',
            }
            modal.ConfirmModal(obj)
            const $M_add_product_modal = $('.add_product-modal')

            $M_add_product_modal.find('.modal-body__inner').append(Modal_Product.$)
            Catalog.RecUnt($M_add_product_modal, {'border-radius': '10px'})
            this.fill_in();

        }

        static items_gen = async () => {
            let units = await functions.request({
                flag: 'get_units'
            })
            const arr_units = JSON.parse(units)

            let ARR = ""
            for (let U in arr_units) {
                const $name = arr_units[U].unit;
                ARR += `<option>${$name}</option>`
                // id: arr_units[U].unit,
                // value: arr_units[U].uni
            }
            return ARR
        }

        static __render = (id, url_icon, name, article, quantity, selected, selling_price, tbl) => $(templates.elproduct.render({
            id,
            url_icon,
            name,
            article,
            quantity,
            selected,
            selling_price,
            tbl
        }))


    }

    class TableProducts {
        _$

        constructor(array_products) {
            this._$ = TableProducts.__render(array_products)
        }

        get $() {
            return this._$
        }

        static __render = (array_products) => {
            let array_pro = [];
            functions.Settings._integer = Catalog.fractional
            functions.setTbd(true)
            for (const el in array_products) {
                if (array_products.hasOwnProperty(el)) {
                    const Product = new ElTabProduct(array_products[el])
                    array_pro.push(Product.$)
                }

            }

            return array_pro
        }
    }

    class ModalSection {
        static Twig
        static SelectedSection = 0
        _$
        _$btn_del
        _$btn_save
        _account_id
        _$title
        _$change
        _$description

        constructor(change) {
            this._$ = ModalSection.__render()
            this._$btn_del = this._$.find('.modal_section-delete')
            this._$btn_save = this._$.find('.modal_section-save')
            this._$title = this._$.find('#name_catalog_inp')
            this._$description = this._$.find('#description_catalog')
            this._account_id = AMOCRM.constant('account').id;
            this._$change = change
            this.bind_action()
            this._$change ? this.fill_data(this._$change) : '';
        }

        bind_action = () => {
            this.$btn_del.on('click', () => {
                $('.modal-body__close').trigger('click')
            })

            this.$btn_save.on('click', async () => {

                const check_enter_data = this.check_enter()

                switch (check_enter_data) {
                    case true:
                        if (this.$change === false) {
                            const res = await functions.request({
                                flag: 'section_add',
                                title: this.$title.val(),
                                description: this.$description.val()
                            })

                            const exists_name_section = this.exists_name(res)

                            switch (exists_name_section) {
                                case true:
                                    const res_parse = JSON.parse(res);
                                    this.ADD_Section_ALL({
                                        id: res_parse.category_id,
                                        title: res_parse.title,
                                    })
                                    const el_RightCatalog = new ElementSection(
                                        res_parse.title,
                                        this.$description.val(),
                                        res_parse.category_id
                                    )
                                    $('.body-right_catalogs').append(el_RightCatalog.$)
                                    modal.alert.showAlertModal('Раздел создан!', true, 1100)
                                    setTimeout(() => this.close_modal(), 1101)
                                    break;
                                case  false :
                                    modal.alert.showAlertModal('Раздел с таким названием существует!', false, 1200)
                                    break;
                            }


                        } else {
                            let res_update_section = await functions.request({
                                flag: 'section_update',
                                title: this.$title.val(),
                                coming_id: this.$change, //id_section
                                description: this.$description.val()
                            })

                            switch (res_update_section) {
                                case true:
                                case 'true':
                                    const el_RightCatalog = new ElementSection(this.$title.val(), this.$description.val(), this.$change)
                                    $(`.el-pragma_catalog-cat[id = "${this.$change}"]`).parent().parent().replaceWith(el_RightCatalog.$)

                                    let parse_arr = JSON.parse(Catalog.AllSection)
                                    for (const ind in parse_arr) {
                                        if (parse_arr.hasOwnProperty(ind)) {
                                            const _id = parse_arr[ind].id
                                            switch (_id) {
                                                case this.$change:
                                                    parse_arr[ind].title = this.$title.val()
                                            }
                                        }

                                    }
                                    Catalog.AllSection = JSON.stringify(parse_arr)
                                    modal.alert.showAlertModal('Название раздело изменено!', true, 1100)
                                    setTimeout(() => this.close_modal(), 1101)
                                    break;
                                default:
                                    modal.alert.showAlertModal('Раздел с таким названием существует!', false, 1200)
                                    break;

                            }


                        }


                        break;
                    case false:
                        modal.alert.showAlertModal('Заполните обязательные поля', false, 1000)
                        break;
                }
            })
        }

        get $btn_del() {
            return this._$btn_del
        }

        get account_id() {
            return this._account_id
        }

        get $description() {
            return this._$description
        }

        get $title() {
            return this._$title
        }

        get $btn_save() {
            return this._$btn_save
        }

        get $change() {
            return this._$change
        }

        get $() {
            return this._$
        }


        exists_name = (str) => {
            return str.includes('title')
        }

        check_enter = () => {
            const title = this.$title.val();
            const DT = title.length !== 0
            const DD = true
            return DT && DD
        }


        ADD_Section_ALL = (OBJ) => {
            const parse_arr = JSON.parse(Catalog.AllSection)
            parse_arr.push(OBJ)
            Catalog.AllSection = JSON.stringify(parse_arr)
        }


        fill_data = (id_section) => {

            const arr_section = JSON.parse(Catalog.AllSection);
            for (const index in arr_section) {
                if (arr_section.hasOwnProperty(index)) {
                    const _id = arr_section[index].id
                    switch (_id) {
                        case id_section:
                            this.$title.val(arr_section[index].title)
                    }
                }

            }

        }
        close_modal = () => {
            $('.modal-body__close').trigger('click')
        }
        static __render = () => $(ModalSection.Twig.render())
    }

    class ElementSection {

        static Twig
        _$
        _id
        _account_id
        _allProducts
        _name
        _$btn_change
        _$menu_change
        _$BTNmenu_change
        _$BTNmenu_delete


        constructor(name, description, id) {
            this._$ = ElementSection.__render(name, description, id)
            this._account_id = AMOCRM.constant('account').id
            this._id = id
            this._name = name
            this._allProducts = Catalog.AllProducts
            this._$btn_change = this._$.find('.coming_btn_change')
            this._$menu_change = this._$.find('.small_menu_change')
            this._$BTNmenu_change = this._$.find('.menu_change')
            this._$BTNmenu_delete = this._$.find('.menu_delete')
            this.bind_action()
        }

        bind_action = () => {
            this.$.on('click', async () => {
                ModalProduct._section = this.name
                await this.render_product_in_section()
                this.btn_ch()

                this.styles();

            })

            this.$.hover(
                () => {
                    const id_ = '#el_rc_' + this.id
                    $(id_).find('.small_menu_change').show()
                },
                () => {
                    const id_ = '#el_rc_' + this.id
                    $(id_).find('.small_menu_change').hide()
                }
            )


            this.$BTNmenu_delete.on('click', () => {
                const obj = {
                    title: 'Удалить раздел?',
                    class_name: 'modal-delete_coming',
                    accept_text: 'Удалить',
                    cancel_text: 'Отмена',
                    accept_func: async () => {
                        const res_delete_section = await functions.request({
                            flag: "section_delete",
                            coming_id: this.id,
                            account_id: this.account_id,
                        })

                        switch (res_delete_section) {
                            case true:
                            case 'true':
                                modal.alert.showAlertModal('Раздел удалён', true, 1000)
                                setTimeout(() => this.close_modal(), 1001)
                                this.$.remove()
                                $('.el-pragma_catalog:first').trigger('click')

                                break;
                            default:
                                modal.alert.showAlertModal('Возникла ошибка', false, 1000)
                                break;
                        }
                    }
                }
                modal.ConfirmModal(obj)

            })


            this.$BTNmenu_change.on('click', async () => {
                const Modal_Section = new ModalSection(this.id)

                const obj = {
                    title: 'Изменить раздел',
                    class_name: 'change_section-modal',
                }

                modal.ConfirmModal(obj)
                const M_change_section = $('.change_section-modal')

                M_change_section.find('.modal-body__inner').append(Modal_Section.$)
                Catalog.RecUnt(M_change_section, {'border-radius': '10px', 'width': '450px'})
            })

            this.$btn_change.on('click', () => {
                $('.small_menu_change').hide();
                this.$menu_change.show();

            })


        }

        get $() {
            return this._$
        }

        get id() {
            return this._id
        }

        get $BTNmenu_delete() {
            return this._$BTNmenu_delete
        }

        get $BTNmenu_change() {
            return this._$BTNmenu_change
        }

        get $menu_change() {
            return this._$menu_change
        }

        get account_id() {
            return this._account_id
        }

        get $btn_change() {
            return this._$btn_change
        }

        get name() {
            return this._name
        }

        get allProducts() {
            return this._allProducts
        }

        btn_ch = () => {
            $('.small_menu_change').hide()
            this.$menu_change.show()
        }

        styles = () => {

            $('.el-pragma_catalog').css({"background-color": "transparent"})
            $('.el-pragma_catalog-cat').css({"color": "black"})

            // this.$.css({"background-color": "#fff", "border-radius": "0 50px 50px 0"});
            this.$.css({"background-color": "#fff"});
            this.$.find('.el-pragma_catalog-cat').css({"color": "black"})


            $('.el-pragma_catalog').each(function () {
                $(this).css({"background-color": "transparent"})
                $(this).hover(
                    () => {
                        $(this).css({"background-color": '#f2f2f24d'})
                        $(this).find('.small_menu_change').show()
                    },
                    () => {
                        $(this).css({"background-color": "transparent"})
                        $(this).find('.small_menu_change').hide()

                    }
                )
            })

            const el = $(`#el_rc_${this.id}`)
            el.off("mouseenter mouseleave");
            el.css({"background-color": '#f2f2f24d'})

        }


        close_modal = () => {
            $('.modal-body__close').trigger('click')
        }

        request_t = async (flag) => {
            let _data = Catalog.AllSection
            let parse_data = JSON.parse(_data);
            let arr = [];
            switch (flag) {
                case true:
                    arr.push({
                        option: "Новый раздел",
                        id: 'new_section'
                    })
                    break;
            }


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


        render_product_in_section = async () => {
            await this.render_products()

        }

        render_products = async () => {
            const parse_product = JSON.parse(Catalog.AllProduct)
            let array_product_in_section = [];
            for (const _Product in parse_product) {
                if (parse_product[_Product].category_id === this.id) {
                    array_product_in_section.push(parse_product[_Product])
                }
            }

            const product_body = $('.product_pragma-body')

            if (array_product_in_section.length > 0 && (product_body.text()).length > 0) {
                const arr = functions.organization_array(array_product_in_section, 25)
                let products = new TableProducts(arr[0].products)
                const btn = new Btn_arr(arr)
                product_body.html(products.$)
                $('.product_pragma-header').html(products.$)
                $('.stock_pragma-catalogs').html(btn.$)
            } else {
                product_body.html(' ')
                $('.product_pragma-header').html('');

            }
        }


        static __render = (name, description, id) => {
            const _class = "el-pragma_catalog"
            return $(templates.rigth_catalog.render({name, description, id, _class}))
        }
    }

    class RightCatalog {
        _$

        constructor(AllSection, allProducts) {
            this._$ = RightCatalog.__render(AllSection, allProducts)

        }


        get $() {
            return this._$
        }

        static __render = (arr_el, allProducts) => {
            let array = [];
            for (const first_el in arr_el) {
                if (arr_el.hasOwnProperty(first_el)) {
                    let name = arr_el[first_el].title
                    let description = 'lololololololo'
                    let id = arr_el[first_el].id
                    const el = new ElementSection(name, description, id, allProducts)
                    array.push(el.$)
                }

            }
            return array
        }

    }

    class Catalog {

        static Store_id
        static Twig
        static ArrowUp
        static ArrowDown
        static click = 0
        static FlagSort = false
        static active = false
        static fractional

        _$

        _account_id
        _right_section
        _$body_table
        _$tabName
        _$tabArticle
        _$tabQuantity
        _$tabPrice_sail
        _$INPUT_SEARCH

        constructor() {
            Catalog.AllSection = []
            Catalog.AllProduct = []
            this._$ = Catalog.__render()

            this._right_section = this._$.find('.body-right_catalogs');
            this._$body_table = this._$.find('.product_pragma-body');
            this._$tabName = this._$.find('.body-table-name');
            this._$tabArticle = this._$.find('.body-table-article');
            this._$tabQuantity = this._$.find('.body-table-quantity');
            this._$tabPrice_sail = this._$.find('.body-table-price_sail');
            this._$INPUT_SEARCH = $('#search_pragma-second')


            this._account_id = AMOCRM.constant('account').id;
            this.FillGetData().then(r => r)
            this.bind_action()


        }

        bind_action = () => {

            this.$tabName.on('click', () => {
                const Loader = $('.loader_pragma_id')
                const Block = $('.pragma_block')
                if (!Catalog.active) {
                    Catalog.active = true
                    Block.show();
                    Loader.show();

                    this.SORT(this.$tabName, 'title')

                    Loader.hide();
                    Block.hide();
                    Catalog.active = false
                }
            })

            this.$tabArticle.on('click', () => {
                const Loader = $('.loader_pragma_id')

                const Block = $('.pragma_block')

                if (!Catalog.active) {
                    Catalog.active = true
                    Block.show();
                    Loader.show();
                    this.SORT(this.$tabArticle, 'article')
                    Block.hide();
                    Loader.hide();

                    Catalog.active = false

                }

            })

            this.$tabQuantity.on('click', () => {
                const Loader = $('.loader_pragma_id')
                const Block = $('.pragma_block')

                if (!Catalog.active) {
                    Catalog.active = true
                    Loader.show();
                    Block.show();
                    this.SORT(this.$tabQuantity, 'balance')
                    Loader.hide();
                    Block.hide();
                    Catalog.active = false
                }

            })

            this.$tabPrice_sail.on('click', () => {
                const Block = $('.pragma_block')

                const Loader = $('.loader_pragma_id')
                if (!Catalog.active) {
                    Catalog.active = true
                    Block.show();
                    Loader.show();
                    this.SORT(this.$tabPrice_sail, 'selling_price')

                    Block.hide();
                    Loader.hide();
                    Catalog.active = false
                }
            })

            this.$INPUT_SEARCH.on('input', async () => {
                const Block = $('.pragma_block')
                const Loader = $('.loader_pragma_id')
                if (!Catalog.active) {
                    Catalog.active = true
                    Block.show();
                    Loader.show();

                    const val_input = this.$INPUT_SEARCH.val()
                    const All_Products = JSON.parse(Catalog.AllProduct)
                    let array_includes = []
                    for (const I in All_Products) {
                        const ITEM = All_Products[I]
                        const ARTICLE = ITEM.article
                        const TITLE = ITEM.title
                        const LArticle = ARTICLE.toLowerCase()
                        const LTitle = TITLE.toLowerCase()
                        const LInput = val_input.toLowerCase()
                        if (LArticle.includes(LInput) || LTitle.includes(LInput)) {
                            array_includes.push(ITEM)
                        }
                    }
                    array_includes.length === 0 ? $('.product_pragma-body').html(' ') : 0

                    const org_cat = functions.organization_array(array_includes, 20)
                    const btn = new Btn_arr(org_cat)
                    $('.stock_pragma-catalogs').html(btn.$)
                    $('#pagination_pragma_btn_1').trigger('click')

                    Block.hide();
                    Loader.hide();
                    Catalog.active = false

                }
            })

        }


        get $() {
            return this._$
        }

        get $body_table() {
            return this._$body_table
        }

        get $tabName() {
            return this._$tabName
        }

        get $INPUT_SEARCH() {
            return this._$INPUT_SEARCH
        }

        get $tabQuantity() {
            return this._$tabQuantity
        }

        get account_id() {
            return this._account_id
        }

        get $tabArticle() {
            return this._$tabArticle
        }

        get $tabPrice_sail() {
            return this._$tabPrice_sail
        }

        get right_section() {
            return this._right_section
        }

        static clickSectionAdd = async () => {
            const Loader = $('.loader_pragma_id')
            const Block = $('.pragma_block')
            if (!Catalog.active) {
                Catalog.active = true

                Loader.show();
                Block.show();
                const Modal_Section = new ModalSection(false)
                const obj = {
                    title: 'Новый раздел',
                    class_name: 'add_stock-modal',
                }
                modal.ConfirmModal(obj)
                const M_add_stock = $('.add_stock-modal')

                M_add_stock.find('.modal-body__inner').append(Modal_Section.$)
                Catalog.RecUnt(M_add_stock, {'border-radius': '10px', 'width': '450px'})

                Loader.hide();
                Block.hide();
                Catalog.active = false
            }

        }


        static clickProductAdd = async () => {

            const Block = $('.pragma_block')
            const Loader = $('.loader_pragma_id')
            if (!Catalog.active) {
                Catalog.active = true
                Loader.show();
                Block.show();

                const AllSection = JSON.parse(Catalog.AllSection)
                switch (AllSection.length) {
                    case 0 :
                        modal.alert.showAlertModal('Создайте Раздел', false, 1200)
                        break;
                    default:
                        const TwigModalProduct = templates.ModalProduct;
                        const m_data = await Catalog.request_dat(false)
                        const items = await ElTabProduct.items_gen()
                        const Modal_Product = new ModalProduct(TwigModalProduct, m_data, false, null, '', '', items)
                        const obj = {
                            title: 'Новый товар',
                            class_name: 'add_product-modal',
                        }
                        modal.ConfirmModal(obj)
                        const M_add_product = $('.add_product-modal')
                        M_add_product.find('.modal-body__inner').append(Modal_Product.$)
                        Catalog.RecUnt(M_add_product, {'border-radius': '10px'})

                        break;
                }

                Block.hide();
                Loader.hide();
                Catalog.active = false

            }


        }


        SORT = ($OBJ, name_index) => {
            this.delete_arrow()
            this.color($OBJ)
            let array_article = []
            $('.table-article-el-label').each(function () {
                let article = $(this).text().trim()
                array_article.push(article)
            });
            let arrow
            let sort_product = (JSON.parse(Catalog.AllProduct))
            let New_array = [];

            for (const product in array_article) {
                const item = sort_product.find(item => item.article == array_article[product])
                New_array.push(item)
            }

            New_array.sort(function (a, b) {
                let _a = a[name_index]
                let _b = b[name_index]
                if (name_index === 'selling_price' || name_index === 'balance') {
                    _a *= 1
                    _b *= 1
                }
                if (_a > _b)
                    return 1;
                if (_a < _b)
                    return -1;
                return 0;

            });

            switch (Catalog.FlagSort) {
                case false :
                    Catalog.FlagSort = true
                    const id_down = "arrow_down_catalog_pragma"
                    arrow = Catalog.ArrowDown.render({id_down})
                    break;
                case true :
                    New_array = New_array.reverse()
                    Catalog.FlagSort = false
                    const id_up = "arrow_down_catalog_pragma"
                    arrow = Catalog.ArrowUp.render({id_up})
                    break;
            }
            $OBJ.append(arrow);
            let sort_array = []
            functions.Settings._integer = Catalog.fractional
            functions.setTbd(true)

            for (let i in New_array) {
                const el = new ElTabProduct(New_array[i])
                sort_array.push(el.$)
            }
            this.$body_table.html(sort_array)
        }

        color = ($OBJ) => {
            const color = "rgba(133,145,165,.5)"
            $('.body-table-name-label').css({color: color})
            $('.body-table-article-label').css({color: color})
            $('.body-table-quantity-label').css({color: color})
            $('.body-table-price_sail-label').css({color: color})
            $OBJ.find('div').css({color: "#6e747a"})
        }
        delete_arrow = () => {
            $('.pragma_arrow_up').remove()
            $('.pragma_arrow_down').remove()
        }

        FillGetData = async (num = 25) => {

            const Loader = $('.loader_pragma_id')
            const Block = $('.pragma_block')
            if (!Catalog.active) {
                Catalog.active = true
                Loader.show();
                Block.show();

                Catalog.AllSection = await functions.request({
                    flag: 'section_get',
                    account_id: this.account_id,
                })

                Catalog.AllProduct = await functions.request({
                    flag: 'products_get',
                    account_id: this.account_id,
                    store_id: Catalog.Store_id,
                })


                ElementSection.Twig = templates.rightcatalog
                ModalSection.Twig = templates.ModalSection;
                Catalog.ArrowDown = templates.ArrowDown
                Catalog.ArrowUp = templates.ArrowUp
                const parse_data = JSON.parse(Catalog.AllProduct)
                const org_cat = functions.organization_array(parse_data, num)
                const btn = new Btn_arr(org_cat)
                $('.stock_pragma-catalogs').html(btn.$)
                $('.page_coming').first().trigger('click')
                const parse_json_allSection = JSON.parse(Catalog.AllSection)
                const _RightCatalog = new RightCatalog(parse_json_allSection, parse_data)
                this.right_section.append(_RightCatalog.$)
                this.$tabName.trigger('click')

                this.active_stock().then(r => r)
                Loader.hide();
                Block.hide();
                Catalog.active = false
            }

        }


        active_stock = async () => {

            const id_active = 1 * functions.Settings.ActiveStock
            const $textStock = $('.top-first_pragma_shop')

            let AllStock = await functions.request({
                flag: 'get_stock'
            })
            if (id_active === -1)
                return $textStock.text('Все Склады')


            AllStock = JSON.parse(AllStock)
            for (const I in AllStock) {
                switch (AllStock[I].id * 1) {
                    case id_active:
                        const name = AllStock[I].title
                        $textStock.text(name)
                        break;
                }
            }

        }

        static request_dat = async (flag) => {
            let _data = Catalog.AllSection
            let parse_data = JSON.parse(_data);
            let arr = [];
            switch (flag) {
                case true:
                    arr.push({
                        option: "Новый раздел",
                        id: 'new_section'
                    })
                    break;
            }


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


        static __render = () => $(Catalog.Twig.render())
    }

    class CatalogBtnAdditional {
        _$

        constructor() {
            this._$ = CatalogBtnAdditional._render()
            this._$btnAddSection = this._$.find('#more-three-section-pragma')
            this._$btnAddProduct = this._$.find('#four-add_product_pragma')
            this.bind_actions()
        }

        bind_actions = () => {
            this.$btnAddSection.on('click', async () => {
                await Catalog.clickSectionAdd()

            })

            this.$btnAddProduct.on('click', async () => {
                await Catalog.clickProductAdd()
            })
        }

        get $() {
            return this._$
        }

        get $btnAddSection() {
            return this._$btnAddSection
        }

        get $btnAddProduct() {
            return this._$btnAddProduct
        }


        static _render = () => {
            const Btn = `
              <div class="top-three_more-three">
            <button type="button" class="button-input button-input_blue   more-three-section" tabindex=""
                    id="more-three-section-pragma"><span class="button-input-inner ">

    <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px" xmlns:xlink="http://www.w3.org/1999/xlink"
         width="7pt" height="7pt" viewBox="0 0 7 7" version="1.1">
<path style="fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;"
      d="M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 "
      transform="matrix(0.0199164,0,0,0.0199164,0,0)"></path>
<path style="fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;"
      d="M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 "
      transform="matrix(0.000000000000000001,0.0199164,-0.0199164,0.000000000000000001,7,0)"></path>
</svg>

    <span class="button-input-inner__text">ДОБАВИТЬ РАЗДЕЛ</span></span></button>
        </div>
              <div class="top-three_more-four">
            <button type="button" class="button-input button-input_blue   more-four-add_product" tabindex=""
                    id="four-add_product_pragma"><span class="button-input-inner ">
    <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px" xmlns:xlink="http://www.w3.org/1999/xlink"
         width="7pt" height="7pt" viewBox="0 0 7 7" version="1.1">
<path style="fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;"
      d="M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 "
      transform="matrix(0.0199164,0,0,0.0199164,0,0)"></path>
<path style="fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(100%,100%,100%);stroke-opacity:1;stroke-miterlimit:10;"
      d="M 159.259844 0.196133 L 192.210156 0.196133 L 192.210156 351.273867 L 159.259844 351.273867 Z M 159.259844 0.196133 "
      transform="matrix(0.000000000000000001,0.0199164,-0.0199164,0.000000000000000001,7,0)"></path>
</svg>
    <span class="button-input-inner__text">ДОБАВИТЬ ТОВАР</span></span></button>
        </div>`

            return $(Btn)
        }
    }


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
    }
})