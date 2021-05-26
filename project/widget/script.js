define([
    'jquery',
    './temp/load.js',
    './root/ColonLeads.js',
    './temp/module_info.js',
    './root/stockStock.js',
    './root/function.js',

], function (
    $,
    load,
    ColonLeads,
    module_info,
    stock,
    func
) {
    const {ModulesInfo} = module_info;
    let width_column
    return function () {
        const code = 'pmstorage'
        let self = this;

        this.callbacks = {
            render: function () {
                const $item_list = $(`div[data-widget-code='${code}']`)
                change($item_list)
                const circle = $item_list.find('.nav__menu__item__icon')
                const svg = circle.find('svg path')
                const title = $item_list.find('.nav__menu__item__title')
                circle.css({"background": "transparent", "border": "1px solid #a7acaf"})
                title.css({"border": 0, "background": "transparent", "color": "#a7acaf"})
                $item_list.hover(
                    () => {
                        svg.css({'stroke': "#fff"});
                        circle.css({"border": "1px solid #fff"})
                        title.css({"color": "#fff"})

                    },
                    () => {
                        svg.css({'stroke': "#a7acaf"});
                        circle.css({"border": "1px solid #a7acaf"})
                        title.css({"color": "#a7acaf"})

                    })
                if (location.pathname.split('/')[2] !== 'pmstorage') {
                    $('.b24-widget-button-shadow').parent().parent().remove()

                }


                func.sendata(code)
                return true;
            },

            initMenuPage: function () {
                RENDER()
            },
            init: function () {
                const widgetSettings = self.get_settings();
                if ($('link[href="' + widgetSettings.path + '/style.css?v=' + widgetSettings.version + '"').length < 1) {
                    $("head").append('<link href="' + widgetSettings.path + '/style.css?v=' + widgetSettings.version + '" type="text/css" rel="stylesheet">');
                }
                return true;
            },
            bind_actions: function () {
                return true;
            },
            settings: function (modal) {
                ModulesInfo._info = null
                const Set = self.get_settings()


                switch (Set.active) {
                    case "N":
                        $('#save_' + code).trigger('click')
                        break;
                    default:
                        break;

                }
                $('.widget_settings_block').hide()

                ModulesInfo.info().then(res => {
                    new ModulesInfo(modal, res)
                })
                return true;
            },
            onSave: function (settings) {
                setTimeout(
                    function () {
                        if (settings.active === 'Y') {
                            ModulesInfo.Update()
                            ModulesInfo.enableGeneral(null, self?.params?.oauth_client_uuid)
                        } else {
                            ModulesInfo.disableGeneral(self?.params?.oauth_client_uuid).then(r => r)
                            $('#pragma-storage').remove()

                        }
                    }
                    , 2000)

                return true;
            },
            destroy: function () {

            },

            loadPreloadedData: function () {
                ModulesInfo.isEnable().then(isPragmaEnable => {
                    if (!isPragmaEnable) {
                        $('#' + code).css({
                            'pointer-events': 'none',
                        })
                        ModulesInfo.AmoMessage()
                    } else {

                        ModulesInfo.isLicense().then(res => {

                            if (!res) {
                                $('#' + code).css({
                                    'pointer-events': 'none',
                                })
                                ModulesInfo.AmoMessageUser()
                            } else {

                                reloadedDataLEADS().then(r => r)

                            }

                            $('#card_fields').css({'width': '50%'})


                        })


                    }
                })
                change_width_column()

                return Promise.resolve({});
            },
            loadElements: function () {
            },
            linkCard: function () {
            },
            searchDataInCard: function () {
            },

        };

        let RENDER = () => {
            ModulesInfo.isEnable().then(isEnable => {
                if (!isEnable) {
                    $('#' + code).css({
                        'pointer-events': 'none',
                    })
                    ModulesInfo.AmoMessage()
                } else {

                    ModulesInfo.isLicense().then(res => {

                        if (!res) {
                            $('#' + code).css({
                                'pointer-events': 'none',
                            })
                            ModulesInfo.AmoMessageUser()
                        } else {
                            stock(self).then(r => r)
                        }

                    })


                }
            })
            feedBack(window, document, 'https://crm.pragma.by/upload/crm/site_button/loader_3_2ufmxs.js');
            setTimeout(cssB, 2200)
        }

        let reloadedDataLEADS = async () => {
            const _id = "#" + code
            $(_id).html(`<div class="colon_leads_loaders">
        <div class="pragma_block_left"></div>
        <div class="loader_pragma_id_left" ></div>
    </div>`)
            await load.TwigWrapper.load_templates(self)
            await ColonLeads.RenderTemp(self)
            await ColonLeads.RenderPage(self)
        }

        this.isWidgetActive = function () {

            return ModulesInfo.isActivePragma(self) || !!$('.widget-state_status_not_configured').length;
        };

        let change_width_column = () => {
            const cfp_ = $('#card_fields')
            if (location.search.split('=')[1] === code) {
                width_column = cfp_.attr('style').match(/[\d|,|.|e|E|\+]+/g, "")[0]
                cfp_.css({'width': "50%"})
            } else {
                if (width_column < 45)
                    cfp_.css({'width': width_column + "%"})
            }

        }

        let feedBack = function (w, d, u) {
            const s = d.createElement('script');
            s.async = true;
            s.src = u + '?' + (Date.now() / 60000 | 0);
            const h = d.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
        }


        let cssB = () => {
            $('.b24-widget-button-position-bottom-left').css({
                left: "6%",
                bottom: "6%"
            })
        }
        let change = ($obj) => {
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14pt" height="12pt" viewBox="0 0 12 12" version="1.1">
<path style="fill:none;stroke-width:8;stroke-linecap:butt;stroke-linejoin:miter;stroke:#a7acaf;stroke-opacity:1;stroke-miterlimit:10;" d="M 39.994665 116.092969 L 6.923954 116.092969 C 5.222701 115.975703 3.936387 114.568516 4.019375 112.84862 L 4.019375 34.31974 C 4.268339 32.756198 5.430171 31.505365 6.923954 31.075391 L 78.086148 4.065208 C 80.534293 3.596146 80.990727 5.511484 80.990727 7.309557 L 80.990727 32.091693 M 133.480625 112.84862 L 133.480625 67.310469 C 133.480625 65.512396 133.480625 65.082422 130.285588 64.06612 L 59.745804 43.075573 C 56.509273 42.098359 56.509273 44.521849 56.509273 46.319922 L 56.509273 112.84862 C 56.509273 114.646693 57.961562 116.092969 59.745804 116.092969 L 130.285588 116.092969 C 132.069829 116.092969 133.480625 114.646693 133.480625 112.84862 Z M 133.480625 112.84862 " transform="matrix(0.0941401,0,0,0.0999334,0.0278655,0)"></path>
</svg>`
            $obj.find('img').first().replaceWith(svg)
        }
        return this;
    };
});