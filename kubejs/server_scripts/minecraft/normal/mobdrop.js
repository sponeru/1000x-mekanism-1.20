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

    event.shapeless('minecraft:sculk_shrieker',[
        'minecraft:comparator','minecraft:sculk','minecraft:echo_shard','minecraft:sculk'
    ])

    event.shapeless('minecraft:sculk_sensor',[
        'minecraft:repeater','minecraft:sculk','minecraft:echo_shard','minecraft:sculk'
    ])

    event.recipes.mekanism.crushing("minecraft:sculk_vein",'minecraft:sculk')

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:beef' }
        ,
        count1: 1,
        ingredient2:
            { item: 'experienceobelisk:transforming_focus' }
        ,
        count2: 1,
        ingredient3:
            []
        ,
        count3: 0,
        result:
            { item: 'minecraft:rotten_flesh', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:ender_eye' }
        ,
        count1: 1,
        ingredient2:
            { item: 'experienceobelisk:transforming_focus' }
        ,
        count2: 1,
        ingredient3:
            []
        ,
        count3: 0,
        result:
            { item: 'minecraft:spider_eye', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": { "ingredient": { "item": 'minecraft:spider_eye' } },
        "gasInput": { "amount": 1, "gas": "mekanism:antimatter" },
        "output": { "item": 'minecraft:ghast_tear' }, "duration": 10000
    })

    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": { "ingredient": { "item": 'minecraft:turtle_spawn_egg' } },
        "gasInput": { "amount": 1, "gas": "mekanism:antimatter" },
        "output": { "item": 'minecraft:turtle_egg' }, "duration": 10000
    })

    event.recipes.mekanism.combining('minecraft:honey_bottle','minecraft:glass_bottle','minecraft:honeycomb')
})