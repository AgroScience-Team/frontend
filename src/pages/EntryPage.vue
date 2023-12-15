<<<<<<< HEAD
<<<<<<< HEAD
<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated>
            <q-toolbar class="my-header">
                <q-toolbar-title class="name q-ml-lg">
                    Agroprom
                </q-toolbar-title>
                <q-btn v-if="isMobile" label="РЕГИСТРАЦИЯ" padding="5px 20px" class="col-2" size="lg" :to="{ name: 'reg' }">
                </q-btn>
                <q-space></q-space>
                <q-btn :to="{ name: 'login' }" padding="5px 20px" class="my__btn q-my-auto q-mx-lg">
=======
<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated reveal>
            <q-toolbar style="background-color: white;">
                <q-toolbar-title style="color:#222C3C; font-family:Montserrat; font-weight:light;"
                    class="gt-xs q-ml-lg text-h5">
                    Agromelio
                </q-toolbar-title>
                <q-space></q-space>
                <q-btn :to="{ name: 'login' }" padding="2px 25px" text-color="primary" rounded
                    class="my__btn q-my-auto q-mx-lg" size="lg">
>>>>>>> origin/localbranch
                    Войти
                </q-btn>
            </q-toolbar>
        </q-header>

<<<<<<< HEAD

        <div class="card-container">
            <q-card class="section-1">
                <q-card-section horizontal>
                    <q-img src="~assets/wheat.jpg" :ratio="1" class="q-ma-sm wheat-img"></q-img>
                    <q-card-section class=" text-h6 q-my-auto">
                        УПРАВЛЕНИЕ КУЛЬТУРАМИ
                    </q-card-section>
                </q-card-section>

            </q-card>

            <q-card class="section-2">
                <q-card-section horizontal>
                    <q-img src="~assets/analysis.jpg" :ratio="1" class="q-ma-sm norm-img"></q-img>
                    <q-card-section class=" text-h6 q-my-auto">
                        АНАЛИЗ ВЕГЕТАЦИИ
                    </q-card-section>
                </q-card-section>
            </q-card>

            <q-card class="section-3">
                <q-card-section horizontal>
                    <q-img src="~assets/field.jpg" :ratio="1" class="q-ma-sm norm-img"></q-img>
                    <q-card-section class=" text-h6 q-my-auto">
                        КОНТРОЛЬ ПОЛЕЙ
                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>

        <q-page-container class="for-phone">
            <q-page>
                <div class="image-container">
                    <q-img src="~assets/field1.jpg" class="mainField-img"></q-img>
                </div>
                <div class="bottom-container">
                    <div class="row justify-evenly">
                        <q-card class="col-4 my-card" flat>
                            <q-card-section class="text-h6 text-uppercase">
                                Оптимизация
                            </q-card-section>
                            <q-card-section class="my-card">
                                Предоставление актуальных данных о вегетации и погоде помогает фермерам оптимизировать
                                ресурсы
                            </q-card-section>
                        </q-card>
                        <q-card class="col-4 my-card" flat>
                            <q-card-section class="text-h6 text-uppercase">
                                Улучшение управления
                            </q-card-section>
                            <q-card-section class="my-card">
                                Мониторинг и управление полями и культурами на основе данных для обоснованных решений и
                                улучшенного операционного планирования фермеров
                            </q-card-section>
                        </q-card>
                    </div>

                    <div class="row justify-center q-mt-xl">
                        <q-btn label="РЕГИСТРАЦИЯ" class="bg-green-2 col-2 " size="lg" :to="{ name: 'reg' }">
                        </q-btn>
                    </div>
                </div>
