# feel-free-depilacao

## Description

This is a project from 2017, a static website developed for a local waxing business in Rio de Janeiro, Brasil. For that reason the website is in Portuguese.
This project was built with JQuery and Bootstrap, but custom Javascript, LESS and CSS were also developed to match the client's needs.

## Build

Open `index.htm` using the browser of your preference. Being a static website, there is no need to setup a web server.

## Notes

To properly enable the Google Maps preview (out of development mode) in the main screen, replace the following content in `index.htm`:

```javascript
<script async defer
    src="https://maps.googleapis.com/maps/api/js?callback=initMap">
</script>
```

for the following:

```javascript
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=INSERT_GOOGLE_MAPS_API_KEY_HERE&callback=initMap">
</script>
```

Make sure to replace the string `INSERT_GOOGLE_MAPS_API_KEY_HERE` for your Google Maps API key.

## Live version

You can check a live version of it [here](https://felyppers.github.io/feel-free-depilacao)