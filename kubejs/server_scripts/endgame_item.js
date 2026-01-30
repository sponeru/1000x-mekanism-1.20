ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "itemInput": { "ingredient": { "item": 'evolvedmekanism:ingot_plaslitherite' } },
        "gasInput": { "amount": 100, "gas": "mekanism:antimatter" },
        "output": { "item": 'mek1000:valine3g_ingot_0' }, "duration": 4000
    })
})