document.getElementById("convert-btn").addEventListener("click", function() {
    const pixels = document.getElementById("pixels").value;
    const ppi = document.getElementById("ppi").value;

    if (pixels && ppi) {
        const inches = pixels / ppi ;
        document.getElementById("result-text").innerText = `${inches.toFixed(2)} in`;
    } else {
        document.getElementById("result-text").innerText = "Please enter both pixels and PPI.";
    }
});
