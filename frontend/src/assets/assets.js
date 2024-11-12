// included file

import React from 'react';
import basket_icon from './basket_icon.png';
import logo from './logo.png';
import header_img from './header_img.png';
import header2_img from './header_img.png';

import search_icon from './search_icon.png';
import add_icon_white from './add_icon_white.png';
import add_icon_green from './add_icon_green.png';
import remove_icon_red from './remove_icon_red.png';
import app_store from './app_store.png';
import play_store from './play_store.png';
import linkedin_icon from './linkedin_icon.png';
import facebook_icon from './facebook_icon.png';
import twitter_icon from './twitter_icon.png';
import cross_icon from './cross_icon.png';
import selector_icon from './selector_icon.png';
import rating_stars from './rating_stars.png';
import profile_icon from './profile_icon.png';
import bag_icon from './bag_icon.png';
import logout_icon from './logout_icon.png';
import parcel_icon from './parcel_icon.png';

import menu_1 from './menu_1.jpeg';
import menu_2 from './menu_2.jpeg';
import menu_3 from './menu_3.jpeg';
import menu_4 from './menu_4.jpeg';
import menu_5 from './menu_5.jpeg';
// You need to import menu_6 if you plan to use it in the code.

export const assets = {
    logo,
    basket_icon,
    header_img,
    header2_img,

    search_icon,
    rating_stars,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
};

export const disease_menu_list = [
    {
        disease_name: "Toyota Vitz 2018",
        disease_image: menu_1,
    },
    {
        disease_name: "Toyota Hiace",
        disease_image: menu_2,
    },
    {
        disease_name: "Toyota Vitz 2018",
        disease_image: menu_3,
    },
    {
        disease_name: "Toyota Hiace",
        disease_image: menu_4,
    },
    {
        disease_name: "Toyota Vitz 2018",
        disease_image: menu_5,
    },
    // If you plan to use 'menu_6', import and add it here.
];

export const disease_list = [
    {
        _id: "1",
        name: "bacterialBlind Disease",
        description: "A serious disease affecting rice plants.",
        case_count: 1200,
        image: "bacterialBlind.jpg",
    },
    {
        _id: "2",
        name: "bacterialLeafSteak",
        description: "Damage caused by thrips in rice plants.",
        case_count: 850,
        image: "bacterialLeafSteak.jpg",
    },
    {
        _id: "3",
        name: "brownSpot",
        description: "A bacterial disease affecting various crops.",
        case_count: 950,
        image: "brownSpot.jpg",
    },
    {
        _id: "4",
        name: "raggedStunt",
        description: "A fungal disease causing sheath rot.",
        case_count: 670,
        image: "raggedStunt.jpg",
    },
    {
        _id: "5",  // Changed this to a unique ID
        name: "riceBlast",
        description: "A fungal disease causing sheath rot.",
        case_count: 670,
        image: "riceBlast.jpg",
    },
    {
        _id: "6",  // Changed this to a unique ID
        name: "tungro",
        description: "A fungal disease causing sheath rot.",
        case_count: 670,
        image: "tungro.jpg",
    },
    // Add more diseases as needed
];