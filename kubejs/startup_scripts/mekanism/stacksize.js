let machines = ['mekanismadvancedgenerators:big_light_absorbing_solar_generator', 'mekanismadvancedgenerators:big_photonic_solar_generator', 'mekanismadvancedgenerators:big_creative_solar_generator', 'mekanismgenerators:solar_generator', 'mekanismadvancedgenerators:advanced_solar_panel', 'mekanismadvancedgenerators:hybrid_solar_panel', 'compactmekanismmachines:compressed_wind_generator_x532480', 'compactmekanismmachines:compressed_wind_generator_x2', 'compactmekanismmachines:compressed_wind_generator_x8', 'compactmekanismmachines:compressed_wind_generator_x32', 'compactmekanismmachines:compressed_wind_generator_x128', 'compactmekanismmachines:compressed_wind_generator_x512', 'compactmekanismmachines:compressed_wind_generator_x2048', 'compactmekanismmachines:compressed_wind_generator_x8192', 'compactmekanismmachines:compressed_wind_generator_x32768', 'compactmekanismmachines:compressed_wind_generator_x131072', 'compactmekanismmachines:compact_fission_reactor', 'compactmekanismmachines:compact_industrial_turbine', 'compactmekanismmachines:compact_thermal_evaporation', 'mekanismadvancedgenerators:ultimate_solar_panel', 'mekanismadvancedgenerators:quantum_solar_panel', 'mekanismadvancedgenerators:spectral_solar_panel', 'mekanismadvancedgenerators:singular_solar_panel', 'mekanismadvancedgenerators:light_absorbing_solar_panel', 'mekanismadvancedgenerators:photonic_solar_panel', 'mekanismgenerators:wind_generator', 'mekanismgenerators:heat_generator', 'mekanismadvancedgenerators:big_advanced_solar_generator', 'mekanismadvancedgenerators:big_hybrid_solar_generator', 'mekanismadvancedgenerators:big_ultimate_solar_generator', 'mekanismadvancedgenerators:big_quantum_solar_generator', 'mekanismadvancedgenerators:big_spectral_solar_generator', 'mekanismadvancedgenerators:big_singular_solar_generator', 'mekanismgenerators:gas_burning_generator', 'mekanismgenerators:bio_generator', 'mekanism:enrichment_chamber', 'mekanism:osmium_compressor', 'mekanism:combiner', 'mekanism:crusher', 'mekanism:digital_miner', 'mekanism:metallurgic_infuser', 'mekanism:purification_chamber', 'mekanism:energized_smelter', 'mekanism:teleporter', 'mekanism:electric_pump', 'mekanism:logistical_sorter', 'mekanism:rotary_condensentrator', 'mekanism:chemical_oxidizer', 'mekanism:chemical_infuser', 'mekanism:chemical_injection_chamber', 'mekanism:electrolytic_separator', 'mekanism:precision_sawmill', 'mekanism:chemical_dissolution_chamber', 'mekanism:chemical_washer', 'mekanism:chemical_crystallizer', 'mekanism:seismic_vibrator', 'mekanism:pressurized_reaction_chamber', 'mekanism:isotopic_centrifuge', 'mekanism:nutritional_liquifier', 'mekanism:fluidic_plenisher', 'mekanism:solar_neutron_activator', 'mekanism:resistive_heater', 'mekanism:formulaic_assemblicator', 'mekanism:antiprotonic_nucleosynthesizer', 'mekanism:pigment_extractor', 'mekanism:pigment_mixer', 'mekanism:painting_machine', 'mekanism:dimensional_stabilizer', 'mekanism:quantum_entangloporter', 'mekanism:oredictionificator', 'mekanism:fuelwood_heater', 'mekanism:modification_station', 'mekanism:qio_drive_array', 'mekanism:laser', 'mekanism:laser_amplifier', 'mekanism:qio_dashboard', 'mekanism:qio_exporter', 'mekanism:qio_importer', 'mekanism:qio_redstone_adapter', 'mekanism:modification_station', 'mekanismelements:adsorption_separator', 'mekanismelements:air_compressor', 'mekanismelements:radiation_irradiator', 'mekanismelements:seawater_pump', 'mekanismadvancedgenerators:creative_solar_panel', 'mekanism_extras:absolute_energy_cube', 'mekanism_extras:supreme_energy_cube', 'mekanism_extras:cosmic_energy_cube', 'mekanism_extras:infinite_energy_cube']
let installers = ['mekanism:basic_tier_installer', 'mekanism:advanced_tier_installer', 'mekanism:elite_tier_installer', 'mekanism:ultimate_tier_installer', 'mekanism_extras:absolute_tier_installer', 'mekanism_extras:supreme_tier_installer', 'mekanism_extras:cosmic_tier_installer', 'mekanism_extras:infinite_tier_installer']
let energy_tablet = ['mekanism:energy_tablet', 'mekanismadvancedgenerators:improved_energy_tablet', 'mekanismadvancedgenerators:quantum_energy_tablet', 'mekanismadvancedgenerators:spectral_energy_tablet', 'mekanismadvancedgenerators:singular_energy_tablet', 'mekanismadvancedgenerators:light_absorbing_energy_tablet', 'mekanismadvancedgenerators:photonic_energy_tablet', 'mekanismadvancedgenerators:creative_energy_tablet']
let cubes = ['mekanism:basic_energy_cube', 'mekanism:advanced_energy_cube', 'mekanism:elite_energy_cube', 'mekanism:ultimate_energy_cube']

ItemEvents.modification(event => {
    machines.forEach(content => {
        event.modify(content, item => {
            item.maxStackSize = 64
        })
    })

    installers.forEach(content => {
        event.modify(content, item => {
            item.maxStackSize = 64
        })
    })

    energy_tablet.forEach(content => {
        event.modify(content, item => {
            item.maxStackSize = 64
        })
    })

    cubes.forEach(content => {
        event.modify(content, item => {
            item.maxStackSize = 64
        })
    })
})
