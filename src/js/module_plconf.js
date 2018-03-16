import "../scss/typography.scss";
import "../scss/plconf.scss";

function plgconf() {
    console.log('########################### plugin module function called ###############################');
    if (document.getElementById('choices-city-origin')) {
        const element = document.getElementById('choices-city-origin');
        const origin_cities = new Choices(element, { itemSelectText: '', noResultsText: 'nenhum item encontrado' });
        origin_cities.setChoices([{
            label: '',
            id: 1,
            disabled: false,
            choices: [
                {
                    value: 'SP',
                    label: 'São Paulo'
                },
                {
                    value: 'RJ',
                    label: 'Rio de Janeiro'
                },
                {
                    value: 'MG',
                    label: 'Minas Gerais'
                },
            ]

        }], 'value', 'label', false);
    }
    if (document.getElementById('choices-city-destiny')) {
        const element = document.getElementById('choices-city-destiny');
        const destiny_cities = new Choices(element, { itemSelectText: '', noResultsText: 'nenhum item encontrado' });
        destiny_cities.setChoices([{
            label: '',
            id: 1,
            disabled: false,
            choices: [
                {
                    value: 'SP',
                    label: 'São Paulo'
                },
                {
                    value: 'RJ',
                    label: 'Rio de Janeiro'
                },
                {
                    value: 'MG',
                    label: 'Minas Gerais'
                },
            ]

        }], 'value', 'label', false);
    }
    if (document.getElementById('date-select')) {
        const element = document.getElementById('date-select');
        const date_select = new Choices(element, { itemSelectText: '', searchEnabled: false, noResultsText: 'nenhum item encontrado'});
        date_select.setChoices([{
            
            disabled: true,
            choices: [
                {
                    value: '01/18',
                    label: 'Janeiro 2018'
                },
                {
                    value: '02/18',
                    label: 'Fevereiro 2018'
                },
                {
                    value: '01/19',
                    label: 'Janeiro 2019'
                },
            ]

        }], 'value', 'label', false);
    }

    if (document.getElementById('qtd-select')) {
        const element = document.getElementById('qtd-select');
        const date_select = new Choices(element, { itemSelectText: '', searchEnabled: false, noResultsText: 'nenhum item encontrado' });
        date_select.setChoices([{

            disabled: true,
            choices: [
                {
                    value: '6',
                    label: '06',
                    selected: true
                },
                {
                    value: '12',
                    label: '12'
                },
                {
                    value: '18',
                    label: '18'
                },
            ]

        }], 'value', 'label', false);
    }
}
export { plgconf };

