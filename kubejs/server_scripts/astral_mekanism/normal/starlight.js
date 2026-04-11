ServerEvents.recipes(event => {
  let starlights = [
    'coal',
    'diamond',
    'emerald',
    'fluorite',
    'lapis_lazuli',
    'quartz',
    'redstone',
    'iron',
    'gold',
    'copper',
    'tin',
    'lead',
    'uranium',
    'osmium',
    'amethyst'
  ]

  event.remove({ id: `astral_mekanism:processing_old/certus_quartz/starlight` })

  starlights.forEach(value => {
    event.remove({ id: `astral_mekanism:starlight/${value}/starlight` })
    if (value != 'lapis_lazuli') {
      event.custom({
        type: 'astral_mekanism:reconstruction',
        duration: 4000,
        fluidInput: {
          amount: 2000000000,
          fluid: 'astral_mekanism:refined_astral_ether'
        },
        gasInput: {
          amount: 50000000000000,
          gas: `mek1000:vaporized_${value}`
        },
        gasOutput: {
          amount: 1,
          gas: `mek1000:astral_valine3g`
        },
        itemInput: {
          ingredient: {
            item: 'astral_mekanism:sparkling_nova'
          }
        },
        itemNotConsumed: false,
        itemOutput: {
          item: `astral_mekanism:${value}_starlight`
        }
      })
    }
  })

  event.custom({
    type: 'astral_mekanism:reconstruction',
    duration: 4000,
    fluidInput: {
      amount: 2000000000,
      fluid: 'astral_mekanism:refined_astral_ether'
    },
    gasInput: {
      amount: 50000000000000,
      gas: `mek1000:vaporized_iridium`
    },
    gasOutput: {
      amount: 1,
      gas: `mek1000:astral_valine3g`
    },
    itemInput: {
      ingredient: {
        item: 'astral_mekanism:sparkling_nova'
      }
    },
    itemNotConsumed: false,
    itemOutput: {
      item: 'mek1000:starlight_iridium' 
    }
  })

  event.custom({
    type: 'astral_mekanism:reconstruction',
    duration: 4000,
    fluidInput: {
      amount: 2000000000,
      fluid: 'astral_mekanism:refined_astral_ether'
    },
    gasInput: {
      amount: 50000000000000,
      gas: `mek1000:vaporized_lapis`
    },
    gasOutput: {
      amount: 1,
      gas: `mek1000:astral_valine3g`
    },
    itemInput: {
      ingredient: {
        item: 'astral_mekanism:sparkling_nova'
      }
    },
    itemNotConsumed: false,
    itemOutput: {
      item: 'astral_mekanism:lapis_lazuli_starlight' 
    }
  })
})
