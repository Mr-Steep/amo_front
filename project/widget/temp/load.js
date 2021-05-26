define([], function () {
    class TwigWrapper {
        static _templates = {}

        static load

        static load_templates = async widget => {
            TwigWrapper.load = new Promise(res => {

                const templates = [
                    '/templates/AddStock.twig',
                    '/templates/ArrowDown.twig',
                    '/templates/ArrowUp.twig',
                    '/templates/ColonLeads.twig',
                    '/templates/coming.twig',
                    '/templates/consumption.twig',
                    '/templates/deficit.twig',
                    '/templates/DetailsLeadsPost.twig',
                    '/templates/elCardProduct.twig',
                    '/templates/elComing.twig',
                    '/templates/elModalProduct.twig',
                    '/templates/elproduct.twig',
                    '/templates/ElTableConsumption.twig',
                    '/templates/itemStock.twig',
                    '/templates/LeftPage.twig',
                    '/templates/LineAll.twig',
                    '/templates/LineChangeLead.twig',
                    '/templates/ModalColonLeads.twig',
                    '/templates/ModalComing.twig',
                    '/templates/ModalConsumption.twig',
                    '/templates/ModalConsumptionElementTable.twig',
                    '/templates/ModalCreateStock.twig',
                    '/templates/ModalDescProduct.twig',
                    '/templates/ModalProduct.twig',
                    '/templates/ModalProductHistoryEl.twig',
                    '/templates/ModalProductInfo.twig',
                    '/templates/ModalSection.twig',
                    '/templates/pipeline.twig',
                    '/templates/PositionFORComing.twig',
                    '/templates/PragmaDiscount.twig',
                    '/templates/PragmaDiscountALL.twig',
                    '/templates/products.twig',
                    '/templates/product_deficit.twig',
                    '/templates/rightcatalog.twig',
                    '/templates/rigth_catalog.twig',
                    '/templates/settings.twig',
                    '/templates/stockStock.twig',
                    '/templates/btnActive.twig',
                    '/templates/PaginationPragma.twig',
                    '/templates/NavBarStock.twig',
                    '/templates/discountLeadsSvg.twig',
                    '/templates/discountNullSVG.twig',
                    '/templates/drops.twig',
                    '/templates/ModalExport.twig',
                    '/templates/ModalImport.twig',
                    '/templates/ModalProgress.twig',
                    '/templates/exports_last.twig',
                    '/templates/ModalImportSettings.twig',
                    '/templates/select.twig',
                    '/templates/table_import.twig',

                ]

                let counter = Object.values(templates).length

                const load = template => {
                    TwigWrapper._templates[TwigWrapper._get_name(template.id)] = template

                    --counter || res(true)
                }

                templates.forEach(href => {
                    widget.render({
                        href,
                        base_path: widget.params.path,
                        load
                    })
                })
            })

            return TwigWrapper.load
        }

        static _get_name = (temp_id) => {
            const arr1 = temp_id.split('/');

            return arr1[arr1.length - 1].split('.twig')[0]
        }

        static get templates() {
            return TwigWrapper._templates
        }
    }


    return {
        TwigWrapper: TwigWrapper,
        url: "https://smart-dev.pragma.by/api/integrations/pragma_storage/amocrm/Stock/"
    }
});