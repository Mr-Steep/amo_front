define(['jquery'], function($) {
    const pragma_url = 'https://smart-dev.pragma.by/api/integrations/store/amocrm/'
    const code = "pmLirax"
    function send(script, method,  data) {
        data.account_id = AMOCRM.constant('account').id

        return $.ajax({
            type: method,
            url: pragma_url + script,
            dataType: 'json',
            data: {json_data: JSON.stringify(data)},
        });
    }

    const Integrations = {}

    Integrations.short_info = integration_id => send('integrations.php', 'GET', {action: 'short_info', integration_id, module_code: code})
    Integrations.disable = integration_id => send('integrations.php', 'POST', {action: 'disable', integration_id, module_code: code})

    function isActive (info) {
        return  isPragmaActive(info) && info.amocrm_enable
    }

    function isPragmaActive (info) {
        return (info.pragma_time_enable * 1000) > new Date().getTime()
    }

    function getDate (time) {
        const date = new Date(time)
        const date_string = date.toLocaleDateString('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timezone: 'UTC',
        })
        const time_string = date.toLocaleString('ru', {
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
        })

        return date_string + ' ' + time_string
    }

    async function delay (time) {
        return new Promise(res => setTimeout(res, time))
    }

    class Status {
        static _render = status => $(`<div><span>Статус: <span style="font-weight: 700">${status}</span></span></div>`)

        _$
        _status

        constructor(info) {
            this._set_status(info)
            this._render_body()
        }

        _set_status = info => {
            this._status = info.is_enable ? 'active' : 'disable'
        }

        _render_body = () => this._$ = Status._render(this.statusText)

        get statusText () {
            return this.status === 'active' ? 'активен' : 'неактивен'
        }

        get status() {
            return this._status;
        }

        get $() {
            return this._$;
        }
    }

    class ShutdownTime {
        static _render = active_time => $(`<div><span">${active_time}</span></div>`)

        _$
        _shutdown_time_text
        _inactive_time

        constructor(info) {
            this._inactive_time = info.pragma_inactive_time > info.amocrm_inactive_time ? info.amocrm_inactive_time : info.pragma_inactive_time
            this._set_shutdown(info)
            this._render_body()
        }
        _set_shutdown = info => {
            if(info.isFree || info.is_pragma_unlimited_time)
                this._shutdown_time_text = 'Активен до: ' + '<span style="font-weight: 700">время использования неограниченно</span>'
            else if(isActive(info))
                this._shutdown_time_text = 'Активен до: <span style="font-weight: 700">' + getDate(info.pragma_time_enable * 1000) + '</span>'
            else
                this._shutdown_time_text = 'Оплачен до: <span style="font-weight: 700">' + getDate(info.pragma_time_enable * 1000) + '</span>'
        }

        _render_body = () => this._$ = ShutdownTime._render(this.shutdown_time_text)

        get $() {
            return this._$;
        }

        get shutdown_time_text() {
            return this._shutdown_time_text;
        }
    }

    class InactiveTime {
        static _render = active_time => $(`<div><span">${active_time}</span></div>`)

        _$
        _text
        _inactive_time

        constructor(info) {
            this._inactive_time = this._get_shutdown_time(info) * 1000
            this._set_shutdown()
            this._render_body()
        }

        _get_shutdown_time = info => {
            if(!info.pragma_inactive_time && info.amocrm_inactive_time)
                return info.amocrm_inactive_time
            if(info.pragma_inactive_time && !info.amocrm_inactive_time)
                return info.pragma_inactive_time
            if(info.pragma_inactive_time > info.amocrm_inactive_time && info.amocrm_inactive_time)
                return info.amocrm_inactive_time
            return info.pragma_inactive_time || 0
        }

        _set_shutdown = () => {
            this._text = 'Неактивен с <span style="font-weight: 700">' + getDate(this._inactive_time)  + '</span>'
        }

        _render_body = () => this._$ = InactiveTime._render(this.text)

        get $() {
            return this._$;
        }

        get text() {
            return this._text;
        }
    }

    class ModulesInfo {
        static _render_container = () => $('<div></div>')
        static _instances = []

        _$
        static _$settings_modal

        _shutdown_time
        _status
        _inactive
        _disabled = false
        static _info

        constructor($settings_modal, info) {
            this._info = info
            ModulesInfo._$settings_modal = $settings_modal ?? ModulesInfo._$settings_modal
            this._status = new Status(info)
            this._shutdown_time = new ShutdownTime(info)
            this._inactive = new InactiveTime(info)
            this._render()
            this._insert()
        }

        _render = () => {
            this._$ = ModulesInfo._render_container()
            this.$.append(this.status.$)
            if(this.status.status !== 'active')
                this.$.append(this._inactive.$)
            this.$.append(this.shutdown_time.$)
            this._css()
        }

        _css = () => {
            const css = {display: 'flex',
                'flex-direction': 'column',
                padding: '10px 15px',
                'margin-bottom': '15px',
                'border-radius': '5px'
            }
            if(this.status.status === 'active'){
                css.color = '#155724'
                css['background-color'] = '#d4edda'
                css.border = '1px solid #c3e6cb'
            }
            else {
                css.color = '#721c24'
                css['background-color'] = '#f8d7da'
                css.border = '1px solid #f5c6cb'
            }
            this.$.css(css)
        }

        _insert = () => ModulesInfo.$settings_modal?.prepend(this.$)

        disable = () => {
            this.$.remove()
            this._disabled = true
        }

        get $() {
            return this._$;
        }

        static get $settings_modal() {
            return ModulesInfo._$settings_modal;
        }

        get shutdown_time() {
            return this._shutdown_time;
        }

        get status() {
            return this._status;
        }

        get disabled() {
            return this._disabled;
        }

        static isPragmaEnable = async () => {
            const info = await ModulesInfo.info()
            return info.pragma_is_enable
        }

        static isAmoEnable = async () => {
            const info = await ModulesInfo.info()
            return info.amocrm_enable
        }

        static isEnable = async () => {
            const info = await ModulesInfo.info()
            return info.is_enable
        }

        static info = async integration_id => {
            if(ModulesInfo._info)
                return ModulesInfo._info
            ModulesInfo._info = await Integrations.short_info(integration_id);
            return ModulesInfo._info
        }

        static get instances() {
            return this._instances;
        }

        static disableGeneral = async (integration_id) => {
            Integrations.disable(integration_id)
            await delay(2000)
            ModulesInfo.instances.forEach(instance => instance.disable())
            ModulesInfo._instances = []
        }

        static enableGeneral = ($settings_modal, integration_id) => {
            ModulesInfo.instances.forEach(instance => instance.disable())
            ModulesInfo._instances = []
            ModulesInfo.create($settings_modal, integration_id)
        }

        static create = async ($settings_modal, integration_id) => {
            await delay(2000)
            const info = await ModulesInfo.info(integration_id)
            const instance = new ModulesInfo($settings_modal, info)
            ModulesInfo._instances.push(instance)
            return instance
        }
    }

    return {ModulesInfo}
})