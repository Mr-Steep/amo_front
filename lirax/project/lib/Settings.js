define([
    'jquery',
    './func.js'
], function (
    $,
    func
) {

    class CorePipeline {
        _$
        _$ElCheck
        _id
        static Twig

        constructor(data) {
            this._id = data.id
            this._name = data.name
            this._$ = CorePipeline._render(this._id, this._name)
            this._$ElCheck = this._$.find('#pragma-check_pipe')
            this.bind_actions()
        }

        bind_actions = () => {
            this.$ElCheck.on('click', async () => {
                let CHECK = this.$ElCheck.is(":checked");
                await func.pip({
                    flag: 'save',
                    id: this.id,
                    CHECK: CHECK
                })
            })
        }

        get $ElCheck() {
            return this._$ElCheck;
        }

        get $() {
            return this._$;
        }

        get id() {
            return this._id;
        }


        static _render = (id, name) => $(CorePipeline.Twig.render({id, name}))

    }

    class CorePragma {

        _$
        static Twig
        static active = false
        static set_pi = []

        constructor() {
            this._$ = CorePragma._render()
            this._$BtnAccordion = this._$.find('.pragma-lirax-core_pipeline')
            this._$DataBody = this._$.find('.pragma-core_pipeline_sel_body')
            this.bind_actions()

        }


        bind_actions = () => {

            this.$BtnAccordion.on('click', () => {

                switch (CorePragma.active) {
                    case false:
                        this.$DataBody.hide()
                        CorePragma.active = true
                        break;
                    default:
                        this.$DataBody.show()
                        CorePragma.active = false
                        break;

                }

            })

            this.render_body().then(r => r)

        }


        get $() {
            return this._$;
        }

        get $BtnAccordion() {
            return this._$BtnAccordion;
        }

        get $DataBody() {
            return this._$DataBody;
        }


        render_body = async () => {

            const ALL_PIP = await this.request_GetPip()
            let Data = []
            for (const Pips in ALL_PIP) {
                const Pi = new CorePipeline(ALL_PIP[Pips])
                Data.push(Pi.$)
            }
            this.$DataBody.html(Data)

            if (CorePragma.set_pi) {
                const data = CorePragma.set_pi.pipelines
                for (const Key in data) {
                    $(`.core-pipeline-pragma[id="${data[Key]}"]`).find('#pragma-check_pipe').attr("checked", "checked")
                }
            }

        }


        request_GetPip = async () => {
            const Pipe = await $.ajax({
                url: '/api/v4/leads/pipelines',
                method: 'GET'
            });
            return Pipe._embedded.pipelines

        }
        static get_set_pi = async () => {
            const data = await func.pip({
                flag: 'get'
            })
            CorePragma.set_pi = JSON.parse(data)
        }


        static _render = () => $(CorePragma.Twig.render())

    }


    class ElPriority {
        _$
        _$Input
        static Twig

        constructor(data) {
            this._$ = ElPriority.__render(data)
            this._$Input = this._$.find('.priority_pragma')
            this.bind_actions()
        }


        bind_actions = () => {
            this.$Input.on('focusout', () => {
                const val = this.$Input.val()
                this.SORT()
            })
        }

        get $() {
            return this._$
        }

        get $Input() {
            return this._$Input
        }

        SORT = () => {
            let arr = []

            $('.pragma-el_priority').each(function () {
                let i = $(this).attr('id')
                let prior = $(this).find('input').val()
                let name = $(this).find('.el_priority-name').text()
                arr.push({
                    id: i,
                    name: name,
                    val: prior * 1
                })
            })

            arr.sort(function (a, b) {
                if (a.val > b.val) {
                    return 1;
                }
                if (a.val < b.val) {
                    return -1;
                }
                return 0;
            });

            arr = arr.reverse()
            let data = []
            for (const I in arr) {
                arr[I].no = I * 1 + 1
                const item = new ElPriority(arr[I])
                data.push(item.$)
            }
            $('.pragma-priority_work_custom').html(data)


        }


        static __render = data => $(ElPriority.Twig.render({data}))

    }


    class Settings {
        _$
        _$btn_save
        _data_account
        _$using_shop
        _$check_fun_numb
        _$place_for_funel_number
        _$digital_funnel
        _$quantity_tell
        _$responsible
        _$place_quantity
        _twig
        _$priority_place
        _list
        _$PRIORITY
        _$priority


        constructor(List, twig) {
            this._data_account = AMOCRM.constant('account')
            this._twig = twig
            this._list = List
            this._$ = Settings.__render(this._twig.set_twig)
            this._$btn_save = $('#save_devpmlirax') // $('#save_pmlirax') ||
            this._$using_shop = this._$.find('#pragma-lirax-using_shop')
            this._$check_fun_numb = this._$.find('#pragma-lirax-funnel_number')
            this._$quantity_tell = this._$.find('.pragma-quantity_tell')
            this._$place_quantity = this._$.find('.place_quantity')
            this._$responsible = this._$.find('#pragma-responsible')
            this._$PRIORITY = this._$.find('#pragma-lirax-priority')
            this._$digital_funnel = this._$.find('.pragma-lirax-amo--digital_funnel')
            this._$place_for_funel_number = this._$.find('.pragma-lirax-place-funnel_number')
            this._$priority_place = this._$.find('.pragma-priority_work_custom')
            this._$priority = this._$.find('.priority-table_pragma_all')
            this._bind_actions()
            this.render_funnel_number().then(r => r)
            this.render_list().then(r => r)
            this.render_priority().then(r => r)

        }


        _bind_actions = () => {
            this.$btn_save
                .on('click', async () => {
                    let data = {}
                    data.FLAG = 'save_settings'
                    data.REFERRER = this.data_account.subdomain
                    data.ID_ACCOUNT = this.data_account.id
                    data.USE_STORE = this.get_attr_chek()
                    data.USE_NUMBER = this.get_che_number()
                    data.USE_RESPONSIBLE = this.$responsible.val()
                    data.USE_PRIORY = this.get_PRIORITY()
                    data.TOKEN = $('.widget_settings_block__controls__.text-input').val();
                    data.APPLICATION = this.id_new_application()
                    data.ARRAY_PIPELINE = this.get_array_pipeline()
                    data.ARRAY_NUM_PIP = this.get_number_funnel()
                    data.QUANTITY = this.get_quantity()
                    data.ARRAY_PRIORY = this.get_array_priority()
                    this.request_server((data)).then(r => r)
                })

            this.$using_shop.on('click', () => {
                switch (this.get_attr_chek()) {
                    case false :
                        this.$digital_funnel.hide();
                        break;
                    case true:
                        this.$digital_funnel.show()
                        break;
                }

            })


            this.$PRIORITY.on('click', () => {
                switch (this.get_PRIORITY()) {
                    case true:
                        this.$priority.show()
                        break;
                    case false:
                        this.$priority.hide();
                }
            })


            this.$check_fun_numb.on('click', () => {

                switch (this.get_che_number()) {
                    case false :
                        this.$place_for_funel_number.hide();
                        break;
                    case true:
                        this.$place_for_funel_number.show()
                        break;
                }
            })


            this.$quantity_tell.on('input', () => {
                let val = this.$quantity_tell.val()
                const val_n = val * 1;
                if (val_n < 11) {
                    this.quantity_create(val);
                } else {
                    this.$quantity_tell.val(10)
                    this.$quantity_tell.trigger('input')
                }
                $('.quantity_pragma').val("00:01")
            })


        }


        get_array_priority = () => {
            let arr = [];
            $('.pragma-el_priority').each(function (el) {
                const priory = $(this).find('input').val();
                const id = $(this).attr('id')
                const name = $(this).find('.el_priority-name').text();
                arr.push({
                    id: id,
                    priory: priory,
                    name: name
                })
            })
            return arr
        }

        id_new_application = () => {
            const users = AMOCRM.constant('account').users
            let us = ""
            for (const user in users) {
                if (users[user] == "AutoCall") {
                    us = user
                }
            }
            return us
        }

        get_PRIORITY = () => {
            return this.$PRIORITY.is(":checked");
        }

        quantity_create = (val) => {
            let data = [];
            val++
            for (let i = 1; i < val; i++) {
                let obj = $(this.twig.quantity.render({i}))
                data.push(obj)
            }
            this.$place_quantity.html(data)
        }


        get $() {
            return this._$;
        }

        get $priority() {
            return this._$priority;
        }

        get twig() {
            return this._twig;
        }

        get $responsible() {
            return this._$responsible;
        }

        get list() {
            return this._list;
        }

        get $place_quantity() {
            return this._$place_quantity;
        }

        get $PRIORITY() {
            return this._$PRIORITY;
        }

        get data_account() {
            return this._data_account;
        }

        get $quantity_tell() {
            return this._$quantity_tell;
        }

        get $digital_funnel() {
            return this._$digital_funnel;
        }

        get $using_shop() {
            return this._$using_shop;
        }

        get $check_fun_numb() {
            return this._$check_fun_numb;
        }

        get $btn_save() {
            return this._$btn_save;
        }

        get $priority_place() {
            return this._$priority_place;
        }

        get $place_for_funel_number() {
            return this._$place_for_funel_number;
        }

        render_priority = async () => {
            const users = AMOCRM.constant('account').users
            let no = 0
            let arr = [];
            for (const i in users) {
                const USER = new ElPriority({
                    id: i,
                    no: no++,
                    name: users[i]
                })
                arr.push(USER.$)
            }

            this.$priority_place.html(arr)

            switch (this.get_che_priory()) {
                case true:
                    this.$priority.show();
                    break;
                case false:
                    this.$priority.hide();
                    break;

            }


        }
        render_funnel_number = async () => {

            this.$quantity_tell.attr('max', 10).attr('min', 0)

            let array = []
            const twig = this.twig.funnel_number
            for (const index in this.list) {
                if (this.list.hasOwnProperty(index)) {
                    const id_funnel = this.list[index]['id']
                    const name_funnel = this.list[index]['name']
                    const element = $(twig.render({id_funnel, name_funnel}))
                    array.push(element)
                }

            }

            this.$place_for_funel_number.html(array)
            switch (this.get_che_number()) {
                case false :
                    this.$place_for_funel_number.hide();
                    break;
                case true:
                    this.$place_for_funel_number.show()
                    break;
            }


        }
        render_list = async () => {

            let array = []
            const twig = this.twig.item_funnel
            for (const item in this.list) {
                if (this.list.hasOwnProperty(item)) {
                    const name_funnel = this.list[item]['name']
                    const id_funnel = this.list[item]['id']
                    const element = $(twig.render({id_funnel, name_funnel}))
                    array.push(element)
                }
            }

            this.$digital_funnel.html(array)

            switch (this.get_attr_chek()) {
                case false :
                    this.$digital_funnel.hide();
                    break;
                case true:
                    this.$digital_funnel.show()
                    break;
            }
        }


        get_quantity = () => {
            let array = [];
            $('.pragma_quantity').each(function (index) {
                let time = $(this).find('.quantity_pragma').val()
                array.push({
                    q: index + 1,
                    time: time,
                    id: 'quantity_' + (1 + index)
                })
            })
            return {
                quantity: $('.pragma-quantity_tell').val(),
                data_q: array,
                work_start: $('.time-pragma_foot_start').val(),
                work_finish: $('.time-pragma_foot_finish').val(),

            }

        }
        get_number_funnel = () => {
            let obj = []
            $('.funnel_number').each(function () {
                let name_pipeline = $(this).find('label').text()
                let id_pipeline = $(this).find('label').attr('id')
                let number = $(this).find('.funnel_number_input').val()
                obj.push({
                    name_pipeline: name_pipeline,
                    id_pipeline: id_pipeline,
                    number: number
                })
            })
            return obj
        }
        get_array_pipeline = () => {
            let obj = []
            $('.digital_funnel--item').each(function () {
                let id_pip = $(this).find('label').attr('id')
                let name = $(this).find('label').text()
                let _val = $(this).find('input').val()
                obj.push({
                    pip_name: encodeURI(name),
                    pip_set_id: _val,
                    pip_id: id_pip,
                })
            })
            return obj
        }

        get_che_priory = () => {
            return this.$PRIORITY.is(":checked");
        }

        get_attr_chek = () => {
            return this.$using_shop.is(":checked");
        }
        get_che_number = () => {
            return this.$check_fun_numb.is(":checked");
        }


        request_server = async (_data) => {
            return await func.requestSettings(_data)
        }


        fill_input = (arr) => {

            const data = arr['data'][0]
            if (data) {
                this.fill_quantity(arr['quantity'])
                const pipelines = arr['pipelines']
                const numbers = arr['numbers']
                const priority = arr['priority']
                const use_store = data.use_store === "true"
                const use_number = data.use_number === "true"
                const use_priory = data.use_priory === "true"
                $('.widget_settings_block__controls__.text-input').val(data.token);
                $('#pragma-responsible').val(data.use_responsible)


                switch (use_priory) {
                    case true:
                        $('#pragma-lirax-priority').trigger('click')
                        this.filling_using_priority(priority)

                        break;

                }


                switch (use_store) {
                    case true:
                        $('#pragma-lirax-using_shop').trigger('click')
                        this.filling_using_shop(pipelines)
                        break;


                }

                switch (use_number) {
                    case true:
                        $('#pragma-lirax-funnel_number').trigger('click')
                        this.filling_funnel_number(numbers)
                        break;


                }
            }

        }


        fill_quantity = (data) => {
            $('#time-pragma_id_start').val(data.work_start)
            $('#time-pragma_id-finish').val(data.work_finish)
            $('#quantity_tell').val(data.quantity).trigger('click')
            this.quantity_create(data.quantity)
            const arr = data.data_q

            for (const i in arr) {
                $(`.quantity_pragma[id="${arr[i].id}"]`).val(arr[i].time)
            }

        }

        filling_funnel_number = (numbers) => {
            for (const index in numbers) {
                $(`input[id="funnel_${numbers[index].id_pipeline}"]`).val(numbers[index].number)
            }
        }

        filling_using_shop = (pipelines) => {
            for (const index in pipelines) {
                $(`input[id="using_shop_${pipelines[index].id_pipeline}"]`).val(pipelines[index].id_set_pep)
            }
        }

        filling_using_priority = (priory) => {
            for (const index in priory) {
                $(`input[id="priority${priory[index].id}"]`).val(priory[index].priory)
            }
            $('.priority_pragma').trigger('focusout')
        }


        static  __render = (set_twig) => {
            return $(set_twig.render())
        }

    }


    async function request_get_all_pipelines() {
        const res = await $.ajax({
            url: '/api/v4/leads/pipelines',
            method: 'GET',
            dataType: 'json',
        })
        const arr = res._embedded.pipelines
        let LIST = [];

        for (const item in arr) {
            if (arr.hasOwnProperty(item)) {
                LIST.push(arr[item])
            }

        }
        return LIST
    }

    async function get_data() {
        return await func.requestSettings({
            FLAG: 'get_settings',
            ID_ACCOUNT: AMOCRM.constant('account').id
        })
    }


    return async (self, ModulesInfo) => {
        // const isEnable = await ModulesInfo.isPragmaEnable()
        // if (!isEnable) {
        //     $('#widget_settings__fields_wrapper').html('INTEGRATION OFF')
        //
        // } else {
        const data = await get_data();
        const List = await request_get_all_pipelines()
        CorePipeline.Twig = await self.getTemplate("CorePipeline")
        CorePragma.Twig = await self.getTemplate("CorePragma")
        const twig = {
            set_twig: await self.getTemplate("settings"),
            item_funnel: await self.getTemplate("item_funnel"),
            funnel_number: await self.getTemplate("funnelnumber"),
            quantity: await self.getTemplate("quantity")
        }
        ElPriority.Twig = await self.getTemplate('elPriority')
        await CorePragma.get_set_pi()
        const repragma = new CorePragma();
        const setting = new Settings(List, twig)
        $('#widget_settings__fields_wrapper div:first').html(setting.$);
        $('.pragma_full_data').before(repragma.$)
        $('.pragma-lirax-core_pipeline').trigger('click')
        setting.fill_input(JSON.parse(data))
        $('.widget_settings_block__item_field').show()

        // }


    }

})

