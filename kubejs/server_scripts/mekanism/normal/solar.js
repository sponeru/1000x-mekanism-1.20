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
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism:alloy_reinforced' }
        ,
        count1: 1,
        ingredient2:
            { item: 'solarpanels:hybrid_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'mekanism:hdpe_sheet' }
        ,
        count3: 4,
        result:
            { item: 'solarpanels:improved_hybrid_solar_element', count: 1 }
        ,
        cost: 20,
        processTime: 10
    })

    event.remove({ output: 'solarpanels:quantum_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism:alloy_atomic' }
        ,
        count1: 1,
        ingredient2:
            { item: 'solarpanels:improved_hybrid_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'mekanism:hdpe_sheet' }
        ,
        count3: 4,
        result:
            { item: 'solarpanels:quantum_solar_element', count: 1 }
        ,
        cost: 40,
        processTime: 10
    })

    event.remove({ output: 'solarpanels:spectral_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism_extras:alloy_radiance' }
        ,
        count1: 1,
        ingredient2:
            { item: 'solarpanels:quantum_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'mekanism:hdpe_sheet' }
        ,
        count3: 8,
        result:
            { item: 'solarpanels:spectral_solar_element', count: 1 }
        ,
        cost: 80,
        processTime: 10
    })

    event.remove({ output: 'solarpanels:singular_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism_extras:alloy_thermonuclear' }
        ,
        count1: 1,
        ingredient2:
            { item: 'solarpanels:spectral_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'mekanism:hdpe_sheet' }
        ,
        count3: 16,
        result:
            { item: 'solarpanels:singular_solar_element', count: 1 }
        ,
        cost: 160,
        processTime: 10
    })

    event.remove({ output: 'solarpanels:light_absorbing_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism_extras:alloy_shining' }
        ,
        count1: 1,
        ingredient2:
            { item: 'solarpanels:singular_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'mekanism:hdpe_sheet' }
        ,
        count3: 32,
        result:
            { item: 'solarpanels:light_absorbing_solar_element', count: 1 }
        ,
        cost: 320,
        processTime: 10
    })

    event.remove({ output: 'solarpanels:photonic_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism_extras:alloy_spectrum' }
        ,
        count1: 1,
        ingredient2:
            { item: 'solarpanels:light_absorbing_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'compactmekanismmachines:compressed_wind_generator_x131072' }
        ,
        count3: 1,
        result:
            { item: 'solarpanels:photonic_solar_element', count: 1 }
        ,
        cost: 640,
        processTime: 10
    })
})