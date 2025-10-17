function calculateAge(birthDate)
{
    const today=new Date();
    let age=today.getFullYear()-birthDate.getFullYear();
    const m=today.getMonth()-birthDate.getMonth();
    if(m<0||(m===0 && today.getDate()<birthDate.getDate()))
    {
        age--;
    }
    return age;
}


document.addEventListener("DOMContentLoaded",function(){
const birthDate= new Date("2003/1/11");
document.getElementById("age").textContent=(`${calculateAge(birthDate)} years`)
})
