<template>
    <q-layout view="hHh lpR fFf">
        <q-page-container>
    <q-header reveal class="bg-brand text-dark">
      <q-toolbar>
        <q-toolbar-title class="custom-title" style="padding-left: 20px;">
            Севооборот
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <div class="q-pa-md">
    <q-table
      class="virtscroll-table"
      virtual-scroll
      flat bordered
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
      column-key="label"
      :rows="rows"
      :columns="columns"
    />
  </div>
  </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'


const columns = [
          { name: 'id', 
            label: 'ID', 
            required: true, 
            align: 'center', 
            field: 'id', 
            sortable: true },
          { name: 'filed_id', label: 'Filed ID', align: 'center', field: 'filed_id', sortable: true },
          { name: 'crop_id', label: 'Crop ID', align: 'center', field: 'crop_id' },
          { name: 'start_time', label: 'Start Time', align: 'center', field: 'start_time' },
          { name: 'end_time', label: 'End Time', align: 'center', field: 'end_time' },
          { name: 'description', label: 'Description', align: 'center', field: 'description', sortable: true },

        ]

const seed = [
  { 
    id: 1, 
    filed_id : 78, 
    crop_id: 12, 
    start_time: '2013-04-05',
    end_time: '2013-04-07',
    description: 'Ice cream'
  },
  { 
    id: 12, 
    filed_id : 178, 
    crop_id: 142, 
    start_time: '2013-01-05',
    end_time: '2013-04-07',
    description: 'Ice cream'
  },
  { 
    id: 2, 
    filed_id : 8, 
    crop_id: 10, 
    start_time: '2013-04-05',
    end_time: '2013-08-03',
    description: 'Ice cream'
  },
  { 
    id: 7, 
    filed_id : 48, 
    crop_id: 1, 
    start_time: '2011-04-05',
    end_time: '2013-08-07',
    description: 'Ice cream'
  },
  { 
    id: 7, 
    filed_id : 721, 
    crop_id: 17, 
    start_time: '2013-04-05',
    end_time: '2013-04-07',
    description: 'Ice cream'
  }
]

// we generate lots of rows here
let rows = []
for (let i = 0; i < 1000; i++) {
    rows = rows.concat([ ...seed ].map(r => ({ ...r })));
}
rows.forEach((row, index) => {
  row.index = index
})
export default {
  setup () {
    return {
      columns,
      rows,

      pagination: ref({
        rowsPerPage: 1000
      })
    }
  }
}
</script>

<style lang="scss">
.bg-brand {
    background-color: white;
}
.custom-title {
    font-size: 64px !important;
}
.virtscroll-table {

  max-width: 90%;
  max-width: 85%;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 1234px;
}
.q-table th {
    font-size: 30px !important;
}
.q-table td {
    font-size: 20px !important;
}
</style>
