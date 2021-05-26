define([
    'jquery',
    'twigjs',
    'lib/components/base/modal',
    'lib/components/base/confirm',
], function ($, twig, Modal, ConfirmModal) {

    const _export = {}
    _export.ConfirmModal = function ({
                                         title,
                                         message,
                                         class_name,
                                         note,
                                         accept_text,
                                         cancel_text,
                                         accept_func,
                                         destroy_func,
                                         context_object
                                     }) {

        message = [{text: message}];
        note && message.push({text: note});

        
        const modal = new ConfirmModal({
            class_name: class_name,
            accept_text: accept_text,
            decline_text: cancel_text,
            text: title,
            message: message,
            destroy: function () {

                if (destroy_func && context_object)
                    destroy_func.bind(context_object)

                destroy_func && destroy_func();

                return true;
            },
            accept: function () {
                if (accept_func && context_object)
                    accept_func.bind(context_object)

                accept_func && accept_func(context_object);

                this.destroy(true);
            }
        });

        accept_text || modal.$modal_body.find('.js-modal-accept').remove();
        cancel_text || modal.$modal_body.find('.button-cancel').remove();

        return modal;
    };

    _export.alert = {
        showAlertModal: function (text, success, timeToClose) {
            module = this;
            return new Modal({
                class_name: 'modal-window',
                init: function ($modal_body) {
                    let html = module.getModalHTML(text, success);
                    $modal_body.trigger('modal:loaded').html(html).trigger('modal:centrify');
                    if (timeToClose && _.isNumber(timeToClose)) {
                        setTimeout(_.bind(function () {
                            this.destroy();
                        }, this), timeToClose);
                    }
                },
                destroy: function () {
                }
            });
        },
        getModalHTML: function (text, success) {
            let modal_html;
            if (success) {
                modal_html = twig({
                    ref: '/tmpl/common/modal/success.twig'
                }).render({
                    msg: text
                });
            } else {
                modal_html = twig({
                    ref: '/tmpl/common/modal/error.twig'
                }).render({
                    text: text,
                    no_retry: '1'
                });
            }
            return modal_html;
        }
    };

    return _export
})