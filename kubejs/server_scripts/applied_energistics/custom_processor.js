ServerEvents.recipes(event => {
    let stamper = (output,input,mold) => {
        event.custom(
            {
                "type": "mekmm:stamper",
                "input": {
                    "ingredient": {
                        "count": 1,
                        "item": input
                    }
                },
                "mold": {
                    "ingredient": {
                        "item": mold
                    }
                },
                "output": {
                    "count": 1,
                    "item": output
                }
            }
        )
    }

    stamper('mek1000:printed_flux_processor','fluxnetworks:flux_block','advanced_ae:quantum_processor_press')
    stamper('mek1000:printed_cognitive_processor','experienceobelisk:primordial_assembly','advanced_ae:quantum_processor_press')
    stamper('mek1000:printed_echo_processor','minecraft:echo_shard','advanced_ae:quantum_processor_press')
    stamper('mek1000:printed_valinium_processor','mek1000:valine3g_ingot_7','advanced_ae:quantum_processor_press')
    stamper('mek1000:printed_solar_grade_silicon','mek1000:solar_grade_silicon','ae2:silicon_press')

    event.custom({
      type: "advanced_ae:reaction",
      energy: 200000,
      fluid: {
        fluidStack: {
          Amount: 20,
          FluidName: "mek1000:condenced_lux",
        },
      },
      input_items: [
        {
          amount: 1,
          ingredient: {
            item: 'mek1000:printed_flux_processor',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'mek1000:printed_solar_grade_silicon',
          },
        },        
        {
          amount: 1,
          ingredient: {
            item: 'evolvedmekanism:alloy_hypercharged',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'ae2:cell_component_16k',
          },
        },
      ],
      output: {
        "#": 1,
        "#c": "ae2:i",
        id: 'mek1000:flux_processor',
      },
    });

    event.custom({
      type: "advanced_ae:reaction",
      energy: 200000,
      fluid: {
        fluidStack: {
          Amount: 20,
          FluidName: "mek1000:condenced_lux",
        },
      },
      input_items: [
        {
          amount: 1,
          ingredient: {
            item: 'mek1000:printed_cognitive_processor',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'mek1000:printed_solar_grade_silicon',
          },
        },        
        {
          amount: 1,
          ingredient: {
            item: 'evolvedmekanism:alloy_subatomic',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'ae2:cell_component_64k',
          },
        },
      ],
      output: {
        "#": 1,
        "#c": "ae2:i",
        id: 'mek1000:cognitive_processor',
      },
    });

    event.custom({
      type: "advanced_ae:reaction",
      energy: 200000,
      fluid: {
        fluidStack: {
          Amount: 20,
          FluidName: "mek1000:condenced_lux",
        },
      },
      input_items: [
        {
          amount: 1,
          ingredient: {
            item: 'mek1000:printed_echo_processor',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'mek1000:printed_solar_grade_silicon',
          },
        },        
        {
          amount: 1,
          ingredient: {
            item: 'evolvedmekanism:alloy_singular',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'ae2:cell_component_256k',
          },
        },
      ],
      output: {
        "#": 1,
        "#c": "ae2:i",
        id: 'mek1000:echo_processor',
      },
    });

    event.custom({
      type: "advanced_ae:reaction",
      energy: 200000,
      fluid: {
        fluidStack: {
          Amount: 20,
          FluidName: "mek1000:condenced_lux",
        },
      },
      input_items: [
        {
          amount: 1,
          ingredient: {
            item: 'mek1000:printed_valinium_processor',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'mek1000:printed_solar_grade_silicon',
          },
        },        
        {
          amount: 1,
          ingredient: {
            item: 'evolvedmekanism:alloy_exoversal',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: 'megacells:cell_component_256m',
          },
        },
      ],
      output: {
        "#": 1,
        "#c": "ae2:i",
        id: 'mek1000:valinium_processor',
      },
    });

})