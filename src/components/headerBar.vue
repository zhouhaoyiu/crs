<template>
  <header class="header" id="header">
    <img
      @click="redirect"
      id="header-img"
      src="../static/header-logo.png"
      alt="Ciphertext retrieval system logo"
    />
    <nav id="nav-bar">
      <h3>Keys History</h3>
    </nav>
  </header>
</template>
<style>
#header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4.6em;
  padding: 0.5em;
  background: rgb(8, 25, 33);

  color: white;
}
#header > img {
  cursor: pointer;
  margin: 0.7em 40em 0.5em 0;
  width: 27em;
  height: 2.6em;
}
#nav-bar {
  width: 27em;
  padding-left: 250px;
  min-width: 30em;
  max-height: 25em;
  background-color: rgb(8, 25, 33);
}
#nav-bar h3 {
  float: left;
  list-style: none;
  padding: 0.5em 1em 0 0;
}
</style>
<script>
export default {
  name: "headerBar",
  methods: {
    redirect() {
      this.$router.push("/");
    },
  },
};
</script>