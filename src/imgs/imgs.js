import Chicken_club from './Chicken-Club.jpg'
import Chicken_Ranch from './Chicken-Ranch.jpg'
import Chicken_Alfredo from './Chicken-Alfredo.png'
import Chicken_Bacon_ranch from './chicken-bacon-ranch-pizza.jpg'
import Chicken_barbeque from './chicken-bbq.png'
import Chicken_zaatar from './Chicken-zaatar.jpg'
import Chopped_Meat from './Chopped-Meat.jpg'
import Italian_Meat from './italian-meat1.jpg'
import Meat_loaf from './Meat-Loaf.jpg'
import Tuna from './Tuna.jpg'
import Salmon from './Salmon.jpg'
import Fried_Shrimps from './Fried-Shrimps.jpg'
import Margherita from './Margherita.jpg'
import Four_Cheese from './Four-Cheese.jpg'
import back from "./arrow-back.png"
import Cesar from './Cesar.jpg'
import Potato_Salad from './Potato Salad.jpg'
import Thousand_Island from './Thousand-Island.jpg'
import vegetable_Salad from './vegetable-Salad.jpg'
import Garlic from './Garlic.jpg'
import cart from './cart.png'
import increment from './add_icon_green.png'
import decrement from './remove_icon_red.png'
import Garlic_bread from './Garlic_bread.jpg'
import Cheesy_Garlic_Bread from './Cheesy_Garlic_Bread.jpg'
import Garlic_bites from './Garlic_bites.jpg'
import wedges from './wedges.jpg'
import wings from './wings.jpg'
import fries from './fries.jpg'
import logo from './logo.png'
import logo2 from './logo2.png'
import pizza1 from "./pizza1.jpeg"
import pizza2 from "./pizza2.jpg"
import pizza3 from "./pizza3.jpg"
import Mozzarella_Sticks from './Mozzarella_Sticks.jpg'
import Coleslaw from './coleslaw.jpg'

export const imgs = {
    pizza1,
    pizza2,
    pizza3,
    logo2,
    logo,
    increment,
    decrement,
    cart,
    back,
    Chicken_Bacon_ranch,
    Chicken_club,
    Chicken_Alfredo,
    Chicken_barbeque,
    Chicken_Ranch,
    Meat_loaf,
    Italian_Meat,
    Chopped_Meat,
    Tuna,
    Fried_Shrimps,
    Salmon,
    Four_Cheese,
    Margherita,
    Cesar,
    Potato_Salad,
    Thousand_Island,
    vegetable_Salad,
    Coleslaw,
    Garlic,
    Garlic_bites,
    Garlic_bread,
    Cheesy_Garlic_Bread,
    wedges,
    wings,
    fries,
    Mozzarella_Sticks
}

