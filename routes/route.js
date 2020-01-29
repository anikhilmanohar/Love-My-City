exports.home=function(req, res) {
    res.render('home',{
        heading:'Welcome to home page',
        title:'Home'
    });
}
exports.city=function(req, res) {
    var name=req.params.city;
    var title, heading;
    var imagecount=2;
    if(name=='Pune' || name=="pune") {
        heading="Welcome to Pune";
        title="pune";
        imagecount = 3;
    } else if(name=='Mumbai' || name=='mumbai') {
        heading="Welcome to Mumbai";
        title="mumbai";
        imagecount = 3;
    } else {
        heading="Welcome to Pune";
        title="pune";
        imagecount = 3;
    }
    res.render('city',{
        heading:heading,
        title:title,
        imagecount:imagecount
    });
}
