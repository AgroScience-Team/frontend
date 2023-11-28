<template>
    <div class="q-pa-md">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="text-h4">Посев</div>
                    <q-table
                        :columns="seedColums"
                        :rows="seedData"
                        row-key="id"
                        flat bordered
                        hide-bottom
                        header-class="custom-header-font"
                    />
            </div>
            <div class="col-12 col-md-6 q-pl-md">
                <div class="text-h4">Аэрофотоснимки</div>
                <div id="map"></div>
                <div class="text-h6">Дата загрузки фйла</div>
                <div class="text-center q-mt-lg"></div>
                <div class="text-h4 clickable-text" @click="fetchSoilComposition">Агрохимический состав почвы</div>
                <q-table
                    v-if="isTableVisible"
                    flat bordered
                    :rows="soilData"
                    :columns="soilColumns"
                    row-key="id"
                    hide-bottom
                />
                <q-table
                    v-if="isTableVisible"
                    flat bordered
                    :rows="soilData2"
                    :columns="soilColumns2"
                    row-key="id"
                    hide-bottom
                />
                <q-table
                    v-if="isTableVisible"
                    flat bordered
                    :rows="soilData3"
                    :columns="soilColumns3"
                    row-key="id"
                    hide-bottom
                />
            </div>
        </div>

        <div class="col-12 col-md-6" style="height: 400px;">
            
            <div class="text-h4">Влажность</div>
            <q-btn toogle-color="primary" @click="toggleHumidityChartType" label="Toggle" />
            <canvas id="humidity-chart"></canvas>

            <div class="text-center q-mt-lg"></div>

            <div class="text-h4">Ветер</div>
            <q-btn toogle-color="primary" @click="togglePressureChartType" label="Toggle" />
            <canvas id="pressure-chart"></canvas>

            <div class="text-center q-mt-lg"></div>
            
            <div class="text-h4">Температура</div>
            <q-btn toogle-color="primary" @click="toggleTemperatureChartType" label="Toggle" />                       
            <canvas id="temperature-chart"></canvas>
            
        </div>

        <div class="q-pa-md q-ml-auto">
            <input
                type="file"
                @change="handleFileUpload"
                style="display: none"
                ref="fileInput"
            />
            <q-btn @click="openFileInput" label="загружать" color="primary" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted, reactive, onBeforeUnmount } from 'vue';
import { Chart, registerables } from 'chart.js';
import { debounce } from 'lodash-es';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import axios from 'axios';

Chart.register(...registerables);

