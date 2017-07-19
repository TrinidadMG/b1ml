var namespace = 'b1ml'
var newImgDir = './uploads/new/'
var awsImgDir = './uploads/aws/'
var encoding = 'utf8'
var faceBucket ='auth-faces'
var faceMatch = 95 //%s Threshold


module.exports = {
    //Puts file in a given bucket
    namespace : function (){
                    return namespace;
                },
            
    newImgDir:  function(){
                    return newImgDir;
                },
    
    awsImgDir: function(){
                    return awsImgDir;
                },
    
    encoding: function (){
                    return encoding;
                },

    userNs: function(user){
                    return namespace+"-"+user;
                },
    faceBucket: function(){
                    return namespace+ "-"+faceBucket;            
                },
    faceMatch: function(){
                    return faceMatch;            
                }
}