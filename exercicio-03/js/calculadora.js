class Calculadora {

    static writeNumber(elementId) {
        var outputValueTo = document.getElementById('field1');

        if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
            outputValueTo.value = elementId.textContent;
        } else {

            outputValueTo.value += elementId.textContent;
        }
    }

    static cleartxt() {
        document.getElementById("field1").value = '0';
        document.getElementById("dot").disabled = false;
    }

    static setOperator(elementId) {
        var outputValueTo = document.getElementById('field1');
        if (outputValueTo.value == '0' || outputValueTo.value == "Syntax error") {
            outputValueTo.value = '0';
        } else {
            outputValueTo.value += elementId.textContent;
            document.getElementById('dot').disabled = false;
        }
    }

    static setDecimal(elementId, status) {
        var outputValueTo = document.getElementById('field1');
        outputValueTo.value += elementId.textContent;
        document.getElementById('dot').disabled = status;
    }

    static calculate() {

        try {
            var field1txt = document.getElementById('field1');
            if (field1txt.value != '') {
                var calculateResult = eval(field1txt.value);
                field1txt.value = calculateResult;
            }
        } catch (err) {
            field1txt.value = 'Syntax error';
        }
    }
}