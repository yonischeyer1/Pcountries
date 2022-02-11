<template>
  <div class="app-container documentation-container">
    <l-map
      :minZoom="zoom"
      :zoom="zoom"
      :center="center"
      style="height: 600px; width: 80%px"
    >
      <l-tile-layer
        :noWrap="true"
        :url="url"
        :attribution="attribution"
      />
      <!-- Create image icon (icon) from l-icon tag -->
      <l-marker v-for="country in list" :key="country.id" :lat-lng="[country.capitalLatitude, country.capitalLongitude]">
       <l-popup>
        <h3>{{country.countryName}} </h3> 
         country capital : {{country.capitalName}}<br>   
         description : {{country.description}}
         </l-popup>     
        <l-icon
          :icon-size="[25,25]"
          :icon-url="getFlagUrl(country.countryCode)"
        />
      </l-marker>
      <!-- Create HTML icon (divIcon) by providing content inside the l-icon tag -->

    </l-map>
  </div>
</template>

<script>
import { fetchAllCountries } from '@/api/country'
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import { latLng, icon, latLngBounds, map } from "leaflet";

export default {
  name: "Icon",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup
  },
  mounted() {
    this.getList()
  },
  data() {
    return {
      list:[],
      listQuery: {
        page: 1,
        size: 20,
      },
      tooltipOptions : {interactive:true},
      zoom: 3,
      center: latLng(0,0),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      icon: icon({
        iconUrl: "static/images/baseball-marker.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      staticAnchor: [16, 37],
      iconSize: 64
    };
  },
  computed: {
    dynamicSize() {
      return [25,25];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  methods: {
    getFlagUrl (countryCode) {
      if(!countryCode){
        return "";
      }
      return `https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/${countryCode.toLowerCase()}.svg`
    },
    getList() {
      this.listLoading = true
      fetchAllCountries().then(response => {
        this.list = response
      }).catch((err)=>{
        console.log(err);
      })
    },
  }
};

</script>

<style lang="scss" scoped>

.app-container {
  display: flex;
  justify-content: center;
}

.someExtraClass {
  background-color: aqua;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 0 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
</style>
