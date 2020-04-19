import { ExtendedRecipe } from '~/app/model/extended-recipe';

export const MockRecipe = {
    'vegetarian': false,
    'vegan': false,
    'glutenFree': true,
    'dairyFree': false,
    'veryHealthy': false,
    'cheap': false,
    'veryPopular': true,
    'sustainable': false,
    'weightWatcherSmartPoints': 18,
    'gaps': 'no',
    'lowFodmap': false,
    'preparationMinutes': 20,
    'cookingMinutes': 480,
    'sourceUrl': 'http://jellytoastblog.com/2013/11/slow-cooker-meat-sauce.html/',
    'spoonacularSourceUrl': 'https://spoonacular.com/slow-cooker-meat-sauce-503683',
    'aggregateLikes': 10813,
    'spoonacularScore': 96,
    'healthScore': 39,
    'creditsText': 'Jelly Toast Blog',
    'sourceName': 'Jelly Toast Blog',
    'pricePerServing': 319.26,
    'extendedIngredients': [
        {
            'aisle': 'Produce',
            'image': 'bell-pepper-orange.png',
            'consistency': 'solid',
            'name': 'bell peppers',
            'original': '2 bell peppers, diced',
            'originalString': '2 bell peppers, diced',
            'originalName': 'bell peppers, diced',
            'amount': 2,
            'unit': '',
            'meta': [
                'diced'
            ],
            'metaInformation': [
                'diced'
            ],
            'measures': {
                'us': {
                    'amount': 2,
                    'unitShort': '',
                    'unitLong': ''
                },
                'metric': {
                    'amount': 2,
                    'unitShort': '',
                    'unitLong': ''
                }
            }
        },
        {
            'id': 10211821,
            'aisle': 'Produce',
            'image': 'bell-pepper-orange.png',
            'consistency': 'solid',
            'name': 'bell pepper',
            'original': 'black pepper',
            'originalString': 'black pepper',
            'originalName': 'black pepper',
            'amount': 8,
            'unit': 'servings',
            'meta': [
                'black'
            ],
            'metaInformation': [
                'black'
            ],
            'measures': {
                'us': {
                    'amount': 8,
                    'unitShort': 'servings',
                    'unitLong': 'servings'
                },
                'metric': {
                    'amount': 8,
                    'unitShort': 'servings',
                    'unitLong': 'servings'
                }
            }
        },
        {
            'id': 10011693,
            'aisle': 'Canned and Jarred',
            'image': 'tomatoes-canned.png',
            'consistency': 'solid',
            'name': 'canned tomatoes',
            'original': '3 28oz cans crushed tomatoes',
            'originalString': '3 28oz cans crushed tomatoes',
            'originalName': 'crushed tomatoes',
            'amount': 84,
            'unit': 'oz',
            'meta': [
                'crushed',
                'canned'
            ],
            'metaInformation': [
                'crushed',
                'canned'
            ],
            'measures': {
                'us': {
                    'amount': 84,
                    'unitShort': 'oz',
                    'unitLong': 'ounces'
                },
                'metric': {
                    'amount': 2.381,
                    'unitShort': 'kilogram',
                    'unitLong': 'kilograms'
                }
            }
        },
        {
            'id': 1034053,
            'aisle': 'Oil, Vinegar, Salad Dressing',
            'image': 'olive-oil.jpg',
            'consistency': 'liquid',
            'name': 'extra virgin olive oil',
            'original': '2 teaspoons extra virgin olive oil',
            'originalString': '2 teaspoons extra virgin olive oil',
            'originalName': 'extra virgin olive oil',
            'amount': 2,
            'unit': 'teaspoons',
            'meta': [],
            'metaInformation': [],
            'measures': {
                'us': {
                    'amount': 2,
                    'unitShort': 'tsps',
                    'unitLong': 'teaspoons'
                },
                'metric': {
                    'amount': 2,
                    'unitShort': 'tsps',
                    'unitLong': 'teaspoons'
                }
            }
        },
        {
            'id': 2049,
            'aisle': 'Produce;Spices and Seasonings',
            'image': 'thyme.jpg',
            'consistency': 'solid',
            'name': 'fresh thyme',
            'original': '1 teaspoon dried thyme (or 2 teaspoons fresh)',
            'originalString': '1 teaspoon dried thyme (or 2 teaspoons fresh)',
            'originalName': 'dried thyme (or 2 teaspoons fresh)',
            'amount': 1,
            'unit': 'teaspoon',
            'meta': [
                'dried',
                'fresh',
                '(or 2 teaspoons )'
            ],
            'metaInformation': [
                'dried',
                'fresh',
                '(or 2 teaspoons )'
            ],
            'measures': {
                'us': {
                    'amount': 1,
                    'unitShort': 'tsp',
                    'unitLong': 'teaspoon'
                },
                'metric': {
                    'amount': 1,
                    'unitShort': 'tsp',
                    'unitLong': 'teaspoon'
                }
            }
        },
        {
            'id': 11215,
            'aisle': 'Produce',
            'image': 'garlic.png',
            'consistency': 'solid',
            'name': 'garlic',
            'original': '6 cloves garlic, minced',
            'originalString': '6 cloves garlic, minced',
            'originalName': 'garlic, minced',
            'amount': 6,
            'unit': 'cloves',
            'meta': [
                'minced'
            ],
            'metaInformation': [
                'minced'
            ],
            'measures': {
                'us': {
                    'amount': 6,
                    'unitShort': 'cloves',
                    'unitLong': 'cloves'
                },
                'metric': {
                    'amount': 6,
                    'unitShort': 'cloves',
                    'unitLong': 'cloves'
                }
            }
        },
        {
            'id': 10023572,
            'aisle': 'Meat',
            'image': 'fresh-ground-beef.jpg',
            'consistency': 'solid',
            'name': 'ground chuck',
            'original': '1 lb ground chuck',
            'originalString': '1 lb ground chuck',
            'originalName': 'ground chuck',
            'amount': 1,
            'unit': 'lb',
            'meta': [],
            'metaInformation': [],
            'measures': {
                'us': {
                    'amount': 1,
                    'unitShort': 'lb',
                    'unitLong': 'pound'
                },
                'metric': {
                    'amount': 453.592,
                    'unitShort': 'g',
                    'unitLong': 'grams'
                }
            }
        },
        {
            'id': 7063,
            'aisle': 'Meat',
            'image': 'meat-ground.jpg',
            'consistency': 'solid',
            'name': 'ground sausage',
            'original': '2 lbs ground Italian sausage (I used sweet)',
            'originalString': '2 lbs ground Italian sausage (I used sweet)',
            'originalName': 'ground Italian sausage (I used sweet)',
            'amount': 2,
            'unit': 'lbs',
            'meta': [
                'sweet',
                'italian',
                '(I used )'
            ],
            'metaInformation': [
                'sweet',
                'italian',
                '(I used )'
            ],
            'measures': {
                'us': {
                    'amount': 2,
                    'unitShort': 'lb',
                    'unitLong': 'pounds'
                },
                'metric': {
                    'amount': 907.185,
                    'unitShort': 'g',
                    'unitLong': 'grams'
                }
            }
        },
        {
            'id': 1082047,
            'aisle': 'Spices and Seasonings',
            'image': 'salt.jpg',
            'consistency': 'solid',
            'name': 'kosher salt',
            'original': 'kosher salt',
            'originalString': 'kosher salt',
            'originalName': 'kosher salt',
            'amount': 8,
            'unit': 'servings',
            'meta': [],
            'metaInformation': [],
            'measures': {
                'us': {
                    'amount': 8,
                    'unitShort': 'servings',
                    'unitLong': 'servings'
                },
                'metric': {
                    'amount': 8,
                    'unitShort': 'servings',
                    'unitLong': 'servings'
                }
            }
        },
        {
            'id': 11260,
            'aisle': 'Produce',
            'image': 'mushrooms-white.jpg',
            'consistency': 'solid',
            'name': 'mushrooms',
            'original': '8 oz mushrooms, cleaned and sliced',
            'originalString': '8 oz mushrooms, cleaned and sliced',
            'originalName': 'mushrooms, cleaned and sliced',
            'amount': 8,
            'unit': 'oz',
            'meta': [
                'cleaned',
                'sliced'
            ],
            'metaInformation': [
                'cleaned',
                'sliced'
            ],
            'measures': {
                'us': {
                    'amount': 8,
                    'unitShort': 'oz',
                    'unitLong': 'ounces'
                },
                'metric': {
                    'amount': 226.796,
                    'unitShort': 'g',
                    'unitLong': 'grams'
                }
            }
        },
        {
            'id': 11282,
            'aisle': 'Produce',
            'image': 'brown-onion.png',
            'consistency': 'solid',
            'name': 'onions',
            'original': '2 onions, diced',
            'originalString': '2 onions, diced',
            'originalName': 'onions, diced',
            'amount': 2,
            'unit': '',
            'meta': [
                'diced'
            ],
            'metaInformation': [
                'diced'
            ],
            'measures': {
                'us': {
                    'amount': 2,
                    'unitShort': '',
                    'unitLong': ''
                },
                'metric': {
                    'amount': 2,
                    'unitShort': '',
                    'unitLong': ''
                }
            }
        },
        {
            'id': 1033,
            'aisle': 'Cheese',
            'image': 'parmesan.jpg',
            'consistency': 'solid',
            'name': 'parmesan',
            'original': '1 parmesan rind',
            'originalString': '1 parmesan rind',
            'originalName': 'parmesan rind',
            'amount': 1,
            'unit': '',
            'meta': [],
            'metaInformation': [],
            'measures': {
                'us': {
                    'amount': 1,
                    'unitShort': '',
                    'unitLong': ''
                },
                'metric': {
                    'amount': 1,
                    'unitShort': '',
                    'unitLong': ''
                }
            }
        },
        {
            'id': 1032009,
            'aisle': 'Spices and Seasonings',
            'image': 'red-pepper-flakes.jpg',
            'consistency': 'solid',
            'name': 'red pepper flakes',
            'original': '1/4-1/2 teaspoon crushed red pepper flakes (to your taste)',
            'originalString': '1/4-1/2 teaspoon crushed red pepper flakes (to your taste)',
            'originalName': 'crushed red pepper flakes (to your taste)',
            'amount': 0.25,
            'unit': 'teaspoon',
            'meta': [
                'red',
                'crushed',
                '(to your taste)'
            ],
            'metaInformation': [
                'red',
                'crushed',
                '(to your taste)'
            ],
            'measures': {
                'us': {
                    'amount': 0.25,
                    'unitShort': 'tsps',
                    'unitLong': 'teaspoons'
                },
                'metric': {
                    'amount': 0.25,
                    'unitShort': 'tsps',
                    'unitLong': 'teaspoons'
                }
            }
        },
        {
            'id': 14096,
            'aisle': 'Alcoholic Beverages',
            'image': 'red-wine.jpg',
            'consistency': 'liquid',
            'name': 'red wine',
            'original': '1/2 cup red wine',
            'originalString': '1/2 cup red wine',
            'originalName': 'red wine',
            'amount': 0.5,
            'unit': 'cup',
            'meta': [
                'red'
            ],
            'metaInformation': [
                'red'
            ],
            'measures': {
                'us': {
                    'amount': 0.5,
                    'unitShort': 'cups',
                    'unitLong': 'cups'
                },
                'metric': {
                    'amount': 118.294,
                    'unitShort': 'ml',
                    'unitLong': 'milliliters'
                }
            }
        },
        {
            'id': 11887,
            'aisle': 'Pasta and Rice',
            'image': 'tomato-paste.jpg',
            'consistency': 'solid',
            'name': 'tomato paste',
            'original': '1 can tomato paste',
            'originalString': '1 can tomato paste',
            'originalName': 'tomato paste',
            'amount': 1,
            'unit': 'can',
            'meta': [],
            'metaInformation': [],
            'measures': {
                'us': {
                    'amount': 1,
                    'unitShort': 'can',
                    'unitLong': 'can'
                },
                'metric': {
                    'amount': 1,
                    'unitShort': 'can',
                    'unitLong': 'can'
                }
            }
        }
    ],
    'id': 503683,
    'title': 'slow cooker meat sauce',
    'readyInMinutes': 480,
    'servings': 8,
    'image': 'https://spoonacular.com/recipeImages/503683-556x370.jpg',
    'imageType': 'jpg',
    'summary': 'Slow cooker meat sauce is a <b>gluten free and primal</b> sauce.One serving contains <b>654 calories</b>, <b>34g of protein</b>, and <b>44g of fat</b>. This recipe serves 8 and costs $2.82 per serving. This recipe from Jelly Toast Blog has 10813 fans. From preparation to the plate, this recipe takes approximately <b>8 hours</b>. Head to the store and pick up extra virgin olive oil, pepper flakes, garlic, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is amazing. Try <a href="https://spoonacular.com/recipes/slow-cooker-tomato-meat-sauce-481492">Slow Cooker Tomato Meat Sauce</a>, <a href="https://spoonacular.com/recipes/meat-lovers-slow-cooker-spaghetti-sauce-259576">Meat-Lover\'s Slow Cooker Spaghetti Sauce</a>, and <a href="https://spoonacular.com/recipes/slow-cooker-pasta-meat-sauce-cleanplate 510870">Slow Cooker Pasta Meat Sauce #CleanPlate</a> for similar recipes.',
    'cuisines': [],
    'dishTypes': [
        'sauce'
    ],
    'diets': [
        'gluten free'
    ],
    'occasions': [],
    'winePairing': {},
    'instructions': 'Directions:In a dutch oven or heavy bottomed pot set over medium/high heat, brown sausage and ground chuck. Remove from heat, drain excess fat, and transfer cooked sausage and beef to 6 quart slow cooker.Return Dutch Oven to stove. Heat olive oil over medium high heat. Add onions, peppers and garlic and cook, stirring frequently, until onions and peppers are soft and garlic is fragrant, about 5 minutes. Add mushrooms and cook for an additional 3-5 minutes. Transfer vegetable mixture to slow cooker.Add crushed tomatoes, tomato paste, wine, parmesan rind, thyme, salt, pepper and crushed red pepper flakes to slow cooker and stir to combine.Cook on low for 6-8 hours.Serve sauce over your favorite pasta, baked potatoes, garlic toast.',
    'analyzedInstructions': [
        {
            'name': '',
            'steps': [
                {
                    'number': 1,
                    'step': 'Remove from heat, drain excess fat, and transfer cooked sausage and beef to 6 quart slow cooker.Return Dutch Oven to stove.',
                    'ingredients': [
                        {
                            'id': 1017063,
                            'name': 'sausage',
                            'image': 'raw-pork-sausage.png'
                        },
                        {
                            'id': 23572,
                            'name': 'beef',
                            'image': 'beef-cubes-raw.png'
                        }
                    ],
                    'equipment': [
                        {
                            'id': 404718,
                            'name': 'slow cooker',
                            'image': 'slow-cooker.jpg'
                        },
                        {
                            'id': 404667,
                            'name': 'dutch oven',
                            'image': 'dutch-oven.jpg'
                        },
                        {
                            'id': 404794,
                            'name': 'stove',
                            'image': 'oven.jpg'
                        }
                    ]
                },
                {
                    'number': 2,
                    'step': 'Heat olive oil over medium high heat.',
                    'ingredients': [
                        {
                            'id': 4053,
                            'name': 'olive oil',
                            'image': 'olive-oil.jpg'
                        }
                    ],
                    'equipment': []
                },
                {
                    'number': 3,
                    'step': 'Add onions, peppers and garlic and cook, stirring frequently, until onions and peppers are soft and garlic is fragrant, about 5 minutes.',
                    'ingredients': [
                        {
                            'id': 11215,
                            'name': 'garlic',
                            'image': 'garlic.png'
                        },
                        {
                            'id': 11282,
                            'name': 'onion',
                            'image': 'brown-onion.png'
                        }
                    ],
                    'equipment': [],
                    'length': {
                        'number': 5,
                        'unit': 'minutes'
                    }
                },
                {
                    'number': 4,
                    'step': 'Add mushrooms and cook for an additional 3-5 minutes.',
                    'ingredients': [
                        {
                            'id': 11260,
                            'name': 'mushrooms',
                            'image': 'mushrooms.png'
                        }
                    ],
                    'equipment': [],
                    'length': {
                        'number': 5,
                        'unit': 'minutes'
                    }
                },
                {
                    'number': 5,
                    'step': 'Transfer vegetable mixture to slow cooker.',
                    'ingredients': [],
                    'equipment': [
                        {
                            'id': 404718,
                            'name': 'slow cooker',
                            'image': 'slow-cooker.jpg'
                        }
                    ]
                },
                {
                    'number': 6,
                    'step': 'Add crushed tomatoes, tomato paste, wine, parmesan rind, thyme, salt, pepper and crushed red pepper flakes to slow cooker and stir to combine.Cook on low for 6-8 hours.',
                    'ingredients': [
                        {
                            'id': 1032009,
                            'name': 'red pepper flakes',
                            'image': 'red-pepper-flakes.jpg'
                        },
                        {
                            'id': 11693,
                            'name': 'crushed tomatoes',
                            'image': 'tomatoes-canned.png'
                        },
                        {
                            'id': 11887,
                            'name': 'tomato paste',
                            'image': 'tomato-paste.jpg'
                        },
                        {
                            'id': 1033,
                            'name': 'parmesan',
                            'image': 'parmesan.jpg'
                        },
                        {
                            'id': 2049,
                            'name': 'thyme',
                            'image': 'thyme.jpg'
                        },
                        {
                            'id': 2047,
                            'name': 'salt',
                            'image': 'salt.jpg'
                        }
                    ],
                    'equipment': [
                        {
                            'id': 404718,
                            'name': 'slow cooker',
                            'image': 'slow-cooker.jpg'
                        }
                    ]
                },
                {
                    'number': 7,
                    'step': 'Serve sauce over your favorite pasta, baked potatoes, garlic toast.',
                    'ingredients': [
                        {
                            'id': 11215,
                            'name': 'garlic',
                            'image': 'garlic.png'
                        }
                    ],
                    'equipment': []
                }
            ]
        }
    ],
    'originalId': null
} as ExtendedRecipe;
