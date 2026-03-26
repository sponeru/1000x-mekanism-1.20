ServerEvents.recipes(event => {
    event.custom({    
        "type": "mekanism:compressing",
        "chemicalInput": {
            "amount": 1,
            "gas": "mek1000:activated_beryllium"
        },
        "itemInput": {
            "ingredient": {
                "tag": "forge:dusts/steel"
            }
        },
        "output": {
            "item": "mekanismelements:pellet_neutron_source"
    }})

    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { "ingredient": { "item": 'minecraft:emerald' } },
        "fluidInput": { "amount": 1000, "fluid": "astral_mekanism:red_lava" },
        "gasInput": { "amount": 100, "gas": "mekanismelements:americium" },
        "energyRequired": 10, "duration": 20,
        "gasOutput": { "gas": "mek1000:activated_beryllium", "amount": 200 },
    })
    
    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { "ingredient": { "item": 'mek1000:purified_emerald_rawore' } },
        "fluidInput": { "amount": 1000, "fluid": "astral_mekanism:red_lava" },
        "gasInput": { "amount": 100, "gas": "mekanismelements:americium" },
        "energyRequired": 10, "duration": 20,
        "gasOutput": { "gas": "mek1000:activated_beryllium", "amount": 1000 },
    })

    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { "ingredient": { "item": 'mek1000:crystalized_emerald_rawore' } },
        "fluidInput": { "amount": 1000, "fluid": "astral_mekanism:red_lava" },
        "gasInput": { "amount": 100, "gas": "mekanismelements:americium" },
        "energyRequired": 10, "duration": 20,
        "gasOutput": { "gas": "mek1000:activated_beryllium", "amount": 10000 },
    })
})