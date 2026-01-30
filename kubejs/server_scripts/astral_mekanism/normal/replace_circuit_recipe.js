ServerEvents.recipes(event => { 
    event.remove({ output: 'astral_mekanism:vibration_control_circuit' })
    event.shaped(
        Item.of('astral_mekanism:vibration_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'astral_mekanism:utility_block',
            B: 'astral_mekanism:alloy_elastic',
            C: 'mekanism:basic_control_circuit'
        }
    )

    event.remove({ output: 'astral_mekanism:resonance_control_circuit' })
    event.shaped(
        Item.of('astral_mekanism:resonance_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'mek1000:echo_processor',
            B: 'astral_mekanism:alloy_enchanted',
            C: 'astral_mekanism:vibration_control_circuit'
        }
    )

    event.remove({ output: 'astral_mekanism:enhanced_control_circuit' })
    event.shaped(
        Item.of('astral_mekanism:enhanced_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'megacells:cell_component_256m',
            B: 'astral_mekanism:alloy_enchanted',
            C: 'astral_mekanism:resonance_control_circuit'
        }
    )

    event.remove({ output: 'astral_mekanism:illusion_control_circuit' })
    event.shaped(
        Item.of('astral_mekanism:illusion_control_circuit', 1),
        [
            'AB ',
            'BCB',
            ' BA'
        ],
        {
            A: 'mek1000:infinite_super_circuit',
            B: 'astral_mekanism:alloy_stardust',
            C: 'astral_mekanism:infuse_control_circuit'
        }
    )
})