export default {
    name: 'Filed_info_page',
    setup() {

        const isTableVisible = ref(false);

        const isHumidityBarChart = ref(true);
        const isPressureBarChart = ref(true);
        const isTemperatureBarChart = ref(true);

        const humidityChart = ref(null);
        const pressureChart = ref(null);
        const temperatureChart = ref(null);


        //сulture
        const seedData = reactive([]);
        const seedColums = reactive([
            { name: 'start_date', required: true, label: 'Дата Начала', align: 'center', field: 'start_date'},
            { name: 'end_date', required: true, label: 'Дата Завершения', align: 'center', field: 'end_date'},
            { name: 'culture', required: true, label: 'Культура', align: 'center', field: 'culture'}
        ]);

        const humidityChartData = reactive({
            labels: [],
            datasets: [{
                label: 'Humidity', 
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        });

        const pressureChartData = reactive({
            labels: [],
            datasets: [{
                label: 'Pressure', 
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        });

        const temperatureChartData = reactive({
            labels: [],
            datasets: [{
                label: 'Temperature',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
                }
            ] 
        });

        const chartOptions = reactive({
            responsive: true,
            maintainAspectRatio: false
        });

        const initHumidityChart = () => {
            if (humidityChart.value) {
                humidityChart.value.destroy();
            }
            const context = document.getElementById('humidity-chart').getContext('2d');
            humidityChart.value = new Chart(context, {
                type: isHumidityBarChart.value ? 'bar' : 'line',
                data: humidityChartData,
                options: chartOptions
            });
        };

        const initPressureChart = () => {
            if (pressureChart.value) {
                pressureChart.value.destroy();
            }
            const context = document.getElementById('pressure-chart').getContext('2d');
            pressureChart.value = new Chart(context, {
                type: isPressureBarChart.value ? 'bar' : 'line',
                data: pressureChartData,
                options: chartOptions
            });
        };

        const initTemperatureChart = () => {
            if (temperatureChart.value) {
                temperatureChart.value.destroy();
            }
            const context = document.getElementById('temperature-chart').getContext('2d');
            temperatureChart.value = new Chart(context, {
                type: isTemperatureBarChart.value ? 'bar' : 'line',
                data: temperatureChartData,
                options: chartOptions
            });
        };

        const debouncedinitHumidityChart = debounce(initHumidityChart, 100);
        const debouncedinitPressureChart = debounce(initPressureChart, 100);
        const debouncedinitTemperatureChart = debounce(initTemperatureChart, 100);

        const toggleHumidityChartType = () => {
            isHumidityBarChart.value = !isHumidityBarChart.value;
            debouncedinitHumidityChart();
        }

        const togglePressureChartType = () => {
            isPressureBarChart.value = !isPressureBarChart.value;
            debouncedinitPressureChart();
        }


        const toggleTemperatureChartType = () => {
            isTemperatureBarChart.value = !isTemperatureBarChart.value;
            debouncedinitTemperatureChart();
        }

        //button showing chemical element
        const soilData = reactive([]);
        const soilData2 = reactive([]);
        const soilData3 = reactive([]);

        const soilColumns = reactive([
            { name: 'ph', label: 'ph', field: 'ph', align: 'center'},
            { name: 'sampleDate', label: 'sampleDate', field: 'sampleDate', align: 'center'},
            { name: 'organicMatter', label: 'organicMatter', field: 'organicMatter', align: 'center'},
            { name: 'mobileP', label: 'mobileP', field: 'mobileP', align: 'center'},
            { name: 'mobileK', label: 'mobileK', field: 'mobileK', align: 'center'},]);
        const soilColumns2 = reactive([
            { name: 'mobileS', label: 'mobileS', field: 'mobileS', align: 'center'},
            { name: 'nitrateN', label: 'nitrateN', field: 'nitrateN', align: 'center'},
            { name: 'ammoniumN', label: 'ammoniumN', field: 'ammoniumN', align: 'center'},
            { name: 'hydrolyticAcidity', label: 'hydrolyticAcidity', field: 'hydrolyticAcidity', align: 'center'},
            { name: 'caExchange', label: 'caExchange', field: 'caExchange', align: 'center'},]);
        const soilColumns3 = reactive([
            { name: 'mgExchange', label: 'mgExchange', field: 'mgExchange', align: 'center'},
            { name: 'b', label: 'b', field: 'b', align: 'center'},
            { name: 'co', label: 'co', field: 'co', align: 'center'},
            { name: 'mn', label: 'mn', field: 'mn', align: 'center'},
            { name: 'zn', label: 'zn', field: 'zn', align: 'center'},

        ]);

        const fetchSoilComposition = async () => {
            isTableVisible.value = !isTableVisible.value;
        };

        //map
        const map = ref(null);

        onMounted(async () => {

            initHumidityChart();
            initPressureChart();
            initTemperatureChart();

            // Создание карты
            map.value = L.map("map").setView([59.420161, 30.01832], 15);

            // Добавление тайлового слоя
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "Map data &copy; OpenStreetMap contributors",
            }).addTo(map.value);


            const response = await axios.get('/api/v1/fields?fieldId=1', {
                    headers: {
                        'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDEwOTIwNzAsImV4cCI6MTcwMTA5NTY3MCwic3ViIjoiMSIsInJvbGUiOiJvcmdhbml6YXRpb24iLCJlbWFpbCI6InRlc3RlbWFpbCIsIm9yZyI6MX0.czKkTjgG5Mc52t_qjI0H4pEmynntJbQG5mFJOmbTsgs'}`,
                        'Content-Type': 'application/json'
                    }
                });
                const data = response.data;
                console.log(response.data);


            try {
                if (data) {

                    humidityChartData.labels = [];
                    humidityChartData.datasets[0].data = [];

                    pressureChartData.labels = [];
                    pressureChartData.datasets[0].data = [];

                    temperatureChartData.labels = [];
                    temperatureChartData.datasets[0].data = [];

                    seedData.push({
                        start_date: data.cropRotation.startDate,
                        end_date: data.cropRotation.endDate,
                        culture: data.cropRotation.crop.name
                    })
                    soilData.push({
                        ph: data.soil.ph,
                        sampleDate: data.soil.sampleDate,
                        organicMatter: data.soil.organicMatter,
                        mobileP: data.soil.mobileP,
                        mobileK: data.soil.mobileK,
                    })
                    soilData2.push(
                        {mobileS: data.soil.mobileS,
                        nitrateN: data.soil.nitrateN,
                        ammoniumN: data.soil.ammoniumN,
                        hydrolyticAcidity: data.soil.hydrolyticAcidity,
                        caExchange: data.soil.caExchange,
                    })
                    soilData3.push(
                        {mgExchange: data.soil.mgExchange,
                        b: data.soil.b,
                        co: data.soil.co,
                        mn: data.soil.mn,
                        zn: data.soil.zn           
                    })

                    humidityChartData.labels = data.meteoList.map(meteo => meteo.day);
                    humidityChartData.datasets[0].data = data.meteoList.map(meteo => meteo.humidity);

                    pressureChartData.labels = data.meteoList.map(meteo => meteo.day);
                    pressureChartData.datasets[0].data = data.meteoList.map(meteo => meteo.pressure);

                    temperatureChartData.labels = data.meteoList.map(meteo => meteo.day);
                    temperatureChartData.datasets[0].data = data.meteoList.map(meteo => meteo.temperature);
                    // initTemperatureChart();

                    data.geom.coordinates.forEach(coord => {
                        L.marker([coord.latitude, coord.longitude]).addTo(map.value)
                        .bindPopup(`<strong>${data.cropRotation.crop.name}</strong><br>${data.cropRotation.description}`);
                    })};
            } catch (error) {
                console.error('Wrong Api', error);
            }
        });

        onBeforeUnmount(() => {
                if (humidityChart.value) {
                    humidityChart.value.destroy();
                }
                if (pressureChart.value) {
                    pressureChart.value.destroy();
                }
                if (temperatureChart.value) {
                    temperatureChart.value.destroy();
                }
            })

        return { 
            map,
            seedData,
            seedColums,
            humidityChartData,
            pressureChartData,
            temperatureChartData,
            chartOptions,
            humidityChart,
            pressureChart,
            temperatureChart,
            initHumidityChart,
            initPressureChart,
            initTemperatureChart,
            toggleHumidityChartType,
            togglePressureChartType,
            toggleTemperatureChartType,
            soilColumns,
            soilData,
            soilColumns2,
            soilData2,
            soilColumns3,
            soilData3,
            fetchSoilComposition,
            isTableVisible,
            debouncedinitHumidityChart,
            debouncedinitPressureChart,
            debouncedinitTemperatureChart
        };
    },

    methods:{
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        console.log("loding file:", selectedFile);
      }
    },
  },
}
</script>

<style>
#map {
    height: 200px;
    width: 600px;
}

.q-table th {
    font-size: 17px;
}

.clickable-text {
    z-index:10;
    position: relative;
    cursor:pointer;
    color: black;
    text-decoration: underline;
}

.clickable-text:hover {
    color: darkblue;
}

.row {
    display:flex;
    flex-wrap: wrap;
}

.q-btn {
  margin-right: 10px;
}

input[type="file"] {
  display: none;
}

</style>