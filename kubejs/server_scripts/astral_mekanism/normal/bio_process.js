ServerEvents.recipes(event => { 
    event.remove({id:"astral_mekanism:mekanical_transform/biomass_paste"})

    event.shapeless('mek1000:bio_compose',['2x mekanism:bio_fuel','mekanism:sawdust'])

    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { amount: 1, "ingredient": {"item": 'mek1000:bio_compose' } },
        "fluidInput": { "amount": 1000, "fluid": "minecraft:water" },
        "gasInput": { "gas": "mekanism:sodium", "amount": 100 },
        "energyRequired": 40, "duration": 20,
        "gasOutput": { "gas": "mekanismelements:ammonia", "amount": 100 }
    })
})