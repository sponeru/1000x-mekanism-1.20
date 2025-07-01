//packmode: normal

ServerEvents.recipes(event => {
    let drying = (output, input, lamount, time) => {
        event.custom({
            type: 'integrateddynamics:drying_basin',
            fluid: {
                fluid: input,
                amount: lamount
            },
            duration: time,
            result: {
                item: output
            }
        })
    }

    event.shaped('minecraft:spawner', [
        'IBI',
        'BLB',
        'IBI'
    ], {
        I: '#forge:ingots/iron',
        B: 'minecraft:iron_bars',
        L: 'minecraft:iron_block'
    })

    drying('minecraft:slime_ball', 'minecraft:milk', 500, 100)

    event.recipes.mekanism.crushing('2x minecraft:ender_pearl', 'integrateddynamics:proto_chorus')

    event.recipes.mekanism.crushing('2x minecraft:blaze_powder', 'minecraft:glowstone')

    event.recipes.mekanism.enriching('minecraft:blaze_rod', '8x minecraft:blaze_powder')

    event.recipes.mekanism.combining('igleelib:blaze_shard', '4x minecraft:blaze_rod', 'minecraft:echo_shard')

    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": { "ingredient": { "item": 'minecraft:amethyst_shard' } },
        "gasInput": { "amount": 100, "gas": "mekanism:antimatter" },
        "output": { "item": 'minecraft:echo_shard' }, "duration": 100000
    })
})