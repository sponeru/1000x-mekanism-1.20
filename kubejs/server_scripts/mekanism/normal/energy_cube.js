//packmode: normal

ServerEvents.recipes(event => {
    event.remove({ output: 'mekanism:energy_tablet' })
    event.shaped('mekanism:energy_tablet', [
        ' O ',
        'ORO',
        ' C '
    ], {
        O: '#forge:ingots/osmium',
        C: '#forge:ingots/copper',
        R: '#forge:dusts/redstone'
    })

    event.remove({ output: 'mekanism:basic_energy_cube' })
    event.shapeless('mekanism:basic_energy_cube', ['ae2:energy_acceptor', 'mekanism:energy_tablet'])

    event.remove({ output: 'mekanism:advanced_energy_cube' })
    event.shaped(`mekanism:advanced_energy_cube`, [
        ' M ',
        'MCM',
        ' M '
    ], {
        M: '#forge:ingots/osmium',
        C: 'mekanism:basic_energy_cube'
    })

    event.remove({ output: 'mekanism:elite_energy_cube' })
    event.shaped(`mekanism:elite_energy_cube`, [
        ' M ',
        'MCM',
        ' M '
    ], {
        M: '#forge:ingots/gold',
        C: 'mekanism:advanced_energy_cube'
    })

    event.remove({ output: 'mekanism:ultimate_energy_cube' })
    event.shaped(`mekanism:ultimate_energy_cube`, [
        ' M ',
        'MCM',
        ' M '
    ], {
        M: '#forge:gems/diamond',
        C: 'mekanism:elite_energy_cube'
    })

    event.remove({ output: 'mekanism_extras:absolute_energy_cube' })
    event.shaped('mekanism_extras:absolute_energy_cube', [
        'TET',
        'ENE',
        'TET'
    ], {
        E: 'mekanism_extras:absolute_control_circuit',
        T: 'mekanismelements:dust_calcium_oxide',
        N: 'mekanism:ultimate_energy_cube'
    })

    event.remove({ output: 'mekanism_extras:supreme_energy_cube' })
    event.shaped('mekanism_extras:supreme_energy_cube', [
        'TET',
        'ENE',
        'TET'
    ], {
        E: 'mekanism_extras:supreme_control_circuit',
        T: 'mekanism_extras:absolute_energy_cube',
        N: 'mekanism:teleportation_core'
    })

    event.remove({ output: 'mekanism_extras:cosmic_energy_cube' })
    event.shaped('mekanism_extras:cosmic_energy_cube', [
        'TET',
        'ENE',
        'TET'
    ], {
        E: 'mekanism_extras:cosmic_control_circuit',
        T: 'mekanism_extras:supreme_energy_cube',
        N: 'mekanism:pellet_antimatter'
    })

    event.remove({ output: 'mekanism_extras:infinite_energy_cube' })
    event.shaped('mekanism_extras:infinite_energy_cube', [
        'TET',
        'ENE',
        'TET'
    ], {
        E: 'mekanism_extras:infinite_control_circuit',
        T: 'mekanism_extras:cosmic_energy_cube',
        N: 'megacells:cell_component_256m'
    })
})