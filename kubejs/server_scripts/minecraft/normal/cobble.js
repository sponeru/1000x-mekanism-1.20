ServerEvents.recipes(event => {
    function cobble(output, input, input2) {
        event.shaped(output, [
            'ttt',
            'ttt',
            'ttt'
        ], {
            t: input,
        }),
            event.shapeless(input2, [output])
    }
    cobble('mek1000:3xcobblestone', 'exdeorum:compressed_cobblestone', '9x exdeorum:compressed_cobblestone')
    cobble('mek1000:4xcobblestone', 'mek1000:3xcobblestone', '9x mek1000:3xcobblestone')
    cobble('mek1000:5xcobblestone', 'mek1000:4xcobblestone', '9x mek1000:4xcobblestone')
    cobble('mek1000:6xcobblestone', 'mek1000:5xcobblestone', '9x mek1000:5xcobblestone')
    cobble('mek1000:7xcobblestone', 'mek1000:6xcobblestone', '9x mek1000:6xcobblestone')
    cobble('mek1000:8xcobblestone', 'mek1000:7xcobblestone', '9x mek1000:7xcobblestone')
    event.smelting('mek1000:bedrockium_ingot', 'mek1000:8xcobblestone', 1, 500)
})