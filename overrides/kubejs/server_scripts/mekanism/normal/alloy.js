//packmode: normal

ServerEvents.recipes(event => {
    event.remove({ id: 'mekanism:metallurgic_infusing/alloy/atomic' })
    event.remove({ id: 'mekanism:metallurgic_infusing/alloy/reinforced' })
    event.remove({ id: 'mekanism:metallurgic_infusing/alloy/infused' })
    event.remove({ id: 'mekanism_extras:metallurgic_infusing/alloy/radiance' })
    event.remove({ id: 'mekanism_extras:metallurgic_infusing/alloy/thermonuclear' })
    event.remove({ id: 'mekanism_extras:metallurgic_infusing/alloy/shining' })
    event.remove({ id: 'mekanism_extras:metallurgic_infusing/alloy/spectrum' })

    event.remove({ id: 'mekanism_extras:processing/dust_radiance/from_glowstone' })
    event.recipes.mekanism.compressing('1x mekanism_extras:dust_radiance', '10x kubejs:iridium', '30x mekanism:uranium_oxide')

    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_infused', '10x #forge:ingots/iron', '100x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('4x mekanism:alloy_infused', '12x mekanism:clump_iron', '100x mekanism:redstone')
    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_reinforced', '24x mekanism:clump_gold', '100x mekanism:diamond')

    event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_atomic', '4x mekanism:elite_control_circuit', '200x mekanism:refined_obsidian')

    event.recipes.mekanismMetallurgicInfusing('32x mekanism:alloy_infused', 'mekanism:crystal_iron', '100x mekanism:redstone')
    event.recipes.mekanismMetallurgicInfusing('16x mekanism:alloy_reinforced', 'mekanism:crystal_gold', '100x mekanism:diamond')
    event.recipes.mekanismMetallurgicInfusing('4x mekanism:alloy_atomic', '25x mekanism:crystal_osmium', '100x mekanism:refined_obsidian')


    event.recipes.mekanismMetallurgicInfusing('mekanism_extras:alloy_radiance', '4x mekanism:alloy_atomic', '500x mekanism_extras:radiance')
    event.recipes.mekanismMetallurgicInfusing('mekanism_extras:alloy_thermonuclear', '4x mekanism_extras:alloy_radiance', '500x mekanism_extras:thermonuclear')
    event.recipes.mekanismMetallurgicInfusing('mekanism_extras:alloy_shining', '4x mekanism_extras:alloy_thermonuclear', '500x mekanism_extras:shining')
    event.recipes.mekanismMetallurgicInfusing('mekanism_extras:alloy_spectrum', '4x mekanism_extras:alloy_shining', '500x mekanism_extras:spectrum')

    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "item": 'mekanism_extras:alloy_radiance',
        "result": {
            "fluid": { "fluid": "mek1000:condenced_lux", "amount": 20 }
        },
        "duration": 10
    })
})