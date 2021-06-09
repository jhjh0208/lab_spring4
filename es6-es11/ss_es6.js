//Spread Syntax - 주소의 참조값만 복사해 온다. 그 아래 하나하나씩 복사하는 것이 아니고...
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
{
    const emp = { key: 'empno'}; //괄호로 묶였으니 배열이 아니라 오브젝트.   선언과 초기화를 동시에 하기 때문에 사용하기 편함.
    const dept = { key: 'deptno'};
    const array =  [emp, 'dept'];

    //array copy
    const arrayCopy = [...array]; //주소값만 복사해 오는 것이니까 원본 하나이다.
    console.log(array, arrayCopy);
    
    const arrayCopy2 = [...array, {key : 'bm_no'}];
    emp.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    //object copy
    const otherEmp = {...emp};
    console.log(otherEmp);

    //array contcatenation
    const transportation1 = ['🥒','🥕'];
    const transportation2 = ['🌱','🌴'];
    const transportation = [...transportation1, ...transportation2];
    console.log(transportation);

    //object merge
    const bird1 = { bird1: '🦃'};
    const bird2 = { bird2: '🦅'};
    const birds = { ...bird1, ...bird2};
    console.log(birds);

}


