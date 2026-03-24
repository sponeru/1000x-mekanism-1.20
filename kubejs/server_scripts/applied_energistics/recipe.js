ServerEvents.recipes(event => {

    let p2p = ['ae2:redstone_p2p_tunnel', 'ae2:item_p2p_tunnel', 'ae2:fluid_p2p_tunnel', 'ae2:fe_p2p_tunnel', 'ae2:light_p2p_tunnel', 'appmek:chemical_p2p_tunnel', 'mae2:pattern_p2p_tunnel', 'mae2:pattern_multi_p2p_tunnel', 'mae2:redstone_multi_p2p_tunnel', 'mae2:fe_multi_p2p_tunnel', 'mae2:fluid_multi_p2p_tunnel', 'mae2:item_multi_p2p_tunnel']
    let p2p2 = ['ae2:me_p2p_tunnel', 'ae2:redstone_p2p_tunnel', 'ae2:item_p2p_tunnel', 'ae2:fluid_p2p_tunnel', 'ae2:fe_p2p_tunnel', 'ae2:light_p2p_tunnel', 'appmek:chemical_p2p_tunnel', 'mae2:pattern_p2p_tunnel', 'mae2:pattern_multi_p2p_tunnel', 'mae2:redstone_multi_p2p_tunnel', 'mae2:fe_multi_p2p_tunnel', 'mae2:fluid_multi_p2p_tunnel', 'mae2:item_multi_p2p_tunnel']

    p2p.forEach(item =>{
      event.remove({output:item})
    })

    p2p2.forEach(item => {
        p2p2.forEach(item2 =>{
          event.stonecutting(item2, item)
        })
    })

    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": { "ingredient": { "item": 'mekanism:alloy_atomic' } },
        "gasInput": { "amount": 100, "gas": "mekanism:antimatter" },
        "output": { "item": 'megacells:cell_component_256m' }, "duration": 1000000
    })

    event.recipes.mekanismMetallurgicInfusing('16x ae2:fluix_smart_cable', 'ae2:fluix_block', '100x mekanism:redstone')

    event.recipes.mekanismMetallurgicInfusing('ae2:mysterious_cube', 'ae2:chiseled_quartz_block', '1000x mekanism:tin')

    event.recipes.mekanismMetallurgicInfusing('ae2:sky_dust', 'fluxnetworks:flux_dust', '10x mekanism:diamond')


    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 100,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "tag": 'forge:storage_blocks/charged_redstone'
            }
        },
        "output": {
            "count": 9,
            "item": 'appflux:printed_energy_processor'
        }
    })

    event.shaped('mae2a:infinite_dyes_cell', [
        'GBG',
        'BCB',
        'DDD'
    ], {
        G: 'ae2:quartz_glass',
        B: 'mekanism:dye_base',
        C: 'ae2:cell_component_16k',
        D: 'minecraft:diamond'
    })

    event.shaped('mek1000:rainbow_concrete_drive', [
        'GBG',
        'BCB',
        'DDD'
    ], {
        G: 'ae2:quartz_glass',
        B: 'minecraft:white_concrete',
        C: 'mae2a:infinite_dyes_cell',
        D: 'minecraft:diamond'
    })

    event.shaped('mek1000:stone_drive', [
        'GBG',
        'BCB',
        'DDD'
    ], {
        G: 'ae2:quartz_glass',
        B: 'minecraft:cobblestone',
        C: 'astral_mekanism:transformer',
        D: 'ae2:cell_component_16k'
    })

    event.shaped('mek1000:chisel_building_block_drive', [
        'GBG',
        'BCB',
        'DDD'
    ], {
        G: 'ae2:quartz_glass',
        B: 'chipped:alchemy_bench',
        C: 'ae2:cell_component_16k',
        D: 'rechiseled:chisel'
    })

    event.custom({
      type: "advanced_ae:reaction",
      energy: 5000000,
      fluid: {
        fluidStack: {
          Amount: 16000,
          FluidName: "advanced_ae:quantum_infusion_source",
        },
      },
      input_items: [
        {
          amount: 1,
          ingredient: {
            item: 'mek1000:ultimate_storage_housing',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'mek1000:stone_drive',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'emextras:cosmic_dense_smelting_factory',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'emextras:cosmic_dense_crushing_factory',
          },
        },
        {
          amount: 16,
          ingredient: {
            item: 'mek1000:library_of_babel',
          },
        },
        {
          amount: 32,
          ingredient: {
            item: 'advanced_ae:quantum_processor',
          },
        },
        {
          amount: 16,
          ingredient: {
            item: 'mekanism_empowered:upgrade_empowered_speed',
          },
        },
        {
          amount: 16,
          ingredient: {
            item: 'mekanism_empowered:upgrade_empowered_energy',
          },
        },
      ],
      output: {
        "#": 1,
        "#c": "ae2:i",
        id: 'mek1000:stonework_drive',
      },
    });


    event.shaped(Item.of("mek1000:charged_redstone_block"), [
        'CCC',
        'CCC',
        'CCC'
    ], {
        C: 'appflux:charged_redstone'
    })

    event.remove({ output: 'expatternprovider:circuit_cutter' })
    event.shaped(Item.of('expatternprovider:circuit_cutter'), [
        'GCG',
        'BMD',
        'ATE'
    ], {
        A: 'advanced_ae:quantum_processor',
        B: 'ae2:logic_processor',
        C: 'megacells:accumulation_processor',
        D: 'appflux:energy_processor',
        E: 'ae2:engineering_processor',
        G: 'expatternprovider:assembler_matrix_glass',
        M: 'minecraft:stonecutter',
        T: 'mekanism:elite_fluid_tank'
    })

    event.remove({ output: 'expatternprovider:fishbig' })
    event.remove({ output: 'mae2a:pattern_provider_upgrade' })
    event.remove({ output: 'mae2a:pattern_provider_plus' })

    event.recipes.mekanism.crushing("ae2:ender_dust", "minecraft:ender_pearl");

    event.custom({
      type: "advanced_ae:reaction",
      energy: 5000000,
      fluid: {
        fluidStack: {
          Amount: 16000,
          FluidName: "advanced_ae:quantum_infusion_source",
        },
      },
      input_items: [
        {
          amount: 8,
          ingredient: {
            item: "ae2_mega_things:mega_item_disk_housing",
          },
        },
        {
          amount: 8,
          ingredient: {
            item: "ae2_mega_things:mega_fluid_disk_housing",
          },
        },
        {
          amount: 8,
          ingredient: {
            item: "ae2_mega_things:mega_chemical_disk_housing",
          },
        },
        {
          amount: 64,
          ingredient: {
            item: "advanced_ae:quantum_alloy",
          },
        },
      ],
      output: {
        "#": 1,
        "#c": "ae2:i",
        id: "mek1000:ultimate_storage_housing",
      },
    });

    event.custom({
      type: "advanced_ae:reaction",
      energy: 5000000,
      fluid: {
        fluidStack: {
          Amount: 16000,
          FluidName: "advanced_ae:quantum_infusion_source",
        },
      },
      input_items: [
        {
          amount: 32,
          ingredient: {
            item: "megacells:cell_component_256m",
          },
        },
        {
          amount: 1,
          ingredient: {
            item: "megacells:bulk_cell_component",
          },
        },
      ],
      output: {
        "#": 1,
        "#c": "ae2:i",
        id: "mek1000:infinity_item_component",
      },
    });

    event.custom({
      type: "advanced_ae:reaction",
      energy: 5000000,
      fluid: {
        fluidStack: {
          Amount: 16000,
          FluidName: "advanced_ae:quantum_infusion_source",
        },
      },
      input_items: [
        {
          amount: 32,
          ingredient: {
            item: "megacells:cell_component_256m",
          },
        },
        {
          amount: 1,
          ingredient: {
            item: "mekanism_extras:infinite_fluid_tank",
          },
        },
      ],
      output: {
        "#": 1,
        "#c": "ae2:i",
        id: "mek1000:infinity_fluid_component",
      },
    });

    event.custom({
      type: "advanced_ae:reaction",
      energy: 5000000,
      fluid: {
        fluidStack: {
          Amount: 16000,
          FluidName: "advanced_ae:quantum_infusion_source",
        },
      },
      input_items: [
        {
          amount: 32,
          ingredient: {
            item: "megacells:cell_component_256m",
          },
        },
        {
          amount: 1,
          ingredient: {
            item: "mekanism_extras:infinite_chemical_tank",
          },
        },
      ],
      output: {
        "#": 1,
        "#c": "ae2:i",
        id: "mek1000:infinity_chemical_component",
      },
    });

    event.shapeless("mek1000:item_disk_drive_infinity", [
      "mek1000:ultimate_storage_housing",
      "mek1000:infinity_item_component",
    ]);

    event.shapeless("mek1000:fluid_disk_drive_infinity", [
      "mek1000:ultimate_storage_housing",
      "mek1000:infinity_fluid_component",
    ]);

    event.shapeless("mek1000:chemical_disk_drive_infinity", [
      "mek1000:ultimate_storage_housing",
      "mek1000:infinity_chemical_component",
    ]);

    event.remove({id:"extendedae_plus:transform/oblivion_singularity"})
    event.remove({id:"extendedae_plus:entity_speed_card_2x"})

  })