=======
        <q-page-container>
            <q-page>
                <q-card>
                    <q-card-section horizontal>
                        <q-img class="col-12 my-image" src="~assets/onemoretractor1.jpg">
                        </q-img>
                        <div
                            class="absolute-center text-uppercase text-weight-bold text-h3 text-white col-8 text-center topic">
                            Система управления и анализа агробизнеса
                        </div>
                        <div class="absolute-bottom text-center">
                            <q-btn :to="{ name: 'reg' }" size="xl" color="white" text-color="primary" rounded push
                                padding="5px 30px" style="bottom: 10vh; font-weight:500;">Зарегистрироваться</q-btn>
                        </div>
                        <div>

                        </div>

                    </q-card-section>
                </q-card>

                <div class="register-text text-center col-12 text-h3 text-weight-medium"
                    style="font-family: Montserrat; font-weight: medium; padding-top:10vh; padding-bottom: 5vh;">Кому будет
                    полезно
                </div>

                <div>
                    <q-intersection transition="fade" transition-duration="1500" once>
                        <q-card class="row" flat style="background-color: rgba(247, 247, 247, 0.684);">
                            <q-card-section class=" col-12 col-md-3" style="padding-top: 5vh;">
                                <q-icon name="fa-solid fa-tractor" size="5rem"></q-icon>
                                <div class="text-center text-h5" style="padding-top: 5vh; font-family: Montserrat;">Фермерам
                                </div>
                                <div class="text-center "
                                    style="padding-top: 3vh; font-family:Montserrat; font-weight: 400;">
                                    Планируйте и управляйте процессами сельского хозяйства на основе данных о почве и
                                    погоде.
                                </div>
                            </q-card-section>

                            <q-card-section class="col-12 col-md-3" style="padding-top: 5vh;">
                                <q-icon name="o_business" size="5rem"></q-icon>
                                <div class="text-center text-h5" style="padding-top: 5vh; font-family: Montserrat;">
                                    Агрохолдингам</div>
                                <div class="text-center "
                                    style="padding-top: 3vh; font-family:Montserrat; font-weight: 400;">
                                    Автоматизируйте операции управления полями. Оптимизируйте ресурсы и контроль.
                                </div>
                            </q-card-section>

                            <q-card-section class="col-12 col-md-3" style="padding-top: 5vh;">
                                <q-icon name="o_spa" size="5rem"></q-icon>
                                <div class="text-center text-h5" style="padding-top: 5vh; font-family: Montserrat;">
                                    Агрономам</div>
                                <div class="text-center "
                                    style="padding-top: 3vh; font-family:Montserrat; font-weight: 400;">
                                    Отслеживайте и анализуйте параметры почвы, погоды и урожайности.
                                </div>
                            </q-card-section>

                            <q-card-section class="col-12 col-md-3" style="padding-top: 5vh;">
                                <q-icon name="fa-solid fa-chalkboard" size="5rem"></q-icon>
                                <div class="text-center text-h5 col-12" style="padding-top: 5vh; font-family: Montserrat;">
                                    Институтам
                                </div>
                                <div class="text-center "
                                    style="padding-top: 3vh; font-family:Montserrat; font-weight: medium;">
                                    Используйте данные для проведения исследований, разработок инноваций и оптимизации
                                    сельскохозяйственных методов.
                                </div>
                            </q-card-section>
                        </q-card>
                    </q-intersection>
                </div>




                <div class="text-center text-weight-medium text-h4"
                    style="font-family: Montserrat; font-weight: medium;  padding-bottom:10vh; padding-top:7vh;">
                    Повышайте доход без дополнительных затрат</div>


                <q-card flat style="font-family: Montserrat; padding-top: 2vh; padding-bottom: 5vh;">
                    <q-card-section class="row">
                        <div class="col-12 col-md-5 q-ml-auto q-my-auto">
                            <div class="text-weight-medium my-text">Анализируйте данные о почве и погоде</div>
                            <div class="q-my-lg text-weight-regular q-mr-lg">Получайте информацию о
                                качестве почвы, климатических
                                условиях
                                и погоде для принятия точных решений относительно посевов и урожайности.</div>
                        </div>
                        <q-img class="col-11 col-md-5 q-mr-auto" src="~assets/soil2.jpg"></q-img>
                    </q-card-section>
                </q-card>


                <q-card
                    style="font-family: Montserrat; background-color: rgba(243, 242, 242, 0.827); padding-top: 5vh; padding-bottom: 5vh;">
                    <q-card-section class="row center">
                        <div class="col-12 col-md-5 q-mr-auto q-my-auto">
                            <div class="text-weight-medium my-text">Управляйте ресурсами и урожайностью</div>
                            <div class="q-my-lg text-weight-regular">Максимизируйте
                                использование ресурсов, управляйте урожайностью и оптимизируйте
                                производственные процессы для улучшения эффективности.</div>
                        </div>
                        <q-img class="col-11 col-md-5 q-mr-lg unic" src="~assets/harvest2.jpg"></q-img>
                    </q-card-section>
                </q-card>


                <q-card flat style="font-family: Montserrat; padding-top: 5vh; padding-bottom: 5vh;">
                    <q-card-section class=" row">
                        <div class="col-12 col-md-5 q-ml-auto q-my-auto">
                            <div class="text-weight-medium my-text">Прогнозируйте и обрабатывайте данные</div>
                            <div class="q-my-lg text-weight-regular q-mr-lg">Прогнозируйте
                                изменения, обрабатывайте собранные данные о посевах и вегетации,
                                чтобы принимать информированные решения в сельском хозяйстве. </div>
                        </div>
                        <q-img class="col-11 col-md-5 q-mr-auto" src="~assets/farm3.jpg"></q-img>
                    </q-card-section>
                </q-card>


                <q-card
                    style="font-family: Montserrat; background-color: rgba(243, 242, 242, 0.827); padding-top: 5vh; padding-bottom: 5vh;">
                    <q-card-section class="row center">
                        <div class="col-12 col-md-5 q-mr-auto q-my-auto">
                            <div class="text-weight-medium my-text">Планируйте сельскохозяйственные операции</div>
                            <div class="q-my-lg text-weight-regular">Сайт
                                предоставляет
                                инструменты для планирования и координации сельскохозяйственных работ на
                                полях. Фермеры могут оценивать предыдущие посевы.</div>
                        </div>
                        <q-img class="col-11 col-md-5 q-mr-lg unic" src="~assets/moretractor.jpg"></q-img>
                    </q-card-section>
                </q-card>

