ServerEvents.recipes(event => {
  let stamper = (output, input, mold) => {
    event.custom({
      type: 'mekmm:stamper',
      input: {
        ingredient: {
          count: 1,
          item: input
        }
      },
      mold: {
        ingredient: {
          item: mold
        }
      },
      output: {
        count: 1,
        item: output
      }
    })
  }

  stamper(
    'mek1000:printed_flux_processor',
    'fluxnetworks:flux_block',
    'advanced_ae:quantum_processor_press'
  )
  stamper(
    'mek1000:printed_cognitive_processor',
    'experienceobelisk:primordial_assembly',
    'advanced_ae:quantum_processor_press'
  )
  stamper(
    'mek1000:printed_echo_processor',
    'minecraft:echo_shard',
    'advanced_ae:quantum_processor_press'
  )
  stamper(
    'mek1000:printed_valinium_processor',
    'mek1000:valine3g_ingot_7',
    'advanced_ae:quantum_processor_press'
  )
  stamper(
    'mek1000:printed_solar_grade_silicon',
    'mek1000:solar_grade_silicon',
    'ae2:silicon_press'
  )

  let inscriber = (result, top, middle) => {
    event.custom({
      type: 'ae2:inscriber',
      mode: 'inscribe',
      result: {
        item: result
      },
      ingredients: {
        top: {
          item: top
        },
        middle: {
          item: middle
        },
      }
    })
  }

  event.recipes.mekanism.enriching('mek1000:compressed_flux','64x fluxnetworks:flux_block')
  event.recipes.mekanism.enriching('mek1000:compressed_primodial','64x experienceobelisk:primordial_assembly')
  event.recipes.mekanism.enriching('mek1000:compressed_echo','64x minecraft:echo_shard')
  event.recipes.mekanism.enriching('mek1000:compressed_valinium','64x mek1000:valine3g_ingot_7')
  
  inscriber(
    'mek1000:super_flux_processor',
    'mek1000:super_press',
    'mek1000:compressed_flux',
  )

  inscriber(
    'mek1000:super_cognitive_processor',
    'mek1000:super_press',
    'mek1000:compressed_primodial',
  )

  inscriber(
    'mek1000:super_echo_processor',
    'mek1000:super_press',
    'mek1000:compressed_echo',
  )

  inscriber(
    'mek1000:super_valinium_processor',
    'mek1000:super_press',
    'mek1000:compressed_valinium',
  )

  event.recipes.mekanism.enriching('mek1000:compressed_diamond','64x mekanism:enriched_diamond')
  event.recipes.mekanism.enriching('mek1000:compressed_gold','64x minecraft:gold_ingot')
  event.recipes.mekanism.enriching('mek1000:compressed_certus_quartz','64x ae2:certus_quartz_crystal')
  event.recipes.mekanism.enriching('mek1000:compressed_redstone_crystal','64x appflux:charged_redstone')
  event.recipes.mekanism.enriching('mek1000:compressed_quantum_alloy','64x advanced_ae:quantum_alloy')
  event.recipes.mekanism.enriching('mek1000:compressed_sky_steel','64x megacells:sky_steel_ingot')

  inscriber(
    'mek1000:super_engineering_processor',
    'mek1000:super_press',
    'mek1000:compressed_diamond',
  )

  inscriber(
    'mek1000:super_logic_processor',
    'mek1000:super_press',
    'mek1000:compressed_gold',
  )

  inscriber(
    'mek1000:super_calculation_processor',
    'mek1000:super_press',
    'mek1000:compressed_certus_quartz',
  )

  inscriber(
    'mek1000:super_energy_processor',
    'mek1000:super_press',
    'mek1000:compressed_redstone_crystal',
  )

  inscriber(
    'mek1000:super_quantum_processor',
    'mek1000:super_press',
    'mek1000:compressed_quantum_alloy',
  )

  inscriber(
    'mek1000:super_accumulation_processor',
    'mek1000:super_press',
    'mek1000:compressed_sky_steel',
  )

  event.shapeless('64x mek1000:flux_processor',['mek1000:super_flux_processor'])
  event.shapeless('64x mek1000:cognitive_processor',['mek1000:super_cognitive_processor'])
  event.shapeless('64x mek1000:echo_processor',['mek1000:super_echo_processor'])
  event.shapeless('64x mek1000:valinium_processor',['mek1000:super_valinium_processor'])

  event.shapeless('64x ae2:logic_processor',['mek1000:super_logic_processor'])
  event.shapeless('64x ae2:calculation_processor',['mek1000:super_calculation_processor'])
  event.shapeless('64x ae2:engineering_processor',['mek1000:super_engineering_processor'])
  event.shapeless('64x appflux:energy_processor',['mek1000:super_energy_processor'])
  event.shapeless('64x advanced_ae:quantum_processor',['mek1000:super_quantum_processor'])
  event.shapeless('64x megacells:accumulation_processor',['mek1000:super_accumulation_processor'])

  event.custom({
    type: 'advanced_ae:reaction',
    energy: 200000,
    fluid: {
      fluidStack: {
        Amount: 20,
        FluidName: 'mek1000:condenced_lux'
      }
    },
    input_items: [
      {
        amount: 1,
        ingredient: {
          item: 'mek1000:printed_flux_processor'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'mek1000:printed_solar_grade_silicon'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'evolvedmekanism:alloy_hypercharged'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'ae2:cell_component_16k'
        }
      }
    ],
    output: {
      '#': 1,
      '#c': 'ae2:i',
      id: 'mek1000:flux_processor'
    }
  })

  event.custom({
    type: 'advanced_ae:reaction',
    energy: 200000,
    fluid: {
      fluidStack: {
        Amount: 20,
        FluidName: 'mek1000:condenced_lux'
      }
    },
    input_items: [
      {
        amount: 1,
        ingredient: {
          item: 'mek1000:printed_cognitive_processor'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'mek1000:printed_solar_grade_silicon'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'evolvedmekanism:alloy_subatomic'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'ae2:cell_component_64k'
        }
      }
    ],
    output: {
      '#': 1,
      '#c': 'ae2:i',
      id: 'mek1000:cognitive_processor'
    }
  })

  event.custom({
    type: 'advanced_ae:reaction',
    energy: 200000,
    fluid: {
      fluidStack: {
        Amount: 20,
        FluidName: 'mek1000:condenced_lux'
      }
    },
    input_items: [
      {
        amount: 1,
        ingredient: {
          item: 'mek1000:printed_echo_processor'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'mek1000:printed_solar_grade_silicon'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'evolvedmekanism:alloy_singular'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'ae2:cell_component_256k'
        }
      }
    ],
    output: {
      '#': 1,
      '#c': 'ae2:i',
      id: 'mek1000:echo_processor'
    }
  })

  event.custom({
    type: 'advanced_ae:reaction',
    energy: 200000,
    fluid: {
      fluidStack: {
        Amount: 20,
        FluidName: 'mek1000:condenced_lux'
      }
    },
    input_items: [
      {
        amount: 1,
        ingredient: {
          item: 'mek1000:printed_valinium_processor'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'mek1000:printed_solar_grade_silicon'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'evolvedmekanism:alloy_exoversal'
        }
      },
      {
        amount: 1,
        ingredient: {
          item: 'megacells:cell_component_256m'
        }
      }
    ],
    output: {
      '#': 1,
      '#c': 'ae2:i',
      id: 'mek1000:valinium_processor'
    }
  })
})
