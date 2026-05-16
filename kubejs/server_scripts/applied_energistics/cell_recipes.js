ServerEvents.recipes(event =>{
    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 4,
            "ingredient": {
                "item": 'astral_mekanism:firmament_processor'
            }
        },
        "secondExtraInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mekanism_extras:infinite_energy_cube'
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'megacells:mega_energy_cell',
            }
        },
        "output": {
            "amount": 2,
            "item": 'astral_mekanism:composite_energy_cell'
        }
    })
})