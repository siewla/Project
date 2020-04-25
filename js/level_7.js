const level7 = () =>{
    let count =0;
    //console.log(count);
    for (let i=0; i<$('.level7-img').length; i++){
        $('.level7-img').eq(i).on('dblclick',function (event){
            console.log('clicked');
            let imgid = $('.level7-img').eq(i)[0].id;
            console.log(imgid);
            if (imgid!=='level7-7'){
                $(this).css('display','none');
                count++;
            } 
            
            if (count == 8){
                setTimeout(function (){
                    alert ('You are genius.');
                } , 200);
                setTimeout(function (){
                    changeLevel(7,8);
                } , 200);
            }
        });
       
    }
};