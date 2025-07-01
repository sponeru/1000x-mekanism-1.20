//packmode: normal

ServerEvents.recipes(event => {
    event.recipes.mekanism.metallurgic_infusing('integrateddynamics:crystalized_menril_block', '#forge:nuggets/osmium', '1x mekanism:redstone')

    event.remove({ output: 'integrateddynamics:drying_basin' })
    event.shaped(
        Item.of('integrateddynamics:drying_basin', 1),
        [
            'W W',
            'WCW',
            'WWW'
        ],
        {
            W: '#minecraft:planks',
            C: "minecraft:cauldron"
        }
    )


    event.remove({ output: 'integrateddynamics:proto_chorus' })
    event.shaped(
        Item.of('integrateddynamics:proto_chorus', 64),
        [
            'AA ',
            'AA ',
            '   '
        ],
        {
            A: 'integrateddynamics:crystalized_menril_chunk',
        }
    )

    event.remove({ output: 'integratedtunnels:part_interface_energy' })
    event.shaped(
        Item.of('integratedtunnels:part_interface_energy', 64),
        [
            'ABA',
            '   ',
            '   '
        ],
        {
            A: 'integrateddynamics:crystalized_menril_chunk',
            B: 'minecraft:redstone_block'
        }
    )

    event.remove({ output: 'integratedtunnels:part_interface_item' })
    event.shaped(
        Item.of('integratedtunnels:part_interface_item', 64),
        [
            'ABA',
            '   ',
            '   '
        ],
        {
            A: 'integrateddynamics:crystalized_menril_chunk',
            B: '#minecraft:planks'
        }
    )

    event.remove({ output: 'integratedtunnels:part_interface_fluid' })
    event.shaped(
        Item.of('integratedtunnels:part_interface_fluid', 64),
        [
            'ABA',
            '   ',
            '   '
        ],
        {
            A: 'integrateddynamics:crystalized_menril_chunk',
            B: 'minecraft:bucket'
        }
    )

    event.remove({ output: 'integrateddynamics:variable_transformer_input' })
    event.shaped(
        Item.of('integrateddynamics:variable_transformer_input', 64),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'integrateddynamics:crystalized_menril_chunk',
            B: 'integrateddynamics:variable',
        }
    )
    event.remove({ output: 'integrateddynamics:variable_transformer_output' })

    global.convert.push(['integrateddynamics:variable_transformer_input', 'integrateddynamics:variable_transformer_output'])

    event.remove({ output: 'integrateddynamics:variable' })
    event.shaped(
        Item.of('integrateddynamics:variable', 64),
        [
            ' A ',
            'A A',
            ' A '
        ],
        {
            A: 'integrateddynamics:crystalized_menril_chunk'
        }
    )

    event.remove({ output: 'integrateddynamics:cable' })
    event.shaped(
        Item.of('integrateddynamics:cable', 64),
        [
            'AA ',
            '   ',
            '   '
        ],
        {
            A: 'integrateddynamics:crystalized_menril_chunk'
        }
    )
})