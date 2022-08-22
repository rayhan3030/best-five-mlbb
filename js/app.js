const eSportArray = [];

function display(playerSelected) {
    console.log(playerSelected);
    const selectedPlayerList = document.getElementById('players-list');
    selectedPlayerList.innerHTML = '';
    // for (let i = 0; i < playerSelected.length; i++) {
    for (let i = 0; i < playerSelected.length; i++) {

        // console.log(eSportArray[i].playerName);
        const name = eSportArray[i].playerName;

        const li = document.createElement('li');

        li.innerHTML = `
       
        <li class="text-center bg-rose-500 border">${name}</li>
        `;

        selectedPlayerList.appendChild(li);

    }

}