const express = require("express")
const router = express.Router()
var AWS = require('aws-sdk');

//default region
AWS.config.update({ region: 'us-east-1' });

//s3 object
s3 = new AWS.S3();

// listing all the buckets in the user
router.get('/list', async (req, res) => {
    s3.listBuckets(function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.Buckets);
            res.send(data.Buckets)
        }
    });
})

// creating new bucket
router.post('/create', (req, res) => {
    var bucketParams = {
        Bucket: `${req.body.name}`
    };

    // call S3 to create the bucket
    s3.createBucket(bucketParams, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
            res.send(data)
        }
    });
});


module.exports = router

