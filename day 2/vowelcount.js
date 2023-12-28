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
