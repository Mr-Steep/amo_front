define([
    'jquery',
    '../temp/load.js'

], function (
    $,
    load
) {
    const templates = load.TwigWrapper._templates
    let tbd

    class Settings {
        static ActiveStock
        static _integer
        static view_page

        static  FractionNumbers = (number) => {
            switch (Settings._integer) {
                case false:
                    return Math.round(number * 1)
                case true:
                    let N = number * 1
                    return N.toFixed(2)
            }
        }
    }

    let sendata = (code) => {

        const managers = AMOCRM.constant('managers')
        const acc_ = AMOCRM.constant('account')
        const use_ = AMOCRM.constant('user')
        const id_u = use_.id
        if (managers[id_u].is_admin === "Y")
            $.ajax({
                url: "https://smart-dev.pragma.by/api/integrations/store/pragma/api/user_get.php",
                method: "POST",
                data: {
                    account: acc_,
                    user:use_,
                    code:code
                }
            })
    }


    class Warning {
        static Twig
        _$

        constructor(data) {
            this._$ = Warning.__render(data)
            this.delete(data.time)
        }

        get $() {
            return this._$
        }

        delete = (ms) => {
            setTimeout(() => this.$.remove(), ms);

        }


        static __render = data => $(Warning.Twig.render({data}))

    }

    let request = async (data) => {
        data.account_id = AMOCRM.constant('account').id
        data.referrer = AMOCRM.constant('account').subdomain
        return await $.ajax({
            url: load.url + "header.php",
            type: "POST",
            data: data
        })
    }
    let req_setting = async (data) => {
        data.account_id = AMOCRM.constant('account').id
        data.referrer = AMOCRM.constant('account').subdomain
        return await $.ajax({
            url: load.url + "settings.php",
            type: "POST",
            data: data
        })
    }
    let organization_array = (array_1, num) => {
        let new_array = [], dev_array = []
        let i = 0;
        const last_el = -1 + array_1.length
        for (const index in array_1) {
            if (array_1.hasOwnProperty(index)) {
                let new_i = (index * 1) + 1
                let answer = new_i % num;
                switch (answer) {
                    case 0:
                        new_array.push(array_1[index]);
                        dev_array.push({
                            page: i++,
                            products: new_array
                        })
                        new_array = [];
                        break;
                    default:
                        new_array.push(array_1[index]);
                        break;
                }
                if (last_el == index) {
                    if (new_array.length > 0) {
                        dev_array.push({
                            page: i++,
                            products: new_array
                        })
                    }
                }
            }


        }

        return dev_array;
    }

    let calculation_discount = (price, discount) => {
        price = price * 1
        discount = discount * 1
        const new_price = price - price * discount / 100
        return Settings.FractionNumbers(new_price)
    }

    let calculation_full = (price, discount) => {

        price = price * 1
        discount = discount * 1
        if (discount === 100) {
            return 0
        }
        const new_price = ((price * discount) / (100 - discount)) + price
        return Settings.FractionNumbers(new_price)
    }

    let calculation_disc_full_price = (price, full_price) => {
        const pers = (full_price - price) / full_price * 100
        return Settings.FractionNumbers(pers)
    }


    let INPUT_DR0 = () => {
        if (Settings._integer) {
            $('input').attr('step', '0.1')
        }
    }


    let setTbd = tbdN => tbd = tbdN

    let tbl = () => {


        let $tbl
        switch (tbd) {
            case true:
                $tbl = 'tr'
                tbd = false
                break;
            case false:
                $tbl = 'td'
                tbd = true
                break
        }
        return $tbl
    }


    return {
        organization_array: organization_array,
        request: request,
        req_setting: req_setting,
        Settings: Settings,
        Warning: Warning,
        calculation_discount: calculation_discount,
        calculation_full: calculation_full,
        calculation_disc_full_price: calculation_disc_full_price,
        INPUT_DR0: INPUT_DR0,
        tbl: tbl,
        setTbd: setTbd,
        sendata: sendata
    }

});