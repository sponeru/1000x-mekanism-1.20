StartupEvents.registry("item", event => {
    event.create('mek1000:energy_cataryst')
    event.create('mek1000:item_cataryst')
    event.create('mek1000:fluid_cataryst')
    event.create('mek1000:gas_cataryst')
    event.create('mek1000:emc')
    event.create('mek1000:the_null')

    event.create('mek1000:ldpe')
    event.create('mek1000:stray_cat').texture(`mek1000:item/cat_crystal`)
    event.create('mek1000:tiny_antimatter').texture("mek1000:item/ldpe").color(0, "#aa99aa").glow(true)

    event.create('mek1000:dust_amethyst').texture('kubejs:item/dust_iridium').color(0, "#9400d3").tag('forge:dusts').tag('forge:dusts/amethyst')
    event.create('mek1000:bedrockium_ingot')
    event.create("mek1000:ultimate_alloy_ingot")
    event.create('mek1000:neutronium_ingot')
    event.create('mek1000:infinity_ingot').texture('mek1000:item/infinity_ingot')

    event.create('mek1000:ultimate_dye_base').texture('mekanism:item/dye_base').glow(true)

    event.create('mek1000:synced_bibliophage').texture('experienceobelisk:item/bibliophage').glow(true)

    event.create('mek1000:starlight_iridium').glow(true)
    event.create('mek1000:starlight_amethyst').glow(true)

    event.create('mek1000:solar_grade_silicon')

    event.create('mek1000:printed_solar_grade_silicon')
    event.create('mek1000:printed_flux_processor')
    event.create('mek1000:printed_cognitive_processor')
    event.create('mek1000:printed_echo_processor')
    event.create('mek1000:printed_valinium_processor')

    event.create('mek1000:creative_chemical_data')
    event.create('mek1000:creative_fluid_data')
    event.create('mek1000:creative_energy_data')

    event.create('mek1000:flux_processor')
    event.create('mek1000:cognitive_processor')
    event.create('mek1000:echo_processor')
    event.create('mek1000:valinium_processor')

    for (let index = 0; index < 8; index++) {
        event.create(`mek1000:valine3g_ingot_${index}`)
    }
})