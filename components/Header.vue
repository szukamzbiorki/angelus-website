<template>
    <div class="header">
        <div class="name">
            <NuxtLink to="/">Angelus Schnabl</NuxtLink>
        </div>
        <div class="links">
            <span class="work headerlink">
                <NuxtLink to="/work">Work</NuxtLink>
            </span>
            <span class="installations headerlink">
                <NuxtLink to="/installations">Installations</NuxtLink>
            </span>
            &#8203;
            <span class="curriculum headerlink">
                <NuxtLink to="/curriculum">CV</NuxtLink>
            </span>
            <span class="bio headerlink">
                <NuxtLink to="/bio">Bio</NuxtLink>
            </span>
        </div>
    </div>
</template>

<style>
a {
    text-decoration: none;
    color: black;
    transition: all .3s ease;
}

span.on>a {
    /* font-family: "ArialItalic"; */
    color: grey !important;
}


.links>* {
    transition: all .3s ease;
}

.header {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    /* height: 98vh; */
    font-family: 'Arial';
}

.header>* {
    display: inline-block;
}


.links {
    flex-grow: 1;
    display: block;
    flex-direction: row;
    display: flex;
}

.name {
    cursor: default;
    box-sizing: border-box;
    width: 250px;
}

.header>*:not(:first-child) {
    cursor: pointer;
    /* background-color: lightgrey; */
    /* padding: 0 3px; */
    transition: all .3s ease;

}

.header>* {
    text-transform: uppercase;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.header>*:not(:last-child):not(:first-child) {
    margin-right: 1ch;
}

.briosa {
    font-family: "Briosa";
    font-size: 80%;
}

@media screen and (min-width: 821px) {
    .headerlink:not(:last-child) {
        margin-right: .5em;
    }
}

@media screen and (max-width: 820px) {
    .headerlink:not(:first-child) {
        margin-left: .5em;
    }

    .links {
        display: block;
        max-width: calc(100vw - 121px);
        /* word-break: break-all; */
        text-align: right;
        white-space: normal;
    }

    .links>* {
        display: inline;
    }
}
</style>