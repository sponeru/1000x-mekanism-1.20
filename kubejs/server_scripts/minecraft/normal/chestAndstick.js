ServerEvents.recipes((event) => {
  event.shaped(Item.of("minecraft:stick", 16), ["   ", " A ", " A "], {
    A: "#minecraft:logs",
  });
    
  event.shaped(Item.of("minecraft:chest", 4), ["AAA", "A A", "AAA"], {
    A: "#minecraft:logs",
  });
});
