ServerEvents.recipes(event => {
    let replaceGases = (id, prefix) => {
        const GAS_ID = (prefix == null) ? id : `${prefix}_${id}`
        event.remove({ id: `mekanism:infusion_conversion/${GAS_ID}/from_enriched` })
        event.custom({
            type: 'mekanism:infusion_conversion',
            input: {
                'ingredient': { 'tag': `mekanism:enriched/${id}` }
            },
            output: { 'infuse_type': `mekanism:${GAS_ID}`, 'amount': 100 }
        })
    }

    let ast_replaceGases = (id, prefix) => {
        const GAS_ID = (prefix == null) ? id : `${id}_${prefix}`
        event.remove({ id: `astral_mekanism:infuse_type/${GAS_ID}2` })
        event.custom({
            type: 'mekanism:infusion_conversion',
            input: {
                'ingredient': { 'item': `astral_mekanism:enriched_${id}` }
            },
            output: { 'infuse_type': `astral_mekanism:${GAS_ID}`, 'amount': 100 }
        })
    }

    ast_replaceGases('singularity')
    ast_replaceGases('nether_star')
    ast_replaceGases('utility', 'infuse')

    replaceGases('redstone')
    replaceGases('carbon')
    replaceGases('obsidian', 'refined')
    replaceGases('gold')
    replaceGases('tin')
    replaceGases('diamond')

    event.custom({
        type: 'mekanism:infusion_conversion',
        input: {
            'ingredient': { 'tag': "forge:ingots/tin" }
        },
        output: { 'infuse_type': `mekanism:tin`, 'amount': 10 }
    })

    event.remove({ id: `mekanism_extras:infusion_conversion/radiance/from_enriched` })
    event.custom({
        type: 'mekanism:infusion_conversion',
        input: {
            'ingredient': { 'tag': `mekanism_extras:enriched/radiance` }
        },
        output: { 'infuse_type': `mekanism_extras:radiance`, 'amount': 100 }
    })

    event.remove({ id: `mekanism_extras:infusion_conversion/thermonuclear/from_enriched` })
    event.custom({
        type: 'mekanism:infusion_conversion',
        input: {
            'ingredient': { 'tag': `mekanism_extras:enriched/thermonuclear` }
        },
        output: { 'infuse_type': `mekanism_extras:thermonuclear`, 'amount': 50 }
    })

    event.remove({ id: `mekanism_extras:infusion_conversion/shining/from_enriched` })
    event.custom({
        type: 'mekanism:infusion_conversion',
        input: {
            'ingredient': { 'tag': `mekanism_extras:enriched/shining` }
        },
        output: { 'infuse_type': `mekanism_extras:shining`, 'amount': 50 }
    })

    event.remove({ id: `mekanism_extras:infusion_conversion/spectrum/from_enriched` })
    event.custom({
        type: 'mekanism:infusion_conversion',
        input: {
            'ingredient': { 'tag': `mekanism_extras:enriched/spectrum` }
        },
        output: { 'infuse_type': `mekanism_extras:spectrum`, 'amount': 50 }
    })
})
