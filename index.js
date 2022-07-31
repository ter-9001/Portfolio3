
var mobile;

if(window.screen.width < 400)
{
    mobile=true;
}
else
{
    mobile = false;
}

Array.from(document.getElementsByClassName('allprogress')).forEach(

    (parent) =>
    {
                    
        var number = parent.querySelector('.number').innerHTML;

        var percent = parent.querySelector('.percent').style.width= number;

        
    }
)


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


window.addEventListener('resize', changeScreen);

function changeScreen()
{
    if(window.screen.width < 400)
    {
        mobile=true;
    }
    else
    {
        mobile = false;
    }
}    


    window.onscroll = function() {myFunction()};

function myFunction() {
    
    let nav = document.getElementById('apresentation').querySelector('nav');

    let asmenutiny = document.getElementById('asmenutiny');
    let button = document.getElementById('upbutton') ;
    let gridmenu = document.getElementById('hgridmenu');

      if(mobile)
      {

        button.style.display = 'none';


                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
                {


                    nav.style.display  = 'none';
                    asmenutiny.style.display  = 'flex';

                
                }
                else
                {

                    
                                        
                    asmenutiny.style.display  = 'none';
                    nav.style.display ='flex';


                    
                    
                }

                console.log(asmenutiny.style.display);
                
      }
      else
      {

        nav.style.display = 'none';
        asmenutiny.style.display = 'none';
        gridmenu.style.display = 'none';



                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) 
                {

                    button.style.display = 'block';


                }
                else
                {
                    button.style.display = 'none';
                }
      }
}

var sh_gridmenu = 0;
function showgridmenu()
{
    let gridmenu = document.getElementById('hgridmenu');

    sh_gridmenu++;

    if(sh_gridmenu%2)
    {   
        gridmenu.classList.add('on');
        gridmenu.classList.remove('off');
    }
    else
    {  
        gridmenu.classList.add('off');
        gridmenu.classList.remove('on');
    }      
}

document.getElementById('gridmenu').onclick = () =>
        {
            let gridmenu = document.getElementById('hgridmenu');
        
        
            gridmenu.classList.add('off');
            gridmenu.classList.remove('on');
        
        }
 

