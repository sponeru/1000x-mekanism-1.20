ServerEvents.recipes(event => {
    event.remove({output:'ae2_overclocked:overclock_card'})
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
            item: 'mekanism_empowered:upgrade_empowered_speed',
          },
        },
        {
          amount: 8,
          ingredient: {
            item: 'mekanism_empowered:upgrade_empowered_energy',
          },
        },
      ],
      output: {
        "#": 1,
        "#c": "ae2:i",
        id: 'ae2_overclocked:overclock_card',
      },
    });

    event.remove({output:'ae2_overclocked:parallel_card_1024x'})
    event.shaped(Item.of('ae2_overclocked:parallel_card_1024x'), [
        'CCC',
        'CMC',
        'CCC'
    ], {
        C: 'ae2_overclocked:parallel_card_64x',
        M: 'extendedae_plus:infinity_core'
    })

    event.remove({output:'ae2_overclocked:parallel_card_max'})
    event.shaped(Item.of('ae2_overclocked:parallel_card_max'), [
        'CCC',
        'CMC',
        'CCC'
    ], {
        C: 'ae2_overclocked:parallel_card_1024x',
        M: 'extendedae_plus:entity_speed_ticker'
    })

    event.remove({output:'extendedae_plus:entity_speed_ticker'})
    event.shaped(Item.of('extendedae_plus:entity_speed_ticker'), [
        'QSQ',
        'CMC',
        'QCQ'
    ], {
        S: 'extendedae_plus:infinity_core',
        C: Item.of('extendedae_plus:entity_speed_card', '{"EAS:mult":2}'),
        Q: 'advanced_ae:quantum_storage_256',
        M: 'astral_mekanism:illusion_control_circuit'
    })

    event.remove({output:'ae2_overclocked:capacity_card'})
    event.shaped(Item.of('ae2_overclocked:capacity_card'), [
        'CCC',
        'CMC',
        'CCC'
    ], {
        M: 'ae2:basic_card',
        C: '#forge:chests/wooden'
    })

 })