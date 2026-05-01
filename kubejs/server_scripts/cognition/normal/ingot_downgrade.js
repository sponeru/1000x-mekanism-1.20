ServerEvents.recipes(event => {
  event.recipes.mekanism.enriching('3x igleelib:lavium_ingot', 'igleelib:derium_ingot')
  event.recipes.mekanism.enriching('3x igleelib:blazum_ingot', 'igleelib:lavium_ingot')
  event.recipes.mekanism.enriching('3x igleelib:modium_ingot', 'igleelib:blazum_ingot')

  event.recipes.mekanism.enriching('3x igleelib:lavium_block', 'igleelib:derium_block')
  event.recipes.mekanism.enriching('3x igleelib:blazum_block', 'igleelib:lavium_block')
  event.recipes.mekanism.enriching('3x igleelib:modium_block', 'igleelib:blazum_block')

  event.shapeless('9x igleelib:modium_ingot',['igleelib:modium_block'])
  event.shapeless('9x igleelib:blazum_ingot',['igleelib:blazum_block'])
  event.shapeless('9x igleelib:lavium_ingot',['igleelib:lavium_block'])
  event.shapeless('9x igleelib:derium_ingot',['igleelib:derium_block'])
})
