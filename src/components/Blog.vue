<template>
     <div class="area">
                    <div class="area-col">
                        <a href="#">
                            <div class="daily">
                                <img src="../assets/blog-img/(•ᴥ•).jpeg" alt="">
                                <p>flattened by the weight of life...</p>
                                <span>2026. 19. 9</span>
                            </div>
                        </a>

                        <div class="daily">
                            <img src="../assets/blog-img/_.jpeg" alt="">
                            <p>weight of life...</p>
                            <span>2026. 17. 9</span>
                        </div>
                        <div class="daily">
                            <img src="../assets/blog-img/me core.jpeg" alt="">
                            <p>me doing my home work</p>
                            <span>2026. 16. 9</span>
                        </div>
                    </div>
                    <div class="area-col">
                        <div class="daily">
                            <img src="../assets/blog-img/lovesleeping.jpeg" alt="">
                            <p>l love sleeping..</p>
                            <span>2026. 10. 9</span>
                        </div>
                        <div class="daily">
                            <img src="../assets/blog-img/1_2.jpeg" alt="">
                            <p></p>
                            <span>2026. 9. 9</span>
                        </div>
                        <div class="daily">
                            <img src="../assets/blog-img/Illit Wonhee.jpeg" alt="">
                            <p>life is tough...</p>
                            <span>2026. 7. 9</span>
                        </div>
                    </div>
                    <div class="area-col">
                        <div class="daily">
                            <img src="../assets/blog-img/3ds.jpeg" alt="">
                            <p>3ds is simply wonderful</p>
                            <span>2026. 5. 9</span>
                        </div>
                        <div class="daily">
                            <img src="../assets/blog-img/groud.jpeg" alt="">
                            <p>lawns belong to nature</p>
                            <span>2026. 3. 9</span>
                        </div>
                        <div class="daily">
                            <img src="../assets/blog-img/cat.jpeg" alt="">
                            <p>is a waffle a cat?</p>
                            <span>2026. 30. 8</span>
                        </div>
                    </div>
                </div>
</template>

<style scoped>
        .area a {
            text-decoration: none;
        }

        .daily {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 140px;
            height: 200px;
            /* background: lightblue; */
        }

        .daily img {
            /* border-radius: 0; */
            width: 140px;
            height: 128px;
        }

        .daily p {
            /* text-align: center; */
            font-size: 12px;
            font-weight: 700;
        }

        .daily span {
            font-size: 11px;

        }

        .area-col {
            display: grid;
            padding: 10px 0px;
            grid-template-columns: 1fr 1fr .8fr;
        }
</style>