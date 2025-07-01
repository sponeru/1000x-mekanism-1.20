//packmode: normal

let installers = ['mekanism:basic_tier_installer', 'mekanism:advanced_tier_installer', 'mekanism:elite_tier_installer', 'mekanism:ultimate_tier_installer', 'mekanism_extras:absolute_tier_installer', 'mekanism_extras:supreme_tier_installer', 'mekanism_extras:cosmic_tier_installer', 'mekanism_extras:infinite_tier_installer']

ServerEvents.recipes(event => {
    installers.forEach(item => {
        event.remove({ output: item })
    });

    event.shaped(
        Item.of('mekanism:basic_tier_installer', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:storage_blocks/redstone',
            B: 'mekanism:basic_control_circuit',
            C: 'minecraft:iron_block',
            D: 'ae2:cell_component_16k'
        }
    )

    event.shaped(
        Item.of('mekanism:advanced_tier_installer', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism:alloy_infused',
            B: 'mekanism:advanced_control_circuit',
            C: '#forge:storage_blocks/osmium',
            D: 'ae2:cell_component_64k'
        }
    )

    event.shaped(
        Item.of('mekanism:elite_tier_installer', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism:alloy_reinforced',
            B: 'mekanism:elite_control_circuit',
            C: '#forge:storage_blocks/gold',
            D: 'ae2:cell_component_256k'
        }
    )

    event.shaped(
        Item.of('mekanism:ultimate_tier_installer', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism:alloy_atomic',
            B: 'mekanism:ultimate_control_circuit',
            C: '#forge:storage_blocks/diamond',
            D: '#forge:storage_blocks/netherite'
        }
    )

    event.shaped(
        Item.of('mekanism_extras:absolute_tier_installer', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism_extras:alloy_radiance',
            B: 'mekanism_extras:absolute_control_circuit',
            C: '#forge:storage_blocks/netherite',
            D: 'igleelib:modium_block'
        }
    )

    event.shaped(
        Item.of('mekanism_extras:supreme_tier_installer', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism_extras:alloy_thermonuclear',
            B: 'mekanism_extras:supreme_control_circuit',
            C: 'igleelib:modium_block',
            D: 'igleelib:blazum_block'
        }
    )

    event.shaped(
        Item.of('mekanism_extras:cosmic_tier_installer', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism_extras:alloy_shining',
            B: 'mekanism_extras:cosmic_control_circuit',
            C: 'igleelib:blazum_block',
            D: 'igleelib:lavium_block'
        }
    )

    event.shaped(
        Item.of('mekanism_extras:infinite_tier_installer', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism_extras:alloy_spectrum',
            B: 'mekanism_extras:infinite_control_circuit',
            C: 'igleelib:lavium_block',
            D: 'igleelib:derium_block'
        }
    )
})