<template>
    <div class="header">
        <div class="name">
            <!-- <NuxtLink to="/"><span class="briosa">A</span>ngelus <span class="briosa">S</span>chnabl</NuxtLink> -->
            <NuxtLink to="/">Angelus Schnabl</NuxtLink>
        </div>
        <div class="work headerlink">
            <NuxtLink to="/work">Work</NuxtLink>
        </div>
        <div class="installations headerlink">
            <NuxtLink to="/installations">Installations</NuxtLink>
        </div>
        <div class="curriculum headerlink">
            <NuxtLink to="/curriculum">CV</NuxtLink>
        </div>
        <div class="bio headerlink">
            <NuxtLink to="/bio">Bio</NuxtLink>
        </div>
    </div>
</template>

<style>
a {
    text-decoration: none;
    color: black;
    transition: all .3s ease;
}

div.on>a {
    /* font-family: "ArialItalic"; */
    color: grey !important;
}

.active {
    flex-grow: 1;
    font-family: "MaristItalic";
    color: black;
}

.header {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    /* height: 98vh; */
    font-family: 'Arial';
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
</style>