>>>>>>> origin/localbranch
            </q-page>
        </q-page-container>

    </q-layout>
</template>
<<<<<<< HEAD
  
<script>
export default {
    data() {
        return {
            isMobile: false
        };
    },
    mounted() {
        this.isMobile = window.innerWidth <= 420;
        window.addEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.isMobile = window.innerWidth <= 420;
        }
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
};
</script>
  
<style scoped>
.my-header {
    background-color: white;
    height: 65px;
}

.name {
    color: black;
    font-size: 20px;
    font-weight: lighter;
    font-style: italic;
}

.my__btn {
    font-weight: 550;
    font-size: 20px;
    background-color: rgba(225, 224, 224, 0.61);
    color: black;
}


.card-container {
    position: absolute;
    display: flex;
    justify-content: space-around;
    bottom: 43%;
    width: 80%;
    z-index: 2;
    left: 10%;
    right: 10%;
}

.bottom-container {
    height: calc(51vh + 2px);
    padding-top: 80px;
    background-color: rgb(235, 234, 234);
}

.my-card {
    font-size: 18px;
    height: 170px;
    margin-left: 1vw;
    background-color: rgb(235, 234, 234);
}

.mainField-img {
    height: 40vh;
}

.norm-img {
    height: 115px;
}

.text-uppercase {
    margin-left: 15px;
}

.section-1,
.section-2,
.section-3 {
    width: 100%;
    max-width: 300px;

}

@media (max-width:1200px) {
    .card-container {
        width: 90%;
        left: 5%;
        right: 5%;
    }

    .section-1,
    .section-2,
    .section-3 {
        width: 100%;
        max-width: 250px;

    }

    .bottom-container {
        padding-top: 70px;
    }

    .my-card {
        font-size: 17px;
        height: 150px;
        width: 440px;
        margin-bottom: 10px;
        margin-left: 0;
    }

    .text-h6 {
        font-size: 18px;
    }

    .text-uppercase {
        margin-left: 0px;
    }

    .wheat-img {
        height: 110px;
        width: 190px;
    }
}

