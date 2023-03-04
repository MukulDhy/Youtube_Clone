let block=document.getElementsByClassName('row');
    let HideContent=document.getElementsByTagName('a');
    let sideBar=document.getElementById('sideBar');
    let menuIcon=document.getElementById('menu-icon');
    let hr=document.querySelector('hr');
    menuIcon.addEventListener("click",myFunction);
    // function myFunction(){
    //     for(let i=0;i<=HideContent.length;i++){
    //             if(HideContent[i].style.display=="block"){
    //                 HideContent[i].style.display="none";
    //                 sideBar.style.width="5%";
    
    //             }
    //             else{
        //                 // HideContent[i].style.display="block";
        //             }
    //     }
    // }
    function myFunction(){
        for(let i=0;i<=block.length;i++){
            block[i].classList.toggle("change");
            if(hr.style.display=="none"){
                hr.style.display="block";
                // sideBar.style.alignItems="unset";
                sideBar.style.width="15%";
            }
            else{
                hr.style.display="none";
                sideBar.style.alignContent="center";
                sideBar.style.width="5%";

            }
        }
    }

    let Navbar=document.querySelector("nav");
    let ScroolOffSet=Navbar.offsetTop;

    
    

    // if()
    // console.log(HideContent);
    // console.log(block);
    // HideContent.style