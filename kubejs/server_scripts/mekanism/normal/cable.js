//packmode: normal

ServerEvents.recipes(event => {

    event.remove({ output: 'mekanism:basic_universal_cable' });
    event.remove({ output: 'mekanism:advanced_universal_cable' });
    event.remove({ output: 'mekanism:elite_universal_cable' });
    event.remove({ output: 'mekanism:ultimate_universal_cable' });

    let mekaCable = (output, cable, upgladeMaterial) => {
        event.remove({ output: output })
        event.shaped(`8x ${output}`, [
            'CCC',
            'CUC',
            'CCC'
        ], {
            C: cable,
            U: upgladeMaterial
        })
    }
    mekaCable('mekanism_extras:absolute_universal_cable', 'iron_ingot', 'redstone')
    mekaCable('mekanism_extras:supreme_universal_cable', 'mekanism_extras:absolute_universal_cable', 'mekanism:alloy_infused')
    mekaCable('mekanism_extras:cosmic_universal_cable', 'mekanism_extras:supreme_universal_cable', 'mekanism:alloy_reinforced')
    mekaCable('mekanism_extras:infinite_universal_cable', 'mekanism_extras:cosmic_universal_cable', 'mekanism:alloy_atomic')

})