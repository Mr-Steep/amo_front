define(['jquery', './../temp/module_confirmation.js'], function ($, conf) {
    const pragma_url = 'https://smart-dev.pragma.by/api/integrations/store/amocrm/'
    const codeAmo = 'pmstorage'
    const code = "PragmaStorage"
    const Name = "AMO Склад"

    function send(script, method, data) {
        data.account_id = AMOCRM.constant('account').id
        data.user_id = AMOCRM.constant('user').id

        return $.ajax({
            type: method,
            url: pragma_url + script,
            dataType: 'json',
            data: {json_data: JSON.stringify(data)},
        });
    }

    const Integrations = {}

    Integrations.short_info = integration_id => send('integrations.php', 'GET', {
        action: 'short_info',
        integration_id,
        module_code: code
    })
    Integrations.disable = integration_id => send('integrations.php', 'POST', {
        action: 'disable',
        integration_id,
        module_code: code
    })

    function isActive(info) {
        return isPragmaActive(info) && info.amocrm_enable
    }

    function isPragmaActive(info) {
        return (info.pragma_time_enable * 1000) > new Date().getTime()
    }

    async function delay(time) {
        return new Promise(res => setTimeout(res, time))
    }


    class BoardInfo {

        _info
        static _activation
        static _status
        static _pay
        static _noActive

        constructor(info) {
            this._info = info

        }

        get info() {
            return this._info
        }


        Enable = () => {

            if (this.info.module.isFree) {
                BoardInfo._activation = 'Ваша лицензия активирована'
                BoardInfo._status = 'Активно'
                BoardInfo._pay = 'срок действия не ограничен'
                this.__render()
                this.BoardGreen()
                $('.info_pragma-activation').css({color: "#0f5132"})
                $('.info_pragma-status').css({color: "#0f5132"})

            } else {
                BoardInfo._activation = 'Ваша лицензия активирована'
                BoardInfo._status = 'Активно'
                BoardInfo._pay = this.renderDate(this.info.shutdown_time)
                this.__render()
                this.BoardGreen()
                $('.info_pragma-activation').css({color: "#0f5132"})
                $('.info_pragma-status').css({color: "#0f5132"})


            }


        }

        renderDate = (unix_timestamp) => {

            let a = new Date(unix_timestamp * 1000);
            let months = ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июня', 'Июля', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
            let year = a.getFullYear();
            let month = months[a.getMonth()];
            let date = a.getDate();
            let hour = "0" + a.getHours();
            let min = "0" + a.getMinutes();
            let sec = "0" + a.getSeconds();
            return date + ' ' + month + ' ' + year + ' ' + hour.substr(-2) + ':' + min.substr(-2) + ':' + sec.substr(-2);

        }

        isAmocrm_enable = () => {
            this.info.amocrm_enable ? this.isPragma_enable() : this.isAmoEnableOff()
        }

        isPragma_enable = () => {
            this.info.is_pragma_active ? " " : this.noActive()
        }

        isAmoEnableOff = () => {
            BoardInfo._activation = 'Ваша лицензия активирована'
            BoardInfo._status = 'не активен в Amo'
            BoardInfo._pay = this.renderDate(this.info.shutdown_time)
            // BoardInfo._noActive = this.renderDate(this.info.pragma_time_enable)
            this.__render()
            this.BoardRed()
            $('.info_pragma-activation').css({color: "#0f5132"})
            $('.info_pragma-status').css({color: "#842029"})
        }


        noActive = () => {
            BoardInfo._activation = 'Ваша лицензия активирована'
            BoardInfo._status = 'не активен в PRAGMA'
            BoardInfo._pay = this.renderDate(this.info.shutdown_time)
            // BoardInfo._noActive = this.renderDate(this.info.pragma_time_enable)
            this.__render()
            this.BoardRed()
            $('.info_pragma-activation').css({color: "#0f5132"})
            $('.info_pragma-status').css({color: "#842029"})


        }

        UserDisable = () => {
            BoardInfo._activation = 'Ваша лицензия не активирована'
            BoardInfo._status = 'не активен'
            this.__render()
            this.BoardRed()
            $('.info_pragma-activation').css({color: "#842029"})
            $('.info_pragma-status').css({color: "#842029"})
            $('.info_pragma-pay_to').hide()


        }


        BoardRed = () => {
            $('.board-info_pragma').attr('style',
                "    border: 1px solid #842029;\n" +
                "    background-color: #f8d7da;\n" +
                "    padding: 10px;\n"
            )
        }

        BoardGreen = () => {
            $('.board-info_pragma').attr('style',
                "    border: 1px solid #0f5132;\n" +
                "    background-color: #d1e7dd;\n" +
                "    padding: 10px;\n"
            )
        }


        __render = () => {
            const $activation = BoardInfo._activation
            const $status = BoardInfo._status
            const $data_pay = BoardInfo._pay ? BoardInfo._pay : 'hidden'
            const noActive = BoardInfo._noActive ? BoardInfo._noActive : 'hidden'
            let html =
                `<div class = "board-info_pragma">   
                    <div class="info_pragma-activation">
                        <div class="pragma-activation-label_one" style="
    display: inline-block;font-size: 18px; font-weight: bold;
">Активация:</div>
                        <div class="pragma-activation-label_two" style="
    display: inline-block;
">${$activation}</div>
                    </div>
                    
                    <div class="info_pragma-status">
                        <div class="info_pragma-status-label_one" style="
    display: inline-block;font-size: 18px; font-weight: bold;
">Статус:</div>
                        <div class="info_pragma-status-label_two" style="
    display: inline-block;
">${$status}</div>
                    </div>
                    
                    <div class="info_pragma-no_active" ${noActive}>
                        <div class="no_active-label_one" style="
    display: inline-block;font-size: 18px; font-weight: bold;
">Неактивен:</div>
                        <div class="no_active-label_one" style="
    display: inline-block;
">${noActive}</div>
                    </div>
                    
                    
                    <div class="info_pragma-pay_to">
                        <div class="pay_to-label_first" style="
    display: inline-block;font-size: 18px; font-weight: bold;
">Оплачен до:</div>
                        <div class="pay_to-label_two" style="
    display: inline-block;
">${$data_pay}</div>
                    </div>                                
                </div>`
            BoardInfo._activation = ''
            BoardInfo._status = ''
            BoardInfo._pay = ''
            BoardInfo._noActive = ''
            $('.info_pragmatika_board').html($(html))
        }


    }


    class ModulesInfo {
        static _instances = []
        static ACTIVE = 1

        _$
        static _$settings_modal

        _shutdown_time
        _status
        _inactive
        _info
        _disabled = false
        static _info

        constructor($settings_modal, info) {

            this._info = info
            this.Render()
            ModulesInfo._$settings_modal = $settings_modal ?? ModulesInfo._$settings_modal

            this._info.license ? this.UserActive() : this.UserNotActive()

        }

        Render = () => {
            const $_html = ` <div class = "modules_info_pragmatika">
                    <div class="info_pragmatika_board"></div>
                    <div class="info_pragmatika_btn" style="    margin-top: -53px;  margin-right: 15px;  float: right;">  
                                 <button type="button" class="button-input button-input_blue" id = "activate_user_btn" 
                                 tabindex=""  style="
    border: 1px solid #6c757d;
    background: transparent;
    color: #6c757d ;
">
                            <span class="button-input-inner ">
                                <span class="button-input-inner__text" style="
    font-family: 'PT Sans Caption',serif;
">АКТИВИРОВАТЬ</span>
                            </span>
                        </button>
                    </div>
                
                </div>
            `
            if ($('.board-info_pragma').length < 1) {
                $('.widget-settings__desc-space').append($($_html))
                const $btnActive = $('#activate_user_btn')
                $btnActive.hover(
                    () => {
                        $btnActive.css({
                            background: "#6c757d",
                            color: "#fff"
                        })
                    },
                    () => {
                        $btnActive.css({
                            background: "transparent",
                            color: "#6c757d"

                        })
                    }
                )

                $btnActive.on('click', () => {
                    conf.Confirmation.inMarket(false);
                    conf.Confirmation.set(this.info)
                    const M_confir = new conf.Confirmation();
                    M_confir.install(codeAmo, false).then(r => r)
                })
            }


        }

        UserNotActive = () => {

            const Board = new BoardInfo(this.info)
            Board.UserDisable()
        }

        UserActive = () => {
            $('.info_pragmatika_btn').hide()
            const Board = new BoardInfo(this.info)
            this.info.is_active ? Board.Enable() : Board.isAmocrm_enable()

        }

        disable = () => {
            // this.$.remove()
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

        get info() {
            return this._info;
        }

        get disabled() {
            return this._disabled;
        }

        static isPragmaEnable = async () => {
            const info = await ModulesInfo.info()
            return info.is_pragma_active
        }

        static isAmoEnable = async () => {
            const info = await ModulesInfo.info()
            return info.amocrm_enable
        }


        static isEnable = async () => {
            const info = await ModulesInfo.info()
            return info.is_active
        }

        static Update = async () => {
            ModulesInfo.info().then(async (res) => {
                conf.Confirmation.set(res)
                try {
                    let $token = await conf.Confirmation.check_user()
                    $token = JSON.parse($token)
                    ModulesInfo.savetoken($token)
                }catch (e) {
                    ModulesInfo.savetoken('')
                }
            })
        }

        static savetoken = ($token) => {
            $token && $('input[name="api_key"]').val($token || '')
            $(`#save_${codeAmo}`).trigger('click')
        }


        static isActiveUser = async () => {
            const info = await ModulesInfo.info()
            return info.isActiveUser
        }
        static isLicense = async () => {
            const info = await ModulesInfo.info()
            return info.license
        }


        static info = async integration_id => {
            if (ModulesInfo._info)
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

        static AmoMessage = () => {
            let error_params = {
                header: Name,
                text: "Ваша лицензия истекла"
            };
            AMOCRM.notifications.show_message_error(error_params);
        }

        static AmoMessageUser = () => {
            let error_params = {
                header: Name,
                text: "Активируйте интеграцию в настройках"
            };
            AMOCRM.notifications.show_message_error(error_params);
        }


        static isActivePragma = (self) => {
            let active = false;
            try {
                active = AMOCRM.constant("widgets").widgets.all[self.params.widget_code].active;
            } catch (e) {

            }
            return self.params.widget_active !== 'N'
                && (
                    (self.params.login !== '' && typeof self.params.login !== 'undefined')
                    || self.params.widget_active === 'Y'
                    || active
                );
        }


    }

    return {ModulesInfo}
})