function persquare(num)
{
    let n=num;
    let sum=0;
    for(let i=1;i<=(n/2);i++)
    {
        if(n%i==0)
        {
            sum=sum+i;
        }
    }
    if(num==sum)
    {
        console.log(num+" is a perfect square");
    }
    else
    {
        console.log(num+" is not a perfect square");
    }
}
persquare(6);
persquare(11);