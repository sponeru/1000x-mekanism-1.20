//packmode: normal

ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { "ingredient": { "item": "mekanism:bio_fuel" } },
        "fluidInput": { "amount": 10000, "fluid": "minecraft:water" },
        "gasInput": { "amount": 1, "gas": "mek1000:valine3g" },
        "energyRequired": 1, "duration": 1,
        "gasOutput": { "gas": "mek1000:valine3g", "amount": 10000 },
        "itemOutput": { "item": "mekanism:bio_fuel" }
    })

    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { "ingredient": { "amount": 32, "item": "minecraft:hay_block" } },
        "fluidInput": { "amount": 3642, "fluid": "minecraft:water" },
        "gasInput": { "amount": 7, "gas": "mek1000:valine3g" },
        "energyRequired": 1000, "duration": 1000,
        "gasOutput": { "gas": "mek1000:saltless_dried_soysouce", "amount": 1000 }
    })

    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 10,
            "gas": "mekanismgenerators:fusion_fuel"
        },
        "rightInput": {
            "amount": 50,
            "gas": "mek1000:valine3g"
        },
        "output": {
            "gas": "mek1000:dvt",
            "amount": 1
        }
    }).id('mek1000:dvt_fuel')

    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 1,
            "gas": "mek1000:dvt"
        },
        "rightInput": {
            "amount": 1,
            "gas": "mek1000:saltless_dried_soysouce"
        },
        "output": {
            "gas": "mekanism_extras:naquadah_uranium_fuel",
            "amount": 10000
        }
    })

    event.custom({
        "type": "mekanism:painting",
        "itemInput": {
            "ingredient": { "item": 'mekanism:dust_uranium' },
            "amount": 1
        },
        "chemicalInput": {
            "pigment": "mekanism:green",
            "amount": 500
        },
        "output": 'mekanism_extras:dust_naquadah'
    })

    event.custom({ "type": "mekanism:chemical_infusing", "leftInput": { "amount": 1, "gas": "mekanism:fissile_fuel" }, "rightInput": { "amount": 1, "gas": "mekanism:ethene" }, "output": { "gas": "mek1000:valine3g", "amount": 2 } })
})