//packmode: normal

ServerEvents.recipes(event => {
    event.remove({ output: 'compactmekanismmachines:compact_fission_reactor' })
    event.shaped('compactmekanismmachines:compact_fission_reactor', [
        'CSC',
        'WFW',
        'CPC'
    ], {
        C: 'mekanismgenerators:fission_reactor_casing',
        F: 'mekanismgenerators:fission_fuel_assembly',
        S: `ae2:spatial_cell_component_128`,
        P: `mekanism_extras:supreme_control_circuit`,
        W: `compactmekanismmachines:compressed_wind_generator_x8192`
    })
})