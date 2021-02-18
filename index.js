const insert = (num) => {
    document.form.textview.value = document.form.textview.value + num;
}
const clean = () => {
    document.form.textview.value ="";
}
const back = () => {
    const array = document.form.textview.value;
    document.form.textview.value = array.substring(0, array.length -1);
}
const equal = () => {
    const array = document.form.textview.value;
    document.form.textview.value = eval(array);
}