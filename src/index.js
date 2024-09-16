import './style.css';

document.insert = (num) => {
    document.form.textview.value = document.form.textview.value + num;
}

document.clean = () => {
    document.form.textview.value ="";
}

document.back = () => {
    const string = document.form.textview.value;
    document.form.textview.value = string.substring(0, string.length -1);
}

document.equal = () => {
    const string = document.form.textview.value;
    document.form.textview.value = eval(string);
}


