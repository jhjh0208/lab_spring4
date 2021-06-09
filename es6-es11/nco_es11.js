//Nullish coalescing operator - 널 병합 연산자
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
{
    {
        const name = 'scott';
        const userName = name || 'Guest';
        console.log(userName);
    }
    {
        const name = 'null';
        const userName = name || 'Guest';
        console.log(userName);
    }
    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);
    }
    {
        const num = 0;
        const userName = num || 'undefinded';
        console.log(userName);
    }
    //문제 해결 구간
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(`봐, 난 달라. ==> ${userName} <== 입니다.`);
    }
    {
        const num = 0;
        const message = num ?? 'undefinded';
        console.log(`날[??] 저기[||]랑 비교하지마!!! ==> ${message} <== 입니다.`);
    }
}