///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = {
    name: `BBQ Chicken`,
    price: 10.99,
    category: `entree`,
    popularity: 9,
    rating: 4.75,
    tags: [`meat`,`premium`,`customer favorites`]
}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza.tags[1])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

let {price} = pizza
console.log(price)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

let {category} = pizza
console.log(category)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

let foodArr = [
    {
        name: `Spinach Artichoke Dip`,
        price: 7.99,
        category: `appetizer`,
        popularity: 7,
        rating: 4.45,
        tags: [`appetizer`,`vegetarian`]
    },
    {
        name: `Chicken Strips`,
        price: 6.66,
        category: `Kid's Meal`,
        popularity: 10,
        rating: 4.9,
        tags: [`meat`,`kids`,`customer favorites`, `entree`]
    },
    {
        name: `Buffalo Wings`,
        price: 9.99,
        category: `appetizer`,
        popularity: 8,
        rating: 4.6,
        tags: [`meat`,`customer favorites`,`appetizer`]
    },
    {
        name: `Squid Ink Pasta`,
        price: 22.99,
        category: `entree`,
        popularity: 5,
        rating: 4,
        tags: [`experimental`,`premium`,`entree`]
    },
    {
        name: `Long Island Iced Tea`,
        price: 7.50,
        category: `drinks`,
        popularity: 9,
        rating: 4.77,
        tags: [`alcohol`,`cocktails`,`customer favorites`,`drinks`]
    }
]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/


const filteredFood = foodArr.filter(food => food.tags.includes(`meat`))
console.log(filteredFood)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

const filterByProperty = (property, number, type) => {
    let filteredFood; 
    if (type === `above`) {
        filteredFood = foodArr.filter((food) => {
            return food[property] > number;
        })
    } else if (type === `below`) {
        filteredFood = foodArr.filter((food) => {
            return food[property] < number;
        })
    }  
    return filteredFood;
}


/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

console.log(filterByProperty(`price`, 15, `below`))