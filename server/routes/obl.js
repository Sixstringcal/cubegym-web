var express = require('express');
var router = express.Router();



router.post('/getOBL', async (req, res) => {
    //const {} = req.body;
    var algorithms = [new Algorithm('0,-1/3,0/4,1/-4,-1/-3,0/0,1', 'pure 1', 'pure 1'), new Algorithm('1,0/-1,-1/-3,3/1,1/-1,0', '+', '+'), new Algorithm('-2,0/2,2/0,-2', 'pure two', 'pure two')];
    res.json({ algorithms });
    console.log('hit');
}
);

var Algorithm = function (alg, uSubset, dSubset) {
    this.alg = alg;
    this.uSubset = uSubset;
    this.dSubset = dSubset;
};

module.exports = router;