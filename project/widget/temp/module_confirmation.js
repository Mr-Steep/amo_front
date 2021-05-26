define([
        'jquery',
        'twigjs',
        'lib/components/base/modal',
        'lib/components/base/confirm',

    ],
    function (
        $,
        twig,
        Modal,
        ConfirmModal
    ) {
        let M = []
        M.ConfirmModal = function ({
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
                    return false;
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

        alert = {
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


        let REQUEST = async (data) => {

            data.referrer = location.host
            data.account_id = AMOCRM.constant('account').id
            data.integration_id = Confirmation.data_widget.module.amocrm_integration_id

            return await $.ajax({
                url: 'https://smart-dev.pragma.by/api/own/oauth/point/api.php',
                method: 'POST',
                data: data
            })
        }

        class element {

            static $$INPUT = (_class_, _id_, type, value, placeholder, css) => {

                return `<input name="" class="${_class_} text-input" style = "${css}"
            id="${_id_}" type="${type}" value="${value}" placeholder="${placeholder}" autocomplete="off">`
            }


            static $$BUTTON = (_class_, _id_, text, css) => {
                return `<button type="button" class="button-input ${_class_}"  tabindex="" id= ${_id_} style = "${css}">
                       <span class="button-input-inner ">
                            <span class="button-input-inner__text">${text}</span>
                        </span>
                    </button>`
            }

            static $$BLUE_BTN = (_class_, _id_, text, css) => {
                return `<button type="button" class="button-input ${_class_} button-input_blue" tabindex="" id="${_id_}" style = "${css}">
                              <span class="button-input-inner ">                   
                                   <span class="button-input-inner__text">${text}</span>
                              </span>
                         </button>`
            }

            static $$LABEL = (id_for_, _title_) => {
                return `<label for="${id_for_}">${_title_}</label>`
            }

        }


        class smsConf {

            _$
            _$$INPUT
            _$BTN_NEXT
            _phone
            _email
            _$timer

            constructor(email, phone) {
                this._phone = phone
                this._email = email
                this._$ = smsConf._render()
                this._$BTN_CANCEL = this._$.find('#btn_prag_code_cancel')
                this._$BTN_NEXT = this._$.find('#btn_enter-pram-id')
                this._$$INPUT = this._$.find('.pragma_input_code')
                this._$timer = this._$.find('.cancel_pragmatimer')
                this.printNumbers(300)
                this.bind_actions()
            }

            bind_actions = () => {

                this.$BTN_CANCEL.on('click', () => {
                    const Conf = new Confirmation()
                    const page1 = Conf.install(Activation.$widget_code)
                    this.$.parent().html(page1.$)
                })

                this.$BTN_NEXT.on('click', async () => {


                    try {
                     const isTrueCode =  await this.checkCode()
                        alert.showAlertModal('Активация прошла успешно', true, 2500)
                        await Confirmation.install_integration(Activation.$widget_code, isTrueCode)
                        this.close()
                    }catch (e) {
                        if(e['statusCode'])
                        alert.showAlertModal('Вы ввели неверный код', false, 2500)

                    }

                })


            }

            get $() {
                return this._$
            }

            get phone() {
                return this._phone
            }

            get email() {
                return this._email
            }

            get $timer() {
                return this._$timer
            }

            get $BTN_NEXT() {
                return this._$BTN_NEXT
            }

            get $$INPUT() {
                return this._$$INPUT
            }

            get $BTN_CANCEL() {
                return this._$BTN_CANCEL
            }

            printNumbers = (from) => {
                let current = from;
                let self = this

                function go() {

                    let cur = self.timeTransform(current)
                    self.$timer.text(cur)
                    if (current === 0) {
                        clearInterval(timerId);
                        self.$timer.remove()
                        self.$BTN_CANCEL.show()
                    }
                    current--
                }

                go();
                let timerId = setInterval(go, 1000);
            }

            close = () => {
                setTimeout(() => $('.modal-body').parent().parent().remove(), 1000);
            }


            timeTransform = ($time) => {
                let $minutes = Math.floor($time / 60)
                let $secundes = $time % 60
                $minutes = '0' + $minutes
                $secundes = String($secundes).length === 1 ? '0' + $secundes : $secundes
                return ($minutes + ':' + $secundes)
            }


            checkCode = async () => {
                const val_input = this.$$INPUT.val()
                return await REQUEST({
                    flag: 'check_code',
                    phone: this.phone,
                    code: val_input,
                    email: AMOCRM.constant('user').login,
                    user_id: AMOCRM.constant('user').id,
                    name_user: this.email
                })

            }


            static _render = () => {
                const $$SVG = `<svg style=" margin-top: -20px; margin-left: auto; margin-right: auto; display:block;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45pt" height="90pt" viewBox="0 0 45 90" version="1.1">
<g id="surface1">
<path style="fill-rule:nonzero;fill:rgb(0%,54.901961%,43.137255%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(11.372549%,11.372549%,10.588235%);stroke-opacity:1;stroke-miterlimit:10;" d="M 17.111453 0.248899 L 54.258547 0.248899 C 63.570102 0.248899 71.122187 7.798018 71.122187 17.112758 L 71.122187 126.007242 C 71.122187 135.321982 63.570102 142.871101 54.258547 142.871101 L 17.111453 142.871101 C 7.799898 142.871101 0.247812 135.321982 0.247812 126.007242 L 0.247812 17.112758 C 0.247812 7.798018 7.799898 0.248899 17.111453 0.248899 Z M 17.111453 0.248899 " transform="matrix(0.630517,0,0,0.626108,0,0.195725)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(11.372549%,11.372549%,10.588235%);stroke-opacity:1;stroke-miterlimit:10;" d="M 0.247812 18.447891 L 71.122187 18.447891 L 71.122187 124.609719 L 0.247812 124.609719 Z M 0.247812 18.447891 " transform="matrix(0.630517,0,0,0.626108,0,0.195725)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(11.372549%,11.372549%,10.588235%);stroke-opacity:1;stroke-miterlimit:10;" d="M 42.629945 133.5626 C 42.629945 137.399549 39.519898 140.512781 35.678805 140.512781 C 31.843906 140.512781 28.727664 137.399549 28.727664 133.5626 C 28.727664 129.719412 31.843906 126.612419 35.678805 126.612419 C 39.519898 126.612419 42.629945 129.719412 42.629945 133.5626 Z M 42.629945 133.5626 " transform="matrix(0.630517,0,0,0.626108,0,0.195725)"/>
</g>
</svg>`
                const $$DESC = `Для подтверждения действий мы выслали на Ваш мобильный телефон <b style="font-weight: 600;">бесплатное</b> SMS с кодом`
                const $$INPUT = element.$$INPUT('pragma_input_code', 'enter_code_pragma', 'text', '', 'Введите код', `
    margin-left: auto;
    margin-right: auto;
    display:block;
    width: 101px;
    text-align: center;
`)
                const $$BTN_proceed = element.$$BLUE_BTN('btn_enter_code', 'btn_enter-pram-id', 'Продолжить', `    float: right;
   
`)

                const $$BTN_cancel = element.$$BUTTON('btn_enter_code_cancel', 'btn_prag_code_cancel', 'Отмена', `
    float: right;
    margin-right: 100px;
`)


                const smsConf_ = `<div class ="pragma-sms-confirm">

                                    <div class="sms-confirm-block-first">

                                         <div class="block-first_svg_pragma">
                                         ${$$SVG}
                                         </div>

                                         <div class="block-first_svg_desc" style="margin-top: 20px;text-align: center;">
                                         ${$$DESC}
                                         </div>

                                    </div>

                                    <div class="sms-confirm-block-second" style="margin-top: 20px">

                                         <div class="block-second_pragma_input">
                                          ${$$INPUT}
                                         </div>

                                    </div>

<!--                                    <div class="sms-confirm-block-three" style="margin-top: 20px">-->
<!--                                        -->

<!--                                    </div>-->


                                    <div class="sms-confirm-block-three" style="margin-top: 20px">
                                    
                                          <div class="block-three-btn_enter">
                                                ${$$BTN_proceed}
                                         </div>

                                            <div class="block-three-cancel">    
                                            <div class="cancel_pragmatimer"  style="
    position: absolute;
    margin-top: 11px;
    font-size: 13px;
    margin-left: 16px;
"></div>                                                   
                                                        <a  class="btn_enter_code_cancel" id="btn_prag_code_cancel"
                                                        onmouseover="this.style.textDecoration='underline';" 
                                                        onmouseout="this.style.textDecoration='none';"
                                                          style="
                                                          display:none;
                                                              font-size: 12px;
                                                              margin-top: 12px;
                                                              position: absolute;
                                                               cursor: pointer;
                                                               color: #1877f2;
                                                            ">Не получили код?</a>
                                            </div>

                                         

                                    </div>



                                 </div>`
                return $(smsConf_)
            }
        }


        class Activation {
            _$
            _$$inputLogin
            _$$inputPhone
            _$$BtnGetCode

            static $widget_code

            constructor(login, phone) {
                this._login = login ? login : AMOCRM.constant('user').login
                this._$ = Activation._render(this._login, phone, 'Для активации виджета мы вышлем на Ваш мобильный телефон <b style="font-weight: 600;">бесплатное</b> SMS с кодом')
                this._$$inputLogin = this._$.find('.pragma-login-input')
                this._$$inputPhone = this._$.find('#ptid_pragma')
                this._$$BtnGetCode = this._$.find('#m_get_code_pragma')
                this.bind_actions()
            }

            bind_actions = () => {


                this.$$BtnGetCode.on('click', async () => {
                    const check = this.checkEnterNumber()
                    if (check) {
                        const phone = this.$$inputPhone.val() * 1
                        const email = this.$$inputLogin.val()
                        try {
                            await this.send_message(phone)
                        } catch (e) {
                        }
                        const page2 = new smsConf(email, phone)
                        this.$.parent().html(page2.$)

                    } else {
                        alert.showAlertModal('Вы ввели некорректный номер телефона', false, 2500);
                    }


                })
            }


            get $() {
                return this._$
            }

            get $$BtnGetCode() {
                return this._$$BtnGetCode
            }

            get $$inputLogin() {
                return this._$$inputLogin
            }

            get $$inputPhone() {
                return this._$$inputPhone
            }

            send_message = async (phone) => {
                return await REQUEST({
                    flag: 'create_code',
                    phone: phone,
                    name_user: $('.pragma-login-input').val()

                })
            }

            checkEnterNumber = () => {
                let val = this.$$inputPhone.val()
                val = val * 1
                val = String(val)
                return val.length > 5;

            }


            static _render = (email, phone, description) => {
                phone = phone ? phone : ''
                const blocksecondloginlabel = element.$$LABEL('plid_pragma', 'Имя')
                const blocksecondlogininput = element.$$INPUT('pragma-login-input', 'plid_pragma', 'text', email, 'Введите Логин',
                    `margin-left: 33px;
                    width: 200px;`)
                const blocksecondphonelabel = element.$$LABEL('ptid_pragma', 'Телефон')
                const blocksecondphoneinput = element.$$INPUT('pragma-phone-input', 'ptid_pragma', 'tel', phone, 'Введите номер телефона', `
                    margin-left: 5px;
                    width: 200px;
                `)
                const btn_agree = element.$$BLUE_BTN('mark_btn_get_code', 'm_get_code_pragma', 'Получить код',
                    `margin-top: 20px;
                    margin-right: auto;
                    margin-left: auto;
                    display: block;
                `)

                const $SVG = `<svg id="pragma-first_svg_D" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     style=" margin-top: -20px; margin-left: auto; margin-right: auto; display:block;"
                      width="100pt" height="54pt" viewBox="0 0 100 54" version="1.1">
<g id="surface1">
<path style="fill-rule:nonzero;fill:rgb(29.019608%,69.803922%,100%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;" d="M 235.300973 67.389264 C 235.300973 54.387706 221.396284 43.326267 202.296943 39.675901 C 202.905907 36.522057 202.712146 33.257875 201.715658 30.186786 C 196.807036 15.189939 173.518757 9.387971 149.372392 16.890992 C 141.926417 7.107641 127.883327 0.496523 111.764221 0.496523 C 97.093713 0.496523 84.130151 6.004256 76.33356 14.34401 C 56.459173 11.098218 39.002191 17.00133 34.693306 29.653483 C 33.83522 32.200464 33.530738 34.912954 33.80754 37.588663 C 14.542117 40.521829 0.499027 49.523615 0.499027 60.18048 C 0.499027 68.740911 9.550454 76.225543 23.086074 80.372433 C 20.004344 85.926139 18.851003 91.810862 20.262693 97.438127 C 24.433177 114.025688 49.040879 122.163155 75.263259 115.579622 C 77.71757 114.963566 80.098068 114.227975 82.413978 113.409631 C 89.721552 121.409175 101.504092 126.613477 114.799817 126.613477 C 127.135961 126.613477 138.161909 122.135571 145.534071 115.110684 C 150.894803 117.280675 156.532338 118.678296 162.280594 119.266769 C 184.387851 121.629852 203.505645 112.444169 204.972696 98.72541 C 205.111097 97.336984 205.07419 95.939362 204.861975 94.56013 C 222.623439 90.45002 235.300973 79.829935 235.300973 67.389264 Z M 235.300973 67.389264 " transform="matrix(0.423362,0,0,0.424829,0.0856058,0)"/>
<path style="fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:4;" d="M 205.913823 67.931762 C 205.913823 58.543791 195.053956 50.608611 180.106646 47.932901 C 180.586436 45.652572 180.429581 43.289488 179.663762 41.101107 C 175.816214 30.333904 157.658 26.10426 138.761647 31.529238 C 132.958031 24.531936 121.987443 19.732209 109.402177 19.732209 C 97.933346 19.732209 87.811618 23.676812 81.712746 29.727042 C 66.193378 27.400738 52.556265 31.657967 49.188506 40.733312 C 48.514955 42.553898 48.27506 44.512407 48.487275 46.452526 C 33.43847 48.558153 22.486336 55.040543 22.486336 62.709071 C 22.486336 68.86964 29.563242 74.257839 40.13708 77.236979 C 37.710448 81.236751 36.833909 85.47559 37.93189 89.530532 C 41.188927 101.465484 60.417443 107.322622 80.873113 102.53209 C 82.801501 102.090736 84.665301 101.566628 86.464515 100.968961 C 92.166637 106.734149 101.384145 110.46727 111.773448 110.46727 C 121.396932 110.46727 130.023929 107.249062 135.772185 102.201074 C 139.979576 103.764204 144.380729 104.77564 148.846468 105.198605 C 166.118916 106.899657 181.056999 100.279345 182.201114 90.41324 C 182.311835 89.410998 182.284155 88.399562 182.108847 87.406515 C 196.00431 84.519323 205.913823 76.887574 205.913823 67.931762 Z M 205.913823 67.931762 " transform="matrix(0.423362,0,0,0.424829,0.0856058,0)"/>
</g>
</svg>`
                const $$SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Слой_1" x="0px" y="0px" viewBox="0 0 286.6 56.3" enable-background="new 0 0 286.6 56.3" xml:space="preserve">
<g id="XMLID_2_">
    <polygon id="XMLID_10_" fill="#39C3DE" points="46,30.8 26.7,3.2 21.3,24.6  "></polygon>
    <polygon id="XMLID_9_" fill="#00A3DC" points="0,0 26.7,3.2 20.5,27.9 11,14.9  "></polygon>
    <polygon id="XMLID_8_" fill="#0081C7" points="0,5 3.3,4.5 11.7,15.9  "></polygon>
    <polygon id="XMLID_7_" fill="#3CC4E0" points="20.5,27.9 24,43 24,47 11.7,56.3  "></polygon>
    <polygon id="XMLID_6_" fill="#00A4DA" points="46,30.8 24,43 20.5,27.9 21.4,24.6  "></polygon>
    <polygon id="XMLID_5_" fill="#50C3DF" points="45,34.2 46,30.8 24,43  "></polygon>
    <polygon id="XMLID_4_" fill="#00AAD4" points="51.5,17.6 38.1,19.5 46,30.8  "></polygon>
    <polygon id="XMLID_3_" fill="#0084BF" points="56.8,23.5 51.5,17.6 49,23.5  "></polygon>
</g>
                <g id="XMLID_1_">
                    <path d="M92.1,21.1c0,4-1.2,7-3.5,9.2c-2.3,2.2-5.7,3.2-10,3.2h-2.7v11.8h-9.6V9.8h12.3c4.5,0,7.9,1,10.1,2.9   C91,14.7,92.1,17.5,92.1,21.1z M75.9,25.8h1.8c1.4,0,2.6-0.4,3.4-1.2s1.3-1.9,1.3-3.4c0-2.4-1.3-3.6-4-3.6h-2.5V25.8z"></path>
                    <path d="M107.4,32.5v12.9h-9.6V9.8h11.7c9.7,0,14.5,3.5,14.5,10.5c0,4.1-2,7.3-6,9.6l10.4,15.5h-10.9l-7.5-12.9H107.4z M107.4,25.2   h1.8c3.4,0,5-1.5,5-4.5c0-2.4-1.6-3.7-4.9-3.7h-1.9V25.2z"></path>
                    <path d="M153.3,45.4l-1.8-6.7H140l-1.8,6.7h-10.6l11.6-35.7h12.8l11.8,35.7H153.3z M149.6,30.9L148,25c-0.4-1.3-0.8-3-1.3-5   c-0.5-2.1-0.8-3.5-1-4.4c-0.1,0.8-0.4,2.2-0.9,4.1c-0.4,1.9-1.4,5.6-2.9,11.2H149.6z"></path>
                    <path d="M182,24.6h15.4v19.2c-4.2,1.4-8.8,2.1-13.7,2.1c-5.5,0-9.7-1.6-12.7-4.8c-3-3.2-4.5-7.7-4.5-13.6c0-5.7,1.6-10.2,4.9-13.4   s7.9-4.8,13.8-4.8c2.2,0,4.4,0.2,6.3,0.6c2,0.4,3.7,1,5.2,1.6l-3,7.5c-2.6-1.3-5.4-1.9-8.4-1.9c-2.8,0-5,0.9-6.5,2.7   c-1.5,1.8-2.3,4.4-2.3,7.8c0,3.3,0.7,5.9,2.1,7.6c1.4,1.7,3.4,2.6,6,2.6c1.4,0,2.7-0.1,3.9-0.4V32H182V24.6z"></path>
                    <path d="M220,45.4l-7.3-25.6h-0.2c0.3,4.4,0.5,7.8,0.5,10.2v15.4h-8.5V9.8h12.8l7.4,25.3h0.2l7.3-25.3h12.8v35.6h-8.8V29.8   c0-0.8,0-1.7,0-2.7c0-1,0.1-3.4,0.3-7.3h-0.2l-7.2,25.6H220z"></path>
                    <path d="M274.5,45.4l-1.8-6.7h-11.6l-1.8,6.7h-10.6l11.6-35.7h12.8l11.8,35.7H274.5z M270.8,30.9l-1.5-5.8c-0.4-1.3-0.8-3-1.3-5   c-0.5-2.1-0.8-3.5-1-4.4c-0.1,0.8-0.4,2.2-0.9,4.1c-0.4,1.9-1.4,5.6-2.9,11.2H270.8z"></path>
                </g>
                <g id="XMLID_12_">
                    <path fill="#0073BB" d="M93.5,19.4c0,4-1.2,7-3.5,9.2c-2.3,2.2-5.7,3.2-10,3.2h-2.7v11.8h-9.6V8.1H80c4.5,0,7.9,1,10.1,2.9   C92.3,13,93.5,15.8,93.5,19.4z M77.3,24H79c1.4,0,2.6-0.4,3.4-1.2s1.3-1.9,1.3-3.4c0-2.4-1.3-3.6-4-3.6h-2.5V24z"></path>
                    <path fill="#0073BB" d="M108.7,30.7v12.9h-9.6V8.1h11.7c9.7,0,14.5,3.5,14.5,10.5c0,4.1-2,7.3-6,9.6l10.4,15.5h-10.9l-7.5-12.9   H108.7z M108.7,23.5h1.8c3.4,0,5-1.5,5-4.5c0-2.4-1.6-3.7-4.9-3.7h-1.9V23.5z"></path>
                    <path fill="#0073BB" d="M154.7,43.7l-1.8-6.7h-11.6l-1.8,6.7H129l11.6-35.7h12.8l11.8,35.7H154.7z M150.9,29.1l-1.5-5.8   c-0.4-1.3-0.8-3-1.3-5c-0.5-2.1-0.8-3.5-1-4.4c-0.1,0.8-0.4,2.2-0.9,4.1c-0.4,1.9-1.4,5.6-2.9,11.2H150.9z"></path>
                    <path fill="#0073BB" d="M183.3,22.8h15.4V42c-4.2,1.4-8.8,2.1-13.7,2.1c-5.5,0-9.7-1.6-12.7-4.8c-3-3.2-4.5-7.7-4.5-13.6   c0-5.7,1.6-10.2,4.9-13.4s7.9-4.8,13.8-4.8c2.2,0,4.4,0.2,6.3,0.6c2,0.4,3.7,1,5.2,1.6l-3,7.5c-2.6-1.3-5.4-1.9-8.4-1.9   c-2.8,0-5,0.9-6.5,2.7c-1.5,1.8-2.3,4.4-2.3,7.8c0,3.3,0.7,5.9,2.1,7.6c1.4,1.7,3.4,2.6,6,2.6c1.4,0,2.7-0.1,3.9-0.4v-5.6h-6.3   V22.8z"></path>
                    <path fill="#0073BB" d="M221.4,43.7L214.1,18h-0.2c0.3,4.4,0.5,7.8,0.5,10.2v15.4h-8.5V8.1h12.8l7.4,25.3h0.2l7.3-25.3h12.8v35.6   h-8.8V28.1c0-0.8,0-1.7,0-2.7c0-1,0.1-3.4,0.3-7.3h-0.2l-7.2,25.6H221.4z"></path>
                    <path fill="#0073BB" d="M275.9,43.7l-1.8-6.7h-11.6l-1.8,6.7h-10.6l11.6-35.7h12.8l11.8,35.7H275.9z M272.1,29.1l-1.5-5.8   c-0.4-1.3-0.8-3-1.3-5c-0.5-2.1-0.8-3.5-1-4.4c-0.1,0.8-0.4,2.2-0.9,4.1c-0.4,1.9-1.4,5.6-2.9,11.2H272.1z"></path>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
</svg>`

                const $Activation = `
            <div class ="pragma-activation-conf">
            
                <div class="activation-conf-block-first">
                     <div id="pragma-first_svg_D" class="block-first_svg" style="
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    display: block;
">
                     ${$$SVG}
                     </div>
                     <div class="block-first_desc" style = "margin-top: 20px; text-align: center">${description}</div>          
                </div>
            
            
                 <div class="activation-conf-block-second" style="margin-top: 20px">
                        <div class="block-second-login">
                             ${blocksecondloginlabel}
                             ${blocksecondlogininput}
                        </div>                        
                       
                        <div class="block-second-phone" style="margin-top: 10px">
                             ${blocksecondphonelabel}
                             ${blocksecondphoneinput}
                        </div>
                 
                 </div>
            
            
                 <div class="activation-conf-block-three">
                 
                 ${btn_agree}
                    </div>            
                     
         
            </div>
            `

                return $($Activation)
            }


        }


        class Confirmation {

            _name
            _surname
            _middle_name
            _email
            _is_phone


            static name_
            static surname
            static middle_name
            static email
            static is_phone
            static stopFlag = false

            static TOKEN


            constructor() {
                this._name = Confirmation.name_
                this._email = Confirmation.email
                this._is_phone = Confirmation.is_phone
            }


            get name() {
                return this._name
            }

            get surname() {
                return this._surname
            }

            get middle_name() {
                return this._middle_name
            }

            get email() {
                return this._email
            }

            get is_phone() {
                return this._is_phone
            }


            install = async ($widget_code, flag = true) => {
                Activation.$widget_code = $widget_code
                let  $checkUser = false
                try {
                     $checkUser =    await Confirmation.check_user();
                    $checkUser = JSON.parse($checkUser)
                }catch ($e) {
                }
                if (!$checkUser) {
                    const Act = new Activation(this.name, this.is_phone)
                    let destroyFlag = false
                    const _modal = new Modal({
                        class_name: 'modal-install-integration',
                        init: async $modal_body => {
                            Confirmation.stopFlag = false

                            $modal_body
                                .append(Act.$)
                                .css({width: '330px', height: '345px'})
                                .trigger('modal:loaded')
                                .trigger('modal:centrify')
                        },
                        destroy: () => {
                            if (destroyFlag)
                                return true
                            M.ConfirmModal({
                                title: 'Прервать текущую операцию?',
                                message: 'Операция будет прервана, все изменения не сохраняться',
                                accept_text: 'Прервать',
                                cancel_text: 'Отмена',
                                accept_func: () => {
                                    destroyFlag = true
                                    _modal.destroy()
                                }
                            })
                            return false
                        }
                    })


                } else {
                    flag ? await Confirmation.install_integration($widget_code, $checkUser, flag) :
                        $checkUser && $('input[name="api_key"]').val($checkUser || '')
                        $(`#save_${$widget_code}`).trigger('click')
                }

            }

            static check_user = async () => {
                const user = AMOCRM.constant('user')

                return await REQUEST({
                    flag: 'check_user',
                    user_id: user.id,
                    phone: user.phone,
                    name_user: user.name_user
                })


            }

            static install_integration = async (widget_code, api_key, flag) => {
                try {


                    $('input[name="api_key"]').val(api_key)
                    $('#save_pmstorage').trigger('click')

                    // $.ajax({
                    //     url: "/api/v4/widgets/" + widget_code,
                    //     method: "POST",
                    //     data: {
                    //         // id: Pid,
                    //         api_key: api_key
                    //     },
                    //     success: function (response) {
                    //         if (flag) {
                    //             if (response.settings_template) {
                                    alert.showAlertModal('Интеграция Установлена успешно', true, 1500);
                    //             }
                    //         }
                    //
                    //     }
                    // })

                } catch ($e) {
                    alert.showAlertModal('Произошла ошибка, обратитесь в службу поддержки', false, 2500);
                }

            }

            static set = (data_widget) => {
                Confirmation.data_widget = data_widget
            }


            static inMarket = (isExistUser) => {
                const $USER = AMOCRM.constant('user');

                Confirmation.name_ = $USER.name
                Confirmation.email = $USER.login
                Confirmation.phone_in_amo = $USER.personal_mobile
                Confirmation.is_phone = isExistUser
            }

        }

        const _exports = {}
        _exports.Confirmation = Confirmation

        return _exports
    });