//packmode: normal

ServerEvents.recipes(event => {
    event.remove({ id: 'compactmekanismmachines:compressed_wind_generator_x2' })
    event.remove({ id: 'compactmekanismmachines:compressed_wind_generator_x8' })
    event.remove({ id: 'compactmekanismmachines:compressed_wind_generator_x32' })
    event.remove({ id: 'compactmekanismmachines:compressed_wind_generator_x128' })
    event.remove({ id: 'compactmekanismmachines:compressed_wind_generator_x512' })
    event.remove({ id: 'compactmekanismmachines:compressed_wind_generator_x2048' })
    event.remove({ id: 'compactmekanismmachines:compressed_wind_generator_x8192' })
    event.remove({ id: 'compactmekanismmachines:compressed_wind_generator_x32768' })
    event.remove({ id: 'compactmekanismmachines:compressed_wind_generator_x131072' })
    event.remove({ id: 'compactmekanismmachines:compressed_wind_generator_x532480' })

    event.recipes.mekanismMetallurgicInfusing(`compactmekanismmachines:compressed_wind_generator_x2`, '2x mekanismgenerators:wind_generator', '100x mekanism:redstone')

    event.shaped('compactmekanismmachines:compressed_wind_generator_x8', [
        ' W ',
        'WHW',
        ' W '
    ], {
        H: 'mekanism:alloy_infused',
        W: 'compactmekanismmachines:compressed_wind_generator_x2'
    })

    event.shaped('compactmekanismmachines:compressed_wind_generator_x32', [
        ' W ',
        'WAW',
        ' W '
    ], {
        W: 'compactmekanismmachines:compressed_wind_generator_x8',
        A: 'mekanism:steel_casing'
    })

    event.shaped('compactmekanismmachines:compressed_wind_generator_x128', [
        'EWE',
        'WSW',
        'EWE'
    ], {
        S: 'mekanism:basic_control_circuit',
        W: 'compactmekanismmachines:compressed_wind_generator_x32',
        E: `mekanism:fuelwood_heater`
    })

    event.shaped('compactmekanismmachines:compressed_wind_generator_x512', [
        'EWE',
        'WEW',
        'EWE'
    ], {
        E: 'mekanism:module_base',
        W: 'compactmekanismmachines:compressed_wind_generator_x128',
    })

    event.shaped('compactmekanismmachines:compressed_wind_generator_x2048', [
        'SWS',
        'WDW',
        'SWS'
    ], {
        S: 'mekanism:seismic_vibrator',
        W: 'compactmekanismmachines:compressed_wind_generator_x512',
        D: 'mekanism:dynamic_valve'
    })

    event.shaped('compactmekanismmachines:compressed_wind_generator_x8192', [
        'MWM',
        'WGW',
        'MWM'
    ], {
        M: 'mekanism:thermal_evaporation_valve',
        W: 'compactmekanismmachines:compressed_wind_generator_x2048',
        G: `megacells:cell_component_1m`
    })

    event.shaped('compactmekanismmachines:compressed_wind_generator_x32768', [
        'HWH',
        'WGW',
        'HWH'
    ], {
        H: 'mekanism:sps_casing',
        W: 'compactmekanismmachines:compressed_wind_generator_x8192',
        G: `megacells:cell_component_4m`
    })

    event.shaped('compactmekanismmachines:compressed_wind_generator_x131072', [
        ' W ',
        'WSW',
        ' W '
    ], {
        W: 'compactmekanismmachines:compressed_wind_generator_x32768',
        S: 'mekaevolution:absolute_energy_cube'
    })

    event.shaped('compactmekanismmachines:compressed_wind_generator_x532480', [
        ' W ',
        'WSW',
        ' W '
    ], {
        W: 'compactmekanismmachines:compressed_wind_generator_x131072',
        S: 'compactmekanismmachines:compressed_wind_generator_x8192'
    })

})