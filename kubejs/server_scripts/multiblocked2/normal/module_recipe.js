ServerEvents.recipes(event =>{
    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 8,
            "ingredient": {
                "item": 'mekanism_empowered:upgrade_empowered_energy' 
            }
        },
        "secondExtraInput": {
            "amount": 8,
            "ingredient": {
                "item": 'mekanism_empowered:upgrade_empowered_speed'
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mekanism:energized_smelter',
            }
        },
        "output": {
            "item": 'mek1000:module_smelting'
        }
    })

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 8,
            "ingredient": {
                "item": 'mekanism_empowered:upgrade_empowered_energy' 
            }
        },
        "secondExtraInput": {
            "amount": 8,
            "ingredient": {
                "item": 'mekanism_empowered:upgrade_empowered_speed'
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mekanism:chemical_oxidizer',
            }
        },
        "output": {
            "item": 'mek1000:module_oxidize'
        }
    })



    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 4,
            "ingredient": {
                "item": 'astral_mekanism:composite_alloy_ingot'
            }
        },
        "secondExtraInput": {
            "amount": 2,
            "ingredient": {
                "item": 'emextras:absolute_overclocked_tier_installer'
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mek1000:tin_casing',
            }
        },
        "output": {
            "item": 'mek1000:composite_module'
        }
    })

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 4,
            "ingredient": {
                "item": 'astral_mekanism:alloy_enchanted'
            }
        },
        "secondExtraInput": {
            "amount": 2,
            "ingredient": {
                "item": 'emextras:supreme_quantum_tier_installer'
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mek1000:composite_module',
            }
        },
        "output": {
            "item": 'mek1000:enchanted_module'
        }
    })

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 2,
            "ingredient": {
                "item": 'mekanism_extras:alloy_spectrum'
            }
        },
        "secondExtraInput": {
            "amount": 2,
            "ingredient": {
                "item": 'emextras:cosmic_dense_tier_installer'
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mek1000:enchanted_module',
            }
        },
        "output": {
            "item": 'mek1000:infinity_module'
        }
    })

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 2,
            "ingredient": {
                "item": 'astral_mekanism:alloy_stardust'
            }
        },
        "secondExtraInput": {
            "amount": 2,
            "ingredient": {
                "item": 'emextras:infinite_multiversal_tier_installer'
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mek1000:infinity_module',
            }
        },
        "output": {
            "item": 'mek1000:astral_module'
        }
    })
})