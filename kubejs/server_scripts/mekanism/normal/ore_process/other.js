
ServerEvents.recipes(event => {
    event.recipes.mekanism.combining(`mek1000:polonium_synced`, '40x mekanism:pellet_polonium', 'mek1000:fluorite_singularity').id(`mek1000:docking_anti`)
    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { "ingredient": { "item": `mekanism:pellet_polonium` } },
        "fluidInput": { "amount": 1000, "fluid": "minecraft:water" },
        "gasInput": { "amount": 10, "gas": "mek1000:active_aqua_regia" },
        "energyRequired": 100000, "duration": 10,
        "gasOutput": { "amount": 1, "gas": "mekanism:antimatter" }
    })
    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { "ingredient": { "item": `mek1000:polonium_synced` } },
        "fluidInput": { "amount": 1000, "fluid": "minecraft:water" },
        "gasInput": { "amount": 50, "gas": "mek1000:vaporized_uranium" },
        "energyRequired": 10000000, "duration": 100,
        "itemOutput": { "item": 'mek1000:fluorite_singularity' },
        "gasOutput": { "amount": 45, "gas": "mekanism:antimatter" }
    })

    event.recipes.mekanism.combining(`50x mek1000:tiny_antimatter`, `mekanism:pellet_antimatter`, '5x mek1000:ldpe')

    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { "ingredient": { "item": `mekanism:substrate` } },
        "fluidInput": { "amount": 10, "fluid": "mekanism:oxygen" },
        "gasInput": { "amount": 50, "gas": "mekanism:ethene" },
        "energyRequired": 100, "duration": 100,
        "itemOutput": { "item": `mek1000:ldpe`, "amount": 4 }
    })

    // event.custom({
    //     "type": "mekanism:rotary",
    //     "gasInput": { "amount": 1, "gas": "mekanism:antimatter" },
    //     "fluidOutput": { "amount": 1, "fluid": "mek1000:liquid_antimatter" }
    // })
    // event.custom({
    //     "type": "mekanism:rotary",
    //     "gasOutput": { "amount": 1, "gas": "mekanism:antimatter" },
    //     "fluidInput": { "amount": 1, "fluid": "mek1000:liquid_antimatter" }
    // })

    let crystal_disassemble_20 = (type, item_1, item_9) => {
        event.shaped(`20x ${item_1}`, [
            'c'
        ], {
            c: `mek1000:${type}_crystal_20`
        }).id(`mek1000:${type}_disassembling_20to1`)
        if ((typeof item_9) != "undefined") {
            event.shaped(`20x ${item_9}`, [
                'ccc',
                'ccc',
                'ccc'
            ], {
                c: `mek1000:${type}_crystal_20`
            }).id(`mek1000:${type}_disassembling_20to9`)
            event.shaped(`9x ${item_1}`, [
                'c'
            ], {
                c: item_9
            }).id(`mek1000:${type}_disassembling_9to1`)

            event.shaped(`${item_9}`, [
                'ccc',
                'ccc',
                'ccc'
            ], {
                c: `${item_1}`
            }).id(`mek1000:${type}_compressing_crystal`)
        }
    }

    let shard_disassemble_20 = (type, item_1, item_9) => {
        if ((typeof item_9) != "undefined") {
            event.shaped(`9x ${item_1}`, [
                'c'
            ], {
                c: item_9
            }).id(`mek1000:${type}_disassembling_9to1_shard`)

            event.shaped(`${item_9}`, [
                'ccc',
                'ccc',
                'ccc'
            ], {
                c: `${item_1}`
            }).id(`mek1000:${type}_compressing_shard`)

        }
    }

    let clump_disassemble_20 = (type, item_1, item_9) => {
        if ((typeof item_9) != "undefined") {
            event.shaped(`9x ${item_1}`, [
                'c'
            ], {
                c: item_9
            }).id(`mek1000:${type}_disassembling_9to1_clump`)

            event.shaped(`${item_9}`, [
                'ccc',
                'ccc',
                'ccc'
            ], {
                c: `${item_1}`
            }).id(`mek1000:${type}_compressing_clump`)
        }
    }

    crystal_disassemble_20("iron", "mekanism:crystal_iron", "mek1000:compressed_iron_crystal")
    crystal_disassemble_20("copper", "mekanism:crystal_copper", "mek1000:compressed_copper_crystal")
    crystal_disassemble_20("gold", "mekanism:crystal_gold", "mek1000:compressed_gold_crystal")
    crystal_disassemble_20("tin", "mekanism:crystal_tin", "mek1000:compressed_tin_crystal")
    crystal_disassemble_20("osmium", "mekanism:crystal_osmium", "mek1000:compressed_osmium_crystal")
    crystal_disassemble_20("uranium", "mekanism:crystal_uranium", "mek1000:compressed_uranium_crystal")
    crystal_disassemble_20("lead", "mekanism:crystal_lead", "mek1000:compressed_lead_crystal")
    crystal_disassemble_20("iridium", "kubejs:crystal_iridium", "mek1000:compressed_iridium_crystal")
    crystal_disassemble_20("debri", "kubejs:crystal_debri", "mek1000:compressed_debri_crystal")

    shard_disassemble_20("iron", "mekanism:shard_iron", "mek1000:compressed_iron_shard")
    shard_disassemble_20("copper", "mekanism:shard_copper", "mek1000:compressed_copper_shard")
    shard_disassemble_20("gold", "mekanism:shard_gold", "mek1000:compressed_gold_shard")
    shard_disassemble_20("tin", "mekanism:shard_tin", "mek1000:compressed_tin_shard")
    shard_disassemble_20("osmium", "mekanism:shard_osmium", "mek1000:compressed_osmium_shard")
    shard_disassemble_20("uranium", "mekanism:shard_uranium", "mek1000:compressed_uranium_shard")
    shard_disassemble_20("lead", "mekanism:shard_lead", "mek1000:compressed_lead_shard")
    shard_disassemble_20("iridium", "kubejs:shard_iridium", "mek1000:compressed_iridium_shard")
    shard_disassemble_20("debri", "kubejs:shard_debri", "mek1000:compressed_debri_shard")

    clump_disassemble_20("iron", "mekanism:clump_iron", "mek1000:compressed_iron_clump")
    clump_disassemble_20("copper", "mekanism:clump_copper", "mek1000:compressed_copper_clump")
    clump_disassemble_20("gold", "mekanism:clump_gold", "mek1000:compressed_gold_clump")
    clump_disassemble_20("tin", "mekanism:clump_tin", "mek1000:compressed_tin_clump")
    clump_disassemble_20("osmium", "mekanism:clump_osmium", "mek1000:compressed_osmium_clump")
    clump_disassemble_20("uranium", "mekanism:clump_uranium", "mek1000:compressed_uranium_clump")
    clump_disassemble_20("lead", "mekanism:clump_lead", "mek1000:compressed_lead_clump")
    clump_disassemble_20("iridium", "kubejs:clump_iridium", "mek1000:compressed_iridium_clump")
    clump_disassemble_20("debri", "kubejs:clump_debri", "mek1000:compressed_debri_clump")

    // hidden recipe
    event.recipes.mekanism.combining(`25x mek1000:stray_cat`, `mek1000:tiny_antimatter`, 'minecraft:amethyst_shard').id("mek1000:packcat")
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
            "ingredient": {
                "item": `mek1000:stray_cat`
            }
        },
        "output": {
            "gas": 'mek1000:vaporized_amethyst',
            "amount": 9600
        },
    }).id("mek1000:oxcat")
})