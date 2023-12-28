//Assignment 2
function factorial(N)
{
    let fact=1;
    if(N>1)
    {
        for(let i=1;i<=N;i++)
        {
            fact=fact*i;
        }
    }
    else
    {
        fact=1;
    }
    console.log(fact);
}
factorial(5);
factorial(1);
