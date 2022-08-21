// Select Five Player
const selectedPlayers = document.querySelectorAll("#addToSelectBtn");

for (let selectedPlayer of selectedPlayers) {
    selectedPlayer.addEventListener("click", function (e) {
        const parent = e.target.parentNode;
        const child = parent.querySelector("#card-name");
        const playerName = child.innerText;

        // append new list item to the Select Five Player Card
        const selectedListPlayer = document.getElementById("selected-player");
        const selectPlayerList = document.querySelectorAll("#select-player");
        if (selectPlayerList.length <= 4) {
            const createListElement = document.createElement("li");
            createListElement.setAttribute("id", "select-player");
            createListElement.innerText = playerName;
            selectedListPlayer.appendChild(createListElement);
            // to set disable button
            const disableBtn =
                e.target.parentNode.querySelector("#addToSelectBtn");
            disableBtn.setAttribute("disabled", true);
            disableBtn.style.backgroundColor = "#B3B3B3"
            disableBtn.style.color = "#FFFFFF"
            disableBtn.style.opacity = "1"
            disableBtn.style.border = "1px solid #B3B3B3"
        }else{
            alert("We Can Add Maximum 5 Player On the Selected Five Card!")
        }
    });
}
