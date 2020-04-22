const level5 = () => {
    let idArray = [];
    const correctArray = ['level5-3', 'level5-2', 'level5-1', 'level5-7', 'level5-9', 'level5-8'];
    let $levelFiveimgs = $('.level5-img');
    for (let i=0; i<$levelFiveimgs.length; i++){
        $levelFiveimgs.eq(i).on('click',function (event){
            event.preventDefault();
            $levelFiveimgs.eq(i).unbind('click');
            $levelFiveimgs.eq(i).css('opacity','0.6');
            let id = $levelFiveimgs.eq(i)[0].id;
            idArray.push(id); 
            if (idArray.length === 6){
                let checkArray = allEqual(correctArray,idArray);
                if (checkArray){
                    changeLevel(5,6);
                    alert('Congratulations. You read instructions well.');
                } else {
                    alert('Please try again');
                }
                resetLevel(4);
            }
        });
    }
};
