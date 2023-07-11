<template>
    <div class="cvbox">
        <!-- INTRO SECTION -->
        <div class="title">{{ info.name }}
            <br>{{ info.birthday }}
        </div>
        <!-- CONTACT SECTION -->
        <div class="contact">
            <div v-for="  slot   in   info.contactinfo  " v-bind:key="slot.id">{{ slot }}</div>
        </div>
        <!-- <div class="separator"></div> -->
        <!-- EXHIBITIONS SECTION -->
        <div class="exhibitions">
            <!-- UPCOMING EXHIBITIONS SECTION -->
            <div class="upcomingexhibitions marbot">
                <div class="exhibitionstitle">UPCOMING EXHIBITIONS</div>
                <div class="expoinstances">
                    <div class="expogrid marbot" v-for="  expo   in   info.upexpos  " v-bind:key="expo.id">
                        <div>{{ expo.year }}</div>
                        <div>{{ expo.place }}</div>
                        <div>{{ expo.citycountry }}</div>
                    </div>
                </div>
            </div>
            <!-- EXHIBITIONS SECTION -->
            <div class="currentexhibitions marbot">
                <div class="exhibitionstitle">EXHIBITIONS</div>
                <div class="expoinstances">
                    <div class="expogrid marbot" v-for="  expo   in   info.expos  " v-bind:key="expo.id">
                        <div>{{ expo.year }}</div>
                        <div>{{ expo.place }}</div>
                        <div>{{ expo.citycountry }}</div>
                    </div>
                </div>
            </div>
            <div class="education marbot">
                <div class="exhibitionstitle">WORK EXPERIENCE</div>
                <div class="expoinstances">
                    <div class="expogrid marbot" v-for="  expo   in   info.work  " v-bind:key="expo.id">
                        <div>{{ expo.year }}</div>
                        <div>{{ expo.place }}</div>
                        <div>{{ expo.citycountry }}</div>
                    </div>
                </div>
            </div>
            <!-- EDUCATION SECTION -->
            <div class="education marbot">
                <div class="exhibitionstitle">EDUCATION</div>
                <div class="expoinstances">
                    <div class="expogrid marbot" v-for="  expo   in   info.education  " v-bind:key="expo.id">
                        <div>{{ expo.year }}</div>
                        <div>{{ expo.place }}</div>
                        <div>{{ expo.citycountry }}</div>
                    </div>
                </div>
            </div>
            <!-- <div class="colophon">Website designed and built by <a target="_blank"
                    href="https://instagram.com/bartekpierscinski">Bartek
                    Pierściński</a></div> -->
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    info: Object
})
</script>

<style>
.cvbox {
    display: grid;
    grid-template-columns: 100px 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: calc(var(--space) / 2);
    max-width: 60vw;
}

.title {
    grid-column: 1 / 7;
}

.separator {
    height: 1em;
    grid-column: 1 / 7;
}

.intro {
    grid-column: 1 / 5;
    max-width: 45em;
}

.intro>div:not(:last-child) {
    margin-bottom: .5em;
}

.contact {
    grid-column: 5 / 7;
}

.exhibitions {
    grid-column: 1 / 7;
}

.exhibitionstitle {
    margin: .5em 0 0 0;
    font-size: 80%;
}

.expogrid {
    display: grid;
    grid-template-columns: 100px 3fr 2fr;
    grid-template-rows: auto;
    grid-gap: calc(var(--space) / 2);
}

.expogrid>div:nth-child(2) {
    padding-right: 30px;
}

.descriptiontext {
    font-family: "CMU";
}

.quote {
    font-family: "CMUI";
}

.line {
    border-bottom: solid 1.5px black;
    height: var(--margin1);
    width: 100% !important;
}

.colophon {
    grid-column: 5 / 7;
    color: lightgrey !important;
}

.colophon a {
    color: lightgrey !important;
}



@media screen and (max-width: 820px) {
    .cvbox {
        min-width: 100% !important;
        margin: 0;
    }

    .expogrid {
        grid-template-columns: 50px 8fr 4fr;
    }

    .expogrid>div:nth-child(2) {
        padding-right: 10px;
    }

    .education {
        /* margin-bottom: 13vh; */
    }

    .active {
        transform: translateX(0);
    }

    .infocontent {
        max-height: calc(100vh - 2*var(--space)) !important;
        overflow: scroll !important;
    }

    .infocontent::-webkit-scrollbar {
        display: none !important;
    }

    .intro {
        grid-column: 1 / 7;
    }

    .contact {
        grid-column: 1 / 7;
    }
}
</style>