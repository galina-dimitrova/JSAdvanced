function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);

    function convert() {
        let inputValue = +document.getElementById('inputDistance').value;
        let inputUnit = document.getElementById('inputUnits').value;
        let outputUnit = document.getElementById('outputUnits').value;
        let outputDist = document.getElementById('outputDistance');

        function calcM(val, unit){
            switch (unit) {
                case 'km':
                    return val*1000;
                case 'm':
                    return val*1;
                case 'cm':
                    return val*0.01;
                case 'mm':
                    return val*0.001;
                case 'mi':
                    return val*1609.34;
                case 'yrd':
                    return val*0.9144;
                case 'ft':
                    return val*0.3048;
                case 'in':
                    return val*0.0254;
            }
        }
        function calcU(val, unit){
            switch (unit) {
                case 'km':
                    return val/1000;
                case 'm':
                    return val/1;
                case 'cm':
                    return val/0.01;
                case 'mm':
                    return val/0.001;
                case 'mi':
                    return val/1609.34;
                case 'yrd':
                    return val/0.9144;
                case 'ft':
                    return val/0.3048;
                case 'in':
                    return val/0.0254;
            }
        }
        let result = calcU(calcM(inputValue, inputUnit), outputUnit)

        outputDist.value = result;
    }
}