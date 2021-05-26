define([
    'jquery',
    '../../../temp/load.js',
    '../../../temp/modal.js',
    '../../../root/function.js',


], function (
    $,
    load,
    modal,
    functions
) {
    const templates = load.TwigWrapper._templates

    class ModalProgress {
        _$

        constructor(obj) {
            this._$ = ModalProgress.__render(obj)
            this.bind_action()

        }

        bind_action = () => {

        }

        get $() {
            return this._$
        }


        static __render = obj => {
            return $(templates.ModalProgress.render({obj}))
        }
    }

    class ModalExport {

        _$BtnExport
        _$

        constructor() {
            this._$ = ModalExport.__render()
            this._$BtnExport = this._$.find('#create_export')
            this.bind_action()
            this.checked_exists_export().then(r => r)

        }

        bind_action = () => {
            this.$BtnExport.on('click', async () => {

                const obj = await this.request_scv()
                const _ModalProgress = new ModalProgress(obj)
                this.$.replaceWith(_ModalProgress.$)

            })

        }

        get $() {
            return this._$
        }

        get $BtnExport() {
            return this._$BtnExport
        }

        checked_exists_export = async () => {
            const checked_exists = await this.req_checked_exists_export()
            if (checked_exists) {
                const obj = checked_exists
                const $Twig = $(templates.exports_last.render({obj}))
                this.$.append($Twig)
            }
        }

        req_checked_exists_export = async () => {
            const data = await functions.request({
                flag: "create_export_check"
            })
            return JSON.parse(data)
        }


        request_scv = async () => {
            const data = await functions.request({
                flag: "create_export_tovars"
            })
            return JSON.parse(data)
        }


        static __render = () => {
            return $(templates.ModalExport.render())
        }
    }
    return ModalExport
})