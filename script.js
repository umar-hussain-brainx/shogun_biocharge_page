const sliderPaggination = document.querySelectorAll(".product-section-slider .shg-sld-dot");
const sliderImages = document.querySelectorAll(".product-section-slider .shg-image-content-wrapper");
sliderPaggination.forEach((dot, index) => {
    dot.innerHTML = sliderImages[index].innerHTML;
});

var buttons = document.querySelectorAll('.bottle-variant');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('quantity-selected');
        });
        button.classList.add('quantity-selected');
    });
});

const addTocartBtn = document.querySelector("#s-2c22beb8-9e5e-4d98-afbe-4f0e1886bf63");
addTocartBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const quntitySelected = document.querySelector(".quantity-selected");
    const selectedId = quntitySelected.id;
    if (selectedId == "s-ef6a9314-276e-4855-bffd-1b4afe2ab178") {
        const btnToPress = document.querySelector("#s-f84b8471-d95f-4cea-8d54-060df5bc19c5");
        btnToPress.click();
    }
    if (selectedId == "s-d458fee6-ace9-4162-817f-635ca5803402") {
        const btnToPress = document.querySelector("#s-5f924442-d4b1-4994-a8ed-615fdeb19f03");
        btnToPress.click();
    }
    if (selectedId == "s-30a2ff9d-913e-4a70-9c21-ab0e220c08df") {
        const btnToPress = document.querySelector("#s-bdf45be2-0d7a-4a21-8234-b683fd9de59c");
        btnToPress.click();
    }
});
