ServerEvents.recipes((event) => {
    let creative = ['mekanism:creative_bin', 'mekanism:creative_chemical_tank', 'mekanism:creative_fluid_tank', 'mekanism:creative_energy_cube', 'evolvedmekanism:creative_control_circuit', 'evolvedmekanism:qio_drive_creative', 'evolvedmekanism:creative_tier_installer', 'evolvedmekanism:creative_personal_barrel', 'evolvedmekanism:creative_personal_chest', 'mekanism:creative_chemical_tank', 'mekanism:creative_fluid_tank', 'mekanism:creative_energy_cube', 'evolvedmekanism:block_alloy_creative']

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

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 64,
            "ingredient": {
                "item": 'emextras:infinite_multiversal_control_circuit'
            }
        },
        "secondExtraInput": {
            "amount": 4,
            "ingredient": {
                "item": 'solarpanels:photonic_solar_panel'
            }
        },
        "mainInput": {
            "amount": 9,
            "ingredient": {
                "item": 'evolvedmekanism:alloy_creative',
            }
        },
        "output": {
            "item": 'evolvedmekanism:block_alloy_creative'
        }
    })
})