export const food_list = [
    {
        _id: "1",
        name: "Chicken Club",
        image: Chicken_club,
        category: "chicken"
    },
    {
        _id: "2",
        name: "Chicken Ranch",
        image: Chicken_Ranch,
        category: "chicken"

    }, {
        _id: "3",
        name: "Chicken Alfredo",
        image: Chicken_Alfredo,
        category: "chicken"
    }, {
        _id: "4",
        name: "Chicken Zaatar",
        image: Chicken_zaatar,
        category: "chicken"
    }, {
        _id: "5",
        name: "Chicken Bacon Ranch",
        image: Chicken_Bacon_ranch,
        category: "chicken"
    }
    , {
        _id: "6",
        name: "Chicken Barbeque",
        image: Chicken_barbeque,
        category: "chicken"
    }, {
        _id: "7",
        name: " Meat loaf",
        image: Meat_loaf,
        category: "meat"
    },
    {
        _id: "8",
        name: "Italian Meat",
        image: Italian_Meat,
        category: "meat"
    }, {
        _id: "9",
        name: "Chopped Meat",
        image: Chopped_Meat,
        category: "meat"
    }, {
        _id: "10",
        name: " Tuna",
        image: Tuna,
        category: "seafood"
    },
    {
        _id: "11",
        name: "Fried Shrimps",
        image: Fried_Shrimps,
        category: "seafood"
    }, {
        _id: "12",
        name: "Salmon Pizza",
        image: Salmon,
        category: "seafood"
    },
    {
        _id: "13",
        name: "Margherita",
        image: Margherita,
        category: "cheese"
    }, {
        _id: "14",
        name: "Four_Cheese",
        image: Four_Cheese,
        category: "cheese"
    }, {
        _id: "15",
        name: "Garlic",
        image: Garlic,
        price: 1.99,
        category: "salad"
    }, {
        _id: "16",
        name: "Thousand Island",
        image: Thousand_Island,
        price: 2.20,
        category: "salad"
    }, {
        _id: "17",
        name: "vegetables Salad",
        image: vegetable_Salad,
        price: 3.15,
        category: "salad"
    },
    {
        _id: "18",
        name: "Cesar Salad",
        image: Cesar,
        price: 4.80,
        category: "salad"
    },
    {
        _id: "19",
        name: "Potato Salad",
        image: Potato_Salad,
        price: 2.30,
        category: "salad"
    },
    {
        _id: "20",
        name: "Coleslaw",
        image: Coleslaw,
        price: 2.50,
        category: "salad"
    },

    {
        _id: "21",
        name: "Garlic Bread",
        image: Garlic_bread,
        price: 2.20,
        category: "appetizers"
    },
    {
        _id: "22",
        name: "Cheesy Garlic Bread",
        image: Cheesy_Garlic_Bread,
        price: 3.20,
        category: "appetizers"
    },
    {
        _id: "23",
        name: "Garlic Bites",
        image: Garlic_bites,
        price: 2.40,
        category: "appetizers"
    },
    {
        _id: "24",
        name: "Fries",
        image: fries,
        price: 2.30,
        category: "appetizers"
    },
    {
        _id: "25",
        name: "Wedges",
        image: wedges,
        price: 2.35,
        category: "appetizers"
    },
    {
        _id: "26",
        name: "Wings",
        image: wings,
        price: 4.25,
        category: "appetizers"
    },
    {
        _id: "27",
        name: "Mozzarella Sticks",
        image: Mozzarella_Sticks,
        price: 3.75,
        category: "appetizers"
    }

]

export const extrasList = [
    { name: "Chicken", price: 3 },
    { name: "Pepperoni", price: 3 },
    { name: "Meat/Minced Meat", price: 3 },
    { name: "Pastrami", price: 3 },
    { name: "Tuna", price: 3 },
    { name: "Hot Dog", price: 3 },
    { name: "Blue Cheese", price: 2.80 },
    { name: "Mozzarella Cheese", price: 2.80 },
    { name: "Cheddar Cheese", price: 2.80 },
    { name: "Parmesan Cheese", price: 2.80 },
    { name: "Ranch Sauce", price: 2.30 },
    { name: "Barbecue Sauce", price: 2.30 },
    { name: "Tomato Sauce", price: 2.20 },
    { name: "Ranch With Sriracha Sauce", price: 2.35 },
    { name: "Hot Sauce", price: 2.35 },
    { name: "Bell Pepper", price: 2.30 },
    { name: "Onion", price: 1.40 },
    { name: "Olives", price: 1.40 },
    { name: "Mushroom", price: 1.32 },
    { name: "Jalapeno", price: 1.32 }
];
export const sizeList = [
    { name: "Large", price: 25 },
    { name: "Small", price: 12 },
    { name: "Medium", price: 19 }
];
export const menuOptions = [
    { name: "chicken", label: "Chicken Pizza" },
    { name: "meat", label: "Meat Pizza" },
    { name: "cheese", label: "Cheese Pizza" },
    { name: "seafood", label: "Seafood Pizza" },
    { name: "salad", label: "Salad" },
    { name: "appetizers", label: "Appetizers" },
];