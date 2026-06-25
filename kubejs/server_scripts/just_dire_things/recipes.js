ServerEvents.recipes((event) => {
  [
    "justdirethings:gooblock_tier1",
    "justdirethings:gooblock_tier2",
    "justdirethings:gooblock_tier3",
    "justdirethings:gooblock_tier4",
    "justdirethings:paradoxmachine",
  ].forEach((output) => {
    event.remove({ output });
  });

  [
    ["4x justdirethings:raw_ferricore", "#forge:storage_blocks/iron"],
    ["4x justdirethings:raw_blazegold", "#forge:storage_blocks/gold"],
    ["4x justdirethings:raw_eclipsealloy", "#forge:storage_blocks/netherite"],
    ["4x justdirethings:celestigem", "#forge:storage_blocks/diamond"],
  ].forEach(([output, input]) => {
    event.recipes.mekanism.metallurgic_infusing(
      output,
      input,
      "100x astral_mekanism:utility_infuse"
    );
  });
});
