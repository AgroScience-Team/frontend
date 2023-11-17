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
                    Войти
                </q-btn>
            </q-toolbar>
        </q-header>


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
            </q-page>
        </q-page-container>

    </q-layout>
</template>
  
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
