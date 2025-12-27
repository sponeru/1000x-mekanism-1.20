ServerEvents.recipes(event => {
    let removeItem = ['exdeorum:mechanical_hammer', 'exdeorum:mechanical_sieve', 'exdeorum:end_cake']

    let ores = ['minecraft:coal', 'minecraft:raw_iron', 'minecraft:raw_copper', 'minecraft:raw_gold', 'mekanism:raw_osmium', 'mekanism:raw_tin', 'mekanism:raw_lead', 'mekanism:raw_uranium', 'minecraft:lapis_lazuli', 'minecraft:diamond', 'minecraft:emerald', 'kubejs:iridium', 'mekanism:fluorite_gem', 'minecraft:quartz', 'kubejs:ore_debri_deepslate', 'minecraft:redstone']
    let dense = ['denseores:dense_redstone_ore', 'denseores:dense_emerald_ore', 'denseores:dense_lapis_ore', 'denseores:dense_diamond_ore', 'kubejs:dense_ore_iridium', 'kubejs:dense_ore_quartz', 'densemekanism:dense_tin_ore', 'densemekanism:dense_osmium_ore', 'densemekanism:dense_uranium_ore', 'densemekanism:dense_fluorite_ore', 'densemekanism:dense_lead_ore', 'denseores:dense_coal_ore', 'denseores:dense_iron_ore', 'denseores:dense_copper_ore', 'denseores:dense_gold_ore']
    let allMesh = ['exdeorum:string_mesh', 'exdeorum:flint_mesh', 'exdeorum:iron_mesh', 'exdeorum:golden_mesh', 'exdeorum:diamond_mesh', 'exdeorum:netherite_mesh']

    event.remove({ type: "exdeorum:sieve" })
    event.remove({ type: "exdeorum:compressed_sieve" })

    removeItem.forEach(item => {
        event.remove({ output: item })
    })

    allMesh.forEach(item => {
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": "minecraft:dirt"
            },
            "mesh": item,
            "result": 'exdeorum:stone_pebble',
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 8.0,
                "p": 0.9
            }
        })

        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": "minecraft:dirt"
            },
            "mesh": item,
            "result": 'exdeorum:grass_seeds',
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": 0.2
            }
        })
    })


    ores.forEach(item => {
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": "minecraft:gravel"
            },
            "mesh": "exdeorum:flint_mesh",
            "result": item,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 9.0,
                "p": 0.8
            }
        })
    })

    ores.forEach(item => {
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": "minecraft:gravel"
            },
            "mesh": "exdeorum:iron_mesh",
            "result": item,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 20.0,
                "p": 0.8
            }
        })
    })

    ores.forEach(item => {
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": "minecraft:gravel"
            },
            "mesh": "exdeorum:golden_mesh",
            "result": item,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 30.0,
                "p": 0.8
            }
        })
    })

    ores.forEach(item => {
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": "minecraft:gravel"
            },
            "mesh": "exdeorum:diamond_mesh",
            "result": item,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 40.0,
                "p": 0.8
            }
        })
    })

    ores.forEach(item => {
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": "minecraft:gravel"
            },
            "mesh": "exdeorum:netherite_mesh",
            "result": item,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 50.0,
                "p": 0.8
            }
        })
    })

    dense.forEach(item => {
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": "minecraft:gravel"
            },
            "mesh": "exdeorum:netherite_mesh",
            "result": item,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 30.0,
                "p": 0.8
            }
        })
    })

    allMesh.forEach(item => {
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": 'minecraft:spawner'
            },
            "mesh": item,
            "result": 'minecraft:cow_spawn_egg',
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1,
                "p": 1
            }
        })


        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": {
                "item": 'minecraft:spawner'
            },
            "mesh": item,
            "result": 'minecraft:sheep_spawn_egg',
            "result_amount": {
                "type": "minecraft:binomial",
                "n": 1,
                "p": 1
            }
        })
    })
})