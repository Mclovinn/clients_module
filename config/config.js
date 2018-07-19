const config = {
    port: process.env.PORT || 2000,
    db: process.env.MONGOLAB_URI || "mongodb://admin:admin123@ds141631.mlab.com:41631/heroku_6tjc2kr6",
    test_port: 2001,
    test_db: "mongodb://admin:admin123@ds141631.mlab.com:41631/heroku_6tjc2kr6_test"
}

module.exports = config;