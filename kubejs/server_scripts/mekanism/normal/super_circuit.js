//packmode: normal

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mek1000:basic_super_circuit', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanismelements:dust_calcium_oxide',
            B: 'mekanism:basic_control_circuit',
            C: 'ae2:cell_component_16k'
        }
    )

    event.shaped(
        Item.of('mek1000:advanced_super_circuit', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism_extras:absolute_energy_cube',
            B: 'mek1000:basic_super_circuit',
            C: 'ae2:cell_component_64k'
        }
    )

    event.shaped(
        Item.of('mek1000:elite_super_circuit', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism:reprocessed_fissile_fragment',
            B: 'mek1000:advanced_super_circuit',
            C: 'ae2:cell_component_256k'
        }
    )

    event.shaped(
        Item.of('mek1000:ultimate_super_circuit', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism:pellet_antimatter',
            B: 'mek1000:elite_super_circuit',
            C: 'megacells:cell_component_4m'
        }
    )

    event.shaped(
        Item.of('mek1000:absolute_super_circuit', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism_extras:absolute_control_circuit',
            B: 'mek1000:ultimate_super_circuit',
            C: 'megacells:cell_component_256m'
        }
    )

    event.shaped(
        Item.of('mek1000:supreme_super_circuit', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism_extras:supreme_control_circuit',
            B: 'mek1000:absolute_super_circuit',
            C: 'appflux:core_256m'
        }
    )

    event.shaped(
        Item.of('mek1000:cosmic_super_circuit', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism_extras:cosmic_control_circuit',
            B: 'mek1000:supreme_super_circuit',
            C: 'fluxnetworks:gargantuan_flux_storage'
        }
    )

    event.shaped(
        Item.of('mek1000:infinite_super_circuit', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism_extras:infinite_control_circuit',
            B: 'mek1000:cosmic_super_circuit',
            C: 'mekanism_extras:infinite_energy_cube'
        }
    )

    event.remove({ output: 'mekanismelements:dust_calcium_oxide' })
})