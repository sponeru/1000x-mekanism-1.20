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
    
    event.create('mek1000:bio_compose').texture('kubejs:item/dust_iridium').color(0, "#00581b")
    event.create('mek1000:quartz_compose').texture('kubejs:item/dust_iridium').color(0, "#e8fc7b")

    event.create('mek1000:experience_crystal').texture('kubejs:item/crystal_fluorite').color(0, "#1ffa43")
    event.create('mek1000:bedrockium_ingot')
    event.create("mek1000:ultimate_alloy_ingot")
    event.create('mek1000:neutronium_ingot')
    event.create('mek1000:infinity_ingot').texture('mek1000:item/infinity_ingot')

    event.create('mek1000:ultimate_dye_base').texture('mekanism:item/dye_base').glow(true)

    event.create('mek1000:synced_bibliophage').texture('experienceobelisk:item/bibliophage').glow(true)

    event.create('mek1000:starlight_iridium').glow(true)
    
    event.create('mek1000:large_yellow_cake_uranium').glow(true).texture('mekanism:item/yellow_cake_uranium')

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

    event.create('mek1000:astral_soul').rarity("epic")
    event.create('mek1000:applied_soul').rarity("epic")
    event.create('mek1000:integrated_soul').rarity("epic")
    event.create('mek1000:cognition_soul').rarity("epic")

    event.create('mek1000:super_press').rarity("epic").texture("advanced_ae:item/quantum_processor_press").glow(true)

    event.create('mek1000:super_flux_processor').texture("mek1000:item/flux_processor").glow(true)
    event.create('mek1000:super_cognitive_processor').texture("mek1000:item/cognitive_processor").glow(true)
    event.create('mek1000:super_echo_processor').texture("mek1000:item/echo_processor").glow(true)
    event.create('mek1000:super_valinium_processor').texture("mek1000:item/valinium_processor").glow(true)

    event.create('mek1000:super_logic_processor').texture("ae2:item/logic_processor").glow(true)
    event.create('mek1000:super_calculation_processor').texture("ae2:item/calculation_processor").glow(true)
    event.create('mek1000:super_engineering_processor').texture("ae2:item/engineering_processor").glow(true)
    event.create('mek1000:super_energy_processor').texture("appflux:item/energy_processor").glow(true)
    event.create('mek1000:super_quantum_processor').texture("advanced_ae:item/quantum_processor").glow(true)
    event.create('mek1000:super_accumulation_processor').texture("megacells:item/accumulation_processor").glow(true)

    event.create('mek1000:compressed_flux').texture("mek1000:item/wip").glow(true)
    event.create('mek1000:compressed_primodial').texture("mek1000:item/wip").glow(true)
    event.create('mek1000:compressed_echo').texture("mek1000:item/wip").glow(true)
    event.create('mek1000:compressed_valinium').texture("mek1000:item/wip").glow(true)

    event.create('mek1000:compressed_gold').texture("mek1000:item/wip").glow(true)
    event.create('mek1000:compressed_certus_quartz').texture("mek1000:item/wip").glow(true)
    event.create('mek1000:compressed_diamond').texture("mek1000:item/wip").glow(true)
    event.create('mek1000:compressed_redstone_crystal').texture("mek1000:item/wip").glow(true)
    event.create('mek1000:compressed_quantum_alloy').texture("mek1000:item/wip").glow(true)
    event.create('mek1000:compressed_sky_steel').texture("mek1000:item/wip").glow(true)

    event.create('mek1000:bablo_crystal')
    event.create('mek1000:double_string_control_circuit')
})