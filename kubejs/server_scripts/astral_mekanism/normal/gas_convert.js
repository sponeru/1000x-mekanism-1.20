ServerEvents.recipes(event => {
    event.custom({
        type: 'mekanism:infusion_conversion',
        input: {
            'ingredient': { 'item': 'minecraft:experience_bottle' }
        },
        output: { 'infuse_type': `astral_mekanism:xp`, 'amount': 8000 }
    })
})