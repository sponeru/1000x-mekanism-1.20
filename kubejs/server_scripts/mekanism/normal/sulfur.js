ServerEvents.recipes(event => { 
    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { amount: 1, "ingredient": {"item": 'mekanism:pellet_antimatter' } },
        "fluidInput": { "amount": 1000, "fluid": "minecraft:lava" },
        "gasInput": { "gas": "mekanism:sulfur_dioxide", "amount": 1000 },
        "energyRequired": 15, "duration": 10,
        "gasOutput": { "gas": "mekanism:sulfuric_acid", "amount": 4000 },
        "itemOutput": { "item": 'mekanism:pellet_antimatter' }
    })
})