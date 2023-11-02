<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <title-info title="Работник"/>
        <div class="q-pa-md">
            <q-table
                class="differnet-color"
                flat bordered
                :rows="information"
                :columns="columns"
                row-key="label"
                v-model:pagination="pagination"
                hide-header
                hide-bottom
            />
        </div>
    </q-page-container>
  </q-layout>
</template>
  
<script>
import TitleInfo from 'components/Title_info.vue';

export default {
  name: 'TitleWorker',
  components: {
    TitleInfo
  },
  data() {
    return {
      information: [
        { label: 'ID', value: '1' },
        { label: 'User ID', value: '13'},
        { label: 'Organization ID', value: '343'},
        { label: 'Date of birth', value: '2023-11-01'},
        { label: 'Name', value: 'John'},
        { label: 'Surname', value: 'Doe'},
        { label: 'Patronymic', value: 'ABCDEFG'},
        { label: 'Date of birth', value: '2023-11-01'},
        { label: 'Created at', value: '2023-11-01'},
      ],
      columns: [
        { name: 'label', 
          required: true, 
          label: 'Keyword', 
          align: 'center', 
          field: 'label', 
          sortable: false,
          style: 'width: 500px'
        },
        { name: 'value', 
          label: 'value', 
          align: 'left', 
          field: 'value', 
          sortable: false 
        },
      ],
      pagination: {
        rowsPerPage: 10
      }
    };
  },
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
