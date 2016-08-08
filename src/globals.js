let GLOBALS = {};

if (__DEV__) {
  GLOBALS.api_path = 'http://json-server-bookmrkr.dev/api';
  GLOBALS.image_server_path = 'http://fake-images-please.dev';
  GLOBALS.website_path = 'http://bookmrkr-website.dev';
} else {
  GLOBALS.api_path = 'https://bookmrkr.io/api';
  GLOBALS.image_server_path =  'production_path';
  GLOBALS.website_path = 'https://bookmrkr.io';
}

export default GLOBALS;
