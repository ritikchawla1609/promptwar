import { Mission } from '../types/frameZero';

export const MISSIONS: Mission[] = [
  {
    id: 'the-last-promise',
    title: 'The Last Promise',
    japaneseTitle: '最後の約束',
    tagline: 'A young swordsman protects a glowing lantern in a torrential storm.',
    difficulty: 'Intermediate',
    difficultyStars: 3,
    durationMinutes: 10,
    maxAttempts: 5,
    palette: {
      primary: '#e5a93c',     // Warm amber lantern
      secondary: '#253549',   // Deep slate storm
      accent: '#e15b5b',      // Cinnabar red
      background: '#0b0f17'   // Deep night ink
    },
    brief: {
      synopsis: 'A young swordsman shields a glowing paper lantern from a fierce downpour atop a temple rooftop. Rain sweeps across the slate shingles while distant feudal city lights shimmer through the misty dark. His expression carries fierce resolve and unwavering hope. The frame must balance the intimate golden warmth of the lantern against the cool, violent storm.',
      actionRequirement: 'Shielding and guarding the glowing paper lantern from the rain.',
      emotionRequirement: 'Resolute determination, hopeful defiance, and quiet intensity.',
      environmentRequirement: 'Rain-slicked tile rooftop or temple eaves amid a violent storm.',
      lightingRequirement: 'Warm golden lantern light contrasting with cool midnight blue rain and distant neon/city haze.',
      compositionRequirement: 'Cinematic wide or medium-wide framing with strong atmospheric depth and rain streaks.'
    },
    requirements: [
      // Required Scene Elements (Total: 35)
      {
        id: 'element-swordsman',
        label: 'Swordsman / Protector Character',
        category: 'element',
        primaryTerms: ['swordsman', 'samurai', 'warrior', 'ronin', 'fighter', 'blade master'],
        synonyms: ['swords-man', 'swords-woman', 'character with sword', 'katana', 'sheathed blade', 'swords-person', 'youth'],
        description: 'The protagonist guarding the scene with blade or martial posture.',
        weight: 9
      },
      {
        id: 'element-lantern',
        label: 'Glowing Paper Lantern',
        category: 'element',
        primaryTerms: ['lantern', 'paper lantern', 'chochin', 'lamp'],
        synonyms: ['glowing lantern', 'candle flame inside paper', 'lightsource', 'lantern light', 'delicate flame', 'torus'],
        description: 'The fragile glowing lantern being protected from the weather.',
        weight: 9
      },
      {
        id: 'element-rooftop',
        label: 'Rooftop / Temple Eaves Setting',
        category: 'element',
        primaryTerms: ['rooftop', 'roof', 'temple roof', 'slate tiles', 'shingles'],
        synonyms: ['eaves', 'building top', 'roof edge', 'traditional roof', 'pagoda roof', 'ceramic tiles'],
        description: 'The elevated rooftop setting overlooking the landscape.',
        weight: 9
      },
      {
        id: 'element-storm',
        label: 'Heavy Rain & Storm',
        category: 'element',
        primaryTerms: ['storm', 'rain', 'downpour', 'heavy rain', 'tempest'],
        synonyms: ['torrential', 'rain droplets', 'gusts of wind', 'misty rain', 'sweeping rain', 'rainfall', 'water splashing'],
        description: 'The hostile downpour sweeping across the frame.',
        weight: 8
      },

      // Emotional Direction (Total: 20)
      {
        id: 'emotion-determination',
        label: 'Unwavering Resolve & Hope',
        category: 'emotion',
        primaryTerms: ['determination', 'hope', 'resolute', 'defiant', 'steadfast'],
        synonyms: ['unwavering', 'courage', 'grit', 'fierce eyes', 'solemn resolve', 'protective stance', 'unyielding', 'hopeful glance'],
        description: 'The character’s emotional state reflecting dedication despite hardship.',
        weight: 20
      },

      // Cinematic Composition (Total: 20)
      {
        id: 'composition-framing',
        label: 'Cinematic Framing & Depth',
        category: 'composition',
        primaryTerms: ['cinematic', 'wide shot', 'medium wide', 'rule of thirds', 'depth of field'],
        synonyms: ['wide-angle', 'establishing shot', 'low angle', 'perspective', 'bokeh', 'blurred background', 'atmospheric depth', 'diagonal framing', '2.39:1'],
        description: 'Camera distance, angle, and framing that establishes dramatic scale.',
        weight: 20
      },

      // Lighting & Atmosphere (Total: 15)
      {
        id: 'lighting-contrast',
        label: 'Warm Lantern vs. Cool Rain Contrast',
        category: 'lighting',
        primaryTerms: ['warm light', 'cool rain', 'lantern glow', 'golden', 'amber'],
        synonyms: ['color contrast', 'warm amber glow', 'cool blue tones', 'rim light', 'volumetric lighting', 'dramatic chiaroscuro', 'glowing highlights'],
        description: 'Dual-temperature lighting contrasting golden flame with cool blue rainfall.',
        weight: 15
      }
    ],
    contradictions: [
      {
        id: 'contradiction-weather',
        conflictingTerms: ['sunny', 'sunshine', 'clear sky', 'blue sky', 'bright sunlight', 'daylight dry'],
        explanation: 'The scene calls for a heavy storm, but sunny or dry daytime weather was specified.',
        penalty: 8
      },
      {
        id: 'contradiction-emotion',
        conflictingTerms: ['laughing hysterically', 'comedic', 'silly joke', 'cheerful celebration', 'joyful grinning'],
        explanation: 'The scene demands fierce determination and solemn hope, not comedic or cheerful levity.',
        penalty: 6
      },
      {
        id: 'contradiction-scale',
        conflictingTerms: ['extreme macro close-up of eyeball', 'microscopic detail', 'only the sword tip'],
        explanation: 'A wide cinematic shot is required to capture character, lantern, and stormy rooftop environment.',
        penalty: 5
      }
    ],
    defaultFeedback: {
      excellent: 'Masterful direction. The interplay between lantern warmth and rain-slicked rooftop conveys dramatic tension effortlessly.',
      good: 'Strong scene direction. Deepen the contrast between the lantern flame and the surrounding stormy shadows to elevate the frame.',
      needsWork: 'The core brief elements need clearer instructions. Establish the swordsman, the protected lantern, and the storm environment.'
    }
  },

  {
    id: 'after-the-rain',
    title: 'After the Rain',
    japaneseTitle: '雨上がりの駅',
    tagline: 'Two old friends meet beneath a quiet station canopy as sunset clears.',
    difficulty: 'Novice',
    difficultyStars: 2,
    durationMinutes: 10,
    maxAttempts: 5,
    palette: {
      primary: '#e89c62',     // Golden dusk
      secondary: '#4f6d7a',   // Station blue-gray
      accent: '#7ea172',      // Summer greenery
      background: '#12161c'   // Evening slate
    },
    brief: {
      synopsis: 'Two estranged friends cross paths on a rural train station platform beneath a weathered iron canopy. Rain has just ceased; puddles across the asphalt mirror the radiant golden sunset breaking through parting storm clouds. One holds an umbrella with a subtle, bittersweet smile. The scene should breathe nostalgia, gentle warmth, and unspoken history.',
      actionRequirement: 'Reuniting and acknowledging each other on the platform.',
      emotionRequirement: 'Bittersweet nostalgia, gentle warmth, hesitation, and emotional tenderness.',
      environmentRequirement: 'Rural railway platform with iron canopy, tracks, and puddle reflections.',
      lightingRequirement: 'Golden hour sunset breaking through clearing rain clouds, with shimmering water reflections.',
      compositionRequirement: 'Medium two-shot framing capturing both characters and receding platform tracks.'
    },
    requirements: [
      {
        id: 'element-friends',
        label: 'Two Friends / Characters',
        category: 'element',
        primaryTerms: ['two friends', 'two people', 'figures', 'friends', 'duo', 'characters'],
        synonyms: ['old friends', 'companions', 'boy and girl', 'two youth', 'reunited figures', 'pair', 'schoolgirl', 'student', 'travelers', 'lone figure', 'person'],
        description: 'The two central individuals meeting on the platform.',
        weight: 9
      },
      {
        id: 'element-station',
        label: 'Rural Station & Platform',
        category: 'element',
        primaryTerms: ['station', 'platform', 'train platform', 'railway', 'tracks'],
        synonyms: ['rural station', 'iron canopy', 'railroad', 'train station', 'waiting bench', 'train tracks', 'railroad crossing', 'crossing'],
        description: 'The quiet countryside railway setting.',
        weight: 9
      },
      {
        id: 'element-puddles',
        label: 'Puddle Water Reflections',
        category: 'element',
        primaryTerms: ['puddle', 'reflection', 'puddles', 'wet asphalt', 'wet ground'],
        synonyms: ['mirrored surface', 'reflecting water', 'water puddles', 'glistening pavement', 'rainwater pools'],
        description: 'The water reflections mirroring the evening sky.',
        weight: 9
      },
      {
        id: 'element-clearing',
        label: 'Parting Rain Clouds / Umbrella',
        category: 'element',
        primaryTerms: ['parting clouds', 'umbrella', 'clearing sky', 'rain has stopped'],
        synonyms: ['after the rain', 'closed umbrella', 'clouds breaking', 'overcast clearing', 'drizzle ending', 'clear umbrella'],
        description: 'The visual transition of weather ending.',
        weight: 8
      },
      {
        id: 'emotion-nostalgia',
        label: 'Bittersweet Nostalgia & Warmth',
        category: 'emotion',
        primaryTerms: ['nostalgia', 'bittersweet', 'gentle smile', 'warmth', 'tender'],
        synonyms: ['quiet reunion', 'hesitant', 'poignant', 'unspoken feelings', 'soft gaze', 'melancholic joy', 'serene warmth', 'peaceful'],
        description: 'The emotional nuance of an unexpected reunion.',
        weight: 20
      },
      {
        id: 'composition-two-shot',
        label: 'Cinematic Framing & Perspective',
        category: 'composition',
        primaryTerms: ['medium shot', 'two-shot', 'eye-level', 'perspective', 'framing', 'wide shot'],
        synonyms: ['medium two-shot', 'vanishing tracks', 'balanced framing', 'rule of thirds', 'depth along platform', 'low angle', 'ground level', 'cinematic composition', 'atmospheric shot'],
        description: 'A cinematic medium shot balancing both characters with receding lines.',
        weight: 20
      },
      {
        id: 'lighting-golden-hour',
        label: 'Golden Hour Sunset Illumination',
        category: 'lighting',
        primaryTerms: ['golden hour', 'sunset', 'golden light', 'warm evening', 'rim lighting'],
        synonyms: ['dusk glow', 'glistening light', 'sunbeams', 'warm amber sunset', 'backlit figures'],
        description: 'The radiant sunset illuminating wet surfaces and figures.',
        weight: 15
      }
    ],
    contradictions: [
      {
        id: 'contradiction-time',
        conflictingTerms: ['midnight darkness', 'pitch black night', 'blinding noon glare'],
        explanation: 'The scene is set during a golden sunset breaking through clouds, not dead of night.',
        penalty: 7
      },
      {
        id: 'contradiction-mood',
        conflictingTerms: ['violent fistfight', 'bloody combat', 'screaming anger', 'explosion'],
        explanation: 'This is a bittersweet emotional reunion, not an action battle scene.',
        penalty: 8
      }
    ],
    defaultFeedback: {
      excellent: 'Subtle and deeply emotional. The reflection of golden sky across the platform conveys a sense of unspoken time.',
      good: 'Very pleasant mood. Enhance the character interaction and the specific reflection in the puddles.',
      needsWork: 'Specify the two figures, the station canopy, and the distinctive golden sunset breaking through the clouds.'
    }
  },

  {
    id: 'the-final-signal',
    title: 'The Final Signal',
    japaneseTitle: '彼方の信号',
    tagline: 'An astronaut watches a radiant ringed exoplanet from a damaged spacecraft.',
    difficulty: 'Master',
    difficultyStars: 4,
    durationMinutes: 12,
    maxAttempts: 5,
    palette: {
      primary: '#9b72cf',     // Cosmic violet
      secondary: '#2e3a59',   // Deep space void
      accent: '#f5a623',      // Amber cabin diode
      background: '#07080d'   // Obsidian vacuum
    },
    brief: {
      synopsis: 'Inside a silent, power-drained observation cockpit, an astronaut in a worn flight suit gazes out through a curved, hairline-cracked panoramic viewport. Floating micro-gravity dust drifts in front of her. Outside, a luminous violet and turquoise gas giant with majestic rings fills the void. Soft amber emergency diodes provide faint cockpit illumination, reflecting in her visor with quiet, breathtaking reverence.',
      actionRequirement: 'Gazing through the observation window into deep space.',
      emotionRequirement: 'Profound awe, serene wonder, isolation, and contemplative acceptance.',
      environmentRequirement: 'Unpowered cockpit / observation module with cracked glass, floating zero-g debris, and space void.',
      lightingRequirement: 'Cool radiant planetary glow (violet/teal) with subtle warm amber emergency LED indicators.',
      compositionRequirement: 'Cinematic over-the-shoulder framing; the immense planet dominating the upper frame with astronaut foregrounded.'
    },
    requirements: [
      {
        id: 'element-astronaut',
        label: 'Astronaut in Flight Suit',
        category: 'element',
        primaryTerms: ['astronaut', 'cosmonaut', 'pilot', 'space traveler'],
        synonyms: ['spacesuit', 'helmet visor', 'flight suit', 'lone explorer', 'figure in suit'],
        description: 'The lone explorer looking outward.',
        weight: 9
      },
      {
        id: 'element-planet',
        label: 'Luminous Ringed Exoplanet',
        category: 'element',
        primaryTerms: ['planet', 'gas giant', 'ringed planet', 'exoplanet', 'rings'],
        synonyms: ['celestial body', 'violet planet', 'space rings', 'planetary sphere', 'cosmic giant'],
        description: 'The majestic celestial world dominating outer space.',
        weight: 9
      },
      {
        id: 'element-cockpit',
        label: 'Cockpit Viewport & Zero-G Dust',
        category: 'element',
        primaryTerms: ['viewport', 'window', 'cockpit', 'observation deck', 'cracked glass'],
        synonyms: ['spacecraft interior', 'zero gravity dust', 'floating debris', 'curved glass', 'cabin window'],
        description: 'The damaged observation module and weightless environment.',
        weight: 9
      },
      {
        id: 'element-spacefield',
        label: 'Deep Space Starfield',
        category: 'element',
        primaryTerms: ['deep space', 'stars', 'starfield', 'cosmic void', 'nebula'],
        synonyms: ['vacuum of space', 'infinite darkness', 'outer space', 'stellar expanse'],
        description: 'The vast cosmic darkness framing the planet.',
        weight: 8
      },
      {
        id: 'emotion-awe',
        label: 'Profound Awe & Solitary Serenity',
        category: 'emotion',
        primaryTerms: ['awe', 'wonder', 'serenity', 'transcendent', 'peaceful'],
        synonyms: ['solitary contemplation', 'reverence', 'breathtaking', 'quiet isolation', 'humility before the cosmos'],
        description: 'The quiet spiritual awe of witnessing the sublime universe.',
        weight: 20
      },
      {
        id: 'composition-scale',
        label: 'Over-the-Shoulder & Scale Contrast',
        category: 'composition',
        primaryTerms: ['over the shoulder', 'scale contrast', 'rule of thirds', 'cinematic perspective'],
        synonyms: ['wide framing', 'vast scale', 'silhouette in foreground', 'deep focus', 'panoramic view'],
        description: 'Emphasizing human fragility against cosmic grandeur.',
        weight: 20
      },
      {
        id: 'lighting-planet-glow',
        label: 'Violet Planetary Glow & Amber Diode',
        category: 'lighting',
        primaryTerms: ['violet glow', 'planetary light', 'amber diode', 'emergency light', 'teal haze'],
        synonyms: ['ethereal illumination', 'visor reflection', 'flickering amber light', 'cool cosmic radiance', 'soft glow'],
        description: 'Atmospheric light cast by the alien world and faint cockpit indicators.',
        weight: 15
      }
    ],
    contradictions: [
      {
        id: 'contradiction-gravity',
        conflictingTerms: ['heavy objects falling down', 'running footsteps on grass', 'pouring rain on dirt'],
        explanation: 'The scene is set in zero-gravity space, not on a planetary surface with gravity and weather.',
        penalty: 8
      },
      {
        id: 'contradiction-panic',
        conflictingTerms: ['hysterical screaming', 'panicked flailing', 'frantic shouting into radio'],
        explanation: 'The emotional brief specifies serene transcendent awe and quiet contemplation, not panic.',
        penalty: 7
      }
    ],
    defaultFeedback: {
      excellent: 'Breathtaking cosmic framing. The contrast of human stillness against planetary majesty creates an authentic cinematic moment.',
      good: 'Evocative space scene. Make sure to detail the subtle amber cockpit diodes and floating micro-gravity dust.',
      needsWork: 'Ground the scene in its specific context: the damaged observation viewport, the ringed planet, and the serene astronaut.'
    }
  },

  {
    id: 'thousand-lanterns',
    title: 'A Thousand Lanterns',
    japaneseTitle: '千の燈火',
    tagline: 'A traveler enters a floating lantern festival along an indigo river at dusk.',
    difficulty: 'Advanced',
    difficultyStars: 3,
    durationMinutes: 10,
    maxAttempts: 5,
    palette: {
      primary: '#f39c12',     // Lantern orange
      secondary: '#2c3e50',   // Twilight indigo
      accent: '#c0392b',      // Festive vermilion
      background: '#0e1118'   // Evening mist
    },
    brief: {
      synopsis: 'A lone cloaked traveler pauses on a high wooden arched bridge overlooking a wide river during an ancient water festival at twilight. Hundreds of glowing paper lanterns drift downstream across the dark river, their reflections weaving golden ribbons into the misty indigo mountains. The traveler’s posture communicates reverent wonder and tranquil homecoming.',
      actionRequirement: 'Watching the floating lanterns from the wooden bridge.',
      emotionRequirement: 'Reverent wonder, tranquil homecoming, and poetic serenity.',
      environmentRequirement: 'High wooden arched bridge, wide river with floating lanterns, and misty evening mountains.',
      lightingRequirement: 'Twilight indigo sky illuminated by hundreds of floating golden flames reflecting on water.',
      compositionRequirement: 'High-angle panoramic vista with the arched bridge leading into the glowing river expanse.'
    },
    requirements: [
      {
        id: 'element-traveler',
        label: 'Cloaked Traveler / Observer',
        category: 'element',
        primaryTerms: ['traveler', 'wanderer', 'figure in cloak', 'lone person', 'visitor'],
        synonyms: ['cloaked figure', 'journeyer', 'voyager', 'spectator on bridge'],
        description: 'The lone wanderer witnessing the festival.',
        weight: 9
      },
      {
        id: 'element-bridge',
        label: 'Wooden Arched Bridge',
        category: 'element',
        primaryTerms: ['bridge', 'wooden bridge', 'arched bridge', 'railing'],
        synonyms: ['traditional bridge', 'timber span', 'high walkway', 'bridge viewpoint'],
        description: 'The elevated wooden structure where the character stands.',
        weight: 9
      },
      {
        id: 'element-floating-lanterns',
        label: 'Hundreds of Floating Lanterns',
        category: 'element',
        primaryTerms: ['floating lanterns', 'river lanterns', 'hundreds of lanterns', 'drifting lights'],
        synonyms: ['paper boats with candles', 'floating lights', 'water lanterns', 'toro nagashi', 'lantern procession'],
        description: 'The river filled with glowing floating lanterns.',
        weight: 9
      },
      {
        id: 'element-river-mountains',
        label: 'Misty River & Twilight Mountains',
        category: 'element',
        primaryTerms: ['river', 'mountains', 'mist', 'indigo dusk', 'twilight hills'],
        synonyms: ['waterway', 'distant peaks', 'valley mist', 'foggy riverbanks', 'evening landscape'],
        description: 'The natural landscape surrounding the river.',
        weight: 8
      },
      {
        id: 'emotion-wonder',
        label: 'Reverent Wonder & Homecoming',
        category: 'emotion',
        primaryTerms: ['wonder', 'reverence', 'tranquil', 'homecoming', 'peaceful'],
        synonyms: ['awe', 'enchanted', 'poetic stillness', 'quiet admiration', 'serene contentment'],
        description: 'The poetic emotional atmosphere of the festival.',
        weight: 20
      },
      {
        id: 'composition-panoramic',
        label: 'Panoramic High-Angle Vista',
        category: 'composition',
        primaryTerms: ['panoramic', 'high angle', 'vista', 'wide landscape', 'leading lines'],
        synonyms: ['expansive framing', 'birds eye view', 'sweeping view', 'depth of field along river'],
        description: 'A spacious vista capturing the river winding into the horizon.',
        weight: 20
      },
      {
        id: 'lighting-twilight-glow',
        label: 'Indigo Twilight & Golden Flame Glow',
        category: 'lighting',
        primaryTerms: ['twilight', 'indigo sky', 'golden flames', 'lantern reflections', 'dusk'],
        synonyms: ['deep blue dusk', 'warm golden reflections', 'soft atmospheric glow', 'radiant water'],
        description: 'The luminous balance between cool blue twilight and warm lantern reflections.',
        weight: 15
      }
    ],
    contradictions: [
      {
        id: 'contradiction-urban',
        conflictingTerms: ['modern concrete highway', 'skyscrapers', 'sports car traffic', 'subway train'],
        explanation: 'The brief describes an ancient festive river bridge with mountains, not a modern metropolis.',
        penalty: 8
      },
      {
        id: 'contradiction-light',
        conflictingTerms: ['bright noon daylight', 'harsh overhead sun', 'desert sun'],
        explanation: 'The scene is set during twilight dusk to allow the glowing lanterns to illuminate the river.',
        penalty: 7
      }
    ],
    defaultFeedback: {
      excellent: 'Spectacular cinematic vision. The high-angle perspective and floating lantern reflections capture pure anime film poetry.',
      good: 'Vivid atmosphere. Clarify the cloaked traveler’s vantage point on the wooden bridge to anchor the human scale.',
      needsWork: 'Describe the key scene requirements: the bridge, the floating river lanterns, and the misty dusk mountains.'
    }
  }
];
