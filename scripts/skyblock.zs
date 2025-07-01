var outSkyblockModeItem = [
<item:exdeorum:wooden_hammer>,
<item:exdeorum:stone_hammer>,
<item:exdeorum:golden_hammer>,
<item:exdeorum:iron_hammer>,
<item:exdeorum:diamond_hammer>,
<item:exdeorum:netherite_hammer>,
<item:exdeorum:crushed_end_stone>,
<item:exdeorum:crushed_deepslate>,
<item:exdeorum:compressed_dirt>,
<item:exdeorum:compressed_wooden_hammer>,
<item:exdeorum:compressed_iron_hammer>,
<item:exdeorum:compressed_diamond_hammer>,
<item:exdeorum:compressed_netherite_hammer>,
<item:exdeorum:compressed_stone_hammer>,
<item:exdeorum:compressed_golden_hammer>,
<item:exdeorum:compressed_cobblestone>,
<item:exdeorum:compressed_diorite>,
<item:exdeorum:compressed_granite>,
<item:exdeorum:compressed_andesite>,
<item:exdeorum:compressed_gravel>,
<item:exdeorum:compressed_sand>,
<item:exdeorum:compressed_dust>,
<item:exdeorum:compressed_red_sand>,
<item:exdeorum:compressed_deepslate>,
<item:exdeorum:compressed_cobbled_deepslate>,
<item:exdeorum:compressed_netherrack>,
<item:exdeorum:compressed_blackstone>,
<item:exdeorum:compressed_end_stone>,
<item:exdeorum:compressed_crushed_deepslate>,
<item:exdeorum:compressed_crushed_blackstone>,
<item:exdeorum:compressed_crushed_netherrack>,
<item:exdeorum:compressed_soul_sand>,
<item:exdeorum:compressed_crushed_end_stone>,
<item:exdeorum:compressed_moss_block>,
<item:exdeorum:dust>,
<item:exdeorum:crushed_netherrack>,
<item:exdeorum:crushed_blackstone>
];

mods.recipestages.Recipes.setRecipeStageByMod("skyblock", "exdeorum");

for item in outSkyblockModeItem {
    mods.recipestages.Recipes.clearRecipeStage(item);
}