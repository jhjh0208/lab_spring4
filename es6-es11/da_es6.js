{
    const sonata = {
        carColor: 'black',
        wheelNum: 4,
        speed: 40
    };
    {
        const carColor = sonata.speed;
        const speed = sonata.speed;
        const wheelNum = sonata.wheelNum;
    }
    //추천
    {
        const { carColor, wheelNum, speed } = sonata; //블락을 씌워라... 블락이 핑크색 중괄호 인가..?
        console.log(carColor, wheelNum, speed);

        const { carColor: sonataColor, wheelNum: sonataWheelNum, speed: sonataSpeed} = sonata;
        console.log(sonataColor, sonataWheelNum, sonataSpeed);
    }
    // array - 배열에서는 대활호 사용함.
    const fruit = ['🍑','🍒'];
    {
        const one = fruit[0];
        const two = fruit[1];
        console.log(one, two);
    }

    //추천
    {
        const [one, two] = fruit;
        console.log(one, two);
    }
}