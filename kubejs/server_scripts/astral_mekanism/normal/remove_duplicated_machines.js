ServerEvents.recipes(event => {
    let thermal_evop = ['astral_mekanism:essential_compact_tep', 'astral_mekanism:basic_standard_compact_tep', 'astral_mekanism:advanced_compact_tep', 'astral_mekanism:elite_compact_tep', 'astral_mekanism:enchanted_ultimate_compact_tep', 'astral_mekanism:absolute_overclocked_compact_tep', 'astral_mekanism:supreme_quantum_compact_tep', 'astral_mekanism:cosmic_dense_compact_tep', 'astral_mekanism:infinite_multiversal_compact_tep', 'astral_mekanism:astral_compact_tep']

    thermal_evop.forEach(value =>{
        event.remove({output:value})
    })

    event.remove({output:'compactmekanismmachinesplus:compact_sps'})
})