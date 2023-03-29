
let firstXElement = 0;
let firstYElement = 0;

function previousValues() {
    firstXElement = document.getElementById('xElement').value; // x ning birinchi qiymati
    firstYElement = document.getElementById('yElement').value; //
    firstXElement = +firstXElement;
    firstYElement = +firstYElement;

    let firstxyELements = firstXElement + "" + firstYElement; // 65

    document.getElementById(firstxyELements).innerHTML = '&#9816;';
    document.getElementById('xElement').value = '';
    document.getElementById('yElement').value = '';

    document.getElementById('xElement').disabled = true;
    document.getElementById('yElement').disabled = true;
    document.getElementById('elemButton').disabled = true;

}


let myLength = document.querySelectorAll('.chess').length;


for (let i = 0; i < myLength; i++) {
    document.querySelectorAll('.chess')[i].addEventListener('click', function () {
        let selectedElement = this.id; // 32

        // let selectedYElement = selectedElement % 10; // 2
        // let selectedXElement = (selectedElement - selectedYElement) / 10; // 3

        let selectedXElement = selectedElement.slice(0, 1)
        let selectedYElement = selectedElement.slice(1, 2)
        selectedXElement = +selectedXElement
        selectedYElement = +selectedYElement

        if (ot === '&#9816') {

        }

        if ((Math.abs(firstXElement - selectedXElement) === 1 && Math.abs(firstYElement - selectedYElement) === 2) || (Math.abs(firstXElement - selectedXElement) === 2 && Math.abs(firstYElement - selectedYElement) === 1)) {
            for (let i = 0; i < myLength; i++) {
                document.querySelectorAll('.chess')[i].innerHTML = '';
            }
            document.getElementById(selectedElement).innerHTML = '&#9816;';
            firstXElement = selectedXElement
            firstYElement = selectedYElement
        }
    })
}
