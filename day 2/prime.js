function isPrime(num)
{
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
      if (num % i === 0)
        {
        return false;
        }
    }
    return true;
}
  
function prime(N)
{
    for (let i = 2; i <= N; i++)
    {
      if (isPrime(i)) 
      {
        console.log(i);
      }
    }
}
prime(30);
