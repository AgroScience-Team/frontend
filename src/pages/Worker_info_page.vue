<template>
          <div class="q-pa-md">
              <q-table
                  class="differnet-color"
                  flat bordered
                  :rows="workerData"
                  :columns="workerColumns"
                  row-key="id"
                  v-model:pagination="pagination"
                  hide-header
                  hide-bottom
              />
          </div>
  </template>
    
  <script>
  import { onMounted, reactive } from 'vue';
  import axios from 'axios';

  export default {
    name: 'Worker_info_page',
    setup() {
      const workerData = reactive([]);
      const workerColumns = reactive([
        { name: 'key', field: 'key', align: 'center', style: 'width: 500px'},
        { name: 'value', field: 'value', align: 'left'}
      ]);

      onMounted(async () => {
        const response = await axios.get('/api/profiles/workers?user_id=3', {
          headers: {
                        'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDA3NDM0NzMsImV4cCI6MTcwMDc0NzA3Mywic3ViIjoiMiIsInJvbGUiOiJvcmdhbml6YXRpb24iLCJlbWFpbCI6IjEyMyIsIm9yZyI6Mn0.l6llNZJHN8g3e9c4FZB7ziQPD02UyJTSIqqArziP0s0'}`,
                        'Content-Type': 'application/json'
                    }
        });
        const data = response.data;
        console.log(response.data);

        try {
          if(data) {
            workerData.push(
              { key: 'ID', value: data.id },
              { key: 'User ID', value: data.user_id },
              { key: 'Name', value: data.name },
              { key: 'Surname', value: data.surname },
              { key: 'Patronymic', value: data.patronymic },
              { key: 'Date of birth', value: data.date_of_birth },
              { key: 'Phone Number', value: data.phone_number },
            )
          }
        } catch (error) {
          console.error('Wrong Api', error);
        };
      });
    return {
        workerData,
        workerColumns,
        pagination: {
          rowsPerPage: 10
        }
      }
    }
  }
  </script>
  
  <style lang="scss">
  .differnet-color {
    max-width: 90%;
    max-width: 85%;
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 1234px;
    //th already hide
    thead tr:first-child th:first-child {
      background-color: #D9D9D9;
    }
    thead tr:first-child th:nth-child(2) {
      background-color: #EBEBEB;
    } 
    td:first-child {
      background-color: #D9D9D9;
    }
    td:nth-child(2) {
      background-color: #EBEBEB;
    }
    th:first-child,
    td:first-child {
      position: sticky;
      left: 0;
      z-index: 1;
    }
    th:nth-child(2),
    td:nth-child(2) {
      position: sticky;
      left: 500px;
      z-index: 1;
    }
  }
  
  .q-table td {
    font-size: 25px !important;
  }
  </style>
  