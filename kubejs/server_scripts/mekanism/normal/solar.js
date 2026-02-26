ServerEvents.recipes(event => {
    let removeSolar = ['solarpanels:advanced_solar_panel', 'solarpanels:hybrid_solar_panel', 'solarpanels:ultimate_hybrid_solar_panel', 'solarpanels:quantum_solar_panel', 'solarpanels:spectral_solar_panel', 'solarpanels:singular_solar_panel', 'solarpanels:light_absorbing_solar_panel', 'solarpanels:photonic_solar_panel']

    removeSolar.forEach(item => {
        event.remove({ output: item })
    })

    event.recipes.mekanism.combining('solarpanels:advanced_solar_panel', 'mekanismgenerators:advanced_solar_generator', 'solarpanels:carbone_solar_element')
    event.recipes.mekanism.combining('solarpanels:hybrid_solar_panel', '4x solarpanels:advanced_solar_panel', 'solarpanels:hybrid_solar_element')
    event.recipes.mekanism.combining('solarpanels:ultimate_hybrid_solar_panel', '4x solarpanels:hybrid_solar_panel', 'solarpanels:improved_hybrid_solar_element')
    event.recipes.mekanism.combining('solarpanels:quantum_solar_panel', '4x solarpanels:ultimate_hybrid_solar_panel', 'solarpanels:quantum_solar_element')
    event.recipes.mekanism.combining('solarpanels:spectral_solar_panel', '4x solarpanels:quantum_solar_panel', 'solarpanels:spectral_solar_element')
    event.recipes.mekanism.combining('solarpanels:singular_solar_panel', '8x solarpanels:spectral_solar_panel', 'solarpanels:singular_solar_element')
    event.recipes.mekanism.combining('solarpanels:light_absorbing_solar_panel', '8x solarpanels:singular_solar_panel', 'solarpanels:light_absorbing_solar_element')
    event.recipes.mekanism.combining('solarpanels:photonic_solar_panel', '8x solarpanels:light_absorbing_solar_panel', 'solarpanels:photonic_solar_element')



    event.remove({ output: 'solarpanels:improved_hybrid_solar_element' })
    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mekanism:alloy_reinforced'
            }
        },
        "secondExtraInput": {
            "amount": 4,
            "ingredient": {
                "item": 'mekanism:hdpe_sheet'
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'solarpanels:hybrid_solar_element',
            }
        },
        "output": {
            "item": 'solarpanels:improved_hybrid_solar_element'
        }
    })

    event.remove({ output: 'solarpanels:quantum_solar_element' })
    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mekanism:alloy_atomic'
            }
        },
        "secondExtraInput": {
            "amount": 4,
            "ingredient": {
                "item": 'mekanism:hdpe_sheet' 
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'solarpanels:improved_hybrid_solar_element',
            }
        },
        "output": {
            "item": 'solarpanels:quantum_solar_element'
        }
    })

    event.remove({ output: 'solarpanels:spectral_solar_element' })
    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mekanism_extras:alloy_radiance'
            }
        },
        "secondExtraInput": {
            "amount": 8,
            "ingredient": {
                "item": 'mekanism:hdpe_sheet' 
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'solarpanels:quantum_solar_element',
            }
        },
        "output": {
            "item": 'solarpanels:spectral_solar_element'
        }
    })

    event.remove({ output: 'solarpanels:singular_solar_element' })
    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mekanism_extras:alloy_thermonuclear'
            }
        },
        "secondExtraInput": {
            "amount": 16,
            "ingredient": {
                "item": 'mekanism:hdpe_sheet' 
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'solarpanels:spectral_solar_element',
            }
        },
        "output": {
            "item": 'solarpanels:singular_solar_element'
        }
    })

    event.remove({ output: 'solarpanels:light_absorbing_solar_element' })
    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 1,
            "ingredient": {
                "item": 'mekanism_extras:alloy_shining'
            }
        },
        "secondExtraInput": {
            "amount": 32,
            "ingredient": {
                "item": 'mekanism:hdpe_sheet' 
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'solarpanels:singular_solar_element',
            }
        },
        "output": {
            "item": 'solarpanels:light_absorbing_solar_element' 
        }
    })

    event.remove({ output: 'solarpanels:photonic_solar_element' })
    event.custom({
        "type": "evolvedmekanism:alloying",
        "extraInput": {
            "amount": 1,
            "ingredient": {
                "item": 'astral_mekanism:illusion_control_circuit'
            }
        },
        "secondExtraInput": {
            "amount": 1,
            "ingredient": {
                "item": 'compactmekanismmachines:compressed_wind_generator_x131072'
            }
        },
        "mainInput": {
            "amount": 1,
            "ingredient": {
                "item": 'solarpanels:light_absorbing_solar_element',
            }
        },
        "output": {
            "item": 'solarpanels:photonic_solar_element'
        }
    })
})