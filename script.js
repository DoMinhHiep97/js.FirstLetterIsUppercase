regexp = /^[A-Z]/;
function isFirstLetterUpperCase(str){
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}
let str1="nguyen van Nam";
let str2="NGUYEN VAN NAM";
let str3="Nguyen van Nam";
let a=new isFirstLetterUpperCase(str1);
let b=new isFirstLetterUpperCase(str2);
let c=new isFirstLetterUpperCase(str3);