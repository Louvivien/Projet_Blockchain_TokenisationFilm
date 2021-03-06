


// ===========================================================================
function test_userManager(userManager) {
    userManager.getNumberUser(function(error,result) {
        console.log("numberUser:");
        console.log(result.c[0]);

        userManager.getByIndex_userIndexEmails(Math.round(Math.random()*(result.c[0]-1)), function(error,result){
            if(!error){
                var userEmail_return = result;
                console.log("userEmail_return:"+userEmail_return);
            } else {
                console.log("error_getByIndex_userIndexEmails:");
                console.log(error);
            }
            
            console.log("---------------------------------------");

            userManager.getUser(userEmail_return, "a123", function(error, result) {
                if(!error){
                    console.log("result_getUser:"+userEmail_return+"->");
                    console.log(result);
                } else {
                    console.log("error_getUser:"+userEmail_return+"->");
                    console.log(error);
                }
            });
        });
    });        
}
function test_insertUser(userManager) {
    userManager.insertUser("1.3@gmail.com","a123", "0x4b0897b0513fdc7c541b6d9d7e929c4e5364d200","test_name","customer","50", 
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
    userManager.deleteUser("1.3@gmail.com","a123", 
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
function test_tokenManager(tokenManager) {
    tokenManager.getNumberToken(function(error,result) {
        console.log("numberToken:");
        console.log(result.c[0]);

        tokenManager.getByIndex_filmIndexes(Math.round(Math.random()*(result.c[0]-1)), function(error,result){
            if(!error){
                var filmIndex_return = result;
                console.log("filmIndex_return:"+filmIndex_return);
            } else {
                console.log("error_getByIndex_filmIndexes:");
                console.log(error);
            }

            tokenManager.getToken(filmIndex_return, function(error, result) {
                if(!error){
                    console.log("result_getToken:"+filmIndex_return+"->");
                    console.log(result);
                } else {
                    console.log("error_getToken:"+filmIndex_return+"->");
                    console.log(error);
                }
            });
        });
    });
}



// =====================================================================================
// test_transactionBetween two acounts
function test_transfer(account1, account2) {
    console.log("defaultAccount_from:");
    console.log(account1);
    console.log("account2_to")
    console.log(account2);
    var message = {
        from: account1, to:account2, 
        value: web3.toWei(1, 'ether'), 
        gas: 6000000
    };
    web3.eth.sendTransaction(message, (err, res) => {
        var output = "";
        if (!err) {
            output += res;
        } else {
            output = "Error";
        }
    });
}