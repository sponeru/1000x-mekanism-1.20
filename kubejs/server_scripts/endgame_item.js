ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": { "ingredient": { "item": 'evolvedmekanism:ingot_plaslitherite' } },
        "gasInput": { "amount": 100, "gas": "mekanism:antimatter" },
        "output": { "item": 'mek1000:valine3g_ingot_0' }, "duration": 4000
    })

  event
    .custom({
      type: "mekanism:reaction",
      itemInput: {
        amount: 8,
        ingredient: {
          item: 'ae2:silicon',
        },
      },
      fluidInput: {
        amount: 500,
        fluid: "mekanism:lithium",
      },
      gasInput: {
        amount: 100,
        gas: "mekanismelements:hydrogen_cyanide",
      },
      energyRequired: 5000,
      duration: 400,
      itemOutput: {
        item: 'mek1000:solar_grade_silicon',
        count: 1,
      },
    })
    .id("mek1000:solar_grade_silicon");


    event.custom({
        "type": "hyperdaimc:shaped_desk",
        "key": {
            "C": {
                "item": 'mek1000:infinity_chemical_component'
            },
            "F": {
                "item": 'mek1000:infinity_fluid_component'
            },
            "I": {
                "item": 'mek1000:infinity_item_component'
            },
            "N": {
                "item": 'functionalstorage:netherite_upgrade'
            },
            "B": {
                "item": 'extendedae_plus:infinity_core'
            },
            "1": {
                "item": 'expandedstorage:netherite_chest'
            },
            "0": {
                "item": 'evolvedmekanism:multiversal_personal_chest'
            },
            "L": {
                "item": 'astral_mekanism:illusion_control_circuit'
            },
            "Q": {
                "item": 'evolvedmekanism:qio_drive_black_hole'
            },
            "5": {
                "item": 'functionalstorage:armory_cabinet'
            },
            "6": {
                "item": 'functionalstorage:simple_compacting_drawer'
            },
            "7": {
                "item": 'functionalstorage:storage_controller'
            },
            "8": {
                "item": 'functionalstorage:compacting_drawer'
            },
        },
        "pattern": [
            "CFINNNIFC",
            "FIBBBBBIF",
            "IB11011BI",
            "NB1L5L1BN",
            "NB06Q80BN",
            "NB1L7L1BN",
            "IB11011BI",
            "FIBBBBBIF",
            "CFINNNIFC"
        ],
        "result": {
            "item": 'functionalstorage:max_storage_upgrade'
        }
    })
})