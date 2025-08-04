//packmode: normal

ServerEvents.recipes(event => {

    let stack_upgrade = ['sophisticatedstorage:stack_upgrade_tier_1', 'sophisticatedstorage:stack_upgrade_tier_1_plus', 'sophisticatedstorage:stack_upgrade_tier_2', 'sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedstorage:stack_upgrade_tier_5', 'sophisticatedstorage:stack_upgrade_omega_tier']

    stack_upgrade.forEach(item => {
        event.remove({ output: item })
    })

    event.shaped('3x sophisticatedstorage:stack_upgrade_tier_5', [
        'CCC',
        'CBC',
        'CCC'
    ], {
        B: 'sophisticatedstorage:upgrade_base',
        C: '#forge:chests/wooden'
    })


    event.shaped('sophisticatedstorage:stack_upgrade_omega_tier', [
        'CCC',
        'CSC',
        'CCC'
    ], {
        S: 'minecraft:nether_star',
        C: 'sophisticatedstorage:stack_upgrade_tier_5'
    })
})