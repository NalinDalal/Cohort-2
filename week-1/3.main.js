let answer =1+2+3+4+5+6+8+7;

console.log(answer);

//smart way

let answer1=0;

answer1=answer1+1;  //1
answer1=answer1+2;  //3
answer1=answer1+3;  //6
answer1=answer1+4;  //10

console.log(answer1);

//more smart way is to use loops
//answer variable and add some value to it

for(let i=0;i<=10;i++) {
    answer1=answer1+i;
}