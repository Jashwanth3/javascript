//Assignment 1
function type(num)
{
    if(num>0)
    {
        console.log('positive');
    }
    else if (num=0)
    {
        console.log('Zero');
    }
    else
    {
        console.log('Negative');
    }
}
type(2);
type(0);
type(-1);
type();


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


//Assignment 3
function Maxnum(a,b)
{
    if(a>b)
    {
        console.log(a,'is maximum');
    }
    else
    {
        console.log(b,'is maximum');
    }
}
Maxnum(4,9);
Maxnum(121,120);

//Assignment 4
function palindrome(data)
{
    let newdata = data.toLowerCase();
    let reversedata = data.split("").reverse().join("");
    if (newdata == reversedata ) 
    {
        console.log('true');
    }
    else
    {
        console.log('false');
    }
}
palindrome("sas");
palindrome('messssem');
palindrome('haha');




//Assignment 5

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

//Assignment 6
function vowelCount(data)
{
    newdata=data.toLowerCase();
    let vowel='aeiou';
    let count=0;
    for(let ele of newdata)
    {
        if(vowel.includes(ele))
        {
            count++;
        }
    }
    console.log(count);
}
vowelCount('Hello World!');

  
  