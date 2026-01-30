ServerEvents.recipes((event) => {
    let creative = ['mekanism:creative_bin', 'mekanism:creative_chemical_tank', 'mekanism:creative_fluid_tank', 'mekanism:creative_energy_cube', 'evolvedmekanism:creative_control_circuit', 'evolvedmekanism:qio_drive_creative', 'evolvedmekanism:creative_tier_installer', 'evolvedmekanism:creative_personal_barrel', 'evolvedmekanism:creative_personal_chest', 'mekanism:creative_chemical_tank', 'mekanism:creative_fluid_tank', 'mekanism:creative_energy_cube']

    creative.forEach(value => {
        event.remove({ output: value })
    })

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 64,
            "ingredient": {
                "item": 'advanced_ae:quantum_alloy'
            }
        },
        "secondExtraInput": {
            "amount": 64,
            "ingredient": {
                "item": 'mek1000:valine3g_ingot_7'
            }
        },
        "mainInput": {
            "amount": 64,
            "ingredient": {
                "item": 'evolvedmekanism:alloy_exoversal',
            }
        },
        "output": {
            "item": 'evolvedmekanism:alloy_creative'
        }
    })
})