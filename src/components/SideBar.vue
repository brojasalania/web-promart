<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <img class="img-auto" src="../assets/logo-promart.png" alt="" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" >
          <b-nav vertical  class="align-center">
          <!--  <b-nav-item :to="{ name: 'Home' }">
              Dashboard
            </b-nav-item> -->
            <b-nav-item :to="{ name: 'Home' }">
              Home
            </b-nav-item>
            <b-nav-item :to="{ name: 'Dashboard' }">
              Dashboard
            </b-nav-item>
          
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

export default {
  name: "SideBar",

};
</script>
<style scoped>
.card-body {
  padding: 0;
}
.d-flex {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  flex-direction: column !important;
}
.padding-user {
  padding: 0.5rem 1rem;
}
.float-right {
  float: right;
  color: white;
}
.btn-transparent {
  background: transparent !important;
  border: none !important;
}
.btn-transparent:active {
  background: #414141 !important;
}
.btn-transparent:focus {
  background: #414141 !important;
}
.bg-darkblack {
  background: #414141;
}
.width-auto {
  width: 100%;
}
.router-link-active {
  color: rgb(254, 123, 1) !important;
  border-bottom: 1px solid rgb(254, 123, 1);
  font-weight: bold;
}
.color-white {
  color: white;
}
.list-style-none {
  list-style: none;
  margin-left: 0 !important;
  padding-left: 0 !important;
}
.MuiDrawer-paper {
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 15;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  width: 240px;
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  flex-shrink: 0;
  white-space: nowrap;
}
.makeStyles-toolbar-9 {
  display: flex;
  padding: 0px 8px;
  min-height: 68px;
  align-items: center;
  justify-content: center;
}

.bg-black {
  background: #383838;
}
.img-auto {
  width: 100%;
  height: auto;
  padding: 11px;
}
.display-inline-flex {
  display: inline-flex;
}
.padding-two-left {
  padding-left: 5px;
}
.float-left {
  text-align: left;
}
.nav-link {
  color: black;
  padding: 0.9rem 1rem;
}
</style>
