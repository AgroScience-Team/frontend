<template>
          <div class="q-pa-md">
              <q-table
                  class="my-sticky-colum-table"
                  flat bordered
                  :rows="organizationData"
                  :columns="organizationColumns"
                  raw-key="id"
                  v-model:pagination="pagination"
                  hide-bottom
                  hide-header
              />
          </div>
  </template>
      
  <script>
  import { onMounted, reactive } from 'vue';
  import axios from 'axios' ;

  export default {
    name: 'Organization_info_page',
    setup() {
      const organizationData = reactive([]);
      const organizationColumns = reactive([
          { name: 'key',  field: 'key', align: 'center', style: 'width: 500px' },
          { name: 'value', field: 'value', align: 'left' }
      ]);

      onMounted(async () => {
        const response = await axios.get('http://localhost:8080/api/profiles/organizations?user_id=1', {
          headers: {
                        'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDEwOTIwNzAsImV4cCI6MTcwMTA5NTY3MCwic3ViIjoiMSIsInJvbGUiOiJvcmdhbml6YXRpb24iLCJlbWFpbCI6InRlc3RlbWFpbCIsIm9yZyI6MX0.czKkTjgG5Mc52t_qjI0H4pEmynntJbQG5mFJOmbTsgs'}`,
                        'Content-Type': 'application/json'
                    }
        });
        const data = response.data;
        console.log(response.data);

        try {
            if(data) {
              organizationData.push(
                {key: 'ID', value: data.id},
                {key: 'User ID', value: data.user_id},
                {key: 'Name', value: data.name},
                {key: 'Description', value: data.description},
                {key: 'City', value: data.city},
                {key: 'Inn', value: data.inn},
                {key: 'Phone Number', value: data.phone_number},
                {key: 'Website', value: data.website},
              )
            }
          } catch (error) {
            console.error('Wrong Api', error);
          };
      });
    return {
        organizationData,
        organizationColumns,
        pagination: {
          rowsPerPage: 10
        }
      } 
    }
  }

  </script>
  
  <style lang="scss">
  .my-sticky-colum-table {
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
  