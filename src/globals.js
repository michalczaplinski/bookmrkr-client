let GLOBALS = {};

if (__DEV__) {
  GLOBALS.api_path = 'http://bookmrkr.dev/api/bookmarks';
  GLOBALS.image_server_path = 'http://fake-images-please.dev'
} else {
  GLOBALS.api_path =  'production_path';
  GLOBALS.image_server_path =  'production_path';
}

export default GLOBALS;
