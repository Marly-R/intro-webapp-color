$(document).ready(function() {
    updateColor();

    $("#redRange, #greenRange, #blueRange, #redInput, #greenInput, #blueInput, #colorPicker").on("input change", function() {
        updateColor();
    });

    function updateColor() {
        // Obtener valores de los controles
        var red = $("#redRange").val() || 0;
        var green = $("#greenRange").val() || 0;
        var blue = $("#blueRange").val() || 0;

        // Actualizar valores desde campos de entrada si están presentes
        if ($("#redInput").val() !== "") {
            red = $("#redInput").val();
        }
        if ($("#greenInput").val() !== "") {
            green = $("#greenInput").val();
        }
        if ($("#blueInput").val() !== "") {
            blue = $("#blueInput").val();
        }

        // Obtener el color seleccionado del input color picker
        var selectedColor = $("#colorPicker").val();
        var rgbArray = hexToRgb(selectedColor);

        // Actualizar valores de los controles de rango e input
        red = rgbArray.r;
        green = rgbArray.g;
        blue = rgbArray.b;

        $("#redRange").val(red);
        $("#greenRange").val(green);
        $("#blueRange").val(blue);

        $("#redInput").val(red);
        $("#greenInput").val(green);
        $("#blueInput").val(blue);

        // Actualizar cuadro de color y código hexadecimal
        var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
        var hexColor = rgbToHex(red, green, blue);

        $("#colorBox").css("background-color", rgbColor);
        $("#hexCode").text(hexColor);
    }

    function rgbToHex(red, green, blue) {
        var hexRed = ("0" + parseInt(red, 10).toString(16)).slice(-2);
        var hexGreen = ("0" + parseInt(green, 10).toString(16)).slice(-2);
        var hexBlue = ("0" + parseInt(blue, 10).toString(16)).slice(-2);

        return "#" + hexRed + hexGreen + hexBlue;
    }

    function hexToRgb(hex) {
        // Eliminar el carácter "#" si está presente
        hex = hex.replace(/^#/, '');

        // Convertir al formato r, g, b
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return { r: r, g: g, b: b };
    }
});


