const createGameLevel = (level,levelDescription) => {
    const $mainLeveldiv = $('<div>');
    const $levelTitle = $('<h3>');
    const $levelContainer = $('<div>');
    const $timerContainer =$('<div>');
    const $timerTitle =$('<h3>');
    const $timerBar = $('<timerbar>');
    const $timerBarDiv = $('<div>');
    const $timeLeft =$('<h3>');


    $mainLeveldiv.addClass(`level-${level}`).appendTo($('.game'));
    $levelTitle.html(`<p class= level-title> Level-${level}</p> <p class =level-description>${levelDescription}</p>`);
    $levelTitle.appendTo($mainLeveldiv);
    $timerContainer.addClass('timer').appendTo($mainLeveldiv);
    $timerTitle.attr('id', 'timer-title').html('Time Left : ').appendTo($timerContainer);
    $timerBar.attr('id','time-bar').appendTo($timerContainer);
    $timerBarDiv.appendTo($timerBar);    
    $timeLeft.attr('id','time-left').appendTo($timerContainer);
    $levelContainer.addClass('level-container').attr('id',`level-${level}`).appendTo($mainLeveldiv);

    stopTimer();
    $('.timer').css('display','flex');
    resetTimer(currentLevelTimer(level));
    runTimer();
};

