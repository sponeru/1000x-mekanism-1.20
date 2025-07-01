ServerEvents.recipes((event) => {
  event.shaped("mek1000:large_digital_assembly_table", ["ete", "tnt", "ese"], {
    e: "mekanism_extras:supreme_control_circuit",
    t: "mekanism_extras:alloy_radiance",
    n: "mek1000:wtf_casing",
    s: "mekanism:ultimate_induction_cell",
  });

  event.recipes.mek1000
    .large_digital_assemble()
    .id("mek1000:recipe_sml_drill_s")
    .duration(300)
    .outputItems("mek1000:sml_drill_s")
    .perTick((builder) => builder.inputFE(2147483647))
    .slotName("cat0", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:energy_cataryst")
      )
    )
    .slotName("cat1", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:item_cataryst")
      )
    )
    .slotName("cat2", (builder) => builder.inputItems("mek1000:wtf_casing"))
    .slotName("cat3", (builder) => builder.inputItems("mek1000:wtf_casing"))
    .slotName("s0", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_radiance")
    )
    .slotName("s1", (builder) =>
      builder.inputItems("16x mekanism_extras:enriched_radiance")
    )
    .slotName("s2", (builder) =>
      builder.inputItems("16x mekanism_extras:enriched_radiance")
    )
    .slotName("s3", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_radiance")
    )
    .slotName("s4", (builder) =>
      builder.inputItems("16x mekanism:enriched_tin")
    )
    .slotName("s5", (builder) =>
      builder.inputItems("64x megacells:accumulation_processor")
    )
    .slotName("s6", (builder) =>
      builder.inputItems("16x mekanismgenerators:turbine_vent")
    )
    .slotName("s7", (builder) =>
      builder.inputItems("16x mekanism:enriched_tin")
    )
    .slotName("s8", (builder) =>
      builder.inputItems("16x mekanism:enriched_tin")
    )
    .slotName("s9", (builder) =>
      builder.inputItems("16x mekanismgenerators:turbine_vent")
    )
    .slotName("s10", (builder) =>
      builder.inputItems("64x megacells:accumulation_processor")
    )
    .slotName("s11", (builder) =>
      builder.inputItems("16x mekanism:enriched_tin")
    )
    .slotName("s12", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_radiance")
    )
    .slotName("s13", (builder) =>
      builder.inputItems("16x mekanism_extras:enriched_radiance")
    )
    .slotName("s14", (builder) =>
      builder.inputItems("16x mekanism_extras:enriched_radiance")
    )
    .slotName("s15", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_radiance")
    );

  event.recipes.mek1000
    .large_digital_assemble()
    .id("mek1000:recipe_sml_drill_m")
    .duration(1500)
    .outputItems("mek1000:sml_drill_m")
    .perTick((builder) => builder.inputFE(2147483647))
    .slotName("cat0", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:energy_cataryst")
      )
    )
    .slotName("cat1", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:item_cataryst")
      )
    )
    .slotName("cat2", (builder) => builder.inputItems("mek1000:sml_drill_s"))
    .slotName("cat3", (builder) => builder.inputItems("mek1000:wtf_casing"))
    .slotName("s0", (builder) =>
      builder.inputItems("mekanism_extras:alloy_thermonuclear")
    )
    .slotName("s1", (builder) =>
      builder.inputItems("mekanism_extras:supreme_control_circuit")
    )
    .slotName("s2", (builder) =>
      builder.inputItems("mekanism_extras:supreme_control_circuit")
    )
    .slotName("s3", (builder) =>
      builder.inputItems("mekanism_extras:alloy_thermonuclear")
    )
    .slotName("s4", (builder) =>
      builder.inputItems("ae2:spatial_cell_component_128")
    )
    .slotName("s5", (builder) => builder.inputItems("mekanism:laser"))
    .slotName("s6", (builder) =>
      builder.inputItems("megacells:mega_energy_cell")
    )
    .slotName("s7", (builder) =>
      builder.inputItems("ae2:spatial_cell_component_128")
    )
    .slotName("s8", (builder) =>
      builder.inputItems("ae2:spatial_cell_component_128")
    )
    .slotName("s9", (builder) =>
      builder.inputItems("megacells:mega_energy_cell")
    )
    .slotName("s10", (builder) => builder.inputItems("mekanism:laser"))
    .slotName("s11", (builder) =>
      builder.inputItems("ae2:spatial_cell_component_128")
    )
    .slotName("s12", (builder) =>
      builder.inputItems("mekanism_extras:alloy_thermonuclear")
    )
    .slotName("s13", (builder) =>
      builder.inputItems("mekanism_extras:supreme_control_circuit")
    )
    .slotName("s14", (builder) =>
      builder.inputItems("mekanism_extras:supreme_control_circuit")
    )
    .slotName("s15", (builder) =>
      builder.inputItems("mekanism_extras:alloy_thermonuclear")
    );

  event.recipes.mek1000
    .large_digital_assemble()
    .id("mek1000:recipe_sml_drill_l")
    .duration(3000)
    .outputItems("mek1000:sml_drill_l")
    .perTick((builder) => builder.inputFE(2147483647))
    .slotName("cat0", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:energy_cataryst")
      )
    )
    .slotName("cat1", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:item_cataryst")
      )
    )
    .slotName("cat2", (builder) => builder.inputItems("mek1000:sml_drill_m"))
    .slotName("cat3", (builder) =>
      builder.inputItems("mek1000:electricity_resistant_reinforced_casing")
    )
    .slotName("s0", (builder) =>
      builder.inputItems("mekanism_extras:alloy_shining")
    )
    .slotName("s1", (builder) =>
      builder.inputItems("mekanism_extras:cosmic_control_circuit")
    )
    .slotName("s2", (builder) =>
      builder.inputItems("mekanism_extras:cosmic_control_circuit")
    )
    .slotName("s3", (builder) =>
      builder.inputItems("mekanism_extras:alloy_shining")
    )
    .slotName("s4", (builder) => builder.inputItems("mek1000:emc"))
    .slotName("s5", (builder) => builder.inputItems("mekanism:sps_casing"))
    .slotName("s6", (builder) => builder.inputItems("mekanism:sps_casing"))
    .slotName("s7", (builder) => builder.inputItems("mek1000:emc"))
    .slotName("s8", (builder) => builder.inputItems("mek1000:emc"))
    .slotName("s9", (builder) =>
      builder.inputItems("mekanism:pellet_antimatter")
    )
    .slotName("s10", (builder) =>
      builder.inputItems("mekanism:pellet_antimatter")
    )
    .slotName("s11", (builder) => builder.inputItems("mek1000:emc"))
    .slotName("s12", (builder) =>
      builder.inputItems("mekanism_extras:alloy_shining")
    )
    .slotName("s13", (builder) => builder.inputItems("mek1000:laser_glass"))
    .slotName("s14", (builder) => builder.inputItems("mek1000:laser_glass"))
    .slotName("s15", (builder) =>
      builder.inputItems("mekanism_extras:alloy_shining")
    );

  event.recipes.mek1000
    .large_digital_assemble()
    .id("mek1000:recipe_singurarity_generator")
    .duration(1000)
    .outputItems("mek1000:singurarity_generator")
    .perTick((builder) => builder.inputFE(2147483647))
    .slotName("cat0", (builder) =>
      builder.inputItems("8x experienceobelisk:calcarine_matrix")
    )
    .slotName("cat1", (builder) =>
      builder.inputItems("8x experienceobelisk:calcarine_matrix")
    )
    .slotName("cat2", (builder) =>
      builder.chance(0, (builder) => builder.inputItems("mek1000:gas_cataryst"))
    )
    .slotName("cat3", (builder) => builder.inputItems("mek1000:black_casing"))
    .slotName("s0", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_spectrum")
    )
    .slotName("s1", (builder) =>
      builder.inputItems("mekanism_extras:infinite_control_circuit")
    )
    .slotName("s2", (builder) =>
      builder.inputItems("mekanism_extras:infinite_control_circuit")
    )
    .slotName("s3", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_spectrum")
    )
    .slotName("s4", (builder) =>
      builder.inputItems(
        "compactmekanismmachines:compressed_wind_generator_x532480"
      )
    )
    .slotName("s5", (builder) => builder.inputItems("16x mek1000:the_null"))
    .slotName("s6", (builder) => builder.inputItems("16x mek1000:emc"))
    .slotName("s7", (builder) =>
      builder.inputItems(
        "compactmekanismmachines:compressed_wind_generator_x532480"
      )
    )
    .slotName("s8", (builder) =>
      builder.inputItems(
        "compactmekanismmachines:compressed_wind_generator_x532480"
      )
    )
    .slotName("s9", (builder) => builder.inputItems("16x mek1000:emc"))
    .slotName("s10", (builder) => builder.inputItems("16x mek1000:the_null"))
    .slotName("s11", (builder) =>
      builder.inputItems(
        "compactmekanismmachines:compressed_wind_generator_x532480"
      )
    )
    .slotName("s12", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_spectrum")
    )
    .slotName("s13", (builder) =>
      builder.inputItems("mekanism_extras:infinite_control_circuit")
    )
    .slotName("s14", (builder) =>
      builder.inputItems("mekanism_extras:infinite_control_circuit")
    )
    .slotName("s15", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_spectrum")
    );

  event.recipes.mek1000
    .large_digital_assemble()
    .id("mek1000:recipe_fusion_controller")
    .duration(10000)
    .outputItems("mek1000:fusion_controller")
    .perTick((builder) => builder.inputFE(2147483647))
    .slotName("cat0", (builder) =>
      builder.inputItems("64x mek1000:energy_cataryst")
    )
    .slotName("cat1", (builder) =>
      builder.inputItems("64x mek1000:item_cataryst")
    )
    .slotName("cat2", (builder) =>
      builder.inputItems("64x mek1000:gas_cataryst")
    )
    .slotName("cat3", (builder) =>
      builder.inputItems("64x mek1000:fluid_cataryst")
    )
    .slotName("s0", (builder) => builder.inputItems("mek1000:fusion_casing"))
    .slotName("s1", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_spectrum")
    )
    .slotName("s2", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_spectrum")
    )
    .slotName("s3", (builder) => builder.inputItems("mek1000:fusion_casing"))
    .slotName("s4", (builder) => builder.inputItems("16x mek1000:the_null"))
    .slotName("s5", (builder) =>
      builder.inputItems("16x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s6", (builder) =>
      builder.inputItems("16x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s7", (builder) => builder.inputItems("16x mek1000:the_null"))
    .slotName("s8", (builder) => builder.inputItems("16x mek1000:black_casing"))
    .slotName("s9", (builder) =>
      builder.inputItems("16x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s10", (builder) =>
      builder.inputItems("16x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s11", (builder) =>
      builder.inputItems("16x mek1000:black_casing")
    )
    .slotName("s12", (builder) =>
      builder.inputItems("mek1000:infinite_super_circuit")
    )
    .slotName("s13", (builder) =>
      builder.inputItems("mekanism:supercharged_coil")
    )
    .slotName("s14", (builder) =>
      builder.inputItems("mekanism:supercharged_coil")
    )
    .slotName("s15", (builder) =>
      builder.inputItems("mek1000:infinite_super_circuit")
    );

  event.recipes.mek1000
    .large_digital_assemble()
    .id("mek1000:recipe_fusion_casing")
    .duration(1000)
    .outputItems("4x mek1000:fusion_casing")
    .perTick((builder) => builder.inputFE(2147483647))
    .slotName("cat0", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:energy_cataryst")
      )
    )
    .slotName("cat1", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:item_cataryst")
      )
    )
    .slotName("cat2", (builder) =>
      builder.chance(0, (builder) => builder.inputItems("mek1000:gas_cataryst"))
    )
    .slotName("cat3", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:fluid_cataryst")
      )
    )
    .slotName("s0", (builder) => builder.inputItems("16x mek1000:black_casing"))
    .slotName("s1", (builder) =>
      builder.inputItems("16x mek1000:electricity_resistant_reinforced_casing")
    )
    .slotName("s2", (builder) => builder.inputItems("16x mek1000:wtf_casing"))
    .slotName("s3", (builder) => builder.inputItems("16x mek1000:black_casing"))
    .slotName("s4", (builder) =>
      builder.inputItems("16x mek1000:uranite_flux_casing")
    )
    .slotName("s5", (builder) =>
      builder.inputItems("mekanism_extras:infinite_control_circuit")
    )
    .slotName("s6", (builder) =>
      builder.inputItems("experienceobelisk:extravagant_agar")
    )
    .slotName("s7", (builder) =>
      builder.inputItems("16x mek1000:uranite_flux_casing")
    )
    .slotName("s8", (builder) =>
      builder.inputItems("16x mek1000:uranite_flux_casing")
    )
    .slotName("s9", (builder) => builder.inputItems("mek1000:the_null"))
    .slotName("s10", (builder) =>
      builder.inputItems("mekanism_extras:alloy_spectrum")
    )
    .slotName("s11", (builder) =>
      builder.inputItems("16x mek1000:uranite_flux_casing")
    )
    .slotName("s12", (builder) =>
      builder.inputItems("16x mek1000:black_casing")
    )
    .slotName("s13", (builder) => builder.inputItems("16x mek1000:wtf_casing"))
    .slotName("s14", (builder) =>
      builder.inputItems("16x mek1000:electricity_resistant_reinforced_casing")
    )
    .slotName("s15", (builder) =>
      builder.inputItems("16x mek1000:black_casing")
    );

  event.recipes.mek1000
    .large_digital_assemble()
    .id("mek1000:recipe_singularity")
    .duration(10000)
    .outputItems("mek1000:eternal_singularity")
    .perTick((builder) => builder.inputFE(2147483647))
    .slotName("cat0", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:energy_cataryst")
      )
    )
    .slotName("cat1", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:item_cataryst")
      )
    )
    .slotName("cat2", (builder) =>
      builder.chance(0, (builder) => builder.inputItems("mek1000:gas_cataryst"))
    )
    .slotName("cat3", (builder) =>
      builder.inputItems("mek1000:amethyst_singularity")
    )
    .slotName("s0", (builder) => builder.inputItems("mek1000:iron_singularity"))
    .slotName("s1", (builder) => builder.inputItems("mek1000:gold_singularity"))
    .slotName("s2", (builder) =>
      builder.inputItems("mek1000:lapis_singularity")
    )
    .slotName("s3", (builder) =>
      builder.inputItems("mek1000:diamond_singularity")
    )
    .slotName("s4", (builder) =>
      builder.inputItems("mek1000:emerald_singularity")
    )
    .slotName("s5", (builder) =>
      builder.inputItems("mek1000:copper_singularity")
    )
    .slotName("s6", (builder) =>
      builder.inputItems("mek1000:quartz_singularity")
    )
    .slotName("s7", (builder) =>
      builder.inputItems("mek1000:redstone_singularity")
    )
    .slotName("s8", (builder) => builder.inputItems("mek1000:coal_singularity"))
    .slotName("s9", (builder) => builder.inputItems("mek1000:tin_singularity"))
    .slotName("s10", (builder) =>
      builder.inputItems("mek1000:certusquartz_singularity")
    )
    .slotName("s11", (builder) =>
      builder.inputItems("mek1000:fluorite_singularity")
    )
    .slotName("s12", (builder) =>
      builder.inputItems("mek1000:lead_singularity")
    )
    .slotName("s13", (builder) =>
      builder.inputItems("mek1000:uranium_singularity")
    )
    .slotName("s14", (builder) =>
      builder.inputItems("mek1000:osmium_singularity")
    )
    .slotName("s15", (builder) =>
      builder.inputItems("mek1000:iridium_singularity")
    );

  event.recipes.mek1000
    .large_digital_assemble()
    .id("mek1000:recipe_creative_bin")
    .duration(1000)
    .outputItems("mekanism:creative_bin")
    .perTick((builder) => builder.inputFE(2147483647))
    .slotName("cat0", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems(
          Item.of(
            "mekanism:creative_energy_cube",
            '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}'
          )
        )
      )
    )
    .slotName("cat1", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mekanism:creative_fluid_tank")
      )
    )
    .slotName("cat2", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mekanism:creative_chemical_tank")
      )
    )
    .slotName("cat3", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("ae2:creative_energy_cell")
      )
    )
    .slotName("s0", (builder) =>
      builder.inputItems("8x mek1000:infinity_ingot")
    )
    .slotName("s1", (builder) =>
      builder.inputItems("mek1000:infinite_super_circuit")
    )
    .slotName("s2", (builder) =>
      builder.inputItems("mek1000:infinite_super_circuit")
    )
    .slotName("s3", (builder) =>
      builder.inputItems("8x mek1000:infinity_ingot")
    )
    .slotName("s4", (builder) =>
      builder.inputItems("mek1000:infinite_super_circuit")
    )
    .slotName("s5", (builder) =>
      builder.inputItems(
        "64x mekanismadvancedgenerators:big_photonic_solar_generator"
      )
    )
    .slotName("s6", (builder) =>
      builder.inputItems("64x megacells:cell_component_256m")
    )
    .slotName("s7", (builder) =>
      builder.inputItems("mek1000:infinite_super_circuit")
    )
    .slotName("s8", (builder) =>
      builder.inputItems("mek1000:infinite_super_circuit")
    )
    .slotName("s9", (builder) =>
      builder.inputItems("64x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s10", (builder) =>
      builder.inputItems("64x mekanism_extras:alloy_spectrum")
    )
    .slotName("s11", (builder) =>
      builder.inputItems("mek1000:infinite_super_circuit")
    )
    .slotName("s12", (builder) =>
      builder.inputItems("8x mek1000:infinity_ingot")
    )
    .slotName("s13", (builder) =>
      builder.inputItems("mek1000:infinite_super_circuit")
    )
    .slotName("s14", (builder) =>
      builder.inputItems("mek1000:infinite_super_circuit")
    )
    .slotName("s15", (builder) =>
      builder.inputItems("8x mek1000:infinity_ingot")
    );

  event.recipes.mek1000
    .large_digital_assemble()
    .id("mek1000:recipe_infinity_fusion_controller")
    .duration(3000)
    .outputItems("mek1000:infinity_fusion_controller")
    .perTick((builder) => builder.inputFE(2147483647))
    .slotName("cat0", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:energy_cataryst")
      )
    )
    .slotName("cat1", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:item_cataryst")
      )
    )
    .slotName("cat2", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:fluid_cataryst")
      )
    )
    .slotName("cat3", (builder) => builder.inputItems("mekanism:sps_casing"))
    .slotName("s0", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_spectrum")
    )
    .slotName("s1", (builder) =>
      builder.inputItems("16x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s2", (builder) =>
      builder.inputItems("16x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s3", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_spectrum")
    )
    .slotName("s4", (builder) =>
      builder.inputItems("64x #forge:storage_blocks/tin")
    )
    .slotName("s5", (builder) => builder.inputItems("64x mekanism:hdpe_stick"))
    .slotName("s6", (builder) => builder.inputItems("16x mek1000:laser_glass"))
    .slotName("s7", (builder) =>
      builder.inputItems("64x #forge:storage_blocks/tin")
    )
    .slotName("s8", (builder) =>
      builder.inputItems("64x #forge:storage_blocks/fluorite")
    )
    .slotName("s9", (builder) => builder.inputItems("16x mek1000:laser_glass"))
    .slotName("s10", (builder) => builder.inputItems("64x mekanism:hdpe_stick"))
    .slotName("s11", (builder) =>
      builder.inputItems("64x #forge:storage_blocks/fluorite")
    )
    .slotName("s12", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_spectrum")
    )
    .slotName("s13", (builder) =>
      builder.inputItems("16x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s14", (builder) =>
      builder.inputItems("16x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s15", (builder) =>
      builder.inputItems("16x mekanism_extras:alloy_spectrum")
    );

  event.recipes.mek1000
    .large_digital_assemble()
    .id("mek1000:recipe_dimensional_blast_furnace")
    .duration(3000)
    .outputItems("mek1000:dimensional_blast_furnace")
    .perTick((builder) => builder.inputFE(2147483647))
    .slotName("cat0", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:energy_cataryst")
      )
    )
    .slotName("cat1", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:item_cataryst")
      )
    )
    .slotName("cat2", (builder) =>
      builder.chance(0, (builder) => builder.inputItems("mek1000:gas_cataryst"))
    )
    .slotName("cat3", (builder) =>
      builder.chance(0, (builder) =>
        builder.inputItems("mek1000:fluid_cataryst")
      )
    )
    .slotName("s0", (builder) =>
      builder.inputItems("16x mek1000:electricity_resistant_reinforced_casing")
    )
    .slotName("s1", (builder) =>
      builder.inputItems("64x mekanism:quantum_entangloporter")
    )
    .slotName("s2", (builder) =>
      builder.inputItems("64x mekanism:quantum_entangloporter")
    )
    .slotName("s3", (builder) =>
      builder.inputItems("16x mek1000:electricity_resistant_reinforced_casing")
    )
    .slotName("s4", (builder) =>
      builder.inputItems("64x minecraft:blast_furnace")
    )
    .slotName("s5", (builder) =>
      builder.inputItems("16x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s6", (builder) =>
      builder.inputItems("2x advanced_ae:quantum_core")
    )
    .slotName("s7", (builder) =>
      builder.inputItems("64x minecraft:blast_furnace")
    )
    .slotName("s8", (builder) => builder.inputItems("32x mek1000:blast_coil"))
    .slotName("s9", (builder) =>
      builder.inputItems("2x advanced_ae:quantum_core")
    )
    .slotName("s10", (builder) =>
      builder.inputItems("16x mekanism_extras:infinite_control_circuit")
    )
    .slotName("s11", (builder) => builder.inputItems("32x mek1000:blast_coil"))
    .slotName("s12", (builder) =>
      builder.inputItems("16x mek1000:electricity_resistant_reinforced_casing")
    )
    .slotName("s13", (builder) =>
      builder.inputItems("64x mekanism:quantum_entangloporter")
    )
    .slotName("s14", (builder) =>
      builder.inputItems("64x mekanism:quantum_entangloporter")
    )
    .slotName("s15", (builder) =>
      builder.inputItems("16x mek1000:electricity_resistant_reinforced_casing")
    );
      
});
