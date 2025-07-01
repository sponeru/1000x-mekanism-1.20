//packmode: normal

ServerEvents.recipes(event => {
    event.remove({ output: 'mekanism:basic_control_circuit' })
    event.shaped(
        Item.of('mekanism:basic_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'ae2:logic_processor',
            B: 'minecraft:redstone_block',
            C: '#forge:storage_blocks/osmium'
        }
    )

    event.remove({ output: 'mekanism:advanced_control_circuit' })
    event.shaped(
        Item.of('mekanism:advanced_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'ae2:engineering_processor',
            B: 'mekanism:alloy_infused',
            C: 'mekanism:basic_control_circuit'
        }
    )

    event.remove({ output: 'mekanism:elite_control_circuit' })
    event.shaped(
        Item.of('mekanism:elite_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'ae2:calculation_processor',
            B: 'mekanism:alloy_reinforced',
            C: 'mekanism:advanced_control_circuit'
        }
    )

    event.remove({ output: 'mekanism:ultimate_control_circuit' })
    event.shaped(
        Item.of('mekanism:ultimate_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'megacells:accumulation_processor',
            B: 'mekanism:alloy_atomic',
            C: 'mekanism:elite_control_circuit'
        }
    )

    event.remove({ output: 'mekanism_extras:absolute_control_circuit' })
    event.shaped(
        Item.of('mekanism_extras:absolute_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'fluxnetworks:flux_core',
            B: 'mek1000:basic_super_circuit',
            C: 'mekanism:ultimate_control_circuit'
        }
    )

    event.remove({ output: 'mekanism_extras:supreme_control_circuit' })
    event.shaped(
        Item.of('mekanism_extras:supreme_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'experienceobelisk:primordial_assembly',
            B: 'mek1000:advanced_super_circuit',
            C: 'mekanism_extras:absolute_control_circuit'
        }
    )

    event.remove({ output: 'mekanism_extras:cosmic_control_circuit' })
    event.shaped(
        Item.of('mekanism_extras:cosmic_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'megacells:bulk_cell_component',
            B: 'mek1000:elite_super_circuit',
            C: 'mekanism_extras:supreme_control_circuit'
        }
    )

    event.remove({ output: 'mekanism_extras:infinite_control_circuit' })
    event.shaped(
        Item.of('mekanism_extras:infinite_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'megacells:cell_component_256m',
            B: 'mek1000:ultimate_super_circuit',
            C: 'mekanism_extras:cosmic_control_circuit'
        }
    )

    event.recipes.mekanismMetallurgicInfusing('32x mekanism:basic_control_circuit', 'mekanism:pellet_polonium', '100x mekanism:gold')
    event.recipes.mekanismMetallurgicInfusing('16x mekanism:advanced_control_circuit', 'mekanism:pellet_polonium', '100x mekanism:redstone')
    event.recipes.mekanismMetallurgicInfusing('16x mekanism:elite_control_circuit', 'mekanism:pellet_polonium', '100x mekanism:diamond')
    event.recipes.mekanismMetallurgicInfusing('8x mekanism:ultimate_control_circuit', 'mekanism:pellet_polonium', '100x mekanism:refined_obsidian')
})