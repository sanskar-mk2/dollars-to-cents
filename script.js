const convert = (dlr) => {
    let dollars = parseFloat(dlr.value);
    if (isNaN(dollars))
        dollars = 0.0
    let cents = dollars * 100;
    document.getElementById("cents").value = cents == 0 ? "" : cents.toString();
}