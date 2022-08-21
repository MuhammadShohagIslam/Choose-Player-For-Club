// Budget Calculation For Per Player
document
    .getElementById("perPlayerExpenses")
    .addEventListener("click", function () {
        const totalSelectedPlayer =
            document.querySelectorAll("#select-player").length;
        const getPerPlayerInputValue = getInputValue(
            "perPlayerInput",
            "Per Player"
        );
        // checking is has seleted player on the seleted card or not
        if (totalSelectedPlayer > 0) {
            const totalPlayerBudget =
                getPerPlayerInputValue * totalSelectedPlayer;
            getTotal("playerExpenses", totalPlayerBudget);
        } else {
            alert("Please Select Minimum 1 Player");
        }
    });

// Budget Calculation For Team
document.getElementById("budgetForTeam").addEventListener("click", function () {
    const playerExpenses = getTotal("playerExpenses");
    const getManagerInputValue = getInputValue("managerInput", "Manager");
    const getCoachInputValue = getInputValue("coachInput", "Coach");

    const totalExpensesTeam =
        playerExpenses + getManagerInputValue + getCoachInputValue;
    getTotal("total-expense-team", totalExpensesTeam);
});
