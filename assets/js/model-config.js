(function (win) {
    win.modelCollections = [
        {
            name: 'bilibili-live/22',
            textures: ['default', 'cba-normal', 'cba-supper', 'newyear', 'school', 'spring', 'summer-hight', 'summer-low', 'tomo-hight', 'tomo-low', 'valley', 'vdays', 'xmas']
        },
        {
            name: 'bilibili-live/33',
            textures: ['default', 'cba-normal', 'cba-supper', 'newyear', 'school', 'spring', 'summer-hight', 'summer-low', 'tomo-hight', 'tomo-low', 'valley', 'vdays', 'xmas']
        },
        {
            name: 'kesyoban',
            textures: ['default']
        }
    ]

    win.randomModel = function () {
        let modelName = '22';
        let jsonFileName = 'default';
        let model = modelCollections[Math.floor(Math.random() * modelCollections.length + 1) - 1];
        if (model) {
            modelName = model.name;
            jsonFileName = model.textures[Math.floor(Math.random() * model.textures.length + 1) - 1] || 'default';
        }
        return {name:modelName,json:jsonFileName}
    }
})(window);
