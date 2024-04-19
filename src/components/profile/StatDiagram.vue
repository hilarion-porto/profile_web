<script>
export default {
  name: "MapPolygon",
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    paths: {
      type: Array,
      required: true
    }
  },

  watch: {
    async paths(newPaths) {
      const { Polygon } = this.google.maps;

      let polygon = new Polygon({
        paths: newPaths,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#FF0000',
        fillOpacity: 0.35,

      });
      polygon.setMap(this.map);
    }
  },

  mounted() {
    const { Polygon } = this.google.maps;

    new Polygon({
      paths: this.paths,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: this.map,
    });
  },

  render() { }
}
</script>


<template>
  <div>
    <map-loader :map-config="mapConfig">
      <template slot-scope="{google, map}">
        <map-polygon :google="google" :map="map" :paths="zone">
        </map-polygon>
      </template>
    </map-loader>
  </div>
</template>

<style scoped>

</style>