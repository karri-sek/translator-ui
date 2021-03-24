<template>
    <form>
        <form class="input-group">
            <input v-model="language" type="text" class="form-control form-control-lg mr-2" id="search"  placeholder="Enter Language to look for translator">
            <button @click="search" type="button" class="btn btn-primary">Search</button>
        </form>
  </form>
</template>

<script>
import searchTranslators from "../../services/searchService";
export default {
  name: "SearchBar",
  components: {
  },
  methods: {
    search:  async function () {
    const response = await searchTranslators(this);
    this.$store.dispatch("translatorResults", { translatorResults: response.data });
    if (response.status == 200) {
        this.$router.push({name: "results", params: { language: this.language}});
      }
    },
  },
};
</script>
