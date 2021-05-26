define([
        'jquery',
        '../temp/load.js',
        '../temp/modal.js',
        '../root/function.js',
    ], function (
    $,
    load,
    modal,
    functions
    ) {

        const templates = load.TwigWrapper._templates

        class ModalConsumptionElementTable {
            _$
            static Twig
            static No = 1

            constructor(data) {
                this._no = ModalConsumptionElementTable.No++
                this._id = data.product_id
                this._article = data.article
                this._title = data.title
                this._quantity = functions.Settings.FractionNumbers(data.quantity)
                this._selling_price = functions.Settings.FractionNumbers(data.selling_price * 1)
                this._sum = functions.Settings.FractionNumbers(this._quantity * this._selling_price)
                this._$ = ModalConsumptionElementTable.__render(this._id, this._no, this._article, this._title, this._quantity, this._selling_price, this._sum)
                ModalConsumption.sum += this._sum * 1
            }

            get $() {
                return this._$
            }


            static __render = (id,
                               no,
                               article,
                               title,
                               quantity,
                               selling_price,
                               sum
            ) => $(ModalConsumptionElementTable.Twig.render({
                id,
                no,
                article,
                title,
                quantity,
                selling_price,
                sum
            }))

        }

        class ModalConsumption {
            _$
            _id
            _id_leads
            _consumption_body
            _Total
            _status_id
            _status
            static Twig
            static sum

            constructor(data) {
                ModalConsumption.sum = 0
                this._id = data.id
                this._id_leads = data.id_leads
                this._date = data.date
                this._href_leads = data.href_leads
                this._name_leads = data.name_leads
                this._customer = data.name_contact
                this._href_contact = data.href_contact
                this._customer_tel = data.phone_number
                this._status_id = data.status_id
                this._$ = ModalConsumption.__render(this._id_leads, this._date, this._href_leads, this._name_leads, this._href_contact, this._customer, this._customer_tel)
                this._consumption_body = this._$.find('.m_table_consumption_body')
                this._Total = this._$.find('.footer-total-value')
                this._status = this._$.find('.consumption-status')

                this.render_modal_table().then(r => r)
            }

            render_modal_table = async () => {
                const lead_array = this.item_array_leads()
                ModalConsumptionElementTable.Twig = templates.ModalConsumptionElementTable
                let array_modal_el = []
                for (const i in lead_array) {
                    if (lead_array.hasOwnProperty(i)) {
                        const el = new ModalConsumptionElementTable(lead_array[i])
                        array_modal_el.push(el.$)
                    }

                }

                this.consumption_body.html(array_modal_el)

                this.Total.text(functions.Settings.FractionNumbers(ModalConsumption.sum))
                this.stat()

            }

            get $() {
                return this._$
            }

            get id_leads() {
                return this._id_leads
            }

            get Total() {
                return this._Total
            }

            get id() {
                return this._id
            }

            get status_id() {
                return this._status_id
            }

            get status() {
                return this._status
            }

            get consumption_body() {
                return this._consumption_body
            }


            stat = () => {

                let col = ''
                let title = ''
                Consumption.REQUEST_Status.find(item => {
                    if (item.id === this.status_id) {
                        title = item.title
                        switch (item.id) {
                            // case  1:
                            // col = '#FFDD87';
                            // break;
                            case  2:
                                col = '#FF9D87';
                                break;
                            case  3:
                                col = '#BCFF87';
                                break;
                        }
                    }
                })

                this.status
                    .css('background-color', col)
                    .text(title)

                this.$.find('.modal_consumption-head_color').css('background-color', col)


            }


            item_array_leads = () => {
                let array_leads = []
                const All_export = Consumption.AllObject

                for (const i in All_export) {
                    if (All_export.hasOwnProperty(i)) {
                        switch (All_export[i].entity_id) {
                            case this.id_leads :
                                array_leads.push({
                                    product_id: All_export[i].product_id,
                                    quantity: All_export[i].quantity,
                                    selling_price: All_export[i].selling_price,
                                    article: this.get_article(All_export[i].product_id),
                                    title: this.get_name(All_export[i].product_id)
                                })
                        }
                    }
                }
                return array_leads
            }

            get_name = (product_id) => {
                let title = ''

                Consumption.AllProduct.find(item => {
                    switch (item.id) {
                        case product_id:
                            title = item.title
                            break;
                    }
                })
                return title
            }

            get_article = (product_id) => {
                let article

                Consumption.AllProduct.find(item => {
                    switch (item.id) {
                        case product_id:
                            article = item.article
                            break;
                    }
                })
                return article

            }

            static __render = (id_leads, date, href_leads, name_leads, href_contact, customer, customer_tel) => $(ModalConsumption.Twig.render({
                id_leads,
                date,
                href_leads,
                name_leads,
                href_contact,
                customer,
                customer_tel
            }))


        }

        class ElTable {
            _$
            _data
            _id
            _date
            _name_leads
            _href_leads
            _href_contact
            _name_contact
            _selling_price
            _status_id
            _leads
            _$status
            _no = 1

            static Twig
            static active = false


            constructor(data) {
                this._no = Btn_arrConsupmtion.counter++
                this._data = data
                this._id = this._data.id
                this._date = this._data.date
                this._leads = this._data.leads
                this._name_leads = this._data.name_leads
                this._href_leads = this._data.href_leads
                this._href_contact = this._data.href_contact
                this._name_contact = this._data.name_contact
                this._phone_number = this._data.phone_number
                this._responsible = this._data.responsible
                this._selling_price = functions.Settings.FractionNumbers(this._data.selling_price)
                this._status_id = this._data.status_id
                this._$ = ElTable.__render(this._id, this._no, this._date, this._name_leads, this._href_leads, this._responsible, this._name_contact, this._href_contact, this._selling_price, this._status_id, functions.tbl())
                this._$status = this._$.find('.table_cons-status')
                this.rend_status()
                this.bind_action()

            }

            bind_action = () => {

                this.$.on('click', async (e) => {
                    const Block = $('.pragma_block')
                    const Loader = $('.loader_pragma_id')
                    if (!ElTable.active) {
                        ElTable.active = true
                        Loader.show();
                        Block.show();


                        switch (e.target.nodeName) {
                            case 'A' :
                            case 'a' :
                                break;
                            default:
                                ModalConsumptionElementTable.No = 1
                                ModalConsumption.Twig = templates.ModalConsumption
                                const _ModalConsumption = new ModalConsumption(this.data_())
                                const obj = {
                                    class_name: 'consumption-modal',
                                }
                                modal.ConfirmModal(obj)
                                const M_consumption = $('.consumption-modal')
                                M_consumption.find('.modal-body__inner').append(_ModalConsumption.$)
                                Consumption.RecUnt(M_consumption, {'border-radius': '10px', 'width': '900px'})
                                break;
                        }


                        Loader.hide();
                        Block.hide();
                        ElTable.active = false

                    }
                })

            }

            rend_status = () => {
                let title_status = ''
                let color = ''
                Consumption.REQUEST_Status.find(item => {
                    if (item.id === this.status_id) {
                        title_status = item.title
                        switch (item.id) {
                            case  1:
                                color = '#FFDD87';
                                break;
                            case  2:
                                color = '#FF9D87';
                                break;
                            case  3:
                                color = '#BCFF87';
                                break;
                        }
                    }
                })

                this.$status.css('background-color', color)

            }


            get $() {
                return this._$
            }

            get data() {
                return this._data
            }

            get id() {
                return this._id
            }

            get leads() {
                return this._leads
            }

            get $status() {
                return this._$status
            }

            get date() {
                return this._date
            }

            get name_leads() {
                return this._name_leads
            }

            get href_leads() {
                return this._href_leads
            }

            get href_contact() {
                return this._href_contact
            }

            get name_contact() {
                return this._name_contact
            }

            get phone_number() {
                return this._phone_number
            }

            get selling_price() {
                return this._selling_price
            }

            get status_id() {
                return this._status_id
            }

            data_ = () => {
                return {
                    id_leads: this.leads,
                    id: this.id,
                    date: this.date,
                    href_leads: this.href_leads,
                    name_leads: this.name_leads,
                    name_contact: this.name_contact,
                    href_contact: this.href_contact,
                    phone_number: this.phone_number,
                    status_id: this.status_id
                }
            }


            static __render = (id,
                               no,
                               date,
                               name_leads,
                               href_leads,
                               responsible,
                               name_contact,
                               href_contact,
                               selling_price,
                               status_id,
                               tbl) => $(
                ElTable.Twig.render({
                    id,
                    no,
                    date,
                    name_leads,
                    href_leads,
                    responsible,
                    name_contact,
                    href_contact,
                    selling_price,
                    status_id,
                    tbl
                })
            )


        }

        class Btn_arrConsupmtion {
            _$
            _$Prev
            _$Next
            _$Input
            static counter

            constructor(arr) {
                this._$ = Btn_arrConsupmtion.__render("consumption")
                this._$.find('.pragma_pagination-pages_pragma').html(Btn_arrConsupmtion.render_btn(arr))
                this._$Prev = this._$.find('.pragma_pagination_prev')
                this._$Next = this._$.find('.pragma_pagination_next')
                this._$Input = this._$.find('#pragma_input_quantity_stock')
                this.bind_actions()
            }

            bind_actions = () => {


                this.$Prev.on('click', () => {
                    const all_btn = $('.page_coming').length
                    let num = OrgConsumption.id_click
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
                    const all_btn = $('.page_coming').length
                    let num = OrgConsumption.id_click
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
                    let parse_data = Consumption.AllExport
                    const org_cat = functions.organization_array(parse_data, value)
                    const btn = new Btn_arrConsupmtion(org_cat)
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

            get $Next() {
                return this._$Next
            }

            get $Input() {
                return this._$Input
            }


            static  render_btn = (array) => {
                let arr = [];
                for (let i = 0; i < array.length; i++) {
                    let button_page = new OrgConsumption(array[i].page, array[i].products)
                    arr.push(button_page.$)
                }
                return arr
            }
            static __render = _class_ => {
                return $(templates.PaginationPragma.render({_class_}))
            }

        }

        class OrgConsumption {

            _$
            _Data
            static id_click

            constructor(page, data) {
                this._id = page * 1 + 1
                this._Data = data

                this._$ = OrgConsumption.__render(this._id)
                this.bind_action()
            }

            bind_action = () => {
                this.$.on('click', () => {

                    Btn_arrConsupmtion.counter = this.id * 25 - 24
                    const arr = this.Data
                    let arr_new = [];
                    functions.setTbd(true)
                    for (const index in arr) {
                        if (arr.hasOwnProperty(index)) {
                            let table = new ElTable(arr[index])
                            arr_new.push(table.$)
                        }
                    }
                    this.active_btn()
                    $('.consumption_table_body').html(arr_new)
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

            active_btn = () => {
                OrgConsumption.id_click = this.id

                $('.page_coming').each(function () {
                    $(this).find('span').find('span').css({color: '#c6cace'})
                    $(this).hover(
                        () => {
                            $(this).find('span').find('span').css({color: '#313942'})
                        },
                        () => {
                            $(this).find('span').find('span').css({color: '#c6cace'})
                        }
                    )
                })

                const el = $(`#pagination_pragma_btn_${this.id}`)
                el.off("mouseenter mouseleave");
                el.find('span').find('span').css({color: '#313942'})

            }
            static __render = (name) => {
                const btm =
                    `<button type="button" id=pagination_pragma_btn_${name}  class="button-input    page_coming" tabindex=""  >
                     <span class="button-input-inner ">
                      <span class="button-input-inner__text">${name}</span>
                    </span>
                </button>`;

                return $(btm)
            }

        }

        class Consumption {

            static fractional
            static ActiveStock
            static AllExport = []
            static AllProduct = []
            static AllObject = []
            static REQUEST_leads = []
            static REQUEST_Contacts = []
            static REQUEST_Status = []
            static ArrowDown
            static ArrowUp
            static FlagSort = false
            static active = false
            static AllUsers

            _$Table_date
            _$Table_lead
            _$Table_contact
            _$Table_price

            _$
            _consumption_table_body
            _$InputCalendar


            constructor(twig) {

                this._$ = Consumption.__render(twig)
                this._consumption_table_body = this._$.find('.consumption_table_body')
                this._$Table_date = this._$.find('.consumption_table-date')
                this._$Table_lead = this._$.find('.consumption_table-lead')
                this._$Table_contact = this._$.find('.consumption_table-contact')
                this._$Table_price = this._$.find('.consumption_table-price')
                this._$InputCalendar = this._$.find('#_search_date')
                this.bind_action()

            }

            today_data = () => {
                let date = new Date()
                let DD = date.getDate()
                let MM = date.getMonth() + 1
                const YYYY = date.getFullYear()
                DD = DD < 10 ? '0' + DD : DD
                MM = MM < 10 ? '0' + MM : MM
                return DD + '.' + MM + '.' + YYYY
            }
            bind_action = () => {

                this.$InputCalendar.on('focusout', async () => {
                    ElTable.no = 1

                    const val = this.$InputCalendar.val()

                    switch (val.length) {
                        case 0:
                            await this.RENDER_TABLE()
                            break;

                        case 23 :
                            this.search_render(val, 0)
                            break;
                        case 20:
                            this.search_render(val, 1)
                            break;
                        case 13 :
                            this.search_render(val, 2)
                            break;

                    }


                })


                this.Table_date.on('click', () => {
                    this.SORT(this.Table_date, 'date')
                })
                this.Table_lead.on('click', () => {
                    this.SORT(this.Table_lead, 'name_leads')
                })
                this.Table_contact.on('click', () => {
                    this.SORT(this.Table_contact, 'name_contact')
                })
                this.Table_price.on('click', () => {
                    this.SORT(this.Table_price, 'selling_price')
                })

                this.RENDER_TABLE().then(r => r)


            }


            get $() {
                return this._$
            }

            get consumption_table_body() {
                return this._consumption_table_body
            }

            get $InputCalendar() {
                return this._$InputCalendar
            }

            get Table_date() {
                return this._$Table_date
            }

            get Table_lead() {
                return this._$Table_lead
            }

            get Table_contact() {
                return this._$Table_contact
            }

            get Table_price() {
                return this._$Table_price
            }

            static RecUnt = ($OBJ, data) => {
                $OBJ.children().children().css(data)
                $OBJ.find('.modal-body')
                    .trigger('modal:loaded')
                    .trigger('modal:centrify')
            }


            SORT = ($OBJ, NAME_SORT) => {
                this.delete_arrow()
                this.color($OBJ)
                ElTable.no = 1

                let array_id_for_SORT = []

                $('.ElTableConsumption-table_cons').each(function () {
                    let _id = $(this).attr('id')
                    array_id_for_SORT.push(_id)
                })
                let arrow
                let AllExport = Consumption.AllExport
                let New_array = [];
                for (const product in array_id_for_SORT) {
                    const item = AllExport.find(item => item.id == array_id_for_SORT[product])
                    New_array.push(item)
                }
                switch (NAME_SORT) {
                    case 'date':
                        New_array = this.SORT_DATE(New_array)
                        break;
                    default:
                        New_array.sort(function (a, b) {
                            let _a = a[NAME_SORT]
                            let _b = b[NAME_SORT]
                            if (NAME_SORT === 'selling_price') {
                                _a *= 1
                                _b *= 1
                            }
                            if (_a > _b)
                                return 1;
                            if (_a < _b)
                                return -1;
                            return 0;

                        });
                        break;
                }


                switch (Consumption.FlagSort) {
                    case false :
                        Consumption.FlagSort = true
                        const id_down = "arrow_down_consumption_pragma"

                        arrow = Consumption.ArrowDown.render({id_down})
                        break;
                    case true :
                        New_array = New_array.reverse()
                        Consumption.FlagSort = false
                        const id_up = "arrow_down_consumption_pragma"

                        arrow = Consumption.ArrowUp.render({id_up})
                        break;
                }

                Btn_arrConsupmtion.counter = OrgConsumption.id_click * 25 - 24

                $OBJ.append(arrow);
                let sort_array = []
                functions.setTbd(true)
                for (let i in New_array) {
                    const el = new ElTable(New_array[i])
                    sort_array.push(el.$)
                }
                this.consumption_table_body.html(sort_array)


            }

            color = ($OBJ) => {
                const color = "rgba(133,145,165,.5)"
                $('.consumption_table-date-label').css({color: color})
                $('.consumption_table-price-label').css({color: color})
                $('.consumption_table-responsible-label').css({color: color})
                $('.consumption_table-lead-label').css({color: color})
                $('.consumption_table-contact-label').css({color: color})
                $OBJ.find('div').css({color: "#6e747a"})
            }

            SORT_DATE = (employees) => {
                const arr = employees.sort(function (a, b) {
                    let dateA = rend_data(a.date)
                    let dateB = rend_data(b.date)
                    return dateA - dateB //сортировка по возрастающей дате
                })

                function rend_data(data) {
                    const ar_date = data.split('.')
                    return new Date(ar_date[2], ar_date[1], ar_date[0])
                }

                return arr
            }


            delete_arrow = () => {
                $('.pragma_arrow_up').remove()
                $('.pragma_arrow_down').remove()
            }


            search_render = (data, flag) => {
                let new_data
                let one_date
                let two_date
                switch (flag) {
                    case 0:
                        new_data = data.split('-')
                        one_date = new_data[0].trim()
                        two_date = new_data[1].trim()
                        break;
                    case 1:
                        two_date = this.today_data()
                        one_date = this.today_data()
                        break;
                    case 2:
                        two_date = data
                        one_date = data
                        break;
                }

                if (one_date.length === 10) {
                    const ARRAY_DATE = this.create_array_date(one_date, two_date)
                    const ARRAY_WE = Consumption.AllExport
                    let INCLUDES_ARRAY = []
                    functions.setTbd(true)
                    for (const K in ARRAY_WE) {
                        if (ARRAY_WE.hasOwnProperty(K)) {
                            if (ARRAY_DATE.includes(ARRAY_WE[K].date)) {
                                const obg = new ElTable(ARRAY_WE[K])
                                INCLUDES_ARRAY.push(obg.$)
                            }
                        }
                    }
                    this.consumption_table_body.html(INCLUDES_ARRAY)
                }
                this.Table_date.trigger('click')

            }


            create_array_date = (start, finish) => {
                if (start.length === 10 && finish.length === 10) {
                    let _start = start
                    let _finish = finish
                    let ARRAY_DATE = []

                    while (_start != _finish) {
                        let data_one = _start.split('.');
                        let DAY_data_one = data_one[0].trim() * 1;
                        let MONTH_data_one = data_one[1].trim() * 1 - 1;
                        let YEAR_data_one = data_one[2].trim() * 1;
                        let start_ = new Date(YEAR_data_one, MONTH_data_one, DAY_data_one);
                        let DAY = start_.getDate();
                        let MONTH = start_.getMonth();
                        let YEAR = start_.getFullYear();
                        DAY = DAY < 10 ? '0' + DAY : DAY;
                        MONTH = MONTH + 1;
                        MONTH = MONTH < 10 ? '0' + MONTH : MONTH;
                        let DATA = DAY + '.' + MONTH + '.' + YEAR;
                        ARRAY_DATE.push(DATA);
                        DAY = (DAY * 1) + 1
                        DAY = DAY < 10 ? '0' + DAY : DAY;
                        _start = DAY + '.' + MONTH + '.' + YEAR;
                    }
                    ARRAY_DATE.push(_start);
                    return ARRAY_DATE
                }
                return 0
            }


            RStatus = async () => {
                const data_res = await functions.req_setting({
                    flag: 'get_all_settings'
                })
                let UEST_Status = JSON.parse(data_res)
                Consumption.REQUEST_Status = UEST_Status.statuses
            }


            RENDER_TABLE = async () => {


                const Block = $('.pragma_block')
                const Loader = $('.loader_pragma_id')
                if (!Consumption.active) {
                    Consumption.active = true
                    Block.show();
                    Loader.show();

                    await this.get_data()
                    await this.RStatus()
                    ElTable.Twig = templates.ElTableConsumption
                    Consumption.ArrowDown = templates.ArrowDown
                    Consumption.ArrowUp = templates.ArrowUp
                    const org = await functions.organization_array(Consumption.AllExport, 25)
                    const render_btn = new Btn_arrConsupmtion(org)
                    $('.stock_pragma-catalogs').html(render_btn.$)
                    $('.page_coming:first').trigger('click')


                    Block.hide();
                    Loader.hide();
                    Consumption.active = false
                }
                // this.Table_date.trigger('click').trigger('click')

            }


            data_calculate = (data) => {

                let start = new Date();
                let end = new Date(data);
                let elapsed = start.getTime() - end.getTime()
                return elapsed / 86400000

            }
            nearest_date = (data_first, data_second) => {
                const one = this.data_calculate(data_first)
                const two = this.data_calculate(data_second)
                return one < two ? data_first : data_second

            }

            searchLeads = (id) => {
                return `https://${window.location.host}/leads/detail/${id}/?tab_id=pmstorage`
            }
            href_contacts = (id) => {
                return `https://${window.location.host}/contacts/detail/${id}`
            }

            name_leads = (id_leads) => {
                let name = ''
                Consumption.REQUEST_leads.find(item => {
                    switch (item.id) {
                        case id_leads:
                            name = item.name
                            break;
                    }
                })
                return name
            }

            responsible_leads = id_leads => {
                let id_resp = ''
                let name_resp = ''

                Consumption.REQUEST_leads.find(item => {
                    switch (item.id) {
                        case id_leads:
                            id_resp = item.responsible_user_id
                            break;
                    }
                })

                const users_ = Consumption.AllUsers
                for (const Key in users_) {
                    if (users_[Key].id === id_resp) {
                        name_resp = users_[Key].name
                    }
                }
                return name_resp
            }


            search_number = (arr) => {
                let tel = 0;
                for (const i in arr) {
                    if (arr.hasOwnProperty(i)) {
                        tel = arr[i].values[0].value
                    }
                }
                return tel.length > 10 && tel.length < 15 ? tel : 'Нет номера'
            }


            name_contacts = (id) => {
                let name = 0
                let tel = ''
                Consumption.REQUEST_Contacts.find(item => {
                    let variable = item._embedded.leads[0]
                    if (typeof (variable) != "undefined" && variable !== null) {
                        switch (item._embedded.leads[0]?.id) {
                            case id:
                                name = item.name
                                id = item.id
                                tel = this.search_number(item.custom_fields_values)
                                break;
                        }
                    }

                })

                if (name === 0 || name.leads === 0) {
                    return {
                        name: 0,
                        tel: 0,
                        id: id
                    }

                }
                return {
                    name: name,
                    tel: tel,
                    id: id
                }
            }

            unique = (arr) => {
                let result = [];
                for (let str of arr) {
                    if (!result.includes(str)) {
                        result.push(str);
                    }
                }
                return result;
            }

            request_leads_data = async (ARRAY, unique_arr) => {
                let arr = []
                for (const Key in ARRAY) {
                    if (ARRAY[Key]) {
                        arr.push(ARRAY[Key])
                    }
                }

                return await $.ajax({
                    url: '/api/v4/leads',
                    method: 'GET',
                    data: {
                        id: arr,
                        with: 'contacts',
                        limit: 250,
                        filter: {
                            id: unique_arr
                        }
                    }
                })
            }

            many_leads_get_data = async (ARRAY, unique_arr) => {
                let ARR = []
                let arr = [];
                let trace = true
                for (const i in ARRAY) {
                    let _i = i * 1
                    if (_i === 0) {
                        arr.push(ARRAY[i])
                    } else {

                        switch (_i % 250) {
                            case 0:
                                if (arr.length > 0) {
                                    const art = await this.request_leads_data(arr, unique_arr);
                                    trace = false
                                    ARR.push(art._embedded.leads)
                                }
                                arr = [];
                                break;
                            default:
                                arr.push(ARRAY[i])
                                trace = true
                                break;
                        }
                    }
                }
                if (trace) {
                    const arr = await this.request_leads_data(arr, unique_arr);
                    ARR.push(arr._embedded.leads)
                }


                return ARR
            }


            request_leads = async (array_id_leads) => {
                let new_arr = []
                let data = Consumption.AllObject
                for (const Key in data) {
                    if (data.hasOwnProperty(Key)) {
                        new_arr.push(data[Key].entity_id)
                    }
                }
                let unique_arr = this.unique(new_arr)
                const ARRAY = await this.many_leads_get_data(array_id_leads, unique_arr);
                Consumption.REQUEST_leads = ARRAY.flat()
            }
            create_array = (array) => {
                let arr = []
                for (const I in array) {
                    if (array.hasOwnProperty(I)) {
                        arr.push(array[I].id)
                    }
                }
                return arr
            }

            render_numbers = async () => {
                let data = Consumption.REQUEST_leads
                let new_array = [];
                for (const i in data) {
                    if (data.hasOwnProperty(i)) {
                        const array_contacts = data[i]._embedded.contacts
                        switch (array_contacts.length) {
                            case 0:
                                new_array.push({
                                    id: data[i].id,
                                    data: 0
                                })
                                break;
                            default:
                                new_array.push({
                                    id: data[i].id,
                                    data: this.create_array(array_contacts)
                                })
                        }
                    }
                }
                let let_arr = []
                for (const I in new_array) {
                    if (new_array.hasOwnProperty(I)) {
                        if (new_array[I].data !== 0) {
                            let_arr.push(new_array[I].data)
                        }
                    }
                }
                const arr_contacts = let_arr.flat()
                let req_data = await $.ajax({
                    url: '/api/v4/contacts',
                    method: 'GET',
                    data: {
                        with: 'leads',
                        filter: {
                            id: arr_contacts
                        }
                    }
                })
                Consumption.REQUEST_Contacts = req_data._embedded.contacts

            }
            rendera_date = (date) => {
                const data = date.split(' ')[0].split('-')
                return data[2] + '.' + data[1] + '.' + data[0]
            }

            get_data = async () => {

                let us = await $.ajax({
                    url: '/api/v4/users',
                    method: 'GET'
                });

                Consumption.AllUsers = us._embedded.users
                ElTable.no = 1
                const All_export = await functions.request({
                    flag: 'get_all_export',
                    stock_id: Consumption.ActiveStock
                })

                let array = [];
                let array_data = [];
                let ARRAY_ID_LEADS = []
                const All_Export = JSON.parse(All_export)
                for (const $Key in All_Export) {
                    if (All_Export.hasOwnProperty($Key)) {
                        ARRAY_ID_LEADS.push(All_Export[$Key].entity_id)
                        All_Export[$Key].date_create = this.rendera_date(All_Export[$Key].date_create)
                    }
                }
                Consumption.AllObject = All_Export


                await this.request_leads(ARRAY_ID_LEADS)
                await this.render_numbers()


                for (const index in All_Export) {
                    if (All_Export.hasOwnProperty(index)) {
                        let data_contact = this.name_contacts(All_Export[index].entity_id)
                        switch (array.includes(All_Export[index].entity_id)) {
                            case false:
                                array.push(All_Export[index].entity_id)
                                array_data.push({
                                    date: All_Export[index].date_create,
                                    leads: All_Export[index].entity_id,
                                    id: All_Export[index].pragma_entity_id,
                                    selling_price: (All_Export[index].selling_price * 1) * (All_Export[index].quantity * 1),
                                    status_id: All_Export[index].status_id,
                                    name_leads: this.name_leads(All_Export[index].entity_id),
                                    href_leads: this.searchLeads(All_Export[index].entity_id),
                                    name_contact: data_contact.name === 0 || data_contact.name.length === 0 ? 'Нет Имени' : data_contact.name,
                                    href_contact: this.href_contacts(data_contact.id),
                                    responsible: this.responsible_leads(All_Export[index].entity_id),
                                    phone_number: data_contact.tel === 0 ? 'Нет телефона' : data_contact.tel
                                })
                                break;

                            case true:
                                array_data.find(item => {
                                    if (item.leads === All_Export[index].entity_id) {
                                        item.selling_price = item.selling_price + (All_Export[index].selling_price * 1) * (All_Export[index].quantity * 1)
                                        item.date = this.nearest_date(item.date, All_Export[index].date_create)
                                    }

                                })
                        }
                    }
                }

                let NEW_ARR = [];
                for (const i in array_data) {
                    if (array_data.hasOwnProperty(i)) {
                        if (array_data[i].id) {
                            NEW_ARR.push(array_data[i])
                        }
                    }
                }

                Consumption.AllExport = NEW_ARR
                const All_product = await functions.request({
                    flag: 'products_get'
                })


                Consumption.AllProduct = JSON.parse(All_product)

            }


            static __render = twig => $(twig.render())

        }

        return Consumption

    }
);