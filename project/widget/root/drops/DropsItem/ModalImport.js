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

    const ARRAY = [
        {
            "id": "2401",
            "category_id": "93",
            "article": "v8gn564",
            "title": "banan",
            "selling_price": "69.000",
            "deleted": "0",
            "unit": "шт",
            "img_link": "https://smart.pragma.by/api/integrations/pragma_storage/amocrm/Stock/temp/no.png"
        },
        {
            "id": "2401",
            "category_id": "85",
            "article": "ad6f5fb4d6f5g",
            "title": "LOlik",
            "selling_price": "159.000",
            "deleted": "0",
            "unit": "шт",
            "img_link": "https://smart.pragma.by/api/integrations/pragma_storage/amocrm/Stock/temp/no.png"
        }, {
            "id": "29561",
            "category_id": "99",
            "article": "87sge2w",
            "title": "SUPRA",
            "selling_price": "159.000",
            "deleted": "0",
            "unit": "шт",
            "img_link": "https://smart.pragma.by/api/integrations/pragma_storage/amocrm/Stock/temp/no.png"
        }
    ]

    class InputFooter {
        constructor(key) {
            this._$ = InputFooter._render(key)
            this._$input = this._$.find('.import_pragma_stock')
            this._opt = this._$.find('.import_pragma_stock_options')
            this._item = this._$.find('.item_options')

            this.bind_actions()
        }

        bind_actions = () => {
            this.$input.on('click', () => {
                this.opt.show()
                this.$input.hide()
            })

            this.item.on('click', (e) => {
                const __id = e.target.id
                const __name = e.target.textContent
                this.$input.val(__name)
                this.$input.show()
                this.opt.hide()
            })


        }

        get $() {
            return this._$
        }

        get opt() {
            return this._opt
        }

        get item() {
            return this._item
        }

        get $input() {
            return this._$input
        }


        static _render = key => $(templates.select.render({key}))

    }


    class CreateTable {
        constructor(data) {
            this._$ = CreateTable._render()
            this._head = this._$.find('.import_pragma_stock-head')
            this._body = this._$.find('.import_pragma_stock-body')
            this._foot = this._$.find('.import_pragma_stock-foot')

            this._head.html(this.render_header(data[0]))
            this._body.html(this.render_body(data))
            this._foot.html(this.render_footer(data[0]))

        }


        get $() {
            return this._$
        }


        render_header = data => {
            let header = ''
            for (let key in data) {
                let div_ = this.create_element('div class="pragma_import_settings__row"', key)
                header += div_
            }
            return header
        }

        render_body = data => {
            let header = []
            for (let key in data) {
                if (key > 1) {
                    break;
                }
                let _user = data[key]
                let row_ = ''
                for (const _Key in _user) {
                    const _val = _user[_Key]
                    let div_ = this.create_element(`div class="pragma_el_import_settings pragma__${_Key}"`, _val)
                    row_ += div_
                }
                header.push(`<div class='tr_pragma_stock' id="steth_${key}">${row_}<div/>`)
            }
            return header
        }

        render_footer = (obj) => {
            let header = []
            for (const key in obj) {
                const $select = new InputFooter(key)
                header.push($select.$)
            }

            return header
        }

        create_element = (el, $name = '') => {
            return `<${el}><span>${$name}</span></${el}>`
        }


        static _render = () => $(templates.table_import.render({}))

    }


    class ModalImportSettings {
        _$

        constructor() {
            this._$ = ModalImportSettings._render()

            const table_ = new CreateTable(ARRAY)
            this._$.find('.modal_import_settings-table').html(table_.$)
            this.bind_actions()
        }

        bind_actions = () => {
        }


        get $() {
            return this._$
        }

        static _render = () => $(templates.ModalImportSettings.render())


    }

    class ModalImport {

        _$
        _$Input
        _$BtnExport

        static VIEW

        constructor() {
            ModalImport.VIEW = functions.Settings.view_page
            this._$ = ModalImport._render()
            this._$Input = this._$.find('#new_import_load_pragma')
            this._$BtnExport = this._$.find('#create_import')
            this.bind_actions()
        }

        bind_actions = () => {
            this.$BtnExport.on('click', () => {
                const modal_settings = new ModalImportSettings()
                $('.modal-body').html(modal_settings.$)
                // this.$Input.trigger('click')  включить
            })


            this.$Input.on('change', async function () {
                let files = this.files;
                const data = new FormData();
                data.append("files", files[0], files[0].name)
                const answer = await $.ajax({
                    url: "https://smart-dev.pragma.by/api/integrations/pragma_storage/amocrm/Stock/import.php",
                    type: "POST",
                    data: data,
                    async: true,
                    processData: false,
                    contentType: false
                })


                const _answer = answer


            })

        }

        get $() {
            return this._$
        }

        get $Input() {
            return this._$Input
        }

        get $BtnExport() {
            return this._$BtnExport
        }


        static _render = () => $(templates.ModalImport.render())


    }

    return ModalImport
})