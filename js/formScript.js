let deadline1 = ["6 месяцев - 20%", "1 год - 22%", "1,5 года - 15%", "2 года - 10%"];
let deadline2 = ["3 месяца - 20%", "6 месяцев - 22%", "9 месяцев - 23%", "1 год - 24%", "1,5 года - 18%", "2 года - 15%"];
let type = document.getElementById('typeContribution');

function changeSelect() {
    let listDeadlineShow = document.getElementById('deadlineContribution');
    type = document.getElementById('typeContribution');
    clearSelect(listDeadlineShow);

    if (type.value == 1)
        addDeadline(deadline1, listDeadlineShow);

    else if (type.value == 2)
        addDeadline(deadline2, listDeadlineShow);
}

function clearSelect(listDeadlineShow) {
    for (let i = listDeadlineShow.options.length - 1; i >= 1; i--) {
        listDeadlineShow.options[i] = null;
    }
}

function addDeadline(values, listDeadlineShow) {
    listDeadlineShow.append(new Option("Срок вклада", '0', true));
    for (let i = 0; i < values.length; i++)
        listDeadlineShow.append(new Option(values[i].toString(), (i + 1).toString()));
}

function validation() {
    const form = document.getElementById('form');
    let sum = document.getElementById('sum');
    let type = document.getElementById('typeContribution');
    let listDeadlineShow = document.getElementById('deadlineContribution');
    let index = listDeadlineShow.selectedIndex;

    console.log(type.value);
    console.log(index);
    console.log(listDeadlineShow[index]);
    console.log(sum.value);

    if (type == null || type.value == 0) {
        alert("Выберите вид вклада");
        return;
    }

    if (listDeadlineShow == null || index == 0) {
        alert("Выберите срок вклада");
        return;
    }

    if (sum.value == "" || sum.value <= 0) {
        alert("Значение суммы не может быть пустым или меньше 0!");
        return;
    }

    Calculate();
}

function Calculate() {

}