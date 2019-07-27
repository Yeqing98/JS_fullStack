const babyBirthday = "2015-04-13";
const currentDate = "2019-06-07";

function calBabyAge(birthday, now) {
    let babyAge = {};
    const babyBirthday = birthday.split('-');
    // console.log(babyBirthday);
    const currentDate = now.split('-')
    let age =  parseInt(currentDate[0]) - parseInt(babyBirthday[0]);
    let month = parseInt(currentDate[1]) - parseInt(babyBirthday[1]);
    let day = parseInt(currentDate[2]) - parseInt(babyBirthday[2])
    if(day < 0) {
        month = month - 1
    }
    if(month < 0) {
        month = 12 + month;
        age = age - 1
    }
    babyAge.age = age;
    babyAge.month = month;
    return babyAge
}
console.log(calBabyAge(babyBirthday, currentDate));