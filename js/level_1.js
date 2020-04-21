$(()=>{
    const $levelOneimages=$('#level-1');
    for (let i=0; i<$levelOneimages.children().length; i++){
        $levelOneimages.children().eq(i).on('click', function (){
            if(i===2){
                changeLevel(1,2);
                alert ('Congratulations. You are correct.');
            } else {
                alert ('Please try again');
            }
        }); 
    }
});