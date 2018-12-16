
// userManager
function test_userManager(userManager) {
    userManager.getNumberUser(function(error,result) {
        console.log("numberUser:");
        console.log(result.c[0]);

        userManager.getByIndex_userIndexAddresses(Math.round(Math.random()*(result.c[0]-1)), function(error,result){
            if(!error){
                var userAddress_return = result;
                console.log("userAddress_return:"+userAddress_return);
            } else {
                console.log("error_getByIndex_userIndexAddresses:");
                console.log(error);
            }
            
            console.log("---------------------------------------");

            userManager.getUser(userAddress_return, "a123", function(error, result) {
                if(!error){
                    console.log("result_getUser:"+userAddress_return+"->");
                    console.log(result);
                } else {
                    console.log("error_getUser:"+userAddress_return+"->");
                    console.log(error);
                }
            });
        });
    });        
}
function test_insertUser(userManager) {
    userManager.insertUser("0x330b4dADd8a960C358cF49bbB8401eA720270D43","123","test_name","customer","50", 
        {
            "from": web3.eth.defaultAccount, 
            'gas': 6000000
        }, function(error, result) {
            if(!error){
                console.log("insertUser:");
                console.log(result);
            } else {
                console.log("error_insertUser:");
                console.log(error);
            }
        });
}
function test_deleteUser(userManager) {
    userManager.deleteUser("0x330b4dADd8a960C358cF49bbB8401eA720270D43","123", 
        {
            "from": web3.eth.defaultAccount, 
            'gas': 6000000
        }
        ,
        function(error, result) {
            if(!error){
                    console.log("deleteUser:");
                    console.log(result);
                } else {
                    console.log("error_deleteUser:");
                    console.log(error);
                }
        });
}


// ===========================================================================


// filmManager
function test_filmManager(filmManager) {
    filmManager.getNumberFilm(function(error, result) {
        console.log("numberFilm:");
        console.log(result.c[0]);

        filmManager.getByIndex_filmIndexes(Math.round(Math.random()*(result.c[0]-1)), function(error,result){
            if(!error){
                var filmIndex_return = result;
                console.log("filmIndex_return:"+filmIndex_return);
            } else {
                console.log("error_getByIndex_filmIndexes:");
                console.log(error);
            }

            filmManager.getFilm(filmIndex_return, function(error, result) {
                if(!error){
                    console.log("result_getFilm:"+filmIndex_return+"->");
                    console.log(result);
                } else {
                    console.log("error_getFilm:"+filmIndex_return+"->");
                    console.log(error);
                }

                filmManager.getFilmInfo_published_ico_producer(filmIndex_return, function(error, result) {
                    if(!error){
                        console.log("result_getFilmInfo_published_ico_producer:"+filmIndex_return+"->");
                        console.log(result);
                    } else {
                        console.log("error_getFilmInfo_published_ico_producer:"+filmIndex_return+"->");
                        console.log(error);
                    }
                });
            });
        });
    });
}
function test_insertFilm(filmManager) {
    filmManager.insertFilm("film_6", "filmDescription_6", "imageUrl.com_6", "url.com_6", 15, 0, 0, true, false, "0x583031d1113ad414f02576bd6afabfb302140225",
        {
            "from": web3.eth.defaultAccount, 
            'gas': 6000000
        }, function(error, result) {
            if(!error){
                    console.log("insertFilm:");
                    console.log(result);
                } else {
                    console.log("error_insertFilm:");
                    console.log(error);
                }
        });
}
function test_deleteFilm(filmManager, index_filmIndexes) {
    filmManager.getByIndex_filmIndexes(index_filmIndexes, function(error, result) {
        if(!error){
            console.log("delete FilmIndex:");
            console.log(result.c[0]);
            
            filmManager.deleteFilm(result.c[0], 
            {
                "from": web3.eth.defaultAccount, 
                'gas': 6000000
            }, function(error, result) {
                if(!error){
                        console.log("deleteFilm:");
                        console.log(result);
                    } else {
                        console.log("error_deleteFilm:");
                        console.log(error);
                    }
            });

        } else {
            console.log("error_deleteFilm:");
            console.log(error);
        }
    });
    // 
}



// ===========================================================================



// function test_tokenManager(tokenManager) {
//     tokenManager.getNumberToken(function(error,result) {
//         console.log("numberToken:");
//         console.log(result.c[0]);

//         tokenManager.getByIndex_filmIndexes(Math.round(Math.random()*(result.c[0]-1)), function(error,result){
//             if(!error){
//                 var filmIndex_return = result;
//                 console.log("filmIndex_return:"+filmIndex_return);
//             } else {
//                 console.log("error_getByIndex_filmIndexes:");
//                 console.log(error);
//             }

//             tokenManager.getToken(filmIndex_return, function(error, result) {
//                 if(!error){
//                     console.log("result_getToken:"+filmIndex_return+"->");
//                     console.log(result);
//                 } else {
//                     console.log("error_getToken:"+filmIndex_return+"->");
//                     console.log(error);
//                 }
//             });
//         });
//     });
// }