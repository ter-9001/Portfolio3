
/*var number = document.getElementById('test').closest('.skill');



*/

Array.from(document.getElementsByClassName('allprogress')).forEach(

    (parent) =>
    {
                    
        var number = parent.querySelector('.number').innerHTML;

        var percent = parent.querySelector('.percent').style.width= number;

        
    }




)





