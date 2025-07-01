ServerEvents.recipes(event => {
    let removeSolar = ['mekanismadvancedgenerators:advanced_solar_panel', 'mekanismadvancedgenerators:hybrid_solar_panel', 'mekanismadvancedgenerators:ultimate_solar_panel', 'mekanismadvancedgenerators:quantum_solar_panel', 'mekanismadvancedgenerators:spectral_solar_panel', 'mekanismadvancedgenerators:singular_solar_panel', 'mekanismadvancedgenerators:light_absorbing_solar_panel', 'mekanismadvancedgenerators:photonic_solar_panel']
    let removeSolar2 = ['mekanismadvancedgenerators:big_spectral_solar_generator', 'mekanismadvancedgenerators:big_advanced_solar_generator', 'mekanismadvancedgenerators:big_hybrid_solar_generator', 'mekanismadvancedgenerators:big_ultimate_solar_generator', 'mekanismadvancedgenerators:big_quantum_solar_generator', 'mekanismadvancedgenerators:big_singular_solar_generator', 'mekanismadvancedgenerators:big_light_absorbing_solar_generator', 'mekanismadvancedgenerators:big_photonic_solar_generator', 'mekanismadvancedgenerators:big_creative_solar_generator']

    removeSolar.forEach(item => {
        event.remove({ output: item })
    })

    removeSolar2.forEach(item => {
        event.remove({ output: item })
    })

    event.recipes.mekanism.combining('mekanismadvancedgenerators:big_advanced_solar_generator', 'mekanismgenerators:advanced_solar_generator', 'mekanismadvancedgenerators:carbone_solar_element')
    event.recipes.mekanism.combining('mekanismadvancedgenerators:big_hybrid_solar_generator', '4x mekanismadvancedgenerators:big_advanced_solar_generator', 'mekanismadvancedgenerators:hybrid_solar_element')
    event.recipes.mekanism.combining('mekanismadvancedgenerators:big_ultimate_solar_generator', '4x mekanismadvancedgenerators:big_hybrid_solar_generator', 'mekanismadvancedgenerators:improved_hybrid_solar_element')
    event.recipes.mekanism.combining('mekanismadvancedgenerators:big_quantum_solar_generator', '4x mekanismadvancedgenerators:big_ultimate_solar_generator', 'mekanismadvancedgenerators:quantum_solar_element')
    event.recipes.mekanism.combining('mekanismadvancedgenerators:big_spectral_solar_generator', '4x mekanismadvancedgenerators:big_quantum_solar_generator', 'mekanismadvancedgenerators:spectral_solar_element')
    event.recipes.mekanism.combining('mekanismadvancedgenerators:big_singular_solar_generator', '8x mekanismadvancedgenerators:big_spectral_solar_generator', 'mekanismadvancedgenerators:singular_solar_element')
    event.recipes.mekanism.combining('mekanismadvancedgenerators:big_light_absorbing_solar_generator', '8x mekanismadvancedgenerators:big_singular_solar_generator', 'mekanismadvancedgenerators:light_absorbing_solar_element')
    event.recipes.mekanism.combining('mekanismadvancedgenerators:big_photonic_solar_generator', '8x mekanismadvancedgenerators:big_light_absorbing_solar_generator', 'mekanismadvancedgenerators:photonic_solar_element')



    event.remove({ output: 'mekanismadvancedgenerators:improved_hybrid_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism:alloy_reinforced' }
        ,
        count1: 1,
        ingredient2:
            { item: 'mekanismadvancedgenerators:hybrid_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'mekanism:hdpe_sheet' }
        ,
        count3: 4,
        result:
            { item: 'mekanismadvancedgenerators:improved_hybrid_solar_element', count: 1 }
        ,
        cost: 20,
        processTime: 10
    })

    event.remove({ output: 'mekanismadvancedgenerators:quantum_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism:alloy_atomic' }
        ,
        count1: 1,
        ingredient2:
            { item: 'mekanismadvancedgenerators:improved_hybrid_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'mekanism:hdpe_sheet' }
        ,
        count3: 4,
        result:
            { item: 'mekanismadvancedgenerators:quantum_solar_element', count: 1 }
        ,
        cost: 40,
        processTime: 10
    })

    event.remove({ output: 'mekanismadvancedgenerators:spectral_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism_extras:alloy_radiance' }
        ,
        count1: 1,
        ingredient2:
            { item: 'mekanismadvancedgenerators:quantum_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'mekanism:hdpe_sheet' }
        ,
        count3: 8,
        result:
            { item: 'mekanismadvancedgenerators:spectral_solar_element', count: 1 }
        ,
        cost: 80,
        processTime: 10
    })

    event.remove({ output: 'mekanismadvancedgenerators:singular_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism_extras:alloy_thermonuclear' }
        ,
        count1: 1,
        ingredient2:
            { item: 'mekanismadvancedgenerators:spectral_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'mekanism:hdpe_sheet' }
        ,
        count3: 16,
        result:
            { item: 'mekanismadvancedgenerators:singular_solar_element', count: 1 }
        ,
        cost: 160,
        processTime: 10
    })

    event.remove({ output: 'mekanismadvancedgenerators:light_absorbing_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism_extras:alloy_shining' }
        ,
        count1: 1,
        ingredient2:
            { item: 'mekanismadvancedgenerators:singular_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'mekanism:hdpe_sheet' }
        ,
        count3: 32,
        result:
            { item: 'mekanismadvancedgenerators:light_absorbing_solar_element', count: 1 }
        ,
        cost: 320,
        processTime: 10
    })

    event.remove({ output: 'mekanismadvancedgenerators:photonic_solar_element' })
    event.custom({
        type: 'experienceobelisk:molecular_metamorphosis',
        ingredient1:
            { item: 'mekanism_extras:alloy_spectrum' }
        ,
        count1: 1,
        ingredient2:
            { item: 'mekanismadvancedgenerators:light_absorbing_solar_element' }
        ,
        count2: 1,
        ingredient3:
            { item: 'compactmekanismmachines:compressed_wind_generator_x131072' }
        ,
        count3: 1,
        result:
            { item: 'mekanismadvancedgenerators:photonic_solar_element', count: 1 }
        ,
        cost: 640,
        processTime: 10
    })
})