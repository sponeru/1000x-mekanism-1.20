ServerEvents.recipes(event => {
    event.custom({
        type: 'mekanism:infusion_conversion',
        input: {
            'ingredient': { 'item': 'mek1000:experience_crystal' }
        },
        output: { 'infuse_type': `astral_mekanism:xp`, 'amount': 8000 }
    })

    event.custom({
        "type": "mekanism:reaction",
        "itemInput": { "ingredient": { "item": 'experienceobelisk:forgotten_dust' } },
        "gasInput": { "amount": 1, "gas": "mekanism:hydrogen" },
        "fluidInput": { "amount": 16000, "fluid": "experienceobelisk:cognitium" },
        "energyRequired": 1, "duration": 20,
        "itemOutput": { "item": 'mek1000:experience_crystal', "count": 16 }
    })

})