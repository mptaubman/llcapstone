import React from 'react';
import {Helmet} from 'react-helmet';

function MetaData(){
    return (
        <head>
            <meta name="language" content="english" />
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="A new restaurant based in Chicago called Little Lemon. Its centralizes around fresh mediterranean food." />
            <meta name="og:title" content="Little Lemon Restaurant" />
            <meta name="og:description" content="Little Lemon is a mediterranean restaurant with new refreshing specials!"/>
            <meta name="og:image" content="llcap\llcapstone\littlecap\logos\small logo.jpg" />
            <meta name="author" content="Maginolia Taubman" />
        </head>
    );
}