@media (max-width:1000px) {
    .card-container {
        width: 95%;
        left: 2.5%;
        right: 2.5%;
    }

    .section-1,
    .section-2,
    .section-3 {
        width: 100%;
        max-width: 220px;
        height: 100px;
    }

    .bottom-container {
        padding-top: 70px;
    }

    .my-card {
        flex-direction: column;
        font-size: 1.9vh;
        height: 150px;
        width: 50vh;
        gap: 10px;
        margin-bottom: 30px;
        margin-left: 2vh;
    }

    .text-h6 {
        font-size: 16px;
    }

    .norm-img {
        height: 90px;
        width: 130px;
        margin-right: 0;
        margin-top: 5px;
    }

    .text-uppercase {
        padding-bottom: 1px;
        font-size: 2vw;
        margin-left: 2vh;
    }

    .wheat-img {
        height: 90px;
        width: 150px;
        margin-right: 0;
        margin-top: 5px;
    }

    .col-2 {
        width: 25vh;
    }
}

@media (max-width: 800px) {
    .card-container {
        width: 98%;
        right: 2%;
    }

    .section-1,
    .section-2,
    .section-3 {
        width: 100%;
        max-width: 200px;
        height: 90px;
    }

    .bottom-container {
        padding-top: 70px;
    }

    .my-card {
        flex-direction: column;
        font-size: 0.9rem;
        height: 150px;
        width: 40vh;
        margin-bottom: 20px;
        margin-left: 2vh;
    }

    .text-h6 {
        font-size: 16px;
    }

    .norm-img {
        height: 70px;
        width: 130px;
        margin-right: 0;
        margin-top: 10px;
    }

    .text-uppercase {
        padding-bottom: 1px;
        font-size: 2vw;
        margin-left: 2vh;
    }

    .wheat-img {
        height: 70px;
        width: 160px;
        margin-right: 0;
        margin-top: 10px;
    }

    .col-2 {
        width: 25vh;
    }
}

