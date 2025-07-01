
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

    let crystalize_prec = (type, normal, washed, crystal, amount, amount_s) => {
        event.custom(
            { type: 'mekanism:washing', fluidInput: { 'amount': 300, 'fluid': 'minecraft:water' }, slurryInput: { 'amount': 200, 'slurry': `${normal}` }, output: { "slurry": `${washed}`, 'amount': 1 } },
        ).id(`mek1000:doublewashing_${type}`)

        if (type == "cfe" || type == "ccu" || type == "cau" || type == "csn" || type == "cos" || type == "cur" || type == "cpb" || type == "cir" || type == "cdb") {
            event.custom({
                "type": "mekanism:crystallizing",
                "chemicalType": "slurry",
                "input": {
                    "amount": 15,
                    "slurry": washed
                },
                "output": {
                    "amount": 15,
                    "item": crystal
                }
            })
        } else {
            event.custom({
                "type": "mekanism:crystallizing",
                "chemicalType": "slurry",
                "input": {
                    "amount": amount_s,
                    "slurry": washed
                },
                "output": {
                    "amount": amount,
                    "item": crystal
                }

            })
        }
    }

    crystalize_prec("fe", "mekanism:clean_iron", "mek1000:prec_iron", "mekanism:crystal_iron", 20, 20)
    crystalize_prec("cu", "mekanism:clean_copper", "mek1000:prec_copper", "mekanism:crystal_copper", 20, 20)
    crystalize_prec("au", "mekanism:clean_gold", "mek1000:prec_gold", "mekanism:crystal_gold", 20, 20)
    crystalize_prec("sn", "mekanism:clean_tin", "mek1000:prec_tin", "mekanism:crystal_tin", 20, 20)
    crystalize_prec("os", "mekanism:clean_osmium", "mek1000:prec_osmium", "mekanism:crystal_osmium", 20, 20)
    crystalize_prec("ur", "mekanism:clean_uranium", "mek1000:prec_uranium", "mekanism:crystal_uranium", 20, 20)
    crystalize_prec("pb", "mekanism:clean_lead", "mek1000:prec_lead", "mekanism:crystal_lead", 20, 20)
    crystalize_prec("ir", "kubejs:clean_iridium", "mek1000:prec_iridium", "kubejs:crystal_iridium", 20, 20)
    crystalize_prec("db", "kubejs:clean_debri", "mek1000:prec_debri", "kubejs:crystal_debri", 20, 20)

    crystalize_prec("rs", "mek1000:clean_redstone", "mek1000:prec_redstone", "mek1000:crystal_redstone", 20, 20)
    crystalize_prec("qz", "mek1000:clean_quartz", "mek1000:prec_quartz", "mek1000:crystal_quartz", 20, 20)
    crystalize_prec("cq", "mek1000:clean_certus_quartz", "mek1000:prec_certus_quartz", "mek1000:crystal_certus_quartz", 20, 20)
    crystalize_prec("ft", "mek1000:clean_fluorite", "mek1000:prec_fluorite", "mek1000:crystal_fluorite", 20, 20)

    crystalize_prec("cfe", "mek1000:clean_compressed_iron", "mek1000:prec_compress_iron", "mek1000:compressed_iron_crystal", 20, 20)
    crystalize_prec("ccu", "mek1000:clean_compressed_copper", "mek1000:prec_compress_copper", "mek1000:compressed_copper_crystal", 20, 20)
    crystalize_prec("cau", "mek1000:clean_compressed_gold", "mek1000:prec_compress_gold", "mek1000:compressed_gold_crystal", 20, 20)
    crystalize_prec("csn", "mek1000:clean_compressed_tin", "mek1000:prec_compress_tin", "mek1000:compressed_tin_crystal", 20, 20)
    crystalize_prec("cos", "mek1000:clean_compressed_osmium", "mek1000:prec_compress_osmium", "mek1000:compressed_osmium_crystal", 20, 20)
    crystalize_prec("cur", "mek1000:clean_compressed_uranium", "mek1000:prec_compress_uranium", "mek1000:compressed_uranium_crystal", 20, 20)
    crystalize_prec("cpb", "mek1000:clean_compressed_lead", "mek1000:prec_compress_lead", "mek1000:compressed_lead_crystal", 20, 20)
    crystalize_prec("cir", "mek1000:clean_compressed_iridium", "mek1000:prec_compress_iridium", "mek1000:compressed_iridium_crystal", 20, 20)
    crystalize_prec("cdb", "mek1000:clean_compressed_debri", "mek1000:prec_compress_debri", "mek1000:compressed_debri_crystal", 20, 20)

    crystalize_prec("la", "mek1000:clean_lapis", "mek1000:prec_lapis", "mek1000:crystal_lapis", 40, 2)
    crystalize_prec("co", "mek1000:clean_coal", "mek1000:prec_coal", "mek1000:crystal_coal", 40, 2)

    crystalize_prec("di", "mek1000:clean_diamond", "mek1000:prec_diamond", "minecraft:diamond", 40, 2)
    crystalize_prec("em", "mek1000:clean_emerald", "mek1000:prec_emerald", "minecraft:emerald", 40, 2)
})