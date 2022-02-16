var express = require('express');
var router = express.Router();
router.get('/:name/:id',function(req,res){
    res.send('GET is running with this name '+ req.params.name +' and id '+ req.params.id);
})

module.exports = router;