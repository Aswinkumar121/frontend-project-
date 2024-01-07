function tracker() {
    // Get form values
    const type = document.getElementById("selectt").value;
    const date = document.getElementById("date").value;
    const amount = document.getElementById("amount").value;
    const savingsAmount = document.getElementById("saving").value;
    const expenseName = document.getElementById("xpense").value;
    const savingsType = document.getElementById("savee").value;



    const typed = document.getElementById("Distype").innerHTML=type;
    const dated = document.getElementById("disdate").innerHTML= date;
    const amountd = document.getElementById("disamou").innerHTML=amount;
    const savingsAmountd = document.getElementById("dissav").innerHTML=savingsAmount;
    const expenseNamed = document.getElementById("disexp").innerHTML=expenseName;
    const savingsTyped = document.getElementById("disst").innerHTML=savingsType;

}