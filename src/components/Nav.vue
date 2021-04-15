<template>
  <div>
    <header class="width-auto-sb no-printme "  >
      <nav class="display-flex bg-orange">
        <div class="div-flex">
          <b-nav class="flex-direction">
            <b-button v-b-toggle.sidebar-backdrop>
              <font-awesome-icon icon="bars" class="color-white"/>
            </b-button>
            
            <b-nav-item class="color-white font-weight-500 padding-two-left"
              >Servicios</b-nav-item
            >
          </b-nav>
          <b-nav class="ml-auto">
         
            <b-nav-item>
              <b-dropdown class="drop">
                <template v-slot:button-content>
                  <font-awesome-icon icon="user" />
                  Bryan Rojas
                </template>
                <b-dropdown-item 
                  >Cerrar Sesión</b-dropdown-item
                >
                
              </b-dropdown>
            </b-nav-item>
          </b-nav>
        </div>
      </nav>
    </header>
    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      backdrop-variant="dark"
      backdrop
      shadow
      no-header
      bg-variant="white"
    >
     <SideBar />
    </b-sidebar>
   
  </div>
</template>
<script>

import SideBar from "./SideBar";


export default {
  name: "Nav",
  data() {
    return {
      val: true,
    };
  },
  components: {
    SideBar,
  },
 
  methods: {
    
  },
};
</script>
<style scoped>
.padding-two-left{padding-left: 15px;}
@media (max-width: 600px) {
  .hid-xs {
    display: none;
  }
  .xs-hidden {
    display: none;
  }
}
.btn-secondary{background: transparent !important;border-color: transparent !important;}
::v-deep .drop .btn-secondary {
  background: transparent;
  padding: 0;
  border-color: transparent;
}
::v-deep .drop .btn-secondary:hover {
  background: transparent;
  border-color: transparent;
}
.color-white {
  color: white;
}
.makeStyles-appBarShift-3 {
  width: calc(100% - 240px);
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,
    margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  margin-left: 240px;
  z-index: 15;
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
}
.MuiDrawer-docked {
  flex: 0 0 auto;
}
.makeStyles-drawer-6 {
  width: 240px;
  flex-shrink: 0;
  white-space: nowrap;
}
.makeStyles-drawerOpen-7 {
  width: 240px;
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
}
.display-flex {
  display: flex !important;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
.div-flex {
  display: flex !important;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
}
.flex-direction {
  flex-direction: row;
  margin-right: auto !important;
  display: flex;

  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.bg-orange {
  background: rgb(254, 123, 1) !important;
}
.nav-link {
  color: white !important;
}
.font-weight-500 {
  font-weight: 500;
}
.width-auto-sb {
  width: 100%;
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,
    margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  margin-left: 0;
  z-index: 15;
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
}
</style>
