function prime(low,upp){
    for(let i=low;i<upp;i++)
    {
        flag=0;
        for(let j=2;j<low-1;j++)
        {
            if(i%j==0){
                flag=1;
                break;
            }

        }
        if(flag==0){
            console.log(i)
        }

    }
}
let res=prime(5,25);
