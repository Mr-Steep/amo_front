define([
    'jquery',

], function (
    $,
) {


    class Deficit {

        _$
        static AllDeficit = []


        constructor(twig) {
            this._$ = Deficit.__render(twig)

            this.bind_action()

        }

        bind_action = () => {

        }

        get $() {
            return this._$
        }


        static __render = (twig) => {
            return $(twig.render())
        }
    }
    return Deficit
});