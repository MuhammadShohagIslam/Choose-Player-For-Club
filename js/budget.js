// Budget Calculation For Per Player
document
    .getElementById("perPlayerExpenses")
    .addEventListener("click", function () {
        const getPerPlayerInputValue = getInputValue(
            "perPlayerInput",
            "Per Player"
        );
        getTotal("playerExpenses", getPerPlayerInputValue);
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
