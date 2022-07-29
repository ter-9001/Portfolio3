
/*var number = document.getElementById('test').closest('.skill');



*/

Array.from(document.getElementsByClassName('allprogress')).forEach(

    (parent) =>
    {
                    
        var number = parent.querySelector('.number').innerHTML;

        var percent = parent.querySelector('.percent').style.width= number;

        
    }
)


/*

Array.from().forEach(

    (obj) => 
    {
        obj.onclick( (obj) => {  alert('olá'); } );
    }
)



function arrow(target,a)
{
    alert('olá')
}

*/


Array.from(document.getElementsByClassName('fieldheader')).forEach(

    obj =>
    {
        obj.onclick = ()   => { 
            let dropdown = obj.querySelector("[name='arrow-dropdown']");
            let dropup = obj.querySelector("[name='arrow-dropup']");



             if(dropdown!=null)
               { 
                        dropdown.setAttribute('name', 'arrow-dropup');

                        let skills = obj.nextElementSibling;
                        
                        skills.classList.remove('off');
                        skills.classList.add('on');
                     
                        skills.scrollIntoView();

                        
                        //window.scrollBy(0, parseInt(skills.style.width));

                        return;

                }


             if(dropup!=null)
              {
                dropup.setAttribute('name', 'arrow-dropdown');

                     let skills = obj.nextElementSibling;
                        
                     skills.classList.remove('on');
                        
                     skills.classList.add('off');

                     return;
                     
                        
              }





        }
    }




    );