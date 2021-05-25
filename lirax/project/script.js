define([
        'jquery',
        'twigjs',
        './lib/Settings.js',
        './lib/templates.js',
        './lib/module_info.js',

    ], function (
    $,
    twig,
    Settings,
    createTemplatesRenderer,
    module_info
    ) {
        const {ModulesInfo} = module_info;

        var CustomWidget = function () {

            var self = this,
                system = self.system(),
                langs = self.langs,
                settingSuggest;

            this.getTemplate = createTemplatesRenderer(this);
            this.templates = {};
            this.init = false;
            this.bind_stats = false;

            this.callbacks = {
                settings: function (modal) {

                    ModulesInfo._info = null
                    const Set = self.get_settings()

                    $('.widget_settings_block__item_field').hide()
                    self.isWidgetActive() && ModulesInfo.enableGeneral(modal)

                    Settings(self, ModulesInfo).then(r => r)

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
                render: function () {
                    return true;
                },
                destroy: function () {

                },
                onSave: function () {
                    if (self.isActivePragma()) {
                        ModulesInfo.enableGeneral()
                    } else {
                        ModulesInfo.disableGeneral()
                    }
                    return true;
                },

            };
            this.isWidgetActive = function () {

                return self.isActivePragma() || !!$('.widget-state_status_not_configured').length;
            };

            this.isActivePragma = () => {
                var active = false;

                try {
                    active = AMOCRM.constant("widgets").widgets.all[self.params.widget_code].active;
                } catch (e) {

                }

                if (
                    self.params.widget_active !== 'N'
                    && (
                        (self.params.login !== '' && typeof self.params.login !== 'undefined')
                        || self.params.widget_active === 'Y'
                        || active
                    )
                ) {
                    return true;
                }
                return false
            }

            return this;
        };


        return CustomWidget;
    }
);


