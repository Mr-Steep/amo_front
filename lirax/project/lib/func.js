define([
    'jquery',

], function (
    $,
) {

    let requestSettings = async (data) => {
        data.account_id = AMOCRM.constant('account').id
        data.referrer = AMOCRM.constant('account').subdomain
        data.typeCRM = 'amocrm'
        return await $.ajax({
            url: 'https://smart-dev.pragma.by/api/own/autocall/amocrm/settings.php',
            type: "POST",
            data: data,

        })
    }

    let pip = async (data) => {
        data.account_id = AMOCRM.constant('account').id
        data.referrer = AMOCRM.constant('account').subdomain
        data.typeCRM = 'amocrm'
        return await $.ajax({
            url: 'https://smart.pragma.by/api/own/lirax/pip.php',
            type: "POST",
            data: data,
        })
    }


    return {
        requestSettings: requestSettings,
        pip: pip
    }
});