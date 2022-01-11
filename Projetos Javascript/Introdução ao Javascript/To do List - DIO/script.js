function createList() {
    var pullInsert = document.getElementById('insert');
    var pullValue = pullInsert.value;
    var error = document.getElementById('error');

    if (pullValue == "") {
        var error_message = "Não deixe o espaço em branco";
        error.innerHTML = error_message;

    } else {

        var createList_item = document.createElement("div");
        createList_item.setAttribute('class', 'list_item');

        var createInput = document.createElement("input");
        createInput.setAttribute('type', 'checkbox');

        var createList = document.createElement("li");
        createList.setAttribute('class', 'text');

        var node = document.createTextNode(pullValue);

        var listBody = document.getElementById('list');

        listBody.appendChild(createList_item);
        createList_item.appendChild(createInput);
        createList_item.appendChild(createList);
        createList.appendChild(node);



        error.innerHTML = " ";
    }
}