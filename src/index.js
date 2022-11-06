let description = "";
let race = "";
let pcClass = "";
let weapon = "";
let demeanor = "";

function setUpBindings() {
    $('#description-form input').on('change', handleFormUpdate);
}

function handleFormUpdate(e) {
    const fieldName = e.target.name;
    switch(fieldName) {
        case 'race':
            race = e.target.value;
            break;
        case 'class':
            pcClass = e.target.value;
            break;
        case 'weapon':
            weapon = e.target.value;
            break;
        case 'demeanor':
            demeanor = e.target.value;
            break;
    }

    updateDescription();
}

function updateDescription() {
    const description = `A ${demeanor} ${race} ${pcClass} wielding a ${weapon}.`;
    $('#prompt').val(description);
}

$(document).ready(() => {
    setUpBindings();
});