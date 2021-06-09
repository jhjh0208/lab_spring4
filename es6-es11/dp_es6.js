//Default Parameters
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
{
    function print(msg){
        if(msg == null){
            msg = 'default message'; // 자바에는 없는 언디파인 때문에 여기선 적어야 한다.
        }
        console.log(msg);
    }////////////end of print
    print('hello');
    print();
    {
        function print(msg = 'default msg'){
            console.log(msg);
        }////////////end of print
        print('hi');
        print();        
    }
}