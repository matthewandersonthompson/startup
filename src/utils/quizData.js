export const quizzes = {
    // QUIZ 1: Combat Mechanics (10 Questions)
    1: [
      {
        question: "What action allows a player to move away from an enemy without provoking an opportunity attack?",
        answers: [
          { text: "Dash", value: "dash" },
          { text: "Dodge", value: "dodge" },
          { text: "Disengage", value: "disengage" },
          { text: "Defend", value: "defend" },
        ],
        correctAnswer: "disengage",
      },
      {
        question: "What is the standard number of attacks a creature can make in one turn unless specified otherwise?",
        answers: [
          { text: "1", value: "1" },
          { text: "2", value: "2" },
          { text: "3", value: "3" },
          { text: "Unlimited", value: "unlimited" },
        ],
        correctAnswer: "1",
      },
      {
        question: "If a character is unconscious, what condition automatically applies?",
        answers: [
          { text: "Resistance to all damage", value: "resistance" },
          { text: "Advantage on attack rolls against them", value: "advantage" },
          { text: "Disadvantage on saving throws", value: "disadvantage" },
          { text: "Immunity to critical hits", value: "immunity" },
        ],
        correctAnswer: "advantage",
      },
      {
        question: "What type of damage bypasses resistance from non-magical attacks?",
        answers: [
          { text: "Fire", value: "fire" },
          { text: "Psychic", value: "psychic" },
          { text: "Radiant", value: "radiant" },
          { text: "Magic weapon damage", value: "magic" },
        ],
        correctAnswer: "magic",
      },
      {
        question: "What is the default AC for a character with no armor or shield and a Dexterity modifier of +0?",
        answers: [
          { text: "8", value: "8" },
          { text: "10", value: "10" },
          { text: "12", value: "12" },
          { text: "14", value: "14" },
        ],
        correctAnswer: "10",
      },
      {
        question: "When does a player roll initiative?",
        answers: [
          { text: "At the start of combat", value: "start_combat" },
          { text: "When a trap is triggered", value: "trap" },
          { text: "During a short rest", value: "short_rest" },
          { text: "After taking damage", value: "taking_damage" },
        ],
        correctAnswer: "start_combat",
      },
      {
        question: "What is the range for a standard melee attack?",
        answers: [
          { text: "5 feet", value: "5" },
          { text: "10 feet", value: "10" },
          { text: "15 feet", value: "15" },
          { text: "20 feet", value: "20" },
        ],
        correctAnswer: "5",
      },
      {
        question: "How does flanking affect attack rolls in combat?",
        answers: [
          { text: "No effect", value: "no_effect" },
          { text: "Advantage on attack rolls", value: "advantage" },
          { text: "Disadvantage on attack rolls", value: "disadvantage" },
          { text: "Extra attack damage", value: "extra_damage" },
        ],
        correctAnswer: "advantage",
      },
      {
        question: "What happens when a creature is reduced to 0 HP?",
        answers: [
          { text: "They die immediately", value: "die" },
          { text: "They become unconscious", value: "unconscious" },
          { text: "They make a Strength saving throw", value: "str_save" },
          { text: "They lose their next turn", value: "lose_turn" },
        ],
        correctAnswer: "unconscious",
      },
      {
        question: "How many times can a character use their reaction each round?",
        answers: [
          { text: "Once", value: "once" },
          { text: "Twice", value: "twice" },
          { text: "Unlimited", value: "unlimited" },
          { text: "Depends on their level", value: "depends" },
        ],
        correctAnswer: "once",
      },
    ],
  
    // QUIZ 2: What Saving Throw Should They Roll? (10 Questions)
    2: [
      {
        question: "What saving throw is used to resist being charmed?",
        answers: [
          { text: "Constitution", value: "con" },
          { text: "Wisdom", value: "wis" },
          { text: "Dexterity", value: "dex" },
          { text: "Strength", value: "str" },
        ],
        correctAnswer: "wis",
      },
      {
        question: "A fireball spell requires which saving throw?",
        answers: [
          { text: "Strength", value: "str" },
          { text: "Constitution", value: "con" },
          { text: "Dexterity", value: "dex" },
          { text: "Intelligence", value: "int" },
        ],
        correctAnswer: "dex",
      },
      {
        question: "A poison cloud requires what type of saving throw?",
        answers: [
          { text: "Wisdom", value: "wis" },
          { text: "Dexterity", value: "dex" },
          { text: "Constitution", value: "con" },
          { text: "Strength", value: "str" },
        ],
        correctAnswer: "con",
      },
      {
        question: "A grappled creature must make which saving throw to escape?",
        answers: [
          { text: "Dexterity", value: "dex" },
          { text: "Strength", value: "str" },
          { text: "Constitution", value: "con" },
          { text: "Wisdom", value: "wis" },
        ],
        correctAnswer: "str",
      },
      {
        question: "What saving throw is required to resist a Hold Person spell?",
        answers: [
          { text: "Intelligence", value: "int" },
          { text: "Wisdom", value: "wis" },
          { text: "Dexterity", value: "dex" },
          { text: "Strength", value: "str" },
        ],
        correctAnswer: "wis",
      },
      {
        question: "To avoid being restrained by vines, what saving throw is made?",
        answers: [
          { text: "Constitution", value: "con" },
          { text: "Strength", value: "str" },
          { text: "Dexterity", value: "dex" },
          { text: "Intelligence", value: "int" },
        ],
        correctAnswer: "dex",
      },
      {
        question: "What saving throw resists being frightened?",
        answers: [
          { text: "Charisma", value: "cha" },
          { text: "Wisdom", value: "wis" },
          { text: "Intelligence", value: "int" },
          { text: "Strength", value: "str" },
        ],
        correctAnswer: "wis",
      },
      {
        question: "When resisting mind control, what saving throw is used?",
        answers: [
          { text: "Constitution", value: "con" },
          { text: "Charisma", value: "cha" },
          { text: "Intelligence", value: "int" },
          { text: "Wisdom", value: "wis" },
        ],
        correctAnswer: "wis",
      },
      {
        question: "A spell that blinds you typically requires what saving throw?",
        answers: [
          { text: "Constitution", value: "con" },
          { text: "Dexterity", value: "dex" },
          { text: "Intelligence", value: "int" },
          { text: "Strength", value: "str" },
        ],
        correctAnswer: "con",
      },
      {
        question: "To resist a banishment spell, which saving throw is used?",
        answers: [
          { text: "Wisdom", value: "wis" },
          { text: "Charisma", value: "cha" },
          { text: "Constitution", value: "con" },
          { text: "Dexterity", value: "dex" },
        ],
        correctAnswer: "cha",
      },
    ],
  
    // QUIZ 3: What Skill Check Should They Roll? (10 Questions)
    3: [
      {
        question: "To detect a hidden creature, what skill should be used?",
        answers: [
          { text: "Perception", value: "perception" },
          { text: "Investigation", value: "investigation" },
          { text: "Insight", value: "insight" },
          { text: "Survival", value: "survival" },
        ],
        correctAnswer: "perception",
      },
      {
        question: "Which skill is used to recall lore about magic?",
        answers: [
          { text: "History", value: "history" },
          { text: "Arcana", value: "arcana" },
          { text: "Nature", value: "nature" },
          { text: "Religion", value: "religion" },
        ],
        correctAnswer: "arcana",
      },
      {
        question: "To persuade a king to offer aid, what skill is most appropriate?",
        answers: [
          { text: "Intimidation", value: "intimidation" },
          { text: "Deception", value: "deception" },
          { text: "Persuasion", value: "persuasion" },
          { text: "Insight", value: "insight" },
        ],
        correctAnswer: "persuasion",
      },
      {
        question: "What skill is used to follow tracks in the wilderness?",
        answers: [
          { text: "Nature", value: "nature" },
          { text: "Survival", value: "survival" },
          { text: "Investigation", value: "investigation" },
          { text: "Perception", value: "perception" },
        ],
        correctAnswer: "survival",
      },
      {
        question: "To detect if someone is lying, what skill is rolled?",
        answers: [
          { text: "Deception", value: "deception" },
          { text: "Insight", value: "insight" },
          { text: "Perception", value: "perception" },
          { text: "Investigation", value: "investigation" },
        ],
        correctAnswer: "insight",
      },
      {
        question: "To decipher an ancient text, what skill is required?",
        answers: [
          { text: "Arcana", value: "arcana" },
          { text: "Investigation", value: "investigation" },
          { text: "History", value: "history" },
          { text: "Religion", value: "religion" },
        ],
        correctAnswer: "history",
      },
      {
        question: "What skill do you roll to forge a document?",
        answers: [
          { text: "Sleight of Hand", value: "sleight_of_hand" },
          { text: "Deception", value: "deception" },
          { text: "Arcana", value: "arcana" },
          { text: "Investigation", value: "investigation" },
        ],
        correctAnswer: "deception",
      },
      {
        question: "To leap across a chasm, which skill applies?",
        answers: [
          { text: "Acrobatics", value: "acrobatics" },
          { text: "Athletics", value: "athletics" },
          { text: "Strength (no skill)", value: "strength" },
          { text: "Survival", value: "survival" },
        ],
        correctAnswer: "athletics",
      },
      {
        question: "To sneak past a guard, what skill is rolled?",
        answers: [
          { text: "Deception", value: "deception" },
          { text: "Sleight of Hand", value: "sleight_of_hand" },
          { text: "Stealth", value: "stealth" },
          { text: "Persuasion", value: "persuasion" },
        ],
        correctAnswer: "stealth",
      },
      {
        question: "To sense magical traps, what skill should be used?",
        answers: [
          { text: "Perception", value: "perception" },
          { text: "Arcana", value: "arcana" },
          { text: "Investigation", value: "investigation" },
          { text: "Survival", value: "survival" },
        ],
        correctAnswer: "arcana",
      },
    ],
  
    // QUIZ 4: How to Level Up a Character (10 Questions)
    4: [
      {
        question: "How do you determine a character's new hit points when leveling up?",
        answers: [
          { text: "Add 1d6 to current hit points", value: "1d6" },
          { text: "Roll their hit die and add Constitution modifier", value: "hit_die_con" },
          { text: "Increase by a fixed 10 points", value: "fixed10" },
          { text: "Roll a d20", value: "d20" },
        ],
        correctAnswer: "hit_die_con",
      },
      {
        question: "At what level do spellcasters gain access to 3rd-level spells?",
        answers: [
          { text: "Level 5", value: "5" },
          { text: "Level 3", value: "3" },
          { text: "Level 6", value: "6" },
          { text: "Level 4", value: "4" },
        ],
        correctAnswer: "5",
      },
      {
        question: "How many ability score increases does a character gain by level 20?",
        answers: [
          { text: "4", value: "4" },
          { text: "5", value: "5" },
          { text: "6", value: "6" },
          { text: "7", value: "7" },
        ],
        correctAnswer: "5",
      },
      {
        question: "Which class feature can be selected upon leveling up?",
        answers: [
          { text: "Expertise", value: "expertise" },
          { text: "Extra Attack", value: "extra_attack" },
          { text: "Unarmored Movement", value: "unarmored_movement" },
          { text: "Depends on the character class", value: "depends" },
        ],
        correctAnswer: "depends",
      },
      {
        question: "What determines how many spell slots a spellcaster has?",
        answers: [
          { text: "Intelligence Modifier", value: "int_mod" },
          { text: "Spellcasting Ability Modifier", value: "spellcasting_mod" },
          { text: "Character Level and Class", value: "level_class" },
          { text: "The DM's discretion", value: "dm_discretion" },
        ],
        correctAnswer: "level_class",
      },
      {
        question: "When leveling up, what is the maximum score a character can achieve for an ability?",
        answers: [
          { text: "18", value: "18" },
          { text: "20", value: "20" },
          { text: "22", value: "22" },
          { text: "24", value: "24" },
        ],
        correctAnswer: "20",
      },
      {
        question: "When do most classes gain access to subclass features?",
        answers: [
          { text: "Level 3", value: "3" },
          { text: "Level 2", value: "2" },
          { text: "Level 5", value: "5" },
          { text: "Level 1", value: "1" },
        ],
        correctAnswer: "3",
      },
      {
        question: "What happens when a Bard gains access to Magical Secrets?",
        answers: [
          { text: "Learns spells from any spell list", value: "any_spell_list" },
          { text: "Gains a free magic item", value: "free_item" },
          { text: "Can prepare additional spells each day", value: "extra_preparation" },
          { text: "Gains immunity to charm", value: "immunity_charm" },
        ],
        correctAnswer: "any_spell_list",
      },
      {
        question: "When leveling up as a Fighter, what feature is gained at Level 11?",
        answers: [
          { text: "Indomitable", value: "indomitable" },
          { text: "Extra Attack (2)", value: "extra_attack_2" },
          { text: "Second Wind", value: "second_wind" },
          { text: "Action Surge", value: "action_surge" },
        ],
        correctAnswer: "extra_attack_2",
      },
      {
        question: "How do Rangers calculate their spell save DC?",
        answers: [
          { text: "8 + Proficiency + Wisdom", value: "wis_dc" },
          { text: "10 + Proficiency + Dexterity", value: "dex_dc" },
          { text: "12 + Intelligence", value: "int_dc" },
          { text: "8 + Proficiency + Constitution", value: "con_dc" },
        ],
        correctAnswer: "wis_dc",
      },
    ],
  
    // QUIZ 5: D&D's Most Common Spells and Their Rules (10 Questions)
    5: [
      {
        question: "What is the casting time of the Fireball spell?",
        answers: [
          { text: "1 Action", value: "1_action" },
          { text: "1 Bonus Action", value: "1_bonus" },
          { text: "1 Reaction", value: "1_reaction" },
          { text: "1 Minute", value: "1_minute" },
        ],
        correctAnswer: "1_action",
      },
      {
        question: "Which spell increases a creature's AC by 5?",
        answers: [
          { text: "Shield", value: "shield" },
          { text: "Mage Armor", value: "mage_armor" },
          { text: "Blur", value: "blur" },
          { text: "Protection from Evil and Good", value: "protection" },
        ],
        correctAnswer: "shield",
      },
      {
        question: "What damage type does the Magic Missile spell deal?",
        answers: [
          { text: "Force", value: "force" },
          { text: "Radiant", value: "radiant" },
          { text: "Necrotic", value: "necrotic" },
          { text: "Piercing", value: "piercing" },
        ],
        correctAnswer: "force",
      },
      {
        question: "What is the range of the Healing Word spell?",
        answers: [
          { text: "30 feet", value: "30" },
          { text: "10 feet", value: "10" },
          { text: "Touch", value: "touch" },
          { text: "60 feet", value: "60" },
        ],
        correctAnswer: "60",
      },
      {
        question: "Which spell can grant the ability to fly?",
        answers: [
          { text: "Feather Fall", value: "feather_fall" },
          { text: "Fly", value: "fly" },
          { text: "Levitate", value: "levitate" },
          { text: "Air Walk", value: "air_walk" },
        ],
        correctAnswer: "fly",
      },
      {
        question: "What is the duration of Mage Hand?",
        answers: [
          { text: "1 Minute", value: "1_minute" },
          { text: "10 Minutes", value: "10_minutes" },
          { text: "1 Hour", value: "1_hour" },
          { text: "Until Dismissed", value: "until_dismissed" },
        ],
        correctAnswer: "10_minutes",
      },
      {
        question: "What level spell is Counterspell?",
        answers: [
          { text: "2nd", value: "2nd" },
          { text: "3rd", value: "3rd" },
          { text: "4th", value: "4th" },
          { text: "5th", value: "5th" },
        ],
        correctAnswer: "3rd",
      },
      {
        question: "What is the effect of the Sleep spell?",
        answers: [
          { text: "Targets a single creature and puts it to sleep", value: "single" },
          { text: "Targets a number of creatures based on HP", value: "hp_based" },
          { text: "Forces a Wisdom save to avoid sleep", value: "wis_save" },
          { text: "Affects only undead creatures", value: "undead_only" },
        ],
        correctAnswer: "hp_based",
      },
      {
        question: "Which spell causes a magical silence in a 20-foot radius?",
        answers: [
          { text: "Silence", value: "silence" },
          { text: "Calm Emotions", value: "calm" },
          { text: "Zone of Truth", value: "zone_truth" },
          { text: "Detect Thoughts", value: "detect_thoughts" },
        ],
        correctAnswer: "silence",
      },
      {
        question: "What saving throw is required for Hold Person?",
        answers: [
          { text: "Wisdom", value: "wis" },
          { text: "Constitution", value: "con" },
          { text: "Dexterity", value: "dex" },
          { text: "Intelligence", value: "int" },
        ],
        correctAnswer: "wis",
      },
    ],
  
    // QUIZ 6: Forgotten Realms Lore (10 Questions)
    6: [
      {
        question: "What is the capital city of the Forgotten Realms’ region Waterdeep?",
        answers: [
          { text: "Neverwinter", value: "neverwinter" },
          { text: "Baldur's Gate", value: "baldurs_gate" },
          { text: "Waterdeep", value: "waterdeep" },
          { text: "Candlekeep", value: "candlekeep" },
        ],
        correctAnswer: "waterdeep",
      },
      {
        question: "Who is the goddess of magic in the Forgotten Realms?",
        answers: [
          { text: "Mystra", value: "mystra" },
          { text: "Selûne", value: "selune" },
          { text: "Lolth", value: "lolth" },
          { text: "Shar", value: "shar" },
        ],
        correctAnswer: "mystra",
      },
      {
        question: "What is the name of the famous adventuring group led by Drizzt Do’Urden?",
        answers: [
          { text: "The Companions of the Hall", value: "companions" },
          { text: "The Harpers", value: "harpers" },
          { text: "The Zhentarim", value: "zhentarim" },
          { text: "The Lords' Alliance", value: "lords_alliance" },
        ],
        correctAnswer: "companions",
      },
      {
        question: "Which powerful artifact is located in Icewind Dale?",
        answers: [
          { text: "The Crystal Shard", value: "crystal_shard" },
          { text: "The Wand of Orcus", value: "wand_orcus" },
          { text: "The Book of Vile Darkness", value: "vile_darkness" },
          { text: "The Hand of Vecna", value: "hand_vecna" },
        ],
        correctAnswer: "crystal_shard",
      },
      {
        question: "What city is known as the City of Splendors?",
        answers: [
          { text: "Neverwinter", value: "neverwinter" },
          { text: "Baldur's Gate", value: "baldurs_gate" },
          { text: "Waterdeep", value: "waterdeep" },
          { text: "Luskan", value: "luskan" },
        ],
        correctAnswer: "waterdeep",
      },
      {
        question: "What is the name of the drow city where Lolth is worshiped?",
        answers: [
          { text: "Menzoberranzan", value: "menzo" },
          { text: "Ched Nasad", value: "ched_nasad" },
          { text: "Skullport", value: "skullport" },
          { text: "Calimport", value: "calimport" },
        ],
        correctAnswer: "menzo",
      },
      {
        question: "Who is the leader of the Harpers organization?",
        answers: [
          { text: "Elminster", value: "elminster" },
          { text: "Laeral Silverhand", value: "laeral" },
          { text: "Khelben Blackstaff", value: "khelben" },
          { text: "Halaster Blackcloak", value: "halaster" },
        ],
        correctAnswer: "laeral",
      },
      {
        question: "What is the name of the great library located in the Sword Coast?",
        answers: [
          { text: "Candlekeep", value: "candlekeep" },
          { text: "Neverwinter Archives", value: "archives" },
          { text: "Silvermoon Tower", value: "silvermoon" },
          { text: "Tower of High Sorcery", value: "high_sorcery" },
        ],
        correctAnswer: "candlekeep",
      },
      {
        question: "Which river separates Baldur’s Gate from Elturel?",
        answers: [
          { text: "Chionthar River", value: "chionthar" },
          { text: "Dessarin River", value: "dessarin" },
          { text: "Delimbiyr River", value: "delimbiyr" },
          { text: "River Sargauth", value: "sargauth" },
        ],
        correctAnswer: "chionthar",
      },
      {
        question: "What region of the Forgotten Realms is known for its frozen tundras and harsh environment?",
        answers: [
          { text: "Icewind Dale", value: "icewind_dale" },
          { text: "Anauroch", value: "anauroch" },
          { text: "The High Forest", value: "high_forest" },
          { text: "The Sword Coast", value: "sword_coast" },
        ],
        correctAnswer: "icewind_dale",
      },
    ],
  
    // QUIZ 7: Multi-Classing Rules (10 Questions)
    7: [
      {
        question: "What is the minimum ability score required to multiclass as a Fighter?",
        answers: [
          { text: "Strength 13 or Dexterity 13", value: "str_or_dex_13" },
          { text: "Strength 15", value: "str_15" },
          { text: "Constitution 13", value: "con_13" },
          { text: "Dexterity 10", value: "dex_10" },
        ],
        correctAnswer: "str_or_dex_13",
      },
      {
        question: "What do spellcasters gain when multiclassing into another spellcasting class?",
        answers: [
          { text: "Combined spell slots from both classes", value: "combined_slots" },
          { text: "All spells from both classes", value: "all_spells" },
          { text: "Full spellcasting level from both classes", value: "full_level" },
          { text: "Only cantrips from the new class", value: "only_cantrips" },
        ],
        correctAnswer: "combined_slots",
      },
      {
        question: "Can a Rogue multiclass into Wizard?",
        answers: [
          { text: "Yes, with Intelligence 13 or higher", value: "yes_int_13" },
          { text: "No, they need Charisma 15", value: "no_cha15" },
          { text: "Yes, with Dexterity 15 or higher", value: "yes_dex_15" },
          { text: "No, Rogues cannot multiclass", value: "no_rogue" },
        ],
        correctAnswer: "yes_int_13",
      },
      {
        question: "What happens to proficiency bonuses when multiclassing?",
        answers: [
          { text: "They remain the same as the base class", value: "same" },
          { text: "They increase by 1", value: "inc_1" },
          { text: "They are averaged", value: "averaged" },
          { text: "Determined by the highest class level", value: "highest_class" },
        ],
        correctAnswer: "same",
      },
      {
        question: "When multiclassing into Bard, what tool proficiency is gained?",
        answers: [
          { text: "Any musical instrument", value: "instrument" },
          { text: "Lute", value: "lute" },
          { text: "Any artisan’s tools", value: "artisans" },
          { text: "Smith's tools", value: "smith" },
        ],
        correctAnswer: "instrument",
      },
      {
        question: "How does a Barbarian’s Rage interact with spellcasting when multiclassed?",
        answers: [
          { text: "Spellcasting is impossible while raging", value: "no_spells_rage" },
          { text: "You can cast spells during Rage", value: "spells_rage" },
          { text: "Spells deal extra damage during Rage", value: "extra_damage_rage" },
          { text: "Rage increases spell save DC", value: "rage_save_dc" },
        ],
        correctAnswer: "no_spells_rage",
      },
      {
        question: "Which attribute combination is required to multiclass into Paladin?",
        answers: [
          { text: "Strength 13 and Charisma 13", value: "str_cha_13" },
          { text: "Constitution 15 and Dexterity 13", value: "con_15_dex_13" },
          { text: "Wisdom 14 and Intelligence 12", value: "wis_14_int_12" },
          { text: "Dexterity 14 and Charisma 10", value: "dex_14_cha_10" },
        ],
        correctAnswer: "str_cha_13",
      },
      {
        question: "When a character multiclasses into Monk, which weapon proficiencies are gained?",
        answers: [
          { text: "Simple weapons and shortswords", value: "simple_short" },
          { text: "Martial weapons and shields", value: "martial_shields" },
          { text: "Only monk weapons", value: "only_monk" },
          { text: "No new weapon proficiencies", value: "none" },
        ],
        correctAnswer: "simple_short",
      },
      {
        question: "When multiclassing as a spellcaster, how are Cantrips handled?",
        answers: [
          { text: "You gain cantrips from the new class as if at Level 1", value: "cantrips_level1" },
          { text: "You don’t gain any new cantrips", value: "no_cantrips" },
          { text: "You can only use cantrips from your original class", value: "original_only" },
          { text: "You gain cantrips based on total character level", value: "total_level" },
        ],
        correctAnswer: "cantrips_level1",
      },
      {
        question: "What is required to multiclass into Sorcerer?",
        answers: [
          { text: "Charisma 13 or higher", value: "cha_13" },
          { text: "Constitution 15", value: "con_15" },
          { text: "Intelligence 14", value: "int_14" },
          { text: "Wisdom 10", value: "wis_10" },
        ],
        correctAnswer: "cha_13",
      },
    ],
  
    // QUIZ 8: How to Balance Encounters (10 Questions)
    8: [
      {
        question: "What does CR stand for in encounter design?",
        answers: [
          { text: "Challenge Rating", value: "cr" },
          { text: "Combat Roll", value: "combat_roll" },
          { text: "Creature Resistance", value: "creature_resistance" },
          { text: "Critical Resistance", value: "critical_resistance" },
        ],
        correctAnswer: "cr",
      },
      {
        question: "How many creatures with a CR equal to the party’s average level make a Medium encounter for 4 PCs?",
        answers: [
          { text: "1", value: "1" },
          { text: "2", value: "2" },
          { text: "4", value: "4" },
          { text: "8", value: "8" },
        ],
        correctAnswer: "2",
      },
      {
        question: "What multiplier is used for 6 monsters in an encounter?",
        answers: [
          { text: "1.5", value: "1.5" },
          { text: "2", value: "2" },
          { text: "2.5", value: "2.5" },
          { text: "3", value: "3" },
        ],
        correctAnswer: "2.5",
      },
      {
        question: "What is the difficulty of an encounter that exceeds the party’s daily XP threshold?",
        answers: [
          { text: "Easy", value: "easy" },
          { text: "Moderate", value: "moderate" },
          { text: "Hard", value: "hard" },
          { text: "Deadly", value: "deadly" },
        ],
        correctAnswer: "deadly",
      },
      {
        question: "Which tool is commonly used to calculate encounter balance?",
        answers: [
          { text: "Encounter Calculator", value: "enc_calculator" },
          { text: "Dungeon Master's Guide table", value: "dmg_table" },
          { text: "Monster Manual reference", value: "mm_ref" },
          { text: "Roll20 balancing tool", value: "roll20" },
        ],
        correctAnswer: "dmg_table",
      },
      {
        question: "How is XP divided for multiple monsters?",
        answers: [
          { text: "Add all monster XP together", value: "add_all" },
          { text: "Divide XP by the number of monsters", value: "divide" },
          { text: "Use only the highest CR monster", value: "highest_cr" },
          { text: "Multiply XP by the number of monsters", value: "multiply" },
        ],
        correctAnswer: "add_all",
      },
      {
        question: "What is the XP threshold for a Level 3 party of 4 for a Hard encounter?",
        answers: [
          { text: "800 XP", value: "800" },
          { text: "1,200 XP", value: "1200" },
          { text: "1,600 XP", value: "1600" },
          { text: "2,000 XP", value: "2000" },
        ],
        correctAnswer: "1200",
      },
      {
        question: "How does environment affect encounter balance?",
        answers: [
          { text: "It modifies the XP multiplier", value: "xp_mult" },
          { text: "It doesn’t affect encounter balance", value: "no_effect" },
          { text: "It may give monsters advantage", value: "monsters_advantage" },
          { text: "It reduces monster XP", value: "reduces_xp" },
        ],
        correctAnswer: "monsters_advantage",
      },
      {
        question: "What is the XP multiplier for a group of 3 monsters?",
        answers: [
          { text: "1.5", value: "1.5" },
          { text: "2", value: "2" },
          { text: "1.25", value: "1.25" },
          { text: "3", value: "3" },
        ],
        correctAnswer: "1.5",
      },
      {
        question: "What is the most important factor when balancing encounters?",
        answers: [
          { text: "Player tactics", value: "player_tactics" },
          { text: "Party composition", value: "party_comp" },
          { text: "Monster speed", value: "monster_speed" },
          { text: "Treasure rewards", value: "treasure" },
        ],
        correctAnswer: "party_comp",
      },
    ],
  
    // QUIZ 9: Magic Items, Loot, and Shop Rules (10 Questions)
    9: [
      {
        question: "What is the rarity of the Bag of Holding?",
        answers: [
          { text: "Common", value: "common" },
          { text: "Uncommon", value: "uncommon" },
          { text: "Rare", value: "rare" },
          { text: "Very Rare", value: "very_rare" },
        ],
        correctAnswer: "uncommon",
      },
      {
        question: "How much does a healing potion typically cost?",
        answers: [
          { text: "50 gold pieces", value: "50gp" },
          { text: "25 gold pieces", value: "25gp" },
          { text: "100 gold pieces", value: "100gp" },
          { text: "10 gold pieces", value: "10gp" },
        ],
        correctAnswer: "50gp",
      },
      {
        question: "What property makes a Vorpal Sword unique?",
        answers: [
          { text: "It grants a bonus to attack rolls", value: "bonus_attack" },
          { text: "It decapitates on a critical hit", value: "decapitate" },
          { text: "It deals fire damage", value: "fire_dmg" },
          { text: "It allows the user to teleport", value: "teleport" },
        ],
        correctAnswer: "decapitate",
      },
      {
        question: "What is the maximum amount of gold a Portable Hole can hold?",
        answers: [
          { text: "1,000 lbs worth", value: "1000lbs" },
          { text: "2,000 lbs worth", value: "2000lbs" },
          { text: "5,000 lbs worth", value: "5000lbs" },
          { text: "10,000 lbs worth", value: "10000lbs" },
        ],
        correctAnswer: "2000lbs",
      },
      {
        question: "Which of the following is a cursed item?",
        answers: [
          { text: "Armor of Invulnerability", value: "invul_armor" },
          { text: "Cloak of Displacement", value: "cloak_disp" },
          { text: "Sword of Vengeance", value: "vengeance" },
          { text: "Ring of Protection", value: "ring_prot" },
        ],
        correctAnswer: "vengeance",
      },
      {
        question: "What is required to create a magic item?",
        answers: [
          { text: "A spellcaster with the spell related to the item", value: "spellcaster_req" },
          { text: "A specific formula and rare materials", value: "formula_rare" },
          { text: "A high-level enchanter", value: "high_enchanter" },
          { text: "Any magic user", value: "any_magic" },
        ],
        correctAnswer: "formula_rare",
      },
      {
        question: "What rarity is the Wand of Fireballs?",
        answers: [
          { text: "Rare", value: "rare" },
          { text: "Very Rare", value: "very_rare" },
          { text: "Legendary", value: "legendary" },
          { text: "Uncommon", value: "uncommon" },
        ],
        correctAnswer: "rare",
      },
      {
        question: "How many charges does a Ring of Spell Storing hold?",
        answers: [
          { text: "Up to 5 levels of spells", value: "5_levels" },
          { text: "Unlimited", value: "unlimited" },
          { text: "Up to 3 levels of spells", value: "3_levels" },
          { text: "Depends on caster's level", value: "depends" },
        ],
        correctAnswer: "5_levels",
      },
      {
        question: "What is the base price of a +1 weapon in a standard shop?",
        answers: [
          { text: "500 gold pieces", value: "500gp" },
          { text: "1,000 gold pieces", value: "1000gp" },
          { text: "10,000 gold pieces", value: "10000gp" },
          { text: "50 gold pieces", value: "50gp" },
        ],
        correctAnswer: "1000gp",
      },
      {
        question: "How does Identify work on cursed items?",
        answers: [
          { text: "It reveals all properties, including the curse", value: "reveals_all" },
          { text: "It fails to reveal the curse", value: "fails" },
          { text: "It only reveals the curse if cast at higher level", value: "higher_level" },
          { text: "Requires Legend Lore", value: "legend_lore" },
        ],
        correctAnswer: "reveals_all",
      },
    ],
  
    // QUIZ 10: Travel and Exploration (10 Questions)
    10: [
      {
        question: "What is the average walking speed of a human in D&D?",
        answers: [
          { text: "20 feet per round", value: "20" },
          { text: "30 feet per round", value: "30" },
          { text: "25 feet per round", value: "25" },
          { text: "35 feet per round", value: "35" },
        ],
        correctAnswer: "30",
      },
      {
        question: "How many miles can a party travel per day at a normal pace?",
        answers: [
          { text: "12 miles", value: "12" },
          { text: "24 miles", value: "24" },
          { text: "18 miles", value: "18" },
          { text: "30 miles", value: "30" },
        ],
        correctAnswer: "18",
      },
      {
        question: "What happens to Perception checks while traveling at a fast pace?",
        answers: [
          { text: "Advantage", value: "advantage" },
          { text: "Disadvantage", value: "disadvantage" },
          { text: "No effect", value: "no_effect" },
          { text: "Cannot make Perception checks", value: "cannot" },
        ],
        correctAnswer: "disadvantage",
      },
      {
        question: "How many levels of exhaustion can a character gain before dying?",
        answers: [
          { text: "5", value: "5" },
          { text: "6", value: "6" },
          { text: "4", value: "4" },
          { text: "7", value: "7" },
        ],
        correctAnswer: "6",
      },
      {
        question: "How much water does an adventurer need daily to avoid dehydration?",
        answers: [
          { text: "1 gallon", value: "1_gallon" },
          { text: "2 gallons", value: "2_gallons" },
          { text: "Half a gallon", value: "half_gallon" },
          { text: "5 gallons", value: "5_gallons" },
        ],
        correctAnswer: "1_gallon",
      },
      {
        question: "What effect does difficult terrain have on movement?",
        answers: [
          { text: "Halves movement speed", value: "half_speed" },
          { text: "Negates movement", value: "no_move" },
          { text: "Grants disadvantage on checks", value: "disadvantage" },
          { text: "Doubles movement cost", value: "double_cost" },
        ],
        correctAnswer: "half_speed",
      },
      {
        question: "How does foraging work during travel?",
        answers: [
          { text: "Wisdom (Survival) check", value: "survival_check" },
          { text: "Roll a d20 + Dex", value: "dex_check" },
          { text: "Automatically find food", value: "auto_food" },
          { text: "Requires Locate Object spell", value: "locate_object" },
        ],
        correctAnswer: "survival_check",
      },
      {
        question: "How long does a long rest last?",
        answers: [
          { text: "4 hours", value: "4h" },
          { text: "6 hours", value: "6h" },
          { text: "8 hours", value: "8h" },
          { text: "10 hours", value: "10h" },
        ],
        correctAnswer: "8h",
      },
      {
        question: "What happens when a party travels at a slow pace?",
        answers: [
          { text: "No effect", value: "no_effect" },
          { text: "They can stealth and make better checks", value: "stealth_advantage" },
          { text: "They move double distance", value: "double_distance" },
          { text: "They are easier to detect", value: "easier_detect" },
        ],
        correctAnswer: "stealth_advantage",
      },
      {
        question: "What type of roll is used to avoid getting lost?",
        answers: [
          { text: "Intelligence (Nature)", value: "nature" },
          { text: "Wisdom (Survival)", value: "survival" },
          { text: "Dexterity (Acrobatics)", value: "acrobatics" },
          { text: "Charisma (Persuasion)", value: "persuasion" },
        ],
        correctAnswer: "survival",
      },
    ],
  
    // QUIZ 11: Final Exam (50 Questions, 5 from each quiz above)
    // We'll take the FIRST 5 questions from each quiz (1 through 10) to form a 50-question final exam.
    11: [
      // From Quiz 1 (first 5)
      {
        question: "What action allows a player to move away from an enemy without provoking an opportunity attack?",
        answers: [
          { text: "Dash", value: "dash" },
          { text: "Dodge", value: "dodge" },
          { text: "Disengage", value: "disengage" },
          { text: "Defend", value: "defend" },
        ],
        correctAnswer: "disengage",
      },
      {
        question: "What is the standard number of attacks a creature can make in one turn unless specified otherwise?",
        answers: [
          { text: "1", value: "1" },
          { text: "2", value: "2" },
          { text: "3", value: "3" },
          { text: "Unlimited", value: "unlimited" },
        ],
        correctAnswer: "1",
      },
      {
        question: "If a character is unconscious, what condition automatically applies?",
        answers: [
          { text: "Resistance to all damage", value: "resistance" },
          { text: "Advantage on attack rolls against them", value: "advantage" },
          { text: "Disadvantage on saving throws", value: "disadvantage" },
          { text: "Immunity to critical hits", value: "immunity" },
        ],
        correctAnswer: "advantage",
      },
      {
        question: "What type of damage bypasses resistance from non-magical attacks?",
        answers: [
          { text: "Fire", value: "fire" },
          { text: "Psychic", value: "psychic" },
          { text: "Radiant", value: "radiant" },
          { text: "Magic weapon damage", value: "magic" },
        ],
        correctAnswer: "magic",
      },
      {
        question: "What is the default AC for a character with no armor or shield and a Dexterity modifier of +0?",
        answers: [
          { text: "8", value: "8" },
          { text: "10", value: "10" },
          { text: "12", value: "12" },
          { text: "14", value: "14" },
        ],
        correctAnswer: "10",
      },
  
      // From Quiz 2 (first 5)
      {
        question: "What saving throw is used to resist being charmed?",
        answers: [
          { text: "Constitution", value: "con" },
          { text: "Wisdom", value: "wis" },
          { text: "Dexterity", value: "dex" },
          { text: "Strength", value: "str" },
        ],
        correctAnswer: "wis",
      },
      {
        question: "A fireball spell requires which saving throw?",
        answers: [
          { text: "Strength", value: "str" },
          { text: "Constitution", value: "con" },
          { text: "Dexterity", value: "dex" },
          { text: "Intelligence", value: "int" },
        ],
        correctAnswer: "dex",
      },
      {
        question: "A poison cloud requires what type of saving throw?",
        answers: [
          { text: "Wisdom", value: "wis" },
          { text: "Dexterity", value: "dex" },
          { text: "Constitution", value: "con" },
          { text: "Strength", value: "str" },
        ],
        correctAnswer: "con",
      },
      {
        question: "A grappled creature must make which saving throw to escape?",
        answers: [
          { text: "Dexterity", value: "dex" },
          { text: "Strength", value: "str" },
          { text: "Constitution", value: "con" },
          { text: "Wisdom", value: "wis" },
        ],
        correctAnswer: "str",
      },
      {
        question: "What saving throw is required to resist a Hold Person spell?",
        answers: [
          { text: "Intelligence", value: "int" },
          { text: "Wisdom", value: "wis" },
          { text: "Dexterity", value: "dex" },
          { text: "Strength", value: "str" },
        ],
        correctAnswer: "wis",
      },
  
      // From Quiz 3 (first 5)
      {
        question: "To detect a hidden creature, what skill should be used?",
        answers: [
          { text: "Perception", value: "perception" },
          { text: "Investigation", value: "investigation" },
          { text: "Insight", value: "insight" },
          { text: "Survival", value: "survival" },
        ],
        correctAnswer: "perception",
      },
      {
        question: "Which skill is used to recall lore about magic?",
        answers: [
          { text: "History", value: "history" },
          { text: "Arcana", value: "arcana" },
          { text: "Nature", value: "nature" },
          { text: "Religion", value: "religion" },
        ],
        correctAnswer: "arcana",
      },
      {
        question: "To persuade a king to offer aid, what skill is most appropriate?",
        answers: [
          { text: "Intimidation", value: "intimidation" },
          { text: "Deception", value: "deception" },
          { text: "Persuasion", value: "persuasion" },
          { text: "Insight", value: "insight" },
        ],
        correctAnswer: "persuasion",
      },
      {
        question: "What skill is used to follow tracks in the wilderness?",
        answers: [
          { text: "Nature", value: "nature" },
          { text: "Survival", value: "survival" },
          { text: "Investigation", value: "investigation" },
          { text: "Perception", value: "perception" },
        ],
        correctAnswer: "survival",
      },
      {
        question: "To detect if someone is lying, what skill is rolled?",
        answers: [
          { text: "Deception", value: "deception" },
          { text: "Insight", value: "insight" },
          { text: "Perception", value: "perception" },
          { text: "Investigation", value: "investigation" },
        ],
        correctAnswer: "insight",
      },
  
      // From Quiz 4 (first 5)
      {
        question: "How do you determine a character's new hit points when leveling up?",
        answers: [
          { text: "Add 1d6 to current hit points", value: "1d6" },
          { text: "Roll their hit die and add Constitution modifier", value: "hit_die_con" },
          { text: "Increase by a fixed 10 points", value: "fixed10" },
          { text: "Roll a d20", value: "d20" },
        ],
        correctAnswer: "hit_die_con",
      },
      {
        question: "At what level do spellcasters gain access to 3rd-level spells?",
        answers: [
          { text: "Level 5", value: "5" },
          { text: "Level 3", value: "3" },
          { text: "Level 6", value: "6" },
          { text: "Level 4", value: "4" },
        ],
        correctAnswer: "5",
      },
      {
        question: "How many ability score increases does a character gain by level 20?",
        answers: [
          { text: "4", value: "4" },
          { text: "5", value: "5" },
          { text: "6", value: "6" },
          { text: "7", value: "7" },
        ],
        correctAnswer: "5",
      },
      {
        question: "Which class feature can be selected upon leveling up?",
        answers: [
          { text: "Expertise", value: "expertise" },
          { text: "Extra Attack", value: "extra_attack" },
          { text: "Unarmored Movement", value: "unarmored_movement" },
          { text: "Depends on the character class", value: "depends" },
        ],
        correctAnswer: "depends",
      },
      {
        question: "What determines how many spell slots a spellcaster has?",
        answers: [
          { text: "Intelligence Modifier", value: "int_mod" },
          { text: "Spellcasting Ability Modifier", value: "spellcasting_mod" },
          { text: "Character Level and Class", value: "level_class" },
          { text: "The DM's discretion", value: "dm_discretion" },
        ],
        correctAnswer: "level_class",
      },
  
      // From Quiz 5 (first 5)
      {
        question: "What is the casting time of the Fireball spell?",
        answers: [
          { text: "1 Action", value: "1_action" },
          { text: "1 Bonus Action", value: "1_bonus" },
          { text: "1 Reaction", value: "1_reaction" },
          { text: "1 Minute", value: "1_minute" },
        ],
        correctAnswer: "1_action",
      },
      {
        question: "Which spell increases a creature's AC by 5?",
        answers: [
          { text: "Shield", value: "shield" },
          { text: "Mage Armor", value: "mage_armor" },
          { text: "Blur", value: "blur" },
          { text: "Protection from Evil and Good", value: "protection" },
        ],
        correctAnswer: "shield",
      },
      {
        question: "What damage type does the Magic Missile spell deal?",
        answers: [
          { text: "Force", value: "force" },
          { text: "Radiant", value: "radiant" },
          { text: "Necrotic", value: "necrotic" },
          { text: "Piercing", value: "piercing" },
        ],
        correctAnswer: "force",
      },
      {
        question: "What is the range of the Healing Word spell?",
        answers: [
          { text: "30 feet", value: "30" },
          { text: "10 feet", value: "10" },
          { text: "Touch", value: "touch" },
          { text: "60 feet", value: "60" },
        ],
        correctAnswer: "60",
      },
      {
        question: "Which spell can grant the ability to fly?",
        answers: [
          { text: "Feather Fall", value: "feather_fall" },
          { text: "Fly", value: "fly" },
          { text: "Levitate", value: "levitate" },
          { text: "Air Walk", value: "air_walk" },
        ],
        correctAnswer: "fly",
      },
  
      // From Quiz 6 (first 5)
      {
        question: "What is the capital city of the Forgotten Realms’ region Waterdeep?",
        answers: [
          { text: "Neverwinter", value: "neverwinter" },
          { text: "Baldur's Gate", value: "baldurs_gate" },
          { text: "Waterdeep", value: "waterdeep" },
          { text: "Candlekeep", value: "candlekeep" },
        ],
        correctAnswer: "waterdeep",
      },
      {
        question: "Who is the goddess of magic in the Forgotten Realms?",
        answers: [
          { text: "Mystra", value: "mystra" },
          { text: "Selûne", value: "selune" },
          { text: "Lolth", value: "lolth" },
          { text: "Shar", value: "shar" },
        ],
        correctAnswer: "mystra",
      },
      {
        question: "What is the name of the famous adventuring group led by Drizzt Do’Urden?",
        answers: [
          { text: "The Companions of the Hall", value: "companions" },
          { text: "The Harpers", value: "harpers" },
          { text: "The Zhentarim", value: "zhentarim" },
          { text: "The Lords' Alliance", value: "lords_alliance" },
        ],
        correctAnswer: "companions",
      },
      {
        question: "Which powerful artifact is located in Icewind Dale?",
        answers: [
          { text: "The Crystal Shard", value: "crystal_shard" },
          { text: "The Wand of Orcus", value: "wand_orcus" },
          { text: "The Book of Vile Darkness", value: "vile_darkness" },
          { text: "The Hand of Vecna", value: "hand_vecna" },
        ],
        correctAnswer: "crystal_shard",
      },
      {
        question: "What city is known as the City of Splendors?",
        answers: [
          { text: "Neverwinter", value: "neverwinter" },
          { text: "Baldur's Gate", value: "baldurs_gate" },
          { text: "Waterdeep", value: "waterdeep" },
          { text: "Luskan", value: "luskan" },
        ],
        correctAnswer: "waterdeep",
      },
  
      // From Quiz 7 (first 5)
      {
        question: "What is the minimum ability score required to multiclass as a Fighter?",
        answers: [
          { text: "Strength 13 or Dexterity 13", value: "str_or_dex_13" },
          { text: "Strength 15", value: "str_15" },
          { text: "Constitution 13", value: "con_13" },
          { text: "Dexterity 10", value: "dex_10" },
        ],
        correctAnswer: "str_or_dex_13",
      },
      {
        question: "What do spellcasters gain when multiclassing into another spellcasting class?",
        answers: [
          { text: "Combined spell slots from both classes", value: "combined_slots" },
          { text: "All spells from both classes", value: "all_spells" },
          { text: "Full spellcasting level from both classes", value: "full_level" },
          { text: "Only cantrips from the new class", value: "only_cantrips" },
        ],
        correctAnswer: "combined_slots",
      },
      {
        question: "Can a Rogue multiclass into Wizard?",
        answers: [
          { text: "Yes, with Intelligence 13 or higher", value: "yes_int_13" },
          { text: "No, they need Charisma 15", value: "no_cha15" },
          { text: "Yes, with Dexterity 15 or higher", value: "yes_dex_15" },
          { text: "No, Rogues cannot multiclass", value: "no_rogue" },
        ],
        correctAnswer: "yes_int_13",
      },
      {
        question: "What happens to proficiency bonuses when multiclassing?",
        answers: [
          { text: "They remain the same as the base class", value: "same" },
          { text: "They increase by 1", value: "inc_1" },
          { text: "They are averaged", value: "averaged" },
          { text: "Determined by the highest class level", value: "highest_class" },
        ],
        correctAnswer: "same",
      },
      {
        question: "When multiclassing into Bard, what tool proficiency is gained?",
        answers: [
          { text: "Any musical instrument", value: "instrument" },
          { text: "Lute", value: "lute" },
          { text: "Any artisan’s tools", value: "artisans" },
          { text: "Smith's tools", value: "smith" },
        ],
        correctAnswer: "instrument",
      },
  
      // From Quiz 8 (first 5)
      {
        question: "What does CR stand for in encounter design?",
        answers: [
          { text: "Challenge Rating", value: "cr" },
          { text: "Combat Roll", value: "combat_roll" },
          { text: "Creature Resistance", value: "creature_resistance" },
          { text: "Critical Resistance", value: "critical_resistance" },
        ],
        correctAnswer: "cr",
      },
      {
        question: "How many creatures with a CR equal to the party’s average level make a Medium encounter for 4 PCs?",
        answers: [
          { text: "1", value: "1" },
          { text: "2", value: "2" },
          { text: "4", value: "4" },
          { text: "8", value: "8" },
        ],
        correctAnswer: "2",
      },
      {
        question: "What multiplier is used for 6 monsters in an encounter?",
        answers: [
          { text: "1.5", value: "1.5" },
          { text: "2", value: "2" },
          { text: "2.5", value: "2.5" },
          { text: "3", value: "3" },
        ],
        correctAnswer: "2.5",
      },
      {
        question: "What is the difficulty of an encounter that exceeds the party’s daily XP threshold?",
        answers: [
          { text: "Easy", value: "easy" },
          { text: "Moderate", value: "moderate" },
          { text: "Hard", value: "hard" },
          { text: "Deadly", value: "deadly" },
        ],
        correctAnswer: "deadly",
      },
      {
        question: "Which tool is commonly used to calculate encounter balance?",
        answers: [
          { text: "Encounter Calculator", value: "enc_calculator" },
          { text: "Dungeon Master's Guide table", value: "dmg_table" },
          { text: "Monster Manual reference", value: "mm_ref" },
          { text: "Roll20 balancing tool", value: "roll20" },
        ],
        correctAnswer: "dmg_table",
      },
  
      // From Quiz 9 (first 5)
      {
        question: "What is the rarity of the Bag of Holding?",
        answers: [
          { text: "Common", value: "common" },
          { text: "Uncommon", value: "uncommon" },
          { text: "Rare", value: "rare" },
          { text: "Very Rare", value: "very_rare" },
        ],
        correctAnswer: "uncommon",
      },
      {
        question: "How much does a healing potion typically cost?",
        answers: [
          { text: "50 gold pieces", value: "50gp" },
          { text: "25 gold pieces", value: "25gp" },
          { text: "100 gold pieces", value: "100gp" },
          { text: "10 gold pieces", value: "10gp" },
        ],
        correctAnswer: "50gp",
      },
      {
        question: "What property makes a Vorpal Sword unique?",
        answers: [
          { text: "It grants a bonus to attack rolls", value: "bonus_attack" },
          { text: "It decapitates on a critical hit", value: "decapitate" },
          { text: "It deals fire damage", value: "fire_dmg" },
          { text: "It allows the user to teleport", value: "teleport" },
        ],
        correctAnswer: "decapitate",
      },
      {
        question: "What is the maximum amount of gold a Portable Hole can hold?",
        answers: [
          { text: "1,000 lbs worth", value: "1000lbs" },
          { text: "2,000 lbs worth", value: "2000lbs" },
          { text: "5,000 lbs worth", value: "5000lbs" },
          { text: "10,000 lbs worth", value: "10000lbs" },
        ],
        correctAnswer: "2000lbs",
      },
      {
        question: "Which of the following is a cursed item?",
        answers: [
          { text: "Armor of Invulnerability", value: "invul_armor" },
          { text: "Cloak of Displacement", value: "cloak_disp" },
          { text: "Sword of Vengeance", value: "vengeance" },
          { text: "Ring of Protection", value: "ring_prot" },
        ],
        correctAnswer: "vengeance",
      },
  
      // From Quiz 10 (first 5)
      {
        question: "What is the average walking speed of a human in D&D?",
        answers: [
          { text: "20 feet per round", value: "20" },
          { text: "30 feet per round", value: "30" },
          { text: "25 feet per round", value: "25" },
          { text: "35 feet per round", value: "35" },
        ],
        correctAnswer: "30",
      },
      {
        question: "How many miles can a party travel per day at a normal pace?",
        answers: [
          { text: "12 miles", value: "12" },
          { text: "24 miles", value: "24" },
          { text: "18 miles", value: "18" },
          { text: "30 miles", value: "30" },
        ],
        correctAnswer: "18",
      },
      {
        question: "What happens to Perception checks while traveling at a fast pace?",
        answers: [
          { text: "Advantage", value: "advantage" },
          { text: "Disadvantage", value: "disadvantage" },
          { text: "No effect", value: "no_effect" },
          { text: "Cannot make Perception checks", value: "cannot" },
        ],
        correctAnswer: "disadvantage",
      },
      {
        question: "How many levels of exhaustion can a character gain before dying?",
        answers: [
          { text: "5", value: "5" },
          { text: "6", value: "6" },
          { text: "4", value: "4" },
          { text: "7", value: "7" },
        ],
        correctAnswer: "6",
      },
      {
        question: "How much water does an adventurer need daily to avoid dehydration?",
        answers: [
          { text: "1 gallon", value: "1_gallon" },
          { text: "2 gallons", value: "2_gallons" },
          { text: "Half a gallon", value: "half_gallon" },
          { text: "5 gallons", value: "5_gallons" },
        ],
        correctAnswer: "1_gallon",
      },
    ],
  };
  