@media (max-width: 420px) {
    .image-container {
        display: none;
    }

    .bottom-container {
        padding-top: 0;
        background-color: white;
        height: auto;
    }

    .text-uppercase {
        padding-bottom: 1px;
        font-size: 1.9vh;
        margin-left: 0vh;
    }

    .my-card {
        background-color: white;
        font-size: 1.9vh;
        height: 150px;

        /* width: 50vh; */
        gap: 10px;
        margin-bottom: 0px;
        margin-left: 0;
    }

    .wheat-img {
        width: 130px;
    }

    .name {
        display: none;
    }

    .card-container {
        padding-top: 50px;
        position: static;
        display: block;
        width: 100%;
        margin-top: 20px;
    }

    .section-1,
    .section-2 {
        width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
    }


    .section-3 {
        width: 100%;
        max-width: 100%;
        margin-bottom: 10px;
    }

    .bottom-container {
        padding-top: 10px;
        display: flex;
        margin-left: 0;
        padding-left: 0;
        flex-direction: column;
        align-items: left;
    }

    .for-phone {
        padding-top: 0px !important;
    }

    .col-2 {
        font-weight: 550;
        width: 170px;
        background-color: rgba(225, 224, 224, 0.61);
        color: black;
        margin: 5px;
    }

    .row.justify-evenly,
    .row.justify-center {
        width: 100%;
        max-width: 80%;
        margin-bottom: 20px;
    }

    .row.justify-center {
        display: none;
    }

}
</style>
=======
<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated reveal>
            <q-toolbar style="background-color: white;">
                <q-toolbar-title style="color:#222C3C; font-family:Montserrat; font-weight:light;"
                    class="gt-xs q-ml-lg text-h5">
                    Agromelio
                </q-toolbar-title>
                <q-space></q-space>
                <q-btn :to="{ name: 'login' }" padding="2px 25px" text-color="primary" rounded
                    class="my__btn q-my-auto q-mx-lg" size="lg">
                    Войти
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <q-page>
                <q-card>
                    <q-card-section horizontal>
                        <q-img class="col-12 my-image" src="~assets/onemoretractor1.jpg">
                        </q-img>
                        <div
                            class="absolute-center text-uppercase text-weight-bold text-h3 text-white col-8 text-center topic">
                            Система управления и анализа агробизнеса
                        </div>
                        <div class="absolute-bottom text-center">
                            <q-btn :to="{ name: 'reg' }" size="xl" color="white" text-color="primary" rounded push
                                padding="5px 30px" style="bottom: 10vh; font-weight:500;">Зарегистрироваться</q-btn>
                        </div>
                        <div>

                        </div>

                    </q-card-section>
                </q-card>

                <div class="register-text text-center col-12 text-h3 text-weight-medium"
                    style="font-family: Montserrat; font-weight: medium; padding-top:10vh; padding-bottom: 5vh;">Кому будет
                    полезно
                </div>

                <div>
                    <q-intersection transition="fade" transition-duration="1500" once>
                        <q-card class="row" flat style="background-color: rgba(247, 247, 247, 0.684);">
                            <q-card-section class=" col-12 col-md-3" style="padding-top: 5vh;">
                                <q-icon name="fa-solid fa-tractor" size="5rem"></q-icon>
                                <div class="text-center text-h5" style="padding-top: 5vh; font-family: Montserrat;">Фермерам
                                </div>
                                <div class="text-center "
                                    style="padding-top: 3vh; font-family:Montserrat; font-weight: 400;">
                                    Планируйте и управляйте процессами сельского хозяйства на основе данных о почве и
                                    погоде.
                                </div>
                            </q-card-section>

                            <q-card-section class="col-12 col-md-3" style="padding-top: 5vh;">
                                <q-icon name="o_business" size="5rem"></q-icon>
                                <div class="text-center text-h5" style="padding-top: 5vh; font-family: Montserrat;">
                                    Агрохолдингам</div>
                                <div class="text-center "
                                    style="padding-top: 3vh; font-family:Montserrat; font-weight: 400;">
                                    Автоматизируйте операции управления полями. Оптимизируйте ресурсы и контроль.
                                </div>
                            </q-card-section>

                            <q-card-section class="col-12 col-md-3" style="padding-top: 5vh;">
                                <q-icon name="o_spa" size="5rem"></q-icon>
                                <div class="text-center text-h5" style="padding-top: 5vh; font-family: Montserrat;">
                                    Агрономам</div>
                                <div class="text-center "
                                    style="padding-top: 3vh; font-family:Montserrat; font-weight: 400;">
                                    Отслеживайте и анализуйте параметры почвы, погоды и урожайности.
                                </div>
                            </q-card-section>

                            <q-card-section class="col-12 col-md-3" style="padding-top: 5vh;">
                                <q-icon name="fa-solid fa-chalkboard" size="5rem"></q-icon>
                                <div class="text-center text-h5 col-12" style="padding-top: 5vh; font-family: Montserrat;">
                                    Институтам
                                </div>
                                <div class="text-center "
                                    style="padding-top: 3vh; font-family:Montserrat; font-weight: medium;">
                                    Используйте данные для проведения исследований, разработок инноваций и оптимизации
                                    сельскохозяйственных методов.
                                </div>
                            </q-card-section>
                        </q-card>
                    </q-intersection>
                </div>




                <div class="text-center text-weight-medium text-h4"
                    style="font-family: Montserrat; font-weight: medium;  padding-bottom:10vh; padding-top:7vh;">
                    Повышайте доход без дополнительных затрат</div>


                <q-card flat style="font-family: Montserrat; padding-top: 2vh; padding-bottom: 5vh;">
                    <q-card-section class="row">
                        <div class="col-12 col-md-5 q-ml-auto q-my-auto">
                            <div class="text-weight-medium my-text">Анализируйте данные о почве и погоде</div>
                            <div class="q-my-lg text-weight-regular q-mr-lg">Получайте информацию о
                                качестве почвы, климатических
                                условиях
                                и погоде для принятия точных решений относительно посевов и урожайности.</div>
                        </div>
                        <q-img class="col-11 col-md-5 q-mr-auto" src="~assets/soil2.jpg"></q-img>
                    </q-card-section>
                </q-card>


                <q-card
                    style="font-family: Montserrat; background-color: rgba(243, 242, 242, 0.827); padding-top: 5vh; padding-bottom: 5vh;">
                    <q-card-section class="row center">
                        <div class="col-12 col-md-5 q-mr-auto q-my-auto">
                            <div class="text-weight-medium my-text">Управляйте ресурсами и урожайностью</div>
                            <div class="q-my-lg text-weight-regular">Максимизируйте
                                использование ресурсов, управляйте урожайностью и оптимизируйте
                                производственные процессы для улучшения эффективности.</div>
                        </div>
                        <q-img class="col-11 col-md-5 q-mr-lg unic" src="~assets/harvest2.jpg"></q-img>
                    </q-card-section>
                </q-card>


                <q-card flat style="font-family: Montserrat; padding-top: 5vh; padding-bottom: 5vh;">
                    <q-card-section class=" row">
                        <div class="col-12 col-md-5 q-ml-auto q-my-auto">
                            <div class="text-weight-medium my-text">Прогнозируйте и обрабатывайте данные</div>
                            <div class="q-my-lg text-weight-regular q-mr-lg">Прогнозируйте
                                изменения, обрабатывайте собранные данные о посевах и вегетации,
                                чтобы принимать информированные решения в сельском хозяйстве. </div>
                        </div>
                        <q-img class="col-11 col-md-5 q-mr-auto" src="~assets/farm3.jpg"></q-img>
                    </q-card-section>
                </q-card>


                <q-card
                    style="font-family: Montserrat; background-color: rgba(243, 242, 242, 0.827); padding-top: 5vh; padding-bottom: 5vh;">
                    <q-card-section class="row center">
                        <div class="col-12 col-md-5 q-mr-auto q-my-auto">
                            <div class="text-weight-medium my-text">Планируйте сельскохозяйственные операции</div>
                            <div class="q-my-lg text-weight-regular">Сайт
                                предоставляет
                                инструменты для планирования и координации сельскохозяйственных работ на
                                полях. Фермеры могут оценивать предыдущие посевы.</div>
                        </div>
                        <q-img class="col-11 col-md-5 q-mr-lg unic" src="~assets/moretractor.jpg"></q-img>
                    </q-card-section>
                </q-card>

            </q-page>
        </q-page-container>

    </q-layout>
