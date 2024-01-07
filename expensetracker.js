
        function tracker() {
            // Get form values
            const type = document.getElementById("selectt").value;
            const date = document.querySelector("input[type='datetime-local']").value;
            const amount = document.getElementById("amount").value;
            const savingsAmount = document.querySelector("input[type='number']").value;
            const expenseName = document.querySelector("input[type='text']").value;
            const savingsType = document.querySelector("input[name='save']:checked");

            // Check if all required fields are filled
            if (!type || !date || !amount || !savingsAmount || !expenseName || !savingsType) {
                alert("Please fill in all fields.");
                return;
            }

            // Create a new row in the table
            const table = document.getElementById("mytable").getElementsByTagName('tbody')[0];
            const newRow = table.insertRow(table.rows.length);

            // Add data to the new row
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
            const cell6 = newRow.insertCell(5);

            cell1.innerHTML = type;
            cell2.innerHTML = date;
            cell3.innerHTML = expenseName;
            cell4.innerHTML = amount;
            cell5.innerHTML = savingsAmount;
            cell6.innerHTML = savingsType.value;

            // Clear form fields after adding the expense
            document.getElementById("selectt").value = "choose one";
            document.querySelector("input[type='datetime-local']").value = "";
            document.getElementById("amount").value = "";
            document.querySelector("input[type='number']").value = "";
            document.querySelector("input[type='text']").value = "";
            document.querySelector("input[name='save']:checked").checked = false;
        }
  

    

