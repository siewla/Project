const createGameLevel = (level,levelDescription) => {
    const $mainLeveldiv = $('<div>');
    const $levelTitle = $('<h3>');
    const $levelContainer = $('<div>');

    $mainLeveldiv.addClass(`level-${level}`).appendTo($('.game'));
    $levelTitle.text(levelDescription);
    $levelTitle.addClass('level-title').appendTo($mainLeveldiv);
    $levelContainer.addClass(`level-${level}-container`).attr('id',`level-${level}`).appendTo($mainLeveldiv);
};