</template>

<script>

export default {
}
</script>

<style scoped>
.my__btn {
    font-size: 1rem;

}

.my-image {
    height: 60vh;
}

.topic {
    top: calc(20vh + 50px);
}

.col-md-3 {
    font-size: 15px;
}

.unic {
    margin-left: 0px;
}

.q-my-auto {
    font-size: 17px;
}

.my-text {
    font-size: 20px;
}

.q-icon {
    left: 43%;
}

@media(min-width:1024px) {

    .center {
        flex-direction: row-reverse;

    }

    .q-my-auto {
        font-size: 20px;
    }

    .my-text {
        font-size: 27px;
    }

    .unic {
        margin-left: 100px;
    }

    .q-icon {
        left: 40%;
    }

    .my-image {
        height: 80vh;
    }

    .topic {
        top: calc(30vh + 50px);
    }
}
</style>
>>>>>>> origin/9-correct
=======

<script>

export default {
}
</script>

<style scoped>
.my__btn {
    font-size: 1rem;

}

.my-image {
    height: 60vh;
}

.topic {
    top: calc(20vh + 50px);
}

.col-md-3 {
    font-size: 15px;
}

.unic {
    margin-left: 0px;
}

.q-my-auto {
    font-size: 17px;
}

.my-text {
    font-size: 20px;
}

.q-icon {
    left: 43%;
}

@media(min-width:1024px) {

    .center {
        flex-direction: row-reverse;

    }

    .q-my-auto {
        font-size: 20px;
    }

    .my-text {
        font-size: 27px;
    }

    .unic {
        margin-left: 100px;
    }

    .q-icon {
        left: 40%;
    }

    .my-image {
        height: 80vh;
    }

    .topic {
        top: calc(30vh + 50px);
    }
}
</style>
>>>>>>> origin/localbranch
