<template>
<div>
    Show per page: 
    <select @change="setPerPage($event)">
        <option value="20">20</option>
        <option value="15">15</option>
        <option value="10">10</option>
        <option value="5">5</option>
    </select>
</div>
    
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "ShowPerPage",
    methods: mapActions([ "setPerPage"])
}
</script>

<style scoped>

select {
    margin-top: 20px;
    padding: 6px;
    border: #41b883;
}

</style>