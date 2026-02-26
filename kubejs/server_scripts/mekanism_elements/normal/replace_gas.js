ServerEvents.recipes(event => {
    event.remove({id:"mekanismelements:chemical_infusing/aqua_regia"})
    event.remove({id:"mekanismelements:chemical_infusing/ammonia"})
    event.remove({id:"mekanismelements:chemical_infusing/hydrogen_cyanide"})
    event.remove({id:"mekanismelements:chemical_infusing/ammonium_nitrate"})
    event.remove({id:"mekanismelements:chemical_infusing/dissolved_spent_nuclear_waste"})
    event.remove({id:"mekanismelements:chemical_infusing/nitrogen_dioxide"})
    event.remove({id:"mekanismelements:chemical_infusing/nitric_oxide"})
    event.remove({id:"mekanismelements:chemical_infusing/nitric_acid"})

    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 1,
            "gas": "mekanismelements:methane"
        },
        "rightInput": {
            "amount": 1,
            "gas": "astral_mekanism:ammonia"
        },
        "output": {
            "gas": "mekanismelements:hydrogen_cyanide",
            "amount": 1
        }
    }).id('mek1000:hydrogen_cyanide')

    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 1,
            "gas": "astral_mekanism:nitric_acid"
        },
        "rightInput": {
            "amount": 1,
            "gas": "astral_mekanism:ammonia"
        },
        "output": {
            "gas": "mekanismelements:ammonium_nitrate",
            "amount": 1
        }
    }).id('mek1000:ammonium_nitrate')
})