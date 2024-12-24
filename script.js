
document.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll(".btn");

    let currentInput = "";
    let operatorUsed = false;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                currentInput = "";
                result.value = "";
            } else if (value === "←") {
                currentInput = currentInput.slice(0, -1);
                result.value = currentInput;
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput);
                    result.value = currentInput;
                } catch {
                    result.value = "Error";
                    currentInput = "";
                }
            } else {
                if ((["+", "-", "*", "/"].includes(value)) && operatorUsed) {
                    return;
                }

                if (["+", "-", "*", "/"].includes(value)) {
                    operatorUsed = true;
                } else {
                    operatorUsed = false;
                }

                currentInput += value;
                result.value = currentInput;
            }
        });
    });


    document.addEventListener("keydown", (event) => {
        const key = event.key;
        if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
            currentInput += key;
            result.value = currentInput;
        } else if (key === "Enter") {
            try {
                currentInput = eval(currentInput);
                result.value = currentInput;
            } catch {
                result.value = "Error";
                currentInput = "";
            }
        } else if (key === "Backspace") {
            currentInput = currentInput.slice(0, -1);
            result.value = currentInput;
        } else if (key === "Escape") {
            currentInput = "";
            result.value = "";
        }
    });
});
