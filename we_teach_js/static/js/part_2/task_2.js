function viewChild () {
    // alert(document.body.childNodes)
    for (let i = 0; i < document.body.childNodes.length; i++) {
        alert('' + document.body.childNodes[i])
    }
}

function alertForOf () {
    for (let node of document.body.childNodes) {
    
        alert(node); // покажет все узлы из коллекции
        
        }
}

function massiveNotIter () {
    alert(document.body.childNodes.filter + ` - у коллекции нет метода filter!`)
}

function massiveMetodIter () {
    alert( Array.from(document.body.childNodes).filter + ` - теперь мы сделали массив` );
}

function neighbourParents () {
    alert(`Родителем <body> является <html>?\nОтвет: ${document.body.parentNode === document.documentElement}\nДа, является!`);
    alert(`После <head> идет -> ${ document.head.nextSibling} <body> елемент.`);
    alert(`Перед <body> находится -> ${ document.body.previousSibling} <head> елемент.`);
}

function homeTask(url, title, width, height) {
    let pos_left = window.screenLeft ? window.screenLeft : window.screenX;
    let pos_top = window.screenTop ? window.screenTop : window.screenY;
    console.log(`pos_left - ${pos_left}; pos_top - ${pos_top}`)
    let left = pos_left + (window.innerWidth / 2) - (width / 2);
    let top = pos_top + (window.innerHeight / 2) - (height / 2);
    console.log(`left - ${left}; top - ${top}`)
    
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=yes, menubar=no,scrollbars=yes, resizable=yes, copyhistory=no, width=500, height=600, top=' + top + ', left=' + left);
}
