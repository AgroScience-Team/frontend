<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated>
            <q-toolbar class="my-header">
                <q-toolbar-title class="name q-ml-lg">
                    Agroprom
                </q-toolbar-title>
                <q-space></q-space>
                <q-btn :to="{ name: 'login' }" padding="5px 20px" class="my__btn q-my-auto q-mx-lg">
                    Войти
                </q-btn>
            </q-toolbar>
        </q-header>




        <q-page-container>
            <q-page>
                <div class="image-container">
                    <q-img src="~assets/field1.jpg" height="40vh"></q-img>
                </div>
                <div class="bottom-container" style="background-color: rgb(235, 234, 234);">
                    <div class="row justify-evenly">
                        <q-card class="col-4" style="height:170px; margin-left: 50px;background-color: rgb(235, 234, 234);"
                            flat>
                            <q-card-section class="text-h6 text-uppercase">
                                Оптимизация
                            </q-card-section>
                            <q-card-section class="my-card">
                                Предоставление актуальных данных о вегетации и погоде помогает фермерам оптимизировать
                                ресурсы
                            </q-card-section>
                        </q-card>
                        <q-card class="col-4 my-card" style="height:170px; background-color: rgb(235, 234, 234);" flat>
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
        <div class="card-container">
            <q-card class="section-1">
                <q-card-section horizontal>
                    <q-img src="~assets/wheat.jpg" :ratio="1" class="q-ma-sm"></q-img>
                    <q-card-section class=" text-h6 q-my-auto">
                        УПРАВЛЕНИЕ КУЛЬТУРАМИ
                    </q-card-section>
                </q-card-section>

            </q-card>

            <q-card class="section-2">
                <q-card-section horizontal>
                    <q-img src="~assets/analysis.jpg" :ratio="1" class="q-ma-sm" height="115px"></q-img>
                    <q-card-section class=" text-h6 q-my-auto">
                        АНАЛИЗ ВЕГЕТАЦИИ
                    </q-card-section>
                </q-card-section>
            </q-card>

            <q-card class="section-3">
                <q-card-section horizontal>
                    <q-img src="~assets/field.jpg" :ratio="1" class="q-ma-sm" height="115px"></q-img>
                    <q-card-section class=" text-h6 q-my-auto">
                        КОНТРОЛЬ ПОЛЕЙ
                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
    </q-layout>
</template>
  
<script>
export default {
    setup() { },
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

.content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
}

.my-card {
    font-size: 18px;
}

.section-1,
.section-2,
.section-3 {
    width: 100%;
    max-width: 300px;

}
</style>
  