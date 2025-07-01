//priority: -10
ServerEvents.recipes(event => {
    global.convert.forEach(item => {
        event.shapeless(
            Item.of(item[0], 1),
            [
                item[1],
            ]
        )

        event.shapeless(
            Item.of(item[1], 1),
            [
                item[0],
            ]
        )
    });
})
