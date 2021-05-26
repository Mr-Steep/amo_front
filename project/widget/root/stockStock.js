define([
    'jquery',
    '../temp/load.js',
    '../root/Catalog.js',
    '../root/Coming.js',
    '../root/Consumption.js',
    '../root/Deficit.js',
    '../temp/modal.js',
    '../root/function.js',
    '../root/LeftPage.js',
    '../root/drops/Drops.js',


], function (
    $,
    load,
    Catalog,
    Coming,
    Consumption,
    Deficit,
    modal,
    functions,
    LeftPage,
    drops
) {


    const templates = load.TwigWrapper._templates

    class Modal_Select {
        _$
        _id
        _$Select
        static Twig

        constructor(id_status, name_status, item, selected) {
            this._id = id_status
            this._$ = Modal_Select.__render(this._id, name_status, item, selected)
            this._$Select = this._$.find('.stock-el_pipe')
            this.bind_action()

        }

        bind_action = () => {
            this.$.on('click', () => {
                const $new_val = this.new_value_status_pip()
                ModalSettings.Array_set_pip.find(Item => {
                    switch (Item.entity_status_id) {
                        case this.id:
                            Item.export_status_id = $new_val
                            break;
                    }
                })
            })

        }

        get $() {
            return this._$
        }

        get id() {
            return this._id * 1

        }

        get $Select() {
            return this._$Select
        }

        new_value_status_pip = () => {
            return this.$Select.find('input').val() * 1;
        }

        static __render = (id_status, name_status, item, selected) => $(Modal_Select.Twig.render({
            id_status,
            name_status,
            item,
            selected
        }))


    }

    class ModalSettings {

        _$
        _$Input
        _$BtnSave
        _$Select_pip
        _$$Fractional
        static Twig
        static fractional
        static pipelines = []
        static Array_set_pip = []
        static active = false
        static getSet


        constructor() {
            this._$ = ModalSettings.__render(ModalSettings.pipelines, ModalSettings.fractional)
            this._$Input = this._$.find('.header-select_pip')
            this._$BtnSave = this._$.find('.stock_settings-save')
            this._$Select_pip = this._$.find('#epipelines_id')
            this._$$Fractional = this._$.find('#coun_pragma_float')
            this.bind_actions()
        }

        bind_actions = () => {

            this.$Input.on('click', async () => {
                const id_selected = $('#epipelines_id').val()
                await this.filling(id_selected)

            })

            this.$BtnSave.on('click', async () => {
                modal.ConfirmModal({
                    title: 'Сохранить Настройки',
                    accept_text: 'Сохранить',
                    cancel_text: 'Отмена',
                    accept_func: async () => {
                        await functions.req_setting({
                            flag: 'save_settings',
                            data: ModalSettings.Array_set_pip,
                            fractional: this.getFractional()

                        })
                        $('.modal-body__close').trigger('click')
                    },
                    class_name: 'se_save-modal',
                })

            })

        }


        get $() {
            return this._$
        }


        get $BtnSave() {
            return this._$BtnSave
        }


        get $Input() {
            return this._$Input
        }

        get $$Fractional() {
            return this._$$Fractional
        }

        getFractional = () => {
            return this.$$Fractional.is(':checked')
        }

        filling = async (id_) => {
            const array = ModalSettings.pipelines;
            for (const index in array) {
                if (array.hasOwnProperty(index)) {
                    if (array[index].id * 1 === id_ * 1) {
                        const array_option = await this.RENDER_PIPELINES(array[index].status_pipelines)
                        $('.stock_settings-body').html(array_option)
                        break;
                    }
                }
            }
        }

        RENDER_PIPELINES = async (array) => {
            let arr = []
            Modal_Select.Twig = templates.pipeline
            const data_parse = ModalSettings.Array_set_pip
            const item = await this.get_statuses()
            for (const i in array) {
                if (array.hasOwnProperty(i)) {
                    let name_status = array[i].option
                    let id_status = array[i].id
                    const selected = data_parse.find(item => {
                        if (item.entity_status_id === id_status) {
                            return item
                        }
                    })

                    let el = new Modal_Select(id_status, name_status, item, selected.export_status_id)
                    arr.push($(el.$))
                }
            }
            return arr
        }

        get_statuses = async () => {
            let new_array_statuses = []

            const arr_statuses = ModalSettings.getSet.statuses
            for (const i in arr_statuses) {
                if (arr_statuses.hasOwnProperty(i)) {
                    new_array_statuses.push({
                        id: arr_statuses[i].id,
                        option: arr_statuses[i].title
                    })
                }

            }
            return new_array_statuses
        }

        static getSettings = async () => {

            const data = await functions.req_setting({
                flag: 'get_all_settings'
            })
            ModalSettings.getSet = JSON.parse(data)
            functions.Settings.ActiveStock = ModalSettings.getSet.active_stock
        }


        static GET_PIPELINES = async () => {

            const Settings = ModalSettings.getSet
            const res = Settings.pipelines
            const Settings_PIP = Settings.links
            ModalSettings.fractional = Settings.fractional


            let arr = [];
            ModalSettings.Array_set_pip = []

            for (const i in res) {
                if (res.hasOwnProperty(i)) {
                    let status = res[i].statuses
                    arr.push({
                        id: res[i].pragma_id,
                        option: res[i].name,
                        status_pipelines: ModalSettings.status(status)
                    })
                    for (const KStatus in status) {
                        if (status.hasOwnProperty(KStatus)) {
                            ModalSettings.Array_set_pip.push({
                                pipeline_id: res[i].pragma_id,
                                export_status_id: 1,
                                entity_status_id: status[KStatus].pragma_id,
                            })
                        }
                    }
                }
            }

            if (Settings_PIP.length > 0) {
                for (const i in Settings_PIP) {
                    if (Settings_PIP.hasOwnProperty(i)) {
                        const id = Settings_PIP[i].entity_status_id * 1
                        ModalSettings.Array_set_pip.find(item => {
                            if (id === item.entity_status_id * 1) {
                                item.export_status_id = Settings_PIP[i].export_status_id
                            }
                        })
                    }

                }
            }

            ModalSettings.pipelines = arr
        }


        static status = (status) => {
            let dada = []
            for (const i in status) {
                if (status.hasOwnProperty(i)) {
                    dada.push({
                        id: status[i].pragma_id,
                        option: status[i].name
                    })
                }

            }
            return dada

        }


        static  __render = (pipelines, fractional) => $(ModalSettings.Twig.render({pipelines, fractional}))
    }

    class NavBar {

        _$


        constructor() {
            this._$ = NavBar._render()
            const Drops = new drops()
            this._$.find('#top-three_more-first').replaceWith(Drops.$)
            this._PlaceAddBtn = this._$.find('.top-three_more_addition_btn')
            this._$Settings = this._$.find('#second_settings-pragma')

            this.bind_actions()
        }

        bind_actions = () => {



            this.$Settings.on('click', async () => {
                const Block = $('.pragma_block')
                const Loader = $('.loader_pragma_id')
                if (!ModalSettings.active) {
                    ModalSettings.active = true
                    Loader.show();
                    Block.show();
                }


                ModalSettings.Twig = templates.settings

                await ModalSettings.GET_PIPELINES()

                const ModalSetting = new ModalSettings()
                const obj = {
                    title: 'Настройки',
                    class_name: 'stock_settings-modal',
                }
                modal.ConfirmModal(obj)

                $('.stock_settings-modal').find('.modal-body__inner').append(ModalSetting.$)
                $('div.modal-body').attr('style', 'display: block; margin-top: -950px; margin-left: -225px;')

                ModalSetting.$Input.trigger('click')


                Loader.hide();
                Block.hide();
                ModalSettings.active = false
            })

        }

        get $() {
            return this._$
        }



        get $Settings() {
            return this._$Settings
        }

        get PlaceAddBtn() {
            return this._PlaceAddBtn
        }


        addBtn = (btn) => {
            this.PlaceAddBtn.html(btn)
        }

        static _render = () => $(templates.NavBarStock.render())

    }

    class StockStock {
        _$
        _$CATALOG
        _$COMING
        _$CONSUMPTION
        _$DEFICIT
        _$SETTINGS
        _account_id
        _$PaceFoot
        _$NameFirstStock
        _$left_MENU
        _$blackout
        _$navbar

        constructor(twig, navbar) {
            this._$ = StockStock.__render(twig)
            this._$navbar = navbar
            this._$.find('#navbar_pragma-stock').append(this._$navbar.$);
            this._$CATALOG = this._$.find('.header_products');
            this._$COMING = this._$.find('.header_coming');
            this._$CONSUMPTION = this._$.find('.header_consumption');
            // this._$DEFICIT = this._$.find('.header_deficit');
            // this._$SETTINGS = this._$.find('#second_settings-pragma');
            this._$PaceFoot = this._$.find('.left_header_footer');
            this._$NameFirstStock = this._$.find('.right_pragma__top-first')
            this._$left_MENU = this._$.find('.stock_pragma-left')
            this._$blackout = this._$.find('.blackout')
            this._account_id = AMOCRM.constant('account').id
            this.bind_action()

        }

        bind_action = () => {

            this.$CATALOG.on('click', async () => {
                functions.Settings.view_page = 'catalog'
                const bnts = new Catalog.CatalogBtnAdditional()
                this.$navbar.addBtn(bnts.$)
                Catalog.Product._section = null
                Catalog.Catalog.fractional = ModalSettings.fractional
                Catalog.Catalog.Twig = templates.products
                const _Catalog = new Catalog.Catalog()

                this.$.find('.Stock_pragma-body').html(_Catalog.$)
                this.change_color('header_products')
                $('.header_products').css('border-bottom', '2px solid #0582E4')

            })
            this.$COMING.on('click', async () => {
                functions.Settings.view_page = 'coming'
                const bnts = new Coming.ComingBtnAdditional()
                this.$navbar.addBtn(bnts.$)
                Coming.Coming.fractional = ModalSettings.fractional
                Coming.Coming.Twig = templates.coming
                const _Coming = new Coming.Coming()
                this.$.find('.Stock_pragma-body').html(_Coming.$)
                this.change_color('header_coming')
                $('.header_coming').css('border-bottom', '2px solid #5C45EF')
                $('.stock_pragma-catalogs').html('')


            })
            this.$CONSUMPTION.on('click', async () => {
                functions.Settings.view_page = 'consumption'
                this.$navbar.addBtn(" ")
                Consumption.fractional = ModalSettings.fractional
                const consumption_twi = templates.consumption
                const _Consumption = new Consumption(consumption_twi);
                this.$.find('.Stock_pragma-body').html(_Consumption.$)
                this.change_color('header_consumption')
                $('.header_consumption').css('border-bottom', '2px solid #DA20F9')
                $('.stock_pragma-catalogs').html('')

            })
            // this.$DEFICIT.on('click', async () => {
            //     const deficit_twi = templates.deficit
            //     const _Deficit = new Deficit(deficit_twi);
            //     this.$.find('.Stock_pragma-body').html(_Deficit.$)
            //     this.change_color('header_deficit')
            //     $('.header_deficit').css('border-bottom', '2px solid #EA545E')
            //     $('.stock_pragma-catalogs').html('')
            // })


            this.$NameFirstStock.on('click', () => {
                this.$left_MENU.show()
                $('body').css({'overflow-y': 'hidden'})
                this.$blackout.removeAttr("hidden")
            })

            this.$blackout.on('click', () => {
                this.$left_MENU.hide()
                this.$blackout.attr('hidden', '')
                $('body').css({'overflow-y': ''})

            })


            this.rend_left()


        }

        rend_left = () => {
            const LP = new LeftPage.LeftPage();
            this.$PaceFoot.html(LP.$)
            // const AllStocks = new LeftPage.AllStocks()
            // this.$.find('.stock-left_body').html(AllStocks.$)

        }

        change_color = (name_class) => {
            let color = ''
            const arr =
                ['header_products',
                    'header_coming',
                    'header_consumption',
                    'header_deficit']
            for (const item in arr) {
                if (arr.hasOwnProperty(item)) {
                    if (arr[item] === name_class) {
                        continue;
                    }
                    const _el = $(`.${arr[item]}`)
                    _el.css("background-color", '#E6EFF8')
                        .css('border-bottom', '2px solid #E6EFF8')
                    _el.hover(function () {
                        $(this).css("background-color", '#D9E6F2')
                        color = StockStock.color_(arr[item])
                        const str = '2px solid ' + color
                        $(this).css('border-bottom', str)
                    }, function () {
                        $(this).css("background-color", '#E6EFF8')
                        $(this).css('border-bottom', '2px solid #E6EFF8');
                    });
                }

            }

            const el = $(`.${name_class}`)
            el.off("mouseenter mouseleave");
            el.css("background-color", '#D9E6F2')
            el.css('border-bottom', `2px solid ${color}`)

            $('.product_pragma-header').html('');

        }



        static  color_ = (name_class) => {
            let color
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
            return color
        }

        get $() {
            return this._$
        }

        get $navbar() {
            return this._$navbar
        }

        get $PaceFoot() {
            return this._$PaceFoot
        }

        get $CATALOG() {
            return this._$CATALOG
        }

        get $left_MENU() {
            return this._$left_MENU
        }

        get $blackout() {
            return this._$blackout
        }

        get $DEFICIT() {
            return this._$DEFICIT
        }

        get $COMING() {
            return this._$COMING
        }

        get $CONSUMPTION() {
            return this._$CONSUMPTION
        }

        get $NameFirstStock() {
            return this._$NameFirstStock
        }


        static __render = twig => $(twig.render())

    }


    return async (self) => {
        await load.TwigWrapper.load_templates(self)
        await ModalSettings.getSettings()
        await ModalSettings.GET_PIPELINES()
        LeftPage.LeftPage.Twig = templates.LeftPage
        LeftPage.itemStock.Twig = templates.itemStock
        const TWIG_stock = templates.stockStock
        const navbar = new NavBar()
        const Stock = new StockStock(TWIG_stock, navbar)
        const $wa = $('#work_area')
        $wa.html(Stock.$)
        $wa.css({'padding': '0px'})
        $('.stock_pragma-left').hide()
        if(functions.Settings.ActiveStock === -1){
            $('.stock_pragma-header-products').trigger('click')
        }

    }

})
