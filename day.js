













let day  = document.getElementById('value');
let form = document.querySelector('#form');


form.addEventListener('submit', e =>{
    e.preventDefault();
    var date = new Date(day.value);

    var date2 = new Date();

    var begin = Math.floor(date.getTime()/ (3600*24*1000));
    var finish = Math.floor(date2.getTime()/(3600*24*1000));
    var daySubt = finish - begin;
    console.log(daySubt)
    document.querySelector('#output').innerHTML= daySubt+" "+'days ago';
})




















// let date1 = new Date();
// let date2 = new Date("2020/11/23");
// let  diff = date1.getTime() - date2.getTime()
// let time = 1000*3600*24;
// let division = diff/time;
// let result = Math.floor(division);

// console.log(result)
