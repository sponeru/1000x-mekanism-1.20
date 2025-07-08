ServerEvents.recipes(event => {
    event.shapeless(Item.of("guideme:guide", '{guideId:"mek1000:guide"}'),["minecraft:book","minecraft:red_dye","minecraft:gray_dye"]);
})

PlayerEvents.loggedIn(event => {
    if (event.player.persistentData.IsEarnStarterItem == null) {
        event.player.give(Item.of("guideme:guide", '{guideId:"mek1000:guide"}'))
        event.player.persistentData.IsEarnStarterItem = true  
    }
})