


var sliderCost = document.querySelector('.slider-cost');
var sliderLength = document.querySelector('.slider-length');
var sliderDiameter = document.querySelector('.slider-diameter');
var input0 = document.querySelector('.cost-min');
var input1 = document.querySelector('.cost-max');
var input2 = document.querySelector('.length-min');
var input3 = document.querySelector('.length-max');
var inputs = [input0, input1];

noUiSlider.create(sliderCost, {
    start: [20, 80],
    connect: true,
    tooltips: [true, wNumb({decimals: 1})],
    range: {
        'min': [0],
        'max': 200
    }
});

sliderCost.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});

inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        sliderCost.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

        var values = sliderCost.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = sliderCost.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

            case 13:
                sliderCost.noUiSlider.setHandle(handle, this.value);
                break;

            case 38:

                // Get step to go increase slider value (up)
                position = step[1];

                // false = no step is set
                if (position === false) {
                    position = 1;
                }

                // null = edge of slider
                if (position !== null) {
                    sliderCost.noUiSlider.setHandle(handle, value + position);
                }

                break;

            case 40:

                position = step[0];

                if (position === false) {
                    position = 1;
                }

                if (position !== null) {
                    sliderCost.noUiSlider.setHandle(handle, value - position);
                }

                break;
        }
    });
});



noUiSlider.create(sliderLength, {
    start: [20, 80],
    connect: true,
    tooltips: [true, wNumb({decimals: 1})],
    range: {
        'min': [0],
        'max': 200
    }
});

sliderLength.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});



noUiSlider.create(sliderDiameter, {
    start: [20, 80],
    connect: true,
    tooltips: [true, wNumb({decimals: 1})],
    range: {
        'min': [0],
        'max': 200
    }
});

sliderDiameter.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});


