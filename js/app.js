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
function addPlayerSelected(element) {


    // console.log(element.parentNode.children[0].innerText)

    const playerName = element.parentNode.children[0].innerText;
    // console.log(playerName);

    const playerObj = {
        playerName: playerName

    }
    if (eSportArray.length < 5 === true) {
        eSportArray.push(playerObj);
    }
    else {
        alert('You Can Add Only 5 Players in One Team ')
    }



    // console.log(eSportArray)
    // console.log(eSportArray.length);
    document.getElementById('total-added-player').innerText = eSportArray.length;
    display(eSportArray);

}