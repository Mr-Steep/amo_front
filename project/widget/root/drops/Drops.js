define([
    'jquery',
    '../../temp/load.js',
    '../../temp/modal.js',
    './DropsItem/ModalExport.js',
    './DropsItem/ModalImport.js'


], function (
    $,
    load,
    modal,
    ModalExport,
    ModalImport
) {
    const templates = load.TwigWrapper._templates


    class Drops {

        _$
        _$DropsIs
        _$DropsIsCLOSE
        _$Drops
        _$DropExport
        _$DropImport


        constructor() {
            this._$ = Drops.__render()
            this._$DropsIsCLOSE = this._$.find('.right_pragma_drops_four_pol')
            this._$DropsIs = this._$.find('.right_pragma_drops_four')
            this._$Drops = this._$.find('#first_more-pragma')
            this._$DropImport = this._$.find('#pragma_drops_four-first')
            this._$DropExport = this._$.find('#pragma_drops_four-two')

            this.bind_action()
        }

        bind_action = () => {

            this.$Drops.on('click', () => {
                $('.right_pragma_drops_four_pol').show()
                $('.right_pragma_drops_four').show()
            })

            this.$DropsIsCLOSE.on('click', () => {
                this.$DropsIs.hide()
                this.$DropsIsCLOSE.hide()
            })

            this.$DropExport.on('click', () => {
                const _ModalExport_ = new ModalExport()
                this.InsertModal({
                    class_name: 'stock_export-modal'
                }, _ModalExport_.$, {})
            })

            this.$DropImport.on('click', () => {
                const _ModalImport_ = new ModalImport()
                this.InsertModal({
                        class_name: 'stock_import-modal',
                    },
                    _ModalImport_.$,
                    {
                        width: "765px"
                    })

            })

            this.$DropsIs.on('click', () => {
                this.$DropsIsCLOSE.trigger('click')
            })
        }

        get $() {
            return this._$
        }

        get $Drops() {
            return this._$Drops
        }

        get $DropsIs() {
            return this._$DropsIs
        }

        get $DropsIsCLOSE() {
            return this._$DropsIsCLOSE
        }

        get $DropImport() {
            return this._$DropImport
        }

        get $DropExport() {
            return this._$DropExport
        }

        InsertModal = (modal_obj, $OBJ, _css) => {
            modal.ConfirmModal(modal_obj)
            const _class = '.' + modal_obj.class_name
            const _ModalExport = $(_class).find('.modal-body')
            _ModalExport.css(_css)
            _ModalExport.html($OBJ)
            _ModalExport.trigger('modal:loaded');
            _ModalExport.trigger('modal:centrify');
        }


        static __render = () => {
            return $(templates.drops.render())
        }
    }

    return Drops
});