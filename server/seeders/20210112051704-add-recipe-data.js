"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("recipes", [
      {
        title: "Artichoke Dip",
        desc: "A basic dip popular at parties.",
        preparation:
          "Preheat oven to 350°F. Coarsely chop artichoke hearts. Combine all ingredients in a medium bowl. Transfer mixture to 4-cup ovenproof soufflé dish or small casserole dish. Sprinkle some parmesan over the top for a thin crispy crust. Bake dip until heated through, about 30 minutes",
        image: "images/image01.jpg",
        category: "American",
        createdAt: new Date(),
        updatedAt: new Date(),
        ingredients: "14oz ounce can artichoke hearts; drained, 1/3 cup mayo, 1/2 cup sour cream, 3/4 cup grated Parmesan cheese, 1/4 cup minced onion, 2 cloves minced garlic, 1/2 tsp black pepper"
      },
      {
        title: "Spatchcock Chicken",
        desc:
          "Spatchcocking makes for a bird with super crisp skin and moist meat, in about half the time it takes to roast a whole bird.",
        preparation:
          "Preheat oven to 450 degrees F. Line a large rimmed baking sheet with foil. Place chicken, breast side down, on a work surface. Starting at the tail end, cut along both sides of backbone with kitchen shears. Remove backbone. Grabbing hold of both sides of the chicken, open it like a book. Turn breast side up. Push down on each side of breast with your hands until you hear it crack. Flatten chicken and transfer to one short end of the prepared baking sheet. Repeat with the second chicken. Combine salt, tarragon, paprika, and pepper in a small bowl. Stir in oil. Run your fingers under chicken skin and rub tarragon paste under skin. Slide lemon slices under skin, in a single layer. Roast until skin is crisp and an instant-read thermometer inserted into thickest part of breast reads 165 degrees F, about 35 minutes. Let stand 5 minutes before cutting each chicken into 8 pieces.",
        image: "images/image02.jpg",
        category: "American",
        createdAt: new Date(),
        updatedAt: new Date(),
        ingredients: "2 (3 1/2) pound whole chickens, wingtips removed; drained, 2 teaspoons salt, 1 teaspoon dried tarragon, 1 teaspoon paprika, 1/4 teaspoon black pepper, 4 teaspoons olive oil, 2 lemons thinly sliced and seeded",
      },
      {
        title: "Klupskies (Polish Burgers)",
        desc: "A burger. Polish style",
        preparation:
          "Mix ground beef, onion, green pepper, egg, ketchup, and sea salt together in a bowl; mix in the white bread pieces until evenly distributed. Form the mixture into 4 patties. Spray a large skillet with olive oil cooking spray and set over medium heat. Cook the burgers until well-browned on the bottoms, about 10 minutes; flip the burgers and cook until the meat is no longer pink and the juices run clear, 8 to 10 more minutes.",
        image: "images/image03.jpg",
        category: "Polish",
        createdAt: new Date(),
        updatedAt: new Date(),
        ingredients: "1 pound ground beef, 1 small onion; diced, 1 egg, 1/2 green pepper; diced, 2 tablespoons ketchup, 1/4 teaspoon sea salt, 2 slices white bread torn into small pieces"
      },
      {
        title: "Simple Macaroni and Cheese",
        desc: "A cheap and tasty Mac n Cheese!",
        preparation:
          "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through, 8 minutes. Drain. Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes. Fold macaroni into cheese sauce until coated.",
        image: "images/image04.jpg",
        category: "American",
        createdAt: new Date(),
        updatedAt: new Date(),
        ingredients: "1 (8oz) box elbow macaroni, 1/4 cup of butter, 1/4 cup of flour, 1/2 teaspoon salt, 2 cups milk, 2 cups shredded Cheddar cheese"
      },
      {
        title: "Beef Stir-Fry",
        desc: "Great for a busy weeknight!",
        preparation:
          "Heat vegetable oil in a large wok or skillet over medium-high heat; cook and stir beef until browned, 3 to 4 minutes. Move beef to the side of the wok and add broccoli, bell pepper, carrots, green onion, and garlic to the center of the wok. Cook and stir vegetables for 2 minutes. Stir beef into vegetables and season with soy sauce and sesame seeds. Continue to cook and stir until vegetables are tender, about 2 more minutes.",
        image: "images/image05.jpg",
        category: "Asian",
        createdAt: new Date(),
        updatedAt: new Date(),
        ingredients: "2 tablespoons vegetable oil, 1 pound beef sirloin; cut into 2-inch strips, 1 1/2 cups fresh broccoli florets, 1 red bell pepper; cut into matchsticks, 2 carrots; thinly sliced, 1 green onion; chopped, 1 teaspoon minced garlic, 2 tablespoons soy sauce, 2 tablespoons sesame seeds; toasted"
      },
      {
        title: "Sheet Pan Olive Bar Chicken",
        desc: "Full of rich flavors, almost no prep, and uses only one pan!",
        preparation:
          "Heat oven to 375° F. Spread the potatoes onto a rimmed baking sheet. Drizzle with 1 tablespoon olive oil and 1/2 teaspoon sea salt. Toss to coat. Roast in the oven for 15 minutes. Remove potatoes from the oven. Add everything else (including the remaining olive oil and salt) to the pan with the potatoes, using a spatula to toss it all together. Spread the ingredients out evenly and roast for 35 minutes longer until the chicken is cooked through.",
        image: "images/image06.jpg",
        category: "Mediterranean",
        createdAt: new Date(),
        updatedAt: new Date(),
        ingredients: 
          "8-10 fingerling potatoes cut in half, 2 tablespoons olive oil, 1 teaspoon salt divided, 2 pounds boneless, skinless thighs, 1 lemon; sliced, 1 small red onion; cut lengthwise into 8 wedges, 1 pound Olive bar offerings (peppers, olives, roasted garlic, marinated artichoke hearts etc.) ,1/2 teaspoon black pepper, 1 teaspoon onion powder",
      },
      {
        title: "Carne Asada",
        desc: "All about the flavor of grilled meat —rich and hearty—",
        preparation:
          "Whisk the orange juice, lime juice, olive oil, garlic, oregano, chili powder, salt, cumin, pepper and cayenne in a small bowl. Place the steak in a 9x13 baking dish or gallon size ziplock bag and cover it with the marinade until fully coated. Refrigerate for 1 to 4 hours. Preheat the grill medium-high heat (400-450°F). Discard the extra marinade and season steak with salt and pepper. Grill the steaks for 5-8 minutes per side, depending on the thickness. Remove steaks and allow to rest for 5 minutes. Slice thinly against the grain and serve.",
        image: "images/image07.jpg",
        category: "Mexican",
        createdAt: new Date(),
        updatedAt: new Date(),
        ingredients:
          "2 pounds flank or skirt steak, 1 orange; juiced, 2 limes; juiced, 2 tablespoons olive oil, 8 cloves of garlic; minced, 2 teaspoons oregano, 2 teaspoons chili powder, teaspoons kosher salt, 2 teaspoons cumin, 1 teaspoon black pepper, 1/4 teaspoon cayenne pepper",
      },
      {
        title: "Chili con Carne",
        desc:
          "The longer it sits in the fridge, the better the taste seems to get.",
        preparation:
          "In a Dutch oven, cook beef over medium heat until no longer pink; drain and set aside. n the same pot, heat oil; saute onions until tender. Add garlic; cook 1 minute longer. Stir in the green pepper, salt, chili powder, bouillon, cayenne, cinnamon, cumin and oregano. Cook for 2 minutes, stirring until combined. Add tomatoes and browned beef. Stir in water. Bring to a boil. Reduce heat; cover and simmer for about 1 hour. Add beans and heat through. If desired top with sour cream and jalapeno.",
        image: "images/image08.jpg",
        category: "Mexican",
        createdAt: new Date(),
        updatedAt: new Date(),
        ingredients:
          "2 pounds ground beef, 2 tablespoons olive oil, 2 medium onions, chopped, 2 garlic cloves, minced, 1 medium green pepper, chopped, 1-1/2 teaspoons salt, 2 tablespoons chili powder, 3 teaspoons beef bouillon granules, 1/8 teaspoon cayenne pepper, 1/4 teaspoon ground cinnamon, 1 teaspoon ground cumin, 1 teaspoon dried oregano, 2 cans (14-1/2 ounces each) diced tomatoes, undrained, 1 cup water, 1 can (16 ounces) kidney beans; rinsed and drained, sour cream and jalapeno slices; optional",
      },
      {
        title: "PB & J Tacos",
        desc: "Great fun for the kids!",
        preparation:
          "Using a large glass or biscuit cutter, cut bread into rounds and discard crust. Spread peanut butter to the edges of each bread round. Repeat with jelly, then sprinkle with strawberries, blueberries, and graham crackers. Drizzle with honey, fold like a taco and serve.",
        image: "images/image09.jpg",
        category: "Mexican",
        createdAt: new Date(),
        updatedAt: new Date(),
        ingredients:
          "4 slices white bread, 1/3 cup peanut butter, 1/3 cup jelly, 1/2 cup chopped strawberries, 1/2 cup blueberries, 1/4 c. crushed graham crackers, Honey for drizzling,"
      },
      {
        title: "Donut Apples",
        desc: "A tasty snack for the kids!",
        preparation:
          "Divide cream cheese among three small bowls. In one bowl, add 1 teaspoon honey. In another bowl, add melted chocolate. In the last bowl, add remaining 1 teaspoon honey and pink food coloring. Stir each bowl together until combined. Slice apples and use a biscuit or cookie cutter to hollow out centers. Spread mixtures on apple slices and top with sprinkles.",
        image: "images/image010.jpg",
        category: "American",
        createdAt: new Date(),
        updatedAt: new Date(),
        ingredients:
          "12 oz cream cheese, softened, cut into thirds, 2 teaspoons honey, divided, 1/2 cup melted chocolate, 2 drops pink food coloring, 3 apples, Assorted sprinkles; for decorating",
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
