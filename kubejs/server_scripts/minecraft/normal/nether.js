//packmode: normal

ServerEvents.recipes(event => {

    event.recipes.mekanismMetallurgicInfusing('10x minecraft:glowstone_dust', '10x mekanism:fluorite_gem', '100x mekanism:gold')

    event.recipes.mekanismMetallurgicInfusing('ae2:flawless_budding_quartz', 'minecraft:diamond_block', '1000x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('minecraft:budding_amethyst', 'minecraft:purple_wool', '1000x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('minecraft:soul_sand', 'minecraft:sand', '10x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('minecraft:netherrack', 'minecraft:cobblestone', '10x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('minecraft:blackstone', 'minecraft:cobblestone', '10x mekanism:carbon')

    event.recipes.mekanismMetallurgicInfusing('minecraft:deepslate', 'minecraft:stone', '10x mekanism:carbon')

    event.recipes.mekanismMetallurgicInfusing('minecraft:calcite', 'minecraft:stone', '10x mekanism:tin')

    event.recipes.mekanismMetallurgicInfusing('minecraft:basalt', 'minecraft:netherrack', '10x mekanism:carbon')

    event.recipes.mekanismMetallurgicInfusing('2x minecraft:prismarine_shard', 'integrateddynamics:crystalized_menril_chunk', '10x mekanism:diamond')

    event.recipes.mekanismMetallurgicInfusing('minecraft:crimson_fungus', '#forge:mushrooms', '100x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('minecraft:warped_fungus', '#forge:mushrooms', '100x mekanism:diamond')

    event.recipes.mekanism.crushing("minecraft:red_sand", 'exdeorum:crushed_netherrack')
    event.recipes.mekanism.crushing('exdeorum:crushed_netherrack', 'minecraft:netherrack')
    event.recipes.mekanism.crushing('exdeorum:dust', 'minecraft:sand')
    event.recipes.mekanism.crushing('minecraft:prismarine_crystals', 'minecraft:prismarine_shard')

    event.recipes.mekanism.enriching('minecraft:cobweb', 'minecraft:string')

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:slime_ball' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:yellow",
            "amount": 50
        },
        "output": 'minecraft:honeycomb'
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:grass' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:green",
            "amount": 50
        },
        "output": 'minecraft:kelp'
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:calcite' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:blue",
            "amount": 100
        },
        "output": 'minecraft:tube_coral_block'
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:calcite' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:pink",
            "amount": 100
        },
        "output": 'minecraft:brain_coral_block'
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:calcite' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:purple",
            "amount": 100
        },
        "output": 'minecraft:bubble_coral_block'
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:calcite' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:red",
            "amount": 100
        },
        "output": 'minecraft:fire_coral_block'
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:calcite' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:yellow",
            "amount": 100
        },
        "output": 'minecraft:horn_coral_block'
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:glowstone' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:yellow",
            "amount": 100
        },
        "output": 'minecraft:ochre_froglight'
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:glowstone' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:green",
            "amount": 100
        },
        "output": 'minecraft:verdant_froglight'
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'minecraft:glowstone' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:purple",
            "amount": 100
        },
        "output": 'minecraft:pearlescent_froglight'
    })


    event.shaped(
        Item.of('minecraft:elytra', 1),
        [
            'STS',
            'SJS',
            'S S'
        ],
        {
            J: 'mekanism:ultimate_control_circuit',
            S: 'mekanism:hdpe_sheet',
            T: "mekanism:teleportation_core"
        }
    )

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:stick' }
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
            { item: 'minecraft:sugar_cane', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'ae2:black_paint_ball' }
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
            { item: 'minecraft:ink_sac', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'ae2:smooth_sky_stone_chest' }
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
            { item: 'minecraft:shulker_shell', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:leather' }
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
            { item: 'minecraft:rabbit_hide', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:rabbit_hide' }
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
            { item: 'minecraft:rabbit_foot', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:paper' }
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
            { item: 'exdeorum:random_armor_trim', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:brick' }
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
            { item: 'exdeorum:random_pottery_sherd', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mek1000:stray_cat' }
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
            { item: 'minecraft:totem_of_undying', count: 1 }
        ,
        cost: 2000,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'experienceobelisk:bibliophage' }
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
            { item: 'minecraft:brown_mushroom', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:brown_mushroom' }
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
            { item: 'minecraft:red_mushroom', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'integrateddynamics:menril_berries' }
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
            { item: 'minecraft:sweet_berries', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:green_candle' }
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
            { item: 'minecraft:cactus', count: 1 }
        ,
        cost: 20,
        processTime: 20
    })

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'minecraft:wither_skeleton_skull' }
        ,
        count1: 3,
        ingredient2:
            { item: 'experienceobelisk:transforming_focus' }
        ,
        count2: 1,
        ingredient3:
            { item: 'minecraft:soul_sand' }
        ,
        count3: 4,
        result:
            { item: 'minecraft:nether_star', count: 1 }
        ,
        cost: 5000,
        processTime: 1000
    })

    event.recipes.mekanism.enriching("minecraft:skeleton_skull", "minecraft:bone_block")

    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'experienceobelisk:astute_assembly' }
        ,
        count1: 1,
        ingredient2:
            { item: 'exdeorum:compressed_netherrack' }
        ,
        count2: 32,
        ingredient3:
            { item: 'experienceobelisk:transforming_focus' }
        ,
        count3: 1,
        result:
            { item: 'minecraft:netherite_upgrade_smithing_template', count: 1 }
        ,
        cost: 5000,
        processTime: 1000
    })
})