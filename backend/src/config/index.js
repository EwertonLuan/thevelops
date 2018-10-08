const config = {};


/**Private key to JWT */
config.JWT_KEY = 'devdeck101_jwt_secret_key';

/**Link mongoose, if you will go use mongodb online or local put your URL here*/
config.MONGOOSE_KEY = 'mongodb://localhost:27017/thevelops-users';

/**Name token */
config.TOKEN = 'DD101_TOKEN';

/**Salt for JWT */
config.JWT_SALT = 10;

export default config; 